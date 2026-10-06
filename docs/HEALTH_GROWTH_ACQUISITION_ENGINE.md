# HEALTH GROWTH — ACQUISITION ENGINE
# Motor de captación B2B para el negocio principal de Health Growth SpA
# Versión: 1.0 | Fecha: 2026-09-02

---

## OBJETIVO

Crear un flujo predecible de prospectos calificados para Health Growth SpA.

Health Growth NO vende tecnología.
Health Growth vende el RESULTADO: "Más clientes, menos trabajo manual, negocio ordenado."

---

## ICP (Ideal Customer Profile — confirmado)

```
PERFIL:
  → Dueño/a de negocio de servicios local
  → 1-10 colaboradores
  → Sin equipo de marketing ni tecnología interno
  → Santiago o ciudades principales de Chile
  → Edad: 25-55 años

PAIN POINTS VERIFICADOS:
  → "Pierdo clientes porque no alcanzo a responder"
  → "No sé cuántos clientes tengo ni cuánto gastan"
  → "Me olvidé de una cita y perdí un cliente"
  → "Mis redes no me generan nada"
  → "Trabajo de lunes a lunes y no tengo tiempo"

SEÑALES DE COMPRA:
  → Comenta en post sobre "respuesta rápida en negocios"
  → No tiene booking link en su bio de Instagram
  → Responde DMs manualmente (> 4h response time visible)
  → WhatsApp como único canal de comunicación
  → Web básica o sin web
  → Google Business sin optimizar
  → Instagram con <500 seguidores y posts irregulares

SEGMENTOS PRIORITARIOS:
  1. Mascotas/Veterinaria — Patitas como referencia directa
  2. Salud y bienestar — alta recurrencia, necesitan agenda
  3. Estética y cuidado personal — alta rotación, citas frecuentes
  4. Profesionales independientes (dentistas, psicólogos)
```

---

## FUNNEL DE ADQUISICIÓN HG

```
IDENTIFIED
  → RESEARCHED (digital gap score calculado)
    → QUALIFIED (ICP fit + buying signal + contactability)
      → CONTACT_READY (outreach preparado, aprobado por Carlos)
        → CONTACTED (mensaje enviado)
          → REPLIED
            → DISCOVERY_BOOKED
              → DISCOVERY_DONE
                → PROPOSAL
                  → NEGOTIATION
                    → WON | LOST
```

---

## CANALES DE ACQUISITION HG

### Inbound (prioritario)

**1. Contenido Instagram @healthgrowthspa**
```
Objetivo: demostrar resultados, no vender tecnología
Pilares:
  → Caso Patitas: resultados concretos (antes/después de implementación)
  → Tips operativos: "Cómo un negocio de peluquería logró X"
  → Detrás del proceso: cómo funciona HG
  → Señales de compra: "¿Perdiste un cliente esta semana por no responder?"
  
CTA: DM directo o "Haz el diagnóstico gratis en healthgrowth.cl"
```

**2. Website healthgrowth.cl**
```
Conversión actual: DESCONOCIDA (no hay analytics de conversión)
Gaps detectados:
  → Sin social proof concreta (número de clientes, resultados)
  → Sin pricing visible (correcto — diagnóstico primero)
  → CTA claro a diagnóstico gratuito ✅ (existe)
  → Sin caso de estudio completo publicado
  
Próximo paso: publicar Caso Patitas con métricas reales
```

**3. Formulario de diagnóstico → n8n → CRM Notion**
```
Estado: ✅ ACTIVO (HealthGrowth-Pipeline-V1 n8n)
Webhook: https://n8n.healthgrowth.cl/webhook/...
CRM: Notion 👥 Clientes
Actual: 3 prospectos en estado prospecto_enriquecido
```

### Outbound (después de First E2E Patitas)

**4. Prospecting Research Engine**

```
Proceso (Clay-style):
  FIND     → Identificar negocios por segmento + zona
  ENRICH   → Nombre dueño, redes, web, teléfono, Google Business
  RESEARCH → Scoring de digital gap
  SCORE    → Priorización por oportunidad
  PREPARE  → Draft de outreach personalizado
  GATE     → Carlos aprueba antes de enviar

Fuentes de datos:
  → Google Maps API (negocios locales)
  → Instagram pública (engagement, frecuencia de posts)
  → Google Business profile
  → Web de la empresa (si existe)
  
NO usar:
  → Scraping ilegal
  → Datos privados no públicos
  → Mensajes masivos sin aprobación
```

**5. Referral de Patitas**

```
Patitas como caso de éxito genera interés de otros negocios similares.
Cada cliente HG se convierte en caso de éxito potencial.
Ciclo: cliente → resultado → contenido → nuevo cliente
```

---

## PROSPECT SCORING

**Score components:**

```
ICP_FIT (0-10):
  → Industria: mascotas=10, salud=9, estética=8, profesional=7, otro=4
  → Tamaño: 1-5 personas=10, 6-10=8, 11-20=5, >20=2
  → Zona: Santiago/ciudades principales Chile=10, regiones=7

DIGITAL_GAP (0-10):
  → Sin booking system: +3
  → Responde DMs >4h: +2
  → Sin web propia o web básica: +2
  → Instagram <500 seguidores o posts irregulares: +1
  → Sin Google Business optimizado: +1
  → WhatsApp personal como único canal: +1

BUYING_SIGNAL (0-5):
  → Mencionó precio o preguntó: +3
  → Comentó en post de HG: +2
  → Inbound (llegó él): +2
  → Referido: +1

CONTACTABILITY (0-5):
  → Número de WA visible: +2
  → DMs abiertos en Instagram: +2
  → Email disponible: +1

CONFIDENCE: HIGH | MEDIUM | LOW (basado en evidencia disponible)
```

**Score total → Prioridad:**
```
>25: HOT — contactar esta semana
15-25: WARM — contactar este mes
<15: COLD — dejar en backlog
```

**Almacenar:**
```json
{
  "prospect_id": "PROS-HG-{uuid}",
  "company_name": "Peluquería Canina XYZ",
  "industry": "mascotas",
  "contact_name": null,
  "contact_wa": null,
  "contact_ig": "@handle",
  "score": 24,
  "score_breakdown": { "icp_fit": 10, "digital_gap": 8, ... },
  "evidence": { "no_booking": true, "ig_followers": 320, ... },
  "sources": ["google_maps", "instagram_public"],
  "researched_at": "2026-09-02T00:00:00Z",
  "confidence": "MEDIUM",
  "stage": "RESEARCHED",
  "assigned_to": "carlos"
}
```

---

## OUTREACH STANDARD — GUARDRAILS

```
PERMITIDO:
  → Mensaje personalizado basado en observación pública
  → Máximo 1 mensaje de primer contacto
  → 1 follow-up a los 5 días si no responden
  → Parar después de 2 intentos sin respuesta
  → Aprobar con Carlos antes de enviar

PROHIBIDO:
  → Mensajes masivos sin personalización
  → Más de 2 intentos por prospecto
  → Enviar a lista SERNAC No Molestar
  → Comprar bases de datos
  → Scraping que viola ToS
  → Enviar sin aprobación de Carlos
```

**Template de primer contacto (personalizar para cada prospecto):**
```
"Hola [nombre], vi [OBSERVACIÓN ESPECÍFICA sobre su negocio].
En Health Growth ayudamos a negocios como el tuyo a [RESULTADO RELEVANTE].
¿Tienes 15 minutos esta semana para conversar?
(No es una llamada de venta — es ver si tiene sentido trabajar juntos)"
```

---

## DISCOVERY BOOKING

Una vez que el prospecto acepta conversar:

```
Cal.com event type: "Discovery HG — 30 min"
Duration: 30 minutos
Fields requeridos:
  → Nombre del negocio
  → Industria/rubro
  → Número aproximado de clientes por semana
  → Principal problema que quiere resolver
  → Cómo nos conoció

Post-discovery:
  → CRM: stage → DISCOVERY_DONE
  → Si califica: preparar propuesta personalizada
  → Si no califica: cerrar como LOST con razón, mantener en nurturing
```

---

## SALES PIPELINE HG (10 etapas)

Mapeado a etapas existentes en Notion CRM:
```
senal_detectada    → IDENTIFIED (señal pública detectada)
prospecto          → RESEARCHED (scoring calculado)
prospecto_enriquecido → QUALIFIED (ICP + buying signal confirmados)
validado           → CONTACT_READY (outreach preparado y aprobado)
oportunidad        → CONTACTED (mensaje enviado)
contacto           → REPLIED (respondió positivamente)
reunion            → DISCOVERY_BOOKED / DISCOVERY_DONE
propuesta          → PROPOSAL / NEGOTIATION
cliente            → WON (firmó)
nurturing          → LOST - nurturing (no ahora, seguir en radar)
```

---

## OFERTA MODULAR

Packs alineados a problema del ICP (sin precios — pendiente canonicalización):

| Pack | Problema que resuelve | Módulos incluidos |
|------|----------------------|-------------------|
| Presencia Digital | "Mi web es pésima y no tengo redes activas" | Web + IG setup + GBP |
| Orden Comercial | "Pierdo clientes por no responder, no tengo CRM" | WhatsApp auto + CRM básico |
| Automatización | "Hago todo manual, olvido citas" | Booking + recordatorios + follow-up |
| Ecosistema Total | "Quiero el sistema completo funcionando" | Todo + acompañamiento mensual |

**Pricing:** PRICING_CANONICALIZATION_REQUIRED — ver `docs/comercial/PRECIOS_REALES_PENDIENTES_CARLOS.md`

---

## CONTENT ENGINE HG

**Frase central del sistema:**
"Instagram atrae → La página convierte → WhatsApp captura → CRM ordena → n8n ejecuta → Claude Code construye → Carlos decide y cierra."

**Pilares de contenido para @healthgrowthspa:**
```
1. Casos reales (40%): Patitas antes/después, resultados con números
2. Tips operativos (25%): "3 errores que hacen perder clientes"
3. Proceso transparente (20%): "Así instalamos WhatsApp automation en 48h"
4. Buying trigger (15%): "¿Cuántos clientes perdiste esta semana por no responder?"
```

---

## HG ACQUISITION GATE — CHECKLIST

```
LISTO PARA ACTIVAR:
[ ] Caso Patitas publicado con métricas reales (requiere First E2E completado)
[ ] healthgrowth.cl con social proof de Patitas
[ ] Prospect scoring system implementado (código en Python research engine)
[ ] Cal.com discovery event type configurado
[ ] Notion CRM pipeline mapeado a 10 etapas
[ ] Outreach templates aprobados por Carlos

BLOQUEADORES:
[ ] Patitas First E2E (el caso de éxito que hace creíble la oferta)
[ ] Precios canonicalizados (PRECIOS_REALES_PENDIENTES_CARLOS.md)
```
