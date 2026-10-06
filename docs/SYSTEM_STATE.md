# SYSTEM STATE — HEALTH GROWTH / PATITAS FELICES
# ÚLTIMA VERIFICACIÓN: 2026-09-02 (PATCH-001 aplicado)

## SERVICIOS ACTIVOS (VERIFIED)

| Servicio | Estado | Verificado |
|----------|--------|-----------|
| carlos-os.service | ACTIVE | 2026-09-01 SSH |
| cloudflared-carlos-os.service | ACTIVE | 2026-09-01 SSH |
| n8n-n8n-1 (Docker) | Up 5 days | 2026-09-01 SSH |
| n8n-caddy-1 (Docker) | Up 5 days | 2026-09-01 SSH |
| api.healthgrowth.cl/health/ping | 200 OK | 2026-09-02 confirmed |
| GCS Backups | ACTIVE (crons configured) | 2026-08-31 |
| GCP Snapshots | ACTIVE (daily 04:00 UTC) | 2026-08-31 |

---

## TEST E2E RESULTS (2026-09-01)

Suite: `test_patitas_e2e.js` — Ejecutado desde `/opt/carlos-os/`

```
27 PASS, 4 FAIL, 3 WARN
```

PASS:
- ENV: NODE_ENV ✅, TELEGRAM_BOT_TOKEN ✅
- BIZ: business_profile exists ✅, business_id ✅
- CEP: channel_event_pipeline carga ✅, exports: processChannelEvent/buildNormalizedEvent/determineEcosystem/getPipelineStatus ✅
- ROKITO: carga ✅, exports: handleRokitoMessage/getRokitoStatus ✅
- SLOT: carga ✅, 4 slots mañana ✅
- CRM: carga ✅, 3 directorios ✅, REAL count accesible ✅
- REMINDER: carga ✅, scheduleReminders ✅, runDueReminders ✅ (processed=4 no error)
- WA: engine carga ✅, sandbox state correcto ✅
- OUTPUT DIRS: ✅
- API: /health/ping → 200 ✅

FAIL (todos son datos de Alicia faltantes):
- BIZ-03: contact.phone_canonical = "REQUIRED_BUSINESS_INPUT"
- BIZ-04: address.full = "REQUIRED_BUSINESS_INPUT"
- BIZ-05: todos los precios son null
- BIZ-06: preparation_instructions = "REQUIRED_BUSINESS_INPUT"

WARN:
- WhatsApp no configurado (esperado, pre-WABA)
- ALICIA_TELEGRAM_CHAT_ID vacío (notificaciones van a Carlos)

---

## N8N WORKFLOWS (VERIFIED 2026-09-01)

| Workflow | ID | Active | Estado |
|----------|-----|--------|--------|
| [PF] Instagram Conversations - ROKITO v1 | cf35de56 | **0** | INACTIVE |
| HealthGrowth-Pipeline-V1 | a0b41fdd | 1 | ACTIVE |
| ISAPRE-Etapa-Inicial-Transporte | ce7e7fbb | 1 | ACTIVE |
| My workflow | 4TMkERIG0sPLekQf | 0 | INACTIVE |

[PF] ROKITO arquitectura (n8n):
- Trigger: POST webhook /instagram-patitas
- AI: Claude API (auth:none, api key en headers del nodo)
- Respuesta: ManyChat API (auth:none, api key en headers)
- Notif Alicia: SMTP (credencial configurada)
- Registro: Notion (credencial configurada)
- DNS webhook: n8n.healthgrowth.cl sin configurar → BLOQUEADO

---

## ENV VARS STATE (VERIFIED 2026-09-01)

### PRESENTES CON VALOR
NODE_ENV=production, PORT, WEBHOOK_PUBLIC_URL, WHATSAPP_VERIFY_TOKEN,
LOVABLE_ORIGIN, TELEGRAM_BOT_TOKEN, CARLOS_TELEGRAM_CHAT_ID, CARLOS_ADMIN_EMAIL,
INSTAGRAM_ACCESS_TOKEN, PATITAS_IG_ACCOUNT_ID, TAVILY_API_KEY,
todos los ALLOW_*, PRICING_*, PRIVATE_MODE, MOBILE_AGENT_PROVIDER, etc.

### VACÍAS (sin valor)
WHATSAPP_ACCESS_TOKEN, PATITAS_PHONE_NUMBER_ID, WABA_ID,
META_APP_ID, META_APP_SECRET, ALICIA_TELEGRAM_CHAT_ID,
HG_PHONE_NUMBER_ID, HG_IG_ACCOUNT_ID,
MOLTBOT_BASE_URL, MOLTBOT_WEBHOOK_SECRET, RESEARCH_OS_WEBHOOK_SECRET

### AUSENTES DEL ARCHIVO .env.production (necesitar añadir)
PATITAS_WA_ME, PATITAS_BOOKING_LINK,
GOOGLE_CALENDAR_ID, GOOGLE_SERVICE_ACCOUNT_KEY

---

## PATCHES

| ID | Archivo | Estado | Riesgo | Descripción |
|----|---------|--------|--------|-------------|
| PATCH-001 | src/whatsapp/whatsapp_engine.js | ✅ APPLIED 2026-09-02 | LOW | Fix env var names + getMissingCredentials bug |
| PATCH-002 | src/scheduling/reminder_runner.js (NUEVO) + dashboard_server.js (2 líneas) | READY_IN_/tmp (DEFERRED) | LOW | Wire runDueReminders a cron 5min |

Backup PATCH-001: `/opt/carlos-os/src/whatsapp/whatsapp_engine.js.bak_envfix_20260901`
Hash original: 69c1e652... | Hash aplicado: 3e479f75...

---

## BUGS

| Bug | Archivo | Severidad | Fix | Estado |
|-----|---------|-----------|-----|--------|
| getMissingCredentials(): `!x > 5` siempre false | whatsapp_engine.js | MEDIUM | PATCH-001 | ✅ FIXED 2026-09-02 |
| WHATSAPP_TOKEN vs WHATSAPP_ACCESS_TOKEN | whatsapp_engine.js | HIGH | PATCH-001 | ✅ FIXED 2026-09-02 |
| runDueReminders nunca se llama | reminder_scheduler.js | MEDIUM | PATCH-002 | DEFERRED |
| n8n basic auth password en plaintext | docker-compose.yml | MEDIUM | Migrar secret | DEFERRED |

---

## BLOQUEADORES POR ACTOR

### Necesita ALICIA (no delegable):
1. Proveer teléfono, dirección, precios, instrucciones preparación
2. Decidir número WhatsApp (número actual vs nuevo)
3. Autorizar migración (si número actual)
4. Recibir OTP Meta durante registro WABA
5. Iniciar chat con Telegram bot (para ALICIA_TELEGRAM_CHAT_ID)

### Necesita CARLOS (puede hacer remotamente):
1. ~~**PATCH-001**~~: ✅ APLICADO 2026-09-02
2. **PATCH-002**: SCP + editar dashboard_server.js (2 líneas) + restart (DEFERRED — después de First E2E)
3. **HAQ-01**: Crear cuenta Alicia (POST /api/users)
4. Agregar a .env.production: `PATITAS_WA_ME`, `PATITAS_BOOKING_LINK`, `ALICIA_TELEGRAM_CHAT_ID`
5. **HAQ-06**: Configurar Cloudflare Tunnel o DNS para n8n.healthgrowth.cl
6. Registrar WABA en Meta Business Manager (después de decidir el número)
7. Activar workflow [PF] en n8n (después de resolver DNS)
8. M2: Downgrade openclaw-bunker a e2-medium (requiere stop VM)

### Necesita META (externo):
1. Aprobación WABA (horas-días)
2. Revisión de la Meta App (si no está aprobada para producción)
