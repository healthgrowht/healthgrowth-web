# WEB HEALTH GROWTH — ESTADO DE OPTIMIZACIÓN v1 CIERRE COMERCIAL
Última actualización: 2026-06-26

---

## ESTADO LOCAL vs PRODUCCIÓN

| Item | Estado |
|------|--------|
| Cambios sesión 1 (10 componentes) | ✅ En local y en producción |
| Cambios sesión 2 cierre comercial (4 componentes) | ✅ En local y en producción |
| Deploy a producción | ✅ Ejecutado 26-jun-2026 |
| healthgrowth.cl | ✅ Verificado — muestra versión optimizada |
| www.healthgrowth.cl | ✅ Verificado — muestra versión optimizada |

**Deployment ID:** `dpl_HSqhpvj1zvu85Rd2RGuN94PWvDFL`
**Inspector:** https://vercel.com/agendasaluddigital-1993s-projects/healthgrowth-web/HSqhpvj1zvu85Rd2RGuN94PWvDFL

---

## POLÍTICA DE PRECIOS (criterio oficial)

Los precios de Health Growth están definidos internamente. **No se publican en la web** por estrategia comercial. Se entregan después de la evaluación inicial, personalizada según la realidad del negocio.

Texto aprobado para FAQ y comunicaciones:
> "Los planes se cotizan después de una evaluación inicial, para recomendarte solo lo que realmente necesita tu negocio ahora. No publicamos precios fijos porque cada negocio es diferente."

---

## CAMBIOS SESIÓN 1 (26-jun-2026 — Optimización comercial)

### 1. Hero.tsx
- Badge: "Agencia de Modernización..." → "Modernización Digital para PYMEs · Chile"
- H1: "Ordenamos tu negocio para que venda mejor."
- Párrafo principal más directo y concreto
- Párrafo secundario: identifica público objetivo explícitamente
- CTA primario: "Quiero ordenar mi negocio"
- CTA secundario: "Hablar por WhatsApp" + URL con mensaje precargado

### 2. FAQ.tsx
- Expandido de 5 a 11 preguntas
- Título: "Preguntas Frecuentes"
- Cubre: ¿Qué hace HG?, ¿Para quién?, ¿Solo redes?, ¿WhatsApp?, ¿Automatización?, ¿Negocios chicos?, ¿Tecnología?, ¿Tiempos?, ¿Cómo empezar?, ¿Qué pasa después?, ¿Precios?

### 3. Problem.tsx
- Dolores: 4 → 7 puntos específicos y cercanos

### 4. WhyHealthGrowth.tsx
- Typo: "HealthGrowth" → "Health Growth"

### 5. Mission.tsx
- "Visión 2030" → "Visión" (sin fecha ambiciosa)
- Lenguaje aterrizado: "Hoy comenzamos contigo."

### 6. Footer.tsx
- RUT 78.342.421-5 visible como señal de confianza
- "Empresa Constituida · 2026"

### 7. SocialProof.tsx
- Sección reescrita: describe Patitas Felices como veterinaria/peluquería canina
- Lista 4 ítems implementados reales
- Lenguaje honesto: "caso piloto honesto, no resultados exagerados"
- CTA: "Quiero algo así para mi negocio"

### 8. Chimi.tsx
- Estado: "En línea" → "Demo interactivo"
- Botón: "Hablar real →"
- Nota: "Este es un demo — el equipo real te atiende por WhatsApp"

### 9. ProfessionalSupport.tsx
- Párrafos reforzados con mirada operativa y insight clínico
- Tags: + "IA Aplicada", "Automatización", "Healthtech"
- Quote más potente

### 10. constants.ts
- navLinks: agregado "Servicios" → `#servicios`, "Caso Patitas" reemplaza "Caso Éxito"

---

## CAMBIOS SESIÓN 2 (26-jun-2026 — Cierre comercial)

### 11. AutomationAI.tsx
- "Atención 24/7" → "Respuestas fuera del horario"
- "Seguimiento Infalible" → "Seguimiento Programado"
- "reducir ausentismos a cero" → "ayudan a reducir inasistencias y olvidos"
- H2: "Tu negocio nunca deja de trabajar" → "Tu operación trabaja aunque no estés"
- Descripción: "garantizar que cada contacto..." → "diseñado para que cada consulta..."

### 12. Transformation.tsx
- "Recordatorios automáticos que aseguran asistencia" → "...que ayudan a reducir inasistencias"

### 13. SystemFlow.tsx
- "Encriptación End-to-End" → "Manejo Responsable de Datos"
  (Health Growth no es el proveedor de la encriptación; la E2E es de WhatsApp, no una promesa propia)

### 14. FAQ.tsx — Pregunta de precios
- Respuesta reescrita con política comercial correcta:
  los precios no se publican, se cotizan después de evaluación inicial, proporcionales a la realidad del negocio.

---

## CAMBIOS NO REALIZADOS Y POR QUÉ

| Cambio | Razón |
|--------|-------|
| Deploy automático | Instrucción explícita: no deployar sin confirmación |
| Foto real del fundador | Pendiente humano — no hay imagen disponible |
| Imagen real Patitas Felices | Pendiente humano |
| Testimonios reales | No hay disponibles — sección comentada |
| Precios en la web | Decisión estratégica: no se publican |
| OG image real 1200×630 | Pendiente humano (SVG placeholder activo, no bloquea) |
| Limpiar `import React` en todos los archivos | Lint pasa sin errores — son hints del IDE, no afectan build |

---

## PENDIENTES NO BLOQUEANTES PARA SOFT LAUNCH

Pueden esperar después del deploy inicial:

1. Foto real de Carlos → `/public/images/founder/` → actualizar `SITE_CONFIG.founder.image`
2. Imagen real de Patitas Felices para SocialProof
3. OG image real 1200×630 → `/public/seo/og-image.png` (SVG placeholder funciona)
4. Facebook/LinkedIn → cuando se creen, activar en `constants.ts`
5. Testimonio real de Patitas Felices → cuando esté disponible

---

## SECCIONES REVISADAS — ESTADO FINAL

| Sección | Estado |
|---------|--------|
| Hero | ✅ Optimizado |
| Problem | ✅ Optimizado |
| UseCases | ✅ Sin cambios — correcto |
| Transformation | ✅ Promesa ajustada |
| Levels | ✅ Sin cambios — correcto |
| Services | ✅ Sin cambios — correcto |
| SystemFlow | ✅ Encriptación corregida |
| AutomationAI | ✅ Promesas absolutas corregidas |
| Mission | ✅ Visión 2030 aterrizada |
| WhyHealthGrowth | ✅ Typo corregido |
| ProfessionalSupport | ✅ Reforzado |
| Chimi | ✅ Demo marcado correctamente |
| SocialProof (Patitas) | ✅ Caso piloto honesto |
| Roquito | Sin cambios — imagen SVG placeholder |
| VideoShowcase | Sin cambios — videos reales existen |
| SocialMediaReferences | Sin cambios — correcto |
| FAQ | ✅ 11 preguntas + precio correcto |
| DiagnosticForm | Sin cambios — correcto con fallback WhatsApp |
| Footer | ✅ RUT + empresa constituida |
| Navbar | navLinks actualizados vía constants.ts |
| FloatingWhatsApp | Sin cambios — correcto |
| SEO/Metadata | Sin cambios — ya correcto |
| Páginas legales | Sin cambios — ya existían |

---

## VALIDACIÓN TÉCNICA

- `npm run lint` → ✅ PASS (0 errores)
- `npm run build` → ✅ PASS (11/11 páginas, 0 errores TypeScript)

---

## DEPLOY PRODUCCIÓN

- **Fecha:** 2026-06-26
- **Comando:** `vercel deploy --prod`
- **Proyecto:** healthgrowth-web (agendasaluddigital-1993)
- **Deployment ID:** dpl_HSqhpvj1zvu85Rd2RGuN94PWvDFL
- **healthgrowth.cl:** ✅ Muestra versión optimizada
- **www.healthgrowth.cl:** ✅ Muestra versión optimizada
- **Hero verificado:** "Ordenamos tu negocio para que venda mejor."
- **CTA verificado:** "Quiero ordenar mi negocio"
- **FAQ verificado:** 11 preguntas visibles
- **Chimi verificado:** "Demo interactivo"
- **Patitas verificado:** "caso piloto honesto, no resultados exagerados"
