# V38 Commercial Rebuild — Operations Checkpoint

**Fecha:** 2026-10-04  
**Commit previo (V37):** 7828512  
**Commit V38 fase 1:** effff31  
**Commit V38 fase 2:** dpl_5UiR89ZrT1UMQVFymYh4tnUpp3AX
**Commit V38 fase 3:** dpl_csi5e0k8z (LiveSystemFlow dedup + FAQ extensions)
**Commit V38 fase 4+:** (SEO, Chimi, Instagram, jargon pass — commits 92c5807..ba86321)
**HEAD:** fc838d6 (VideoShowcase copy fix)  
**URL Producción:** https://healthgrowth.cl  
**Estado HTTP:** 200 ✅  
**Verificado:** 2026-10-04

---

## MISIÓN V38

Objetivo central: mover la página de "mira nuestra tecnología" → "mira todo lo que podemos hacer por tu negocio".

Aplicar **Regla Alicia**: cada sección debe ser comprensible por un dueño de PYME de 60+ años, no digital, sin contexto técnico.

---

## CAMBIOS EJECUTADOS

### Fase 1 — Limpieza de referencias internas (V38 sobre base V37)

| Componente | Cambio | Estado |
|---|---|---|
| `Hero.tsx` | Badges: `CRM propio` → `Presencia profesional`, `IA en WhatsApp` → `Más consultas`, `Agenda automática` → `Clientes organizados` | LIVE ✅ |
| `Problem.tsx` | Reescritura completa de 8 problemas en lenguaje Alicia (sin "Leads", sin jerga técnica) | LIVE ✅ |
| `NeedsSelector.tsx` | Componente nuevo: 7 chips de necesidades → recomendación de pack → scroll a #packs. sessionStorage integrado. | LIVE ✅ |
| `PacksCanonical.tsx` | Campo `forWho` añadido, nombres simplificados: "Asistente IA Esencial" → "Atención Automática", "Pack Automatización" → "Pack Organización" | LIVE ✅ |
| `CasoPatitas.tsx` | Stack técnico eliminado: `WhatsApp Business API · CRM Health Growth · IA conversacional` → `Atención por WhatsApp · Recordatorios automáticos · Registro de clientes` | LIVE ✅ |
| `ProfessionalSupport.tsx` | Badges técnicos reemplazados: `HubSpot CRM · Google Cloud · Vertex AI` → `Disciplina clínica aplicada · Procesos precisos · Implementación práctica` | LIVE ✅ |
| `page.tsx` | `<NeedsSelector />` insertado entre `<Problem />` y `<Transformation />` | LIVE ✅ |

### Fase 2 — Ajustes de coherencia

| Componente | Cambio | Estado |
|---|---|---|
| `DiagnosticForm.tsx` | Labels de dropdown actualizados para coincidir con nuevos nombres de packs: "Atención Automática — Respuesta rápida a consultas", "Pack Organización — Clientes, agenda y seguimiento" | LIVE ✅ |
| `FAQ.tsx` | 4 nuevas preguntas añadidas: redes sociales/publicidad, empezar pequeño, fuera de Santiago, contratar por etapas | LIVE ✅ |
| `LiveSystemFlow.tsx` | H2 "Así funciona el ecosistema" → "Del primer contacto a la cita confirmada". NODES[0].label "Lead llega" → "Consulta llega". NODES[2].label "IA Clasifica" → "Clasifica y responde". Badge "score:8/10" → "prioridad alta". | LIVE ✅ |
| `AutomationAI.tsx` | Chimi chat: flujo guiado "¿Qué quieres mejorar?" con 4 opciones + respuestas + DEMO label. features[2].title "Recuperación de leads" → "Clientes que no respondieron". Body copy "lead" → "cliente". | LIVE ✅ |
| `Hero.tsx` | LIVE_EVENTS: "Nuevo lead" → "Nueva consulta", "Lead calificado por IA" → "Consulta clasificada y registrada". | LIVE ✅ |
| `FAQ.tsx` | "automatización y CRM" → "automatización y registro de clientes". 4 nuevas preguntas sobre redes, empezar pequeño, Santiago, por etapas. | LIVE ✅ |
| `UseCases.tsx` | "CRM de oportunidades" → "Registro de oportunidades". | LIVE ✅ |
| `opengraph-image.tsx` | "CRM para PYMEs chilenas" → "Clientes organizados". | LIVE ✅ |
| `layout.tsx` | Title "Orden, Tecnología y Crecimiento" → "Más clientes, menos caos para tu PYME". JSON-LD ProfessionalService schema añadido. Keywords limpias. | LIVE ✅ |
| `constants.ts` | seo.title y description actualizados a lenguaje Alicia. | LIVE ✅ |
| `InstagramBlock.tsx` | Nuevo componente: @healthgrowthspa strip con descripción de contenido y "Seguir en Instagram". Insertado entre ProfessionalSupport y VideoShowcase. | LIVE ✅ |

---

## VERIFICACIÓN PRODUCCIÓN (E2E post-deploy)

```
Buscado en HTML de https://healthgrowth.cl:

✅ PRESENTE: "Presencia profesional" (Hero badge)
✅ PRESENTE: "Publicas pero" (Problem section — Alicia language)
✅ PRESENTE: "Qué quieres mejorar" (NeedsSelector heading)
✅ PRESENTE: "Te llegan mensajes" (Problem — primer issue)
✅ PRESENTE: "Disciplina clínica" (ProfessionalSupport badge)
✅ PRESENTE: "redes sociales" (FAQ — primera pregunta sobre qué hace HG)

❌ ELIMINADO: "CRM propio"
❌ ELIMINADO: "IA en WhatsApp"
❌ ELIMINADO: "Agenda automática"
❌ ELIMINADO: "Carlos OS" (de cara al público)
❌ ELIMINADO: "lead_id"
❌ ELIMINADO: "Leads hoy: 3"
❌ ELIMINADO: "Sistema activo · En tiempo real"
```

---

## ESTRUCTURA DE LA PÁGINA (orden actual)

```
1. Hero           → Propuesta de valor + PipelineCard (flujo automático)
2. Problem        → 8 dolores en lenguaje Alicia (sin jerga)
3. NeedsSelector  → ¿Qué quieres mejorar? → 7 necesidades → pack
4. Transformation → Cómo funciona el proceso
5. PacksCanonical → 6 soluciones con "Para quién es" + lenguaje llano
6. UseCases       → Rubros que atendemos
7. AutomationAI   → Chimi + cómo funciona el asistente (DEMO)
8. LiveSystemFlow → Demo del flujo · Así funciona (badge actual)
9. CasoPatitas    → Caso real Patitas Felices + Rocco
10. ProfessionalSupport → Diferenciadores sin badges técnicos
11. VideoShowcase → Video del equipo/proceso
12. FAQ           → 15 preguntas (4 visibles, expandibles)
13. DiagnosticForm → Formulario 2 pasos → WhatsApp
14. Footer + FloatingWhatsApp
```

---

## ESTADO DE INTEGRACIONES

| Canal | Estado | Bloqueo |
|---|---|---|
| Web healthgrowth.cl | LIVE ✅ | — |
| Formulario → n8n webhook | LIVE ✅ | — |
| Carlos OS / CRM interno | LIVE ✅ | — (api.healthgrowth.cl intacto) |
| WhatsApp Business HG (+56 9 5101 7947) | OPERATIVO ✅ | — |
| WhatsApp Business Meta API | BLOCKED_HUMAN | Gate-WA: credenciales Meta |
| n8n propietario | BLOCKED_HUMAN | Gate-2: setup owner |
| Instagram Meta token | BLOCKED_HUMAN | Gate-IG: reautenticar token 190 |
| Chimi IA | DEMO (no real) | Gate-WA + Gate-2 |

---

## OPEN_EXECUTABLE — PENDIENTE

Las siguientes tareas del V38 original NO fueron ejecutadas y siguen pendientes:

### Prioridad Alta
1. ~~**LiveSystemFlow duplicado**~~ — RESUELTO. El H2 "Así funciona el ecosistema" colisionaba visualmente con el pack "Ecosistema Completo". Cambiado a "Del primer contacto a la cita confirmada". LIVE ✅
2. ~~**Chimi — flujo guiado**~~ — RESUELTO. Chimi ahora pregunta "¿Qué quieres mejorar?" con 4 opciones (responder rápido / verme profesional / organizar clientes / no sé). Cada opción muestra respuesta contextual + CTA WhatsApp. Footer: "DEMO · Chimi responderá automáticamente cuando esté activo". LIVE ✅
3. ~~**Instagram section**~~ — RESUELTO. `InstagramBlock` component añadido entre ProfessionalSupport y VideoShowcase. Muestra @healthgrowthspa, descripción de contenido semanal, y "Seguir en Instagram" CTA. LIVE ✅

### Prioridad Media
4. ~~**Mobile QA**~~ — RESUELTO. overflow-x: hidden en html+body, min-h-[44px] en chips de NeedsSelector y PacksCanonical. LIVE ✅
5. ~~**SEO audit**~~ — RESUELTO. title sin "Tecnología", keywords actualizadas, JSON-LD ProfessionalService añadido, canonical correcto. LIVE ✅
6. **Analytics** — Instrumentar eventos: `hero_cta`, `need_selected`, `pack_view`, `form_start`, `form_step2`, `form_submit`. PENDING (requiere herramienta de analytics — Google Analytics / Plausible).
7. ~~**Video section**~~ — RESUELTO. Copy "pocas semanas" eliminado. Videos existen en /public/videos/empresa/. LIVE ✅

### Prioridad Baja / Documentación
8. **Precios** — Clasificar en CANONICAL_OFFER_V1: ACTIVE_CONFIRMED / HISTORICAL / NEEDS_CARLOS.
9. **Sercotec readiness** — Ampliar más allá de Capital Semilla.
10. **WhatsApp Business prep** — Documentar webhook verification, event structure, signature.
11. **n8n prep** — Documentar path de owner creation para Gate-2.
12. **Instagram Meta prep** — Documentar pasos exactos de reauth para Gate-IG.
13. **Form → Chimi contexto** — Cuando WA vaya LIVE, Chimi debe recibir datos del form para no re-preguntar.

---

## PRÓXIMA ACCIÓN HUMANA (Gates bloqueados)

```
Gate-WA: Carlos activa WhatsApp Business API en Meta Developer Portal
Gate-2:  Carlos crea owner en n8n (https://n8n.healthgrowth.cl)  
Gate-IG: Carlos reautentica Instagram token en Meta Developer Portal
Gate-PRECIO: Carlos confirma precios actuales para publicar en web
```

Sin estos gates, el flujo de automatización completo (Chimi IA real + registro automático en CRM desde web) no puede activarse.

---

## NOTAS DE SEGURIDAD

- ✅ `api.healthgrowth.cl` — INTACTO, no modificado
- ✅ WhatsApp HG: +56 9 5101 7947 / wa.me/56951017947 — CORRECTO
- ✅ Patitas Felices / 3036 — NO TOCADO
- ✅ Credenciales: ninguna expuesta en código ni en este documento
