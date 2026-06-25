# Moltbot / OpenClaw — Acciones Pendientes
Versión: 1.0 | Fecha: 2026-06-23 | Tipo: LISTA EJECUTIVA

---

## Principio

Solo aparece aquí lo que está pendiente de verdad.
Sin acciones inventadas. Sin "activar" cosas que no existen.
Cada acción tiene responsable, bloqueador y tiempo estimado real.

---

## PENDIENTES QUE CARLOS PUEDE HACER HOY (sin Claude Code)

### P01 — Instalar uv y Scrapling
**Responsable:** Carlos (terminal PowerShell)
**Tiempo:** 5 minutos
**Bloqueador:** Ninguno
**Riesgo:** Cero (instalación local, no toca producción)
**Comandos:**
```powershell
irm https://astral.sh/uv/install.ps1 | iex
pip install "scrapling[all]"
```
**Por qué importa:** Habilita el pipeline de extracción de leads. Sin esto no hay prospectos nuevos de forma sistemática.

---

### P02 — Logo oficial y OG Image
**Responsable:** Carlos (Canva)
**Tiempo:** 30-60 minutos
**Bloqueador:** Ninguno
**Riesgo:** Cero
**Acciones:**
1. Crear logo en Canva → exportar SVG → guardar en `/public/logo/health-growth-logo.svg`
2. Crear imagen 1200×630 → exportar PNG → guardar en `/public/seo/og-image.png`
**Por qué importa:** Sin logo ni OG image, la web no se puede desplegar con imagen de marca.

---

### P03 — Completar RUT en constants.ts
**Responsable:** Carlos
**Tiempo:** 2 minutos
**Bloqueador:** Dato pendiente (RUT definitivo de la empresa)
**Archivo:** `app/constants.ts` → buscar `[TODO: RUT definitivo]` → reemplazar
**Por qué importa:** El footer muestra "[TODO: RUT definitivo]" en producción.

---

### P04 — Deploy a Vercel
**Responsable:** Carlos
**Tiempo:** 30 minutos (primera vez)
**Bloqueador:** Logo + OG Image primero (P02)
**Comandos:**
```bash
npm install -g vercel
vercel login
vercel deploy --prod
```
**Por qué importa:** La web no es visible en internet hasta que esté desplegada.

---

### P05 — Confirmar handle de Instagram de Patitas Felices con Alicia
**Responsable:** Carlos (mensaje a Alicia)
**Tiempo:** 1 minuto
**Bloqueador:** Ninguno
**Acción:** Preguntar a Alicia si el handle es @patitas_felices_cl o cuál es el correcto
**Por qué importa:** Todos los docs usan @patitas_felices_cl sin confirmación. Si está mal, el contenido apunta al handle equivocado.

---

### P06 — Pedirle a Alicia ROKITO_KB.md
**Responsable:** Carlos (mensaje a Alicia)
**Tiempo:** 5 minutos
**Bloqueador:** Ninguno
**Qué pedirle:**
- Precios actuales (baño, corte, uñas, orejas)
- Horarios de atención
- Número de WhatsApp
- Razas que atiende
- Qué no atienden (si aplica)
- Tiempo de espera promedio
- Cómo prefiere que le reserven
**Por qué importa:** Sin esta KB, ROKITO no puede responder preguntas reales. Es el único bloqueador humano para ROKITO.

---

### P07 — Activar LinkedIn de Carlos
**Responsable:** Carlos
**Tiempo:** 15 minutos
**Bloqueador:** Ninguno
**Acciones:**
1. Foto de perfil profesional (puede ser del celular)
2. Titular: "Consultor de digitalización y automatización para pymes Chile"
3. Primer post: copiar desde `HealthGrowth/LinkedIn/HG-LinkedIn-posts-semana01.md`
**Por qué importa:** LinkedIn es el canal de mayor credibilidad para venta B2B. Sin perfil activo, las propuestas comerciales llegan sin respaldo.

---

### P08 — Crear página de Facebook "Health Growth"
**Responsable:** Carlos
**Tiempo:** 20 minutos
**Bloqueador:** Ninguno
**Acciones:** Crear página → categoría "Empresa de servicios" → foto de portada → descripción de negocio
**Por qué importa:** Sin página de Facebook, no hay posibilidad de publicar contenido de HG en FB ni de instalar Pixel Meta en el futuro.

---

## PENDIENTES QUE REQUIEREN SESIÓN CON CLAUDE CODE

### P09 — Primer scraping de prospectos
**Responsable:** Claude Code + Carlos
**Bloqueador:** P01 (Scrapling instalado)
**Tiempo:** 30 minutos
**Acción:** Extraer 50 centros estéticos Santiago → clasificar → cargar en CRM
**Riesgo bajo** — solo lectura pública, no automatizado masivamente

---

### P10 — Instalar agente base en openclaw-bunker
**Responsable:** Claude Code (con Carlos en sesión SSH)
**Bloqueador:** Carlos abre sesión IAP a openclaw-bunker
**Tiempo:** 60-90 minutos
**Prerequisito:** Carlos ejecuta `gcloud compute ssh openclaw-bunker --tunnel-through-iap --zone=southamerica-east1-c`
**Acciones que hace Claude Code:**
1. Crear usuario `moltbot-agent` sin root
2. Instalar dependencias mínimas
3. Configurar `.env` con API keys
4. Crear script de reporte diario
5. Probar en modo sandbox 72h antes de conectar cualquier servicio real

---

### P11 — Configurar Telegram Bot de alertas
**Responsable:** Carlos crea bot, Claude Code configura
**Bloqueador:** P10 (agente en VM)
**Tiempo:** 30 minutos
**Acciones:**
1. Carlos crea bot en @BotFather → obtiene BOT_TOKEN
2. Claude Code configura alertas en n8n → Telegram
**Por qué importa:** Sin Telegram, Moltbot no tiene canal para notificar a Carlos en tiempo real.

---

### P12 — Configurar CHIMI en ManyChat
**Responsable:** Claude Code + Carlos
**Bloqueador:** Carlos crea cuenta ManyChat ($15/mes)
**Tiempo:** 2-4 horas (flows iniciales)
**Prerequisito:** Cuenta ManyChat activa + Instagram @healthgrowthspa conectado a ManyChat

---

### P13 — n8n seguimiento día 3 y día 7
**Responsable:** Claude Code
**Bloqueador:** Primer cliente real ganado
**Acción:** Crear cron job en n8n que revisa CRM y dispara mensaje de seguimiento

---

## PENDIENTES QUE REQUIEREN CREDENCIALES EXTERNAS

| Acción | Credencial que falta | Costo | Cuándo activar |
|--------|---------------------|-------|----------------|
| Deploy Vercel | Cuenta Vercel | $0 (free tier) | Esta semana |
| Meta Pixel en web | Cuenta Meta Business verificada | $0 | Mes 2 |
| ManyChat | Cuenta ManyChat Starter | $15/mes | Cuando web esté en producción |
| WhatsApp Business API | Cuenta Meta Business + número verificado | Variable | Mes 3+ |
| Gmail lectura (Moltbot) | OAuth2 con permisos limitados | $0 | Solo después de Nivel 4 validado |
| Vertex AI (scoring) | GCP billing + proyecto config | ~$5-10/mes | Q3 2026 |
| Cal.com agendamiento | Cuenta Cal.com | $0 gratuito | Q3 2026 |

---

## PENDIENTES QUE NO DEBEN ACTIVARSE TODAVÍA

| Acción | Por qué no activar | Cuándo activar |
|--------|-------------------|----------------|
| Mensajes masivos WhatsApp | Viola ToS Meta → bloqueo permanente | Nunca sin opt-in previo |
| Publicación automática IG | Sin validación previa de contenido = errores en público | Fase 5 y 30+ posts manuales |
| Gmail conectado a Moltbot | Riesgo de envíos no deseados a clientes | Solo Nivel 4 validado + 30 días sandbox |
| Meta Ads sin Pixel | Desperdicio de presupuesto sin datos | Instalar Pixel primero |
| ROKITO sin KB completa | Respondería preguntas incorrectamente a clientes reales | Alicia completa KB primero |
| Moltbot Nivel 5 | Sistema sin 30 días de validación previa | Q3-Q4 2026 mínimo |
| Modificar n8n workflows de producción | Un error baja el webhook de captación | Solo con backup previo |

---

## ORDEN RECOMENDADO ESTA SEMANA

1. **HOY** — P01 (Scrapling 5 min) + P05 (confirmar handle PF con Alicia) + publicar historia HG
2. **MAÑANA** — P02 (Logo + OG Image Canva) + P03 (RUT en constants.ts)
3. **ESTA SEMANA** — P04 (Deploy Vercel) + P06 (KB Alicia) + P07 (LinkedIn)
4. **PRÓXIMA SEMANA** — P08 (Facebook HG) + P09 (Primer scraping con Claude Code)
5. **ESTE MES** — P10 (agente en VM) + P11 (Telegram bot)

---

## ACCIONES COMPLETADAS (historial)

| Acción | Fecha | Resultado |
|--------|-------|-----------|
| Bugs web críticos corregidos | 2026-06-22 | 0 errores de build |
| Páginas legales creadas | 2026-06-22 | /politica-de-privacidad + /terminos-y-condiciones |
| Moltbot docs v2.0 creados | 2026-06-23 | 5 archivos oficiales de especificación |
| Content system Semana01 creado | 2026-06-23 | 60+ archivos en Documents |
| Activación redes Semana01 creado | 2026-06-23 | 43 carpetas, 80+ piezas |
