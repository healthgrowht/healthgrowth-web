# Librería de Prompts — HG-Lead Scraper
Health Growth SpA | Actualizado: 2026-06-23

Uso: estos prompts se usan con Scrapling (cuando esté instalado) o manualmente con Google Maps/directorios.

---

## PROMPT 01 — Lista Local por Nicho

```
Buscar [NICHO] en [CIUDAD/COMUNA], Chile.
Extraer por cada resultado:
- Nombre del negocio
- Dirección
- Teléfono
- Sitio web (si existe)
- Calificación Google (1-5 estrellas)
- Número de reseñas
- Horarios
- Instagram (si aparece)
- Link a ficha Google Maps

Límite: [50] resultados
Formato de salida: CSV con columnas estándar HG
```

---

## PROMPT 02 — Negocios Sin Web

```
Buscar [NICHO] en [CIUDAD], Chile.
Filtrar: solo mostrar negocios que NO tienen sitio web propio en su ficha.
Extraer:
- Nombre del negocio
- Teléfono
- Dirección
- Reseñas
- Instagram si está visible
- Link Google Maps

Marcar en campo "tiene_web" = NO
Marcar en "oportunidad_detectada" = "Sin página web — ofrecer landing page Pack Impulso"
```

---

## PROMPT 03 — Negocios Con WhatsApp Visible

```
Buscar [NICHO] en [CIUDAD].
Filtrar: negocios que tienen número de WhatsApp visible en ficha o web.
Extraer número y verificar si tiene link wa.me configurado.
Marcar "tiene_whatsapp" = SÍ si tiene número visible.
Marcar "problema_visible" = "WhatsApp sin automatizar" si no tiene respuesta rápida aparente.
```

---

## PROMPT 04 — Negocios Con Google Business Incompleto

```
Buscar [NICHO] en [CIUDAD].
Identificar fichas con:
- Menos de 10 reseñas
- Sin descripción del negocio
- Sin horario completo
- Sin fotos de alta calidad
- Sin enlace a sitio web

Para cada uno, marcar:
"problema_visible" = "Google Business incompleto"
"servicio_sugerido" = "Optimización Google Business + Pack Impulso"
```

---

## PROMPT 05 — Negocios Con Instagram Débil

```
Buscar [NICHO] en [CIUDAD] que tienen Instagram.
Revisar perfil público:
- ¿Tiene bio clara con CTA?
- ¿Tiene link en bio?
- ¿Tiene highlights/destacados?
- ¿Publicó en los últimos 30 días?
- ¿Tiene menos de 500 seguidores?

Si cumple 3 o más criterios negativos:
"problema_visible" = "Instagram débil"
"servicio_sugerido" = "Optimización Instagram + Pack Impulso"
```

---

## PROMPT 06 — Centros de Salud y Estética

```
Buscar en [CIUDAD]:
- Centros estéticos
- Clínicas dentales pequeñas
- Kinesiólogos independientes
- Psicólogos con consulta propia
- Nutricionistas
- Podólogos
- Terapeutas alternativos

Priorizar: sin web o web obsoleta, sin sistema de reservas online, con teléfono visible.
Marcar: "ecosistema" = "salud-estetica"
```

---

## PROMPT 07 — Peluquerías Caninas

```
Buscar peluquerías caninas y grooming de mascotas en [CIUDAD].
Extraer: nombre, tel, dirección, web, Instagram, reseñas.
Detectar: ¿tienen sistema de reservas? ¿agenda online? ¿respuesta automática WhatsApp?
Marcar: "nicho" = "peluqueria-canina"
Usar para: benchmarking Patitas Felices y prospección directa.
```

---

## PROMPT 08 — Puerto Montt y Mirasol

```
Buscar en Puerto Montt y sector Mirasol:
- Peluquerías caninas
- Veterinarias
- Tiendas de mascotas
- Servicios para mascotas
- Emprendimientos locales pequeños
- Pymes de servicios locales

Objetivo: benchmarking Patitas Felices + alianzas potenciales.
Marcar: "ciudad" = "Puerto Montt", "zona" = "Mirasol" cuando aplique.
Detectar oportunidades de alianza o referencia.
```

---

## PROMPT 09 — Santiago Oriente

```
Buscar negocios de servicios locales en:
- Las Condes
- Vitacura
- Providencia
- Ñuñoa
- Macul

Negocios target: centros estéticos, salud privada, peluquerías, restaurantes, servicios.
Priorizar: alta calificación Google pero sin web moderna o sin sistema de reservas.
```

---

## PROMPT 10 — Limpieza y Deduplicación de CSV

```
Tengo un CSV con leads de scraping.
Realizar las siguientes operaciones:
1. Eliminar filas duplicadas por número de teléfono
2. Eliminar filas sin teléfono ni Instagram
3. Normalizar teléfonos al formato +56 9 XXXX XXXX
4. Eliminar filas donde "nombre_negocio" esté vacío
5. Ordenar por "calificacion" descendente, luego por "resenas" descendente
6. Agregar columna "fecha_limpieza" con fecha de hoy
7. Exportar CSV limpio a /lead-scraper/clean/[nombre]_clean.csv
```

---

## PROMPT 11 — Enriquecimiento de Lista Existente

```
Tengo CSV con leads básicos (nombre, teléfono, ciudad).
Para cada lead:
1. Buscar Instagram público por nombre del negocio
2. Verificar si tiene web (buscar en Google: "[nombre negocio] [ciudad]")
3. Buscar ficha Google Maps
4. Extraer calificación y número de reseñas
5. Detectar problema digital más obvio
6. Sugerir servicio de Health Growth
7. Actualizar CSV con campos enriquecidos
```

---

## PROMPT 12 — Priorización de Leads

```
Analizar lista de leads y asignar prioridad:

ALTA (score 3+):
- Negocio activo (reseñas recientes)
- Teléfono visible y funcional
- Sin web propia
- Instagram con menos de 300 seguidores o inactivo
- Rubro con alta necesidad de reservas (peluquería, salud, estética)
- Google Maps activo con más de 20 reseñas

MEDIA (score 2):
- Tiene web pero desactualizada
- Instagram con actividad esporádica
- Ficha incompleta

BAJA (score 1 o menos):
- Sin teléfono
- Menos de 5 reseñas
- Negocio posiblemente cerrado
- Datos incompletos

Agregar columna "prioridad" = alta/media/baja
Agregar columna "score" = número
```

---

## PROMPT 13 — Diagnóstico Automático Inicial

```
Para el lead: [NOMBRE NEGOCIO] en [CIUDAD]
Basándome en los datos públicos disponibles, generar diagnóstico inicial:

PRESENCIA DIGITAL:
- ¿Tiene web? [SÍ/NO] — Estado: [buena/regular/mala/inexistente]
- ¿Tiene Instagram? [SÍ/NO] — Estado: [activo/irregular/inactivo]
- ¿Tiene Google Business? [SÍ/NO] — Estado: [completo/incompleto]
- ¿Tiene WhatsApp Business? [SÍ/NO/desconocido]

OPORTUNIDADES DETECTADAS:
1. [Oportunidad principal]
2. [Oportunidad secundaria]
3. [Oportunidad terciaria]

SERVICIO SUGERIDO: [Pack Impulso / Diagnóstico / Presencia Básica]
POTENCIAL ESTIMADO: [alto/medio/bajo]
PRÓXIMA ACCIÓN: [mensaje directo / enviar diagnóstico / llamar]
```

---

## PROMPT 14 — Mensaje Personalizado

```
Generar mensaje de primer contacto para: [NOMBRE NEGOCIO]

Datos conocidos:
- Tipo de negocio: [RUBRO]
- Ciudad: [CIUDAD]
- Problema detectado: [PROBLEMA]
- Fuente de contacto: [Instagram DM / WhatsApp]

Reglas:
- Máximo 3 líneas
- Mencionar UNA observación real y específica
- No sonar genérico ni de agencia
- Incluir oferta de diagnóstico gratis
- Tono: directo, útil, respetuoso
- No usar emojis en exceso
- No enviar de noche (entre 22:00 y 08:00)
```

---

## PROMPT 15 — Seguimiento Comercial

```
El lead [NOMBRE] no respondió en 3 días.
Generar mensaje de seguimiento día 3:
- Recordar brevemente el contacto anterior
- Ofrecer alternativa de contacto (DM/WhatsApp/video llamada)
- No ser insistente
- Máximo 2 líneas

Si no responde en 7 días más:
Generar mensaje final:
- Cerrar el ciclo de forma amigable
- Dejar puerta abierta para el futuro
- Marcar lead como "nurturing" en CRM

No insistir más allá de 2 seguimientos.
```
