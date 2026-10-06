# ADR: AI ENGINEERING STACK 2026
# FECHA: 2026-09-01 | STATUS: DECIDED

## DECISIÓN

**KEEP_CURRENT_STACK** con mejoras incrementales de harness.

No hay migración de plataforma justificada. El stack actual (Node.js + GCP + n8n + Lovable + 
Claude Code) es apropiado para la etapa actual del producto.

---

## OPCIONES CONSIDERADAS

| Opción | Descripción | Decisión |
|--------|-------------|----------|
| KEEP_CURRENT_STACK | Node.js + GCP + n8n + Lovable + Claude Code | ✅ ELEGIDA |
| REPLACE_AGENT | Cambiar Claude Code por Cursor o Devin | ❌ NO |
| HYBRID_MULTI_AGENT | Claude Code + Cursor parallel | ⬜ FUTURO posible |
| PARTIAL_MIGRATION | Migrar DB a Neon/Supabase ahora | ⬜ CUANDO >20 clientes |
| REPLACE_N8N | Migrar a Trigger.dev o Make | ❌ NO |
| REPLACE_LOVABLE | Migrar a Replit o Bolt | ❌ NO |
| REPLACE_AUTH | Migrar a Clerk/Auth0 | ❌ NO |

---

## ANÁLISIS POR CATEGORÍA

### CODING AGENT — Claude Code (MANTENER)

**Por qué mantener:**
- Terminal access real (SSH, shell, file ops)
- MCP servers (Lovable, Notion, Gmail, Chrome)
- Background execution (fork agents)
- Multi-step autonomy demostrada en este proyecto
- Artifacts para outputs visuales
- Context resilience (compaction, memory files)
- Windows support nativo (PowerShell + Bash)

**Alternativas descartadas:**
- Cursor: excelente para code completion, background agents aún maduros; sin MCP comparable; mejor UX para desarrollo interactivo pero menos autónomo para tareas largas
- Devin: U$500/mes mínimo; overkill para este estado del producto; menos control
- OpenHands: OSS interesante (72% SWE-bench con Claude opus), útil para batch tasks independientes en el futuro; no reemplaza Claude Code para arquitectura y diseño

**Uso futuro posible:** OpenHands para tareas de programación repetitivas/paralelas con presupuesto bajo.

### FRONTEND — Lovable (MANTENER)

**Por qué mantener:**
- Proyecto canónico activo (carlos-os-dashboard.lovable.app)
- React + TypeScript + Tailwind + shadcn/ui
- MCP integration con Claude Code
- No hay razón técnica para migrar

**Firebase Studio descartado:** sunsetting previsto marzo 2027.
**Bolt/v0:** más orientados a prototipos rápidos, menos a producto en evolución.

### AUTOMATION — n8n self-hosted (MANTENER)

**Por qué mantener:**
- Gratis (Community Edition, self-hosted)
- Control total de datos
- Workflows activos en producción (ISAPRE, HG Pipeline)
- Familiar al equipo

**Trigger.dev v3:** mejor para code-first, TypeScript nativo; considerar si los workflows se 
vuelven más complejos de mantener en n8n. No migrar ahora.

### DATABASE — JSON files → PostgreSQL gradual

**Ruta actual (correcta):**
```
JSON_ONLY (actual, producción)
→ DUAL (JSON + DB en paralelo)
→ DB_ONLY (cuando validado)
```

**No hacer cutover ahora.** Esperar que:
1. Patitas E2E funcione
2. Haya >3 clientes activos
3. JSON performance sea un problema medible

**Para escala (>20 clientes):**
- Neon (adquirido por Databricks 2026): mejor precio/tenant para multi-tenant serverless
- Supabase: si se decide mover a su ecosistema (Auth + DB + Storage)
- Cloud SQL: si se queda en GCP y necesita control total

### AUTH — Custom (MANTENER)

**Por qué mantener:**
- PBKDF2-SHA512 (100k iter, timing-safe) — calidad alta
- RBAC multi-tenant implementado
- HttpOnly + SameSite=Strict + Secure
- Cero costo adicional

**Clerk:** mejor experiencia de dev, multi-tenant nativo, pero U$25+/mes y lock-in.
No hay razón para migrar auth funcional y seguro.

### WHATSAPP — WhatsApp Cloud API directa (MANTENER DIRECCIÓN)

**Cambio de pricing WA (octubre 2026):** conversaciones de servicio dentro de 24h
ahora tienen costo (antes gratis). Sigue siendo barato a volumen bajo.
Para Patitas: <500 conversaciones/mes → costo mínimo.

**Meta Embedded Signup (futuro):** permite que Health Growth sea "Tech Provider"
y que clientes configuren su WABA en ~10 minutos sin intervención manual.
Preparar cuando haya >5 clientes activos.

---

## SCORES FINALES (investigación 2026-09-01)

| Tool | Autonomy | Terminal | Multi-Agent | Cost | HG Score |
|------|----------|----------|-------------|------|----------|
| Claude Code | 9 | 10 | 9 | Med | **9.5** |
| Cursor | 7 | 8 | 7 | Med | 7 |
| Devin | 8 | 8 | 6 | High | 5 |
| OpenHands | 7 | 8 | 6 | Free/Low | 7 |
| Lovable | N/A | N/A | N/A | Med | **9 (frontend)** |
| n8n self-hosted | N/A | N/A | N/A | Free | **9 (automation)** |

---

## RECOMENDACIONES

```
BEST_PRIMARY_AGENT    = Claude Code (Anthropic)
BEST_SECONDARY_AGENT  = OpenHands (batch tasks, futuro)
BEST_FRONTEND_AGENT   = Lovable (SPA, canónico)
BEST_DATABASE         = JSON now → Neon when scaling
BEST_AUTOMATION       = n8n Community self-hosted
BEST_AUTH             = Keep custom

STACK_VERDICT = KEEP_CURRENT_STACK
MIGRATION_RISK = LOW (no migración planeada)
COST_OPTIMIZATION = Downgrade openclaw-bunker e2-standard-2 → e2-medium (~50% VM cost)
```

---

## FUENTES

- AI_STACK_RESEARCH_2026.md (fork agent, 2026-09-01)
- Anthropic Claude Code docs 2026
- Lovable docs 2026
- n8n changelog v2.26.x
- Meta WhatsApp Cloud API pricing update Oct 2026
- Neon acquisition announcement (Databricks)
