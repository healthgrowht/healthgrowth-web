# HEALTH GROWTH — GROWTH ENGINE ARCHITECTURE
# Fuente de verdad arquitectural para la plataforma multi-tenant
# Versión: 1.0 | Fecha: 2026-09-02

---

## PRINCIPIO FUNDAMENTAL

Health Growth NO es una agencia de marketing.
Es una plataforma operativa que conecta:

```
ACQUISITION + CONVERSATION + CRM + BOOKING + FOLLOW-UP + ATTRIBUTION
```

Patitas Felices = Tenant #1 (B2C, peluquería canina)
Health Growth = Tenant #2 (B2B, servicios de modernización)

El código NO puede diferenciar entre tenants. La CONFIGURACIÓN sí.

---

## DISTINCIÓN ESENCIAL

| Motor | Qué hace | No confundir con |
|-------|----------|-----------------|
| CRM | Gestiona demanda existente | Acquisition (crea demanda) |
| ACQUISITION | Crea/encuentra demanda | Conversation (la atiende) |
| CONVERSATION | Atiende demanda en tiempo real | CRM (la registra) |
| BOOKING | Convierte intención en acción concreta | Follow-up (la protege) |
| FOLLOW-UP | Previene fuga post-booking | Attribution (la mide) |
| ATTRIBUTION | Mide qué funciona | Campaign (lo ejecuta) |

---

## ARQUITECTURA DE 13 MOTORES

### 1. ACQUISITION_ENGINE

**Propósito**: Crear flujo de contactos cualificados desde cero.

```
Canales → Lead Capture → Normalización → CRM_ENGINE
```

**Componentes:**
- Channel receivers (WhatsApp webhook, IG DM, Lead Form, Web form)
- UTM/source parser
- Lead deduplication
- Source attribution stamp

**Tenant config keys:**
- `channels.enabled[]` — lista de canales activos
- `channels.whatsapp.number` — número WABA
- `channels.ig.page_id` — ID página IG
- `lead_form.fields[]` — campos del formulario

**Current state (Patitas):** Manual, sin acquisition engine activo.
**Current state (HG):** n8n HealthGrowth-Pipeline-V1 recibe leads del formulario web.

---

### 2. CONVERSATION_ENGINE

**Propósito**: Normalizar mensajes de cualquier canal y enrutarlos al agente correcto.

```
Raw message → channel_event_pipeline → normalize → ecosystem router → AI agent
```

**Componentes actuales:**
- `src/channels/channel_event_pipeline.js` — normalizador multi-canal
- `src/ecosystems/patitas/rokito_agent.js` — agente Patitas
- `src/whatsapp/whatsapp_engine.js` — motor WA con sandbox

**Reglas del motor:**
- IA donde hay lenguaje natural
- Reglas deterministas donde hay precios, slots, permisos, opt-out
- Siempre respuesta (aunque sea "no entiendo")
- Siempre escalation path cuando AI falla

**Tenant config keys:**
- `ai_agent.system_prompt` — prompt del agente
- `ai_agent.model` — claude-haiku-4-5 por defecto
- `escalation.trigger_phrases[]` — frases que fuerzan escalación
- `escalation.notify_via` — telegram / email / none

---

### 3. CONTACT_ENGINE

**Propósito**: Identidad única del contacto, deduplicación, enriquecimiento básico.

**Contact model (canónico):**
```json
{
  "contact_id": "CTX-{tenant}-{uuid}",
  "tenant_id": "patitas_felices",
  "created_at": "ISO8601",
  "channels": {
    "whatsapp": "+56912345678",
    "instagram": "@handle",
    "email": null
  },
  "name": "María González",
  "name_source": "whatsapp_profile | self_reported | form",
  "first_contact_at": "ISO8601",
  "last_contact_at": "ISO8601",
  "source": "whatsapp_inbound | ig_dm | lead_form | referral | ad",
  "source_campaign": null,
  "data_mode": "REAL | TEST | DEMO",
  "opt_out": false,
  "opt_out_at": null,
  "opt_out_channel": null,
  "tags": []
}
```

**Pet model (Patitas-specific, dentro de industria_data):**
```json
{
  "pets": [
    {
      "pet_id": "PET-{uuid}",
      "name": "Firulais",
      "species": "dog",
      "breed": "mestizo",
      "size": "mediano",
      "notes": "Ansioso con extraños"
    }
  ]
}
```

**Deduplication rules:**
1. WhatsApp number = primary key
2. Same IG + same name = probable match (flag, not auto-merge)
3. Same email = probable match

---

### 4. CRM_ENGINE

**Propósito**: Registro de leads con lifecycle, eventos auditables.

**Lead model (canónico):**
```json
{
  "lead_id": "LEAD-{tenant}-{uuid}",
  "tenant_id": "patitas_felices",
  "contact_id": "CTX-...",
  "created_at": "ISO8601",
  "source": "whatsapp_inbound | ig_dm | lead_form | ad | referral",
  "source_campaign": null,
  "source_utm": {},
  "stage": "NEW",
  "stage_changed_at": "ISO8601",
  "data_mode": "REAL | TEST | DEMO",
  "assigned_to": null,
  "industry_data": {
    "service_interest": "bano_corte",
    "pet_id": "PET-...",
    "booking_id": null
  },
  "events": [],
  "notes": []
}
```

**Lifecycle stages (Patitas B2C):**
```
NEW → ENGAGED → QUALIFIED → BOOKING_PENDING → BOOKED → COMPLETED → LOST | REACTIVATION
```

**Lifecycle stages (HG B2B):**
```
IDENTIFIED → RESEARCHED → QUALIFIED → CONTACT_READY → CONTACTED →
REPLIED → DISCOVERY_BOOKED → DISCOVERY_DONE → PROPOSAL → NEGOTIATION →
WON | LOST
```

**Stage transition rules:**
- `NEW → ENGAGED`: first AI response sent
- `ENGAGED → QUALIFIED`: service intent + pet info collected (Patitas)
- `QUALIFIED → BOOKING_PENDING`: slot offered
- `BOOKING_PENDING → BOOKED`: booking confirmed in Cal.com
- `BOOKED → COMPLETED`: service date passed + no cancellation
- Any → `LOST`: customer unresponsive (72h), explicit opt-out, explicit no

---

### 5. LEAD_SCORING_ENGINE

**Propósito**: Priorizar atención humana. Determinístico primero, AI-assisted después.

**Score components (Patitas):**
```
RECENCY_SCORE:      last contact < 2h   = 10 | < 24h = 7 | < 72h = 4 | older = 0
INTENT_SCORE:       booking_intent      = 10 | info_only = 3
QUALIFICATION:      has service + size  = 10 | partial = 5 | none = 0
CHANNEL_SCORE:      whatsapp            = 10 | ig = 7 | form = 5
```

**Score components (HG B2B):**
```
ICP_FIT:            size + industry + location
NEED_SIGNAL:        explicit pain point mentioned
DIGITAL_GAP:        no booking system, manual WA, no CRM
BUYING_SIGNAL:      "cuánto cuesta", "podemos hablar"
CONTACTABILITY:     phone reachable, IG DMs open
```

---

### 6. BOOKING_ENGINE

**Propósito**: Ofrecer slots reales, crear booking una sola vez, confirmar.

```
CONVERSATION_ENGINE extracts intent
  → BOOKING_ENGINE.getAvailableSlots(service, size, date_hint)
    → Cal.com API v2 /slots
      → return top 3-4 options
        → customer selects
          → BOOKING_ENGINE.createBooking(...)
            → Cal.com API v2 /bookings
              → confirmation to customer + Alicia
                → CRM_ENGINE update (stage: BOOKED)
```

**Idempotency**: Each conversation_id maps to at most one pending booking.
Check for existing pending booking before creating new one.

**Cal.com integration points:**
- `GET /v2/slots` — available slots for event type
- `POST /v2/bookings` — create booking
- `PATCH /v2/bookings/{uid}/reschedule` — reschedule
- `DELETE /v2/bookings/{uid}/cancel` — cancel
- Webhook: `BOOKING_CREATED`, `BOOKING_RESCHEDULED`, `BOOKING_CANCELLED`

**Current state**: `slot_engine.js` generates synthetic slots. Cal.com NOT integrated yet.
**Blocker**: Alicia schedule not confirmed. Cal.com account not configured.

---

### 7. FOLLOWUP_ENGINE

**Propósito**: Prevenir fuga entre booking y servicio. Reactivar clientes inactivos.

**Sequences (Patitas):**
```
booking_created     → T+0: confirmation to customer
                    → T-24h: reminder ("Mañana a las 10:00 tu cita")
                    → T-1h: reminder (if opted in)
                    → T+24h post-service: check-in + photo request
                    → T+30d: reactivation if no new contact

no_response         → T+24h: gentle follow-up (once)
                    → T+48h: close lead as LOST (no spam)
```

**Rules:**
- Stop when customer opts out
- Stop when booking state changes (booked → completed → reactivation)
- Operational messages (booking confirmation) differ from marketing
- Max 1 follow-up per trigger type per lead

**Current state**: `reminder_scheduler.js` exists (PATCH-002 not deployed). Sequences not implemented.

---

### 8. CAMPAIGN_ENGINE

**Propósito**: Outbound marketing con guardarrailes. Nunca spam.

**Rules:**
- Only opted-in contacts
- Only approved template messages (WhatsApp)
- Volume limits per day
- Human approval required for first campaign
- Suppression list checked before every send

**Current state**: NOT BUILT. Design only.

---

### 9. ATTRIBUTION_ENGINE

**Propósito**: Trazar cada booking a su fuente original.

**Attribution event contract:**
```json
{
  "event_id": "EVT-{uuid}",
  "timestamp": "ISO8601",
  "tenant_id": "patitas_felices",
  "entity_type": "lead | contact | booking",
  "entity_id": "LEAD-...",
  "event_name": "booking_created",
  "source": "whatsapp_inbound | ig_dm | meta_ad | referral",
  "campaign": null,
  "channel": "whatsapp",
  "utm_source": null,
  "utm_medium": null,
  "utm_campaign": null,
  "data_mode": "REAL"
}
```

**Funnel we need to measure:**
- Source → Lead → Qualified → Booked → Completed
- Cost per qualified lead (when ads active)
- Cost per booking

---

### 10. AUTOMATION_ENGINE

**Propósito**: Orquestar workflows con estándares. No spaghetti.

**Automation standard:**
```
NAME: [TENANT]-[PURPOSE]-[VERSION]
TENANT: patitas_felices
PURPOSE: booking_reminder_24h
TRIGGER: cron | event | webhook
INPUT: { lead_id, booking_id, customer_phone }
PRECONDITIONS: booking.status == "confirmed" AND 24h before booking
ACTIONS: send_wa_template("reminder_24h", customer_phone)
OUTPUT: { sent: true, message_id }
IDEMPOTENCY_KEY: booking_id + "24h"
RETRY: 2x with 5min backoff
TIMEOUT: 30s
FAILURE_PATH: log + telegram_notify_carlos
HUMAN_ESCALATION: after 3 failures
LOGGING: execution_id + all inputs (no PII values)
METRIC: "reminder_sent" count
```

---

### 11. TENANT_CONFIG_ENGINE

**Propósito**: Separación completa de configuración por tenant. Nunca hardcode.

**Config hierarchy (priority high → low):**
```
CREDENTIALS          (env vars, never in config files)
HUMAN_OVERRIDE       (runtime toggle, e.g. "closed today")
COMPANY_CONFIG       (business_profile.json)
INDUSTRY_TEMPLATE    (templates/industries/pet_grooming.json)
CORE_DEFAULTS        (platform defaults)
```

**Tenant isolation rules:**
- Every CRM record has `tenant_id`
- Every automation has `tenant_id`
- Every CRM query is scoped by `tenant_id`
- Patitas data NEVER touches HG CRM and vice versa
- `data_mode: REAL | TEST | DEMO` always explicit

---

### 12. AI_AGENT_ENGINE

**Propósito**: Claude integration con contratos estandarizados.

**Agent contract:**
```json
{
  "agent_id": "rokito_v1",
  "tenant_id": "patitas_felices",
  "model": "claude-haiku-4-5-20251001",
  "max_tokens": 500,
  "system_prompt_key": "patitas/rokito_system_prompt.md",
  "knowledge_base_key": "patitas/rokito_knowledge_base.md",
  "allowed_intents": ["INFO", "BOOKING", "PRICE", "RESCHEDULE", "HUMAN_HANDOFF"],
  "forbidden": ["veterinary_advice", "invent_prices", "invent_slots"]
}
```

**AI use cases (YES):**
- Intent classification from natural language
- Missing field extraction (name, service, size, date hint)
- Tone-appropriate replies
- FAQ selection from verified knowledge base
- Prospect research enrichment (HG)

**AI use cases (NO — use deterministic rules):**
- Prices (always from business_profile.json)
- Available slots (always from Cal.com API)
- Opt-out status (always from suppression list)
- Booking uniqueness check
- Permission validation

---

### 13. ANALYTICS_ENGINE

**Propósito**: Dashboards operativos útiles, no vanity.

**Patitas KPIs:**
```
inquiries_total, inquiries_qualified, bookings_created, bookings_completed
inquiry_to_booking_rate, response_time_p50, cancellation_rate
source_breakdown{}, channel_breakdown{}, week_over_week_delta
```

**HG KPIs:**
```
prospects_researched, qualified_prospects, discovery_bookings
show_rate, proposals_sent, wins, CAC{source}
```

---

## TENANT ONBOARDING FLOW

```
Company identity → Industry template selection → Business profile → 
Services → Schedule → Users → Channels → CRM → Automations → 
TEST data run → E2E validation → Go live
```

Adding Client #2 must NOT require cloning codebase.
It requires: a new tenant folder + business_profile.json + credentials.

---

## CURRENT ARCHITECTURE GAP ANALYSIS

| Engine | Status | Gap |
|--------|--------|-----|
| ACQUISITION | ❌ Not built | Channels not wired to lead capture |
| CONVERSATION | ✅ Partial | Works for WA; IG via n8n separate path |
| CONTACT | ⚠️ Partial | No deduplication, no pet model normalization |
| CRM | ⚠️ Partial | No lifecycle stages, no event log |
| LEAD_SCORING | ❌ Not built | No scoring |
| BOOKING | ⚠️ Stub | slot_engine.js synthetic; Cal.com not integrated |
| FOLLOWUP | ⚠️ Partial | scheduler exists; runner not deployed (PATCH-002) |
| CAMPAIGN | ❌ Not built | By design — after First E2E |
| ATTRIBUTION | ❌ Not built | No source stamping on leads |
| AUTOMATION | ⚠️ Partial | n8n workflows exist; no standard template |
| ANALYTICS | ❌ Not built | No aggregation or dashboard |
| TENANT_CONFIG | ✅ Partial | business_profile.json exists; no hierarchy |
| AI_AGENT | ✅ Working | ROKITO operational; no formal contract |

---

## FIRST E2E CRITICAL PATH

Only these engines are required for First E2E:

```
CONVERSATION_ENGINE (exists) 
  + CONTACT_ENGINE (partial — acceptable)
  + CRM_ENGINE (partial — acceptable)
  + BOOKING_ENGINE ← BLOCKED: needs Cal.com + Alicia schedule
  + FOLLOWUP_ENGINE ← BLOCKED: PATCH-002 not deployed
```

Minimum viable: CONVERSATION + CONTACT + CRM (already works in sandbox).
First real E2E additionally needs: WABA credentials + Cal.com configured.

---

## NEXT STEPS BY PRIORITY

```
P0 — External blockers (human actions required):
  1. Alicia: confirm phone, schedule, services, prices
  2. Carlos: WABA registration at Meta Business Manager
  3. Cal.com: create account, configure schedule + event types

P1 — Code ready to build (no external dependency):
  4. Cal.com API integration in BOOKING_ENGINE
  5. Contact model normalization (add pet model)
  6. Lead lifecycle stages (add to CRM schema)
  7. Attribution source stamp on all new leads

P2 — After First E2E:
  8. FOLLOWUP_ENGINE sequences (PATCH-002 + sequences)
  9. ACQUISITION_ENGINE (Meta ads → lead → CRM)
  10. ANALYTICS_ENGINE (basic dashboard)
```
