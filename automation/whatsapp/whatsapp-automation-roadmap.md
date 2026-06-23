# Roadmap WhatsApp — Health Growth + Patitas Felices
Health Growth SpA | Actualizado: 2026-06-23

---

## NÚMERO OFICIAL HG

+56 9 5101 7947
Link: https://wa.me/56951017947

---

## FASE 1 — WhatsApp Business Básico (HACER AHORA)

Todo lo que sigue es gratuito y manual. No requiere API ni credenciales especiales.

### Configuración Básica (30 minutos)

**Mensaje de Bienvenida (activar en Herramientas → Mensaje de bienvenida):**
```
¡Hola! Gracias por escribirnos a Health Growth 👋

Somos especialistas en modernización digital para pymes.

¿En qué podemos ayudarte hoy?

🔹 Si quieres saber más sobre nuestros servicios → escribe SERVICIOS
🔹 Si quieres el diagnóstico gratuito → escribe DIAGNÓSTICO
🔹 Si tienes otra consulta → cuéntanos directamente

Respondemos en menos de 2 horas en horario hábil.
```

**Mensaje de Ausencia (fuera de horario hábil):**
```
Hola, en este momento estamos fuera de horario de atención.
Te responderemos mañana a partir de las 09:00 hrs.

Mientras tanto, puedes revisar nuestra web:
healthgrowth.cl

¡Gracias por contactarnos!
```

**Horario de Atención WA Business:**
- Lunes a Viernes: 09:00 - 19:00
- Sábado: 10:00 - 14:00

### Respuestas Rápidas (configurar en Herramientas → Respuestas Rápidas)

| Atajo | Texto |
|-------|-------|
| /servicios | "En Health Growth ofrecemos: diagnóstico digital gratuito / Pack Impulso Pyme (web + Instagram + WhatsApp) / Pack Avanzado (automatización + CRM) / Pack Premium (ecosistema completo). ¿Cuál te interesa saber más?" |
| /diagnostico | "El diagnóstico digital gratuito dura 30 minutos. Revisamos tu Instagram, WhatsApp, Google Maps y web. Te damos 3 mejoras concretas. Sin costo y sin compromiso. ¿Cuándo puedes esta semana?" |
| /precio | "Los precios dependen del estado actual de tu negocio y lo que necesitas. Cuéntanos tu situación y te enviamos un presupuesto claro en 24 horas." |
| /nosotros | "Health Growth SpA fue fundada por Carlos Villanueva, enfermero y especialista en sistemas digitales. Trabajamos con pymes locales ayudándolas a modernizarse sin complicaciones." |
| /patitas | "Patitas Felices es nuestro primer caso real en Puerto Montt. Automatizamos su WhatsApp, ordenamos su Instagram y diseñamos su sistema de reservas. ¿Te gustaría algo parecido?" |

### Etiquetas (para organizar contactos)
- 🔴 lead_nuevo
- 🟡 en_conversacion
- 🟢 cliente_activo
- ⚫ no_responde
- 🔵 diagnóstico_agendado
- ⭐ cliente_potencial_alto

### Catálogo (opcional — agregar cuando haya contenido visual)
- Pack Impulso Pyme
- Pack Avanzado
- Pack Premium
- Diagnóstico Gratuito

---

## FASE 2 — Link wa.me Personalizado

**Link básico (ya funciona):**
https://wa.me/56951017947

**Links con mensaje prellenado:**
```
Diagnóstico: https://wa.me/56951017947?text=Hola%2C+me+interesa+el+diagn%C3%B3stico+gratuito+para+mi+negocio.

General: https://wa.me/56951017947?text=Hola%2C+me+gustar%C3%ADa+saber+m%C3%A1s+sobre+Health+Growth.

Patitas: https://wa.me/56951017947?text=Hola%2C+me+interesa+saber+c%C3%B3mo+automatizaron+Patitas+Felices.
```

Usar estos links en:
- Bio de Instagram
- Botón de la web (ya configurado en DiagnosticForm.tsx)
- Cards de presentación
- Firma de email

---

## FASE 3 — WhatsApp Cloud API (Futuro)

**Para qué sirve**: Automatización real de conversaciones (Chimi via n8n)

**Requisitos**:
- Número de teléfono dedicado (NO el personal)
- Cuenta en Meta Business
- App de Meta aprobada
- Número verificado por Meta

**Costo**:
- API en sí: gratis hasta cierto volumen de mensajes
- Conversaciones iniciadas por usuario: $0.0106 USD/conversación (Chile)
- Conversaciones iniciadas por empresa (marketing): $0.0374 USD/conversación

**Flujo cuando esté activo:**
```
Usuario escribe al WA de HG
       ↓
WhatsApp Cloud API → webhook n8n
       ↓
n8n procesa + llama Claude API
       ↓
Chimi genera respuesta
       ↓
n8n envía respuesta via WA Cloud API
       ↓
Carlos puede intervenir si necesario
```

**Estado**: REQUIERE APROBACIÓN DE CARLOS — implica configuración en Meta Business y número dedicado.

---

## PLANTILLAS DE MENSAJES

### Bienvenida
```
¡Hola [NOMBRE]! Gracias por contactar a Health Growth.
Soy Carlos. ¿En qué puedo ayudarte hoy?
```

### Diagnóstico Recibido
```
Hola [NOMBRE], recibimos tu solicitud de diagnóstico.
Te contactaremos esta semana para coordinar la sesión de 30 minutos.
Mientras tanto, si tienes alguna pregunta, escríbenos aquí.
```

### Recurso Enviado
```
Hola [NOMBRE], te adjunto el [NOMBRE DEL RECURSO].
Cualquier duda que tengas al revisarlo, con gusto te respondo.
```

### Seguimiento Día 3
```
Hola [NOMBRE], hace unos días le comenté sobre [TEMA].
¿Pudo revisarlo? Si tiene alguna pregunta, estoy disponible.
```

### Propuesta
```
Hola [NOMBRE], adjunto la propuesta que conversamos.
Si tiene alguna pregunta antes de decidir, con gusto la respondo.
Puedo agendar una llamada esta semana si prefiere revisar en detalle.
```

### Cierre Amigable
```
[NOMBRE], entiendo que puede no ser el momento indicado.
Le dejo mi contacto por si en algún momento necesita apoyo digital.
Suerte con [NEGOCIO]. ¡Un abrazo!
```

---

## PARA PATITAS FELICES

### Número WA de Patitas Felices
**Pendiente**: Alicia debe informar el número de WhatsApp Business de Patitas Felices.

### Mensajes de Reserva Patitas Felices (para configurar en su WA Business)

**Bienvenida:**
```
¡Hola! Bienvenido/a a Patitas Felices 🐾
Peluquería canina en Puerto Montt.

Para agendar una cita necesito saber:
1. ¿Cuál es el nombre y raza de tu mascota?
2. ¿Qué servicio necesitas? (baño / corte / ambos / uñas)
3. ¿Cuál es tu disponibilidad esta semana?

Respondemos a la brevedad 🐕
```

**Confirmación de Cita:**
```
¡Perfecto! Cita confirmada para [MASCOTA].
📅 Fecha: [FECHA]
⏰ Hora: [HORA]
📍 Dirección: [DIRECCIÓN]

Si necesitas cambiar la hora o el día, avísanos con al menos 24 horas de anticipación.
¡Nos vemos pronto! 🐾
```
