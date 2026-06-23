# Roadmap Meta / Instagram — Health Growth
Health Growth SpA | Actualizado: 2026-06-23

---

## PRINCIPIOS

- Usar SOLO métodos oficiales de Meta
- NO automatizar spam ni mensajes masivos no solicitados
- NO usar herramientas que pidan contraseña de Instagram
- Priorizar autenticidad sobre volumen

---

## PASO 1 — Cuenta Profesional de Instagram

**Acción manual (Carlos):**
1. Ir a configuración de la cuenta @healthgrowthspa
2. "Cambiar tipo de cuenta" → "Cuenta Profesional" → "Empresa"
3. Seleccionar categoría: "Empresa de tecnología" o "Consultoría"
4. Completar: dirección, teléfono, email, categoría

**Por qué importa**: Sin cuenta profesional no hay acceso a Insights ni a APIs.

---

## PASO 2 — Conectar a Página de Facebook

**Acción manual:**
1. Crear página de Facebook "Health Growth SpA" si no existe
2. En Instagram: Configuración → Cuenta Vinculada → Facebook
3. Conectar la página

**Por qué importa**: La publicidad de Meta requiere una Página de Facebook conectada.

---

## PASO 3 — Meta Business Suite

**URL**: business.facebook.com

**Configurar:**
- Agregar Instagram y Facebook al Business Suite
- Configurar permisos de administrador para Carlos
- Activar bandeja de entrada unificada (Facebook + Instagram DMs en un lugar)

**Funciones disponibles sin pagar:**
- Programación de publicaciones (gratuita)
- Respuesta a DMs desde escritorio
- Insights básicos de publicaciones
- Bandeja de entrada unificada

---

## PASO 4 — Programación de Contenido

**Gratuito via Meta Business Suite:**
1. Crear publicación en la app o web de Business Suite
2. Clic en "Programar" en lugar de "Publicar"
3. Elegir fecha y hora
4. La publicación se publica automáticamente

**Alternativas con plan gratuito:**
- Buffer (3 canales gratuitos)
- Later (10 posts/mes gratuitos)
- Hootsuite (limitado)

**Recomendación**: Empezar con Meta Business Suite nativo. Pagar herramientas de scheduling solo cuando el volumen lo justifique.

---

## PASO 5 — Acceso a APIs (Futuro)

### Instagram Content Publishing API
**Para qué sirve**: Publicar contenido programáticamente (via n8n)
**Requisitos**:
- Cuenta de desarrollador en Meta (developers.facebook.com)
- App de Meta creada
- Revisión de la app por Meta
- Token de larga duración

**Estado**: NO configurar aún. Requiere volumen de publicaciones manual primero.

### Instagram Messaging API
**Para qué sirve**: Responder DMs automáticamente (Chimi via n8n)
**Requisitos**:
- Mismos que Content Publishing API
- Aprobación específica para mensajería

**Estado**: Esto es lo que habilita el flujo ManyChat → n8n → Claude → Instagram DM.

---

## PASO 6 — ManyChat (Cuando Esté Listo)

ManyChat es la herramienta que conecta palabras clave de Instagram con flujos automatizados.

**Costo**: Plan gratuito hasta 1.000 contactos. Pro: ~$15 USD/mes.

**Flujo:**
```
Usuario comenta "CHIMI" en Instagram
       ↓
ManyChat detecta la palabra clave
       ↓
Envía DM automático al usuario
       ↓ (opcional)
Webhook a n8n
       ↓
n8n llama a Claude API
       ↓
Respuesta personalizada de vuelta al DM
```

**Requisitos**:
- Cuenta Pro de ManyChat
- Instagram Business conectado a ManyChat
- Token de Instagram aprobado

**Estado**: REQUIERE APROBACIÓN DE CARLOS (costo + configuración)

---

## LÍMITES Y POLÍTICAS IMPORTANTES

| Límite | Valor |
|--------|-------|
| Publicaciones via API | 50/día por cuenta |
| DMs automatizados | Solo a usuarios que iniciaron conversación primero |
| Mensajes promocionales masivos | NO permitidos sin opt-in previo |
| Hashtags recomendados | 8-15 por post |
| Frecuencia de publicación | 1-2 posts/día máximo para no penalizar alcance |

---

## CREDENCIALES NECESARIAS

| Item | Acción | Quién |
|------|--------|-------|
| Cuenta @healthgrowthspa profesional | Cambiar tipo | Carlos |
| Página Facebook HG SpA | Crear si no existe | Carlos |
| Meta Business Suite | Configurar | Carlos |
| Cuenta developers.facebook.com | Registrar (para API) | Carlos |
| ManyChat account | Crear + conectar | Carlos (APROBACIÓN) |

**MARCAR: REQUIERE APROBACIÓN DE CARLOS para ManyChat y APIs de Meta**

---

## RIESGOS

| Riesgo | Mitigación |
|--------|-----------|
| Cuenta de Instagram suspendida por actividad automatizada | Solo usar APIs oficiales. No simular actividad humana. |
| Shadow ban por hashtags | Rotar hashtags. No repetir exactamente los mismos en todos los posts. |
| DMs automáticos que violan políticas | Solo responder a quienes iniciaron contacto primero. |
| App de Meta rechazada en revisión | Documentar bien el caso de uso en la solicitud. |
