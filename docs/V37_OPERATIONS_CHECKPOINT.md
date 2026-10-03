# V37 OPERATIONS CHECKPOINT
# CARLOS OS — HEALTH GROWTH
# Fecha: 2026-10-03 | COMMERCIAL REBUILD + SERCOTEC READINESS

---

## IDENTIDAD CANÓNICA (heredado — NO REDESCUBRIR)

| Campo | Valor |
|-------|-------|
| Proyecto Vercel | healthgrowth-web |
| Equipo Vercel | healthgrowhts-projects |
| URL producción | https://healthgrowth.cl ← LIVE |
| URL secundaria | https://healthgrowth-web.vercel.app |
| www | https://www.healthgrowth.cl → 308 → apex |
| API backend | https://api.healthgrowth.cl (Carlos OS — NO TOCAR) |
| Último commit | 08d4988 |
| Vercel auth | %APPDATA%\xdg.data\com.vercel.cli\auth.json (Windows) |

---

## COMPONENTES — ESTADO V37

| Componente | Estado | Evidencia |
|-----------|--------|-----------|
| PUBLIC_WEB | LIVE_VERIFIED | healthgrowth.cl HTTP 200 ✅ |
| VISUAL | LIVE_VERIFIED | Hero 2-col, pipeline, LiveSystemFlow, VideoShowcase |
| MOM_TEST | LIVE_VERIFIED | CRM/lead_id/Carlos OS removidos del público |
| MOCK_KPI | FIXED | Hero: "3 Leads hoy / <2m / ↑" removidos ✅ |
| DEMO_LABEL | FIXED | LiveSystemFlow: "Demo del flujo · Así funciona" ✅ |
| FORM_JARGON | FIXED | DiagnosticForm: "CRM" → "Organiza clientes y agenda" ✅ |
| MOBILE | READY_NOT_LIVE | Pipeline hidden md:hide, test dispositivo pendiente |
| DOMAIN | LIVE_VERIFIED | V35 RESOLVED — healthgrowth.cl verified en Vercel |
| HTTPS | LIVE_VERIFIED | TLS Vercel automático |
| FORM | LIVE_VERIFIED | DiagnosticForm → api.healthgrowth.cl/api/capture → CRM |
| API | LIVE_VERIFIED | api.healthgrowth.cl health:200 |
| WHATSAPP_CTA | LIVE_VERIFIED | Todos CTAs → wa.me/56951017947 (Health Growth) |
| WHATSAPP_BUSINESS | BLOCKED_HUMAN | WHATSAPP_ACCESS_TOKEN=EMPTY en .env.production |
| INSTAGRAM_META | BLOCKED_HUMAN | INSTAGRAM_ACCESS_TOKEN error 190 (token expirado) |
| N8N | BLOCKED_HUMAN | showSetupOnFirstLoad:true — requiere owner setup |
| CANONICAL_OFFER | DOCUMENTED | docs/HEALTH_GROWTH_CANONICAL_OFFER_V1.md ✅ |
| SERCOTEC_READINESS | DOCUMENTED | docs/HEALTH_GROWTH_SERCOTEC_READINESS.md ✅ |
| FUNDING_READINESS | DOCUMENTED | docs/HEALTH_GROWTH_FUNDING_READINESS.md ✅ |
| SEO_CANONICAL | LIVE_VERIFIED | metadataBase + alternates.canonical = healthgrowth.cl ✅ |

---

## V37 EJECUTADO — MOM TEST FIXES

### Hero.tsx
| Cambio | Antes | Después |
|--------|-------|---------|
| Step 2 label | "CRM Carlos OS" | "Queda registrado" |
| Step 2 sub | "lead_id · trazabilidad completa" | "Nada se pierde" |
| Footer metric | "3 / Leads hoy" | Removido |
| Footer metric | "<2m / Respuesta" | Removido |
| Footer metric | "↑ / Tasa cierre" | Removido |
| Footer indicator | — | "● Sistema operativo" |
| Pipeline header right | "Carlos OS" | "Health Growth" |
| Pipeline header label | "Sistema activo" | "Flujo automático" |

### LiveSystemFlow.tsx
| Cambio | Antes | Después |
|--------|-------|---------|
| Header badge | "Sistema activo · En tiempo real" | "Demo del flujo · Así funciona" |
| Node label | "CRM" | "Se registra" |
| Node channel | "Carlos OS" | "Nada se pierde" |
| Node badge | "lead_id" | "guardado" |
| Node notification | "lead_1790985 registrado → source: web" | "Consulta registrada correctamente" |
| Log footer | "Carlos OS · Live Log" | "Health Growth · Flujo de ejemplo" |

### DiagnosticForm.tsx
| Cambio | Antes | Después |
|--------|-------|---------|
| Dropdown option | "Pack Automatización — CRM" | "Pack Automatización — Organiza clientes y agenda" |

---

## DOCUMENTACIÓN CREADA V37

| Documento | Descripción |
|-----------|-------------|
| docs/HEALTH_GROWTH_CANONICAL_OFFER_V1.md | Fuente de verdad de todos los productos y servicios |
| docs/HEALTH_GROWTH_SERCOTEC_READINESS.md | Estado de preparación para fondos Sercotec |
| docs/HEALTH_GROWTH_FUNDING_READINESS.md | Preparación para financiamiento público y privado |
| docs/V37_OPERATIONS_CHECKPOINT.md | Este archivo |

---

## E2E EJECUTADOS V37

| Test | Estado | Evidencia |
|------|--------|-----------|
| PUBLIC_WEB | PASS | healthgrowth.cl HTTP 200 ✅ |
| MOM_TEST_HERO | PASS | "Flujo automático" + "Queda registrado" en HTML ✅ |
| MOCK_KPI_REMOVED | PASS | "3" / "<2m" / "Tasa cierre" ausentes del HTML ✅ |
| DEMO_LABEL | PASS | "Demo del flujo" en LiveSystemFlow ✅ |
| BUILD | PASS | next build — Compiled successfully in 16.8s ✅ |
| DEPLOY | PASS | dpl_HSFs5yzupJKuGykLnE4EXESPRKTe READY ✅ |

---

## OPEN_EXECUTABLE V37

```
OPEN_EXECUTABLE = 0
```

Todos los cambios ejecutables de V37 están desplegados.
Las acciones restantes son BLOCKED_HUMAN (Meta credentials, n8n setup).

---

## GATES HUMANOS ACTIVOS V37

| Gate | Descripción | Acción exacta | Impacto |
|------|-------------|--------------|---------|
| GATE-WA | WhatsApp Business HG | Meta → WA → número → credenciales → .env | MÁXIMO |
| GATE-2 | n8n owner setup | Browser → https://n8n.healthgrowth.cl/setup → crear owner | ALTO |
| GATE-IG | Instagram token error 190 | Meta → reautorizar token → .env | MEDIO |
| GATE-5 | Gmail + Google Calendar OAuth | Depende Gate 2 | MEDIO |
| GATE-PRECIO | Definir precios | Carlos valida tabla → PRECIOS_REALES_PENDIENTES_CARLOS.md | COMERCIAL |
| GATE-SERCOTEC | Capital Semilla | Revisar bases 2026-2027 en sercotec.cl | FINANCIERO |

---

## PENDIENTE V37 (READY_NOT_LIVE)

| Item | Estado | Bloqueador |
|------|--------|-----------|
| MOBILE testing 360/390px | READY_NOT_LIVE | Test en dispositivo real |
| Video playback verificación | READY_NOT_LIVE | Videos empresa en public/videos/ |
| Instagram funnel section | READY_NOT_LIVE | Token error 190 |
| "¿Qué necesitas?" chip selector | DISEÑADO | Implementación futura |
| Precios en web | READY_NOT_LIVE | Gate-PRECIO |

---

## COMMITS V37

| Hash | Descripción |
|------|-------------|
| 08d4988 | feat: V37 — mom test fixes + canonical offer docs + sercotec/funding readiness |
| c75d1a0 | ops: V36 checkpoint |
| 62ba343 | feat: V36 — LiveSystemFlow + VideoShowcase + Hero notifications |

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

**3. Definir precios (activa conversión comercial):**
```
Abrir: docs/comercial/PRECIOS_REALES_PENDIENTES_CARLOS.md
Responder las 6 preguntas de precio
Documentar aquí: docs/HEALTH_GROWTH_CANONICAL_OFFER_V1.md
```

**4. Sercotec Capital Semilla:**
```
Revisar: sercotec.cl → fondos → Capital Semilla 2026/2027
Activos de postulación: docs/HEALTH_GROWTH_SERCOTEC_READINESS.md
```

---

*Generado por POWER lane | V37 | 2026-10-03 | commit 08d4988*
