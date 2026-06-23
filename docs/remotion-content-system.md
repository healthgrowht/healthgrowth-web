# HG-Remotion — Sistema de Video con Código
Versión: 1.0 | Fecha: 2026-06-22 | Estado: DOCUMENTADO (no instalar todavía)

---

## Qué es Remotion

Remotion es una librería de React que permite crear videos programáticamente.
Se escribe código → se renderiza como MP4.
Ideal para: videos explicativos, motion graphics, visualización de datos, demos repetibles.

**URL oficial**: https://remotion.dev

---

## Cuándo Usar Remotion en Health Growth

✅ Videos explicativos sobre el ecosistema HG
✅ Demo del flujo de captación de leads (animado)
✅ Visualización del pipeline CRM con datos
✅ Intro/outro profesional para reels
✅ Videos de onboarding para nuevos clientes
✅ Case study animado de Patitas Felices

❌ NO para videos de cara/hablando (usar HeyGen o Runway)
❌ NO para objetos parlantes (usar prompts de IA)
❌ NO cuando es más rápido hacerlo en Canva

---

## Cuándo NO Usar Remotion

- La web aún no está en producción → primero lanzar healthgrowth.cl
- El entorno de desarrollo no tiene Node.js 18+ configurado correctamente
- El contenido es simple (carrusel o imagen → usar Canva)
- No hay tiempo para configurar el entorno inicial

---

## Instrucción de Instalación (cuando sea el momento)

```bash
# En el directorio del proyecto
cd healthgrowth-web

# Crear proyecto Remotion separado (no dentro de Next.js)
npx create-video@latest remotion-videos

# O instalar en proyecto separado
mkdir remotion-videos
cd remotion-videos
npm init remotion@latest
```

**IMPORTANTE**: Remotion tiene su propio servidor de desarrollo. No mezclarlo con Next.js.
Crear en carpeta separada: `C:\Users\carlo\remotion-videos\`

---

## Estructura Sugerida del Proyecto Remotion

```
remotion-videos/
├── src/
│   ├── Root.tsx              → Composiciones registradas
│   ├── index.ts              → Entry point
│   └── compositions/
│       ├── HGIntro.tsx       → Intro Health Growth
│       ├── LeadFlow.tsx      → Flujo de captación animado
│       ├── PipelineCRM.tsx   → Pipeline de 10 estados
│       ├── PatitasCase.tsx   → Caso Patitas Felices
│       └── ChimiExplains.tsx → Chimi explicando un concepto
├── public/
│   └── [assets de video]
└── package.json
```

---

## Estructura Base de Todo Video HG

```
FRAME 0-60     → HOOK (3 segundos)
   ↓ texto grande, música sube
FRAME 60-180   → PROBLEMA (5 segundos)
   ↓ animación del problema
FRAME 180-360  → SOLUCIÓN (10 segundos)
   ↓ pantalla del sistema funcionando
FRAME 360-480  → PRUEBA/CASO (5 segundos)
   ↓ logo Patitas Felices + resultado
FRAME 480-540  → CTA (3 segundos)
   ↓ texto: "Diagnóstico gratis → link en bio"
```

---

## Regla de Trabajo con Remotion

**NO hacer el video completo con un prompt gigante.**

Trabajar por capas:
1. **Estructura**: definir escenas y tiempos en comentarios
2. **Visual**: agregar elementos visuales estáticos primero
3. **Movimiento**: añadir animaciones (`interpolate`, `spring`, `useCurrentFrame`)
4. **Ajuste fino**: timing, colores, tipografía

---

## Formatos de Exportación

| Formato | Dimensiones | Uso |
|---------|------------|-----|
| Reel vertical | 1080×1920 (9:16) | Instagram Reels |
| Post cuadrado | 1080×1080 (1:1) | Feed Instagram |
| Story | 1080×1920 (9:16) | Instagram Stories |
| Horizontal | 1920×1080 (16:9) | YouTube, presentaciones |

---

## Checklist de Exportación

- [ ] Formato correcto para el canal (9:16 para Reels)
- [ ] FPS: 30 (estándar Instagram)
- [ ] Duración máxima: 90 segundos para Reels
- [ ] Audio: sin copyright o con licencia Creative Commons
- [ ] Subtítulos: si el video tiene narración
- [ ] Logo HG: presente en primer y último frame
- [ ] CTA: visible en los últimos 5 segundos

---

## Problemas Frecuentes y Soluciones

| Problema | Solución |
|----------|---------|
| Render muy lento | Bajar calidad durante desarrollo (`--scale=0.5`) |
| Error de fuentes | Usar `@remotion/google-fonts` |
| Assets no cargan | Moverlos a `/public` del proyecto Remotion |
| Next.js conflict | Remotion en carpeta SEPARADA de Next.js |
| ffmpeg no encontrado | `npm install @remotion/cli` incluye ffmpeg |

---

## Primeras Composiciones a Crear

1. **HGIntro** (30 segundos)
   - Logo animado de Health Growth
   - Tagline: "Orden, tecnología y crecimiento para tu negocio"
   - Para usar como intro en todos los videos

2. **LeadFlow** (60 segundos)
   - Visualización animada del flujo Instagram → web → CRM → cierre
   - Para presentaciones a clientes

3. **ChimiTip** (15 segundos)
   - Template reutilizable donde Chimi da un tip semanal
   - Cambiar solo el texto → video listo en 5 minutos

---

## Carpeta de Contenido Remotion en este Proyecto

```
remotion-content/
├── scripts/      → Guiones de video antes de producir
├── scenes/       → Bocetos de escenas (texto descriptivo)
├── assets/       → Assets listos para usar en Remotion
└── prompts/      → Prompts para generar elementos visuales con IA
```
