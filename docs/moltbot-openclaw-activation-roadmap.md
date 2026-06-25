# Moltbot / OpenClaw — Roadmap de Activación por Fases
Versión: 1.0 | Fecha: 2026-06-23 | Tipo: PLAN EJECUTIVO

---

## Principio de Activación

> Activar solo lo que se puede controlar.
> Validar antes de escalar.
> Nunca conectar producción sin sandbox previo.

---

## FASE 1 — BASE OPERATIVA ✅ COMPLETADA

Todo el sistema está diseñado, documentado y preparado.

| Entregable | Estado | Fecha |
|-----------|--------|-------|
| Web Next.js con 0 errores de build | ✅ | 2026-06-22 |
| n8n operativo en n8n.healthgrowth.cl | ✅ | Antes de sesión |
| Notion CRM con pipeline activo | ✅ | Antes de sesión |
| Webhook formulario → CRM funcionando | ✅ | 2026-06-22 |
| Documentación de 24 módulos en /docs | ✅ | 2026-06-23 |
| System prompts CHIMI + ROKITO | ✅ | 2026-06-22 |
| Moltbot prompt operativo | ✅ | 2026-06-23 |
| VM openclaw-bunker existe en GCP | ✅ | Antes de sesión |
| Páginas legales web | ✅ | 2026-06-22 |
| Content system documentado | ✅ | 2026-06-23 |

---

## FASE 2 — WEB EN PRODUCCIÓN ⏸ PENDIENTE

**Desbloqueador:** Carlos completa los assets manuales.

| Tarea | Responsable | Estado | Bloqueador |
|-------|-------------|--------|-----------|
| Logo SVG oficial | Carlos (Canva) | ⏸ | Manual |
| OG Image 1200x630 | Carlos (Canva) | ⏸ | Manual |
| Favicon oficial | Carlos | ⏸ | Manual |
| RUT empresa en constants.ts | Carlos | ⏸ | Dato pendiente |
| Deploy a Vercel | Carlos | ⏸ | Cuenta Vercel |
| Dominio healthgrowth.cl → Vercel | Carlos | ⏸ | Deploy primero |

**Tiempo estimado cuando Carlos tenga los assets: 30 minutos.**

---

## FASE 3 — CANAL MOLTBOT ⏸ PENDIENTE

**Objetivo:** Moltbot puede comunicarse con Carlos en tiempo real vía Telegram.

| Tarea | Responsable | Estado | Bloqueador |
|-------|-------------|--------|-----------|
| Crear Telegram Bot (@MoltbotHG_bot) | Carlos | ⏸ | Cuenta Telegram |
| Obtener BOT_TOKEN de @BotFather | Carlos | ⏸ | Paso anterior |
| Instalar agente base en openclaw-bunker | Claude Code vía IAP | ⏸ | Carlos abre sesión SSH |
| Configurar variables de entorno en VM | Carlos / Claude Code | ⏸ | Paso anterior |
| Reporte diario automático a las 21:00 | n8n cron | ⏸ | Bot configurado |
| Acceso a carpeta de pruebas (no producción) | moltbot-agent user | ⏸ | Agente instalado |

**Costo adicional: $0 (Telegram Bot API gratuito)**
**Tiempo estimado: 2-4 horas con Carlos disponible para SSH**

---

## FASE 4 — RESEARCH Y SCRAPLING ⏸ PENDIENTE

**Objetivo:** Moltbot puede encontrar prospectos automáticamente.

| Tarea | Responsable | Estado | Bloqueador |
|-------|-------------|--------|-----------|
| Instalar uv (gestor Python moderno) | Carlos (terminal) | ⏸ | Comando: `irm https://astral.sh/uv/install.ps1 \| iex` |
| Instalar Scrapling | Carlos (terminal) | ⏸ | uv instalado |
| Primer scraping manual (50 centros estéticos Santiago) | Claude Code | ⏸ | Scrapling instalado |
| Clasificación automática de leads por scoring | Claude Code | ⏸ | Scrapling + CSV |
| Conexión CRM test (base Notion separada) | Claude Code | ⏸ | CRM test creado |
| Alertas de señales de crecimiento | n8n + Moltbot | ⏸ | Fase 3 lista |

---

## FASE 5 — CONTENIDO ASISTIDO ⏸ PENDIENTE

**Objetivo:** Moltbot genera batch semanal, Carlos aprueba y publica.

| Tarea | Responsable | Estado | Desbloqueador |
|-------|-------------|--------|--------------|
| Carlos publica mínimo 6 posts en @healthgrowthspa | Carlos | ⏸ | Manual |
| Validar qué contenido genera más interacción | Carlos + Claude | ⏸ | 6 posts publicados |
| Moltbot genera batch semanal (7 piezas) | Claude Code | ⏸ | Datos de rendimiento |
| Carlos revisa y aprueba lote en 1 sesión | Carlos | ⏸ | Batch generado |
| Meta Business Suite para programar posts | Carlos | ⏸ | Cuenta Meta Business |

---

## FASE 6 — AGENTES CONVERSACIONALES ⏸ PENDIENTE

**Objetivo:** CHIMI y ROKITO activos en Instagram.

| Tarea | Responsable | Estado | Bloqueador |
|-------|-------------|--------|-----------|
| Cuenta ManyChat creada | Carlos | ⏸ | Pago ManyChat Starter $15/mes |
| ManyChat conectado a @healthgrowthspa | Carlos | ⏸ | Cuenta ManyChat |
| CHIMI flow básico configurado | Claude Code + Carlos | ⏸ | ManyChat activo |
| CHIMI → n8n webhook de leads | Claude Code | ⏸ | CHIMI activo |
| Alicia completa ROKITO_KB.md | Alicia | ⏸ | Manual de Alicia |
| ROKITO flow básico configurado | Claude Code + Alicia | ⏸ | KB completa |
| ROKITO → n8n registro de reservas | Claude Code | ⏸ | ROKITO activo |

---

## FASE 7 — SEGUIMIENTO AUTOMÁTICO ⏸ PENDIENTE

**Objetivo:** n8n maneja seguimiento sin intervención de Carlos.

| Tarea | Responsable | Estado | Desbloqueador |
|-------|-------------|--------|--------------|
| n8n cron: seguimiento día 3 | Claude Code + n8n | ⏸ | Primer cliente real |
| n8n cron: seguimiento día 7 | Claude Code + n8n | ⏸ | Primer cliente real |
| Reactivación de prospectos fríos | n8n | ⏸ | Fase 6 lista |
| Dashboard operaciones básico | n8n + Notion | ⏸ | Datos suficientes |

---

## FASE 8 — AUTONOMÍA GRADUAL ⏸ FUTURO (Q3-Q4 2026)

**Solo activar después de 30 días sólidos en Fases 3-7.**

| Tarea | Estado | Cuándo |
|-------|--------|--------|
| OpenClaw research semanal automático | ⏸ | Q3 2026 |
| Vertex AI scoring de prospectos | ⏸ | Q3 2026 |
| WhatsApp Business API propia | ⏸ | Q4 2026 |
| Cal.com + n8n agendamiento automático | ⏸ | Q3 2026 |
| Gmail conectado con permisos limitados | ⏸ | Q4 2026 |
| Meta Ads automatizadas | ⏸ | Q4 2026 |
| Moltbot Nivel 5 completo | ⏸ | 2027 |

---

## RESUMEN DE DESBLOQUEADORES CRÍTICOS

| Desbloqueador | Quién | Urgencia |
|--------------|-------|---------|
| Logo + OG Image | Carlos (Canva, 30 min) | ALTA — web no desplegable sin esto |
| Deploy Vercel | Carlos (30 min) | ALTA — web invisible sin deploy |
| Instalar `uv` + Scrapling | Carlos (terminal, 5 min) | MEDIA — habilita pipeline de leads |
| Abrir sesión SSH a openclaw-bunker | Carlos | MEDIA — habilita Fase 3 |
| Crear cuenta ManyChat | Carlos ($15/mes) | MEDIA — habilita CHIMI y ROKITO |
| Alicia completa KB de ROKITO | Alicia | MEDIA — sin esto ROKITO no puede operar |
| Primer cliente real | Carlos | ALTA — habilita seguimiento automático |
