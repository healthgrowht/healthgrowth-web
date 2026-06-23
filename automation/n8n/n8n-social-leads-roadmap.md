# Roadmap n8n — Social + Leads
Health Growth SpA | Actualizado: 2026-06-23

---

## Entorno n8n

- URL: `https://n8n.healthgrowth.cl`
- VM: `n8n-patitas` — GCP southamerica-east1-c
- Webhook activo: `https://n8n.healthgrowth.cl/webhook/a0b41fdd-697f-4026-9c95-51a329b2cd00/webhook-hg/hg-captacion`

---

## FLUJO 1 — Formulario Web → CRM → Alerta

**Estado**: ✅ ACTIVO (webhook conectado en DiagnosticForm.tsx)

**Flujo:**
```
healthgrowth.cl/formulario
       ↓ POST
n8n webhook hg-captacion
       ↓
Parsear datos del lead
       ↓
Crear página en Notion CRM (👥 Clientes)
       ↓
Email/WhatsApp a Carlos con los datos del lead
       ↓
Respuesta automática al lead (confirmación)
```

**Nodos requeridos:**
1. Webhook — escuchar POST
2. Set — estructurar datos
3. Notion — crear registro
4. Send Email / WhatsApp — notificar a Carlos
5. HTTP Request — respuesta al formulario (opcional)

**Variables n8n:**
- `NOTION_API_KEY`
- `NOTION_DB_ID = 26ee63f1-4266-4ef2-8280-0456d0cb16b9`
- `CARLOS_WHATSAPP = +56951017947`
- `CARLOS_EMAIL = luisvillanuevaandrades@gmail.com`

---

## FLUJO 2 — Nuevo Lead → Alerta a Carlos

**Trigger**: Nuevo ítem en Notion CRM con prioridad = alta

**Nodos:**
1. Notion Trigger — poll cada 5 minutos buscando nuevos leads de prioridad alta
2. IF — prioridad = alta Y estado = senal_detectada
3. WhatsApp o Email → mensaje a Carlos:
   ```
   🚨 LEAD NUEVO — PRIORIDAD ALTA
   Negocio: [nombre]
   Rubro: [rubro]
   Ciudad: [ciudad]
   Problema: [problema_detectado]
   Servicio sugerido: [servicio_sugerido]
   Fuente: [fuente]
   Link Notion: [url]
   ```
4. Notion — actualizar estado a `prospecto`

---

## FLUJO 3 — Lead Sin Respuesta → Seguimiento Día 3

**Trigger**: Lead en estado `contactado` por más de 3 días sin cambio

**Nodos:**
1. Notion — query de leads con estado `contactado` y `fecha_ultimo_contacto` > 3 días
2. Filter — excluir los que tienen `no_contactar`
3. Preparar mensaje de seguimiento con Claude API (opcional)
4. Notificar a Carlos con el mensaje listo para enviar
5. Carlos aprueba y envía manualmente

**Nota**: No enviar automáticamente. Carlos siempre revisa.

---

## FLUJO 4 — Lead Sin Respuesta → Seguimiento Día 7

**Trigger**: Lead en `contactado` por más de 7 días

**Nodos:**
1. Notion query — leads con 7+ días en `contactado`
2. Preparar mensaje de cierre
3. Notificar a Carlos
4. Automáticamente mover a `nurturing` si Carlos no actúa en 24h

---

## FLUJO 5 — Diagnóstico Solicitado → Crear Tarea

**Trigger**: Lead cambia a estado `validado` o `reunion_agendada`

**Nodos:**
1. Notion Trigger
2. Crear tarea en Notion (tabla de tareas si existe):
   - "Preparar diagnóstico para [NEGOCIO]"
   - Fecha límite: 2 días
3. Notificar a Carlos por WhatsApp/email

---

## FLUJO 6 — Recordatorio de Publicación Diaria

**Trigger**: Cron — cada día a las 08:30

**Nodos:**
1. Leer el plan del día desde `/social-system/calendar/30-day-social-calendar.md` (o Google Sheets)
2. Enviar recordatorio a Carlos:
   ```
   📅 CONTENIDO DE HOY:
   Pilar: [pilar]
   Formato: [formato]
   Tema: [tema]
   Hook: [hook]
   CTA: [cta]
   ```

**Estado**: Diseñado. Requiere integración con Google Sheets o Notion para leer el calendario.

---

## FLUJO 7 — Reporte Diario

**Trigger**: Cron — cada día a las 21:00

**Nodos:**
1. Query Notion CRM — leads nuevos del día
2. Query leads contactados del día
3. Contar conversaciones activas
4. Generar resumen:
   ```
   📊 REPORTE DIARIO HG
   Leads nuevos: X
   Contactados: X
   En conversación: X
   Propuestas enviadas: X
   Clientes nuevos: X
   Acción urgente: [si hay]
   ```
5. Enviar a Carlos

---

## FLUJO 8 — Reporte Semanal

**Trigger**: Cron — cada lunes a las 09:00

**Nodos:**
1. Query Notion — leads de la semana
2. Calcular métricas: nuevos / contactados / tasa respuesta / conversiones
3. Identificar top 3 leads activos
4. Generar texto de reporte
5. Enviar a Carlos con link a Notion

---

## VARIABLES DE ENTORNO NECESARIAS EN N8N

| Variable | Valor | Estado |
|---------|-------|--------|
| `NOTION_API_KEY` | [en n8n settings] | ✅ Configurar |
| `NOTION_CRM_DB_ID` | `26ee63f1-4266-4ef2-8280-0456d0cb16b9` | ✅ Disponible |
| `CARLOS_EMAIL` | `luisvillanuevaandrades@gmail.com` | ✅ Disponible |
| `CARLOS_WA` | `+56951017947` | ✅ Disponible |
| `CLAUDE_API_KEY` | [Anthropic] | ⏳ Pendiente |
| `WHATSAPP_TOKEN` | [Meta Business] | ⏳ Pendiente |

---

## ORDEN DE IMPLEMENTACIÓN

1. ✅ Flujo 1 (formulario web) — ya tiene webhook, completar nodos Notion + alerta
2. ⏳ Flujo 7 (reporte diario) — simple de configurar, alto valor
3. ⏳ Flujo 8 (reporte semanal) — ídem
4. ⏳ Flujo 2 (alerta lead alta prioridad)
5. ⏳ Flujos 3 y 4 (seguimiento) — cuando haya volumen real
6. ⏳ Flujos 5 y 6 — cuando el calendario esté en Notion/Sheets
