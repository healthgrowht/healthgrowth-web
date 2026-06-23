# Flujos de DM — Respuestas Automáticas y Manuales
Health Growth SpA | Actualizado: 2026-06-23

---

## Plataforma Actual

Los flujos DM se ejecutan vía ManyChat + n8n (futuro).
Hasta que ManyChat esté configurado, Carlos responde manualmente usando estos guiones.

---

## PALABRAS CLAVE ACTIVADORAS

| Palabra clave | Trigger | Flujo |
|--------------|---------|-------|
| PYME / NEGOCIO | Comentario o DM | Flujo 1 — Calificación Pyme |
| DIAGNÓSTICO | DM | Flujo 2 — Diagnóstico Gratis |
| KIT / CHECKLIST | Comentario | Flujo 3 — Entrega Lead Magnet |
| WHATSAPP | DM o comentario | Flujo 4 — WhatsApp Business |
| CHIMI | Comentario | Flujo 5 — Chimi Revisa |
| PATITAS | DM | Flujo 6 — Info Patitas Felices |
| GOOGLE | Comentario | Flujo 7 — Google Business |
| INSTAGRAM / IG | DM | Flujo 8 — Instagram Review |

---

## FLUJO 1 — "PYME" / "NEGOCIO"

**Trigger**: Usuario comenta PYME o escribe "tengo un negocio" / "soy emprendedor"

**Mensaje 1 — Inmediato:**
```
Buenísimo, [NOMBRE]. ¿Qué tipo de negocio tienes?
(Cuéntame: rubro + ciudad)
```

**Mensaje 2 — Según respuesta (esperar):**
```
Perfecto. Para orientarte mejor:
¿Hoy tus clientes llegan principalmente por Instagram, WhatsApp, Google Maps o recomendación?
```

**Mensaje 3 — Clasificación:**
```
Última pregunta: ¿Qué te cuesta más?
A) Atraer nuevas consultas
B) Responder rápido a tiempo
C) Cerrar y dar seguimiento
```

**Clasificación según respuesta:**
- A → oferta de diagnóstico + web/Instagram
- B → automatización WhatsApp
- C → CRM + seguimiento

**Mensaje 4 — CTA:**
```
Según lo que me comentas, tengo algo concreto para ti.
¿Tienes 30 minutos esta semana para un diagnóstico gratuito?
(Sin costo. Sin compromiso. Solo claridad.)
```

**Seguimiento día 3 (si no responde):**
```
Hola [NOMBRE]. ¿Pudiste revisar lo que te comenté? Si no es buen momento, sin problema. Igual te mando el checklist por si sirve.
```

**Seguimiento día 7 (cierre):**
```
[NOMBRE], te dejo mi contacto por si necesitas apoyo digital en algún momento: healthgrowth.cl | wa.me/56951017947. Éxito con tu negocio.
```

---

## FLUJO 2 — "DIAGNÓSTICO"

**Trigger**: Usuario escribe "quiero diagnóstico" / "diagnóstico gratis" / "DIAGNÓSTICO"

**Mensaje 1 — Inmediato:**
```
Perfecto, [NOMBRE]. El diagnóstico es gratuito y dura 30 minutos.
Revisamos: Instagram / WhatsApp / Google Maps / Web.
Y te damos 3 mejoras concretas para aplicar esta semana.

¿Cuándo podrías? Cuéntame tu disponibilidad esta semana.
```

**Mensaje 2 — Confirmar:**
```
Anotado. ¿Prefieres la sesión por videollamada (Google Meet) o por chat/WhatsApp?
```

**Mensaje 3 — Pre-diagnóstico:**
```
Mientras coordinamos, cuéntame:
1. ¿Qué tipo de negocio tienes?
2. ¿Ciudad?
3. ¿Tienes web propia?
4. ¿Instagram activo?
5. ¿WhatsApp Business configurado?
```

**Después del diagnóstico:**
```
[NOMBRE], gracias por la sesión. Te envío el resumen con las 3 mejoras que vimos.
Si quieres avanzar con alguna, el Pack Impulso Pyme tiene todo lo necesario.
Habla cuando quieras. Sin apuro.
```

---

## FLUJO 3 — "KIT" / "CHECKLIST"

**Trigger**: Comentario CHIMI o CHECKLIST en posts específicos

**Mensaje 1 — Inmediato:**
```
[NOMBRE], te mando el checklist ahora mismo.
Es PDF de 1 página. 10 preguntas para saber cómo está tu negocio digitalmente.

[Enlace al PDF o ruta al recurso]

¿Cuántas marcas SÍ? Cuéntame cuando lo tengas.
```

**Mensaje 2 — Seguimiento día 2:**
```
¿Pudiste revisar el checklist, [NOMBRE]? ¿Cuántos SÍ?
Si tienes menos de 7, tengo algo que te puede ayudar. Sin costo.
```

---

## FLUJO 4 — "WHATSAPP"

**Trigger**: DM o comentario sobre WhatsApp Business

**Mensaje 1:**
```
Hola [NOMBRE]. ¿Tienes WhatsApp Business configurado o estás usando WhatsApp personal para tu negocio?
```

**Según respuesta:**

Si personal:
```
Ok, cambiar a Business no es complicado. Te explico en 2 pasos:
1. Descarga "WhatsApp Business" (es gratis, app diferente)
2. Usa el mismo número o uno dedicado

¿Quieres que te diga cómo configurar el mensaje de bienvenida también?
```

Si Business pero sin configurar:
```
Bien. El paso más importante: configurar el mensaje de bienvenida automático.
¿Lo tienes activo? Si no, te mando los pasos exactos ahora mismo.
```

---

## FLUJO 5 — "CHIMI"

**Trigger**: Comentario "CHIMI" en posts de Chimi

**Mensaje 1:**
```
Hola [NOMBRE]. Chimi está disponible.
Para revisar tu perfil, necesito que me cuentes:
1. ¿Cuál es tu Instagram de negocio? (@handle)
2. ¿Tienes web propia?

Con eso, Chimi hace el diagnóstico express.
```

**Mensaje 2 (tras recibir el handle):**
```
[Revisión manual del perfil con los siguientes puntos:]
- Bio: [observación]
- Último post: [fecha]
- Link en bio: SÍ/NO
- Destacados: SÍ/NO
- Tipo de contenido: [breve]

Diagnóstico Chimi:
[3 mejoras concretas]

¿Quieres profundizar? Diagnóstico completo disponible esta semana. Sin costo.
```

---

## FLUJO 6 — "PATITAS" (desde cuenta HG)

**Trigger**: Pregunta sobre Patitas Felices

**Mensaje 1:**
```
Patitas Felices es nuestro primer caso real en Puerto Montt.
Es una peluquería canina donde implementamos:
- WhatsApp automatizado para reservas
- Instagram activo con contenido semanal
- Sistema de seguimiento de clientes

¿Tienes un negocio similar o te interesa algo parecido para el tuyo?
```

---

## FLUJO 7 — "GOOGLE"

**Trigger**: Comentario GOOGLE

**Mensaje 1:**
```
Hola [NOMBRE]. ¿Tienes ficha de Google Business (antes Google My Business) para tu negocio?
```

**Mensaje 2:**
```
Para optimizarla necesitas revisar:
1. Nombre y categoría correctos
2. Horario actualizado (incluyendo feriados)
3. Fotos de alta calidad (mínimo 5)
4. Descripción con palabras que usan tus clientes
5. Link a web o WhatsApp

¿Quieres que revisemos juntos cuál de estos te falta?
```

---

## FLUJO 8 — INSTAGRAM REVIEW

**Trigger**: "quiero que revisen mi Instagram" / "IG"

**Mensaje 1:**
```
Con gusto, [NOMBRE]. Mándame tu @handle de Instagram y tipo de negocio.
Revisamos en menos de 24h y te mandamos 3 puntos concretos de mejora.
Sin costo.
```

---

## REGLAS DE DM PARA CARLOS

1. Responder todos los DMs en menos de 2 horas (horario hábil)
2. Nunca usar respuestas genéricas sin personalizar el nombre
3. Si el lead es de alta prioridad → derivar a llamada/videollamada directa
4. Si no responde en 3 días → seguimiento único y cerrar con gracia
5. Si dice "no gracias" → agradecer y marcar como `no_contactar` en CRM
6. Registrar TODOS los leads en Notion CRM antes de cerrar el día

---

## MÉTRICAS DE DM A RASTREAR

| Métrica | Objetivo |
|---------|---------|
| Tiempo de respuesta promedio | < 2 horas en horario hábil |
| Tasa de respuesta a outreach | > 20% |
| DMs que llegan a diagnóstico | > 30% de interesados |
| Diagnósticos que convierten | > 20% |
| Palabras clave más activadas | Revisar mensualmente |
