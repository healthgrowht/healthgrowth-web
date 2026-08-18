# Prompt para Siguiente Sesión — Health Growth Web v1
Última actualización: 25 junio 2026

Copia y pega este bloque completo al inicio de la próxima sesión.

---

## ESTADO ACTUAL

Sitio **LIVE en producción**: https://healthgrowth.cl

- ESLint: 0 errores | Build: limpio (11 rutas)
- Último deploy: 25-jun-2026

## EMPRESA

- **Health Growth SpA** — RUT: **78.342.421-5**
- Fundador: Luis Carlos Alberto Villanueva Andrades
- WhatsApp: +56 9 5101 7947 → https://wa.me/56951017947
- Email: agenda.salud.digital@gmail.com
- Instagram: @healthgrowthspa
- NO confundir con Patitas Felices SpA (RUT 78.402.795-3)

## ASSETS EN PRODUCCIÓN

```
public/logo/health-growth-logo.jpeg     → Logo oficial (3D, fondo azul oscuro)
public/images/chimi.jpeg                → Chimi (gato negro) con logo, fondo azul
public/images/branding/
  chimi-santiago-collage.jpeg           → 8 escenas Chimi en Santiago
  chimi-aventuras-ep1.jpeg              → Comic "Las Aventuras de Chimi Ep.1"
public/videos/empresa/
  video-empresa-01.mp4                  → Video empresa WhatsApp
  video-empresa-02.mp4
  video-empresa-03.mp4
public/videos/reels/reel-*.mp4 (42)    → Reels Gemini para Instagram/TikTok
public/upload/                          → Carpeta de entrada para nuevos assets
```

## REGLAS ACTIVAS

- Deploy automático permitido: `vercel deploy --prod` (Carlos lo aprobó)
- Fuente de verdad: `app/constants.ts` — editar solo ahí para datos de negocio
- NO hardcodear tokens ni datos sensibles en código
- Carpeta `public/upload/` = zona de entrada; yo clasifico y muevo

## PENDIENTES PRIORITARIOS

1. **Foto real de Luis** → subir a `public/upload/` → ir a `public/images/founder/` → actualizar sección Mission/ProfessionalSupport
2. **Testimonios de clientes** → texto real + foto → reemplazar placeholders en SocialProof
3. **Facebook/LinkedIn** → cuando cree las cuentas, dar URL → activar en `constants.ts`
4. **Revisar sección videos** en producción → ajustar títulos/descripciones según contenido real
5. **Foto real de Chimi** (opcional) → si tiene foto del gato real, sube a `public/upload/`

## TAREA PARA ESTA SESIÓN

[Completar aquí lo que necesitas hacer hoy]
