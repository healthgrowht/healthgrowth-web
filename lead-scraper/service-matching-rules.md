# Reglas de Matching — Problema → Servicio HG
Health Growth SpA | Actualizado: 2026-06-23

---

## Lógica General

Cuando se detecta un problema digital en un lead, el sistema asigna el servicio de Health Growth más relevante.

Un lead puede tener múltiples problemas. En ese caso, priorizar el de mayor impacto visible.

---

## Tabla de Matching

| Problema Detectado | Servicio Sugerido | Pack HG | Prioridad |
|-------------------|------------------|---------|-----------|
| Sin página web propia | Página web simple + presencia digital | Pack Impulso Pyme | ALTA |
| Instagram sin CTA ni link | Optimización Instagram + bio + destacados | Pack Impulso Pyme | ALTA |
| WhatsApp sin automatizar | WhatsApp Business + flujo de atención | Pack Impulso Pyme | ALTA |
| Agenda manual o por teléfono | Formulario + CRM simple + automatización | Pack Avanzado | ALTA |
| Google Business incompleto | Optimización ficha Google | Pack Impulso Pyme | MEDIA |
| Web desactualizada (más de 3 años) | Rediseño o nueva landing page | Pack Impulso Pyme | MEDIA |
| Sin respuesta automática | Automatización WhatsApp + n8n | Pack Avanzado | ALTA |
| Buena base pero poca conversión | Diagnóstico digital completo + embudo | Diagnóstico Gratuito | ALTA |
| Sin CRM ni seguimiento de clientes | CRM simple en Notion | Pack Avanzado | MEDIA |
| Sin contenido en Instagram (30+ días) | Sistema de contenido mensual | Pack Premium | MEDIA |
| Sin publicidad pagada y listo para escalar | Estrategia Meta Ads | Pack Premium | BAJA |

---

## Descripción de Packs (referencia)

### Pack Impulso Pyme (entrada)
- Diagnóstico digital express
- Presencia básica ordenada (web, Instagram, WhatsApp)
- Google Business optimizado
- Primeros contenidos

### Pack Avanzado (crecimiento)
- Todo Pack Impulso
- CRM simple
- Automatización de respuestas
- Sistema de captación activa
- Seguimiento de leads

### Pack Premium (ecosistema)
- Todo Pack Avanzado
- Sistema de contenido mensual
- Agente conversacional básico
- Reportes semanales
- Acompañamiento estratégico mensual

---

## Árboles de Decisión

### Árbol 1 — ¿Tiene web?

```
¿Tiene web propia?
├── NO → Pack Impulso (landing page)
└── SÍ
    ├── ¿Es moderna y funciona bien?
    │   ├── SÍ → Revisar Instagram y WhatsApp
    │   └── NO → Pack Impulso (rediseño)
    └── ¿Tiene formulario o reservas?
        ├── NO → Pack Avanzado (automatización)
        └── SÍ → Diagnóstico (convertir mejor)
```

### Árbol 2 — ¿Tiene Instagram?

```
¿Tiene Instagram?
├── NO → Pack Impulso (crear + configurar)
└── SÍ
    ├── ¿Publicó en los últimos 30 días?
    │   ├── NO → Pack Impulso (activar cuenta)
    │   └── SÍ
    │       ├── ¿Tiene más de 500 seguidores?
    │       │   ├── NO → Pack Impulso (hacer crecer)
    │       │   └── SÍ → Diagnóstico (mejorar conversión)
```

### Árbol 3 — ¿Tiene WhatsApp visible?

```
¿Tiene WhatsApp visible?
├── NO → Pack Impulso (configurar WA Business)
└── SÍ
    ├── ¿Tiene link wa.me?
    │   ├── NO → Pack Impulso (configurar link)
    │   └── SÍ
    │       ├── ¿Responde en menos de 1 hora?
    │       │   ├── NO → Pack Avanzado (automatizar respuesta)
    │       │   └── SÍ → Diagnóstico (mejorar seguimiento)
```

---

## Mensaje Sugerido por Servicio

### Pack Impulso
"Vi que [NEGOCIO] tiene buena presencia en Google Maps pero no encontré una página web ni un sistema claro para reservar. En Health Growth ayudamos a negocios como el tuyo a ordenar su presencia digital rápido. Te mando un diagnóstico express sin costo si te interesa."

### Pack Avanzado
"[NEGOCIO] tiene buena base digital pero vi que las consultas probablemente llegan y se pierden sin seguimiento. Trabajamos con negocios ordenando el proceso desde que un cliente pregunta hasta que reserva. ¿Te sirve que revisemos cómo está funcionando?"

### Diagnóstico
"Revisé [NEGOCIO] y tiene buena presencia pero hay 2-3 puntos que podrían mejorar la conversión. Puedo mandarte un diagnóstico express gratuito con observaciones concretas. Sin compromiso."
