# CARLOS OS — AGENTS CONTEXT
# Para futuros agentes que trabajan en /opt/carlos-os/
# Verificado: 2026-09-01 | Fuente de verdad local para este sistema

## QUÉ ES ESTO

`carlos-os` es el servidor backend de Health Growth. Es un monolito Node.js (~5900 líneas en `scripts/dashboard_server.js`) que:
- Recibe webhooks de WhatsApp (Cloud API) e Instagram (via n8n)
- Procesa mensajes con agentes AI (ROKITO para Patitas, otros ecosistemas)
- Gestiona un CRM basado en archivos JSON
- Expone una API REST con autenticación RBAC
- Envía notificaciones via Telegram

**NO ES** un servidor Next.js ni tiene frontend propio. El frontend está en Lovable (React).

---

## INFRAESTRUCTURA

| Componente | Valor |
|-----------|-------|
| VM | `openclaw-bunker` — GCP southamerica-west1-a — e2-standard-2 |
| Proyecto GCP | `bunkermaestro-494818` |
| SSH | `gcloud compute ssh luisvillanuevaandrades_gmail_com@openclaw-bunker --project=bunkermaestro-494818 --zone=southamerica-west1-a --tunnel-through-iap` |
| Proceso | `carlos-os.service` (systemd) → Node.js en puerto 3000 |
| Dominio público | `api.healthgrowth.cl` via Cloudflare Tunnel (`cloudflared-carlos-os.service`) |
| Root code | `/opt/carlos-os/` |
| Config | `/opt/carlos-os/.env.production` |

**n8n** (segunda VM):
| Componente | Valor |
|-----------|-------|
| VM | `n8n-patitas` — GCP southamerica-east1-c |
| SSH | `gcloud compute ssh luisvillanuevaandrades_gmail_com@n8n-patitas --project=bunkermaestro-494818 --zone=southamerica-east1-c --tunnel-through-iap` |
| Proceso | Docker: `n8n-n8n-1` + `n8n-caddy-1` |
| DB | SQLite: `/home/luisvillanuevaandrades/.n8n/database.sqlite` |
| Dominio | `n8n.healthgrowth.cl` (DNS no configurado → acceso solo interno) |

---

## ESTRUCTURA DE ARCHIVOS CRÍTICOS

```
/opt/carlos-os/
├── scripts/
│   └── dashboard_server.js        ← MONOLITO ~5900 líneas (API + webhooks + auth)
├── src/
│   ├── channels/
│   │   └── channel_event_pipeline.js   ← normaliza eventos WA/IG
│   ├── ecosystems/
│   │   └── patitas/
│   │       ├── rokito_agent.js         ← 14 intents, maneja mensajes Patitas
│   │       ├── alicia_notifier.js      ← Telegram: ALICIA_TELEGRAM_CHAT_ID → CARLOS fallback
│   │       └── patitas_crm_adapter.js  ← escribe CRM JSON
│   ├── scheduling/
│   │   ├── slot_engine.js             ← getSlots(dateStr) — 4 slots L-V, 2 sáb
│   │   ├── reminder_scheduler.js      ← scheduleReminders / runDueReminders
│   │   └── reminder_runner.js         ← (NUEVO, PATCH-002) cron cada 5 min
│   └── whatsapp/
│       └── whatsapp_engine.js         ← isAPIConfigured(), getMissingCredentials()
├── data/
│   ├── tenants/
│   │   └── patitas_felices/
│   │       └── business_profile.json  ← config del negocio (precios, horario, etc.)
│   ├── crm/
│   │   └── patitas/
│   │       ├── consultas/             ← JSON por consulta
│   │       ├── citas/                 ← JSON por cita
│   │       └── tutors/                ← JSON por tutor/cliente
│   ├── scheduling/
│   │   └── reminders.json             ← recordatorios pendientes
│   └── test_results_e2e.json          ← resultado de la última ejecución de tests
├── output/
│   └── whatsapp/
│       └── outbox/                    ← drafts sandbox cuando WA no está configurado
└── .env.production                    ← variables de entorno
```

---

## FLUJO DE MENSAJES

### WhatsApp (directo a carlos-os)
```
Meta → POST /api/webhooks/whatsapp
  → channel_event_pipeline.js (normaliza)
  → determineEcosystem() → "patitas_felices"
  → rokito_agent.js::handleRokitoMessage()
    → intent detection (14 intents)
    → CRM write
    → slot_engine para disponibilidad
    → WhatsApp reply (o outbox sandbox)
    → alicia_notifier.js (Telegram)
```

### Instagram (via n8n — NO carlos-os)
```
Meta → n8n webhook /instagram-patitas
  → nodo Claude API (prompt ROKITO)
  → nodo ManyChat API (reply)
  → nodo SMTP (notif Alicia)
  → nodo Notion (registro)
```

---

## VARIABLES DE ENTORNO CRÍTICAS

### Presentes con valor (no tocar):
- `NODE_ENV=production`
- `TELEGRAM_BOT_TOKEN` — bot Telegram
- `CARLOS_TELEGRAM_CHAT_ID` — fallback notificaciones
- `INSTAGRAM_ACCESS_TOKEN`, `PATITAS_IG_ACCOUNT_ID`
- `TAVILY_API_KEY`

### Vacías (necesitan datos de Alicia/Meta):
- `WHATSAPP_ACCESS_TOKEN` — token WABA (requiere registro Meta)
- `PATITAS_PHONE_NUMBER_ID` — phone_number_id de WABA
- `WABA_ID` — WhatsApp Business Account ID
- `META_APP_ID`, `META_APP_SECRET`
- `ALICIA_TELEGRAM_CHAT_ID` — Alicia debe iniciar chat con bot

### Ausentes del archivo (añadir cuando se decida):
- `PATITAS_WA_ME` — link wa.me del número de Patitas
- `PATITAS_BOOKING_LINK` — URL de reserva/agenda

---

## BUGS CONOCIDOS

1. **PATCH-001** ✅ APLICADO 2026-09-02: `whatsapp_engine.js` — fix env var names (`WHATSAPP_TOKEN` → `WHATSAPP_ACCESS_TOKEN`) + fix bug precedencia operadores en `getMissingCredentials()`. Verificado en producción: ahora retorna 4 items correctamente.

2. **PATCH-002** (PREPARADO, NO APLICADO): `runDueReminders()` en `reminder_scheduler.js` nunca se llama — los recordatorios se crean pero nunca se envían. Solución: `reminder_runner.js` nuevo + 2 líneas en `dashboard_server.js`. Archivos en `/tmp/`. Defer hasta después de First E2E.

---

## AUTH / RBAC

- Sesiones: HttpOnly + SameSite=Strict + Secure (cookie `carlos_session`)
- Hash: PBKDF2-SHA512 (100k iteraciones, timing-safe)
- Roles: `CARLOS_ADMIN`, `ALICIA_PATITAS_OPERATOR`, (otros por ecosistema)
- Login: `POST /api/auth/login` → cookie
- Me: `GET /api/me` → `{id, email, role, ecosystem}`
- Users: `POST /api/users {action:"create", role, email, password, must_change_password}`

---

## DATA MODE

Todos los registros tienen `data_mode: "REAL" | "TEST" | "DEMO"`.
- `REAL`: datos de clientes reales — producción
- `TEST`: datos de prueba — E2E tests
- `DEMO`: datos de demostración

Los tests deben usar `data_mode: "TEST"` para no contaminar REAL.

---

## COMANDOS ÚTILES (en servidor)

```bash
# Estado del servicio
sudo systemctl status carlos-os.service

# Logs en tiempo real
journalctl -u carlos-os -f

# Logs últimas 50 líneas
journalctl -u carlos-os -n 50 --no-pager

# Restart (requiere autorización si activa código nuevo)
sudo systemctl restart carlos-os.service

# Health check
curl http://127.0.0.1:3100/health/ping

# n8n workflow status
sqlite3 /home/luisvillanuevaandrades/.n8n/database.sqlite \
  "SELECT name, active FROM workflow_entity ORDER BY active DESC"

# Test E2E
cd /opt/carlos-os && CARLOS_OS_ROOT=/opt/carlos-os node /tmp/test_patitas_e2e.js

# Ver .env.production (SIN mostrar valores)
grep -E '^[A-Z_]+=.' /opt/carlos-os/.env.production | sed 's/=.*/=PRESENT/' | grep -v '^#'
grep -E '^[A-Z_]+=$' /opt/carlos-os/.env.production | sed 's/=$/=EMPTY/'
```

---

## PRINCIPIOS DE SEGURIDAD

**NUNCA mostrar:**
- passwords, tokens, API keys, private keys, secrets
- Formato siempre: `VARIABLE_NAME = PRESENT | MISSING | INVALID`

**NUNCA sin autorización explícita:**
- Enviar mensajes reales de WhatsApp
- Activar workflows de n8n outbound
- Reiniciar carlos-os.service si activa código nuevo no autorizado
- Borrar VMs, cambiar DNS, cambiar Cloudflare

**SIEMPRE seguro:**
- Leer archivos, verificar estado
- Crear backups
- Ejecutar tests (data_mode: TEST)
- Preparar patches para revisión
- Escribir documentación

---

## DOCUMENTOS RELACIONADOS

| Archivo | Contenido |
|---------|-----------|
| `docs/ARCHITECTURE.md` | Mapa completo del sistema con diagramas |
| `docs/SYSTEM_STATE.md` | Estado actual verificado con evidencia |
| `docs/ALICIA_DATA_REQUIRED.md` | Datos que necesitan recogerse de Alicia |
| `docs/PATCH_REMINDER_RUNNER.md` | PATCH-002 instrucciones detalladas |
| `docs/ADR_STACK_2026.md` | Decisión de stack — KEEP_CURRENT_STACK |
| `docs/HEALTH_GROWTH_EXECUTION_PLAN.md` | Plan maestro con waves y estado |
| `memory/HEALTH_GROWTH_MASTER_ARCHITECTURE.md` | Fuente de verdad arquitectural |

---

## ESTADO ACTUAL (2026-09-02)

Sistema: **PRODUCTION_PARTIAL** — carlos-os activo, PATCH-001 aplicado, WhatsApp sin configurar (pre-WABA), Instagram via n8n inactivo.

Primer piloto: **Patitas Felices** — veterinaria de mascotas, Puerto Montt. Alicia es la operadora.

Para activar el primer E2E:
1. Aplicar PATCH-001 (WhatsApp env fix)
2. Obtener datos de Alicia (precios, teléfono, dirección)
3. Registrar WABA en Meta
4. Configurar env vars WhatsApp
5. Crear cuenta Alicia (HAQ-01)
6. Configurar Telegram para Alicia
