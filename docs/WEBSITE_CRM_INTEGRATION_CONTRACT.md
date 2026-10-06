# WEBSITE ↔ CRM INTEGRATION CONTRACT
# healthgrowth.cl → carlos-os backend
# Versión: 1.0 | Fecha: 2026-09-02

---

## PROPÓSITO

Este documento es el contrato entre la web pública (healthgrowth.cl) y el
backend carlos-os. Define el schema exacto del payload, el endpoint, los
campos requeridos y opcionales, y el comportamiento esperado.

---

## ENDPOINT

```
URL:    https://api.healthgrowth.cl/api/capture
Method: POST
Content-Type: application/json
Auth:   ninguna (endpoint público — fuente diferencia leads)
```

**Implementado en:** `/opt/carlos-os/scripts/dashboard_server.js` (confirmado vía SSH 2026-09-02)

---

## PAYLOAD SCHEMA

```json
{
  // ── IDENTIDAD DEL LEAD ──────────────────────────────────────────
  "nombre":    "string | required | nombre y apellido del solicitante",
  "negocio":   "string | required | nombre del negocio",
  "email":     "string | required | formato email válido",
  "telefono":  "string | required | número WA, formato libre (+56 9...)",

  // ── CONTEXTO DEL NEGOCIO ────────────────────────────────────────
  "ciudad":    "string | required | ciudad o comuna",
  "rubro":     "string | required | enum: diagnostico | impulso | asistente | automatizacion | ecosistema | acompanamiento | otro",
  "necesidad": "string | required | descripción libre del desafío",

  // ── ATTRIBUTION ─────────────────────────────────────────────────
  "source":    "string | required | siempre 'web-healthgrowth.cl'",
  "timestamp": "ISO 8601 | required | ej: '2026-09-02T14:30:00.000Z'",
  "utmSource": "string | required | utm_source de la URL, default 'directo'",

  // ── COMPLIANCE ──────────────────────────────────────────────────
  "consent_privacy": "boolean | required | true = acepta política de privacidad"
}
```

### Valores enum para `rubro`

| Valor | Label en UI |
|-------|------------|
| `diagnostico` | Diagnóstico Express (gratuito) |
| `impulso` | Pack Impulso — Presencia digital |
| `asistente` | Asistente IA Esencial |
| `automatizacion` | Pack Automatización — CRM |
| `ecosistema` | Ecosistema Completo |
| `acompanamiento` | Acompañamiento Mensual |
| `otro` | No sé todavía — quiero orientación |

---

## COMPORTAMIENTO ESPERADO DEL BACKEND

```
Request recibida:
  1. Validar campos requeridos → 400 si faltan
  2. Crear registro en CRM (Notion o internal DB)
  3. Asignar stage inicial: 'senal_detectada' o 'prospecto'
  4. Notificar a Carlos (Telegram o email)
  5. Responder 200 OK (o 201 Created)

En caso de error:
  → Retornar 500 con error legible
  → Web detecta res.ok === false y muestra "Continuando por WhatsApp"
  → Lead nunca se pierde: WA abre en 1.5s independientemente

data_mode: REAL (producción) | TEST (pruebas manuales)
  → El backend distingue por campo opcional 'data_mode' si se añade
```

---

## COMPORTAMIENTO DEL FRONTEND

```
1. Usuario completa Step 1 (nombre, empresa, email, WA) → Continuar
2. Usuario completa Step 2 (ciudad, rubro, desafío, consent_privacy)
3. Submit → setStatus('loading')
4. POST /api/capture
   → ok = true:  setSubmitOk(true) → "¡Datos Recibidos!"
   → ok = false: setSubmitOk(false) → "Continuando por WhatsApp"
5. setStatus('success') → renderizar pantalla de éxito (siempre)
6. setTimeout(openWhatsApp, 1500) → WA abre siempre
```

**Garantía:** El lead nunca se pierde. Si el backend falla, el WA abre
con mensaje prefillado y el agente humano puede capturar la info.

---

## CAMPOS ADICIONALES (futuro)

```json
{
  "consent_marketing": "boolean | opcional | true = acepta comunicaciones de marketing",
  "data_mode":         "string | opcional | 'TEST' para no contaminar CRM",
  "pack_selected":     "string | opcional | pack pre-seleccionado desde sessionStorage"
}
```

---

## VERIFICACIÓN DE COMPLIANCE

- `consent_privacy: true` se envía SIEMPRE cuando el usuario llega a submit
  (el checkbox es required — imposible llegar sin marcarlo)
- El timestamp registra cuándo fue el consentimiento
- Para ARCO+ (Ley 21.719): el backend debe poder filtrar por email/phone
  y retornar/borrar todos los datos asociados en ≤30 días hábiles

---

## TESTING MANUAL

```bash
# Test directo al endpoint (desde máquina de desarrollo):
curl -X POST https://api.healthgrowth.cl/api/capture \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Test Lead",
    "negocio": "Test Empresa",
    "email": "test@test.com",
    "telefono": "+56 9 0000 0000",
    "ciudad": "Santiago",
    "rubro": "diagnostico",
    "necesidad": "Test de integración",
    "source": "web-healthgrowth.cl",
    "timestamp": "2026-09-02T00:00:00.000Z",
    "utmSource": "directo",
    "consent_privacy": true,
    "data_mode": "TEST"
  }'

# Esperado: 200 OK o 201 Created
# Verificar: registro creado en CRM con data_mode=TEST
# Limpiar: borrar registro TEST del CRM
```
