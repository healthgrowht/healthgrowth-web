# PATITAS FELICES — GO LIVE PLAN
# Primera implementación productiva del sistema Health Growth
# Versión: 1.0 | Fecha: 2026-09-02

---

## OBJETIVO

Llevar a Patitas Felices de implementación técnica parcial a **First E2E productivo**:
un cliente real reserva por WhatsApp, ROKITO responde, Cal.com agenda,
CRM registra, Alicia recibe notificación. Sin intervención manual.

---

## ESTADO ACTUAL (2026-09-02 — Actualizado post-Misión 6)

```
PATCH-001 aplicado         ✅ (APPLIED — verificado código fuente)
booking engine interno     ✅ (slot_engine + patitas_appointment_manager — 99 tests PASS)
ROKITO intent detection    ✅ (14 intents, multi-turn booking flow funcional)
Cal.com                    ➖ NO REQUERIDO para First E2E (engine interno lo reemplaza)
WEBHOOK_PUBLIC_URL         ✅ https://api.healthgrowth.cl (PRESENT_OK — Carlos ya configuró)
WHATSAPP_VERIFY_TOKEN      ✅ PRESENT_OK (Carlos ya generó)
E2E simulation harness     ✅ /opt/carlos-os/tests/simulate_e2e_webhook.js
WABA registrada            ❌ (Meta App no creada aún)
WHATSAPP_ACCESS_TOKEN      ❌ EMPTY (pendiente System User token)
PATITAS_PHONE_NUMBER_ID    ❌ EMPTY (pendiente registro teléfono en Meta)
META_APP_ID / WABA_ID      ❌ EMPTY (pendiente creación Meta App)
business_profile.json      ⚠️ (precios=null, horario=PLACEHOLDER pero tests PASS con esto)
Alicia phone completo      ❌ HUMAN_INPUT_REQUIRED (últimos 4: 3036)
```

### Correcciones críticas vs. versión anterior

> ❌ ANTES: "Cal.com requerido para First E2E"
> ✅ AHORA: Booking engine interno completamente funcional — 99 tests PASS. Cal.com = futuro.

> ❌ ANTES: "Embedded Signup urgente — deadline Oct 15 te afecta"
> ✅ AHORA: Oct 15 afecta solo a HG como Tech Provider. Patitas P0 = registro directo en Meta App Dashboard, sin Embedded Signup.

---

## FASES DE GO LIVE

### FASE 0 — Pre-Go-Live (PENDIENTE CARLOS + ALICIA)

**Duración:** 45-90 minutos (si Alicia disponible para OTP)

**Alicia — mínimo requerido (ver ALICIA_MINIMUM_CARD.md):**
```
[ ] Teléfono completo de WhatsApp (últimos 4: 3036)
[ ] Disponibilidad para recibir OTP por SMS/llamada (~5 min)
[ ] Confirmar horario aproximado (actual placeholder: Mon-Fri 9-17, Sat 9-12)
```

**Carlos — pasos exactos (ver CARLOS_META_ACTION_CARD.md v2.0):**
```
[ ] Crear Meta App en developers.facebook.com/apps
[ ] Añadir producto WhatsApp + conectar WABA de HG SpA
[ ] Registrar número de Alicia (con OTP que Alicia recibe)
[ ] Crear System User + token permanente (sin expiración)
[ ] Obtener: META_APP_SECRET, META_APP_ID, WABA_ID, PATITAS_PHONE_NUMBER_ID, WHATSAPP_ACCESS_TOKEN
[ ] Añadir los 5 valores al .env.production
[ ] sudo systemctl restart carlos-os.service
[ ] Correr: node /opt/carlos-os/tests/simulate_e2e_webhook.js → esperado 6 PASS
```

**NO requerido para First E2E (corrección vs. versión anterior):**
```
❌ NO necesita Embedded Signup (solo aplica a HG como Tech Provider)
❌ NO necesita Cal.com (booking engine interno funciona — 99 tests PASS)
❌ NO necesita Meta Business Verification (opcional para escala, no para sandbox)
❌ NO necesita precios reales (ROKITO maneja null prices gracefully)
❌ NO necesita confirmar coexistencia Chile (soportado por Meta, no restriction)
```

---

### FASE 1 — Credenciales Meta (1-7 días, depende de App Review)

**Bloqueador:** Meta App Review tarda 1-5 días hábiles.

```
[ ] Meta App de HG: Business Verification completado
[ ] App Review aprobado (whatsapp_business_messaging, whatsapp_business_management)
[ ] Embedded Signup v4: Alicia autentica con Facebook
[ ] WABA registrada
[ ] WABA_ID, PHONE_NUMBER_ID, WHATSAPP_ACCESS_TOKEN obtenidos
[ ] Añadir a .env.production en openclaw-bunker
[ ] Reiniciar carlos-os.service
[ ] getMissingCredentials() retorna [] → confirmar en logs
```

---

### FASE 2 — Cal.com Setup (1-3 días, paralelo a Fase 1)

```
[ ] Crear cuenta Cal.com (Carlos)
[ ] API Key generada
[ ] Schedule creado con horario REAL de Alicia
[ ] isDefault: true confirmado en schedule (bug conocido: slots vacíos si no)
[ ] Event types creados (1 por servicio/tamaño real de Alicia)
[ ] CALCOM_API_KEY, CALCOM_SCHEDULE_ID en .env
[ ] Test: GET /v2/slots retorna slots reales (no array vacío)
[ ] Test: POST /v2/bookings crea booking de prueba (data_mode: TEST)
[ ] Webhook Cal.com → carlos-os configurado
[ ] Cleanup: borrar bookings TEST de Cal.com
```

---

### FASE 3 — Test E2E en Sandbox (1 día)

**Usando Meta test account (sin usar número real de Alicia aún):**

```
[ ] Enviar mensaje de prueba al número test de Meta
[ ] Verificar: webhook llega a carlos-os
[ ] Verificar: ROKITO detecta intent de booking
[ ] Verificar: slots de Cal.com ofrecidos en respuesta
[ ] Verificar: booking creado en Cal.com
[ ] Verificar: CRM actualizado (stage: BOOKED)
[ ] Verificar: Alicia notificada en Telegram
[ ] Todos los pasos E2E con data_mode: TEST
[ ] Cleanup: borrar registros TEST
```

---

### FASE 4 — Go Live Productivo

**Solo después de FASE 3 PASS completo.**

```
[ ] Cambiar data_mode → REAL en .env.production
[ ] Primer mensaje real de cliente (Carlos prueba desde su WA personal)
[ ] Verificar booking real en Cal.com de Alicia
[ ] Verificar notificación real a Alicia en Telegram
[ ] Revisar CRM: primer lead REAL con source correcto
[ ] Alicia confirma que ve el booking en Cal.com
```

---

### FASE 5 — Post-Go-Live (48 horas después)

```
[ ] Revisar logs de carlos-os: errores? timeout? rate limits?
[ ] Revisar CRM: leads con todos los campos correctos
[ ] ROKITO: respuestas revisadas con Alicia (¿son útiles? ¿errores?)
[ ] Métricas semana 1: leads_new, bookings_new, conversion_rate
[ ] PATCH-002 deployment (reminder_runner.js) — si FASE 4 estable
[ ] HAQ-01 (Alicia account creation) — para acceso a dashboard
```

---

## LÍNEA DE TIEMPO ESTIMADA

```
HOY (2026-09-02):
  → Carlos inicia Meta App Review
  → Alicia questionnaire enviado por Carlos

DÍAS 1-5 (esperando Meta):
  → Cal.com setup (paralelo)
  → business_profile.json completado con datos reales
  → PATCH-002 preparado para deploy posterior

DÍAS 5-7 (post App Review):
  → WABA registrada
  → Credenciales en .env
  → Test E2E sandbox

DÍAS 7-10 (Go Live):
  → First E2E productivo
  → Primer cliente real atendido

DÍAS 10-14 (Post-Go-Live):
  → PATCH-002 + HAQ-01
  → Caso de éxito documentado
  → Acquisición orgánica activada (Instagram, Google Business)
```

---

## CRITERIOS DE ÉXITO (First E2E)

```
Un cliente real (no Carlos):
  ✓ Escribe "quiero bañar a mi perro" al número de Patitas
  ✓ ROKITO responde en < 60 segundos
  ✓ Booking creado en Cal.com con el servicio y hora correctos
  ✓ Cliente recibe confirmación por WhatsApp
  ✓ Alicia recibe notificación en Telegram con detalle del booking
  ✓ CRM registra el lead con source, stage: BOOKED, data_mode: REAL
```

---

## BLOCKERS ACTUALES (ordenados por urgencia)

| Blocker | Responsable | ETA |
|---------|-------------|-----|
| Alicia info completa (horario, precios, phone) | Carlos → Alicia | 1-2 días |
| Meta App Review + Business Verification | Carlos | 1-5 días hábiles |
| Embedded Signup v2 → v4 migration | Carlos | Urgente (deadline Oct-15-2026) |
| Chile coexistence eligibility | Carlos → Meta Support | 1-3 días |
| Cal.com account + schedule | Carlos | 1 día (paralelo) |
| PATCH-002 deploy | Carlos (autorizar) | Post First E2E |
