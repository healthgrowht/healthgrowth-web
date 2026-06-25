# N8N — Configuración de Flujo de Leads
**Última actualización:** 2026-06-25
**Estado:** Webhook activo. Falta configurar destinos (Sheets / Notion).

---

## 1. URL del Webhook (ya configurada en el código)

```
POST https://n8n.healthgrowth.cl/webhook/a0b41fdd-697f-4026-9c95-51a329b2cd00/webhook-hg/hg-captacion
```

No tocar esta URL. Está hardcoded en `app/constants.ts` → `integrations.diagnosticWebhook`.

---

## 2. Payload que llega al webhook

Cada lead enviado desde el formulario web llega con este JSON:

```json
{
  "fullName":   "Luis Villanueva",
  "company":    "Patitas Felices",
  "email":      "luis@ejemplo.cl",
  "commune":    "Maipú",
  "service":    "automatizacion",
  "whatsapp":   "+56 9 1234 5678",
  "challenge":  "No tengo tiempo para responder clientes.",
  "source":     "web-healthgrowth.cl",
  "timestamp":  "2026-06-25T14:30:00.000Z",
  "utmSource":  "instagram"
}
```

### Valores posibles de `service`
| Valor recibido | Descripción |
|---|---|
| `presencia` | Presencia Digital |
| `redes` | Redes Sociales |
| `salud` | Línea Salud |
| `automatizacion` | Organización Operativa |
| `personalizado` | Sistema Integral |

---

## 3. Flujo recomendado en n8n

```
[Webhook Trigger]
       ↓
[Set Node — enriquecer campos]
       ↓
    ┌──┴──┐
    ↓     ↓
[Sheets] [Notion]
    ↓     ↓
    └──┬──┘
       ↓
[Gmail — alerta a Carlos]
```

---

## 4. Nodo: Google Sheets

### Paso a paso
1. Agregar nodo **Google Sheets** → operación **Append Row**
2. Conectar credencial OAuth2 de Google (con cuenta `agenda.salud.digital@gmail.com`)
3. Seleccionar hoja: `HealthGrowth — Leads`
4. Crear la hoja con estas columnas en el orden exacto:

| Columna A | B | C | D | E | F | G | H | I | J | K |
|---|---|---|---|---|---|---|---|---|---|---|
| Timestamp | Nombre | Empresa | Email | WhatsApp | Comuna | Servicio | Desafío | Fuente | UTM | Estado |

5. Mapear campos del payload:

| Columna Sheet | Campo n8n |
|---|---|
| Timestamp | `{{$json.timestamp}}` |
| Nombre | `{{$json.fullName}}` |
| Empresa | `{{$json.company}}` |
| Email | `{{$json.email}}` |
| WhatsApp | `{{$json.whatsapp}}` |
| Comuna | `{{$json.commune}}` |
| Servicio | `{{$json.service}}` |
| Desafío | `{{$json.challenge}}` |
| Fuente | `{{$json.source}}` |
| UTM | `{{$json.utmSource}}` |
| Estado | `prospecto` ← valor fijo |

---

## 5. Nodo: Notion

### Paso a paso
1. Agregar nodo **Notion** → operación **Create Page**
2. Conectar credencial API Notion (Integration Token)
3. Database ID: el ID de tu base "Clientes/CRM" en Notion
4. Mapear propiedades:

| Propiedad Notion | Tipo | Valor |
|---|---|---|
| nombre (Title) | title | `{{$json.fullName}} — {{$json.company}}` |
| email | email | `{{$json.email}}` |
| whatsapp | phone_number | `{{$json.whatsapp}}` |
| comuna | rich_text | `{{$json.commune}}` |
| servicio_interes | select | `{{$json.service}}` |
| origen | select | `formulario_web` |
| estado | select | `prospecto` |
| ecosistema | select | `health-growth` |
| ultima_interaccion | date | `{{$json.timestamp}}` |
| utm_source | rich_text | `{{$json.utmSource}}` |

> **Limitación conocida**: el campo `challenge` (rich_text largo) y `notas` no se pueden escribir fácilmente desde n8n v2. Registrarlos manualmente en Notion tras recibir la alerta.

---

## 6. Nodo: Gmail — Alerta a Carlos

1. Agregar nodo **Gmail** → operación **Send Email**
2. Credencial: cuenta `agenda.salud.digital@gmail.com`
3. Configuración:

```
Para:      agenda.salud.digital@gmail.com
Asunto:    🚀 Nuevo Lead — {{$json.fullName}} ({{$json.company}})
Cuerpo:
───────────────────────────────────────
NUEVO LEAD CAPTADO — healthgrowth.cl
───────────────────────────────────────
Nombre:    {{$json.fullName}}
Empresa:   {{$json.company}}
WhatsApp:  {{$json.whatsapp}}
Email:     {{$json.email}}
Comuna:    {{$json.commune}}
Servicio:  {{$json.service}}
Fuente:    {{$json.source}} / {{$json.utmSource}}
Desafío:
{{$json.challenge}}
───────────────────────────────────────
Hora: {{$json.timestamp}}
```

---

## 7. Prueba del flujo completo

### Desde el formulario
1. Abrir `http://localhost:3000` (o el sitio en producción)
2. Ir a sección `#diagnostico`
3. Llenar todos los campos con datos de prueba
4. Enviar → verificar:
   - [ ] Estado cambia a éxito en la web
   - [ ] WhatsApp abre automáticamente
   - [ ] Fila aparece en Google Sheets
   - [ ] Página creada en Notion
   - [ ] Email llega a `agenda.salud.digital@gmail.com`

### Con curl (para probar n8n directamente)
```bash
curl -X POST https://n8n.healthgrowth.cl/webhook/a0b41fdd-697f-4026-9c95-51a329b2cd00/webhook-hg/hg-captacion \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test Lead",
    "company": "Empresa Test",
    "email": "test@test.cl",
    "commune": "Santiago",
    "service": "automatizacion",
    "whatsapp": "+56 9 0000 0000",
    "challenge": "Prueba del sistema",
    "source": "test-manual",
    "timestamp": "2026-06-25T12:00:00.000Z",
    "utmSource": "directo"
  }'
```

Respuesta esperada: `HTTP 200 OK`

---

## 8. Errores comunes

| Error | Causa probable | Solución |
|---|---|---|
| Form no envía | n8n apagado o webhook inactivo | Verificar que el workflow esté **active** en n8n |
| 404 en webhook | URL cambió | Actualizar `diagnosticWebhook` en `constants.ts` |
| Notion no recibe | Integration sin acceso a la DB | Compartir la DB con la Integration en Notion |
| Email no llega | App password necesaria | Usar App Password de Google, no contraseña normal |
| Sheets duplica filas | Trigger se ejecuta dos veces | Revisar que no haya dos webhooks activos con la misma URL |
