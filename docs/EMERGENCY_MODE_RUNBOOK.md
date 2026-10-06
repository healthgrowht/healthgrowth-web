# HEALTH GROWTH — EMERGENCY MODE RUNBOOK
# Versión: 1.0 | Fecha: 2026-09-06
# UNA PÁGINA. Leer de arriba a abajo.

---

## PRINCIPIO FUNDAMENTAL

> **La seguridad personal tiene prioridad sobre cualquier decisión de infraestructura.**
> No hagas cambios de infraestructura bajo estrés o sin comunicación confirmada.
> Un servicio pausado se puede reactivar. Un error bajo presión puede costar semanas.

---

## 0–2 HORAS: PRIMERO LAS PERSONAS

```
☐ Verificar seguridad personal y de los cercanos
☐ Conservar batería del teléfono
☐ NO hacer cambios de infraestructura ahora
☐ Si hay internet: revisar 1 URL → https://api.healthgrowth.cl/health/ping
   RESPONDE 200 = sistema OK, nada que hacer en cloud
   NO RESPONDE = puede ser temporal, esperar 10 min antes de actuar
☐ NO reiniciar VMs ni cambiar configuración sin saber qué causó el problema
```

---

## 2–12 HORAS: VERIFICACIÓN RÁPIDA

### Desde teléfono / laptop alternativo:

**1. Check cloud health (30 segundos)**
```
https://api.healthgrowth.cl/health/ping → debe responder {"status":"ok"}
https://healthgrowth.cl → debe cargar
```

**2. Si algo falla — SSH desde móvil:**
```bash
# Instalar: Google Cloud app en iOS/Android, o terminal con gcloud
gcloud auth login  # si no autenticado
gcloud compute ssh luisvillanuevaandrades_gmail_com@openclaw-bunker \
  --project=bunkermaestro-494818 \
  --zone=southamerica-west1-a \
  --tunnel-through-iap \
  --command="sudo systemctl status carlos-os.service"
```

**3. Pausar outbound (si hay razón para hacerlo)**
```bash
# Solo si se decide explícitamente pausar campañas/outreach
# NO necesario si el sistema solo está offline temporalmente
gcloud compute ssh luisvillanuevaandrades_gmail_com@openclaw-bunker \
  --project=bunkermaestro-494818 \
  --zone=southamerica-west1-a \
  --tunnel-through-iap \
  --command="cat > /opt/carlos-os/data/emergency_mode.json << 'EOF'
{\"mode\":\"STANDBY\",\"pause_marketing_outbound\":true,\"pause_prospecting\":true,\"pause_social_publishing\":true,\"pause_noncritical_automations\":false,\"pause_ai_background_jobs\":false,\"updated_at\":\"$(date -u +%Y-%m-%dT%H:%M:%SZ)\",\"updated_by\":\"carlos_mobile\"}
EOF"
```

**4. Verificar backups (tranquilidad)**
```bash
gcloud storage ls gs://bunkermaestro-backups-carlos/ | tail -3
# Si aparecen archivos con fecha reciente = backups OK
```

**5. Priorizar comunicación crítica**
```
- Mensajes WhatsApp importantes: Alicia responde manualmente
- Leads nuevos: se acumulan en CRM, nadie los pierde
- Recordatorios: si PATCH-002 no aplicado, no se envían automáticamente (ok)
```

---

## 12–72 HORAS: OPERACIÓN MÍNIMA VIABLE

### Servicios a mantener activos:
```
✅ MANTENER: carlos-os.service (inbound webhooks, health check, CRM)
✅ MANTENER: cloudflared-carlos-os.service (tunnel)
✅ MANTENER: GCS backup cron (en VM, no necesita intervención)
✅ MANTENER: n8n (si Docker restart=always, sobrevive solo)
⏸ PAUSA: cualquier campaña pagada
⏸ PAUSA: content publishing
⏸ PAUSA: prospecting automático
```

### Si openclaw-bunker VM se reinició inesperadamente:
```bash
# Verificar que servicios arrancaron
gcloud compute ssh luisvillanuevaandrades_gmail_com@openclaw-bunker \
  --project=bunkermaestro-494818 --zone=southamerica-west1-a --tunnel-through-iap \
  --command="sudo systemctl status carlos-os cloudflared-carlos-os"

# Si no están activos:
  --command="sudo systemctl start carlos-os cloudflared-carlos-os"
```

### Si necesitas acceso alternativo (PC no disponible):
```
Opción A: Google Cloud Console → browser → SSH button (no requiere gcloud local)
  URL: console.cloud.google.com → Compute Engine → VM instances → SSH
Opción B: Cloud Shell (browser, sin instalar nada)
  URL: shell.cloud.google.com
Opción C: Terminal móvil (iOS: Blink Shell, Android: Termux) + gcloud
```

### Documentar incidentes:
```
Crear nota en teléfono o Gmail borrador:
- Qué falló
- Cuándo
- Qué se hizo
- Resultado
```

---

## KILL SWITCHES

### Ver estado actual:
```bash
cat /opt/carlos-os/data/emergency_mode.json
```

### PAUSE_MARKETING_OUTBOUND:
```bash
# Editar campo pause_marketing_outbound=true en emergency_mode.json
# El servicio lee el archivo sin restart
```

### PAUSE_ALL_OUTBOUND (modo EMERGENCY):
```bash
# Cambiar mode a "EMERGENCY" + todos los pause_ a true
# CRM, inbound y backups NUNCA se tocan por estos flags
```

### REACTIVAR (volver a NORMAL):
```bash
cat > /opt/carlos-os/data/emergency_mode.json << 'EOF'
{"mode":"NORMAL","pause_marketing_outbound":false,"pause_prospecting":false,"pause_social_publishing":false,"pause_noncritical_automations":false,"pause_ai_background_jobs":false,"updated_at":"2026-09-06T00:00:00Z","updated_by":"carlos"}
EOF
```

---

## GARANTÍAS DE DISEÑO

```
PAUSA de outbound NO detiene:
  ✅ Backups GCS (cron en VM, independiente de este flag)
  ✅ CRM writes (inbound siempre procesa)
  ✅ Inbound webhooks (carlos-os acepta mensajes)
  ✅ Health monitoring (GCP uptime check independiente)
  ✅ Lead capture formulario web
```

---

## OPERACIÓN MOBILE-ONLY

Carlos puede desde el teléfono:
```
✅ Ver health: curl/navegador a api.healthgrowth.cl/health/ping
✅ Ver CRM: Lovable SPA (carlos-os-dashboard.lovable.app) si tiene sesión
✅ SSH a VMs: Google Cloud Console browser SSH o app gcloud
✅ Confirmar backups: gcloud storage ls
✅ Pausar outbound: SSH + editar JSON
✅ Acceder runbooks: Google Drive / OneDrive desde móvil
✅ Contactar soporte: Telegram bot activo

❌ NO REQUIERE SSH para: solo revisar health
❌ NO REQUIERE instalación local: Cloud Shell es browser-only
```

---

## REINICIO DE OPERACIONES (post-emergencia)

```
☐ Verificar que todos los servicios están ACTIVE
☐ Verificar backup más reciente exitoso
☐ Cambiar emergency_mode.json a NORMAL
☐ Revisar CRM por leads pendientes de respuesta
☐ Si WhatsApp estuvo activo: revisar mensajes sin responder
☐ Documentar duración y causa del incidente
☐ Revisar si algún cron se saltó durante la emergencia
☐ Comunicar a Alicia/clientes afectados si aplica
```

---

## CONTACTO DE EMERGENCIA

```
Carlos OS API health: https://api.healthgrowth.cl/health/ping
GCP Console: console.cloud.google.com (Google account)
Cloud Shell: shell.cloud.google.com
GCS Backups: gs://bunkermaestro-backups-carlos/
Telegram Bot: conectado a CARLOS_TELEGRAM_CHAT_ID (recibes alertas)
```

---

*Generado por POWER lane | Misión ALL-HAZARDS CONTINUITY | 2026-09-06*
*Este doc debe ser legible en teléfono. Mantener conciso.*
