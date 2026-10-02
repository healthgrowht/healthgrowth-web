# V35 OPERATIONS CHECKPOINT
# CARLOS OS — HEALTH GROWTH
# Fecha: 2026-10-02T23:xx UTC

---

## IDENTIDAD CANÓNICA — NO VOLVER A DESCUBRIR

| Campo | Valor |
|-------|-------|
| Proyecto Vercel | healthgrowth-web |
| Equipo Vercel | healthgrowhts-projects |
| Repo | healthgrowth-web (local + Vercel) |
| Rama | main |
| Deployment productivo | dpl_HkiPXErYdkQRu3vM4ddiaHPuR22a |
| URL producción activa | https://healthgrowth-web.vercel.app |
| Dominio público final | https://healthgrowth.cl (DOMAIN_ORPHAN — ver §DOMAIN) |
| www | PENDIENTE tras resolución DOMAIN_ORPHAN |
| API backend | https://api.healthgrowth.cl |
| Instagram | https://www.instagram.com/healthgrowthspa/ |
| WhatsApp Health Growth | +56 9 5101 7947 / wa.me/56951017947 |
| Último commit | 28aadc4 |

**REGLA:** healthgrowth.cl es el dominio final. healthgrowth-web.vercel.app es el proxy activo mientras DOMAIN_ORPHAN no se resuelva. Nunca usar otro deployment como producción.

---

## COMPONENTES — ESTADO V35

| Componente | Estado | Evidencia |
|-----------|--------|-----------|
| PUBLIC_WEB | LIVE_VERIFIED | healthgrowth-web.vercel.app HTTP 200, contenido correcto |
| DOMAIN | BLOCKED_HUMAN | healthgrowth.cl apunta a proyecto Vercel distinto (ver §DOMAIN) |
| HTTPS | LIVE_VERIFIED | Vercel TLS automático en .vercel.app |
| WWW | BLOCKED_HUMAN | Tras resolución DOMAIN_ORPHAN |
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

## §DOMAIN — PASOS EXACTOS PARA RESOLUCIÓN

```
DNS actual healthgrowth.cl:
  A: 64.29.17.1, 216.198.79.1  ← Vercel IPs de cuenta vieja
  TXT _vercel: vc-domain-verify=healthgrowth.cl,f9a89f7408f093570a4e,dc  ← viejo

Acción 1 — Cloudflare (5 min):
  Entrar a Cloudflare Dashboard → healthgrowth.cl → DNS
  Añadir registro TXT:
    Nombre: _vercel
    Valor: vc-domain-verify=healthgrowth.cl,ec18480282575d9fa0b6
  Verificar propagación:
    nslookup -type=TXT _vercel.healthgrowth.cl 8.8.8.8

Acción 2 — Vercel (5 min):
  Opción A (Dashboard):
    vercel.com → healthgrowth-web → Settings → Domains
    → Add Domain → healthgrowth.cl → Move Here si lo pide

  Opción B (si pide actualizar DNS):
    Cloudflare → healthgrowth.cl → DNS
    Cambiar A records a: 76.76.21.21 (y 76.76.21.22 como backup)

Verificación:
  curl -s -o /dev/null -w "%{http_code}" https://healthgrowth.cl
  → Esperar 200 con "Ordenamos tu negocio"
```

---

## GATES HUMANOS ACTIVOS

| Gate | Descripción | Estado | Impacto si resuelto |
|------|-------------|--------|---------------------|
| GATE-DOMAIN | TXT _vercel + domain claim Vercel | BLOCKED_HUMAN | healthgrowth.cl sirve web nueva |
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
| A — PUBLIC_WEB | PASS | healthgrowth-web.vercel.app HTTP 200, "Ordenamos tu negocio" |
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

Trabajo ejecutable agotado. Todos los bloqueadores son BLOCKED_HUMAN (gates que requieren acción manual).

---

## NEXT_HUMAN_ACTION — UNA SOLA

**Resolver DOMAIN_ORPHAN:**

```
1. Cloudflare Dashboard → healthgrowth.cl → DNS
   Añadir TXT: _vercel = vc-domain-verify=healthgrowth.cl,ec18480282575d9fa0b6

2. vercel.com → healthgrowth-web → Settings → Domains
   → Add Domain: healthgrowth.cl
   → Click "Move Here" si aparece
```

Tiempo estimado: 10-15 minutos. Resultado: healthgrowth.cl sirve la web nueva inmediatamente.

---

*Generado por POWER lane | V35 | 2026-10-02 | commit 28aadc4*
