# Environment Audit — Health Growth Web
Fecha: 2026-06-22

## Estado General: OPERATIVO CON BUGS CRÍTICOS CORREGIDOS

---

## Framework Detectado

- **Framework**: Next.js 16.2.4 (App Router, Turbopack)
- **Lenguaje**: TypeScript 5
- **UI**: React 19
- **Estilos**: Tailwind CSS 4
- **Animaciones**: Framer Motion 12
- **Deploy target**: Vercel (inferido por `vercel.svg` y estructura)
- **Node**: >= 20 requerido

---

## Scripts Disponibles

| Script | Comando | Uso |
|--------|---------|-----|
| Dev | `npm run dev` | Desarrollo local con Turbopack |
| Build | `npm run build` | Build de producción |
| Start | `npm start` | Servidor producción |
| Lint | `npm run lint` | ESLint |

---

## Estructura del Proyecto

```
healthgrowth-web/
├── app/                    # App Router — páginas y componentes
│   ├── page.tsx            # Página principal (una sola página)
│   ├── layout.tsx          # Layout raíz con metadata SEO
│   ├── constants.ts        # Configuración central del sitio
│   ├── globals.css         # Estilos globales
│   ├── robots.ts           # Generador robots.txt
│   ├── sitemap.ts          # Generador sitemap.xml
│   └── *.tsx               # 22 componentes de sección
├── public/                 # Assets estáticos
│   ├── logo/               # Logo oficial (SVG placeholder creado)
│   ├── seo/                # OG image, twitter card [TODO: crear]
│   ├── favicon/            # Favicon [TODO: crear]
│   ├── images/             # Imágenes del sitio [TODO: agregar]
│   ├── videos/             # Videos [TODO: agregar]
│   └── documents/          # Lead magnets descargables [TODO: agregar]
├── docs/                   # Documentación del ecosistema
├── templates/              # Plantillas reutilizables
├── content-system/         # Sistema de contenido Instagram
└── remotion-content/       # Scripts y escenas para video
```

---

## Componentes Existentes

| Componente | Función | Estado |
|-----------|---------|--------|
| `Navbar.tsx` | Navegación fija con logo y links | ✅ OK |
| `Hero.tsx` | Sección principal con CTA | ✅ OK (bug WhatsApp corregido) |
| `Problem.tsx` | Dolor de la pyme | ✅ OK |
| `Transformation.tsx` | Promesa de transformación | ✅ OK |
| `Levels.tsx` | Niveles del ecosistema HG | ✅ OK |
| `SystemFlow.tsx` | Flujo del sistema | ✅ OK |
| `AutomationAI.tsx` | Automatización + IA | ✅ OK |
| `WhyHealthGrowth.tsx` | Diferenciadores | ✅ OK |
| `ProfessionalSupport.tsx` | Autoridad del fundador | ✅ OK |
| `Chimi.tsx` | Personaje embajador | ✅ OK |
| `SocialProof.tsx` | Caso Patitas Felices | ✅ OK |
| `FAQ.tsx` | Preguntas frecuentes | ✅ OK |
| `DiagnosticForm.tsx` | Formulario → n8n → CRM | ✅ OK (bug webhook corregido) |
| `Footer.tsx` | Pie corporativo | ✅ OK |
| `FloatingWhatsApp.tsx` | Botón flotante WhatsApp | ✅ OK |
| `Benefits.tsx` | Beneficios | ✅ OK |
| `Packs.tsx` | Paquetes de servicios | ✅ OK |
| `Pillars.tsx` | Pilares del servicio | ✅ OK |
| `Mission.tsx` | Misión de HG | ✅ OK |
| `Process.tsx` | Proceso de trabajo | ✅ OK |
| `Security.tsx` | Seguridad del sistema | ✅ OK |
| `ComingSoon.tsx` | Próximamente | ✅ OK |

---

## Bugs Críticos Encontrados y Corregidos

### BUG-01 (CRÍTICO — CORREGIDO)
**`domain` sin protocolo en `constants.ts`**
- Antes: `domain: 'healthgrowth.cl'`
- Después: `domain: 'https://healthgrowth.cl'`
- Impacto: `new URL()` en layout.tsx lanzaba excepción → sitio no cargaba en producción

### BUG-02 (CRÍTICO — CORREGIDO)
**`SITE_CONFIG.whatsapp.*` no existía**
- 4 componentes usaban `SITE_CONFIG.whatsapp.url` y `SITE_CONFIG.whatsapp.number`
- El config solo tenía `SITE_CONFIG.contact.whatsapp.*`
- Fix: añadido `whatsapp` como propiedad directa en constants.ts con el número real

### BUG-03 (CRÍTICO — CORREGIDO)
**`SITE_CONFIG.integrations.diagnosticWebhook` no existía**
- DiagnosticForm.tsx lo referenciaba para enviar leads
- Fix: añadida sección `integrations` con el webhook de n8n real

### BUG-04 (CRÍTICO — CORREGIDO)
**`SITE_CONFIG.whatsapp.messages.diagnostic` no existía**
- DiagnosticForm.tsx lo usaba para el link de WhatsApp
- Fix: añadido objeto `messages` dentro de `whatsapp`

### BUG-05 (RIESGO — DOCUMENTADO)
**Logo SVG faltaba en `/public/logo/`**
- Componentes Image con `src="/logo/health-growth-logo.svg"` fallaban silenciosamente
- Fix: creado SVG placeholder → reemplazar con logo oficial

---

## Assets Pendientes (TODOs Manuales)

| Asset | Ruta | Prioridad |
|-------|------|-----------|
| Logo oficial | `/public/logo/health-growth-logo.svg` | ALTA |
| Favicon | `/public/favicon/favicon.ico` | ALTA |
| OG Image 1200x630 | `/public/seo/og-image.png` | ALTA |
| Twitter Card 1200x600 | `/public/seo/twitter-image.png` | MEDIA |
| Foto fundador | `/public/images/founder/luis-villanueva.jpg` | MEDIA |
| Imagen Patitas Felices | `/public/images/patitas-felices/main.jpg` | MEDIA |
| RUT empresa | `constants.ts → legal.rut` | ALTA |
| URL LinkedIn | `constants.ts → social.linkedin` | BAJA |

---

## Dependencias Instaladas

| Paquete | Versión | Uso |
|---------|---------|-----|
| next | 16.2.4 | Framework |
| react | 19.2.4 | UI |
| framer-motion | 12.40.0 | Animaciones |
| tailwindcss | 4.x | Estilos |

## Dependencias Faltantes / Sugeridas

| Paquete | Para qué | Prioridad |
|---------|----------|-----------|
| `react-icons` | Iconos WhatsApp, Instagram, etc. | ALTA |
| `react-hook-form` | Validación formularios | MEDIA |
| `zod` | Validación schemas | MEDIA |
| `resend` o `nodemailer` | Email desde servidor | BAJA |

---

## SEO — Estado

| Item | Estado |
|------|--------|
| title / description | ✅ Configurados |
| Open Graph | ✅ Configurado (falta imagen) |
| Twitter Cards | ✅ Configurado (falta imagen) |
| Sitemap | ✅ Generado dinámicamente |
| robots.txt | ✅ Generado dinámicamente |
| metadataBase | ✅ Corregido (https://) |
| lang="es" | ✅ Configurado |
| scroll-smooth | ✅ Configurado |

---

## Riesgos Activos

| Riesgo | Severidad | Acción |
|--------|-----------|--------|
| Logo placeholder en producción | ALTA | Reemplazar con logo oficial |
| OG image faltante | ALTA | Diseñar y subir |
| RUT [TODO] en footer | MEDIA | Completar en constants.ts |
| Sin validación server-side del form | MEDIA | n8n valida en el webhook |
| No hay página de privacidad | MEDIA | Crear `/politica-de-privacidad` |
| WhatsApp icono es solo "W" texto | BAJA | Instalar react-icons |

---

## Próximos Pasos Recomendados

1. **HOY**: Reemplazar logo SVG placeholder con logo oficial → `/public/logo/`
2. **HOY**: Crear OG image 1200x630 con Canva → `/public/seo/og-image.png`
3. **ESTA SEMANA**: Crear páginas de política de privacidad y términos
4. **ESTA SEMANA**: Instalar `react-icons` para iconos reales de WhatsApp
5. **ESTE MES**: Agregar fotos reales (fundador, Patitas Felices, testimonios)
6. **ESTE MES**: Deploy a Vercel con dominio `healthgrowth.cl`

---

## Qué Requiere Credenciales Externas

- **Vercel**: cuenta + dominio apuntado → deploy a producción
- **n8n webhook**: ya configurado en constants.ts
- **Google Fonts**: automático via next/font (no requiere API key)
