# HEALTH GROWTH — RECOVERY ASSET INDEX
# Versión: 1.0 | Fecha: 2026-09-06
# ÍNDICE DE RECUPERACIÓN — SIN SECRETS
# Este documento NO contiene passwords, tokens ni claves privadas.

---

## AVISO DE SEGURIDAD

Este documento contiene solo identificadores públicos y referencias de acceso.
Los secrets (tokens, contraseñas, API keys) están en:
- `/opt/carlos-os/.env.production` (servidor — no en git)
- Bóveda de contraseñas de Carlos (offline)
- NUNCA en este documento

---

## PROVEEDORES Y ACCESO

| SERVICIO | PROVIDER | URL CONSOLA | PROYECTO/ID | REGIÓN |
|---------|---------|------------|------------|--------|
| Compute (VMs) | Google Cloud Platform | console.cloud.google.com | bunkermaestro-494818 | southamerica-west1 / east1 |
| Object Storage | GCP Cloud Storage | console.cloud.google.com/storage | bunkermaestro-494818 | — |
| CDN + Tunnel | Cloudflare | dash.cloudflare.com | (cuenta HG) | — |
| Frontend | Vercel | vercel.com/dashboard | (cuenta HG) | — |
| Automation | n8n (self-hosted) | n8n acceso vía SSH | n8n-patitas VM | southamerica-east1-c |
| Messaging | Meta Business Suite | business.facebook.com | HG SpA Business Account | — |
| AI (ROKITO) | Anthropic | console.anthropic.com | (cuenta HG) | — |
| AI (Research) | Tavily | app.tavily.com | (cuenta HG) | — |
| Notifications | Telegram Bot API | t.me/BotFather | CARLOS_TELEGRAM_CHAT_ID | — |
| Email (SMTP) | Configurado en n8n | (ver credencial n8n) | — | — |
| Content (notas) | Notion | notion.so | (cuenta HG) | — |
| Dominio | (registrar verificar) | — | healthgrowth.cl | .cl |

---

## VMs GCP

### openclaw-bunker (CRÍTICA — P0)
```
Proyecto: bunkermaestro-494818
Zona: southamerica-west1-a
Tipo: e2-standard-2 (2 vCPU, 8GB RAM)
OS: Debian
SSH: gcloud compute ssh luisvillanuevaandrades_gmail_com@openclaw-bunker \
     --project=bunkermaestro-494818 \
     --zone=southamerica-west1-a \
     --tunnel-through-iap
Alternativa SSH: GCP Console browser → VM instances → SSH button
Código: /opt/carlos-os/
Config: /opt/carlos-os/.env.production
Servicio: carlos-os.service + cloudflared-carlos-os.service
```

### n8n-patitas (P1)
```
Proyecto: bunkermaestro-494818
Zona: southamerica-east1-c
Tipo: e2-medium
SSH: gcloud compute ssh luisvillanuevaandrades_gmail_com@n8n-patitas \
     --project=bunkermaestro-494818 \
     --zone=southamerica-east1-c \
     --tunnel-through-iap
Docker: n8n-n8n-1 + n8n-caddy-1
DB: /home/luisvillanuevaandrades/.n8n/database.sqlite
```

---

## DOMINIOS Y SERVICIOS

| DOMINIO | DESTINO | SERVICIO | STATUS |
|---------|---------|---------|--------|
| healthgrowth.cl | Vercel | Next.js frontend | ACTIVO |
| api.healthgrowth.cl | openclaw-bunker via Cloudflare Tunnel | carlos-os API | ACTIVO |
| n8n.healthgrowth.cl | n8n-patitas VM | n8n workflows | SIN DNS (HAQ-06) |
| carlos-os-dashboard.lovable.app | Lovable SPA | Dashboard | ACTIVO |

---

## BACKUP LOCATIONS

| TARGET | LOCATION | ACCESO |
|--------|---------|-------|
| carlos-os data | gs://bunkermaestro-backups-carlos/ | gcloud storage ls |
| n8n SQLite | gs://bunkermaestro-backups-carlos/n8n/ | gcloud storage ls |
| openclaw-bunker disk | GCP Snapshots (30 días) | Console → Disks → Snapshots |
| n8n-patitas disk | GCP Snapshots (30 días) | Console → Disks → Snapshots |

---

## SECUENCIA DE RECUPERACIÓN (desde cero)

### Escenario: openclaw-bunker destruida

```
1. RECUPERAR SNAPSHOT
   GCP Console → Compute Engine → Snapshots
   Seleccionar snapshot más reciente de openclaw-bunker
   Crear nueva VM desde snapshot en southamerica-west1-a
   
2. VERIFICAR CLOUDFLARED
   SSH nueva VM
   sudo systemctl status cloudflared-carlos-os.service
   # Si no existe: reinstalar cloudflared y crear nuevo tunnel en Cloudflare dashboard
   
3. VERIFICAR ENV VARS
   cat /opt/carlos-os/.env.production | grep -E '^[A-Z_]+=' | sed 's/=.*/=PRESENT/'
   # Reponer desde bóveda de contraseñas cualquier var faltante
   
4. INICIAR SERVICIO
   sudo systemctl enable carlos-os cloudflared-carlos-os
   sudo systemctl start carlos-os cloudflared-carlos-os
   
5. VERIFICAR
   curl http://localhost:3000/health/ping
   curl https://api.healthgrowth.cl/health/ping  # desde internet
```

### Escenario: n8n-patitas destruida

```
1. Crear nueva VM en southamerica-east1-c desde último snapshot n8n-patitas
2. SSH + verificar Docker: docker ps
3. Si no arranca: docker-compose up -d (en /home/luisvillanuevaandrades/)
4. Verificar SQLite: ls -la /home/luisvillanuevaandrades/.n8n/database.sqlite
5. Si SQLite perdida: restaurar desde gs://bunkermaestro-backups-carlos/n8n/
```

### Escenario: Pérdida total de acceso Google account

```
⚠️ ESTO BLOQUEA TODO — es el mayor riesgo
PREVENCIÓN: Guardar MFA recovery codes de Google account en:
  - Lugar físico seguro (papel impreso)
  - Bóveda de contraseñas offline
  - NO en dispositivo digital conectado a internet

RECUPERACIÓN si se pierde acceso:
  1. Usar recovery codes guardados offline
  2. Contactar Google Support con documentación de identidad
  3. ETA: horas a días
```

---

## CHECKLIST DE CREDENTIALS OFFLINE (para Carlos)

Las siguientes credentials DEBEN existir en forma offline (no digital, no en cloud):

```
☐ MFA Recovery Codes — Google account (luisvillanuevaandrades@gmail.com)
☐ MFA Recovery Codes — Meta Business account
☐ MFA Recovery Codes — Cloudflare account
☐ MFA Recovery Codes — Vercel account
☐ MFA Recovery Codes — Anthropic console
☐ Contraseña de bóveda de contraseñas (si usa gestor)
☐ Lista de: qué servicio está en qué cuenta de email

FORMATO RECOMENDADO: Papel impreso en lugar físico seguro
NO RECOMENDADO: Foto en teléfono, nota digital no cifrada
```

---

## WORKFLOWS N8N (identificadores para recuperación)

| Workflow | ID | Estado esperado |
|---------|-----|----------------|
| [PF] Instagram Conversations - ROKITO v1 | cf35de56 | INACTIVE (hasta DNS) |
| HealthGrowth-Pipeline-V1 | a0b41fdd | ACTIVE |
| ISAPRE-Etapa-Inicial-Transporte | ce7e7fbb | ACTIVE |

Exportar workflows para backup: n8n UI → Settings → Workflows → Export all

---

## COMANDOS DE VERIFICACIÓN RÁPIDA

```bash
# Health API
curl https://api.healthgrowth.cl/health/ping

# Estado servicios (desde SSH)
sudo systemctl status carlos-os cloudflared-carlos-os

# Último backup
gsutil ls -la gs://bunkermaestro-backups-carlos/ | sort -k2 | tail -5

# n8n Docker
docker ps | grep n8n

# Logs carlos-os últimas 20 líneas
journalctl -u carlos-os -n 20 --no-pager
```

---

*Generado por POWER lane | Misión ALL-HAZARDS CONTINUITY | 2026-09-06*
*Actualizar cuando cambien VMs, dominios o proveedores*
