# HG-Security — Seguridad del Ecosistema Health Growth
Versión: 1.0 | Fecha: 2026-06-22

---

## Propósito

Proteger todos los accesos, tokens, APIs y datos del ecosistema
para crecer sin comprometer la seguridad ni la reputación del negocio.

**Regla básica**: Si un dato se filtra, el daño puede ser mayor que cualquier ingreso generado.

---

## Inventario de Accesos Críticos

### GCP (Google Cloud Platform)
| Recurso | Acceso | Estado |
|---------|--------|--------|
| Proyecto `bunkermaestro-494818` | Console GCP + gcloud CLI | ✅ Solo IAP-SSH |
| VM `n8n-patitas` | SSH via IAP | ✅ IP pública bloqueada |
| VM `openclaw-bunker` | SSH via IAP | ✅ Sin IP pública |
| Firewall | IAP only | ✅ Hardened 2026-06-18 |

**Comandos SSH seguros:**
```bash
gcloud compute ssh carlo@n8n-patitas --project=bunkermaestro-494818 --zone=southamerica-east1-c --tunnel-through-iap
gcloud compute ssh carlo@openclaw-bunker --project=bunkermaestro-494818 --zone=southamerica-west1-a --tunnel-through-iap
```

### n8n
| Item | Estado | Riesgo |
|------|--------|--------|
| URL admin | https://n8n.healthgrowth.cl | Solo HTTPS |
| Puerto 5678 | ❌ Cerrado públicamente | ✅ Correcto |
| API key | Credencial interna | No exponer |
| Webhooks | HTTPS only | ✅ Correcto |

### Notion
| Item | Estado |
|------|--------|
| CRM `👥 Clientes` | Acceso privado |
| DB ROKITO | Acceso privado |
| DB CHIMI | Acceso privado |
| Integration token | Var entorno n8n |

### Claude API
| Item | Estado |
|------|--------|
| ANTHROPIC_API_KEY | Variable de entorno n8n |
| No exponer en código | ✅ Regla activa |
| Límite de gasto | [TODO: configurar en Anthropic Console] |

### ManyChat
| Item | Estado |
|------|--------|
| API Token | Variable de entorno n8n |
| Cuenta | Starter ($15 USD/mes) |

---

## Reglas de Seguridad

### Variables de Entorno — Regla Absoluta
❌ NUNCA hardcodear tokens en:
- Código del repositorio
- Archivos .env commiteados a git
- Documentos en repos públicos
- Logs de n8n visibles

✅ SIEMPRE en:
- Variables de entorno del servidor (n8n → Settings → Variables)
- `.env.local` (añadido a .gitignore)
- GCP Secret Manager para secretos críticos

### Exposición de Servicios
| Servicio | Debe estar expuesto | Cómo |
|---------|--------------------|----|
| n8n UI | Solo HTTPS | Caddy reverse proxy |
| Webhooks n8n | Solo HTTPS | URL pública necesaria |
| Puerto 5678 | ❌ Nunca público | Firewall bloqueado |
| SSH VMs | ❌ Nunca IP directa | Solo IAP |
| Notion | Solo via API | Token privado |

---

## Estado del .gitignore

Verificar que el `.gitignore` incluye:
```gitignore
.env
.env.local
.env.*.local
*.key
*.pem
secrets/
```

---

## MFA — Autenticación de Dos Factores

| Cuenta | MFA | Prioridad |
|--------|-----|-----------|
| Google (GCP) | [TODO: verificar] | CRÍTICO |
| Anthropic Console | [TODO: verificar] | ALTA |
| ManyChat | [TODO: verificar] | ALTA |
| Notion | [TODO: verificar] | MEDIA |
| Vercel (cuando se active) | [TODO: configurar] | ALTA |

---

## Backups

### n8n
| Backup | Ruta | Frecuencia |
|--------|------|-----------|
| Pre-restore backup | `/home/carlo/n8n_prerestore_backup_20260618_025923` | Existente |
| Repair backup | `/home/carlo/n8n_repair_backup_20260617_221616` | Existente |
| Backup automático | [TODO: configurar cron diario] | Pendiente |

### Notion CRM
- Exportar CSV mensualmente: Settings → Export → CSV
- Guardar en Google Drive

---

## Checklist de Seguridad Pre-Launch

Antes de activar cualquier servicio en producción real:

- [ ] Variables de entorno configuradas en n8n (no en código)
- [ ] .gitignore actualizado para incluir .env files
- [ ] MFA activo en GCP, Anthropic, ManyChat
- [ ] Webhooks solo en HTTPS
- [ ] Puertos innecesarios cerrados en firewall GCP
- [ ] Sin credenciales hardcodeadas en ningún archivo
- [ ] Límite de gasto configurado en Anthropic Console
- [ ] Logs de n8n no muestran tokens o datos sensibles
- [ ] Backup de n8n antes de cualquier cambio grande

---

## Regla Anti-Moltbot/OpenClaw

No instalar Moltbot ni activar OpenClaw en modo autónomo hasta que:
1. El ecosistema base esté estable y en producción (+30 días operativo)
2. Se haya auditado cada permiso que tendrá el agente
3. Se hayan definido límites claros: qué puede hacer y qué NO puede hacer
4. Carlos haya aprobado explícitamente cada nivel de autonomía

---

## Separación Personal/Empresa

| Tipo | Personal | Empresa |
|------|---------|--------|
| Email | luisvillanuevaandrades@gmail.com | contacto@healthgrowth.cl / agenda.salud.digital@gmail.com |
| WhatsApp | Personal | +56 9 5101 7947 (WA Business HG) |
| Instagram | Personal | @healthgrowthspa |
| Google Drive | Personal | [TODO: Drive corporativo] |
| Notion | Compartido (por ahora) | [TODO: workspace separado cuando escale] |

---

## Alertas de Seguridad

Configurar alertas en:
- GCP: alertas de facturación (umbral: $50 USD/mes)
- Anthropic: alertas de uso (umbral: $10 USD/mes)
- ManyChat: alertas de conversaciones (umbral según plan)
- n8n: notificación de workflows fallidos (ya configurado via email)
