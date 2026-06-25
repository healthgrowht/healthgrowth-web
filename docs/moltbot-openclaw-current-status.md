# Moltbot / OpenClaw — Estado Real Actual
Versión: 1.0 | Fecha: 2026-06-23 | Tipo: AUDITORÍA HONESTA

---

## ADVERTENCIA

Este documento refleja el estado REAL del ecosistema.
No lo que está documentado. Lo que realmente funciona.
Actualizar cada vez que algo cambie de estado.

---

## ESTADO POR COMPONENTE

### 1. WEB — healthgrowth-web

| Ítem | Estado real | Detalle |
|------|-------------|---------|
| Build local | ✅ OPERATIVO | 8 rutas, 0 errores, TypeScript OK |
| Deploy en Vercel | ❌ NO DESPLEGADO | Carlos no ha corrido `vercel deploy` |
| Dominio healthgrowth.cl | ❌ NO APUNTA A VERCEL | DNS sin configurar en Vercel |
| Logo oficial | ❌ PLACEHOLDER SVG | Reemplazar con logo real |
| OG Image | ❌ FALTANTE | Sin crear |
| Favicon oficial | ❌ FALTANTE | Sin crear |
| Formulario → n8n → CRM | ✅ CONFIGURADO | Webhook URL real en constants.ts |
| Páginas legales | ✅ EXISTEN | /politica-de-privacidad + /terminos-y-condiciones |

**Qué hace hoy realmente:** Funciona localmente en `localhost:3000`. No es accesible desde internet.

---

### 2. n8n — n8n.healthgrowth.cl

| Ítem | Estado real | Detalle |
|------|-------------|---------|
| Servidor n8n | ✅ OPERATIVO | VM n8n-patitas en GCP |
| Webhook de captación | ✅ ACTIVO | URL real configurada en web |
| Email alertas a Carlos | ✅ CONFIGURADO | Notifica cuando llega lead |
| Seguimiento día 3 y 7 | ❌ NO CONFIGURADO | Solo existe documentación |
| Flows de CHIMI/ROKITO | ❌ NO CONFIGURADOS | Solo existe documentación |
| Dashboard de operaciones | ❌ NO EXISTE | Documentado como futura fase |

**Qué hace hoy realmente:** Recibe leads del formulario web → registra en CRM Notion → alerta a Carlos por email.

---

### 3. CRM — Notion

| Ítem | Estado real | Detalle |
|------|-------------|---------|
| Base de datos existe | ✅ SÍ | DB ID: 26ee63f1-4266-4ef2-8280-0456d0cb16b9 |
| Pipeline 10 estados | ✅ DOCUMENTADO | Campos y estados definidos |
| Leads reales cargados | ❓ DESCONOCIDO | No verificado en esta sesión |
| n8n → Notion activo | ✅ CONFIGURADO | Webhook registra leads automáticamente |
| Uso manual por Carlos | ❓ DESCONOCIDO | Depende de Carlos |

**Qué hace hoy realmente:** Recibe leads automáticos desde el formulario web. Carlos debe revisarlo manualmente.

---

### 4. CHIMI — Agente de Health Growth

| Ítem | Estado real | Detalle |
|------|-------------|---------|
| Definición de personaje | ✅ DOCUMENTADO | docs/chimi-brand-system.md |
| System prompt | ✅ DOCUMENTADO | docs/moltbot-prompt-operativo.md |
| Contenido de ejemplo | ✅ DOCUMENTADO | Reels, captions, hooks |
| ManyChat conectado | ❌ NO EXISTE | Sin cuenta ManyChat |
| Instalado en Instagram | ❌ NO INSTALADO | Cero automático en IG |
| n8n flow activo | ❌ NO CONFIGURADO | Depende de ManyChat |
| Responde DMs reales | ❌ NO — 0% | Todo manual |

**Qué hace hoy realmente:** NADA automático. Solo existe como documentación y sistema de prompts para que Carlos o Claude generen contenido de Chimi manualmente.

---

### 5. ROKITO — Agente de Patitas Felices

| Ítem | Estado real | Detalle |
|------|-------------|---------|
| Definición de personaje | ✅ DOCUMENTADO | docs/roquito-brand-system.md |
| KB de Alicia | ❌ INCOMPLETA | Alicia no ha enviado FAQ, precios, horarios |
| ManyChat conectado | ❌ NO EXISTE | Sin cuenta ManyChat |
| Instalado en Instagram | ❌ NO INSTALADO | Cero automático en IG PF |
| Responde DMs reales | ❌ NO — 0% | Todo manual (Alicia responde) |

**Qué hace hoy realmente:** NADA automático. Bloqueado por dos cosas: KB de Alicia incompleta y sin ManyChat.

---

### 6. VM openclaw-bunker — GCP

| Ítem | Estado real | Detalle |
|------|-------------|---------|
| VM existe en GCP | ✅ SÍ | southamerica-east1-c |
| Agente instalado | ❌ NO | Solo la VM, sin software de agente |
| Usuario moltbot-agent | ❌ NO CREADO | Pendiente Fase 3 |
| Telegram Bot conectado | ❌ NO CREADO | Pendiente Fase 3 |
| Acceso SSH | ✅ VÍA IAP | No SSH directo público |

**Qué hace hoy realmente:** Es un servidor vacío esperando instalación. No ejecuta ningún proceso de Moltbot.

---

### 7. Scrapling / Lead Scraper

| Ítem | Estado real | Detalle |
|------|-------------|---------|
| Documentación | ✅ LISTA | docs/scrapling-installation.md |
| Python disponible | ✅ SÍ | Python 3.14.4 instalado |
| uv instalado | ❌ NO | Carlos debe correr: `irm https://astral.sh/uv/install.ps1 \| iex` |
| Scrapling instalado | ❌ NO | Requiere uv primero |
| Primer scraping hecho | ❌ NO | Cero leads extraídos |

**Qué hace hoy realmente:** NADA. No está instalado.

---

### 8. CHIMI / Content System (contenido generado)

| Ítem | Estado real | Detalle |
|------|-------------|---------|
| Calendario 30 días | ✅ DOCUMENTADO | content-system/calendar/ |
| Hooks, captions, ideas | ✅ DOCUMENTADOS | content-system/chimi/ |
| Guiones de reels | ✅ DOCUMENTADOS | content-system/reels/ |
| Objetos parlantes prompts | ✅ DOCUMENTADOS | content-system/objects-speaking/ |
| Posts publicados en IG | ❌ 0 PUBLICADOS | Carlos no ha publicado aún |

**Qué hace hoy realmente:** Existe como biblioteca de contenido. Carlos debe usarla manualmente.

---

### 9. social-system (redes sociales activas)

| Red | Estado real | Publicaciones |
|----|-------------|--------------|
| Instagram @healthgrowthspa | ✅ CUENTA ACTIVA | Posts publicados: desconocido |
| Instagram PF (handle por confirmar) | ⚠️ HANDLE SIN CONFIRMAR | Manual por Alicia |
| Facebook HG | ❌ PÁGINA SIN CREAR | Pendiente |
| LinkedIn Carlos | ❌ NO ACTIVADO | Sin foto ni titular actualizado |
| WhatsApp Business HG | ✅ ACTIVO MANUAL | +56 9 5101 7947 |
| WhatsApp Alicia / PF | ✅ ACTIVO MANUAL | Número no confirmado aquí |

---

### 10. automation/meta (Meta Ads / Facebook Ads)

| Ítem | Estado real |
|------|-------------|
| Cuenta Meta Business | ❓ No verificado |
| Pixel Meta en web | ❌ No instalado |
| Campañas activas | ❌ 0 campañas |

**Qué hace hoy realmente:** NADA automático. Sin publicidad activa.

---

### 11. automation/whatsapp

| Ítem | Estado real |
|------|-------------|
| WhatsApp Business (manual) | ✅ Activo +56 9 5101 7947 |
| WhatsApp Business API | ❌ No configurada |
| Mensajes automáticos | ❌ No activos |
| CHIMI respondiendo WA | ❌ No activo |

**Qué hace hoy realmente:** WhatsApp funciona manualmente. Carlos responde a mano.

---

### 12. Moltbot (sistema completo)

| Ítem | Estado real |
|------|-------------|
| Nivel 1 (mirar/resumir) | ✅ ACTIVO — Claude Code en cada sesión |
| Nivel 2 (alertar) | ⚠️ PARCIAL — n8n alerta email, resto manual |
| Nivel 3 (borradores) | ✅ ACTIVO — Claude Code genera en sesión |
| Nivel 4 (ejecutar con aprobación) | ❌ NO ACTIVO |
| Nivel 5 (autónomo) | ❌ NO ACTIVO |

**Qué hace hoy realmente:** Claude Code funciona como Moltbot manual en cada sesión de trabajo. No hay agente autónomo corriendo 24/7.

---

## RESUMEN EJECUTIVO — ESTADO REAL

| Categoría | Total componentes | Operativo | Preparado | Solo documentado | No existe |
|-----------|------------------|-----------|-----------|-----------------|-----------|
| Web | 4 ítems clave | 1 (local) | 2 | 1 | 0 |
| n8n + CRM | 5 ítems | 3 | 1 | 1 | 0 |
| Agentes (CHIMI/ROKITO) | 6 ítems | 0 | 2 | 4 | 0 |
| openclaw-bunker | 5 ítems | 1 (VM) | 0 | 4 | 0 |
| Scrapling | 4 ítems | 0 | 1 | 3 | 0 |
| Redes sociales | 6 redes | 2 | 0 | 2 | 2 |

**Score real de madurez operativa: 3.5/10**
- Documentación: 95% ✅
- Infraestructura base: 45% 🔄
- Automatización real: 15% ⏸
- Agentes autónomos: 0% ❌

---

## ÚLTIMA ACTUALIZACIÓN

2026-06-23 — Auditoría completa post-sesión de diseño.
Próxima actualización: cuando Carlos complete Fase 2 (web en producción).
