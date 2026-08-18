# Manual de Marca — Health Growth SpA

> Versión 1.0 · Agosto 2026
> Uso interno y comunicaciones oficiales

---

## 1. Identidad Corporativa

**Nombre legal:** Health Growth SpA
**RUT:** 78.342.421-5
**Fundador:** Luis Carlos Alberto Villanueva Andrades
**Año:** 2026
**País:** Chile
**Dominio:** healthgrowth.cl

---

## 2. Posicionamiento

Health Growth es un **ecosistema de modernización empresarial para PYMEs** — no una agencia de marketing, no una consultora genérica, no un software SaaS.

**Propuesta de valor central:**
> Ordenamos tu atención, tus clientes y tus procesos para que tu negocio responda más rápido, pierda menos oportunidades y crezca con sistemas simples y automatizados.

**Headline oficial de la marca:**
> "Ordenamos tu negocio para que venda mejor."

---

## 3. Paleta de Colores

### Colores principales (dark mode)

| Nombre | Hex | Uso |
|--------|-----|-----|
| Negro base | `#000000` | Fondo principal |
| Zinc 950 | `#09090b` | Fondos de sección |
| Zinc 900 | `#18181b` | Cards y contenedores |

### Colores de marca

| Nombre | Tailwind | Hex aproximado | Uso |
|--------|---------|----------------|-----|
| Indigo principal | `indigo-500` | `#6366f1` | CTAs primarios, accentos, links |
| Indigo claro | `indigo-400` | `#818cf8` | Textos highlight, iconos |
| Blue complementario | `blue-500` | `#3b82f6` | Acentos secundarios, Patitas |
| Teal acento | `teal-400` | `#2dd4bf` | Gradientes del Hero |
| Verde WhatsApp | `#25D366` | — | Exclusivo para CTA WhatsApp |

### Gradiente de marca

```css
background: linear-gradient(to right, #818cf8, #60a5fa, #2dd4bf);
/* from-indigo-400 via-blue-400 to-teal-400 */
```

---

## 4. Tipografía

| Variable | Font | Uso |
|----------|------|-----|
| `--font-geist-sans` | Geist Sans | Todo el texto principal |
| `--font-geist-mono` | Geist Mono | Labels, badges, tags técnicos |

**Jerarquía visual:**
- H1 hero: `text-5xl md:text-7xl font-bold tracking-tighter`
- H2 sección: `text-3xl md:text-5xl font-bold tracking-tight`
- H3 tarjeta: `text-2xl font-bold`
- Cuerpo: `text-base/lg font-light leading-relaxed text-gray-400`
- Label/badge: `text-xs font-bold uppercase tracking-[0.3em]`

---

## 5. Logo

### Archivos disponibles

| Archivo | Ruta | Estado | Uso |
|---------|------|--------|-----|
| Logo SVG | `/public/logo/health-growth-logo.svg` | ✅ Activo | Web (header, footer, hero) |
| Logo JPEG | `/public/logo/health-growth-logo.jpeg` | ✅ Respaldo | Fallback, redes sociales |

### Descripción del logo

Logo oficial 3D con fondo azul oscuro y rayo dorado. Identidad futurista y tecnológica.

### Uso correcto del logo en web

- **Header (Navbar):** `h-10 w-auto` — horizontal, fondo transparente
- **Hero:** `h-32 md:h-40 w-auto` — con glow indigo detrás
- **Footer:** `h-14 w-auto` — tamaño medio, sin decoración extra
- **OG image:** centrado, fondo azul oscuro de marca

### Uso incorrecto

- No cambiar colores del logo
- No aplicar filtros que distorsionen la identidad
- No usar sobre fondo blanco (el logo está diseñado para dark)
- No estirar o deformar proporciones

---

## 6. Estilo Visual General

### Concepto

**Tecnológico · Limpio · Premium · Confiable · Latinoamericano**

No: exagerado, infantil, sobrecargado, genérico, corporativo-frío.

### Elementos de diseño

- **Bordes redondeados grandes:** `rounded-[32px]`, `rounded-[40px]`, `rounded-full`
- **Glassmorphism sutil:** `backdrop-blur-md`, `bg-zinc-900/60`, `border border-white/10`
- **Glow de color:** `bg-indigo-500/10 blur-[120px]` como decoración de fondo
- **Animaciones:** Framer Motion — entradas suaves, hover scale, parallax leve
- **Gradientes:** De oscuro a más oscuro, con acento de color

### Cards y contenedores

```
bg-zinc-900/30 border border-white/5 rounded-[32px]
hover: border-indigo-500/40 + bg-zinc-900/50
```

---

## 7. Tono Comunicacional

### Voz de marca

**Cercana pero profesional. Directa pero empática. Técnica pero accesible.**

### Vocabulario autorizado

- ✅ "Ordenamos" / "Organizamos" / "Automatizamos"
- ✅ "Tu negocio" / "Tu operación" / "Tu atención"
- ✅ "Sin caos" / "Sin sistemas complejos"
- ✅ "Tecnología simple" / "Acompañamiento práctico"
- ✅ "Resultados reales" / "Medibles"
- ✅ "PYMEs" / "Negocios de servicios"

### Vocabulario prohibido

- ❌ "Somos líderes" (sin evidencia)
- ❌ "Garantizamos" (resultados variables)
- ❌ "Revolucionamos" / "Disrumpimos"
- ❌ "Solución integral completa definitiva"
- ❌ Jerga técnica sin explicación
- ❌ Números inventados o inflados

---

## 8. Elementos de Marca Secundarios

### CHIMI

Gato negro — Embajador digital de Health Growth.
Rol: asesor de diagnóstico, canal de contacto, demo interactivo.
Estado actual: Demo / prototipo funcional.

### ROKITO

Mascota canina — Piloto digital de Patitas Felices.
Rol: asistente de reservas y seguimiento para negocios veterinarios.
Estado actual: En preparación / próxima activación.

---

## 9. Recursos Faltantes (ver ASSETS_REQUERIDOS.md)

- Foto real del fundador Carlos
- Imagen real de Patitas Felices
- OG image 1200×630 real
- Logo versión clara (para uso en fondo blanco)
- Favicon .ico oficial
- Portada redes sociales

---

*Documento vivo — actualizar con cada iteración de identidad.*
