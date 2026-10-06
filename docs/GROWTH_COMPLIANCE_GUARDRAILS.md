# HEALTH GROWTH — COMPLIANCE GUARDRAILS
# Privacidad, marketing y comunicación digital — Chile 2026
# Versión: 1.0 | Fecha: 2026-09-02

---

## ⚠️ FECHA CRÍTICA: 01-DEC-2026

La **Ley 21.719** (nueva Ley de Protección de Datos Personales de Chile) entra
en vigor el **1 de diciembre de 2026**. Quedan ~3 meses para cumplimiento.

**Falta grave: multas hasta 20.000 UTM** (~1.400.000.000 CLP por violación).

---

## RESUMEN EJECUTIVO — LO QUE CAMBIA

| Área | Antes (Ley 19.628) | Después (Ley 21.719 desde 01-Dec-2026) |
|------|-------------------|----------------------------------------|
| Consentimiento | Tácito aceptable | Explícito, específico, libre, informado |
| Marketing WA | Zona gris | Opt-in requerido por propósito |
| Datos que te envían | Recolectables | Solo con propósito declarado |
| Derecho a borrado | Vago | ARCO+ con plazo 30 días hábiles |
| Auditoría | No exigida | Trazabilidad requerida |

---

## 1. SERNAC NO MOLESTAR

**¿Qué es?** Registro gratuito donde consumidores se inscriben para no recibir comunicaciones comerciales.

**¿Aplica a WhatsApp?** SÍ. Cubre llamadas, SMS, email, WhatsApp y otros canales de mensajería.

**Obligación:** Antes de enviar CUALQUIER campaña de marketing (no operacional):
```
1. Verificar que el número NO está registrado en SERNAC No Molestar
2. Documentar la verificación con timestamp
3. Si está registrado → NO enviar, registrar en suppression list
```

**URL verificación:** https://www.sernac.cl/portal/617/w3-propertyvalue-63007.html

**Excepciones (NO aplica No Molestar):**
- Confirmaciones de citas ya agendadas
- Recordatorios de citas (operacionales)
- Respuestas a mensajes iniciados por el cliente
- Comunicaciones de deuda/cobranza (no aplica a Patitas)

**Multa por violación:** hasta 300 UTM por persona afectada.

---

## 2. CONSENTIMIENTO PARA MARKETING

### Regla fundamental
```
El cliente me escribe ≠ me da permiso para enviarle marketing.
```

Un mensaje inbound abre una ventana de servicio (24h WhatsApp).
Esa ventana NO autoriza marketing futuro.

### Para mensajes de marketing se requiere:

**Consentimiento mínimo (redacción sugerida):**
```
"¿Nos autorizas a contactarte por este medio para enviarte 
información sobre nuestros servicios, ofertas y novedades?"

[ ] Sí, autorizo     [ ] No, prefiero no recibir
```

**Qué registrar:**
```json
{
  "contact_id": "CTX-...",
  "consent_marketing": true,
  "consent_at": "2026-09-02T14:30:00Z",
  "consent_channel": "whatsapp_inbound",
  "consent_text": "texto exacto mostrado",
  "ip_or_message_id": "wamid.xxx"
}
```

### Mensajes que NO necesitan opt-in adicional

| Mensaje | Requiere opt-in | Condición |
|---------|----------------|-----------|
| Confirmación de cita | NO | Solo si hay booking real |
| Recordatorio 24h antes | NO | Solo si hay booking real |
| Respuesta a consulta del cliente | NO | Dentro de 24h |
| Recordatorio de reactivación | SÍ | Marketing proactivo |
| Promoción / descuento | SÍ | Siempre |
| Oferta especial | SÍ | Siempre |

---

## 3. DERECHOS ARCO+ (Ley 21.719)

Cada contacto tiene derecho a:

| Derecho | Obligación del sistema |
|---------|----------------------|
| **Acceso** | Entregar todos los datos almacenados en 30 días hábiles |
| **Rectificación** | Corregir datos incorrectos |
| **Cancelación/Borrado** | Eliminar todos los datos en 30 días hábiles |
| **Oposición** | Dejar de procesar datos con ese propósito |
| **Portabilidad** | Entregar datos en formato portable |

**Implementación técnica requerida antes de Dec-2026:**

```
1. Endpoint o proceso para recibir solicitudes ARCO+
2. Script de borrado completo por contact_id (todos los datos: 
   CRM, conversaciones, bookings, eventos de attribution)
3. Log de solicitudes ARCO+ con timestamp y respuesta
4. Respuesta documentada en ≤ 30 días hábiles
```

---

## 4. MINIMIZACIÓN DE DATOS

Solo recopilar lo necesario para el propósito declarado.

**Patitas Felices — datos mínimos necesarios:**
```
OBLIGATORIO:
  phone_canonical   — identificador único, permite responder
  name              — trato personalizado
  service_interest  — para ofrecer slots correctos

ÚTIL:
  pet_name          — personalización
  pet_size          — duración del servicio
  
NO RECOPILAR sin propósito claro:
  email             — si no se usa para nada
  dirección         — no necesaria para peluquería canina
  fecha de nacimiento — innecesaria
  información financiera — pagos en local, no en sistema
```

---

## 5. RETENCIÓN DE DATOS

**Política recomendada:**

| Categoría | Retención |
|-----------|-----------|
| Datos de cliente activo (booking en 12 meses) | Indefinida mientras activo |
| Cliente inactivo >12 meses | Anonimizar o borrar |
| Lead no convertido (nunca llegó a booking) | 6 meses máximo |
| Logs de conversación | 6 meses operacionales, borrar PII después |
| Attribution events | 12 meses para análisis |
| Consent records | Duración del consentimiento + 2 años |

---

## 6. SEGURIDAD DE DATOS

**Requerimientos mínimos:**

```
✅ Credenciales en .env.production (nunca en código)
✅ SSH via IAP únicamente (no puertos abiertos)
✅ Backups GCS activos
✅ GCP snapshots diarios

❌ PENDIENTE:
  → n8n docker-compose.yml tiene basic auth password en plaintext
  → Necesita migración a Docker Secret o variable de entorno
  → Prioridad: antes de Dec-2026
```

**PII en logs:**
```
NUNCA loggear:
  → Números de teléfono completos
  → Nombres de clientes en plaintext en logs de error
  → Contenido de mensajes WhatsApp en logs
  → Tokens o credenciales

SÍ loggear (seguro):
  → contact_id (no contiene PII)
  → message_id de WhatsApp (wamid)
  → event_type, timestamp, outcome
```

---

## 7. SUPPRESSION LIST — IMPLEMENTACIÓN

Antes de cualquier envío de marketing:

```js
// Pseudocódigo — implementar en campaign_engine
async function canSendMarketing(phone) {
  const contact = await getContact(phone)
  
  // Regla 1: opt-out explícito
  if (contact.opt_out === true) return false
  
  // Regla 2: SERNAC No Molestar (verificar periódicamente, no en tiempo real)
  if (contact.sernac_registered === true) return false
  
  // Regla 3: Consentimiento activo requerido
  if (!contact.consent_marketing) return false
  
  // Regla 4: Dentro de ventana de servicio (24h) → se puede responder, no hacer marketing
  // La ventana de servicio no equivale a permiso de marketing
  
  return true
}
```

**Opt-out inmediato:**
Palabras que activan opt-out inmediato (ROKITO debe detectar):
```
"para", "stop", "cancelar suscripción", "no más mensajes",
"no me escribas más", "quítame de la lista", "baja"
```

Al detectar → `contact.opt_out = true`, `contact.opt_out_at = NOW` → stop TODAS las secuencias.

---

## 8. CHECKLIST COMPLIANCE ANTES DE DEC-2026

```
[ ] Política de privacidad publicada en healthgrowth.cl
[ ] Formulario web tiene checkbox de consentimiento
[ ] Consent registrado en CRM por contact_id
[ ] Script de borrado ARCO+ implementado y probado
[ ] Suppression list operativa (opt-out funciona)
[ ] Verificación SERNAC No Molestar en proceso de campaña
[ ] n8n plaintext password migrado a secret
[ ] Retención de datos documentada y ejecutable
[ ] Política interna: quién puede acceder a datos de clientes
[ ] Logs sin PII completo
```

---

## NOTAS LEGALES

Este documento es planificación técnica de producto.
No reemplaza asesoría legal profesional.
Para cumplimiento formal de Ley 21.719, consultar abogado especializado en datos.
