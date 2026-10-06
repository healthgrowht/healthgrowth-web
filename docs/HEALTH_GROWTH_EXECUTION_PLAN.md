# HEALTH GROWTH — EXECUTION PLAN
# MISIÓN: AUTONOMOUS CTO v2.0
# ÚLTIMA ACTUALIZACIÓN: 2026-09-01 (sesión completa)

## STATUS GLOBAL

```
MISSION_START:     2026-09-01
LAST_UPDATED:      2026-09-01 (end of day)
CURRENT_WAVE:      5 COMPLETE → 6 BLOCKED (datos Alicia + WABA)
TEST_RESULTS:      27 PASS / 4 FAIL (esperados) / 3 WARN
BLOCKERS_CLEARED:  WAVE 1,2,3,4 complete. WAVE 5 parcial.
```

---

## P0 BLOCKERS (impiden primer E2E WhatsApp real)

| ID | Blocker | Owner | Status | Próximo paso |
|----|---------|-------|--------|-------------|
| P0-1 | WHATSAPP_TOKEN env mismatch | Carlos remote | **PATCH_PREPARED** | `sudo cp /tmp/whatsapp_engine_patched.js /opt/carlos-os/src/whatsapp/whatsapp_engine.js && sudo systemctl restart carlos-os.service` |
| P0-2 | WABA Patitas no registrado en Meta | Carlos + Meta | **EXTERNAL_BLOCKER** | Carlos debe registrar WABA en Meta Business Manager. Necesita decidir número WA primero (ALICIA_DATA_REQUIRED.md §7). |
| P0-3 | Cuenta Alicia no existe | Carlos remote | **SCRIPT_READY** | `bash /tmp/haq01_create_alicia.sh --local` en openclaw-bunker (SCP /tmp primero). Necesita email + pass de Alicia. |
| P0-4 | Precios = null en business_profile.json | Alicia data | **WAITING_DATA** | Ver ALICIA_DATA_REQUIRED.md §4. Completar y hacer `POST /api/business-profile/update` o editar directamente. |
| P0-5 | Phone/address = REQUIRED_BUSINESS_INPUT | Alicia data | **WAITING_DATA** | Ver ALICIA_DATA_REQUIRED.md §1-3. |

---

## P1 BLOCKERS (seguridad/fiabilidad piloto)

| ID | Blocker | Owner | Status | Próximo paso |
|----|---------|-------|--------|-------------|
| P1-1 | PATITAS_WA_ME + PATITAS_BOOKING_LINK ausentes de .env | Carlos | **PENDING** | Añadir a .env.production después de decidir número y link de agenda |
| P1-2 | n8n [PF] Instagram ROKITO inactivo | Carlos | **VERIFIED_INACTIVE** | Activar DESPUÉS de resolver DNS (HAQ-06) |
| P1-3 | runDueReminders nunca se llama | Carlos remote | **PATCH_PREPARED** | Ver PATCH_REMINDER_RUNNER.md. Archivos en /tmp del servidor. |
| P1-4 | Agenda in-memory pierde estado al reiniciar | Carlos | **DECISION_NEEDED** | Opciones: JSON file persist (simple), GCal API (mejor UX), Cal.com self-hosted |
| P1-5 | ALICIA_TELEGRAM_CHAT_ID vacío | Alicia | **WAITING_ALICIA** | Alicia inicia conversación con @healthgrowth_bot (o el bot configurado) |
| P1-6 | HAQ-01 cuenta Alicia | Carlos | **SCRIPT_READY** | haq01_create_alicia.sh preparado en scratchpad |
| P1-7 | HAQ-02 password reset demo | Carlos | **WAITING_PASSWORD** | Carlos decide nueva contraseña para demo |
| P1-8 | HAQ-06 n8n DNS | Carlos | **DESIGN_PENDING** | Opción A: Cloudflare Tunnel nuevo servicio. Opción B: Cloudflare DNS A record a n8n-patitas IP. |

---

## P2 (replicabilidad multi-tenant)

| ID | Blocker | Owner | Status |
|----|---------|-------|--------|
| P2-1 | business_profile.json hardcoded a Patitas | Carlos | AUDIT_DONE, refactor next |
| P2-2 | ROKITO tiene refs hardcoded a Alicia/Puerto Montt | Carlos | AUDIT_DONE, refactor next |
| P2-3 | No existe tenant/company config universal | Carlos | DESIGN_PENDING |
| P2-4 | Client Dashboard no existe en Lovable | Carlos | BLOCKED_LOVABLE |
| P2-5 | slot_engine horarios hardcoded | Carlos | CONFIG_PENDING |

---

## WAVES STATUS

### WAVE 0 — TASK LEDGER ✅ COMPLETE
- [x] HEALTH_GROWTH_EXECUTION_PLAN.md creado

### WAVE 1 — AI RESEARCH 2026 ✅ COMPLETE
- [x] Fork agent ejecutado → AI_STACK_RESEARCH_2026.md
- [x] ADR_STACK_2026.md — KEEP_CURRENT_STACK decided
- [x] Alternativas evaluadas: Cursor, Devin, OpenHands, Trigger.dev, Neon, Clerk, Firebase Studio
- [x] WhatsApp pricing Oct 2026 noted
- [x] STACK_VERDICT = KEEP_CURRENT_STACK

### WAVE 2 — FORENSIC SYSTEM INVENTORY ✅ COMPLETE
- [x] carlos-os.service: ACTIVE, cloudflared-carlos-os.service: ACTIVE
- [x] n8n-n8n-1 + n8n-caddy-1: Up 5 days
- [x] api.healthgrowth.cl/health/ping: 200 OK
- [x] whatsapp_engine.js: BUG_FOUND (WHATSAPP_TOKEN mismatch + getMissingCredentials bug)
- [x] business_profile.json: all prices null, phone/address = REQUIRED_BUSINESS_INPUT
- [x] CRM: 944 consultas, 62 citas — accesible
- [x] reminder_scheduler.js: runDueReminders NEVER CALLED
- [x] n8n [PF] Instagram: INACTIVE (active=0)
- [x] n8n HealthGrowth-Pipeline-V1: ACTIVE
- [x] n8n ISAPRE-Etapa-Inicial-Transporte: ACTIVE
- [x] .env.production: auditado — 11 vars vacías, 4 ausentes
- [x] n8n docker-compose.yml: basic auth password en plaintext (security finding)
- [x] Instagram → n8n+ManyChat+Claude (NOT carlos-os) — aclarado

### WAVE 3 — ARCHITECTURE DECISION ✅ COMPLETE
- [x] ADR_STACK_2026.md — stack decision documentado
- [x] ARCHITECTURE.md — mapa completo del sistema verificado
- [x] SYSTEM_STATE.md — estado actual verificado con evidencia

### WAVE 4 — AGENT/TEST HARNESS ✅ COMPLETE
- [x] AGENTS.md revisado (healthgrowth-web → Next.js)
- [x] ARCHITECTURE.md creado con mapa completo del sistema
- [x] SYSTEM_STATE.md creado con evidencia verificada
- [x] test_patitas_e2e.js — 31 tests, 27 PASS / 4 FAIL (Alicia data) / 3 WARN
- [x] Test ejecutado en servidor → /opt/carlos-os/data/test_results_e2e.json
- [x] ALICIA_DATA_REQUIRED.md — formulario completo de datos pendientes

### WAVE 5 — PATITAS P0 BLOCKERS ⚠️ PARTIAL
- [x] PATCH-001 preparado: whatsapp_engine.js (env alias + bug fix)
  - Backup: whatsapp_engine.js.bak_envfix_20260901
  - En servidor: /tmp/whatsapp_engine_patched.js
  - SYNTAX_OK verificado
  - **PENDING CARLOS AUTH para deploy**
- [x] PATCH-002 preparado: reminder_runner.js (new file) + dashboard_server.js (2 líneas)
  - En servidor: /tmp/reminder_runner.js
  - SYNTAX_OK verificado
  - **PENDING CARLOS AUTH para deploy**
- [x] HAQ-01 script preparado: haq01_create_alicia.sh
  - En scratchpad local, SCP a /tmp pendiente
  - **PENDING CARLOS para ejecutar (necesita email + pass Alicia)**
- [ ] P0-4: Precios — WAITING ALICIA DATA
- [ ] P0-5: Phone/address — WAITING ALICIA DATA

### WAVE 6 — FIRST PATITAS E2E ❌ BLOCKED
- [ ] Simular mensaje inbound TEST mode — BLOCKED by P0-1 (env mismatch)
- [ ] Verificar routing ROKITO — BLOCKED
- [ ] Verificar CRM creation — BLOCKED
- [ ] Verificar slot offer — BLOCKED
- [ ] Verificar outbox draft — BLOCKED
- [ ] Documentar E2E result — BLOCKED
- **UNBLOCK: Aplicar PATCH-001 + PATCH-002 primero**

### WAVE 7-14 — PENDIENTES
- WAVE 7: Fix failures (post Wave 6)
- WAVE 8: Wire reminder notifyFn (PATCH-002 completa esto)
- WAVE 9: Replicabilidad — parameterize ROKITO, universal tenant config
- WAVE 10: Client Dashboard en Lovable
- WAVE 11: Multi-tenant isolation audit
- WAVE 12: Security/recovery — backup restore test
- WAVE 13: HG Acquisition Engine audit
- WAVE 14: Final regression

---

## TASK LOG

| Timestamp | Action | Result |
|-----------|--------|--------|
| 2026-09-01T08:00 | Misión autónoma iniciada | OK |
| 2026-09-01 | AI research fork ejecutado | COMPLETE → AI_STACK_RESEARCH_2026.md |
| 2026-09-01 | Forensic audit completo SSH IAP | 2 VMs, todos servicios verificados |
| 2026-09-01 | ADR_STACK_2026.md | KEEP_CURRENT_STACK |
| 2026-09-01 | ARCHITECTURE.md | Mapa completo sistema |
| 2026-09-01 | ALICIA_DATA_REQUIRED.md | Formulario datos Alicia |
| 2026-09-01 | PATCH-001 preparado | whatsapp_engine_patched.js — SYNTAX_OK |
| 2026-09-01 | PATCH-002 preparado | reminder_runner.js — SYNTAX_OK |
| 2026-09-01 | test_patitas_e2e.js | 27 PASS / 4 FAIL / 3 WARN |
| 2026-09-01 | Bug encontrado: getMissingCredentials() | !x > 5 siempre false — fixed en PATCH-001 |
| 2026-09-01 | n8n [PF] workflow | CONFIRMED INACTIVE (active=0) |
| 2026-09-01 | HAQ-01 script | haq01_create_alicia.sh preparado |
| 2026-09-01 | SYSTEM_STATE.md | Estado verificado con evidencia |

---

## EVIDENCE LOG

| Component | Status | Evidence | Date |
|-----------|--------|----------|------|
| carlos-os.service | ACTIVE | journalctl SSH | 2026-09-01 |
| cloudflared-carlos-os | ACTIVE | systemctl SSH | 2026-09-01 |
| n8n Docker | Up 5 days | docker ps SSH | 2026-09-01 |
| api.healthgrowth.cl/health/ping | 200 OK | E2E test API-01 | 2026-09-01 |
| whatsapp_engine.js | BUG: env mismatch + getMissingCredentials bug | grep SSH | 2026-09-01 |
| business_profile.json | prices=null, phone=REQUIRED | cat SSH | 2026-09-01 |
| n8n [PF] Instagram | INACTIVE (active=0) | sqlite3 SSH | 2026-09-01 |
| WHATSAPP_ACCESS_TOKEN | EMPTY | grep .env.production | 2026-09-01 |
| ALICIA_TELEGRAM_CHAT_ID | EMPTY | grep .env.production | 2026-09-01 |
| n8n basic auth pass | PLAINTEXT en docker-compose.yml | SECURITY FINDING | 2026-09-01 |
| PATCH-001 | SYNTAX_OK en /tmp | node --check SSH | 2026-09-01 |
| PATCH-002 | SYNTAX_OK en /tmp | node --check SSH | 2026-09-01 |

---

## PATCHES LOG

| ID | Archivos | Status | Riesgo | Restart | Descripción |
|----|---------|--------|--------|---------|-------------|
| PATCH-001 | `src/whatsapp/whatsapp_engine.js` | **PREPARED_PENDING_AUTH** | LOW | YES | Fix WHATSAPP_TOKEN→WHATSAPP_ACCESS_TOKEN alias + getMissingCredentials bug |
| PATCH-002 | `src/scheduling/reminder_runner.js` (NUEVO) + `scripts/dashboard_server.js` (2 líneas) | **PREPARED_PENDING_AUTH** | LOW | YES | Wire runDueReminders cada 5 min via reminder_runner |

**Para aplicar PATCH-001:**
```bash
# En openclaw-bunker:
sudo cp /tmp/whatsapp_engine_patched.js /opt/carlos-os/src/whatsapp/whatsapp_engine.js
sudo systemctl restart carlos-os.service
# Verificar:
curl https://api.healthgrowth.cl/health/ping
journalctl -u carlos-os -n 20 --no-pager
```

**Para aplicar PATCH-002:**
```bash
# SCP desde local:
gcloud compute scp scratchpad/reminder_runner.js luisvillanuevaandrades_gmail_com@openclaw-bunker:/tmp/reminder_runner.js \
  --project=bunkermaestro-494818 --zone=southamerica-west1-a --tunnel-through-iap
# En servidor: copiar al lugar correcto y editar dashboard_server.js (ver PATCH_REMINDER_RUNNER.md)
sudo cp /tmp/reminder_runner.js /opt/carlos-os/src/scheduling/reminder_runner.js
# Añadir 2 líneas en dashboard_server.js (ver PATCH_REMINDER_RUNNER.md §CAMBIO 2)
sudo systemctl restart carlos-os.service
```

---

## ARCHIVOS CREADOS (sesión 2026-09-01)

| Archivo | Tipo | Contenido |
|---------|------|-----------|
| docs/HEALTH_GROWTH_EXECUTION_PLAN.md | Plan | Este archivo |
| docs/ARCHITECTURE.md | Docs | Mapa completo sistema verificado |
| docs/ALICIA_DATA_REQUIRED.md | Docs | Formulario datos Patitas |
| docs/ADR_STACK_2026.md | ADR | KEEP_CURRENT_STACK |
| docs/PATCH_REMINDER_RUNNER.md | Patch doc | PATCH-002 instrucciones |
| docs/AI_STACK_RESEARCH_2026.md | Research | 30+ tools evaluados |
| docs/SYSTEM_STATE.md | Estado | Estado actual verificado |
| scratchpad/whatsapp_engine_patched.js | Patch | PATCH-001 (también en /tmp en servidor) |
| scratchpad/reminder_runner.js | Patch | PATCH-002 (también en /tmp en servidor) |
| scratchpad/test_patitas_e2e.js | Test | 31 tests E2E (también en /tmp en servidor) |
| scratchpad/haq01_create_alicia.sh | Script | Crear cuenta Alicia |

---

## PRÓXIMAS ACCIONES (por prioridad)

```
CARLOS — ESTA SEMANA:
1. Obtener email + pass inicial para Alicia
2. SCP haq01_create_alicia.sh a /tmp en openclaw-bunker
3. Ejecutar HAQ-01 en servidor (bash /tmp/haq01_create_alicia.sh --local)
4. Autorizar PATCH-001: sudo cp + systemctl restart carlos-os
5. Autorizar PATCH-002: SCP + editar + restart

ALICIA — ESTA SEMANA:
1. Proveer datos: teléfono, dirección, precios, instrucciones
2. Decidir número WhatsApp (actual vs nuevo)
3. Iniciar chat con Telegram bot

CARLOS — CON ALICIA:
1. Completar business_profile.json con datos reales
2. Registrar WABA en Meta Business Manager
3. Configurar ALICIA_TELEGRAM_CHAT_ID en .env.production

META (externo):
1. Aprobación WABA (horas-días)
```
