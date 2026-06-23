# Roadmap n8n — Scrapling Leads
Health Growth SpA | Actualizado: 2026-06-23

---

## Objetivo

Automatizar el pipeline desde la extracción de leads (Scrapling) hasta el seguimiento comercial, usando n8n en `https://n8n.healthgrowth.cl`.

---

## Estado del Entorno

- n8n: ✅ Activo en `n8n.healthgrowth.cl`
- VM: `n8n-patitas` — southamerica-east1-c
- Scrapling: ⏳ Pendiente instalación
- Credenciales Notion: ✅ Configuradas en n8n
- WhatsApp API: ⏳ Pendiente configuración

---

## FLUJO 1 — CSV Scrapling → Limpiar → Importar CRM

**Trigger:** Manual o webhook al subir CSV a Google Drive

**Nodos:**
1. `Google Drive Trigger` — detecta nuevo archivo en `/HG-Leads/raw/`
2. `Read Binary File` — leer CSV
3. `Spreadsheet File` — parsear CSV
4. `Function` — limpiar y normalizar datos:
   - Normalizar teléfonos a +56XXXXXXXXX
   - Eliminar duplicados por teléfono
   - Asignar prioridad según scoring
5. `IF` — separar por prioridad (alta vs media vs baja)
6. Alta: `Notion` — crear página en CRM
7. Media/Baja: `Google Sheets` — guardar en hoja de espera

**Variables de entorno n8n:**
- `NOTION_API_KEY` — ya configurada
- `NOTION_DB_ID` — `26ee63f1-4266-4ef2-8280-0456d0cb16b9`

---

## FLUJO 2 — Lead Prioridad Alta → Alerta a Carlos

**Trigger:** Creación de nuevo lead en Notion con prioridad = alta

**Nodos:**
1. `Notion Trigger` — nuevo ítem en CRM con prioridad alta
2. `WhatsApp Business` o `Email` — enviar alerta a Carlos:
   - Nombre del negocio
   - Rubro
   - Ciudad
   - Problema detectado
   - Servicio sugerido
   - Link a Notion

**Condición antes de activar:** WhatsApp API configurado O email funcionando.

---

## FLUJO 3 — Lead Sin Web → Crear Mensaje Personalizado

**Trigger:** Lead con `tiene_web = NO` entra al CRM

**Nodos:**
1. `Notion Trigger`
2. `HTTP Request` → Claude API (Haiku) con datos del lead
3. Prompt: "Genera un mensaje de primer contacto personalizado para [nombre negocio], tipo [rubro], en [ciudad], que no tiene página web..."
4. `Set` — guardar mensaje generado en campo `mensaje_sugerido` de Notion
5. `Notion` — actualizar página con el mensaje

**Nota:** Carlos revisa el mensaje ANTES de enviarlo. No hay envío automático en esta fase.

---

## FLUJO 4 — Lead Con WhatsApp → Preparar Contacto

Similar al Flujo 3 pero para leads con WhatsApp visible.

Genera mensaje específico para WhatsApp Business y lo guarda en Notion para revisión manual.

---

## FLUJO 5 — Lead Contactado → Seguimiento Día 3

**Trigger:** Campo `estado` cambia a `contactado` en Notion

**Nodos:**
1. `Notion Trigger`
2. `Wait` — esperar 3 días (72 horas)
3. Verificar si `estado` cambió (si respondió, no seguir)
4. Si sigue en `contactado`: enviar recordatorio a Carlos
5. Carlos decide si enviar seguimiento manual

---

## FLUJO 6 — Lead Sin Respuesta → Seguimiento Día 7

**Trigger:** 7 días desde `contactado` sin cambio de estado

**Nodos:**
1. Verificar fecha `ultima_interaccion` en Notion
2. Si han pasado 7 días sin avance: notificar a Carlos con mensaje de cierre sugerido
3. Si no hay acción: cambiar estado a `nurturing` automáticamente

---

## FLUJO 7 — Lead Interesado → Crear Tarea Diagnóstico

**Trigger:** Estado cambia a `en_conversacion`

**Nodos:**
1. Notion: actualizar estado
2. Crear página en tabla de tareas con:
   - Tarea: "Preparar diagnóstico para [NEGOCIO]"
   - Fecha límite: 2 días
   - Asignado: Carlos
3. Enviar recordatorio

---

## FLUJO 8 — Lead Ganado/Perdido → Actualizar CRM

**Trigger:** Estado cambia a `cliente` o `descartado`

**Nodos:**
1. Actualizar campos finales en Notion:
   - Si `cliente`: agregar fecha de cierre, monto, pack contratado
   - Si `descartado`: agregar motivo, fecha
2. Actualizar métricas en hoja de Google Sheets (KPIs)

---

## FLUJO 9 — Reporte Semanal de Leads

**Trigger:** Cron — cada lunes a las 09:00

**Nodos:**
1. Query Notion CRM — leads de la semana anterior
2. Contar por estado y prioridad
3. Calcular: contactados, respondieron, en proceso, cerrados
4. Generar resumen en texto
5. Enviar a Carlos (email o WhatsApp)

**Formato del reporte:**
```
📊 REPORTE SEMANAL LEADS HG
Semana: [fecha]
Nuevos leads: X
Contactados: X
Respondieron: X (tasa: X%)
En conversación: X
Propuestas enviadas: X
Clientes nuevos: X
Próximos a seguir: [lista]
```

---

## Variables de Entorno Requeridas

| Variable | Estado | Fuente |
|---------|--------|--------|
| `NOTION_API_KEY` | ✅ Disponible | Notion Integration |
| `NOTION_CRM_DB_ID` | ✅ Disponible | `26ee63f1...` |
| `GOOGLE_DRIVE_CREDENTIALS` | ⏳ Pendiente | Google API |
| `WHATSAPP_API_TOKEN` | ⏳ Pendiente | Meta Business |
| `CLAUDE_API_KEY` | ⏳ Pendiente | Anthropic |
| `GMAIL_CREDENTIALS` | ⏳ Pendiente | Gmail OAuth |

---

## Próximos Pasos

1. [ ] Instalar Scrapling en entorno local
2. [ ] Crear primera lista de leads manualmente (prueba de concepto)
3. [ ] Configurar Flujo 1 en n8n (CSV → Notion)
4. [ ] Configurar Flujo 9 (reporte semanal)
5. [ ] Activar resto de flujos una vez haya volumen de leads
