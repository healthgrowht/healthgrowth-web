# CLIENT ONBOARDING TEMPLATE
# Health Growth — Proceso estándar para onboarding de nuevo cliente
# Versión: 1.0 | Fecha: 2026-09-02

---

## PROPÓSITO

Agregar Cliente #2 NO debe requerir arqueología de código.
Este template es el proceso repetible para onboarding de cada nuevo tenant.

Patitas Felices = validación en curso (Tenant #1).
Health Growth = segunda validación (Tenant #2).

---

## FASE 0 — PRE-ONBOARDING (antes de firmar)

```
[ ] Segmento y rubro identificados
[ ] ICP fit confirmado (score ≥ 15)
[ ] Discovery call completada
[ ] Propuesta enviada y aceptada
[ ] Pack definido (Presencia / Orden / Automatización / Ecosistema)
[ ] Precio acordado y documentado
[ ] Fecha de inicio confirmada
```

---

## FASE 1 — IDENTIDAD (Día 1-2)

**Owner: Carlos + Cliente**

```
[ ] Nombre legal de la empresa
[ ] Nombre comercial / display name
[ ] RUT empresa
[ ] Dirección física (si atiende en local)
[ ] Industria / rubro
[ ] Horario de atención tentativo
[ ] Zona horaria (confirmar: America/Santiago u otro)
[ ] Teléfono de contacto (formato E.164)
[ ] Email operativo
[ ] Instagram handle
[ ] Facebook page (si existe)
[ ] WhatsApp actual
[ ] Google Business URL (si existe)
[ ] Website (si existe)
[ ] Logo (archivo original, no social media screenshot)
```

**Output:** Carpeta del cliente creada, identidad documentada.

---

## FASE 2 — CONTACTOS Y USUARIOS (Día 2-3)

**Owner: Carlos**

```
[ ] Operador principal identificado (quien atiende clientes)
[ ] Email del operador confirmado
[ ] Crear cuenta en carlos-os:
    POST /api/users {role: OPERATOR_ROLE, email, password, must_change_password: true}
[ ] Operador inicia chat con bot Telegram (para notificaciones)
[ ] TELEGRAM_CHAT_ID del operador registrado en .env
[ ] Acceso a Lovable dashboard probado
```

---

## FASE 3 — PERFIL DE NEGOCIO (Día 2-4)

**Owner: Carlos (datos de cliente)**

```
[ ] Crear carpeta: data/tenants/{tenant_id}/
[ ] Crear business_profile.json desde template:
    cp data/tenants/_template/business_profile.json data/tenants/{tenant_id}/

Completar con datos reales:
[ ] business_id, display_name, tagline, locale, timezone
[ ] contact.phone_canonical (E.164)
[ ] contact.phone_display
[ ] contact.instagram / whatsapp / email
[ ] address.full, address.city, address.region, address.reference
[ ] business_hours (días y horas reales del cliente)
[ ] services[] (cada servicio con id, name, duration_min, price_clp, sizes)
[ ] policies (cancellation_hours, late_arrival_tolerance_min, etc.)
[ ] preparation_instructions

[ ] Validar: node -e "JSON.parse(require('fs').readFileSync('data/tenants/{tenant_id}/business_profile.json', 'utf8'))" → exit 0
```

---

## FASE 4 — CANAL WHATSAPP (Día 3-7, depende de Meta)

**Owner: Carlos + Cliente + Meta**

```
[ ] Verificar Meta App de HG tiene App Review aprobado
[ ] Verificar Business Verification de HG SpA completado
[ ] Confirmar número WhatsApp del cliente (¿usar actual o nuevo?)
[ ] Si número actual: verificar coexistence eligibility en su país
[ ] Si no es elegible: adquirir número nuevo
[ ] Embedded Signup v4: iniciar flow con cliente
[ ] Cliente autentica con Facebook
[ ] Cliente selecciona/crea WABA
[ ] Cliente ingresa número
[ ] Cliente recibe y confirma OTP
[ ] WABA_ID registrado
[ ] PHONE_NUMBER_ID registrado
[ ] ACCESS_TOKEN (system user) generado
[ ] Añadir a .env.production del tenant:
    WHATSAPP_ACCESS_TOKEN=...
    PATITAS_PHONE_NUMBER_ID=... (o equivalente por tenant)
    WABA_ID=...
    META_APP_ID=...
    META_APP_SECRET=...
[ ] Verificar getMissingCredentials() retorna []
[ ] Test mensaje de verificación recibido y procesado
```

---

## FASE 5 — SERVICIOS Y AGENDA (Día 4-8)

**Owner: Carlos + Cliente**

```
[ ] Horario real confirmado con el operador
[ ] Duración de cada servicio confirmada
[ ] Buffer entre citas definido
[ ] Máximo citas por día definido
[ ] Aviso mínimo definido
[ ] Horizonte máximo de booking definido
[ ] Crear cuenta Cal.com
[ ] Generar API key Cal.com
[ ] Crear schedule con horario real del cliente
[ ] Crear event types (uno por servicio/combinación)
[ ] Guardar IDs en .env:
    CALCOM_API_KEY=...
    CALCOM_SCHEDULE_ID=...
    CALCOM_EVENT_{SERVICE}=... (por cada servicio)
[ ] Test: GET /v2/slots retorna slots reales (no vacío)
[ ] Test: POST /v2/bookings crea booking de prueba
[ ] Configurar webhook Cal.com → carlos-os
```

---

## FASE 6 — AGENTE AI (Día 5-8)

**Owner: Carlos**

```
[ ] Definir industria → seleccionar base agent template
[ ] Crear system prompt personalizado para el cliente
[ ] Crear knowledge base con:
    - Descripción del negocio
    - Servicios y precios (desde business_profile.json)
    - Políticas (cancelación, preparación)
    - FAQ del negocio
    - Frases que deben escalar a humano
[ ] Añadir al ecosistema router en carlos-os
[ ] Test: enviar mensaje de prueba → intent detection correcto
[ ] Test: ROKITO_equivalent.getStatus() PASS
```

---

## FASE 7 — PRUEBA CON DATOS TEST (Día 7-10)

**Owner: Carlos**

```
[ ] Usar data_mode: TEST para todos los registros de prueba
[ ] E2E test completo:
    → Mensaje inbound
    → Intent detection
    → Recolección de info (servicio, tamaño, nombre)
    → Slots ofrecidos (reales de Cal.com)
    → Booking creado
    → Confirmación enviada
    → CRM actualizado (stage: BOOKED)
    → Notificación al operador (Telegram)
[ ] Todos los campos del CRM populados correctamente
[ ] data_mode: TEST confirmado en todos los registros
[ ] Cleanup: borrar registros TEST
```

---

## FASE 8 — PRIMERAS AUTOMACIONES (Día 8-12)

**Owner: Carlos**

```
[ ] Recordatorio 24h antes (después de PATCH-002 deployado)
[ ] Notificación al operador en nuevo booking
[ ] Escalation rules configuradas
[ ] Suppression list inicializada (vacía por defecto)
[ ] Consentimiento de marketing capturado en el flow
[ ] Opt-out detectado y almacenado correctamente
```

---

## FASE 9 — GO LIVE (Día 10-14)

**Owner: Carlos + Cliente**

```
[ ] data_mode cambiado a REAL para producción
[ ] Primer cliente real atendido
[ ] Alerta monitoreo activada (telegram a Carlos)
[ ] Revisión 48h post go-live
[ ] CRM revisado con Carlos y cliente
[ ] Primer reporte de métricas entregado
[ ] Ajustes basados en primeras conversaciones reales
```

---

## ESTRUCTURA DE ARCHIVOS POR TENANT

```
/opt/carlos-os/
├── data/
│   └── tenants/
│       ├── _template/                  ← plantilla base
│       │   └── business_profile.json
│       ├── patitas_felices/            ← Tenant #1
│       │   └── business_profile.json
│       └── {nuevo_cliente}/            ← Tenant #N
│           └── business_profile.json
├── src/
│   └── ecosystems/
│       ├── patitas/                    ← agentes Patitas
│       │   ├── rokito_agent.js
│       │   └── ...
│       └── {nuevo_cliente}/            ← agentes cliente N
│           └── {nombre}_agent.js
└── .env.production                     ← vars por tenant (prefijadas)
```

---

## ENV VAR NAMING CONVENTION POR TENANT

```
# Patitas Felices
PATITAS_PHONE_NUMBER_ID=...
PATITAS_WA_ME=...
PATITAS_BOOKING_LINK=...
ALICIA_TELEGRAM_CHAT_ID=...

# Cliente N (ejemplo: Barbería Don Pedro)
DONPEDRO_PHONE_NUMBER_ID=...
DONPEDRO_WA_ME=...
DONPEDRO_BOOKING_LINK=...
PEDRO_TELEGRAM_CHAT_ID=...
```

---

## TIEMPO TOTAL ESTIMADO

```
Fase 0-1 (pre + identidad):          1-2 días
Fase 2-3 (usuarios + perfil):        2-3 días
Fase 4 (WhatsApp + Meta):            3-7 días (bloqueado por Meta App Review)
Fase 5 (agenda + Cal.com):           2-3 días (bloqueado por datos cliente)
Fase 6 (AI agent):                   1-2 días
Fase 7 (tests):                      1-2 días
Fase 8 (automaciones):               1-2 días
Fase 9 (go live):                    1 día

TOTAL: 10-20 días calendario (la mayoría de la espera es Meta App Review)
```

---

## BLOCKERS RECURRENTES A PREPARAR

| Blocker | Solución |
|---------|---------|
| Meta App Review | Completar una vez para HG — luego sin bloqueo |
| Coexistence Chile | Verificar una vez — política aplica a todos los clientes |
| Datos del cliente incompletos | Usar este checklist en discovery call |
| Horario no confirmado | Nunca inventar — usar placeholder hasta confirmar |
| Alicia / operador no disponible | Dar tarea clara (Alicia action card) |
