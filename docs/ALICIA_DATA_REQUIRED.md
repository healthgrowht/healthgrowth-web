# DATOS REQUERIDOS DE ALICIA — PATITAS FELICES
# Para Carlos: recopilar esta información antes del piloto

## ESTADO ACTUAL

Los siguientes campos en `business_profile.json` tienen placeholder `REQUIRED_BUSINESS_INPUT`.
Mientras no se completen, ROKITO responde con información incompleta o vacía.

---

## FORMULARIO A COMPLETAR POR ALICIA

### 1. CONTACTO

| Campo | Valor actual | Necesitamos | Ejemplo |
|-------|-------------|-------------|---------|
| Teléfono (formato E.164) | REQUIRED | +5612XXXXXXX | +56912345678 |
| Teléfono (display para clientes) | REQUIRED | +56 9 XXXX XXXX | +56 9 1234 5678 |
| WhatsApp display | REQUIRED | +56 9 XXXX XXXX | +56 9 1234 5678 |
| Email | null | correo@dominio.cl (opcional) | patitas@gmail.com |

### 2. DIRECCIÓN

| Campo | Valor actual | Necesitamos | Ejemplo |
|-------|-------------|-------------|---------|
| Dirección completa | REQUIRED | Calle Nº, Puerto Montt | Los Alamos 123, Puerto Montt |
| Referencia | REQUIRED | Referencia para llegar | Frente al mall, segundo piso |
| Link Google Maps | null | URL del local (opcional) | https://maps.google.com/... |

### 3. PRECIOS DE SERVICIOS

Para cada servicio, indicar precio en CLP según tamaño del perro:

| Servicio | Tamaño pequeño | Mediano | Grande |
|----------|---------------|---------|--------|
| Baño completo (shampoo) | $_____ | $_____ | $_____ |
| Corte de pelo | $_____ | $_____ | $_____ |
| Baño + Corte | $_____ | $_____ | $_____ |

| Servicio | Precio único |
|----------|-------------|
| Limado de uñas | $_____ |
| Limpieza de oídos | $_____ |
| Servicio completo (Baño+Corte+Uñas+Oídos) | $_____ (o rango $xx-$xx) |

### 4. INSTRUCCIONES DE PREPARACIÓN PRE-BAÑO

¿Qué instrucciones debe seguir el dueño antes de traer al perro?

```
Ejemplo: 
"Por favor traiga al perro con correa. Evite alimentarlo 2 horas antes. 
Si tiene alergias o condición de salud, avísenos previamente."
```

Instrucciones de Patitas Felices:
```
[Alicia completa aquí]
```

### 5. HORARIO (verificación)

El sistema tiene configurado:
- Lun–Vie: 09:00–16:00 (último slot)
- Sábado: 09:00–11:00 (último slot)
- Domingo: cerrado

¿Es correcto? Si no, especificar:
```
Horario real: ___________
```

### 6. TELEGRAM (para notificaciones del sistema)

Para que el sistema notifique a Alicia directamente:

**Pasos que Alicia debe hacer (2 minutos):**
1. Abrir Telegram en su teléfono
2. Buscar el bot: @[nombre del bot — Carlos te lo indicará]
3. Enviar cualquier mensaje al bot (ej: "hola")
4. Carlos recibe automáticamente el chat_id de Alicia
5. Carlos lo ingresa en el sistema

¿Alicia tiene Telegram? [ ] Sí  [ ] No

---

## PARA CARLOS: NÚMERO WHATSAPP

**Decisión crítica pendiente:**

¿Qué número usaremos para WhatsApp Business de Patitas Felices?

**Opción A — Número actual de Alicia:**
- Meta migrará el número a WhatsApp Business API
- El número dejará de funcionar como WhatsApp personal normal en el teléfono de Alicia
- Clientes actuales de WA personal pueden perder el historial
- Alicia debe autorizar explícitamente y estar disponible para recibir OTP de Meta
- Ventaja: clientes ya conocen el número

**Opción B — Número nuevo/separado:**
- Adquirir SIM nueva o número virtual
- Sin impacto en WhatsApp personal de Alicia
- Clientes deben aprender el nuevo número
- Ventaja: separación clara personal/negocio, sin riesgo
- Recomendado para el piloto

**Elección: ___________________________**

---

## CHECKLIST COMPLETO PRE-PILOTO

```
[ ] Teléfono canonical (E.164)
[ ] Teléfono display
[ ] Dirección completa
[ ] Referencia
[ ] Precio baño pequeño
[ ] Precio baño mediano
[ ] Precio baño grande
[ ] Precio corte pequeño
[ ] Precio corte mediano
[ ] Precio corte grande
[ ] Precio baño+corte pequeño
[ ] Precio baño+corte mediano
[ ] Precio baño+corte grande
[ ] Precio uñas
[ ] Precio oídos
[ ] Precio servicio completo
[ ] Instrucciones preparación
[ ] Horario verificado
[ ] Alicia inició chat con bot Telegram
[ ] Número WhatsApp decidido (A o B)
[ ] Alicia autorizó migración (si Opción A)
```

---

## ACCIONES CARLOS (después de tener los datos de Alicia)

1. Editar `data/tenants/patitas_felices/business_profile.json` con todos los datos
2. Agregar a `.env.production`:
   ```
   PATITAS_WA_ME=https://wa.me/56XXXXXXXXX
   PATITAS_BOOKING_LINK=https://[link-agenda]
   ALICIA_TELEGRAM_CHAT_ID=[chat_id de Alicia]
   ```
3. Reiniciar carlos-os.service
4. Registrar WABA en Meta Business Manager con número elegido
