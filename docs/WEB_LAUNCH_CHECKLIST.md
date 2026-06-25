# Web Launch Checklist — healthgrowth.cl
**Fecha:** 2026-06-25
**Objetivo:** Sitio 100% operativo para captación real hoy.

---

## BLOQUE A — Código y Build

| # | Ítem | Estado | Acción |
|---|---|---|---|
| A1 | Build sin errores | ✅ OK | `npm run build` pasa limpio |
| A2 | TypeScript sin errores críticos | ✅ OK | TS check pasa |
| A3 | Formulario envía a webhook n8n | ✅ OK | `fetch POST` a URL real |
| A4 | Campos del form completos | ✅ OK | fullName, company, email, commune, service, whatsapp, challenge |
| A5 | Metadatos source + timestamp en payload | ✅ OK | Agregados al submit |
| A6 | Estado error del form visible | ✅ OK | Muestra WA + email de fallback |
| A7 | Redirect a WhatsApp tras submit | ✅ OK | 2s delay + botón manual |
| A8 | Misión/Visión visible en la página | ✅ OK | `Mission.tsx` incluida |
| A9 | Chimi operativo con canal WA | ✅ OK | Imagen real + chat widget + CTA |
| A10 | Menú móvil hamburguesa | ✅ OK | AnimatePresence + overlay |
| A11 | Logos SVG reales (no emojis) | ✅ OK | Instagram, WhatsApp en componentes |

---

## BLOQUE B — Links y Canales

| # | Ítem | Estado | Notas |
|---|---|---|---|
| B1 | WhatsApp flotante | ✅ Activo | `+56 9 5101 7947` |
| B2 | WhatsApp en Hero | ✅ Activo | Abre chat directo |
| B3 | WhatsApp en Chimi | ✅ Activo | Mensaje pre-cargado |
| B4 | WhatsApp en formulario | ✅ Activo | Fallback si falla el form |
| B5 | Instagram | ✅ Activo | `https://www.instagram.com/healthgrowthspa/` |
| B6 | Email | ✅ Activo | `agenda.salud.digital@gmail.com` |
| B7 | Facebook | ⏸ Oculto | Sin cuenta activa todavía |
| B8 | LinkedIn | ⏸ Oculto | Sin cuenta activa todavía |
| B9 | Navbar links (anclas) | ✅ Activos | #soluciones, #mision, #chimi, #piloto, #faq |
| B10 | Política de privacidad | ✅ Activo | `/politica-de-privacidad` |
| B11 | Términos y condiciones | ✅ Activo | `/terminos-y-condiciones` |

---

## BLOQUE C — Assets Pendientes (acción de Carlos)

| # | Ítem | Estado | Qué hacer |
|---|---|---|---|
| C1 | Logo oficial | ⚠️ PLACEHOLDER | Subir a `public/logo/health-growth-logo.svg` |
| C2 | Favicon oficial | ⚠️ PLACEHOLDER (HG) | Subir a `public/favicon/favicon.svg` |
| C3 | OG Image (compartir) | ⚠️ SVG básico | Crear 1200×630px en Canva → `public/seo/og-image.png` |
| C4 | Twitter/X Image | ⚠️ SVG básico | Crear 1200×600px en Canva → `public/seo/twitter-image.png` |
| C5 | RUT de la empresa | ⚠️ PLACEHOLDER | Actualizar en `constants.ts` → `legal.rut` |

> Para C3 y C4: actualizar también las rutas en `constants.ts`:
> ```ts
> ogImage: '/seo/og-image.png',
> twitterImage: '/seo/twitter-image.png',
> ```

---

## BLOQUE D — n8n (acción de Carlos)

| # | Ítem | Estado | Ref |
|---|---|---|---|
| D1 | Workflow n8n activo | ❓ Verificar | Abrir n8n.healthgrowth.cl y confirmar `Active` |
| D2 | Nodo Google Sheets conectado | ❓ Pendiente | Ver `docs/N8N_LEADS_SETUP.md` § 4 |
| D3 | Nodo Notion conectado | ❓ Pendiente | Ver `docs/N8N_LEADS_SETUP.md` § 5 |
| D4 | Nodo Gmail alerta conectado | ❓ Pendiente | Ver `docs/N8N_LEADS_SETUP.md` § 6 |
| D5 | Prueba end-to-end del flujo | ❓ Pendiente | Ver `docs/N8N_LEADS_SETUP.md` § 7 |

---

## BLOQUE E — Deploy a Producción

| # | Ítem | Estado | Comando |
|---|---|---|---|
| E1 | Cuenta Vercel configurada | ❓ Verificar | `vercel whoami` |
| E2 | Deploy a producción | ❓ Pendiente | `vercel --prod` |
| E3 | Dominio `healthgrowth.cl` apuntado | ❓ Verificar | DNS en Vercel dashboard |
| E4 | HTTPS activo | ❓ Verificar | Automático con Vercel |
| E5 | Build en producción sin errores | ❓ Pendiente | Verificar en Vercel logs |

---

## BLOQUE F — Prueba Funcional (antes de publicar)

Ejecutar este checklist desde un celular real:

- [ ] Abrir `https://healthgrowth.cl` en móvil
- [ ] Navbar se muestra y hamburguesa funciona
- [ ] Hero carga con logo y botones visibles
- [ ] Scroll suave entre secciones
- [ ] Sección Misión/Visión visible
- [ ] Sección Chimi carga imagen y botón WA funciona
- [ ] Instagram link abre la cuenta correcta
- [ ] Formulario: llenar todos los campos y enviar
- [ ] Confirmar que llega el JSON a n8n (ver ejecución en n8n)
- [ ] Confirmar que aparece en Google Sheets / Notion
- [ ] Confirmar que llega email de alerta
- [ ] WhatsApp flotante abre el número correcto
- [ ] Footer muestra email correcto (`agenda.salud.digital@gmail.com`)
- [ ] Links de Política y Términos cargan páginas reales

---

## Resumen Ejecutivo

**Listo sin acción tuya:**
- Formulario conectado a n8n con todos los campos
- WhatsApp activo en 5 puntos del sitio
- Instagram activo
- Misión, Chimi, menú móvil, logos SVG reales

**Requiere tu acción hoy:**
1. Logo real → `public/logo/health-growth-logo.svg`
2. n8n: activar workflow y conectar Google Sheets + Gmail
3. Deploy: `vercel --prod`

**Requiere tu acción esta semana:**
- OG Image (Canva, 1200×630)
- RUT de la empresa en `constants.ts`
- Crear cuentas Facebook y LinkedIn cuando estés listo
