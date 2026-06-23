# CRM Leads — Health Growth SpA
Plantilla de registro | healthgrowth.cl

---

## Instrucciones de Uso

Este archivo sirve como referencia para los campos del CRM en Notion.
El CRM real está en Notion: base de datos `👥 Clientes (CRM)`.
ID: `26ee63f1-4266-4ef2-8280-0456d0cb16b9`

Para nuevos leads del formulario web, n8n los registra automáticamente.
Para leads manuales (DM, WhatsApp, referidos), usar este template como guía.

---

## Campos Obligatorios (completar siempre)

| Campo | Tipo | Valores posibles |
|-------|------|-----------------|
| nombre | Título | Nombre del negocio |
| estado | Select | senal_detectada / prospecto / prospecto_enriquecido / validado / oportunidad / contacto / reunion / propuesta / cliente / nurturing |
| prioridad | Select | urgente / alta / media / baja |
| origen | Select | formulario_web / instagram / whatsapp / referido / busqueda_activa / openclaw |
| Ecosistema | Select | health-growth / isapre / patitas-felices |
| ultima_interaccion | Fecha | dd/mm/yyyy |

---

## Campos de Enriquecimiento (completar tras validación)

| Campo | Tipo | Descripción |
|-------|------|-------------|
| rubro | Texto | Tipo de negocio (barbería, peluquería, clínica, etc.) |
| zona | Texto | Ciudad/comuna |
| telefono | Teléfono | Número WhatsApp del negocio |
| instagram_url | URL | URL del perfil Instagram |
| google_maps_url | URL | URL de la ficha Google Maps |
| potencial | Select | alta / media / baja |
| gap_digital | Multi-select | sin_whatsapp_business / sin_web / web_obsoleta / instagram_inactivo / sin_reservas_online / google_incompleto |
| proxima_accion | Texto | Qué hacer en el siguiente paso |
| Notas | Texto largo | Observaciones relevantes |

---

## Ejemplo de Registro — Lead Manual

```
nombre: Inmigrants Barber Studio
estado: prospecto_enriquecido
prioridad: alta
origen: busqueda_activa
Ecosistema: health-growth
ultima_interaccion: 22/06/2026
rubro: barbería
zona: Maipú
instagram_url: https://instagram.com/immigrantsbarber [TODO: verificar]
gap_digital: sin_web, instagram_inactivo
potencial: alta
proxima_accion: Enviar DM de primer contacto esta semana
Notas: Detectado por señal G02 (segunda sucursal). Score 3.40 ALTA.
```

---

## Template CSV (para importación masiva)

```csv
nombre,estado,prioridad,origen,Ecosistema,rubro,zona,telefono,instagram_url,gap_digital,potencial,proxima_accion
[Nombre Negocio],[estado],[prioridad],[origen],health-growth,[rubro],[zona],[tel],[url],[gaps],[potencial],[accion]
```

---

## Estados por Etapa Comercial

```
DETECCIÓN
  senal_detectada → prospecto → prospecto_enriquecido

CALIFICACIÓN  
  validado → oportunidad

CONTACTO
  contacto → reunion → propuesta

CIERRE
  cliente → nurturing (si no cierra ahora pero puede volver)
```

---

## Fuentes de Lead y su Origen en CRM

| Fuente real | Valor en campo `origen` |
|------------|------------------------|
| Formulario en healthgrowth.cl | formulario_web |
| DM de Instagram | instagram |
| Mensaje de WhatsApp directo | whatsapp |
| Alguien que nos recomendó | referido |
| OpenClaw / investigación propia | busqueda_activa / openclaw |
| Email directo | referido |
