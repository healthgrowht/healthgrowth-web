# HG-Presentations — Sistema de Diagnósticos y Propuestas
Versión: 1.0 | Fecha: 2026-06-22

---

## Propósito

Convertir cualquier reunión, diagnóstico o conjunto de datos de cliente
en un documento profesional, vendible y procesable — sin perder tiempo en formato.

**El objetivo no es impresionar visualmente. Es cerrar ventas.**

---

## Tipos de Documentos

| Tipo | Cuándo usar | Duración estimada |
|------|-------------|------------------|
| Diagnóstico Digital | Después de reunión inicial o investigación | 30 min con IA |
| Propuesta Comercial | Cuando el cliente está interesado | 45 min con IA |
| Resumen de Reunión | Después de cada reunión | 15 min con IA |
| Caso de Éxito | Cuando hay resultado documentable | 1 hora con IA |
| Informe Ejecutivo | Para clientes enterprise o seguimiento | 1 hora con IA |

---

## Flujo de Producción

```
ENTRADA
  ├── Notas de reunión / transcripción
  ├── URL del negocio / Instagram / Google Maps
  ├── Datos del CRM (Notion)
  └── Diagnóstico manual previo

PROCESO (con Claude Code)
  ├── Limpiar y estructurar información
  ├── Aplicar plantilla del tipo de documento
  ├── Completar secciones con IA
  ├── Revisar antes de enviar
  └── Exportar a MD / PDF / Presentación

SALIDA
  ├── /documents/diagnostics/ → PDF de diagnóstico
  ├── /templates/ → Propuesta lista para enviar
  └── Notion → Actualizar CRM con estado "propuesta enviada"
```

---

## Estructura del Diagnóstico Digital

### Sección 1 — Resumen Ejecutivo
- Nombre del negocio
- Rubro y ubicación
- Fecha del diagnóstico
- Score digital general (0-10)
- Veredicto en 2 líneas

### Sección 2 — Estado Actual de Canales
| Canal | Estado | Notas |
|-------|--------|-------|
| Instagram | ✅/⚠️/❌ | Detalles |
| WhatsApp Business | ✅/⚠️/❌ | |
| Google Business | ✅/⚠️/❌ | |
| Sitio web | ✅/⚠️/❌ | |
| Facebook | ✅/⚠️/❌ | |

### Sección 3 — Gaps Identificados
Lista priorizada de brechas digitales detectadas.

### Sección 4 — Oportunidades Detectadas
Señales de crecimiento o digitalización que HG puede resolver.

### Sección 5 — Recomendaciones
Máximo 5 acciones concretas ordenadas por impacto.

### Sección 6 — Propuesta de Trabajo
Qué haría HG, en qué tiempo y a qué costo.

---

## Estructura de la Propuesta Comercial

### Página 1 — Portada
- Logo HG
- Nombre del cliente
- Fecha
- "Propuesta de Modernización Digital"

### Página 2 — El Problema
Descripción del dolor actual del negocio (en palabras de ellos si es posible).

### Página 3 — La Solución
Qué propone HG. Específico y concreto.

### Página 4 — El Proceso
Cómo se va a trabajar. Fases, hitos, tiempos.

### Página 5 — Lo Que Incluye
Lista concreta de entregables.

### Página 6 — Inversión
Pack o precio. Formas de pago.

### Página 7 — Por Qué Health Growth
Diferenciadores. Caso Patitas Felices. Garantías.

### Página 8 — Próximo Paso
CTA claro: "Confirma por WhatsApp y comenzamos."

---

## Checklist Antes de Enviar

- [ ] ¿El nombre del cliente está correcto en todo el documento?
- [ ] ¿Hay errores ortográficos?
- [ ] ¿El precio es el que acordamos en la reunión?
- [ ] ¿Incluye fecha de validez de la propuesta?
- [ ] ¿El CTA es claro y tiene el contacto correcto?
- [ ] ¿Está en PDF si va por email?
- [ ] ¿Se actualizó el CRM a estado "propuesta"?
- [ ] ¿Hay fecha de seguimiento agendada?

---

## Criterios de Calidad

| Criterio | Descripción |
|----------|-------------|
| Claridad | El cliente entiende sin preguntar |
| Especificidad | Nada genérico. Todo personalizado |
| Brevedad | Máximo 8 páginas. Menos es más |
| Urgencia | ¿Por qué actuar ahora? |
| Confianza | Incluye caso Patitas Felices o referencia |
| CTA | Siempre un siguiente paso claro |

---

## Plantillas Disponibles

| Plantilla | Ruta |
|-----------|------|
| Diagnóstico Digital Pyme | `/templates/diagnostico-digital-pyme.md` |
| Propuesta Comercial | `/templates/propuesta-comercial-health-growth.md` |
| Resumen Reunión Cliente | `/templates/resumen-reunion-cliente.md` |

---

## Integración con CRM

Después de enviar un documento:
1. Actualizar `estado` en Notion CRM → `propuesta`
2. Completar `proxima_accion` → "Seguimiento en 3 días"
3. Actualizar `ultima_interaccion` → fecha de hoy
4. Agregar nota en `Notas` → resumen de lo enviado
