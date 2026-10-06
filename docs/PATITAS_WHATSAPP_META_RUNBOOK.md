# PATITAS FELICES — WHATSAPP / META RUNBOOK
# Fuente de verdad: integración WhatsApp Business API
# Versión: 1.0 | Fecha: 2026-09-02 | Basado en documentación oficial Meta 2026

---

## ESTADO ACTUAL

```
META_APP                     = UNKNOWN (no verificado si existe app HG en Meta)
META_BUSINESS_VERIFICATION   = UNKNOWN
META_APP_REVIEW              = UNKNOWN
WABA_REGISTERED              = NO
PHONE_NUMBER_ID              = MISSING
ACCESS_TOKEN                 = MISSING (WHATSAPP_ACCESS_TOKEN env var vacía)
WEBHOOK_ACTIVE               = NO (env vars vacías → sandbox mode)
EMBEDDED_SIGNUP_VERSION      = UNKNOWN (v2 deprecated Oct 15, 2026 → verificar)

PATCH_001                    = APPLIED ✅ (WhatsApp engine bug fixed 2026-09-02)
```

---

## ADVERTENCIA CRÍTICA: COEXISTENCIA

Meta soporta usar WhatsApp Business App + Cloud API en el **mismo número** simultáneamente (coexistence mode), PERO:

```
⚠️  ELEGIBILIDAD PARA CHILE NO CONFIRMADA EN DOCUMENTACIÓN OFICIAL

Si Chile NO es elegible para coexistence:
  → Alicia pierde acceso a WhatsApp Business App en su teléfono
  → Historial de chats PERDIDO e IRRECUPERABLE
  → El número deja de funcionar como WA normal

ANTES de tocar el número de Alicia:
  → Verificar eligibilidad de Chile para coexistence
  → Si no es elegible: evaluar número nuevo (opción segura)
```

**Limitaciones de coexistence (si está disponible):**
- Throughput: 20 mensajes/segundo máximo
- Sin mensajes desaparecidos, broadcast lists, live location, view-once
- WA Business app debe ser v2.24.17+

---

## TRACK DE ACCIONES — CARLOS DEBE HACER PRIMERO

### ← PASO 0 (URGENTE): Verificar Embedded Signup version

```
Embedded Signup v2 está DEPRECADO desde October 15, 2026.
Si HG usa Embedded Signup v2, DEBE migrar a v4 INMEDIATAMENTE.

Verificar en:
  URL: https://developers.facebook.com/apps/
  → Tu App → WhatsApp → Configuration
  → Embedded Signup → Version
```

### PASO 1: Configurar Meta App + Tech Provider

**Dónde:** https://developers.facebook.com/apps/

**Qué hacer:**
1. Crear o identificar la Meta App de Health Growth
2. Agregar producto "WhatsApp Business"
3. Completar **Business Verification de Health Growth SpA**:
   - Nombre legal de la empresa
   - Dirección física
   - Teléfono
   - Email empresarial
   - Sitio web (healthgrowth.cl)
   
4. Solicitar **App Review** para:
   - `whatsapp_business_messaging` (Advanced Access)
   - `whatsapp_business_management` (Advanced Access)

**Tiempo estimado:** 1-5 días hábiles para App Review.

**Mientras espera:** El test account de WhatsApp está disponible INMEDIATAMENTE.
Usar para probar el pipeline end-to-end.

**Límite inicial:** 10 negocios cliente por ventana de 7 días (suficiente para Patitas).
Sube a 200 después de Business Verification + App Review + Access Verification.

### PASO 2: Determinar elegibilidad Chile + decisión número

**Dónde verificar coexistencia Chile:**
```
URL: https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users/
Buscar: "selected countries" o mapa de elegibilidad
También: abrir un soporte en Meta Business Support con pregunta directa
```

**Resultado A — Chile ES elegible:**
- Proceder con número actual de Alicia (ending 3036)
- Alicia puede seguir usando WA Business App en su teléfono
- Chat history preservado
- OTP via SMS a su número durante onboarding

**Resultado B — Chile NO es elegible:**
```
RECOMENDACIÓN: Número nuevo (opción B)

Ventajas:
  → Alicia conserva su WhatsApp personal/actual intacto
  → Sin riesgo de perder historial
  → Separación clara personal/negocio
  → Sin presión de tiempo para la migración

Desventaja:
  → Clientes actuales no saben el nuevo número
  → Requiere comunicación de cambio

Opción práctica para Chile:
  → SIM virtual (ej: Bip! virtual) con número chileno
  → O un número nuevo de Entel/Claro prepago dedicado al negocio
```

### PASO 3: Registrar WABA (solo después del Paso 2)

**Path Embedded Signup (v4):**
```
Carlos en el frontend de HG o directamente en Meta Business Manager:
  1. Iniciar Embedded Signup flow
  2. Alicia autentica con su cuenta Facebook/Meta
  3. Alicia selecciona o crea su WABA
  4. Alicia ingresa el número (actual o nuevo según Paso 2)
  5. Alicia recibe OTP vía SMS — ELLA DEBE ESTAR DISPONIBLE
  6. Sistema verifica número
  7. WABA_ID y PHONE_NUMBER_ID asignados
```

**Qué Carlos debe registrar en `.env.production`:**
```
WABA_ID=                    # WhatsApp Business Account ID
PATITAS_PHONE_NUMBER_ID=    # phone_number_id del número registrado
WHATSAPP_ACCESS_TOKEN=      # System user token (permanente, no expira)
META_APP_ID=                # ID de la Meta App de HG
META_APP_SECRET=            # App secret (para verificar webhooks)
WHATSAPP_VERIFY_TOKEN=      # Token para verificar webhook (ya en .env)
```

**NUNCA mostrar estos valores. Solo confirmar: PRESENT / MISSING.**

### PASO 4: Configurar webhook Meta

**URL del webhook:** `https://api.healthgrowth.cl/api/webhooks/whatsapp`
(ya implementado en carlos-os — solo necesita credenciales)

```
Meta Business Manager → Tu App → WhatsApp → Configuration → Webhooks
  → Callback URL: https://api.healthgrowth.cl/api/webhooks/whatsapp
  → Verify Token: [valor de WHATSAPP_VERIFY_TOKEN en .env.production]
  → Fields: messages, message_deliveries, message_reads
```

### PASO 5: Test con cuenta de prueba

**Antes de usar el número real de Alicia, probar con Meta test account:**

```
Meta App Dashboard → WhatsApp → API Setup
  → Test phone number (asignado automáticamente)
  → Send a test message to your own WhatsApp

Probar E2E completo:
  1. Enviar "Hola, quiero información para agendar a mi perro"
     desde tu WA personal al número de test
  2. Verificar que carlos-os recibe el webhook
  3. Verificar que ROKITO procesa y responde
  4. Verificar que CRM crea el lead
  5. Verificar que alicia_notifier envía notificación
```

---

## CLICK-TO-WHATSAPP ADS

Una vez WABA activo, CTWA es el canal de acquisition más efectivo:

```
Conversión CTWA vs Landing Page:
  CTWA:          45-60% click → conversación
  Landing page:  2-5% click → conversación

72h FREE messaging window: todos los mensajes dentro de las 72h
del click son GRATIS (ni templates ni fees de conversación).
```

**Configuración básica (después de WABA):**
```
Meta Ads Manager → Crear campaña
  Objetivo: ENGAGEMENT (recomendado para Patitas, más económico)
  Ad type: Click to WhatsApp
  Destination: [número WABA de Patitas]
  
Configurar opening message template:
  "Hola! 🐾 Vi tu ad sobre Patitas Felices. 
   ¿Me puedes dar información sobre sus servicios?"

Audiencia sugerida Patitas (test inicial):
  Ubicación: Puerto Montt + 30km radio
  Edad: 22-50
  Intereses: mascotas, perros, peluquería canina
  Presupuesto prueba: $3,000-5,000 CLP/día (test 7 días)
```

---

## ESTADO CRONOLÓGICO DE OBJETIVOS

```
INMEDIATO (Carlos puede hacer HOY):
  ✅ Verificar Embedded Signup version (v2 vs v4)
  ✅ Crear/verificar Meta App de HG
  ✅ Iniciar Business Verification de HG SpA
  ✅ Solicitar App Review (permisos WA)
  ✅ Probar pipeline E2E con Meta test account (sin número real)

DESPUÉS DE APP REVIEW (1-5 días hábiles):
  ✅ Verificar coexistence eligibility Chile
  ✅ Decidir número (actual 3036 vs nuevo)
  ✅ Registrar WABA con número decidido
  ✅ Añadir credenciales a .env.production
  ✅ Reiniciar carlos-os.service
  ✅ Verificar getMissingCredentials() retorna []
  ✅ Primer mensaje real de prueba

DESPUÉS DE FIRST E2E:
  ✅ Configurar templates de marketing
  ✅ Configurar CTWA ads
  ✅ Activar follow-up sequences (PATCH-002)
```

---

## COMPLIANCE — MENSAJES SALIENTES

```
MENSAJES GRATIS (no necesitan opt-in extra):
  → Respuestas dentro de 24h de conversación iniciada por cliente
  → Confirmaciones de booking (operacionales)
  → Recordatorios de cita (operacionales si hubo booking)
  → Respuestas dentro de 72h de click en CTWA ad

MENSAJES QUE REQUIEREN OPT-IN EXPLÍCITO:
  → Cualquier template de marketing enviado proactivamente
  → Campañas de reactivación
  → Promociones, descuentos, novedades

SERNAC No Molestar (Chile):
  → Verificar registro ANTES de enviar cualquier campaña de marketing
  → No aplica a mensajes operacionales de citas ya agendadas
  → Ley 21.719 efectiva: 01-Dec-2026
```
