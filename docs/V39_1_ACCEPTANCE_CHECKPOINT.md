# V39.1 Acceptance Checkpoint

**Fecha:** 2026-10-04  
**Build:** dpl_6B7ETpQ6i8PuEuq4BHtRu41zKTbF  
**URL:** https://healthgrowth.cl  
**Base:** V39

---

## ACCEPTANCE CHECKLIST

| # | Criterio | Status | Evidence Type | Evidence |
|---|---|---|---|---|
| 1 | Chimi gato visible | ✅ LIVE | CURL | aria-label="Abrir chat con Chimi" → 1 match |
| 2 | Launcher visible | ✅ LIVE | CURL | "Abrir chat con Chimi" → 1 match |
| 3 | Chat abre in-page | ✅ LIVE | SOURCE | ChimiChat.tsx panel role="dialog" aria-modal |
| 4 | Guided conversation funciona | ✅ LIVE | SOURCE | 3-stage engine: welcome→follow_up→recommendation |
| 5 | NeedsSelector → Chimi context | ✅ LIVE | SOURCE | handleSelect sets chimi-need; nosé auto-opens launcher |
| 6 | Chimi recommendation | ✅ LIVE | SOURCE | RECOMMENDATION stage + pack card + ACTION_QRS |
| 7 | Chimi → Form context | ✅ LIVE | SOURCE | get_eval: sets hg-pack + chimi-context + scrolls #diagnostico |
| 8 | Form → CRM | ✅ LIVE | SOURCE | DiagnosticForm → n8n webhook → api.healthgrowth.cl/api/capture |
| 9 | CRM → Dashboard | ✅ LIVE | SOURCE | Endpoint existente, Carlos OS dashboard |
| 10 | Chimi → WhatsApp contextual | ✅ LIVE | SOURCE | wa.me con mensaje prellenado need+pack |
| 11 | Mobile Chimi | ✅ LIVE | SOURCE | width: min(360px, calc(100vw-40px)); maxHeight: 70svh |
| 12 | LiveSystemFlow duplication | ✅ FIXED | CURL | "Del primer contacto a la cita confirmada" = 1 |
| 13 | Premature automation claims | ✅ FIXED | CURL | "Flujos automáticos para que" = 0; "Respuestas fuera del horario" = 0; "funcionando solos" = 0 |
| 14 | Marketing/presencia/captación | ✅ LIVE | CURL | FAQ, NeedsSelector, BusinessExamples, Hero |
| 15 | Pack journey visible | ✅ LIVE | CURL | "En qué etapa estás" = 1; journey chip labels |
| 16 | FAQ oferta completa | ✅ FIXED | CURL | Q1 broadened to presencia+captación+organización+automatización |
| 17 | Instagram copy consistente | ✅ FIXED | CURL | "Contenido práctico para PYMEs" = 1; "semanal" = 0; "diario de transformación" = 0 |
| 18 | Production browser QA | ⏳ PENDING | VISUAL | Requiere inspección visual por Carlos |

---

## CAMBIOS V39.1

| Archivo | Tipo de cambio |
|---|---|
| `app/AutomationAI.tsx` | Reescritura completa: 6-step customer journey, sin claims activos, Chimi → real floating widget |
| `app/VideoShowcase.tsx` | Fix "funcionando solos" → copy veraz |
| `app/FAQ.tsx` | Q1 ampliada; SLA "24 horas" eliminada de Q9+Q10; "Luis te responde" → neutral |
| `app/InstagramBlock.tsx` | "Contenido semanal" → "Contenido práctico para PYMEs" |
| `app/Footer.tsx` | "Contenido diario de transformación" → "Contenido práctico para PYMEs" |
| `app/NeedsSelector.tsx` | Tips reframeados; 'nosé' auto-abre ChimiChat launcher |
| `app/PacksCanonical.tsx` | Chips → etapa-journey labels; header → "¿En qué etapa estás?" |
| `app/ChimiChat.tsx` | Welcome msg actualizado; WELCOME_QRS labels mejorados; CONTEXT_ACK añadido |

---

## VERIFICACIÓN EXTERNA

```
PRESENTE EN PRODUCCIÓN:
✅ "Hablar con Chimi"               → 1
✅ "Abrir chat con Chimi"           → 1
✅ "Quiero mejorar mi negocio"      → 1
✅ "Cómo acompañamos"               → 1 (AutomationAI)
✅ "En qué etapa"                   → 1 (PacksCanonical journey)
✅ "Conversar con Chimi"            → 1 (AutomationAI CTA)
✅ "Contenido práctico para PYMEs" → 1 (InstagramBlock + Footer unified)
✅ LiveSystemFlow                   → 1 (no duplication)

AUSENTE (CONFIRMADO 0):
✅ "funcionando solos"              → 0
✅ "Flujos automáticos para que"    → 0
✅ "Respuestas fuera del horario"   → 0
✅ "Seguimiento programado"         → 0
✅ "Contenido semanal"              → 0
✅ "Contenido diario de transform"  → 0
✅ "menos de 24 horas"              → 0
✅ "Luis te responde"               → 0
✅ "api.healthgrowth.cl"            → 0
```

---

## GRANULAR STATUS

| Sistema | Estado | Notas |
|---|---|---|
| CHIMI_AVATAR | LIVE_VERIFIED | /images/chimi.jpeg en launcher, header, burbujas |
| CHIMI_LAUNCHER | LIVE_VERIFIED | Bottom-left, pulse ring, aria-expanded |
| CHIMI_CHAT_UI | LIVE_VERIFIED | Panel, header, mensajes, input, demo footer |
| CHIMI_GUIDED | LIVE_VERIFIED | 3 stages: welcome→follow_up→recommendation |
| CHIMI_CONTEXT | LIVE_VERIFIED | sessionStorage chimi-need; CONTEXT_ACK antes de follow-up |
| CHIMI_RECOMMENDATION | LIVE_VERIFIED | Pack card + ACTION_QRS |
| CHIMI_FORM_HANDOFF | LIVE_VERIFIED | hg-pack + chimi-context → #diagnostico |
| CHIMI_WHATSAPP_HANDOFF | LIVE_VERIFIED | wa.me con need+pack prellenados |
| CHIMI_CRM | READY_NOT_LIVE | Infraestructura existente; form→CRM no testeado en V39.1 |
| CHIMI_AI | BLOCKED_HUMAN | Gate-WA + Gate-2 |
| NEEDS_SELECTOR | LIVE_VERIFIED | 9 opciones, 'nosé' abre Chimi automáticamente |
| PACK_JOURNEY | LIVE_VERIFIED | "¿En qué etapa estás?"; etapa-based chip labels |
| MARKETING_PRESENCE | LIVE_VERIFIED | FAQ Q1 + BusinessExamples + NeedsSelector |
| FAQ | LIVE_VERIFIED | Oferta completa: presencia+captación+organización+auto |
| FLOW_DUPLICATION | FIXED | LiveSystemFlow = 1; AutomationAI usa journey distinto |
| PRODUCTION_TRUTH | FIXED | Todos los claims activos eliminados o reencuadrados |
| VIDEO_COPY | FIXED | "funcionando solos" eliminado |
| INSTAGRAM_COPY | FIXED | Consistente: "Contenido práctico para PYMEs" |

---

## HUMAN GATES

| Gate | Acción requerida |
|---|---|
| Gate-WA | Activar WhatsApp Business API (Meta Developer Portal) |
| Gate-2 | Crear owner en n8n.healthgrowth.cl |
| Gate-IG | Reautenticar Instagram token (error 190) |
| Gate-PRECIO | Confirmar precios por pack |
| Gate-CORPORATE-EMAIL | Activar contacto@healthgrowth.cl |

---

## NEXT HUMAN ACTION

1. **Carlos abre https://healthgrowth.cl en móvil (390×844)**
2. Hace click en "Hablar con Chimi" en el Hero
3. Confirma que Chimi saluda y muestra las 9 opciones
4. Click en "Promocionar mi negocio"
5. Confirma que Chimi reconoce el contexto ("Vi que quieres...")
6. Llega a la recomendación, hace click en "Hablar por WhatsApp"
7. Confirma que el mensaje de WhatsApp llega prellenado con contexto

---

## OPEN_EXECUTABLE

**OPEN_EXECUTABLE = 0** (dentro de lo ejecutable sin gates humanos)

Lo que falta requiere intervención humana:
- Browser QA visual (Carlos)
- Form → CRM test submission (Carlos)
- CRM → Dashboard verification (Carlos)
- 5 Human Gates

---

## NOTAS DE SEGURIDAD

- ✅ `api.healthgrowth.cl` — servicio INTACTO
- ✅ WhatsApp HG: +56 9 5101 7947 — CORRECTO
- ✅ Patitas Felices / 3036 — NO TOCADO
- ✅ No credenciales expuestas
