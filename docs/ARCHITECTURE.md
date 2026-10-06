# HEALTH GROWTH — ARCHITECTURE MAP
# FECHA: 2026-09-01 | STATUS: VERIFIED

## RESUMEN EJECUTIVO

Sistema compuesto por 4 capas:
1. **Frontend**: carlos-os SSR (legacy) + Lovable SPA (activo) + healthgrowth.cl (Vercel/Next.js)
2. **Backend API**: carlos-os Node.js en openclaw-bunker (GCP)
3. **Automation**: n8n en n8n-patitas (GCP)
4. **Channels**: WhatsApp Cloud API + Instagram vía ManyChat + n8n

---

## INFRAESTRUCTURA

```
GCP Project: bunkermaestro-494818
Region primaria: southamerica-west1 (Santiago)
Region secundaria: southamerica-east1 (São Paulo) — n8n

VM: openclaw-bunker
  Zone: southamerica-west1-a
  Type: e2-standard-2 (2 vCPU, 8GB RAM) — candidata downgrade a e2-medium
  OS: Debian
  Acceso: IAP SSH only (no IP pública expuesta)
  Servicio: carlos-os.service (Node.js, systemd)
  Tunnel: cloudflared-carlos-os.service → api.healthgrowth.cl (Cloudflare Tunnel)

VM: n8n-patitas
  Zone: southamerica-east1-c
  Type: e2-medium
  IP: ephemeral (cambia con stop/start)
  Acceso: IAP SSH only
  Servicio: Docker (n8n-n8n-1 + n8n-caddy-1)
  n8n versión: v2.26.5
```

## DOMINIOS

| Dominio | Destino | Status | Acceso |
|---------|---------|--------|--------|
| api.healthgrowth.cl | openclaw-bunker via Cloudflare Tunnel | ACTIVO | Internet |
| healthgrowth.cl | Vercel (Next.js) | ACTIVO | Internet |
| n8n.healthgrowth.cl | n8n-patitas | SIN DNS | Bloqueado (HAQ-06) |
| carlos-os-dashboard.lovable.app | Lovable SPA | ACTIVO | Internet |

---

## SERVICIOS Y ROLES

### carlos-os (openclaw-bunker)
```
/opt/carlos-os/
├── scripts/dashboard_server.js    # Servidor principal (~5900 líneas)
├── src/
│   ├── auth/auth_middleware.js    # RBAC, sessions, CORS
│   ├── whatsapp/
│   │   ├── whatsapp_engine.js     # isAPIConfigured(), env var resolution
│   │   └── whatsapp_cloud_api_adapter.js  # sandbox mode, send bloqueado
│   ├── ecosystems/
│   │   ├── patitas/
│   │   │   ├── rokito_agent.js    # 14 intents para Patitas
│   │   │   ├── alicia_notifier.js # Telegram notifications
│   │   │   ├── patitas_crm_adapter.js
│   │   │   ├── patitas_appointment_manager.js
│   │   │   └── ...
│   │   └── healthgrowth/
│   │       └── chimi_agent.js     # HG equivalent of ROKITO
│   ├── scheduling/
│   │   └── reminder_scheduler.js  # Crea recordatorios, runDueReminders UNWIRED
│   └── core/
│       └── channel_event_pipeline.js  # Router multicanal por recipient_asset_id
├── data/
│   ├── tenants/patitas_felices/business_profile.json
│   ├── crm/patitas/{consultas,citas,tutors,mascotas,seguimientos}
│   └── scheduling/reminders.json
└── .env.production               # EnvironmentFile del systemd service
```

### n8n (n8n-patitas)
```
Workflows:
  ISAPRE-Etapa-Inicial-Transporte (ce7e7fbb) — ACTIVE, producción
  HealthGrowth-Pipeline-V1 (a0b41fdd) — ACTIVE, producción
  [PF] Instagram Conversations - ROKITO v1 (cf35de56) — INACTIVE
  My workflow (4TMkERIG0sPLekQf) — INACTIVE (test)

Credenciales configuradas:
  Google Gemini (PaLM) API — CONFIGURED (nombre engañoso)
  Notion account — CONFIGURED
  SMTP account — CONFIGURED
  
Credenciales FALTANTES para [PF]:
  Claude API / Anthropic — usa auth:none con API key en headers
  ManyChat — usa auth:none con API key en headers
  
Webhook [PF]: POST https://n8n.healthgrowth.cl/webhook/instagram-patitas
              BLOQUEADO — sin DNS para n8n.healthgrowth.cl
```

---

## FLUJOS DE MENSAJES

### WhatsApp → Respuesta automática (Patitas)
```
CLIENTE WA → Meta Cloud API → webhook @ api.healthgrowth.cl/webhook
  → webhook_handler.js (HMAC verify)
  → channel_event_pipeline.js (determineEcosystem por PATITAS_PHONE_NUMBER_ID)
  → rokito_agent.js (detectIntent: 14 intents)
  → patitas_appointment_manager.js (BOOK/CANCEL/RESCHEDULE)
  → slot_engine.js (disponibilidad)
  → patitas_crm_adapter.js (crear/actualizar consulta en JSON)
  → alicia_notifier.js (Telegram notif a Carlos/Alicia)
  → whatsapp_cloud_api_adapter.js (BLOQUEADO sandbox → outbox/)

STATUS: BLOQUEADO (WABA no registrado + WHATSAPP_ACCESS_TOKEN vacío)
```

### Instagram → Respuesta automática (Patitas) — arquitectura n8n
```
CLIENTE IG → Meta webhook → n8n.healthgrowth.cl/webhook/instagram-patitas
  → [PF] Instagram Conversations - ROKITO v1 (n8n)
  → Set Variables
  → Code: Recuperar Historial
  → HTTP: Claude API (api.anthropic.com/v1/messages)
  → Code: Parsear Respuesta
  → IF: ¿Derivar a Alicia?
      YES → Email a Alicia (SMTP) + Crear Registro Notion
      NO  → ManyChat API → send reply
  → Guardar Historial

STATUS: BLOQUEADO (workflow INACTIVE + n8n.healthgrowth.cl sin DNS)
```

### Lead capture HG (web form)
```
VISITANTE healthgrowth.cl → formulario
  → POST api.healthgrowth.cl/api/capture
  → carlos-os CRM (data/crm/healthgrowth/)
  → n8n HealthGrowth-Pipeline-V1 (opcional)

STATUS: ACTIVO Y FUNCIONAL
```

---

## ENV VARS STATE (2026-09-01)

### PRESENTES CON VALOR
- NODE_ENV, PORT, WEBHOOK_PUBLIC_URL, WHATSAPP_VERIFY_TOKEN
- LOVABLE_ORIGIN (HAQ-05 cerrado 2026-08-31)
- TELEGRAM_BOT_TOKEN, CARLOS_TELEGRAM_CHAT_ID, CARLOS_ADMIN_EMAIL
- INSTAGRAM_ACCESS_TOKEN, PATITAS_IG_ACCOUNT_ID
- TAVILY_API_KEY
- Todas las ALLOW_*, PRICING_*, PRIVATE_MODE, NODE_ENV

### VACÍAS (necesitan completar)
| Var | Para qué | Fuente |
|-----|----------|--------|
| WHATSAPP_ACCESS_TOKEN | Token WA Cloud API | Meta Business Manager (post-WABA) |
| PATITAS_PHONE_NUMBER_ID | Phone Number ID WA | Meta Business Manager (post-WABA) |
| WABA_ID | WhatsApp Business Account ID | Meta Business Manager (post-WABA) |
| META_APP_ID | Meta App ID | developers.facebook.com |
| META_APP_SECRET | Meta App Secret | developers.facebook.com |
| ALICIA_TELEGRAM_CHAT_ID | Chat ID de Alicia en Telegram | Alicia inicia chat con bot |
| HG_PHONE_NUMBER_ID | Phone Number ID HG WA | Futuro |
| HG_IG_ACCOUNT_ID | Account ID Instagram HG | Futuro |
| MOLTBOT_BASE_URL | MoltBot webhook | MoltBot config |
| MOLTBOT_WEBHOOK_SECRET | MoltBot secret | MoltBot config |
| RESEARCH_OS_WEBHOOK_SECRET | Research webhook | Research OS config |

### AUSENTES (añadir al .env)
| Var | Para qué | Urgencia |
|-----|----------|----------|
| PATITAS_WA_ME | Link wa.me en respuestas | P1 |
| PATITAS_BOOKING_LINK | Link reserva en respuestas | P1 |
| GOOGLE_CALENDAR_ID | Google Calendar agenda | P2 |
| GOOGLE_SERVICE_ACCOUNT_KEY | SA para Calendar | P2 |

---

## AUTH / RBAC

```
Roles: CARLOS_MASTER_OWNER > CARLOS_ADMIN > CARLOS_PERSONAL > 
       ALICIA_PATITAS_OPERATOR > ALICIA_PATITAS > VISITA_DEMO

Superusers (bypass RBAC): CARLOS_ADMIN, CARLOS_MASTER_OWNER

Auth mechanism: PBKDF2-SHA512 (100k iter, salt 32B, timing-safe compare)
Session: HttpOnly cookie "carlos_os_session" (8h, SameSite=Strict, Secure in prod)
Session store: SQLite

Usuarios en DB (2026-08-31):
  carlos@healthgrowth.cl — CARLOS_ADMIN (PRESENT)
  demo@carlos-os.local — VISITA_DEMO (must_change_password=1, reset_token expirado)
  Alicia — NOT CREATED (HAQ-01 pendiente)
```

---

## BACKUPS Y MONITORING

```
Backup carlos-os data: cron 03:00 UTC → gs://bunkermaestro-backups-carlos
Backup n8n SQLite: cron 03:30 UTC → gs://bunkermaestro-backups-carlos/n8n/
GCP Snapshots: daily 04:00 UTC, 30 días retención, ambas VMs
Uptime check: api.healthgrowth.cl/health/ping cada 5 min
Alerts: CPU >80%, Disco >75%, API DOWN
```

---

## GAPS CRÍTICOS (VERIFIED)

| Gap | Impacto | Owner | Status |
|-----|---------|-------|--------|
| WABA Patitas no registrado | WhatsApp E2E IMPOSSIBLE | Carlos + Meta | EXTERNAL |
| WA credentials vacías | isAPIConfigured() = false | Carlos (post WABA) | WAITING |
| WHATSAPP_TOKEN vs WHATSAPP_ACCESS_TOKEN | engine error | Carlos | PATCH_READY |
| n8n.healthgrowth.cl sin DNS | Instagram E2E IMPOSSIBLE | Carlos | HAQ-06 |
| [PF] workflow INACTIVE | Instagram workflow off | Carlos | NEEDS_AUTH |
| Alicia no existe en DB | Sin acceso dashboard | Carlos | HAQ-01 |
| business_profile precios null | ROKITO responde null | Alicia | WAITING_DATA |
| reminder_scheduler unwired | 0 recordatorios enviados | Carlos (code) | PATCH_READY |
| ALICIA_TELEGRAM_CHAT_ID vacío | Notif van a Carlos | Alicia | QUICK_FIX |
| n8n basic auth password plaintext | Security issue | Carlos | MEDIUM |
