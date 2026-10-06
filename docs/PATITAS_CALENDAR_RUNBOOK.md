# PATITAS FELICES — CAL.COM CALENDAR RUNBOOK
# Fuente de verdad: configuración de agenda y booking
# Versión: 1.0 | Fecha: 2026-09-02 | Basado en Cal.com API v2

---

## ESTADO ACTUAL

```
CALCOM_ACCOUNT          = NOT_CONFIGURED (ninguna cuenta creada)
CALCOM_API_AUTH         = NOT_CONFIGURED
SCHEDULE_CREATED        = NO
EVENT_TYPES_CREATED     = NO
SLOTS_API_READY         = NO
BOOKING_TESTED          = NO
PRODUCTION_READY        = NO

BLOCKER_1: Alicia no ha confirmado su horario real
BLOCKER_2: Alicia no ha confirmado duración exacta de servicios
BLOCKER_3: Ninguna cuenta Cal.com creada
```

---

## PREREQUISITOS ANTES DE CONFIGURAR

### De Alicia (HUMAN_INPUT_REQUIRED)

| Campo | Estado | Para qué sirve |
|-------|--------|----------------|
| Horario real (días y horas) | ❌ NO CONFIRMADO | Crear schedule |
| Duración baño pequeño/mediano/grande | ⚠️ Aproximada | Event type duration |
| Duración corte | ⚠️ Aproximada | Event type duration |
| Buffer entre citas | ❌ NO DEFINIDO | Buffer settings |
| Máximo citas por día | ❌ NO DEFINIDO | Booking limits |
| Aviso mínimo (horas) | ❌ NO DEFINIDO | Minimum notice |
| Zona horaria | ✅ America/Santiago | Asumido Chile |

### Notas sobre el schedule actual en sistema

El `business_profile.json` tiene L-V 09:00-17:00 y Sáb 09:00-12:00.
**ESTO ES UN PLACEHOLDER, NO UN DATO CONFIRMADO POR ALICIA.**
No usar en producción hasta confirmación.

---

## CAL.COM — SETUP STEPS (Carlos ejecuta)

### STEP 1 — Crear cuenta Cal.com

```
URL:    https://cal.com/signup
Email:  Usar email operativo de Patitas o admin de HG
Plan:   Free (API disponible en free tier, 120 req/min)
```

Después de crear cuenta:
- `Settings → Security → API Keys → Create API key`
- Nombre: `patitas-backend-production`
- Expiry: No expiry (o 1 año)
- Guardar en `.env.production` como `CALCOM_API_KEY=...` (NEVER mostrar valor)

### STEP 2 — Crear schedule (DESPUÉS de confirmar horario con Alicia)

```bash
# SOLO EJECUTAR CON HORARIO REAL DE ALICIA
# Este es el payload que se enviará:

curl -X POST https://api.cal.com/v2/schedules \
  -H "Authorization: Bearer $CALCOM_API_KEY" \
  -H "Content-Type: application/json" \
  -H "cal-api-version: 2024-09-04" \
  -d '{
    "name": "Horario Patitas Felices",
    "timeZone": "America/Santiago",
    "isDefault": true,
    "availability": [
      {
        "days": ["PLACEHOLDER_DAYS_FROM_ALICIA"],
        "startTime": "PLACEHOLDER_FROM",
        "endTime": "PLACEHOLDER_TO"
      }
    ]
  }'
```

**RESULTADO ESPERADO:** Schedule ID (guardar como `CALCOM_SCHEDULE_ID`)

**NOTA CRÍTICA:** Si la `availability` no se setea correctamente, `GET /v2/slots` devuelve vacío.
Verificar que el schedule quede como `isDefault: true`.

### STEP 3 — Crear event types (uno por servicio)

Event types base para Patitas:

```bash
# BAÑO COMPLETO — pequeño (60 min + 15 buffer)
curl -X POST https://api.cal.com/v2/event-types \
  -H "Authorization: Bearer $CALCOM_API_KEY" \
  -H "Content-Type: application/json" \
  -H "cal-api-version: 2024-09-04" \
  -d '{
    "title": "Baño completo — perro pequeño",
    "slug": "bano-pequeno",
    "lengthInMinutes": 60,
    "beforeEventBuffer": 0,
    "afterEventBuffer": 15,
    "minimumBookingNotice": 120,
    "description": "Baño completo con shampoo para perros de raza pequeña."
  }'

# BAÑO COMPLETO — mediano (75 min + 15 buffer)
# slug: "bano-mediano", lengthInMinutes: 75

# BAÑO COMPLETO — grande (90 min + 15 buffer)
# slug: "bano-grande", lengthInMinutes: 90

# BAÑO + CORTE — pequeño (90 min + 15 buffer)
# slug: "bano-corte-pequeno", lengthInMinutes: 90

# BAÑO + CORTE — mediano (105 min + 15 buffer)
# slug: "bano-corte-mediano", lengthInMinutes: 105

# BAÑO + CORTE — grande (120 min + 15 buffer)
# slug: "bano-corte-grande", lengthInMinutes: 120

# SERVICIO COMPLETO (120 min + 15 buffer)
# slug: "completo", lengthInMinutes: 120

# LIMADO UÑAS (20 min)
# slug: "unas", lengthInMinutes: 20

# LIMPIEZA OÍDOS (15 min)
# slug: "oidos", lengthInMinutes: 15
```

**GUARDAR** todos los event type IDs en tabla:
```
CALCOM_EVENT_BANO_PEQUENO=...
CALCOM_EVENT_BANO_MEDIANO=...
CALCOM_EVENT_BANO_GRANDE=...
CALCOM_EVENT_BANO_CORTE_PEQUENO=...
CALCOM_EVENT_BANO_CORTE_MEDIANO=...
CALCOM_EVENT_BANO_CORTE_GRANDE=...
CALCOM_EVENT_COMPLETO=...
CALCOM_EVENT_UNAS=...
CALCOM_EVENT_OIDOS=...
```

### STEP 4 — Configurar webhook

```bash
curl -X POST https://api.cal.com/v2/webhooks \
  -H "Authorization: Bearer $CALCOM_API_KEY" \
  -H "Content-Type: application/json" \
  -H "cal-api-version: 2024-09-04" \
  -d '{
    "url": "https://api.healthgrowth.cl/api/webhooks/calcom",
    "triggers": [
      "BOOKING_CREATED",
      "BOOKING_RESCHEDULED",
      "BOOKING_CANCELLED"
    ],
    "active": true
  }'
```

Guardar el webhook secret en `.env.production` como `CALCOM_WEBHOOK_SECRET=...`

### STEP 5 — Test de slots

```bash
# Verificar que slots aparecen DESPUÉS de configurar schedule
curl "https://api.cal.com/v2/slots?\
  eventTypeId=EVENT_TYPE_ID\
  &startTime=2026-09-10T00:00:00Z\
  &endTime=2026-09-11T00:00:00Z\
  &timeZone=America/Santiago" \
  -H "Authorization: Bearer $CALCOM_API_KEY" \
  -H "cal-api-version: 2024-09-04"

# PASS: respuesta contiene slots con horarios
# FAIL: respuesta vacía — revisar que schedule está como isDefault
```

---

## INTEGRACIÓN EN CARLOS-OS

### Env vars requeridas (añadir a .env.production)

```
CALCOM_API_KEY=           # API key de Cal.com
CALCOM_API_BASE=https://api.cal.com/v2
CALCOM_API_VERSION=2024-09-04
CALCOM_SCHEDULE_ID=       # ID del schedule de Alicia
CALCOM_WEBHOOK_SECRET=    # Secret para verificar webhooks entrantes
# Event type IDs por servicio:
CALCOM_EVENT_BANO_PEQUENO=
CALCOM_EVENT_BANO_MEDIANO=
CALCOM_EVENT_BANO_GRANDE=
CALCOM_EVENT_BANO_CORTE_PEQUENO=
CALCOM_EVENT_BANO_CORTE_MEDIANO=
CALCOM_EVENT_BANO_CORTE_GRANDE=
CALCOM_EVENT_COMPLETO=
CALCOM_EVENT_UNAS=
CALCOM_EVENT_OIDOS=
```

### Mapping: intent → event type

ROKITO extrae de la conversación:
1. `service` — bano | corte | bano_corte | unas | oidos | completo
2. `size` — pequeño | mediano | grande

Mapping en `src/ecosystems/patitas/calcom_service_map.js`:
```js
const SERVICE_EVENT_MAP = {
  bano: { pequeño: process.env.CALCOM_EVENT_BANO_PEQUENO, ... },
  bano_corte: { pequeño: process.env.CALCOM_EVENT_BANO_CORTE_PEQUENO, ... },
  ...
}
```

### Flow de booking en ROKITO

```
1. ROKITO detecta intent BOOKING
2. Solicita: servicio, tamaño del perro, nombre, fecha preferida
3. GET /v2/slots → 3-4 opciones concretas
4. Customer selecciona
5. POST /v2/bookings con attendee info
6. Cal.com responde con booking_uid + confirmation
7. ROKITO envía confirmación por WA
8. alicia_notifier.js notifica a Alicia por Telegram
9. CRM_ENGINE actualiza lead.stage = BOOKED
```

---

## PREGUNTAS PARA ALICIA — SCHEDULE

Para crear el schedule real se necesita:

```
1. ¿Qué días atiende?
   [ ] Lunes  [ ] Martes  [ ] Miércoles  [ ] Jueves  [ ] Viernes
   [ ] Sábado  [ ] Domingo

2. Horario de apertura: _______ (ej: 09:00)

3. Horario de cierre / última cita: _______ (ej: 17:00)

4. ¿Tiene almuerzo o pausa fija?
   [ ] Sí: de _____ a _____   [ ] No

5. ¿Cuánto tiempo necesita entre citas?
   [ ] 10 min  [ ] 15 min  [ ] 20 min  [ ] Otro: _____

6. ¿Cuántas citas máximo por día?
   [ ] 3  [ ] 4  [ ] 5  [ ] Otro: _____

7. ¿Con cuántas horas de anticipación mínima debe agendarse?
   [ ] 2h  [ ] 4h  [ ] 24h  [ ] Otro: _____

8. ¿Atiende a domicilio o solo en local?
   [ ] Solo local   [ ] Solo domicilio   [ ] Ambos

9. Zona horaria confirmada: [ ] America/Santiago
```

---

## NOTAS TÉCNICAS

- Cal.com API v2 requiere header `cal-api-version: 2024-09-04`
- Rate limit: 120 req/min (free tier) — suficiente para Patitas
- Self-hosted opción disponible (AGPLv3) si se prefiere control total
- `GET /v2/slots` conocido bug: puede retornar vacío si schedule no es `isDefault: true`
- Booking `uid` es el identificador para reschedule/cancel
- No hay campo de precio nativo — usar `bookingFields` si se necesita mostrar precio en el formulario Cal.com
