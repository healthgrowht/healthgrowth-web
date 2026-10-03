# V36 OPERATIONS CHECKPOINT
# CARLOS OS — HEALTH GROWTH
# Fecha: 2026-10-03 | COMMERCIAL + EXPERIENCE ACTIVATION

---

## IDENTIDAD CANÓNICA (heredado de V35 — NO REDESCUBRIR)

| Campo | Valor |
|-------|-------|
| Proyecto Vercel | healthgrowth-web |
| Equipo Vercel | healthgrowhts-projects |
| URL producción | https://healthgrowth.cl ← LIVE |
| URL secundaria | https://healthgrowth-web.vercel.app |
| www | https://www.healthgrowth.cl → 308 → apex |
| API backend | https://api.healthgrowth.cl (Carlos OS) |
| Último commit | 62ba343 |
| Vercel auth | %APPDATA%\xdg.data\com.vercel.cli\auth.json (Windows) |
| Cloudflare | cert.pem en openclaw-bunker (V35 RESOLVED, NO REABRIR) |

---

## COMPONENTES — ESTADO V36

| Componente | Estado | Evidencia |
|-----------|--------|-----------|
| PUBLIC_WEB | LIVE_VERIFIED | healthgrowth.cl HTTP 200 ✅ |
| VISUAL | LIVE_VERIFIED | Hero 2-col + PipelineCard V35, LiveSystemFlow V36 |
| MOTION | LIVE_VERIFIED | AnimatePresence, scroll-reveal, stagger, live toasts |
| VIDEO | LIVE_VERIFIED | VideoShowcase con 3 empresa videos, en page.tsx |
| MOBILE | READY_NOT_LIVE | Pipeline hidden md:hide, LiveSystemFlow versión vertical; test dispositivo pendiente |
| DOMAIN | LIVE_VERIFIED | V35 RESOLVED — healthgrowth.cl verified en Vercel |
| HTTPS | LIVE_VERIFIED | TLS Vercel automático |
| FORM | LIVE_VERIFIED | DiagnosticForm → api.healthgrowth.cl/api/capture → CRM |
| API | LIVE_VERIFIED | api.healthgrowth.cl health:200 |
| CRM | LIVE_VERIFIED | Carlos OS operativo en openclaw-bunker (carlos-os.service) |
| DASHBOARD | READY_NOT_LIVE | Backend activo, auth manual pendiente |
| WHATSAPP_CTA | LIVE_VERIFIED | Todos CTAs → wa.me/56951017947 (Health Growth) |
| WHATSAPP_BUSINESS | BLOCKED_HUMAN | WHATSAPP_ACCESS_TOKEN=EMPTY en .env.production |
| WHATSAPP_INBOUND | BLOCKED_HUMAN | Depende WHATSAPP_BUSINESS |
| WHATSAPP_OUTBOUND | BLOCKED_HUMAN | Depende WHATSAPP_BUSINESS |
| WHATSAPP_AI | BLOCKED_HUMAN | Depende WHATSAPP_BUSINESS |
| INSTAGRAM_META | BLOCKED_HUMAN | INSTAGRAM_ACCESS_TOKEN error 190 (token expirado) |
| INSTAGRAM_DM | BLOCKED_HUMAN | Depende INSTAGRAM_META |
| INSTAGRAM_AI | BLOCKED_HUMAN | Depende INSTAGRAM_META |
| N8N | BLOCKED_HUMAN | showSetupOnFirstLoad:true — requiere owner setup |
| BOOKING | READY_NOT_LIVE | Form captura → CRM. Calendar pendiente n8n |
| CALENDAR | BLOCKED_HUMAN | Depende n8n (Gate 2) + OAuth (Gate 5) |
| FOLLOW_UP | READY_NOT_LIVE | CRM tiene estados, activa cuando n8n configurado |
| HUMAN_HANDOFF | READY_NOT_LIVE | NEEDS_HUMAN en Carlos OS, activa cuando WA Business |

---

## DIAGNÓSTICO BACKENDS V36

### Carlos OS (openclaw-bunker, /opt/carlos-os/.env.production)
```
carlos-os.service   → ACTIVE (pid 583662, puerto 3000)
n8n (Docker)        → ACTIVE (puerto 5678, healthz:200)

Claves WhatsApp HG:
  WHATSAPP_ACCESS_TOKEN = EMPTY ← FALTA
  WABA_ID              = EMPTY ← FALTA
  HG_PHONE_NUMBER_ID   = EMPTY ← FALTA

Clave Instagram:
  INSTAGRAM_ACCESS_TOKEN = PRESENT(186chars) pero error 190 (expirado)
  HG_IG_ACCOUNT_ID       = EMPTY ← FALTA

n8n:
  showSetupOnFirstLoad = true ← primer setup pendiente
  /setup retorna HTTP 200 ← accesible, esperando owner
```

### n8n — Acción exacta para Gate 2
```
URL setup: https://n8n.healthgrowth.cl (acceder en browser)
1. Abrir /setup
2. Crear owner: email + password (elegir)
3. Una vez creado, Carlos OS puede usar la API de n8n
```

### WhatsApp Business HG — Acción exacta
```
1. Meta Business Suite → crear app (si no existe)
2. WhatsApp → agregar número +56 9 5101 7947
3. Obtener: WABA_ID, HG_PHONE_NUMBER_ID, WHATSAPP_ACCESS_TOKEN
4. Editar /opt/carlos-os/.env.production en openclaw-bunker
5. sudo systemctl restart carlos-os
```

### Instagram Meta — Acción exacta
```
1. Meta for Developers → reautorizar token para healthgrowthspa
2. Permisos requeridos: instagram_basic, instagram_manage_messages
3. Actualizar INSTAGRAM_ACCESS_TOKEN y HG_IG_ACCOUNT_ID
4. sudo systemctl restart carlos-os
```

---

## VISUAL V36 — CAMBIOS EJECUTADOS

| Componente | Cambio |
|-----------|--------|
| app/LiveSystemFlow.tsx | NUEVO — pipeline animado scroll-trigger, log feed, mobile vertical |
| app/Hero.tsx | Mejorado — live notification toast (7s interval, AnimatePresence) |
| app/AutomationAI.tsx | Mejorado — flow steps con scroll reveal, no-scrollbar className |
| app/VideoShowcase.tsx | Reactivado — en page.tsx, bg consistente, padding reducido |
| app/page.tsx | +LiveSystemFlow (pos 6) +VideoShowcase (pos 9) |

---

## E2E EJECUTADOS V36

| Test | Estado | Evidencia |
|------|--------|-----------|
| PUBLIC_WEB | PASS | healthgrowth.cl HTTP 200, "Ordenamos tu negocio" ✅ |
| LIVE_SYSTEM_FLOW | PASS | "Carlos OS · Live" en HTML producción ✅ |
| VIDEO | PASS | VideoShowcase en page.tsx, empresa videos referenciados ✅ |
| FORM→CRM | PASS (V35) | lead_id: lead_1790985368751_w3tx2 |
| WHATSAPP_AI | BLOCKED | Sin credenciales Meta HG |
| INSTAGRAM | BLOCKED | Token expirado error 190 |
| BOOKING | PARTIAL | Form captura, calendar pendiente |
| MOBILE | PARTIAL | Código revisado, test dispositivo pendiente |

---

## GATES HUMANOS ACTIVOS V36

| Gate | Descripción | Acción exacta |
|------|-------------|---------------|
| GATE-2 | n8n owner setup | Abrir https://n8n.healthgrowth.cl/setup, crear owner |
| GATE-WA | WhatsApp Business HG | Meta → WA → número → credenciales → .env |
| GATE-IG | Instagram token error 190 | Meta → reautorizar token → .env |
| GATE-5 | Gmail + Google Calendar OAuth | Depende Gate 2 (n8n) |

---

## COMMITS V36

| Hash | Descripción |
|------|-------------|
| 62ba343 | feat: V36 — LiveSystemFlow + VideoShowcase + Hero notifications |
| ed7603e | ops: resolve DOMAIN_ORPHAN (V35) |
| 28aadc4 | feat: redesign hero — 2-col + animated pipeline (V35) |

---

## INFRAESTRUCTURA ACTIVA (no modificar)

| Servicio | Estado |
|---------|--------|
| carlos-os.service | ACTIVE (port 3000) |
| n8n (Docker) | ACTIVE (port 5678) — setup pendiente |
| api.healthgrowth.cl | LIVE (Cloudflare tunnel, INTACTO) |
| openclaw-bunker | GCE southamerica-west1-a |

**PROHIBIDO:** api.healthgrowth.cl · WhatsApp Patitas 3036 · DNS sin coordinar

---

## OPEN_EXECUTABLE V36

```
OPEN_EXECUTABLE = 0
```

Trabajo ejecutable visual agotado.
Backends diagnosticados: todos los bloqueadores son BLOCKED_HUMAN.

---

## NEXT_HUMAN_ACTION — PRIORIDAD DECRECIENTE

**1. WhatsApp Business HG (mayor impacto comercial):**
```
Meta for Developers → crear app HG → conectar +56 9 5101 7947
Obtener: WABA_ID, HG_PHONE_NUMBER_ID, WHATSAPP_ACCESS_TOKEN
Ejecutar en openclaw-bunker:
  sudo nano /opt/carlos-os/.env.production
  # completar 3 keys
  sudo systemctl restart carlos-os
```

**2. n8n owner setup (desbloquea workflows + Calendar):**
```
Browser → https://n8n.healthgrowth.cl/setup
Crear owner con tu email + password
(Carlos OS puede entonces usar n8n API)
```

**3. Instagram Meta (reautorizar):**
```
Meta → Herramientas de Graph API o Business → token long-lived
Permisos: instagram_basic, instagram_manage_messages
Ejecutar en VM: actualizar INSTAGRAM_ACCESS_TOKEN + HG_IG_ACCOUNT_ID
```

---

*Generado por POWER lane | V36 | 2026-10-03 | commit 62ba343*
