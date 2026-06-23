# Patitas Felices — Caso Piloto Health Growth
Versión: 1.0 | Fecha: 2026-06-22

---

## Qué es Patitas Felices

Patitas Felices es un negocio local de peluquería y cuidado canino en Chile.
Es el primer caso de transformación digital real del ecosistema Health Growth SpA.
No es un cliente hipotético. Es un negocio real con operación diaria.

---

## Roles en el Ecosistema

| Persona/Sistema | Rol |
|----------------|-----|
| **Alicia** | Operadora del negocio. Responsable de atención diaria y confirmación de reservas. |
| **Carlos** | Fundador HG. Arquitecto del sistema. Supervisión estratégica. |
| **ROKITO** | Asistente conversacional de Patitas Felices (Instagram + Facebook → n8n → Claude). |
| **Roquito** | Mascota emocional. Símbolo de la marca. Personaje de contenido. |
| **Health Growth** | Sistema que modernizó la operación de Patitas Felices. |

---

## Problema Inicial

| Área | Situación Antes |
|------|----------------|
| Instagram | Sin actividad constante |
| WhatsApp | Personal del negocio, sin automatización |
| Reservas | Por llamada o DM manual sin seguimiento |
| Facebook | Sin página activa |
| Respuesta | Tardía o sin respuesta en horario no laboral |
| Google Business | Sin ficha optimizada |
| Web | Sin presencia propia |

**Consecuencia**: Clientes perdidos por falta de respuesta rápida, desconfianza digital, oportunidades no capturadas.

---

## Solución Implementada

### Canal Instagram y Facebook
- ManyChat Starter ($15 USD/mes) recibe DMs de Instagram y Facebook
- Webhook → n8n → ROKITO (Claude Haiku API)
- Respuesta automática personalizada en horario extendido
- Captura de datos: nombre, mascota, tipo de servicio, disponibilidad
- Derivación a Alicia para confirmación final

### CRM Conversacional
- Base de datos en Notion: `🐾 Conversaciones ROKITO`
- ID: `092bb3c1-c4c3-4b25-a926-5fe21df8eee3`
- Registra cada conversación con contexto y estado

### WhatsApp
- WhatsApp Business en estado normal (activo)
- WhatsApp API: BACKLOG (no bloquea operación actual)

### Stack Tecnológico
| Componente | Herramienta | Costo |
|-----------|------------|-------|
| Inbox social | ManyChat Starter | $15 USD/mes |
| Orquestador | n8n (n8n-patitas, GCP) | Compartido con HG |
| IA conversacional | Claude Haiku API | ~$0.06 USD/mes |
| CRM conversacional | Notion | Gratuito |
| Google Business | Google | Gratuito |

---

## Estado Actual de Canales (2026-06-22)

| Canal | Estado |
|-------|--------|
| Instagram Patitas Felices | ✅ ACTIVO |
| Facebook Patitas Felices | ✅ ACTIVO |
| WhatsApp normal | ✅ ACTIVO |
| WhatsApp Business | ❌ No implementado (no bloquea) |
| ROKITO (IA) | ⏸ PENDIENTE — Alicia debe completar ROKITO_KNOWLEDGE_BASE.md |
| Google Business | ⏸ Por optimizar |
| Web propia | ❌ No tiene (sección en healthgrowth.cl como caso) |

---

## ROKITO — Asistente Conversacional

**ROKITO** es el agente de IA que atiende las consultas iniciales de Patitas Felices.
No confirma reservas. Captura datos y deriva a Alicia.

**Personalidad**: coordinador de atención amable, directo y organizado.
**Tono**: cálido, profesional y confiable. No vendedor.
**Modelo**: Claude Haiku 4.5 (eficiente y económico)

### Flujo ROKITO
```
Cliente escribe por Instagram/Facebook
    ↓ ManyChat captura y envía webhook
n8n recibe y llama a Claude API con system prompt ROKITO
    ↓
Claude responde según ROKITO_KNOWLEDGE_BASE (preguntas, servicios, horarios)
    ↓
n8n envía respuesta de vuelta por ManyChat al canal original
    ↓
Si requiere confirmación → notifica a Alicia por email/WA
```

### Bloqueador Único para Activar ROKITO
Alicia debe completar el archivo `ROKITO_KNOWLEDGE_BASE.md` con:
- Lista de servicios y precios actuales
- Horarios de atención
- Política de cancelaciones
- Preguntas frecuentes
- Datos de contacto y ubicación

Una vez completado → activación en 2-4 horas.

---

## Flujo Comercial Ideal

```
Instagram Patitas Felices
    ↓ post con CTA
DM de cliente
    ↓ ROKITO responde (automático)
Captura: nombre + mascota + servicio + disponibilidad
    ↓ Notifica a Alicia
Alicia confirma y agenda
    ↓
Atención en el local
    ↓
Foto del resultado → nuevo contenido
    ↓
Testimonio → caso de éxito HG → nuevo cliente para HG
```

---

## Métricas Sugeridas para Patitas Felices

| Métrica | Frecuencia | Objetivo mes 1 post-ROKITO |
|---------|-----------|--------------------------|
| DMs respondidos en <1 hora | Diario | 100% |
| Leads capturados/semana | Semanal | 5+ |
| Reservas confirmadas/semana | Semanal | 3+ |
| Tasa de conversión DM→reserva | Mensual | 40%+ |
| Conversaciones en Notion CRM | Mensual | 20+ |

---

## Cómo se Usará como Caso de Éxito

1. **Sección en healthgrowth.cl** — ya existe en `SocialProof.tsx`
2. **Posts en @healthgrowthspa** — antes/después, resultados, proceso
3. **Contenido de Roquito** — historia emocional
4. **Diagnósticos para nuevos clientes** — "mira lo que hicimos con Patitas Felices"
5. **Video case study** — cuando Remotion esté activo

---

## Archivos del Sistema ROKITO

| Archivo | Descripción |
|---------|-------------|
| `ROKITO_SYSTEM_PROMPT.md` | Instrucciones del agente IA |
| `ROKITO_KNOWLEDGE_BASE.md` | Info del negocio (Alicia debe completar) |
| `n8n_workflow_01_ROKITO_Instagram.json` | Workflow importable en n8n |
| `USER_ROKITO.md` | Para usar ROKITO manualmente en Claude |
| Notion DB `🐾 Conversaciones ROKITO` | CRM de conversaciones |

---

## Orden de Activación

1. ✅ Crear workflows n8n — HECHO
2. ✅ Crear DB Notion — HECHO
3. ⏸ Alicia completa ROKITO_KNOWLEDGE_BASE.md — PENDIENTE
4. ⏸ Importar n8n_workflow_01_ROKITO_Instagram.json en n8n
5. ⏸ Configurar credenciales: ANTHROPIC_API_KEY, MANYCHAT_API_TOKEN, NOTION_API_KEY
6. ⏸ Activar en ManyChat → conectar con webhook n8n
7. ⏸ Prueba con DM real
8. ⏸ Monitorear 48 horas → ajustar
