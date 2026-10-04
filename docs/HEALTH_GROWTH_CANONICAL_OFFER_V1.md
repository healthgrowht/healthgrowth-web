# HEALTH GROWTH — OFERTA CANÓNICA V1
# Fuente de verdad de productos y servicios
# Fecha: 2026-10-03 | Sesión V37 | Actualizado: 2026-10-04 | Sesión V38
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

### 2. ATENCIÓN AUTOMÁTICA *(antes "Asistente IA Esencial" — renombrado V38)*
| Campo | Valor |
|-------|-------|
| ID | `asistente` |
| Estado | READY — precio pendiente |
| Chip web | "Respuesta rápida" |
| Precio | A definir (setup + mensualidad) |
| Incluye | Flujos automáticos WA + Clasificación de consultas + Recordatorios de cita + Seguimiento |

**Descripción customer-facing:**
Responde, organiza y hace seguimiento sin que tengas que estar pendiente.

**Beneficios (Mom Test):**
- Respuestas automáticas en WhatsApp cuando no estás
- Las consultas se organizan solas por tipo y urgencia
- Recordatorios de cita que llegan sin que lo pidas
- Seguimiento automático a clientes que no respondieron

---

### 3. PACK ORGANIZACIÓN *(antes "Pack Automatización" — renombrado V38)*
| Campo | Valor |
|-------|-------|
| ID | `automatizacion` |
| Estado | READY — precio pendiente |
| Chip web | "Organización" |
| Precio | A definir (setup + mensualidad) |
| Incluye | Registro de clientes + Agenda digital + Flujos de seguimiento + Información para decisiones |

**Descripción customer-facing:**
Todos tus clientes, tu agenda y tus seguimientos en un solo lugar.

**Beneficios (Mom Test):**
- Registro organizado de tus clientes y su historial
- Agenda digital sin cruces de horario
- Seguimiento claro de quién necesita atención
- Información real para tomar mejores decisiones

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

## ESTRUCTURA DE PRECIOS — MATRIZ DE CLASIFICACIÓN (actualizado V38)

```
NIVEL                 MODELO         PRECIO      CLASIFICACIÓN
──────────────────────────────────────────────────────────────
Diagnóstico           Gratis         $0          ACTIVE_CONFIRMED
Pack Impulso          Pago único     TBD         NEEDS_CARLOS
Atención Automática   Setup + mes    TBD         NEEDS_CARLOS
Pack Organización     Setup + mes    TBD         NEEDS_CARLOS
Ecosistema Completo   Setup + mes    TBD         NEEDS_CARLOS
Acompañamiento Mens.  Mensualidad    TBD         NEEDS_CARLOS
```

### Clasificación de precios históricos hallados en git

Búsqueda exhaustiva en historial git (todos los commits de PacksCanonical, Packs, Levels):
**No se encontraron valores numéricos de precio en ningún commit.** Los archivos históricos
(`app/Packs.tsx`, `app/Levels.tsx`) contenían nombres descriptivos pero SIN precios definidos.

| Precio | Clasificación | Fuente |
|--------|--------------|--------|
| $49.990 "Pack Inicio" | HISTORICAL/UNVERIFIED | No encontrado en git — posiblemente de conversación verbal |
| $89.990 "Crecimiento" | HISTORICAL/UNVERIFIED | No encontrado en git — idem |
| $99.990 "Pack Presencia" | HISTORICAL/UNVERIFIED | No encontrado en git — idem |

**Instrucción:** Todos los precios numéricos requieren confirmación de Carlos antes de publicar.
La web correctamente NO muestra precios. Mantener así hasta Gate-PRECIO.

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
| V1.1 | 2026-10-04 | V38 sync: nombres de packs actualizados (Atención Automática, Pack Organización), matriz de clasificación de precios añadida |

---

*Fuente: app/PacksCanonical.tsx + docs/comercial/PRECIOS_REALES_PENDIENTES_CARLOS.md + docs/fondos-publicos/03_MODELO_DE_NEGOCIO.md*
*Sesión V37 | Autor: Claude Code*
