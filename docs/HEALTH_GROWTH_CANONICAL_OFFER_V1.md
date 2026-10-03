# HEALTH GROWTH — OFERTA CANÓNICA V1
# Fuente de verdad de productos y servicios
# Fecha: 2026-10-03 | Sesión V37
# PROHIBIDO alterar precios o packs sin actualizar este archivo primero.

---

## REGLA MAESTRA

**Precios reales: NO DEFINIDOS AÚN.**
La web correctamente NO muestra precios. El modelo es:
1. Lead llega → formulario / WhatsApp
2. Diagnóstico gratuito → evaluación personalizada
3. Propuesta a medida → precio proporcional al negocio

> Ver: `docs/comercial/PRECIOS_REALES_PENDIENTES_CARLOS.md`

---

## CATÁLOGO DE SERVICIOS — V1

### 0. DIAGNÓSTICO EXPRESS PYME
| Campo | Valor |
|-------|-------|
| ID | `diagnostico` |
| Estado | LIVE_VERIFIED |
| Precio | GRATIS |
| Duración | 30-60 min |
| Entregable | 3 mejoras concretas + plan de prioridades |
| Requisito previo | Ninguno |
| CTA web | Formulario #diagnostico |

**Descripción customer-facing:**
Revisamos tu operación y presencia actual. Te decimos 3 cosas que puedes mejorar ya. Sin costo y sin compromiso.

---

### 1. PACK IMPULSO (Presencia Digital)
| Campo | Valor |
|-------|-------|
| ID | `impulso` |
| Estado | READY — precio pendiente |
| Precio | A definir (pago único) |
| Tiempo entrega | 3-7 días hábiles |
| Incluye | Web profesional + WhatsApp Business + Imagen digital + Instagram optimizado |

**Descripción customer-facing:**
Tu negocio en internet, con imagen y WhatsApp que transmiten confianza.

**Beneficios (Mom Test — lenguaje PYME):**
- Sitio web profesional orientado a conversiones
- WhatsApp Business configurado y organizado
- Imagen digital coherente en todos los canales
- Perfil de Instagram optimizado

---

### 2. ASISTENTE IA ESENCIAL
| Campo | Valor |
|-------|-------|
| ID | `asistente` |
| Estado | READY — precio pendiente |
| Precio | A definir (setup + mensualidad) |
| Incluye | Flujos automáticos WA + Clasificación de consultas + Recordatorios de cita + Seguimiento de leads |

**Descripción customer-facing:**
Responde, clasifica y hace seguimiento automáticamente.

**Beneficios (Mom Test):**
- Flujos automáticos de respuesta en WhatsApp
- Clasificación de consultas sin trabajo manual
- Recordatorios de cita que llegan solos
- Seguimiento de clientes que no cerraron

---

### 3. PACK AUTOMATIZACIÓN
| Campo | Valor |
|-------|-------|
| ID | `automatizacion` |
| Estado | READY — precio pendiente |
| Precio | A definir (setup + mensualidad) |
| Incluye | Gestión de clientes + Agenda digital + Flujos de seguimiento + Reportes básicos |

**Descripción customer-facing:**
Organiza tus clientes, tu agenda y tus seguimientos en un solo lugar.

**Beneficios (Mom Test):**
- Sistema de gestión de clientes (organización, no jargon técnico)
- Agenda digital sin cruces de horario
- Flujos de seguimiento de oportunidades
- Reportes básicos para tomar decisiones

**NOTA:** Evitar la palabra "CRM" en material público dirigido a dueños de negocio no técnicos.

---

### 4. ECOSISTEMA COMPLETO
| Campo | Valor |
|-------|-------|
| ID | `ecosistema` |
| Estado | READY — precio pendiente |
| Precio | A definir (setup + mensualidad) |
| Incluye | Todo lo anterior + Paneles de seguimiento + Estrategia de contenido + Canales conectados |

**Descripción customer-facing:**
Presencia + automatización + gestión de clientes + contenido.

**Beneficios (Mom Test):**
- Todo lo de los packs anteriores integrado
- Paneles de seguimiento de resultados
- Estrategia de contenido digital
- Canales digitales conectados entre sí

---

### 5. ACOMPAÑAMIENTO MENSUAL
| Campo | Valor |
|-------|-------|
| ID | `acompanamiento` |
| Estado | READY — precio pendiente |
| Precio | A definir (mensualidad fija) |
| Incluye | Revisión mensual + Ajustes continuos + Soporte directo + Estrategia de crecimiento |

**Descripción customer-facing:**
Revisión, ajustes y soporte mensual para que el sistema siempre funcione.

**Beneficios (Mom Test):**
- Revisión mensual de operación y resultados
- Ajustes y mejoras continuas al sistema
- Soporte directo con el equipo
- Estrategia de crecimiento progresivo

---

## ESTRUCTURA DE PRECIOS (PENDIENTE DE VALIDACIÓN)

```
NIVEL           MODELO          PRECIO    STATUS
────────────────────────────────────────────────
Diagnóstico     Gratis          $0        DEFINIDO
Pack Impulso    Pago único      TBD       PENDIENTE CARLOS
Asistente IA    Setup + mes     TBD       PENDIENTE CARLOS
Automatización  Setup + mes     TBD       PENDIENTE CARLOS
Ecosistema      Setup + mes     TBD       PENDIENTE CARLOS
Mensual         Mensualidad     TBD       PENDIENTE CARLOS
```

**Política de publicación de precios:**
- NO publicar precios en web hasta que Carlos los apruebe
- Actualizar `docs/comercial/PRECIOS_REALES_PENDIENTES_CARLOS.md` primero
- Luego actualizar `app/constants.ts` si corresponde
- Luego actualizar `app/PacksCanonical.tsx`

---

## RUBROS OBJETIVO (de UseCases component + Business Model)

| Rubro | Fit | Producto recomendado |
|-------|-----|---------------------|
| Veterinaria / Peluquería canina | ⭐⭐⭐ | Impulso + Automatización |
| Salón de belleza / Barbería / Estética | ⭐⭐⭐ | Impulso + Asistente IA |
| Médico / Psicólogo / Nutricionista | ⭐⭐⭐ | Impulso + Automatización |
| Coach / Consultor | ⭐⭐ | Impulso + Asistente IA |
| Centro de educación | ⭐⭐ | Automatización + Ecosistema |
| PYME de servicios generales | ⭐⭐ | Diagnóstico primero |

---

## RELACIÓN CON CASO PILOTO

**Patitas Felices** — piloto activo (veterinaria/peluquería canina)
- Validación del modelo Automatización + Asistente IA
- Implementación: PARCIAL (Carlos OS activo, WhatsApp pendiente credenciales)
- Identidad: SEPARADA de Health Growth (prohibido mezclar)
- Uso en web: visible en `CasoPatitas` component como caso real

---

## HISTORIAL DE VERSIONES

| Versión | Fecha | Cambio |
|---------|-------|--------|
| V1 | 2026-10-03 | Creación inicial — recuperación completa desde código y docs |

---

*Fuente: app/PacksCanonical.tsx + docs/comercial/PRECIOS_REALES_PENDIENTES_CARLOS.md + docs/fondos-publicos/03_MODELO_DE_NEGOCIO.md*
*Sesión V37 | Autor: Claude Code*
