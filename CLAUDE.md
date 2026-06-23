@AGENTS.md

# Health Growth Web — Guía para Claude Code

## Proyecto
Next.js 16.2.4 + React 19 + TypeScript 5 + Tailwind CSS 4 + Framer Motion 12
Una sola página (landing page) con múltiples secciones.

## Regla Maestra
NO abrir líneas nuevas sin cerrar bases mínimas.
Orden: operativo → visual → automatizado → escalado.

## Configuración Central
TODAS las constantes, URLs, tokens placeholder y textos configurables están en:
`app/constants.ts` — editar SOLO aquí para cambiar datos del negocio.

## WhatsApp
Número real: +56 9 5101 7947
URL wa.me: https://wa.me/56951017947
Usar siempre `SITE_CONFIG.whatsapp.url` y `SITE_CONFIG.whatsapp.number`

## n8n Webhook (producción)
Formulario de diagnóstico → `SITE_CONFIG.integrations.diagnosticWebhook`
URL: https://n8n.healthgrowth.cl/webhook/a0b41fdd-697f-4026-9c95-51a329b2cd00/webhook-hg/hg-captacion

## Estructura
```
app/           → componentes y páginas (App Router)
public/        → assets estáticos (logo, imágenes, SEO)
docs/          → documentación del ecosistema (19 archivos)
templates/     → plantillas reutilizables (diagnóstico, propuesta, CRM)
content-system/ → sistema de contenido Instagram (calendario, hooks, etc.)
documents/     → lead magnets descargables (checklists, guías, plantillas)
remotion-content/ → scripts para video (no instalar Remotion todavía)
```

## Assets Pendientes (TODOs manuales — no código)
- /public/logo/health-growth-logo.svg → reemplazar placeholder con logo oficial
- /public/seo/og-image.png → crear en Canva 1200x630
- /public/favicon/favicon.ico → crear favicon oficial
- constants.ts → legal.rut → completar RUT de la empresa

## Deploy
Plataforma target: Vercel
Comando: `vercel deploy` (requiere cuenta Vercel configurada)

## Scripts
```bash
npm run dev    # desarrollo con Turbopack
npm run build  # build producción
npm run lint   # ESLint
```

## Seguridad
- NO hardcodear tokens en código
- Variables sensibles → n8n Settings → Variables de entorno
- SSH a VMs → solo via IAP (ver docs/security-system.md)

## Documentación del Ecosistema
Ver /docs/ para toda la documentación estratégica y operativa.
Ver /docs/environment-audit.md para el estado actual completo.
