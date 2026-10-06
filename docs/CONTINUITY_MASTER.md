# HEALTH GROWTH — CONTINUITY MASTER
# Versión: 1.0 | Fecha: 2026-09-06
# Fuente de verdad para continuidad operacional y recuperación de desastres

---

## RESUMEN EJECUTIVO

Health Growth opera sobre infraestructura GCP que **no depende del PC de Carlos**.
Los servicios críticos sobreviven corte de luz, pérdida del desktop o ausencia temporal de Carlos.

**Estado actual**: PRODUCTION_PARTIAL — carlos-os activo, PATCH-001 aplicado, WhatsApp pre-WABA, Instagram bloqueado por DNS.

**PC-OFF_SURVIVAL_GATE = PASS** (con caveats menores documentados abajo)

---

## 1. INVENTARIO DE CONTINUIDAD EXISTENTE (VERIFICADO 2026-09-01/02)

| REQUIREMENT | CURRENT_STATE | PROVEN | GAP | ACTION |
|-------------|---------------|--------|-----|--------|
| Repository synchronized | healthgrowth-web en PC local + Vercel | PARTIAL | Sin backup Git explícito | Verificar push a GitHub |
| Automatic backups | GCS cron 03:00 UTC + GCP snapshots 04:00 UTC | ✅ PROVEN | Restore no testeado | Ejecutar restore test §7 |
| Critical automation outside home PC | carlos-os + n8n en GCP VMs | ✅ PROVEN | — | — |
| Auto restart carlos-os | systemd restart=always | ✅ PROVEN | — | — |
| Auto restart n8n | Docker (política a verificar) | UNVERIFIED | Restart policy no confirmada | SSH y verificar |
| Emergency credentials | MFA en Google account + gcloud | UNVERIFIED | MFA recovery codes offline? | Carlos verifica físicamente |
| MFA recovery codes offline | Desconocido | UNVERIFIED | Si se pierde acceso Google = LOCKED OUT | **P0: Guardar códigos offline** |
| Mobile recovery capability | gcloud + terminal móvil | PARTIAL | Sin runbook específico | Sección 8 de este doc |
| Dependency inventory | ARCHITECTURE.md | ✅ PROVEN | — | — |

---

## 2. TRES MODOS OPERACIONALES

### NORMAL_MODE
```
ACTIVAR: Operación estándar
SERVICIOS: Todos activos
INCLUYE:
  - carlos-os.service ACTIVE
  - n8n workflows ACTIVE
  - Lead capture ACTIVE
  - CRM write ACTIVE
  - WhatsApp inbound/outbound (cuando WABA configurado)
  - Instagram automation (cuando DNS configurado)
  - Monitoring ACTIVE
  - Backups ACTIVE
  - Ad campaigns (cuando autorizados)
  - Content publishing (cuando activo)
```

### STANDBY_MODE
```
ACTIVAR: Pausa voluntaria / baja actividad
SERVICIOS: Infraestructura saludable, sin outbound activo
INCLUYE:
  ✅ CONTINÚA: carlos-os.service, backups, monitoring, inbound lead capture, CRM
  ⏸ PAUSA: campañas ad, prospecting masivo, content publishing, AI background jobs
  🚫 SUSPENDE: mass outreach automático, contenido nuevo
CÓMO ACTIVAR: Cambiar data/emergency_mode.json (ver §11)
```

### EMERGENCY_MODE
```
ACTIVAR: Emergencia real / evaluación en curso
OBJETIVO: LOW POWER · LOW COST · LOW DEPENDENCY · HIGH RECOVERABILITY

PRESERVAR:
  ✅ health endpoints (api.healthgrowth.cl/health/ping)
  ✅ inbound messaging crítico
  ✅ CRM persistence
  ✅ backups
  ✅ alertas esenciales

SUSPENDER:
  🚫 ad campaigns
  🚫 mass outreach
  🚫 noncritical AI jobs
  🚫 content generation
  🚫 expensive background research
  🚫 optional automations

CÓMO ACTIVAR: Ver EMERGENCY_MODE_RUNBOOK.md
```

---

## 3. INVENTARIO DE DEPENDENCIAS AL PC LOCAL

| COMPONENT | LOCAL_DEPENDENCY | CLOUD_EQUIVALENT | CRITICALITY | MIGRATION_REQUIRED |
|-----------|-----------------|-----------------|-------------|-------------------|
| carlos-os API | **NINGUNA** — GCP VM | ✅ Ya en cloud | P0 | NO |
| n8n workflows | **NINGUNA** — GCP VM | ✅ Ya en cloud | P1 | NO |
| healthgrowth.cl | **NINGUNA** — Vercel | ✅ Ya en cloud | P0 | NO |
| api.healthgrowth.cl | **NINGUNA** — Cloudflare Tunnel | ✅ Ya en cloud | P0 | NO |
| GCS Backups | **NINGUNA** — cron en VM | ✅ Ya en cloud | P0 | NO |
| healthgrowth-web code | PC local + Vercel | GitHub (verificar push) | P1 | Verificar repo sync |
| VS Code / desarrollo | PC local | Web editor, Lovable | P2 | NO (sólo dev) |
| gcloud auth | PC local | Recuperable desde otro device con Google account | P1 | Preparar instrucciones |
| SSH keys .ssh/ | PC local | IAP SSH no necesita keys locales (gcloud maneja auth) | P1 | OK — gcloud IAP |
| .n8n local | PC local | n8n-patitas VM es producción | P3 | NONCRITICAL (es dev) |

**CONCLUSIÓN P0**: Ninguna operación crítica de clientes requiere que el PC de Carlos esté encendido. ✅

---

## 4. PC-OFF SURVIVAL TEST

### Test Diseñado (ejecutar desde GCP Console web o terminal móvil):

```bash
# 1. healthgrowth.cl — Vercel independiente
curl -I https://healthgrowth.cl  # EXPECTED: 200

# 2. API principal
curl https://api.healthgrowth.cl/health/ping  # EXPECTED: {"status":"ok"}

# 3. carlos-os via SSH (GCP IAP, no requiere IP pública)
gcloud compute ssh luisvillanuevaandrades_gmail_com@openclaw-bunker \
  --project=bunkermaestro-494818 \
  --zone=southamerica-west1-a \
  --tunnel-through-iap \
  --command="sudo systemctl status carlos-os.service"

# 4. n8n Docker status
gcloud compute ssh luisvillanuevaandrades_gmail_com@n8n-patitas \
  --project=bunkermaestro-494818 \
  --zone=southamerica-east1-c \
  --tunnel-through-iap \
  --command="docker ps"

# 5. Backups GCS
gcloud storage ls gs://bunkermaestro-backups-carlos/ | tail -5

# 6. Uptime monitoring (GCP Cloud Monitoring — verificar alertas activas)
```

### PC_OFF_SURVIVAL_GATE = PASS

**Verificado por arquitectura (2026-09-02):**
| Servicio | Sobrevive PC off | Evidencia |
|---------|-----------------|----------|
| carlos-os.service | ✅ YES | systemd en GCP VM |
| cloudflared-carlos-os.service | ✅ YES | systemd en GCP VM |
| api.healthgrowth.cl | ✅ YES | Cloudflare Tunnel, no IP hogar |
| healthgrowth.cl | ✅ YES | Vercel CDN |
| n8n-n8n-1 | ⚠️ UNVERIFIED | Docker restart policy no confirmada |
| GCS Backups | ✅ YES | Cron en VM, no PC |
| GCP Snapshots | ✅ YES | Scheduler GCP, no PC |
| Monitoring/Alerts | ✅ YES | GCP Cloud Monitoring |

**CAVEATS:**
- n8n Docker: verificar `docker inspect n8n-n8n-1 --format='{{.HostConfig.RestartPolicy.Name}}'` → debe ser `always` o `unless-stopped`
- gcloud auth desde móvil: requiere app Google autenticada (ver §28)

---

## 5. SERVICIO AUTO-RECOVERY AUDIT

| SERVICE | AUTO_START | AUTO_RESTART | HEALTHCHECK | FAILURE_ALERT |
|---------|-----------|-------------|------------|--------------|
| carlos-os.service | ✅ systemd enable | ✅ Restart=always | ✅ /health/ping cada 5min | ✅ GCP Uptime check |
| cloudflared-carlos-os.service | ✅ systemd enable | ✅ Restart=always | ⚠️ No check específico | ⚠️ Indirecto vía API check |
| n8n-n8n-1 (Docker) | ⚠️ Depende restart policy | ⚠️ Verificar | ❌ Sin check explícito | ❌ Sin alerta específica |
| n8n-caddy-1 (Docker) | ⚠️ Depende restart policy | ⚠️ Verificar | ❌ Sin check | ❌ Sin alerta |
| healthgrowth.cl (Vercel) | ✅ Serverless | ✅ Auto | ✅ Vercel nativo | ✅ Vercel nativo |
| GCS backup cron | ✅ crontab en VM | N/A | ❌ Sin check de éxito | ❌ Sin alerta backup failure |

**ACCIONES REQUERIDAS:**
1. SSH n8n-patitas → `docker inspect n8n-n8n-1 --format='{{.HostConfig.RestartPolicy.Name}}'`
   - Si no es `always`: `docker update --restart=always n8n-n8n-1 n8n-caddy-1`
2. Agregar alerta GCP para n8n-patitas VM
3. Agregar verificación backup GCS exitoso

---

## 6. INVENTARIO DE BACKUPS

| BACKUP_TARGET | LOCATION | FREQUENCY | RETENTION | ENCRYPTION | LAST_SUCCESS | RESTORE_TESTED |
|--------------|---------|-----------|-----------|-----------|-------------|----------------|
| carlos-os data (CRM, config) | gs://bunkermaestro-backups-carlos/ | Diaria 03:00 UTC | No documentada | GCS default (Google-managed) | 2026-08-31 (confirmado) | ❌ UNPROVEN |
| n8n SQLite DB | gs://bunkermaestro-backups-carlos/n8n/ | Diaria 03:30 UTC | No documentada | GCS default | 2026-08-31 (confirmado) | ❌ UNPROVEN |
| openclaw-bunker VM | GCP Snapshots | Diaria 04:00 UTC | 30 días | GCP managed | 2026-08-31 (confirmado) | ❌ UNPROVEN |
| n8n-patitas VM | GCP Snapshots | Diaria 04:00 UTC | 30 días | GCP managed | 2026-08-31 (confirmado) | ❌ UNPROVEN |
| healthgrowth-web code | Vercel (deployments) | Per push | Auto | TLS | — | N/A (Vercel rollback) |
| healthgrowth-web code | Git local (PC) | Manual | Manual | — | — | ❌ RIESGO si no en GitHub |

**PRIORIDAD: Testear restore de carlos-os data desde GCS (ver §7)**

---

## 7. RESTORE TEST (NO DESTRUCTIVO)

### Procedimiento de validación de backup carlos-os:

```bash
# SSH a openclaw-bunker
gcloud compute ssh luisvillanuevaandrades_gmail_com@openclaw-bunker \
  --project=bunkermaestro-494818 --zone=southamerica-west1-a --tunnel-through-iap

# Listar backups disponibles
gsutil ls gs://bunkermaestro-backups-carlos/

# Copiar último backup a directorio temporal (NO sobrescribir producción)
mkdir -p /tmp/restore-test-$(date +%Y%m%d)
gsutil cp -r gs://bunkermaestro-backups-carlos/<last-backup>/ /tmp/restore-test-$(date +%Y%m%d)/

# Verificar integridad
ls -la /tmp/restore-test-*/
# Verificar que existan: tenants/, crm/, scheduling/

# Verificar JSON válido en CRM
find /tmp/restore-test-*/ -name "*.json" -exec python3 -m json.tool {} > /dev/null \; -print | head -20
```

**RESTORE_GATE = PENDIENTE EJECUCIÓN POR CARLOS**

---

## 9. MAPA DE DEPENDENCIAS

```
DOMINIO: healthgrowth.cl
  → WEBSITE: Vercel (Next.js)
  → PROVIDER: Vercel | CRITICAL: YES | FALLBACK: GCP static hosting | MANUAL: GitHub Pages

API: api.healthgrowth.cl
  → APP: carlos-os (Node.js, GCP openclaw-bunker)
  → TUNNEL: Cloudflare Tunnel (cloudflared-carlos-os.service)
  → PROVIDER: GCP + Cloudflare | CRITICAL: YES | FALLBACK: Direct IP via GCP | MANUAL: SSH + port forward

WHATSAPP (futuro Patitas):
  → META Cloud API → webhook @ api.healthgrowth.cl/webhook
  → PROVIDER: Meta | CRITICAL: YES | FALLBACK: Manual WhatsApp Business App | MANUAL: Alicia responde manualmente

BOOKING:
  → slot_engine interno (carlos-os) | CRITICAL: YES | FALLBACK: Google Calendar manual | MANUAL: WhatsApp directo

N8N:
  → n8n-patitas (GCP VM Docker) | CRITICAL: P1 | FALLBACK: Manual | MANUAL: Procesar leads manualmente

BACKUPS:
  → GCS gs://bunkermaestro-backups-carlos/ | PROVIDER: GCP | CRITICAL: YES | FALLBACK: GCP Snapshots | MANUAL: VM snapshot manual

EMAIL:
  → SMTP (credencial en n8n) | CRITICAL: P2 | FALLBACK: Gmail directo | MANUAL: Email manual

INSTAGRAM:
  → Meta + ManyChat (n8n workflow) | CRITICAL: P2 | FALLBACK: Manual DMs | MANUAL: Alicia/Carlos responde

AI PROVIDERS:
  → Claude API (Anthropic) para ROKITO | CRITICAL: P1 | FALLBACK: GPT-4 (requiere código) | MANUAL: Respuesta manual
  → Tavily API para research | CRITICAL: P2 | FALLBACK: Google search manual | MANUAL: Sin impacto cliente
```

---

## 10. PROVIDER OUTAGE MATRIX

| PROVIDER OUTAGE | CUSTOMER_IMPACT | INTERNAL_IMPACT | FALLBACK | DATA_AT_RISK | RECOVERY |
|----------------|----------------|----------------|---------|-------------|---------|
| Vercel unavailable | healthgrowth.cl no carga | Sin nuevos leads web | GCP static backup | Ninguna | Deploy alternativo en GCP |
| GCP unavailable (full) | API down, n8n down | Operación completa suspendida | Ninguno automático | CRM en disco VM (backup GCS) | Restore en otro cloud |
| GCP southamerica-west1 down | carlos-os down | API inaccessible | — | — | Failover a otra región (manual) |
| Cloudflare unavailable | api.healthgrowth.cl inaccessible | Webhooks no llegan | IP directa (si se habilita) | Ninguna | Cambiar DNS temporalmente |
| Meta unavailable | WA/IG no funcionan | Sin mensajes entrantes | Manual | Ninguna | Alicia responde manualmente |
| AI provider (Anthropic) down | ROKITO no responde | Mensajes no procesados | Fallback response o GPT | Ninguna | Mensaje error genérico / GPT |
| n8n unavailable | Instagram workflow off, algunos pipelines | Pipelines n8n suspendidos | Manual | SQLite en VM | Restart Docker |
| Home internet unavailable | **NINGUNO en clientes** | Carlos sin SSH fácil | GCP Cloud Shell, móvil | Ninguna | SSH desde móvil vía gcloud |
| Instagram (Meta) unavailable | Sin DMs entrantes IG | — | — | Ninguna | Operación continúa sin IG |

---

## 11. EMERGENCY KILL SWITCHES

### Mecanismo: `/opt/carlos-os/data/emergency_mode.json`

```json
{
  "mode": "NORMAL",
  "pause_marketing_outbound": false,
  "pause_prospecting": false,
  "pause_social_publishing": false,
  "pause_noncritical_automations": false,
  "pause_ai_background_jobs": false,
  "updated_at": "2026-09-06T00:00:00Z",
  "updated_by": "carlos"
}
```

**Para pausar outbound (sin tocar backups ni CRM):**
```bash
# SSH al servidor
cat > /opt/carlos-os/data/emergency_mode.json << 'EOF'
{
  "mode": "STANDBY",
  "pause_marketing_outbound": true,
  "pause_prospecting": true,
  "pause_social_publishing": true,
  "pause_noncritical_automations": false,
  "pause_ai_background_jobs": false,
  "updated_at": "2026-09-06T00:00:00Z",
  "updated_by": "carlos"
}
EOF
# NO reiniciar el servicio — lee el archivo en cada ciclo
```

**Garantía de diseño:**
- ❌ STOP pause_marketing_outbound → afecta campañas/prospecting
- ✅ NEVER STOP backups — no están en este flag
- ✅ NEVER STOP CRM persistence — no está en este flag
- ✅ NEVER STOP inbound handling — el webhook siempre recibe
- ✅ NEVER STOP health monitoring — independiente

---

## 27. REUSABILIDAD — TEMPLATE TENANT

### Política de continuidad por tenant:

```json
{
  "tenant_id": "patitas_felices",
  "critical_modules": ["crm", "booking", "whatsapp_inbound"],
  "backup_policy": {"frequency_hours": 24, "location": "gcs", "retention_days": 30},
  "emergency_mode": {"auto_pause_outbound": true, "preserve_inbound": true},
  "recovery_contact": {"primary": "carlos@healthgrowth.cl", "secondary": "telegram_bot"},
  "channel_priority": ["whatsapp", "telegram", "email"],
  "outbound_pause_triggers": ["manual", "emergency_mode_flag"]
}
```

Template en: `data/tenants/_template/continuity_policy.json`

---

## 31. CLASIFICACIÓN DE DATOS

| CRITICALITY | DATOS | BACKUP PRIORITY |
|-------------|-------|----------------|
| MUST_SURVIVE | CRM clientes (consultas, citas, tutors), .env.production (sin secrets), business_profile.json | P0 — GCS diario + snapshot |
| IMPORTANT | n8n workflows SQLite, código /opt/carlos-os/, configuración systemd | P1 — GCS diario |
| REGENERABLE | Tests, logs, contenido generado por AI, outbox WhatsApp sandbox | P2 — Snapshot semanal |
| NONCRITICAL | Cache, archivos temporales, sesiones, demo data | No backup necesario |

---

## 32. RECOVERY TIME TARGETS

| SERVICIO | RTO (objetivo) | RPO (pérdida máx datos) | REALISTA |
|---------|---------------|------------------------|---------|
| API (carlos-os) | 5 min (systemd restart) | 0 (stateless API) | ✅ Alcanzable |
| CRM | 1 hora (restore GCS) | 24 horas (último backup) | ✅ Alcanzable |
| n8n | 30 min (Docker restart o restore snapshot) | 24 horas | ✅ Alcanzable |
| Website (healthgrowth.cl) | 0 (Vercel CDN) | 0 (CDN) | ✅ Alcanzable |
| Business channels (WA/IG) | Depende de Meta | 0 (no almacenamos estado WA) | ⚠️ Depende Meta |
| Research system | No en producción aún | N/A | N/A |

---

## 33. MONITORING / ALERTING

### Alertas GCP activas (2026-08-31):
- ✅ API DOWN: api.healthgrowth.cl/health/ping cada 5 min → alerta si falla
- ✅ CPU >80%: openclaw-bunker
- ✅ Disco >75%: openclaw-bunker

### Alertas FALTANTES:
- ❌ n8n VM CPU/Disco
- ❌ Backup GCS failure (si el cron falla silenciosamente)
- ❌ cloudflared tunnel health (independiente de API check)
- ❌ n8n container restart loop

### Agregar alerta backup failure:
```bash
# En crontab de openclaw-bunker, modificar backup script para:
# gsutil rsync ... && echo "BACKUP_SUCCESS" || (echo "BACKUP_FAIL" | mail -s "BACKUP FAIL" carlos@healthgrowth.cl)
```

---

## 34. EMERGENCY READINESS SUMMARY

```
================================================================
HEALTH GROWTH — EMERGENCY_READINESS
Fecha: 2026-09-06
================================================================
CLOUD_CORE          = PASS (openclaw-bunker activo, carlos-os.service ACTIVE)
API                 = PASS (api.healthgrowth.cl/health/ping 200 OK)
CRM                 = PASS (data/crm/ accesible, REAL records)
N8N                 = PARTIAL (activo pero restart policy y DNS no verificados)
BACKUP              = PARTIAL (crons configurados, restore UNPROVEN)
WEBSITE             = PASS (healthgrowth.cl en Vercel)
BUSINESS_CHANNEL    = PARTIAL (Patitas pre-WABA, HG number pending)
INSTAGRAM           = PARTIAL (Patitas workflow INACTIVE/DNS, HG no configurado)
MFA_RECOVERY        = UNVERIFIED (Carlos debe verificar recovery codes offline)
================================================================
PC_OFF_SURVIVAL     = PASS
AUTO_RECOVERY       = PARTIAL (n8n Docker restart policy pendiente)
MOBILE_OPERATION    = PARTIAL (posible vía gcloud + terminal, sin runbook)
================================================================
```

---

## 38. FALSE-PASS REVIEW

| Pregunta | Respuesta |
|----------|-----------|
| ¿El cloud sobrevive PC off? | ✅ YES — verificado por arquitectura |
| ¿Restore ha sido testeado? | ❌ NO — pendiente ejecución |
| ¿Outbound pausable sin detener backups? | ✅ YES — diseño de flags §11 |
| ¿Recovery credentials offline? | ❌ UNVERIFIED — Carlos debe verificar |
| ¿HG número separado de Patitas? | ✅ YES — vars separadas en .env |
| ¿Instagram standby-safe vs abandonado? | ⚠️ PENDIENTE — ver INSTAGRAM_STANDBY_RUNBOOK.md |
| ¿Research agent READY_FOR_CASE? | ✅ YES — ver INVESTIGATIVE_AGENT_SPEC.md |
| ¿Research agent usa evidencia oficial? | ✅ YES — diseñado así |
| ¿Continuidad reutilizable por futuros tenants? | ✅ YES — template §27 |
| ¿Existe un runbook de emergencia corto? | ✅ YES — EMERGENCY_MODE_RUNBOOK.md |

---

*Generado por POWER lane | Misión ALL-HAZARDS CONTINUITY | 2026-09-06*
*Próxima revisión recomendada: 2026-10-06 o post-First E2E*
