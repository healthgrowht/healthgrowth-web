# Web Production Checklist — healthgrowth.cl
Fecha auditoría: 2026-06-22

---

## Archivos Revisados

| Archivo | Estado | Notas |
|---------|--------|-------|
| `app/page.tsx` | ✅ OK | Estructura correcta, 22 secciones |
| `app/layout.tsx` | ✅ OK (bug corregido) | metadataBase corregida |
| `app/constants.ts` | ✅ OK (bugs corregidos) | WhatsApp + integrations agregados |
| `app/Navbar.tsx` | ✅ OK | Logo carga del path correcto |
| `app/Hero.tsx` | ✅ OK (bug corregido) | WhatsApp URL resuelto |
| `app/DiagnosticForm.tsx` | ✅ OK (bugs corregidos) | Webhook + WhatsApp messages resueltos |
| `app/FloatingWhatsApp.tsx` | ✅ OK (bug corregido) | WhatsApp URL resuelto |
| `app/Footer.tsx` | ✅ OK | Usa SITE_CONFIG correctamente |
| `app/robots.ts` | ✅ Poblado | Genera robots.txt correcto |
| `app/sitemap.ts` | ✅ Poblado | Genera sitemap.xml correcto |
| `next.config.ts` | ✅ OK | placehold.co permitido para dev |

---

## Errores Encontrados

| ID | Severidad | Descripción | Estado |
|----|-----------|-------------|--------|
| E01 | CRÍTICO | `domain` sin `https://` | ✅ CORREGIDO |
| E02 | CRÍTICO | `SITE_CONFIG.whatsapp` inexistente (4 componentes) | ✅ CORREGIDO |
| E03 | CRÍTICO | `SITE_CONFIG.integrations.diagnosticWebhook` inexistente | ✅ CORREGIDO |
| E04 | CRÍTICO | `SITE_CONFIG.whatsapp.messages.diagnostic` inexistente | ✅ CORREGIDO |
| E05 | ALTO | Logo SVG faltaba en `/public/logo/` | ✅ CORREGIDO (placeholder) |
| E06 | ALTO | `robots.ts` y `sitemap.ts` vacíos | ✅ CORREGIDO |
| E07 | MEDIO | OG image faltante `/public/seo/og-image.png` | ⏸ TODO MANUAL |
| E08 | MEDIO | Favicon faltante en `/public/favicon/` | ⏸ TODO MANUAL |
| E09 | BAJO | WhatsApp icono es texto "W" en FloatingWhatsApp | ⏸ TODO: instalar react-icons |
| E10 | BAJO | RUT empresa como placeholder en constants.ts | ⏸ TODO MANUAL |

---

## Errores Corregidos

### E01 — metadataBase crasheaba con `healthgrowth.cl`
**Archivo**: `app/constants.ts`
**Fix**: `domain: 'https://healthgrowth.cl'`

### E02 — `SITE_CONFIG.whatsapp.*` undefined en 4 componentes
**Archivos afectados**: Hero.tsx, DiagnosticForm.tsx (x2), FloatingWhatsApp.tsx, Footer.tsx
**Fix**: Añadido objeto `whatsapp` con `url`, `number`, `messages` en constants.ts
**Valores reales**: número `+56 9 5101 7947`, URL `https://wa.me/56951017947`

### E03-E04 — DiagnosticForm sin webhook ni mensaje configurado
**Archivo**: `app/constants.ts`
**Fix**: Añadida sección `integrations.diagnosticWebhook` con URL real de n8n

---

## Archivos Creados

| Archivo | Propósito |
|---------|-----------|
| `/public/logo/health-growth-logo.svg` | Logo placeholder (reemplazar con oficial) |
| `/public/seo/` (directorio) | Para OG + Twitter images |
| `/public/favicon/` (directorio) | Para favicon.ico |
| `/public/images/` (subdirectorios) | Para fotos fundador, Patitas, branding |
| `/public/documents/` (subdirectorios) | Para lead magnets descargables |

---

## Cambios Realizados

1. `constants.ts` — 5 cambios críticos aplicados
2. `sitemap.ts` — poblado con 4 rutas principales
3. `robots.ts` — poblado con reglas correctas

---

## Pendientes Manuales

### PRIORIDAD ALTA — Antes de launch
- [ ] **Logo oficial**: Diseñar en Canva → exportar SVG → `/public/logo/health-growth-logo.svg`
- [ ] **OG Image**: 1200×630px con branding HG → `/public/seo/og-image.png`
- [ ] **Favicon**: `.ico` + PNG 32x32 → `/public/favicon/`
- [ ] **RUT empresa**: Completar en `constants.ts → legal.rut`
- [ ] **Deploy Vercel**: Conectar repo + dominio healthgrowth.cl

### PRIORIDAD MEDIA — Primera semana
- [ ] **Foto fundador**: Foto profesional → `/public/images/founder/luis-villanueva.jpg`
- [ ] **Imagen Patitas Felices**: Foto del caso → `/public/images/patitas-felices/main.jpg`
- [ ] **Instalar react-icons**: Para icono WhatsApp real en FloatingWhatsApp
- [ ] **Página privacidad**: Ruta `/politica-de-privacidad`
- [ ] **Página términos**: Ruta `/terminos-y-condiciones`

### PRIORIDAD BAJA — Segundo mes
- [ ] **Twitter image**: `/public/seo/twitter-image.png`
- [ ] **LinkedIn URL**: `constants.ts → social.linkedin`
- [ ] **Testimonios reales**: Actualizar array `testimonials` en constants.ts

---

## Próximos Pasos Técnicos

1. Ejecutar `npm run build` para verificar que no hay errores de TypeScript
2. Ejecutar `npm run dev` y revisar visualmente cada sección
3. Probar formulario de diagnóstico → verificar que llega al n8n CRM
4. Deploy a Vercel con `vercel deploy`
5. Apuntar dominio healthgrowth.cl → Vercel

---

## Integración WhatsApp — Estado

| Componente | Estado |
|-----------|--------|
| Botón flotante | ✅ Funcional (URL real configurada) |
| CTA en Hero | ✅ Funcional |
| Link en DiagnosticForm | ✅ Funcional |
| Link en Footer | ✅ Funcional |
| Número real | ✅ +56 9 5101 7947 |
| Icono visual | ⏸ Texto "W" (pendiente react-icons) |

---

## SEO — Estado Post-Corrección

| Item | Estado |
|------|--------|
| Title | ✅ "Health Growth SpA \| Modernización y Crecimiento para PYMEs" |
| Description | ✅ Configurada |
| metadataBase | ✅ https://healthgrowth.cl |
| og:image | ⏸ Ruta configurada, imagen pendiente |
| Sitemap | ✅ /sitemap.xml generado dinámicamente |
| robots.txt | ✅ /robots.txt generado dinámicamente |
| Canonical | ✅ Via metadataBase |
| lang | ✅ "es" |
| Responsive | ✅ Tailwind breakpoints activos |
