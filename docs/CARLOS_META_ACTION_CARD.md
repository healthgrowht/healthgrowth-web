# CARLOS — TARJETA DE ACCIÓN META / WABA PATITAS
# Versión: 2.0 (corregida 2026-09-02)
# Tiempo estimado: 45-90 minutos si todo está listo

---

## CORRECCIÓN CRÍTICA vs. versión anterior

> ❌ ANTES (incorrecto): "Embedded Signup urgente — deadline Oct 15 te afecta"
> ✅ AHORA (correcto): Oct 15 solo afecta a Tech Providers que onboarding clientes vía Embedded Signup.
>    Para Patitas, Carlos registra DIRECTAMENTE desde Meta App Dashboard — sin Embedded Signup.

---

## QUÉ NECESITAS ANTES DE EMPEZAR

| Ítem | Estado |
|------|--------|
| Meta Business Suite activo (meta.com/business) | Verificar |
| Cuenta Facebook personal (para Meta Business) | Sí |
| Número de Alicia (******3036) completo | ⏳ Pedir a Alicia |
| Alicia disponible para recibir OTP por SMS/llamada | ⏳ Coordinar |
| ~1 hora sin interrupciones | — |

---

## RUTA DE ACCIÓN (PASO A PASO)

### PASO 1 — Crear Meta App

1. Ir a: https://developers.facebook.com/apps
2. Clic en **Crear app**
3. Tipo: **Business** (no Consumer, no Gaming)
4. App name: `Health Growth - Patitas Felices`
5. Contact email: luisvillanuevaandrades@gmail.com
6. Vincular tu Meta Business Account de HG SpA

### PASO 2 — Añadir producto WhatsApp

1. En tu app recién creada → **Añadir producto**
2. Seleccionar **WhatsApp** → Setup
3. En "Select a business portfolio" → seleccionar HG SpA
4. Clic en "Continue"

### PASO 3 — Conectar WABA de Patitas

1. En el panel de WhatsApp → **API Setup**
2. En la sección "Step 1: Add a phone number":
   - Clic **Add phone number**
   - Nombre del negocio: `Patitas Felices`
   - Categoría: `Pets`
   - Nombre del perfil: `Patitas Felices`
3. Ingresar el número de Alicia (formato +56 9 XXXX 3036)
4. Elegir verificación: **SMS** (más simple que llamada)
5. Alicia recibe OTP → ingresar aquí

### PASO 4 — Obtener credenciales

Después del OTP, anotar (del panel API Setup):

```
PATITAS_PHONE_NUMBER_ID  = (aparece como "Phone number ID")
WABA_ID                  = (aparece como "WhatsApp Business Account ID")
```

### PASO 5 — Crear System User y token permanente

Los tokens temporales del dashboard expiran en 24h. Para producción:

1. Meta Business Suite → **Settings** (engranaje) → **Users** → **System Users**
2. Clic **Add** → nombre: `carlos-os-patitas` → role: `Admin`
3. Clic en el system user → **Generate new token**
4. App: tu app de WhatsApp
5. Permisos seleccionar: `whatsapp_business_messaging`, `whatsapp_business_management`
6. Expiración: **Never**
7. Copiar el token — NO refresca, se muestra solo una vez

```
WHATSAPP_ACCESS_TOKEN = <token copiado>
```

### PASO 6 — Obtener META_APP_ID y META_APP_SECRET

1. En tu app → **App Settings** → **Basic**
2. App ID: visible al tope → `META_APP_ID`
3. App Secret: clic "Show" → `META_APP_SECRET`

### PASO 7 — Configurar webhook en Meta

1. En el panel WhatsApp → **Configuration** → **Webhook**
2. Callback URL: `https://api.healthgrowth.cl/webhook`
   - Si api.healthgrowth.cl no apunta aún → usar cloudflared:
     ```bash
     ssh a openclaw-bunker
     cloudflared tunnel run carlos-os  # o crear tunnel temporal
     # Usar la URL .trycloudflare.com como callback
     ```
3. Verify Token: crear uno seguro, ej: `PF_VERIFY_2026_09`
4. Clic **Verify and Save**
5. En "Webhook fields" → activar: `messages`, `message_deliveries`

### PASO 8 — Añadir al servidor

SSH a openclaw-bunker:

```bash
sudo nano /opt/carlos-os/.env.production
```

Añadir al final:

```
WHATSAPP_ACCESS_TOKEN=<token del paso 5>
PATITAS_PHONE_NUMBER_ID=<ID del paso 4>
WABA_ID=<ID del paso 4>
META_APP_ID=<ID del paso 6>
META_APP_SECRET=<secret del paso 6>
WHATSAPP_VERIFY_TOKEN=PF_VERIFY_2026_09
WEBHOOK_PUBLIC_URL=https://api.healthgrowth.cl/webhook
```

Reiniciar:
```bash
sudo systemctl restart carlos-os.service
sudo systemctl status carlos-os.service
```

Verificar:
```bash
curl http://localhost:3000/webhook/status | python3 -m json.tool
```

Esperado: `"estado": "OPERATIVO"`

---

## VALIDACIÓN POST-SETUP

```bash
# Desde tu PC (no el servidor):
curl https://api.healthgrowth.cl/webhook/status

# Esperado:
# "estado": "OPERATIVO"
# "configurado": true
```

Luego enviar un mensaje de WhatsApp al número de Alicia y verificar en logs:
```bash
sudo journalctl -u carlos-os.service -f --lines 50
```

---

## NOTA SOBRE META BUSINESS VERIFICATION

Para producción a escala (más de 1000 conversaciones/mes), Meta requiere
Business Verification de HG SpA. Para el First E2E con Alicia/Carlos es
opcional, pero iniciarlo ahora evita el cuello de botella más tarde:

1. Meta Business Suite → **Security Center**
2. Completar verificación de negocio (RUT, dirección, sitio web)
3. ETA: 1-5 días hábiles

---

## NOTA SOBRE COEXISTENCIA (WA Business App + Cloud API)

Meta soporta coexistencia oficial. Alicia puede seguir usando WhatsApp Business App
en su teléfono. El Cloud API recibe los mensajes entrantes pero NO interfiere con
la app. No hay restricción documentada para Chile.

**Precaución:** Una vez registrado, el número NO puede desregistrarse de la Cloud API
mientras esté activo en el sistema (Meta restricción). Coordinar con Alicia.

---

*Generado: 2026-09-02 | Versión: 2.0 (corrige Embedded Signup urgency)*
*Si algo falla en cualquier paso → reportar el error exacto a CTO*
