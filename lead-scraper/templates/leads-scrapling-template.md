# Template de Leads — HG-Lead Scraper
Health Growth SpA | Actualizado: 2026-06-23

---

## Descripción de Campos

| Campo | Tipo | Descripción | Ejemplo |
|-------|------|-------------|---------|
| `id` | Texto | ID único del lead. Formato: HG-001, HG-002 | HG-042 |
| `nombre_negocio` | Texto | Nombre oficial o nombre visible del negocio | Clínica Dental Sonrisas |
| `rubro` | Texto | Categoría del negocio | clinica-dental |
| `ciudad` | Texto | Ciudad donde opera | Santiago |
| `zona` | Texto | Comuna, barrio o sector | Providencia |
| `direccion` | Texto | Dirección física si está disponible | Av. Pedro de Valdivia 123 |
| `telefono` | Texto | Número normalizado. Formato: +56 9 XXXX XXXX | +56912345678 |
| `email` | Texto | Email comercial público si existe | contacto@ejemplo.cl |
| `instagram` | Texto | Handle o URL de Instagram | @ejemplo_ig |
| `web` | URL | Sitio web si existe | https://ejemplo.cl |
| `google_maps_url` | URL | Link a ficha Google Maps | https://maps.google.com/?q=... |
| `calificacion` | Número | Calificación Google (1.0 a 5.0) | 4.3 |
| `resenas` | Número | Cantidad de reseñas en Google | 47 |
| `fuente` | Texto | De dónde se extrajo el lead | google_maps / instagram / directorio |
| `tiene_web` | SÍ/NO | ¿Tiene sitio web propio? | SÍ |
| `tiene_whatsapp` | SÍ/NO | ¿Tiene WhatsApp visible? | NO |
| `tiene_instagram` | SÍ/NO | ¿Tiene Instagram activo? | SÍ |
| `problema_visible` | Texto | Problema digital más obvio detectado | Sin web / Instagram inactivo |
| `oportunidad_detectada` | Texto | Qué podemos ofrecerle | Landing page + Pack Impulso |
| `servicio_sugerido` | Texto | Nombre del servicio HG más relevante | Pack Impulso Pyme |
| `prioridad` | alta/media/baja | Según sistema de scoring | alta |
| `estado` | Texto | Estado en el pipeline CRM | senal_detectada / prospecto / contactado |
| `fecha_extraccion` | Fecha | Cuándo se extrajo (YYYY-MM-DD) | 2026-06-23 |
| `observaciones` | Texto | Notas adicionales relevantes | Tiene buena reputación local |

---

## Estados del Pipeline

```
senal_detectada     → Lead identificado, no verificado
prospecto           → Datos verificados manualmente
prospecto_enriquecido → Tiene info adicional (Instagram, web revisada)
validado            → Confirmado como oportunidad real
contactado          → Primer mensaje enviado
en_conversacion     → Respondió y hay diálogo activo
propuesta_enviada   → Se envió propuesta comercial
cliente             → Cerró trato
no_contactar        → Solicitó no contacto — RESPETAR
nurturing           → No cerró ahora pero puede volver
descartado          → No aplica para HG
```

---

## Fuentes de Extracción

| Valor campo `fuente` | Origen |
|---------------------|--------|
| `google_maps` | Búsqueda en Google Maps |
| `instagram` | Perfil o búsqueda en Instagram |
| `directorio_web` | Páginas Amarillas, Guía Comercial u otro |
| `referido` | Recomendado por alguien |
| `busqueda_activa` | Búsqueda manual en Google |
| `openclaw` | Motor OpenClaw en GCP |

---

## Flujo de Trabajo

```
1. Extraer leads con Scrapling o manualmente
   ↓
2. Guardar en /lead-scraper/raw/[nicho]_[fecha]_raw.csv
   ↓
3. Limpiar con Prompt 10 (deduplicar, normalizar)
   ↓
4. Guardar en /lead-scraper/clean/[nicho]_[fecha]_clean.csv
   ↓
5. Priorizar con Prompt 12
   ↓
6. Leads ALTA prioridad → CRM Notion / Google Sheets
   ↓
7. Preparar mensaje personalizado con Prompt 14
   ↓
8. Carlos revisa y aprueba antes de enviar
   ↓
9. Seguimiento según Prompt 15
```

---

## Estructura de Carpetas

```
/lead-scraper/
  /exports/    → CSVs exportados para CRM
  /raw/        → CSVs sin procesar del scraper
  /clean/      → CSVs limpios y normalizados
  /prompts/    → Librería de prompts
  /reports/    → Reportes de sesión
  /niches/     → Configuración de nichos
  /templates/  → Este archivo + CSV base
  /compliance/ → Reglas éticas
```
