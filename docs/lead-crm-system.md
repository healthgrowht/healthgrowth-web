# HG-Leads y HG-CRM — Sistema de Captación y Seguimiento
Versión: 1.0 | Fecha: 2026-06-22

---

## Flujo Completo de Lead

```
Contenido Instagram
    ↓ CTA (comentario / link / DM)
Página healthgrowth.cl
    ↓ Formulario de diagnóstico
n8n Webhook (HealthGrowth-Pipeline-V1)
    ↓ Valida y normaliza
Notion CRM (👥 Clientes)
    ↓ Notificación email a Carlos
Respuesta manual o automática
    ↓
Diagnóstico → Propuesta → Cierre
```

---

## Fuentes de Leads

| Fuente | Canal | Automatizado |
|--------|-------|-------------|
| Formulario web | healthgrowth.cl/#diagnostico | ✅ Sí (n8n) |
| DM Instagram | @healthgrowthspa | ⏸ Manual (futuro: CHIMI) |
| WhatsApp | +56 9 5101 7947 | ⏸ Manual (futuro: CHIMI) |
| Comentarios Instagram | "PYME" / "DIAGNÓSTICO" | ⏸ Pendiente ManyChat |
| Referidos | Sin canal específico | ❌ Manual |
| Email | contacto@healthgrowth.cl | ❌ Manual |
| Búsqueda activa | OpenClaw / investigación | ✅ Sí (ecosistema ISAPRE/HG) |

---

## Campos del CRM

### Campos Obligatorios
| Campo | Tipo | Ejemplo |
|-------|------|---------|
| nombre | Título | "Inmigrants Barber Studio" |
| estado | Select | `prospecto_enriquecido` |
| prioridad | Select | `alta` |
| origen | Select | `formulario_web` |
| Ecosistema | Select | `health-growth` |
| ultima_interaccion | Fecha | 2026-06-22 |

### Campos del Formulario Web
| Campo | Tipo | Notas |
|-------|------|-------|
| fullName | Texto | Nombre del contacto |
| company | Texto | Nombre del negocio |
| email | Email | Correo de contacto |
| commune | Texto | Ciudad/comuna |
| service | Select | Servicio de interés |
| whatsapp | Teléfono | +56 9... |
| challenge | Texto largo | Desafío actual |

### Campos Enriquecidos (post-validación)
| Campo | Tipo | Notas |
|-------|------|-------|
| rubro | Texto | Peluquería, barb., etc. |
| potencial | Select | alta/media/baja |
| gap_digital | Multi-select | Gaps detectados |
| instagram_url | URL | Perfil Instagram |
| google_maps_url | URL | Ficha Google |
| telefono | Teléfono | WhatsApp del negocio |
| proxima_accion | Texto | Qué hacer ahora |
| Notas | Texto largo | Observaciones |

---

## Pipeline — 10 Estados

| Estado | Significado | Acción requerida |
|--------|-------------|-----------------|
| `senal_detectada` | Señal encontrada, sin validar | Investigar más |
| `prospecto` | Validado como candidato real | Enriquecer datos |
| `prospecto_enriquecido` | Datos completos, score calculado | Decidir si contactar |
| `validado` | Confirmado como oportunidad | Preparar acercamiento |
| `oportunidad` | Listo para primer contacto | Iniciar contacto |
| `contacto` | Primer contacto realizado | Esperar respuesta |
| `reunion` | Reunión/diagnóstico agendado | Preparar diagnóstico |
| `propuesta` | Propuesta enviada | Seguimiento |
| `cliente` | Ganado | Onboarding |
| `nurturing` | No listo ahora, cultivar | Contenido periódico |

---

## Cartera Actual (2026-06-22)

| Negocio | Estado | Score | Prioridad |
|---------|--------|-------|-----------|
| Inmigrants Barber Studio (Maipú) | prospecto_enriquecido | 3.40 | ALTA |
| Epoca Estilistas (Santiago Centro) | prospecto_enriquecido | 3.40 | ALTA |
| Barbudos Barberia (Santiago Centro) | prospecto_enriquecido | 2.75 | MEDIA |

**Siguiente acción**: Mover los 3 a estado `oportunidad` y preparar primer contacto esta semana.

---

## Plantillas de Primer Contacto

### DM Instagram — Prospecto barbería/peluquería
```
Hola [Nombre], vi [su barbería/su peluquería] en Instagram.
Trabajamos con negocios como el tuyo ayudándolos a ordenar
su presencia digital y captar más clientes.
¿Tienes 15 minutos esta semana para contarte cómo?
```

### WhatsApp — Prospecto frío
```
Hola [Nombre], soy Luis de Health Growth SpA.
Vimos [nombre del negocio] y nos pareció que podríamos
ayudarlos a [problema específico detectado].
¿Cuándo podemos hablar 15 minutos sin compromiso?
```

---

## Sistema de Seguimiento

| Día | Acción | Canal |
|-----|--------|-------|
| Día 0 | Primer contacto | DM o WhatsApp |
| Día 1 | Si no responde, seguimiento suave | DM o comentario |
| Día 3 | Recordatorio con valor (tip gratuito) | DM o Email |
| Día 7 | Último intento + lead magnet | DM o WhatsApp |
| Día 14 | Marcar como `nurturing` si no responde | CRM |
| Mes 2 | Reactivar con nuevo contenido | Story mention |

---

## Criterios de Scoring HG

| Señal | Categoría | Puntos |
|-------|-----------|--------|
| Segunda sucursal / expansión | G (Crecimiento) | +1.5 |
| Nueva sucursal anunciada | G | +1.2 |
| Sin WhatsApp Business | D (Digitalización) | +1.0 |
| Sin reservas online | D | +1.0 |
| Web obsoleta o sin web | D | +0.8 |
| Instagram abandonado (+60 días sin post) | D | +0.8 |
| Google Business incompleto | P (Presencia) | +0.6 |
| Fotos antiguas o de mala calidad | P | +0.4 |
| Sin precios visibles | P | +0.4 |
| Sector alta conversión (barbería, peluquería, veterinaria) | S | +0.5 |

**Umbrales**:
- ≥ 3.0 → ALTA prioridad → Contactar esta semana
- 2.0–2.9 → MEDIA prioridad → Contactar este mes
- < 2.0 → BAJA prioridad → Nurturing

---

## Automatización Actual

| Paso | Automatizado | Herramienta |
|------|-------------|------------|
| Recibir lead de formulario web | ✅ | n8n + Next.js |
| Registrar en Notion CRM | ✅ | n8n → Notion API |
| Enviar alerta email a Carlos | ✅ | n8n → SMTP Gmail |
| Respuesta automática al lead | ⏸ | Pendiente CHIMI |
| Seguimiento día 3 | ⏸ | Pendiente n8n cron |
| Seguimiento día 7 | ⏸ | Pendiente n8n cron |

---

## Notas de Limitación Técnica

- **Notas (rich_text)** en Notion no se puede escribir desde n8n v2 → actualizar manualmente
- **zona, proxima_accion** tampoco se escriben automáticamente → actualizar en Notion
- **gap_digital multi-select** acepta solo 1 valor por llamada n8n → workaround: llamada múltiple
