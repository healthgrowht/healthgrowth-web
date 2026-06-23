# Plan de Integración CRM — HG-Lead Scraper
Health Growth SpA | Actualizado: 2026-06-23

---

## CRM Principal: Notion

Base de datos: `👥 Clientes (CRM)`
ID: `26ee63f1-4266-4ef2-8280-0456d0cb16b9`

---

## Flujo de Integración

```
Scrapling extrae leads
       ↓
CSV raw en /lead-scraper/raw/
       ↓
Limpieza y normalización
       ↓
CSV limpio en /lead-scraper/clean/
       ↓
Priorización (alta/media/baja)
       ↓
ALTA: importar a Notion CRM
MEDIA: guardar en Google Sheets
BAJA: archivar en /lead-scraper/exports/
```

---

## Importar CSV a Notion

### Manual (actual)
1. Abrir Notion → base de datos `👥 Clientes (CRM)`
2. Clic en "..." → Importar
3. Seleccionar CSV limpio
4. Mapear columnas (ver tabla abajo)
5. Revisar duplicados antes de confirmar

### Automático via n8n (futuro)
Ver `/automation/n8n/scrapling-leads-n8n-roadmap.md`

---

## Mapeo de Columnas CSV → Notion

| Campo CSV | Campo Notion | Notas |
|-----------|-------------|-------|
| `nombre_negocio` | Nombre (título) | Campo principal |
| `estado` | Estado | Select: usar valores del pipeline |
| `prioridad` | Prioridad | Select: alta/media/baja |
| `telefono` | Teléfono | Teléfono |
| `instagram` | Instagram URL | URL |
| `web` | Sitio Web | URL |
| `rubro` | Rubro | Texto |
| `ciudad` | Zona/Ciudad | Texto |
| `problema_visible` | Gap Digital | Multi-select si aplica |
| `servicio_sugerido` | Próxima Acción | Texto |
| `fuente` | Origen | Select |
| `observaciones` | Notas | Texto largo |
| `fecha_extraccion` | Última Interacción | Fecha |

---

## Evitar Duplicados

Antes de importar:
1. Filtrar CSV por `telefono` — si ya existe en Notion, omitir
2. Buscar en Notion por nombre del negocio
3. Si hay duda, revisar manualmente (no importar duplicado)

Regla: el teléfono es el identificador primario.
Si un negocio tiene el mismo teléfono con distinto nombre, es el mismo lead.

---

## Google Sheets (secundario)

Para leads de prioridad media o como backup:

Estructura recomendada:
- Una hoja por nicho (ej: "Peluquerías Caninas", "Centros Estéticos")
- Columnas = las mismas del CSV template
- Columna adicional: `importado_notion` = SÍ/NO para rastrear cuáles ya subieron

---

## Actualizar Estados

Cuando un lead avanza en el pipeline:
1. Actualizar campo `estado` en Notion
2. Actualizar campo `proxima_accion` con siguiente paso
3. Registrar fecha en `ultima_interaccion`
4. Si se convierte en cliente: cambiar a `cliente` y completar información de facturación

---

## Generar Próximas Acciones

| Estado | Próxima Acción automática sugerida |
|--------|----------------------------------|
| `senal_detectada` | Enriquecer datos (revisar Instagram, web) |
| `prospecto` | Preparar mensaje de contacto |
| `contactado` | Seguimiento día 3 |
| `en_conversacion` | Agendar diagnóstico |
| `validado` | Enviar propuesta |
| `propuesta_enviada` | Seguimiento cierre (3 días) |
| `nurturing` | Revisar en 60 días |

---

## Conectar con n8n

### Flujo básico futuro:
1. n8n lee CSV desde Google Drive o carpeta local
2. Para cada fila, crea página en Notion CRM
3. Si prioridad = alta, envía alerta a Carlos (WhatsApp o email)
4. Agenda tarea de seguimiento en 3 días

Ver detalles en `/automation/n8n/scrapling-leads-n8n-roadmap.md`

---

## Métricas a Rastrear

| Métrica | Dónde | Frecuencia |
|---------|-------|-----------|
| Leads extraídos por semana | Google Sheets / CSV | Semanal |
| Leads contactados | Notion CRM | Semanal |
| Tasa de respuesta | Notion CRM | Semanal |
| Leads → Diagnóstico | Notion CRM | Mensual |
| Leads → Cliente | Notion CRM | Mensual |
| Nicho con mejor conversión | Reporte mensual | Mensual |
