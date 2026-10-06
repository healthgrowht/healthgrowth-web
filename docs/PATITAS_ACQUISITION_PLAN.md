# PATITAS FELICES — ACQUISITION PLAN
# Sistema de captación: Orgánico + Meta Ads + CTWA
# Versión: 1.0 | Fecha: 2026-09-02

---

## OBJETIVO

Crear flujo predecible de clientes nuevos para Patitas Felices en Puerto Montt.

Meta: 3-5 bookings nuevos/semana desde adquisición digital (orgánico + ads).
No se ejecutan campañas en este documento. Solo arquitectura y preparación.

---

## CUSTOMER JOURNEY — PATITAS

### Journey 1: Orgánico Instagram / Facebook

```
Post/Reel/Historia con CTA
  → Perfil IG / Página FB
    → Link en bio / swipe up / "Escríbenos"
      → WhatsApp: "Hola, vi tu publicación..."
        → ROKITO responde (<1 min)
          → Intent: BOOKING
            → Slots → Booking → Confirmación
              → CRM: BOOKED
```

**Atribución:** source = "instagram_organic" (extraído del utm_source si viene de Linktree/link)

### Journey 2: Click-to-WhatsApp Ad

```
Meta Ad (carousel / imagen / video)
  → Click → WhatsApp abre con opening message
    → 72h FREE window
      → ROKITO responde
        → Slots → Booking
          → CRM: BOOKED, source = "meta_ctwa", campaign = nombre campaña
```

**Ventaja clave:** 45-60% click→conversación (vs 2-5% landing page).
**Costo:** Free durante 72h window. Solo se paga el ad click.

### Journey 3: Meta Lead Form

```
Meta Lead Ad (formulario nativo)
  → Customer completa: nombre, teléfono, mascota, servicio interés
    → n8n webhook recibe → CRM crea lead
      → WhatsApp automático: "Hola [nombre], recibimos tu consulta..."
        → ROKITO toma la conversación
          → Booking
```

**Atribución:** source = "meta_lead_form", campaign = nombre campaña

### Journey 4: Cliente que regresa

```
Reactivation trigger (30 días sin booking nuevo)
  → WA template (SOLO si tiene consentimiento de marketing)
    → "Tu perro ya debe necesitar su próximo baño... 🐾"
      → Conversación → Booking
```

---

## CONTENIDO ORGÁNICO — ARQUITECTURA

### Pilares de contenido para Instagram

| Pilar | % | Ejemplo | Objetivo |
|-------|---|---------|---------|
| Antes/Después | 40% | Foto del perro recién bañado | Prueba social, deseo |
| Educativo | 20% | "¿Cada cuánto debe bañarse tu golden?" | Confianza, engagement |
| Proceso / Detrás de cámaras | 20% | Video del proceso de corte | Confianza |
| Social / Emocional | 10% | Reacción del dueño al ver su perro | Viralidad |
| CTA Directo | 10% | "Agenda esta semana, tenemos cupos" | Conversión |

### Frecuencia mínima viable

```
Instagram: 3-4 posts/semana + 5 historias/día
Facebook: Mirror de Instagram + 1-2 posts propios/semana
```

### Material necesario (Alicia provee)

```
[ ] Fotos antes/después de perros (mínimo 10 para iniciar)
[ ] Video del proceso de baño/corte (30-60 segundos)
[ ] Foto del local / área de trabajo
[ ] Foto de Alicia trabajando (humaniza el negocio)
[ ] Nombres de mascotas (con permiso del dueño) para mencionar
```

### CTA en bio (formato sugerido)

```
📍 Puerto Montt
🐾 Peluquería canina profesional
⏰ Lun-Vie [horario] | Sáb [horario]
👇 Agenda tu cita aquí:
[Linktree o link directo a WA con mensaje prefillado]
```

Link directo WhatsApp prefillado:
```
https://wa.me/56XXXXXXXXX?text=Hola%2C+quiero+informaci%C3%B3n+para+agendar+a+mi+perro
```
(reemplazar X con número real cuando esté confirmado)

---

## META ADS — ESTRUCTURA DE TEST INICIAL

### Campaña 1 — CTWA Awareness (inmediata, post-WABA)

```
Objetivo:     Engagement (Click-to-WhatsApp)
Presupuesto:  $3,000-5,000 CLP/día (7 días = test de $21,000-35,000 CLP)
Duración:     7 días (test, no campaña permanente)

Audiencia:
  → Ubicación: Puerto Montt + 30km radio
  → Edad: 22-50
  → Intereses: perros, mascotas, peluquería, cuidado de animales
  → Dispositivos: mobile only (WhatsApp)

Creatividades (A/B test):
  A: Foto antes/después de un perro → "¿Cuándo fue la última vez que bañaste a tu perro?"
  B: Reel proceso de baño → "Agenda en segundos. Sin llamadas."

Opening message:
  "Hola! 🐾 Vi su publicación sobre baño para perros.
   Me gustaría saber los precios y disponibilidad."

Success metric:
  → Conversaciones iniciadas / costo
  → Bookings / conversaciones (conversion rate)
  → Stop loss: si costo por conversación > $2,000 CLP después de 3 días
```

### Campaña 2 — Lead Form (después de Campaña 1)

```
Objetivo:     Leads
Presupuesto:  $5,000 CLP/día (7 días test)

Formulario nativo (campos):
  → Nombre
  → Teléfono (pre-llenado por Meta)
  → Nombre del perro
  → Tipo de servicio (dropdown: Baño / Corte / Baño+Corte / Completo)
  → Tamaño (dropdown: Pequeño / Mediano / Grande)

Política de privacidad URL: https://healthgrowth.cl/privacidad

Webhook: → n8n → CRM lead creado → WhatsApp automático en <5 min
```

---

## ATRIBUCIÓN — CONFIGURACIÓN MÍNIMA

Para medir qué genera bookings (no solo clics):

```
Cada lead en CRM debe tener:
  source:       instagram_organic | meta_ctwa | meta_lead_form | whatsapp_direct | referral
  campaign:     nombre de la campaña (si viene de ad)
  utm_source:   si viene de link trackeado
  utm_medium:   organic | paid | referral
  utm_campaign: nombre campaña específica

Cada booking debe heredar el source del lead.
```

**Métricas clave por semana:**
```
leads_new_this_week:             N
leads_by_source{source}:         {instagram_organic: X, meta_ctwa: Y, ...}
bookings_this_week:              N
booking_conversion_rate:         bookings / qualified_leads
cost_per_booking_by_source:      solo cuando ads activos
```

---

## GOOGLE BUSINESS PROFILE

**Costo: $0. Impacto: alto para búsquedas locales.**

Configurar/optimizar:
```
1. Reclamar ficha en https://business.google.com
2. Completar: nombre, dirección, teléfono, horario, fotos
3. Categoría: "Peluquería de mascotas" o "Servicio de cuidado de mascotas"
4. Agregar fotos: mínimo 10 (antes/después, local, equipo)
5. Activar mensajes de Google Business
6. Responder todas las reseñas (positivas y negativas)
```

**Objetivo:** Aparecer en "peluquería canina Puerto Montt" sin pagar ads.

---

## REFERRAL / BOCA A BOCA

El canal más efectivo para servicios locales. No automatizable, pero sí sistemático:

```
Post-servicio (mismo día o siguiente):
  "Tu [nombre_perro] quedó hermoso/a 🐾. 
   Si conoces a alguien con una mascota que necesite baño, 
   cuéntales que estamos en [número/link]."
  
Incentivo (opcional, después del primer mes):
  "Trae un cliente nuevo y ambos tienen 10% de descuento en la próxima cita"
```

---

## ACQUISITION GATE — CHECKLIST

```
PRE-REQUISITOS PARA ACTIVAR ACQUISITION:
[ ] WABA activo y probado (First E2E PASS)
[ ] ROKITO respondiendo correctamente (intent detection funcional)
[ ] Cal.com integrado y slots reales configurados
[ ] CRM registrando leads con source correcto
[ ] Consentimiento de marketing capturado en el flow
[ ] SERNAC No Molestar verificado antes de campañas

ORGÁNICO (puede iniciar HOY):
[ ] Perfil Instagram optimizado con CTA en bio
[ ] 10+ fotos antes/después disponibles
[ ] Calendario de contenido 30 días preparado

META ADS (después de WABA):
[ ] Meta Business Manager configurado
[ ] CTWA ad creado pero NO activado (pending E2E)
[ ] Stop-loss definido y acordado con Carlos
```
