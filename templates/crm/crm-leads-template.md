# Template CRM — Leads Health Growth
Health Growth SpA | Actualizado: 2026-06-23

---

## CRM Principal: Notion

Base: `👥 Clientes (CRM)` — ID: `26ee63f1-4266-4ef2-8280-0456d0cb16b9`

---

## Descripción de Campos

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | Texto | ID único. Formato: HG-001, HG-002... |
| `nombre` | Texto | Nombre de la persona de contacto |
| `empresa` | Texto | Nombre del negocio |
| `rubro` | Texto | Tipo de negocio |
| `instagram` | URL | Handle o URL Instagram del negocio |
| `web` | URL | Sitio web si existe |
| `whatsapp` | Teléfono | Número en formato +56XXXXXXXXX |
| `email` | Email | Email de contacto si existe |
| `ciudad` | Texto | Ciudad donde opera |
| `fuente` | Select | Cómo llegó: instagram / whatsapp / formulario_web / referido / busqueda_activa |
| `problema_detectado` | Texto | Qué problema digital tiene el lead |
| `servicio_sugerido` | Texto | Qué servicio HG aplica |
| `estado` | Select | Estado en el pipeline |
| `prioridad` | Select | alta / media / baja |
| `fecha_primer_contacto` | Fecha | Primer contacto (YYYY-MM-DD) |
| `fecha_ultimo_contacto` | Fecha | Último contacto (actualizar siempre) |
| `proxima_accion` | Texto | Qué hacer en el próximo paso |
| `observaciones` | Texto | Notas libres |

---

## Pipeline de Estados

```
DETECCIÓN
  senal_detectada        → Negocio identificado, no contactado
  prospecto              → Verificado, listo para contactar
  prospecto_enriquecido  → Con datos adicionales (Instagram, web revisada)

CALIFICACIÓN
  validado               → Confirmado como oportunidad real
  oportunidad            → Interés demostrado

CONTACTO
  contactado             → Primer mensaje enviado
  en_conversacion        → Respondió y hay diálogo
  reunion_agendada       → Diagnóstico/reunión programada

CIERRE
  propuesta_enviada      → Propuesta comercial enviada
  cliente                → Pagó y comenzó
  nurturing              → No cierra ahora pero puede volver
  no_contactar           → Solicitó no recibir mensajes (RESPETAR)
  descartado             → No aplica para HG
```

---

## Fuentes de Lead

| Valor | Origen real |
|-------|------------|
| `formulario_web` | Formulario en healthgrowth.cl |
| `instagram` | DM o comentario en Instagram |
| `whatsapp` | Mensaje directo a WhatsApp |
| `referido` | Recomendado por alguien |
| `busqueda_activa` | Prospección manual o con Scrapling |
| `openclaw` | Motor OpenClaw |

---

## Reglas de Uso

1. Registrar TODOS los contactos, aunque no cierren
2. Actualizar `fecha_ultimo_contacto` después de cada interacción
3. Si alguien dice "no gracias" → estado `no_contactar` inmediatamente
4. Revisar CRM cada lunes para ver qué leads necesitan seguimiento
5. Si un lead lleva más de 30 días en `contactado` sin avanzar → mover a `nurturing`

---

## Protocolo Semanal CRM

**Cada lunes:**
1. Revisar leads en `contactado` — ¿quién necesita seguimiento?
2. Revisar leads en `en_conversacion` — ¿quién tiene propuesta pendiente?
3. Actualizar estados que hayan cambiado
4. Registrar nuevos leads de la semana anterior
5. Generar lista de acciones de la semana

**Cada viernes:**
1. Registrar todos los contactos recibidos en la semana
2. Priorizar para la semana siguiente
3. Revisar qué leads de Scrapling subir a Notion
