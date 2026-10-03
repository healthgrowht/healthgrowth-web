# V35 OPERATIONS CHECKPOINT
# CARLOS OS — HEALTH GROWTH
# Fecha: 2026-10-03T00:xx UTC | DOMAIN RESOLVED

---

## IDENTIDAD CANÓNICA — NO VOLVER A DESCUBRIR

| Campo | Valor |
|-------|-------|
| Proyecto Vercel | healthgrowth-web |
| Equipo Vercel | healthgrowhts-projects |
| Repo | healthgrowth-web (local + Vercel) |
| Rama | main |
| Deployment productivo | dpl_HkiPXErYdkQRu3vM4ddiaHPuR22a |
| URL producción activa | https://healthgrowth.cl ← LIVE |
| URL secundaria | https://healthgrowth-web.vercel.app |
| Dominio público final | https://healthgrowth.cl LIVE_VERIFIED 2026-10-03 |
| www | https://www.healthgrowth.cl → redirect 308 → healthgrowth.cl LIVE_VERIFIED |
| API backend | https://api.healthgrowth.cl |
| Instagram | https://www.instagram.com/healthgrowthspa/ |
| WhatsApp Health Growth | +56 9 5101 7947 / wa.me/56951017947 |
| Último commit | 28aadc4 |

**REGLA:** healthgrowth.cl es el dominio final y está LIVE. healthgrowth-web.vercel.app es el alias secundario. Nunca usar otro deployment como producción.

---

## COMPONENTES — ESTADO V35

| Componente | Estado | Evidencia |
|-----------|--------|-----------|
| PUBLIC_WEB | LIVE_VERIFIED | healthgrowth.cl HTTP 200, "Ordenamos tu negocio" ✅ |
| DOMAIN | LIVE_VERIFIED | healthgrowth.cl → Vercel prj_5I83VPdqDp0DLjWMIRfphno5JQ4f VERIFIED 2026-10-03 |
| HTTPS | LIVE_VERIFIED | TLS automático Vercel en healthgrowth.cl ✅ |
| WWW | LIVE_VERIFIED | www.healthgrowth.cl → 308 → healthgrowth.cl VERIFIED 2026-10-03 |
| VISUAL | LIVE_VERIFIED | Hero 2-col + pipeline card, build 0 errores |
| MOBILE | READY_NOT_LIVE | Pipeline card hidden mobile, hero texto responsive — pendiente test en dispositivo real |
| FORM | LIVE_VERIFIED | DiagnosticForm 2-step, UTM, consent, healthgrowth-web.vercel.app |
| API | LIVE_VERIFIED | api.healthgrowth.cl/api/capture → 200, lead_id generado |
| CRM | LIVE_VERIFIED | lead_id lead_1790985368751_w3tx2 registrado (V35 E2E test) |
| DASHBOARD | READY_NOT_LIVE | carlos-os-dashboard.lovable.app — requiere autenticación manual |
| WHATSAPP_CTA | LIVE_VERIFIED | Todos los CTAs → wa.me/56951017947 (Health Growth) — NO Patitas |
| WHATSAPP_BUSINESS | BLOCKED_HUMAN | Requiere Meta App + WABA + HG_PHONE_NUMBER_ID |
| WHATSAPP_INBOUND | BLOCKED_HUMAN | Requiere META_APP_SECRET + WHATSAPP_ACCESS_TOKEN HG |
| WHATSAPP_OUTBOUND | BLOCKED_HUMAN | Requiere WHATSAPP_ACCESS_TOKEN + approved templates |
| AI_AGENT | READY_NOT_LIVE | Carlos OS tiene agente IA — activa con Meta credentials HG |
| INSTAGRAM_PUBLIC | LIVE_VERIFIED | instagram.com/healthgrowthspa/ en footer, URL pública |
| INSTAGRAM_META | BLOCKED_HUMAN | Error 190 token vencido (Gate 4 V34) |
| BOOKING | READY_NOT_LIVE | DiagnosticForm captura booking request → CRM. Calendar sync pendiente Gate 5 |
| CALENDAR | BLOCKED_HUMAN | Google Calendar OAuth Gate 5 (depende de Gate 2 n8n) |
| N8N | READY_NOT_LIVE | /healthz devuelve 401 (running, auth-only). Owner setup pendiente Gate 2 |
| FOLLOW_UP | READY_NOT_LIVE | CRM tiene estados — automatización activa cuando n8n owner resuelto |
| HUMAN_HANDOFF | READY_NOT_LIVE | NEEDS_HUMAN existe en Carlos OS — activa cuando WhatsApp Business conectado |

---

## §DOMAIN — RESOLUCIÓN COMPLETADA 2026-10-03

```
ESTADO FINAL (2026-10-03):
  healthgrowth.cl     CNAME → cname.vercel-dns.com (proxied=false)
  www.healthgrowth.cl CNAME → cname.vercel-dns.com (proxied=false)
  api.healthgrowth.cl CNAME → b886239b...cfargotunnel.com (proxied=true) ← INTACTO

  Vercel project: prj_5I83VPdqDp0DLjWMIRfphno5JQ4f (healthgrowth-web)
  Domain healthgrowth.cl:     verified=true  2026-10-03
  Domain www.healthgrowth.cl: verified=true, redirect→healthgrowth.cl 308

CURL EVIDENCIA:
  curl -s https://healthgrowth.cl → HTTP 200 "Ordenamos tu negocio" ✅
  api.healthgrowth.cl/health → HTTP 200 ✅
```

---

## GATES HUMANOS ACTIVOS

| Gate | Descripción | Estado | Impacto si resuelto |
|------|-------------|--------|---------------------|
| GATE-DOMAIN | TXT _vercel + domain claim Vercel | RESOLVED 2026-10-03 | healthgrowth.cl LIVE con web V35 ✅ |
| GATE-2 | n8n owner/setup inicial | BLOCKED_HUMAN | Desbloquea workflows, Gmail, Calendar |
| GATE-3 | SIM/eSIM dedicada ISAPRE | BLOCKED_HUMAN | Línea ISAPRE dedicada |
| GATE-4 | Meta/Instagram token error 190 | BLOCKED_HUMAN | WhatsApp inbound HG + Instagram DM |
| GATE-5 | Gmail + Google Calendar OAuth | BLOCKED_HUMAN | Calendar sync (depende Gate 2) |
| GATE-CRED | Rotación credencial dashboard expuesta | BLOCKED_HUMAN | Seguridad dashboard |

---

## COMMITS V35

| Hash | Descripción |
|------|-------------|
| 28aadc4 | feat: redesign hero — 2-col layout + animated pipeline card |
| 0b336d4 | fix: hide native scrollbar on mobile chip row |
| c1f2a95 | fix: P0/P1 — remove dashboard, UTM attribution, privacy |

---

## E2E EJECUTADOS V35

| Test | Estado | Evidencia |
|------|--------|-----------|
| A — PUBLIC_WEB | PASS | healthgrowth.cl HTTP 200, "Ordenamos tu negocio" ✅ (2026-10-03) |
| B — FORM→API→CRM | PASS | lead_id: lead_1790985368751_w3tx2 (2026-10-02) |
| C — WHATSAPP_CTA | PASS | Todos CTAs → wa.me/56951017947 (Health Growth) verificado en código |
| D — WHATSAPP_AI | BLOCKED | Sin Meta credentials HG |
| E — CONTEXT | BLOCKED | Depende D |
| F — INSTAGRAM_META | BLOCKED | Error 190 Gate 4 |
| G — BOOKING | PARTIAL | Form captura solicitud → CRM. Calendar sync pendiente |
| H — HUMAN_HANDOFF | READY | Lógica en Carlos OS, activa cuando WA Business conectado |
| I — MOBILE | PARTIAL | Código responsive verificado, test en dispositivo pendiente |

---

## INFRAESTRUCTURA ACTIVA (no modificar)

| Servicio | Estado | Descripción |
|---------|--------|-------------|
| carlos-os.service | ACTIVE | Backend principal en openclaw-bunker (GCE) |
| api.healthgrowth.cl | LIVE | Cloudflare proxy → openclaw-bunker |
| cloudflared | ACTIVE | Tunnel Cloudflare |
| n8n (Docker) | RUNNING | Auth-only (Gate 2 pending) |
| GCE instances | RUNNING | n8n-patitas (34.39.230.195), openclaw-bunker (34.176.10.40) |

**PROHIBIDO modificar:** api.healthgrowth.cl · WhatsApp Patitas 3036 · leads existentes · DNS sin coordinar

---

## OPEN_EXECUTABLE V35

```
OPEN_EXECUTABLE = 0
```

Trabajo ejecutable agotado. DOMAIN resuelto 2026-10-03. Bloqueadores restantes son BLOCKED_HUMAN (gates que requieren acción manual).

---

## NEXT_HUMAN_ACTION

DOMAIN resuelto. No hay acción inmediata requerida en producción.

Próximas acciones opcionales (en orden de impacto):
1. GATE-2: n8n owner setup → desbloquea workflows automáticos
2. GATE-4: Meta token error 190 → desbloquea WhatsApp Business inbound
3. GATE-5: Gmail + Google Calendar OAuth → calendar sync (depende Gate 2)

---

*Generado por POWER lane | V35 | 2026-10-02 | commit 28aadc4*
*DOMAIN RESOLVED 2026-10-03 — healthgrowth.cl LIVE con contenido V35*
