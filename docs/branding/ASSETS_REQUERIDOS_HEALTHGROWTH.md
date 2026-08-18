# Assets Requeridos — Health Growth SpA

> Agosto 2026 · Pendientes para identidad visual completa

---

## Estado actual de assets

| Asset | Ruta | Estado | Prioridad |
|-------|------|--------|-----------|
| Logo SVG | `/public/logo/health-growth-logo.svg` | ✅ Disponible | — |
| Logo JPEG | `/public/logo/health-growth-logo.jpeg` | ✅ Disponible | — |
| Favicon SVG | `/public/favicon/favicon.svg` | ✅ Placeholder | Alta |
| OG Image | `/public/seo/og-image.svg` | ⚠️ Placeholder SVG | Alta |
| Twitter Image | `/public/seo/twitter-image.svg` | ⚠️ Placeholder SVG | Media |
| Foto fundador | `/public/images/founder/founder.svg` | ❌ Placeholder SVG | Alta |
| Imagen Patitas Felices | `/public/images/patitas-felices/main.svg` | ❌ Placeholder SVG | Media |
| Imagen Chimi | `/public/images/chimi.jpeg` | ✅ Real | — |
| Chimi collage | `/public/images/branding/chimi-santiago-collage.jpeg` | ✅ Real (AI) | — |
| Chimi comic ep1 | `/public/images/branding/chimi-aventuras-ep1.jpeg` | ✅ Real (AI) | — |
| Videos empresa | `/public/videos/empresa/video-empresa-0{1,2,3}.mp4` | ✅ Disponibles | Revisar títulos |
| Reels (42 videos) | `/public/videos/reels/reel-*.mp4` | ✅ Disponibles | — |
| Fotos WhatsApp (4) | `/public/upload/WhatsApp Image 2026-06-09*.jpeg` | ⚠️ Sin clasificar | Revisar uso |

---

## Assets prioritarios faltantes

### 1. Foto real del fundador — ALTA PRIORIDAD

**Ruta destino:** `/public/images/founder/carlos-villanueva.jpg`
**Actualizar en:** `app/constants.ts` → `SITE_CONFIG.founder.image`

**Especificaciones:**
- Formato: JPG o WEBP
- Dimensiones: mínimo 800×1000px (orientación vertical/retrato)
- Relación de aspecto: 4:5 (para el contenedor actual)
- Fondo: preferir fondo oscuro, neutro o difuminado
- Estilo: profesional pero cercano, no traje formal
- Iluminación: buena, sin contra-luz

**Opciones de producción:**
- [ ] Foto profesional con fotógrafo
- [ ] Selfie de calidad con buena iluminación
- [ ] Foto generada con IA basada en apariencia real (solo si es honesta)

---

### 2. OG Image — ALTA PRIORIDAD

**Ruta destino:** `/public/seo/og-image.png`
**Actualizar en:** `app/layout.tsx` → `openGraph.images[0].url`

**Especificaciones:**
- Formato: PNG o JPG
- Dimensiones: **1200 × 630 px** (estándar Open Graph)
- Fondo: azul muy oscuro de marca (`#0a0a1a` a `#0d0d2b`)
- Elementos mínimos:
  - Logo Health Growth centrado o izquierda superior
  - Texto principal: "Ordenamos tu negocio para que venda mejor."
  - Subtexto: "Modernización · Automatización · Crecimiento · Chile"
  - Dominio: healthgrowth.cl
- Estilo: tecnológico, limpio, premium

**Herramientas recomendadas:**
- [ ] Canva (plantilla 1200×630)
- [ ] Figma
- [ ] Adobe Express

---

### 3. Favicon oficial — ALTA PRIORIDAD

**Ruta destino:** `/public/favicon.ico` y `/public/favicon/favicon.svg`

**Especificaciones:**
- `.ico`: 32×32px, 16×16px (multi-size)
- `.svg`: isotipo del logo, versión cuadrada
- `.png`: 512×512px para PWA

**Opciones:**
- [ ] Extraer isotipo del logo oficial
- [ ] Crear isotipo simplificado (ej: "HG" estilizado)
- [ ] Usar solo las letras HG en indigo sobre negro

---

### 4. Imagen Patitas Felices — MEDIA PRIORIDAD

**Ruta destino:** `/public/images/patitas-felices/patitas-main.jpg`
**Actualizar en:** `app/constants.ts` → `SITE_CONFIG.pilotProjects.patitasFelices.images.main`

**Especificaciones:**
- Formato: JPG o WEBP
- Dimensiones: mínimo 800×600px
- Contenido posible:
  - Fachada del local
  - Interior del negocio
  - Mascota siendo atendida (con permiso del dueño)
  - Logo de Patitas Felices
- Estilo: real, cálido, natural

---

### 5. Portada Redes Sociales

**Ruta destino:** `/public/seo/portada-instagram.jpg` / `portada-linkedin.jpg`

**Especificaciones Instagram:**
- 1080×1080px (feed) o 1080×608px (story/portada)

**Especificaciones LinkedIn:**
- 1584×396px (portada empresa)

---

### 6. Logo versión clara (para uso en fondo blanco)

**Ruta destino:** `/public/logo/health-growth-logo-light.svg`

**Especificaciones:**
- Misma composición que el logo actual
- Adaptado para fondo blanco o claro
- Uso: documentos Word/PDF, presentaciones PowerPoint, firma email

---

## Fotos en `/public/upload/` — Revisar y clasificar

Estas 4 imágenes llegaron por WhatsApp en junio 2026 y aún no están clasificadas:

```
WhatsApp Image 2026-06-09 at 03.01.48.jpeg
WhatsApp Image 2026-06-09 at 09.12.30.jpeg
WhatsApp Image 2026-06-09 at 09.16.31.jpeg
WhatsApp Image 2026-06-10 at 13.34.58.jpeg
```

**Acción requerida:**
- [ ] Carlos revisa cuáles son útiles
- [ ] Si son del fundador → mover a `/public/images/founder/`
- [ ] Si son de Patitas Felices → mover a `/public/images/patitas-felices/`
- [ ] Renombrar con nombres descriptivos
- [ ] Eliminar las que no sirvan

---

## Assets para video futuro

| Video | Descripción | Estado |
|-------|-------------|--------|
| Video presentación empresa | 60-90 segundos, quién es Health Growth | ❌ Pendiente |
| Video demo automatización | Muestra cómo funciona n8n/WhatsApp | ❌ Pendiente |
| Video caso Patitas Felices | Resultado del piloto | ❌ Pendiente |
| Video CHIMI | Demo del asistente en acción | ❌ Pendiente |
| Testimonial en video | Cliente real hablando | ❌ Pendiente (requiere cliente) |

**Nota:** Los 3 videos actuales en `/public/videos/empresa/` son generados con IA (Gemini). Revisar si son apropiados para el contexto de presentación antes de referirlos como "videos de la empresa".

---

## Prompts para generación futura

### OG Image (Canva/Figma)

```
Fondo: azul muy oscuro #0a0a1a
Logo Health Growth: parte superior izquierda, 250px
Texto H1: "Ordenamos tu negocio / para que venda mejor." — blanco, bold, 48px
Subtexto: "Modernización · Automatización · Crecimiento · Chile" — gris claro, 18px
Elemento decorativo: líneas de circuito o puntos en indigo muy sutil
Dominio: healthgrowth.cl — esquina inferior derecha, indigo 400
```

### Foto fundador con IA (si aplica)

```
Professional headshot of a Chilean man in his 30s, dark background,
confident but approachable expression, casual professional clothing,
studio lighting, realistic photography style, no suit required
```

---

*Actualizar este archivo a medida que se consigan los assets.*
