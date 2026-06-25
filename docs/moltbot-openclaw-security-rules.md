# Moltbot / OpenClaw — Reglas de Seguridad Operativa
Versión: 1.0 | Fecha: 2026-06-23 | Tipo: NORMA — no modificar sin aprobación de Carlos

---

## Principio Rector

> La seguridad no frena el sistema. La protege para que dure.

Moltbot solo es útil si es confiable.
Un error de seguridad puede comprometer clientes, credenciales, acceso a Meta, Gmail o WhatsApp.
Eso costaría más que cualquier venta.

---

## LO QUE MOLTBOT NUNCA HACE (sin aprobación explícita de Carlos)

### Prohibiciones absolutas
❌ Enviar mensajes masivos a listas de contactos
❌ Publicar en redes sociales reales sin revisión de Carlos
❌ Gastar dinero o comprometer pagos de cualquier tipo
❌ Cambiar contraseñas o tokens de acceso
❌ Eliminar archivos, bases de datos o registros
❌ Modificar workflows en n8n de producción
❌ Modificar DNS, Cloudflare, dominios o infraestructura productiva
❌ Acceder a Gmail real, WhatsApp API, Meta Business sin autorización
❌ Hacer scraping agresivo que viole términos de servicio
❌ Ejecutar acciones legales o contractuales en nombre de Carlos
❌ Responder clientes calientes sin aprobación (un error puede perder la venta)
❌ Conectar cuentas reales de Instagram/Facebook/WhatsApp sin validación previa

---

## REGLAS DE INFRAESTRUCTURA

### Instalación
- No instalar Moltbot/OpenClaw en el computador principal de Carlos
- Usar exclusivamente VM `openclaw-bunker` en GCP (entorno dedicado)
- Crear usuario específico sin privilegios root: `moltbot-agent`
- Nunca ejecutar servicios de agente como `root`
- Permisos mínimos necesarios — solo lo que el agente realmente usa

### Credenciales
- API keys siempre en variables de entorno (`.env`) — NUNCA en código
- NUNCA guardar tokens en documentos de texto sueltos o Google Docs
- Rotar API keys cada 90 días o inmediatamente si hay sospecha de fuga
- Gestionar con secretos cifrados (GCP Secret Manager o archivo `.env` con permisos 600)

### Red y acceso
- No exponer panel de agente directamente a internet sin protección
- Usar Cloudflare Tunnel o reverse proxy con autenticación para acceso remoto
- IAP (Identity-Aware Proxy) de GCP para acceso SSH — nunca abrir puerto 22 público
- Firewall: solo puertos mínimos necesarios (443 para webhooks, nada más)
- No usar IPs públicas sin reglas de firewall explícitas

### Monitoreo
- Logs activos en todo momento
- Revisar logs semanalmente (mínimo)
- Configurar alerta si el agente falla 3 veces consecutivas

### Separación de entornos
- Entorno de PRUEBA: base de datos Notion separada, webhooks de test
- Entorno de PRODUCCIÓN: CRM real, n8n real, webhooks reales
- NUNCA mezclar ambos en la misma sesión o configuración

---

## REGLAS ANTES DE CONECTAR SERVICIOS EXTERNOS

### Antes de conectar Gmail
- [ ] Moltbot ha operado al menos 30 días en Nivel 3 sin incidentes
- [ ] Carlos revisa y aprueba scope exacto (leer, redactar, o también enviar)
- [ ] Prueba con cuenta de Gmail de test durante 7 días
- [ ] Regla: máximo 20 emails automáticos por día hasta validar
- [ ] Kill switch activo: desconexión en 1 clic si algo falla

### Antes de conectar WhatsApp Business API
- [ ] Moltbot en Nivel 4 activo y validado
- [ ] Cuenta Meta Business verificada
- [ ] Template de mensajes aprobado por Meta
- [ ] Rate limiting configurado en n8n (máx 50 msgs/hora)
- [ ] Nunca mensajes masivos no solicitados (viola ToS de Meta → bloqueo permanente)

### Antes de conectar Instagram/Meta
- [ ] ManyChat con cuenta activa y verificada
- [ ] Solo respuesta a DMs, no envío masivo
- [ ] Flows testeados en cuenta secundaria antes de producción
- [ ] Carlos aprueba cada flow antes de activar

### Antes de conectar CRM de producción
- [ ] Agente solo tiene permiso de escritura en campos específicos
- [ ] No puede borrar registros
- [ ] Log de cada acción que modifica el CRM

---

## CLASIFICACIÓN DE ACCIONES POR RIESGO

### VERDE — Sin aprobación (hacer siempre)
- Generar borradores de contenido, guiones, captions
- Preparar reportes y resúmenes
- Analizar leads y sugerir acciones
- Documentar, estructurar, priorizar
- Leer y resumir información

### AMARILLO — Aprobación rápida (1 clic de Carlos)
- Registrar lead nuevo en CRM de prueba
- Enviar recurso gratuito a lead que lo solicitó explícitamente
- Actualizar estado de lead en Notion
- Publicar contenido programado (cuando el proceso esté validado)

### ROJO — Aprobación completa (revisión explícita)
- Enviar cualquier mensaje a cliente o prospecto real
- Publicar en cuentas reales de Instagram/Facebook/LinkedIn
- Ejecutar webhook en producción por primera vez
- Conectar nuevo servicio externo
- Modificar cualquier workflow de n8n
- Cualquier gasto o compromiso económico

### NEGRO — No activar todavía
- Mensajes masivos (WhatsApp, email, DMs)
- Acceso a Gmail real
- Publicación automática sin revisión
- Modificación de infraestructura productiva
- Cualquier Nivel 5 sin validación previa de 30 días

---

## PROTOCOLO DE INCIDENTE

Si Moltbot hace algo inesperado o hay sospecha de falla:

1. **Detener** — desconectar el agente de servicios externos inmediatamente
2. **Documentar** — registrar qué pasó, a qué hora, qué acción tomó
3. **Revisar logs** — identificar causa raíz
4. **Notificar** — Carlos evalúa impacto
5. **Corregir** — arreglar antes de reactivar
6. **Registrar** — agregar la falla a este documento para prevenir recurrencia

---

## ESTADO DE SEGURIDAD ACTUAL (2026-06-23)

| Control | Estado | Notas |
|---------|--------|-------|
| Moltbot en VPS dedicado | ⏸ Pendiente | VM existe, agente no instalado |
| Usuario sin root | ⏸ Pendiente | Crear al instalar |
| API keys en .env | ✅ Sí (web) | constants.ts usa process.env |
| IAP para SSH | ✅ Sí | GCP IAP activo en n8n-patitas |
| Firewall activo | ✅ Sí | Configurado post-hardening |
| Logs activos | ✅ Sí (n8n) | Revisar semanalmente |
| Entorno test separado | ⏸ Pendiente | Crear al instalar agente |
| Gmail desconectado | ✅ No conectado | Mantener así hasta Nivel 4 |
| WhatsApp API desconectada | ✅ No conectada | Mantener así hasta Nivel 4 |
| Meta/Instagram desconectado | ✅ No conectado | Solo manual por ahora |
| Telegram bot alertas | ❌ No creado | Crear en Fase 3 |
