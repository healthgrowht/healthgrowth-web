# PUBLIC WEBSITE AUDIT — healthgrowth.cl
# Fecha: 2026-09-02 | Auditor: Claude Code (CTO mode)
# Mission: HEALTH_GROWTH_VS_PUBLIC_WEB_GROWTH_MASTER_20260902

---

## ESTADO FINAL

```
BUILD:          ✅ PASS (npm run build, TypeScript OK, 11 páginas)
DEPLOY TARGET:  healthgrowth.cl (Vercel)
P0 ISSUES:      1 encontrado → 1 resuelto ✅
P1 ISSUES:      2 encontrados → 2 resueltos ✅
P2 ISSUES:      0
VETERINARY BUG: NO ENCONTRADO (Patitas = Peluquería Canina en toda la web)
RAW DEV STRINGS: NO ENCONTRADOS
```

---

## INVENTARIO DE RUTAS

| Ruta | Título | Propósito | CTA Principal | Indexable | Estado |
|------|--------|-----------|---------------|-----------|--------|
| `/` | Home | Landing completo | Diagnóstico gratuito | Sí | ✅ OK |
| `/politica-de-privacidad` | Política de Privacidad | Legal compliance | Email/WA | Sí | ✅ OK |
| `/terminos-y-condiciones` | Términos | Legal | - | Sí | ✅ OK |
| `/dashboard` | Dashboard (auth) | Interno | - | No | ✅ OK |
| `/dashboard/leads` | Leads (auth) | Interno | - | No | ✅ OK |

---

## INVENTARIO DE SECCIONES (homepage)

| Sección | Componente | Issues | Status |
|---------|-----------|--------|--------|
| Hero | `Hero.tsx` | Ninguno | ✅ |
| Problema | `Problem.tsx` | Ninguno | ✅ |
| Transformación | `Transformation.tsx` | Ninguno | ✅ |
| Soluciones/Packs | `PacksCanonical.tsx` | Ninguno | ✅ |
| Rubros | `UseCases.tsx` | Grooming = Peluquería Canina (correcto) | ✅ |
| Automatización/Chimi | `AutomationAI.tsx` | Demo = labeled as demo | ✅ |
| Caso Patitas | `CasoPatitas.tsx` | P1 corregido | ✅ |
| Diferenciadores | `ProfessionalSupport.tsx` | P1 corregido | ✅ |
| FAQ | `FAQ.tsx` | "veterinarias" = segmento correcto | ✅ |
| Formulario diagnóstico | `DiagnosticForm.tsx` | P0 corregido | ✅ |
| Footer | `Footer.tsx` | Ninguno | ✅ |

---

## HALLAZGOS Y RESOLUCIONES

### P0 — DiagnosticForm: Silent catch + fake success + sin consentimiento
**Archivo:** `app/DiagnosticForm.tsx`
**Severidad:** P0 (lead loss + compliance risk)

**Problema 1: Silent catch**
```typescript
// ANTES (bug)
} catch {
  // silencioso — la conversión sigue por WhatsApp
}
setStatus('success'); // siempre mostraba éxito aunque el fetch fallara
```
```typescript
// DESPUÉS (fix)
let ok = false;
try {
  const res = await fetch(...);
  ok = res.ok;
} catch {
  ok = false;
}
setSubmitOk(ok);
setStatus('success');
// Mensaje diferenciado en pantalla de éxito según ok
```

**Problema 2: Sin consentimiento de privacidad**
- Violación potencial de Ley 21.719 (vigente Dec-2026)
- Fix: Checkbox requerido "He leído y acepto la Política de Privacidad"
- Se envía `consent_privacy: true` en el payload al backend
- Link a `/politica-de-privacidad` en el checkbox

**Fallback preservado:** WhatsApp se abre en 1.5s independientemente → ningún lead se pierde.

---

### P1 — CasoPatitas: Automation claim prematura
**Archivo:** `app/CasoPatitas.tsx`
**Severidad:** P1 (overclaim de funcionalidad no live)

```typescript
// ANTES
{ icon: "🔔", item: "Automatización de confirmación y recordatorio de citas" }
// renderizado con ✓ verde igual que los ítems ya implementados

// DESPUÉS
{ icon: "🔔", item: "Automatización de confirmación y recordatorio de citas", done: false }
// renderizado con ⏳ amber + "(en implementación)"
```

**Contexto:** PATCH-002 (reminder_runner.js) no fue desplegado. Correcto que sea `done: false`.

---

### P1 — ProfessionalSupport: Lenguaje UCI
**Archivo:** `app/ProfessionalSupport.tsx`
**Severidad:** P1 (clinical framing excesivo)

```
ANTES: "Enfermero con 10+ años en entornos críticos. Fundador de Health Growth para aplicar
        la misma precisión operativa de una UCI a los procesos de PYMEs chilenas."

DESPUÉS: "Enfermero con 10+ años en entornos de alta exigencia. Fundador de Health Growth para
          traer la misma disciplina operativa a la gestión de PYMEs chilenas."
```

**Cambio:** "entornos críticos" → "alta exigencia" | "UCI" eliminada | "precisión operativa" → "disciplina operativa"
**Credencial del fundador preservada.** Framing de PYME modernizado.

---

## VERIFICACIONES NEGATIVAS (buscado, no encontrado)

```
"veterinaria" en contexto de Patitas = veterinaria    → NO ENCONTRADO ✅
"n8n_integration_ready"                                → NO ENCONTRADO ✅
"SYSTEM_CORE_ACTIVE"                                   → NO ENCONTRADO ✅
"rigor clínico"                                        → NO ENCONTRADO ✅
raw developer strings en public pages                  → NO ENCONTRADO ✅
Patitas described as veterinary                        → NO ENCONTRADO ✅
```

**Nota:** "veterinarias" aparece en FAQ.tsx como segmento de clientes HG (correcto — HG sí puede servir a veterinarias).

---

## FLUJO FORMULARIO → BACKEND (verificado)

```
DiagnosticForm (step 2 submit)
  → POST https://api.healthgrowth.cl/api/capture
  → carlos-os dashboard_server.js: endpoint /api/capture CONFIRMED EXISTS (SSH 2026-09-02)
  → Fallback: WA abre en 1.5s independientemente

Payload incluye:
  nombre, negocio, email, telefono, ciudad, rubro, necesidad
  source: 'web-healthgrowth.cl'
  timestamp, utmSource, consent_privacy: true
```

**Nota sobre CLAUDE.md:** El archivo menciona `https://n8n.healthgrowth.cl/webhook/...` como URL del webhook de diagnóstico, pero `constants.ts` apunta a `https://api.healthgrowth.cl/api/capture`. El código real es la fuente de verdad.

---

## SEO / ACCESIBILIDAD (observaciones)

| Check | Estado | Nota |
|-------|--------|------|
| `<title>` en homepage | ✅ | Verificado via build |
| `alt` en imágenes | ✅ | Next.js Image component usado |
| `lang="es"` en html | No verificado | Revisar layout.tsx |
| robots.txt | ✅ | Ruta generada |
| sitemap.xml | ✅ | Ruta generada |
| OG image | ⚠️ | `/public/seo/og-image.png` = placeholder (CLAUDE.md) |
| Favicon | ⚠️ | Placeholder (CLAUDE.md) |

---

## PENDIENTES POST-DEPLOY

```
[ ] Verificar healthgrowth.cl live tras deploy
[ ] Test form submission desde navegador (verificar consent checkbox funciona)
[ ] Verificar que /api/capture recibe consent_privacy en payload
[ ] Confirmar OG image no es placeholder en compartir social
[ ] Agregar lang="es" a root layout si falta
[ ] Test mobile: overflow horizontal (diagnóstico, packs, rubros)
```

---

## PENDIENTES HUMANOS (no código)

```
CARLOS:
  [ ] Reemplazar /public/logo/health-growth-logo.svg con logo oficial
  [ ] Crear /public/seo/og-image.png (1200x630) en Canva
  [ ] Actualizar constants.ts: legal.rut (si está pendiente)
  [ ] Actualizar CLAUDE.md: cambiar URL del webhook a api.healthgrowth.cl/api/capture

CONTENIDO:
  [ ] Completar SITE_CONFIG.testimonials con testimonios reales (array vacío ahora)
  [ ] Activar chimiWebhook en constants.ts cuando esté listo
  [ ] Publicar caso Patitas con métricas reales (después de First E2E)
```
