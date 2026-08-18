# Precios Reales — Pendiente de Validación Carlos OS

> Documento interno. No publicar en la web hasta tener precios verificados y aprobados.
> Estado: sin precios confirmados a agosto 2026.

---

## Estrategia actual (mientras no hay precios definidos)

La web usa la estrategia correcta:
- Diagnóstico inicial gratuito
- Sin montos visibles
- CTA principal: formulario → WhatsApp → Carlos OS
- Propuesta personalizada después del diagnóstico

---

## Preguntas que Carlos debe responder para cerrar precios

### 1. ¿Cuál es el precio de entrada (nivel básico)?
- ¿Cuánto cobra por la web + WhatsApp Business configurado?
- ¿Es un pago único o mensual?

### 2. ¿Cuál es el precio de Automatización?
- ¿Cuánto por flujos n8n activos (recordatorios, seguimiento, respuestas)?
- ¿Incluye mantenimiento mensual?

### 3. ¿Cuál es el precio del Ecosistema Total?
- ¿Acompañamiento mensual? ¿A cuánto?
- ¿Hay retainer o proyecto cerrado?

### 4. ¿Hay precios diferenciados por rubro?
- ¿Peluquería canina vs clínica vs profesional independiente?

### 5. ¿Cuál es el modelo de cobro?
- ¿Pago único + mantención?
- ¿Mensualidad fija?
- ¿Por proyecto?
- ¿Combinado?

### 6. ¿Cuál es el mínimo viable para arrancar con un cliente?

---

## Estado actual en la web (correcto)

Los packs en Levels.tsx son descriptivos, sin valores:
- Nivel 01: Presencia Digital
- Nivel 02: Orden Comercial
- Nivel 03: Automatización
- Nivel 04: Ecosistema Total

El CTA de cada uno apunta a #diagnostico (formulario gratuito).

---

## Cuándo publicar precios

Solo publicar cuando:
1. Carlos define y aprueba los valores
2. Los valores están documentados en este archivo
3. Se actualizan en `app/constants.ts` → sección precios
4. Se revisa que no existan promesas de resultado vinculadas al precio

---

## REVIEW_REQUIRED

- [ ] Definir precio nivel 01 (Presencia Digital)
- [ ] Definir precio nivel 02 (Orden Comercial)
- [ ] Definir precio nivel 03 (Automatización)
- [ ] Definir precio nivel 04 (Ecosistema Total)
- [ ] Definir modelo de cobro (único / mensual / proyecto)
- [ ] Definir si hay diferenciación por rubro
