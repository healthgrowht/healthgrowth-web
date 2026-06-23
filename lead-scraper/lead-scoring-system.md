# Sistema de Scoring — HG-Lead Scraper
Health Growth SpA | Actualizado: 2026-06-23

---

## Modelo de Puntuación

Cada lead recibe un puntaje de 0 a 10. La prioridad se asigna según rango.

| Rango | Prioridad | Acción |
|-------|-----------|--------|
| 7-10 | ALTA | Contactar esta semana |
| 4-6 | MEDIA | Contactar este mes |
| 0-3 | BAJA | Guardar en nurturing |

---

## Criterios de Puntuación

### SEÑALES POSITIVAS (+puntos)

| Criterio | Puntos |
|---------|--------|
| Negocio activo (reseñas en los últimos 90 días) | +2 |
| Teléfono visible y verificado | +1 |
| Más de 20 reseñas en Google | +1 |
| Calificación 4.0 o superior | +1 |
| Sin página web propia | +2 (oportunidad clara) |
| Instagram inactivo (+30 días sin publicar) | +1 |
| WhatsApp visible pero no automatizado | +1 |
| Rubro con alta necesidad de reservas (peluquería, salud, estética, restaurant) | +1 |
| Google Business incompleto | +1 |

### SEÑALES NEGATIVAS (-puntos)

| Criterio | Puntos |
|---------|--------|
| Sin teléfono visible | -2 |
| Menos de 5 reseñas | -1 |
| Negocio posiblemente cerrado (sin actividad reciente) | -3 |
| Ya tiene web moderna con formulario y CTA | -2 |
| Gran empresa (más de 10 empleados visibles) | -1 |
| Solo Google Maps sin más datos | -1 |

---

## Ejemplos de Scoring

### Lead A — Peluquería Canina sin web, con teléfono, 35 reseñas
```
+ Negocio activo:              +2
+ Teléfono visible:            +1
+ Más de 20 reseñas:           +1
+ Calificación 4.3:            +1
+ Sin web propia:              +2
+ Rubro alta necesidad:        +1
TOTAL: 8 puntos → ALTA PRIORIDAD
```

### Lead B — Centro estético con web básica, Instagram irregular
```
+ Negocio activo:              +2
+ Teléfono visible:            +1
+ 12 reseñas (no llega a 20): +0
+ Calificación 3.8 (bajo 4.0): +0
- Tiene web (aunque básica):   -1
+ Instagram inactivo:          +1
+ Rubro alta necesidad:        +1
TOTAL: 4 puntos → MEDIA PRIORIDAD
```

### Lead C — Restaurante grande con presencia completa
```
+ Negocio activo:              +2
+ Teléfono visible:            +1
+ 180 reseñas:                 +1
+ Calificación 4.5:            +1
- Web moderna con reservas:    -2
- Gran empresa:                -1
TOTAL: 2 puntos → BAJA PRIORIDAD
```

---

## Campos CRM por Prioridad

### ALTA (contactar en 48h)
- Preparar mensaje personalizado (Prompt 14)
- Carlos revisa antes de enviar
- Registrar en Notion CRM como `prospecto`
- Asignar `próxima_acción` con fecha

### MEDIA (contactar en 2 semanas)
- Guardar en lista de trabajo mensual
- Enriquecer con más datos antes de contactar
- Estado en CRM: `senal_detectada`

### BAJA (guardar en nurturing)
- No contactar ahora
- Revisar en 60 días
- Estado en CRM: `nurturing`

---

## Nichos con Mayor Score Promedio (referencia histórica)

1. Peluquerías caninas sin web → score promedio 7.5
2. Centros estéticos con Instagram irregular → score promedio 6.8
3. Kinesiólogos sin agenda online → score promedio 6.5
4. Clínicas dentales pequeñas → score promedio 6.2
5. Restaurantes sin web ni reservas → score promedio 5.8
