# V38.1 Production Reality Fix — Checkpoint

**Fecha:** 2026-10-04  
**Deployment:** dpl_3TC6ujwxAAxUdCj1fsTYwZcF4YB7  
**URL Producción:** https://healthgrowth.cl  
**Estado:** LIVE ✅  
**Base:** V38 (fc838d6) → V38.1

---

## MISIÓN V38.1

Corregir discrepancias encontradas en inspección externa de https://healthgrowth.cl.
Regla: PRODUCTION > CHECKPOINT. Verificar en https://healthgrowth.cl, no en localhost.

---

## CAMBIOS EJECUTADOS

### TIER 1 — Falsas afirmaciones en vivo (false live claims)

| Archivo | Cambio | Verificado |
|---|---|---|
| `LiveSystemFlow.tsx` | NODES[2].channel: `"Califica · Responde"` → `"Según lo que necesitas"` | ✅ LIVE |
| `LiveSystemFlow.tsx` | NODES[2].label: `"Clasifica y responde"` → `"Entiende y orienta"` | ✅ LIVE |
| `LiveSystemFlow.tsx` | NODES[3].channel: `"Respuesta < 2 min"` → `"Respuesta directa"` | ✅ LIVE |
| `LiveSystemFlow.tsx` | NODES[4].channel: `"Confirmada · Calendar"` → `"Con seguimiento incluido"` | ✅ LIVE |
| `LiveSystemFlow.tsx` | NODES[4].label: `"Reserva"` → `"Cita coordinada"` | ✅ LIVE |
| `LiveSystemFlow.tsx` | Eliminado span `api.healthgrowth.cl` del footer del log feed | ✅ LIVE |
| `LiveSystemFlow.tsx` | Badge header: `"Demo del flujo · Así funciona"` → `"Demo del flujo · Así puede funcionar"` | ✅ LIVE |
| `LiveSystemFlow.tsx` | Subtitle: framing aspiracional explícito | ✅ LIVE |
| `Hero.tsx` | STEPS[2]: `"Clasifica y responde / Automáticamente"` → `"Clasifica y orienta / Según lo que necesitas"` | ✅ LIVE |
| `Hero.tsx` | STEPS[3]: `"WhatsApp / Respuesta en minutos"` → `"Aviso directo / Por el canal que uses"` | ✅ LIVE |
| `Hero.tsx` | STEPS[4]: `"Reserva confirmada / Con recordatorio automático"` → `"Cita coordinada / Con seguimiento incluido"` | ✅ LIVE |
| `Hero.tsx` | PipelineCard footer: `"Sistema operativo"` → `"Así puede funcionar"` | ✅ LIVE |
| `Hero.tsx` | LIVE_EVENTS: `"WhatsApp enviado"` → `"Aviso directo enviado"`, `"Reserva confirmada"` → `"Cita coordinada"` | ✅ LIVE |
| `Hero.tsx` | H1: `"Ordenamos tu negocio para que venda mejor."` → `"Más presencia, más clientes, menos caos en tu negocio."` | ✅ LIVE |
| `Hero.tsx` | Sub-copy ampliado: incluye presencia + imagen + consultas | ✅ LIVE |
| `AutomationAI.tsx` | flowSteps[2]: `"Responde / Sin espera"` → `"Atiende / Cuando lo necesitas"` | ✅ LIVE |

### TIER 2 — Copy improvements

| Archivo | Cambio | Verificado |
|---|---|---|
| `Problem.tsx` | Añadidos 3 dolores de marketing/captación (total: 11 issues) | ✅ LIVE |
| `Problem.tsx` | Issue 5: `"en internet no se nota"` → `"en internet no se nota — y nadie te encuentra"` | ✅ LIVE |
| `DiagnosticForm.tsx` | Step 1 desc: `"para que Luis te contacte en menos de 24 horas"` → `"te orientamos sobre el mejor siguiente paso"` | ✅ LIVE |
| `DiagnosticForm.tsx` | Success state: eliminado `"en menos de 24 horas"` (2 instancias) | ✅ LIVE |
| `DiagnosticForm.tsx` | Footer copy: `"Respuesta en menos de 24 horas"` → `"Te orientamos sobre el mejor paso"` | ✅ LIVE |
| `Footer.tsx` | Tagline: `"Modernización Tecnológica para PYMEs · Chile"` → `"Presencia · Gestión · Crecimiento · Chile"` | ✅ LIVE |
| `CasoPatitas.tsx` | ROCCO desc: eliminado `"Demuestra que una PYME local puede atender mejor sin contratar más personal"` (resultado no verificado) | ✅ LIVE |
| `Transformation.tsx` | Añadido paso "Mostrar" (03) entre Digitalizar y Automatizar | ✅ LIVE |
| `Transformation.tsx` | H2 actualizado: incluye "Mostrar" | ✅ LIVE |
| `Transformation.tsx` | Grid: `lg:grid-cols-4` → `lg:grid-cols-5` (5 pasos) | ✅ LIVE |

### TIER 3 — Estructural

| Archivo | Cambio | Estado |
|---|---|---|
| `NeedsSelector.tsx` | Expandido a 9 opciones (añadidos: empezar, mejorar imagen, organizar agenda) | ✅ LIVE |
| `NeedsSelector.tsx` | Corregidos nombres de packs: `"Asistente IA Esencial"` → `"Atención Automática"`, `"Pack Automatización"` → `"Pack Organización"` | ✅ LIVE |

---

## VERIFICACIÓN EXTERNA (curl https://healthgrowth.cl)

```
ELIMINADOS — NO ENCONTRADOS EN PRODUCCIÓN:
✅ "api.healthgrowth.cl"          → 0 coincidencias
✅ "Sistema operativo"             → 0 coincidencias
✅ "Respuesta en minutos"          → 0 coincidencias
✅ "Reserva confirmada"            → 0 coincidencias
✅ "recordatorio autom"            → 0 coincidencias
✅ "Califica"                      → 0 coincidencias
✅ "Clasifica y responde"          → 0 coincidencias
✅ "Luis te contacte"              → 0 coincidencias
✅ "menos de 24 horas"             → 0 coincidencias
✅ "Sin espera"                    → 0 coincidencias

PRESENTES — CONFIRMADOS EN PRODUCCIÓN:
✅ "Así puede funcionar"           → 1 coincidencia
✅ "Más presencia"                 → 1 coincidencia (Hero H1)
✅ "Cita coordinada"               → 1 coincidencia
✅ "Presencia · Gestión · Crecimiento"  → 1 coincidencia (Footer)
✅ "Mostrar"                       → 1 coincidencia (Transformation)
✅ "Cuando lo necesitas"           → 1 coincidencia (AutomationAI)
✅ "Estoy empezando"               → 1 coincidencia (NeedsSelector)

NOTA — "Calendar" aparece 1 vez:
→ Contexto: "Calendario de contenido y reels para Instagram" (CasoPatitas)
→ Es español legítimo, no referencia al producto Calendar. ACEPTABLE.

NOTA — "Modernizaci" aparece en meta OG:
→ Contexto: opengraph-image alt — no visible al usuario en la página
→ No es una violación de Regla Alicia. ACEPTABLE.
```

---

## GATES BLOQUEADOS (sin cambios)

| Gate | Estado | Descripción |
|---|---|---|
| Gate-WA | BLOCKED_HUMAN | WhatsApp Business API Meta — credenciales Carlos |
| Gate-2 | BLOCKED_HUMAN | n8n owner setup |
| Gate-IG | BLOCKED_HUMAN | Instagram Meta token reauth |
| Gate-PRECIO | BLOCKED_HUMAN | Confirmación de precios para publicar |
| Gate-CORPORATE-EMAIL | PENDING | `contacto@healthgrowth.cl` existe en constants.ts como `emailFuture` — no activado |

---

## OPEN_EXECUTABLE RESIDUAL

| # | Tarea | Estado |
|---|---|---|
| 1 | Analytics eventos: `hero_cta`, `need_selected`, `pack_view`, `form_start`, `form_submit` | PENDING — requiere herramienta GA/Plausible |
| 2 | Gate-CORPORATE-EMAIL: activar `contacto@healthgrowth.cl` | PENDING — confirmar con Carlos |
| 3 | Packs journey-style navigation (ESTOY EMPEZANDO → QUIERO TODO) | PENDING — mejora futura V39 |
| 4 | FAQ: ajuste para mencionar presencia/visibilidad | PENDING — baja prioridad |

---

## NOTAS DE SEGURIDAD

- ✅ `api.healthgrowth.cl` — servicio INTACTO, solo eliminado del UI visible
- ✅ WhatsApp HG: +56 9 5101 7947 / wa.me/56951017947 — CORRECTO
- ✅ Patitas Felices / WhatsApp 3036 — NO TOCADO
- ✅ Credenciales: ninguna expuesta en código ni en este documento
