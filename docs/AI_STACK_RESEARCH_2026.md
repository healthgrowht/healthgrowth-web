# AI STACK RESEARCH 2026
# Fecha: 2026-09-01 | Investigador: fork agent | Misión: Health Growth stack decision

---

## CODING AGENTS

| Tool | Autonomy | Terminal | SSH | Multi-Agent | Background | Browser | MCP | Windows | Cost/mo | Lock-in | HG Score |
|------|----------|----------|-----|-------------|------------|---------|-----|---------|---------|---------|----------|
| **Claude Code** | 9/10 | ✅ | ✅ (IAP) | ✅ Subagents+Teams | ✅ | ✅ | ✅ Nativo | ✅ | $20–$200 | Bajo | **10/10** |
| **OpenAI Codex CLI/Cloud** | 8/10 | ✅ | ✅ | ✅ Cloud tasks | ✅ (cloud) | ⚠️ limitado | ⚠️ | ✅ | $8–$200 | Medio | 7/10 |
| **Cursor** | 7/10 | ✅ | ⚠️ | ⚠️ beta | ✅ Cloud VMs | ✅ | ✅ | ✅ | $20–$200 | Medio | 7/10 |
| **GitHub Copilot** | 7/10 | ✅ | ⚠️ | ⚠️ limitado | ✅ (GitHub Actions) | ⚠️ | ⚠️ | ✅ | $10–$100 | Alto (MSFT) | 6/10 |
| **Windsurf (Codeium/Cognition)** | 7/10 | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ✅ | $0–$200 | Medio | 6/10 |
| **Replit Agent** | 7/10 | ✅ | ✅ | ⚠️ | ✅ | ⚠️ | ⚠️ | ✅ Web | $20–$100 | Alto | 5/10 |
| **Devin (Cognition)** | 8/10 | ✅ | ✅ | ⚠️ | ✅ | ✅ | ⚠️ | ✅ Web | $20–enterprise | Alto | 5/10 |
| **OpenHands** | 8/10 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ Self | Free (self) | **Nulo** | 8/10 |
| **Goose (Block)** | 7/10 | ✅ | ✅ | ⚠️ | ⚠️ | ⚠️ | ✅ Nativo | ✅ | Free | **Nulo** | 7/10 |
| **Gemini CLI / Code Assist** | 6/10 | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ✅ | Free/workspace | Medio (Google) | 4/10 |
| **Aider** | 6/10 | ✅ | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ✅ | Free (trae tu LLM) | **Nulo** | 5/10 |
| **Firebase Studio** | 4/10 | ⚠️ | ❌ | ❌ | ❌ | ⚠️ | ⚠️ | ✅ Web | Free (sunsetting 2027) | Alto | 1/10 |

### Notas Claude Code 2026
- Subagents: workers aislados en sesión, paralelo nativo
- Agent Teams: sesiones peer que se comunican (beta)
- Background Agents: sesiones paralelas independientes
- MCP: nativo, soporte browsers/SSH/GCP/Notion/Gmail/Lovable
- Skills: instrucciones reutilizables (YAML) por proyecto
- Hooks: shell commands en eventos (pre/post tool)
- CLAUDE.md: context persistence entre sesiones
- Costo real: Pro $20/mo; 10 agentes paralelos = 10x token burn (~$50-65/día activo intensivo)
- **Riesgo**: subagentes sin límite de presupuesto pueden ser muy costosos

### Notas OpenAI Codex 2026
- Codex CLI: 88,600+ GitHub stars, disponible en VS Code, web, iOS, Amazon Bedrock
- Cloud tasks: containers aislados, repos completos, shell + tests
- Plans: Go $8, Plus $20 (ChatGPT+), Pro+ $100 (nuevo abril 2026), Pro 20x $200/mo
- SWE-bench: GPT-5 Codex ~70%+ (no verificado independientemente)

### Notas Cursor 2026
- Cloud Agents (mayo 2026): VMs aisladas con terminal, browser, desktop completo
- Multi-repo: sí (mayo 2026)
- Plans: Free, Pro $20, Pro+ $60, Ultra $200, Teams $40/usuario
- Para uso diario de agentes: Pro+ mínimo recomendado

### Notas GitHub Copilot 2026
- Coding Agent: GitHub Issue → PR autónomo en GitHub Actions
- Pricing: Pro $10, Pro+ $39, Max $100/mo (créditos $15/$70/$200)
- Desde junio 2026: "GitHub AI Credits" ($0.01 cada uno), reemplaza premium requests
- Code review con context + auto-fix PR integrado

### Notas Devin 2026
- Precio bajó de $500 → $20/mo (Core)
- Enterprise: pricing privado, foco en contratos grandes
- SWE-bench: 13.86% (benchmark real, no interno)
- Debilidad: requiere contexto de negocio, se atasca en loops

### Notas OpenHands 2026
- OpenHands + CodeAct v3 + Claude Opus 4.6: **68–72% SWE-bench Verified** ← mejor open source
- 70K+ GitHub stars, $18.8M Series A
- Self-hosteable, soporta 100+ LLM providers incluyendo Ollama local
- **Mejor benchmark de todos los agentes open-source**

### Notas Firebase Studio
- ⚠️ **SUNSETTING**: nuevos workspaces deshabilitados junio 22, 2026. Sunset marzo 22, 2027
- No usar para proyectos nuevos

---

## APP BUILDERS

| Tool | Frontend | Backend | Auth | DB | Git Export | Multi-tenant | Domain | Price/mo | Lock-in |
|------|----------|---------|------|----|------------|--------------|--------|---------|---------|
| **Lovable** | ✅ React/TS | ✅ Supabase | ✅ Supabase Auth | ✅ PostgreSQL | ✅ GitHub | ✅ (con Supabase RLS) | ✅ Custom | $0–$50 | **Bajo** |
| **Bolt (StackBlitz)** | ✅ React | ⚠️ via integrations | ⚠️ | ⚠️ | ✅ export | ⚠️ | ✅ | $0–$49 | Bajo |
| **v0 (Vercel)** | ✅ Next.js | ⚠️ Vercel backend | ⚠️ | ⚠️ | ✅ | ⚠️ | ✅ | $0–$50 | Medio (Vercel) |
| **Base44** | ✅ | ✅ fullstack | ✅ | ✅ incluido | ⚠️ | ⚠️ | ✅ | $0–$49 | Alto |
| **Replit** | ✅ | ✅ | ✅ | ✅ | ⚠️ limitado | ⚠️ | ✅ | $20–$100 | Alto |
| **Firebase Studio** | ✅ | ✅ Firebase | ✅ Firebase Auth | ✅ Firestore | ✅ | ✅ | ✅ | Free (sunsetting) | Alto (Google) |

### Notas Lovable 2026
- Cada proyecto: React/TypeScript + Tailwind + shadcn/ui + Supabase pre-wired
- GitHub sync automático: codebase siempre exportable
- Auth: Supabase Auth incluido (email/pass, OAuth)
- Multi-tenant: posible con Supabase Row Level Security (requiere diseño)
- Pricing: Free (créditos limitados), Pro $25/mo, Business $50/mo, Enterprise custom
- **Créditos**: variable por complejidad de request
- **No lock-in**: código es tuyo en GitHub, puedes hacer fork en cualquier momento
- MCP disponible: `mcp__claude_ai_Lovable__*` (verificado en esta sesión)

### Notas Base44
- Full-stack sin abrir editor: frontend + backend + DB + auth + hosting
- Path a App Stores: genera archivos store-ready (Apple/Google)
- Ganador para no-técnicos; lock-in alto

### Notas Bolt
- Browser IDE; iteración rápida
- Backend: via integraciones externas, no nativo
- Mejor para prototipos rápidos

---

## DATABASES

| DB | Tipo | Multi-tenant | RLS | Branching | Free Tier | Price base | Lock-in | HG Fit |
|----|------|--------------|-----|-----------|-----------|------------|---------|--------|
| **Neon** | Serverless PG | ✅ | ✅ | ✅ (copy-on-write) | ✅ | $19–$69/mo | Bajo | 9/10 |
| **Supabase DB** | BaaS + PG | ✅ | ✅ nativo | ⚠️ | ✅ (2 proyectos) | $25/mo | Bajo | 9/10 |
| **Cloud SQL (GCP)** | Managed PG/MySQL | ✅ | ✅ | ❌ | ❌ | $~50/mo mín | Medio | 7/10 |
| **Convex** | Real-time BaaS | ✅ | ✅ | ⚠️ | ✅ | $25/mo | Alto | 5/10 |
| **PlanetScale** | Serverless MySQL | ✅ | ✅ | ✅ | ❌ (eliminado 2024) | $~39/mo | Medio | 4/10 |

### Notas Neon 2026
- Adquirido por Databricks (mayo 2025, ~$1B)
- Julio 2026: lanzó suite backend propia (auth, storage, functions) — BETA
- Branching copy-on-write: 10x más barato que Supabase para multi-tenant con muchos DB clones
- Scale-to-zero: idle = $0 compute
- **Mejor para**: proyectos con muchos tenants aislados en DBs separados
- **Para Health Growth SaaS multi-tenant**: Neon branching = onboarding nuevo cliente en segundos

### Notas Supabase 2026
- Full-stack BaaS: DB + Auth + Storage + Realtime + Edge Functions
- RLS nativo: política SQL por tenant, una sola DB para N tenants
- $25/mo = always-on (Neon $69/mo para siempre encendido)
- Lovable lo usa por defecto
- **Para Health Growth**: Supabase + RLS = solución más integrada con Lovable

### Decisión DB Health Growth
- **Actual** (carlos-os): JSON files → migración futura a PostgreSQL ya diseñada
- **Recomendado**:
  - Si queda en carlos-os stack propio: **Cloud SQL** (GCP, mismo proyecto)
  - Si Lovable se vuelve el frontend principal: **Supabase** (ya integrado)
  - Si se va multi-tenant con 50+ clientes: **Neon** (branching = tenant isolation económico)

---

## AUTOMATION

| Tool | Self-host | Cloud | Visual | Code nodes | Triggers | Webhooks | Node.js native | Price | Lock-in | HG Fit |
|------|-----------|-------|--------|------------|----------|----------|----------------|-------|---------|--------|
| **n8n** | ✅ Free | ✅ $24/mo | ✅ | ✅ JS/PY | ✅ 500+ | ✅ | ❌ (externo) | $0–$800/mo | **Bajo** | **10/10** |
| **Trigger.dev v3** | ✅ | ✅ $50/mo | ❌ código | ✅ TS nativo | ✅ | ✅ | ✅ | Free/$50/mo | Bajo | 7/10 |
| **Make (Integromat)** | ❌ | ✅ | ✅ | ⚠️ | ✅ 1000+ | ✅ | ❌ | $9–$299/mo | Medio | 5/10 |
| **Temporal** | ✅ | ✅ | ❌ código | ✅ | ✅ | ✅ | ✅ | $~200/mo cloud | Bajo | 4/10 (overkill) |

### Notas n8n 2026
- v2.x: unlimited workflows, unlimited users en todos los planes cloud
- Self-hosted Community Edition: FREE, ideal para startup
- Health Growth usa n8n-patitas (self-hosted, Docker, v2.26.5) → correcto
- Startup plan: 50% off Business si <20 empleados (HAQ pendiente aplicar)
- Features 2026: SSO/SAML, Git version control, múltiples entornos (EE)
- **Veredicto**: mantener n8n. No migrar.

### Notas Trigger.dev v3 2026
- Mejores para: background jobs integrados en tu app Node.js
- No reemplaza n8n (propósito diferente: jobs de código vs workflows visuales)
- Podría complementar carlos-os para jobs internos (recordatorios, fidelización)

---

## WHATSAPP / META 2026

### WABA Requirements
- WABA registrado en Meta Business Manager (verified business account)
- Phone number registrado (puede ser número existente + migración, o número nuevo)
- Webhook configurado en Meta App (URL pública HTTPS + verify_token)
- Templates aprobados para mensajes outbound (fuera de ventana 24h)
- **Modelo On-Behalf-Of**: eliminado. Cada business debe ser dueño de su WABA.

### Pricing Meta 2026 (cambios importantes)
- **Agosto 1, 2026**: Meta cobra por mensajes de Meta Business Agent (AI replies)
- **Octubre 1, 2026**: service/utility messages DENTRO de ventana 24h = pago
- Antes: ventana 24h era gratis para servicio. Ya no.
- Marketing messages: siempre pagos (ej: Brasil $0.0625/msg, India $0.0094/msg)
- Free tier: 1,000 service conversations/mes por WABA (utility/marketing: 0 free)
- Cloud API: estándar, hasta 500 msgs/seg. On-premise API: discontinuado.

### Embedded Signup (para onboarding de clientes futuros)
- Health Growth como "Tech Provider" puede usar Embedded Signup
- Cliente completa el flow en 10 min: Crea WABA, registra número, acepta términos
- Tech Provider obtiene sistema de acceso delegado
- **Requiere**: app Meta aprobada como "Tech Provider" (proceso de verificación)
- **Para Patitas piloto**: no se necesita Embedded Signup — Carlos hace el setup manual directamente

### Status actual Patitas WhatsApp
- WHATSAPP_ACCESS_TOKEN: PRESENT (nombre correcto en .env)
- WHATSAPP_TOKEN: ABSENT ← **P0-1: bug en whatsapp_engine.js**
- WABA: NOT_REGISTERED ← **P0-2: requiere Meta Business Manager**
- Webhook: NOT_CONFIGURED ← requiere WABA primero

---

## CAL.COM 2026

### API v2 Endpoints actuales
- `/v2/bookings`, `/v2/event-types`, `/v2/slots`, `/v2/schedules`, `/v2/webhooks`
- Webhooks: `booking_created`, `booking_cancelled`, `booking_rescheduled`, `booking_rejected`
- Self-hosted: acepta HTTP + HTTPS, IPs privadas permitidas para webhooks internos

### Pricing
- Self-hosted: **gratis** (open source), ~$54/año en Hetzner €4.50/mes
- Cloud: Free (individual), Teams $15/usuario, Organizations $37/usuario
- Platform API (para embed): $299/mo

### Recomendación para Health Growth
- Self-hosted Cal.com = integración ideal (webhook → carlos-os → CRM + recordatorios)
- Alternativa simple: google Calendar API + slot_engine (ya implementado)
- **No urgente**: slot_engine funciona. Cal.com = mejora post-piloto.

---

## AUTH COMPARISON 2026

| Tool | Tipo | Multi-tenant | MAU Free | Price | Self-host | HG Fit |
|------|------|--------------|----------|-------|-----------|--------|
| **Custom (actual)** | PBKDF2+SQLite | ✅ (RBAC) | Ilimitado | $0 | ✅ | 8/10 |
| **Better Auth** | OSS | ✅ (org plugin) | Ilimitado | $0 | ✅ | 9/10 |
| **Supabase Auth** | BaaS Auth | ✅ | 50K | $0–$25/mo | ✅ | 8/10 |
| **Clerk** | SaaS Auth | ✅ | 10K | $0+$0.02/MAU | ❌ | 5/10 |
| **WorkOS** | Enterprise Auth | ✅ | 1M! | $0+$125/SSO conn | ❌ | 6/10 |
| **Auth0** | SaaS Auth | ✅ | 7.5K | $23+/mo | ❌ | 4/10 |

### Análisis auth Health Growth
- Auth actual (carlos-os): PBKDF2-SHA512, HttpOnly cookie, RBAC, session SQLite
- Calidad: **8.5/10** — bien implementado para el tamaño actual
- **Recomendación**: NO reemplazar. Custom auth tiene 0 costo y funciona.
- Si Lovable dashboard crece: considerar Supabase Auth (integrado con Lovable/Supabase DB)
- Migración a Better Auth: solo si custom auth muestra limitaciones reales
- Patrón 2026: "Lanzar en Clerk → migrar a Better Auth/Supabase Auth a 50K+ MAU"

---

## KEY FINDINGS

1. **Firebase Studio se está apagando** (sunset marzo 2027, nuevos workspaces bloqueados junio 2026). Usar Lovable como alternativa principal es la decisión correcta.

2. **OpenHands open-source alcanza 68-72% SWE-bench** con Claude Opus 4.6 — mejor que muchos agentes propietarios. Alternativa económica para tasks batch si el costo de Claude Code escala.

3. **WhatsApp pricing cambió radicalmente en 2026**: service messages dentro de la ventana 24h ahora cuestan desde octubre 2026. El modelo "gratis si el cliente escribe primero" ya no existe completamente. Impacto bajo para Patitas en volumen inicial, pero a considerar al escalar.

4. **Neon fue adquirido por Databricks (~$1B)** y lanzó backend suite propio. Sigue siendo la mejor opción para multi-tenant con branching por cliente. Supabase sigue siendo la opción más integrada con Lovable.

5. **n8n Community Edition sigue siendo free** y la decisión de auto-hospedar es correcta. El "Startup Plan" (50% off Business) puede aplicarse cuando Health Growth necesite SSO/Git version control.

6. **Cursor lanzó Cloud VMs con browser + desktop completo** (mayo 2026). Competencia directa con Claude Code para tasks largas. Ventaja Claude: MCP nativo, mejor integración con stack actual (GCP, Lovable, SSH).

7. **PlanetScale eliminó free tier** (abril 2024) y pivotó hacia enterprise. No relevante para Health Growth — usar PostgreSQL.

8. **Better Auth es la alternativa open-source más sólida a Clerk** para SaaS multi-tenant, pero el auth custom de carlos-os ya hace lo mismo bien. No migrar sin razón.

9. **Meta Embedded Signup** permite onboarding de clientes en 10 min para WhatsApp si Health Growth se convierte en Tech Provider. Relevante para fase de escalamiento, no para el piloto Patitas.

10. **Devin bajó de $500 → $20/mo** pero SWE-bench real es 13.86% — mucho menor que los benchmarks de marketing. Claude Code en modo autónomo (esta misión) supera esto.

---

## RECOMMENDATIONS

```
BEST_PRIMARY_AGENT      = Claude Code (subagents + MCP + SSH + Windows + GCP nativo)
BEST_SECONDARY_AGENT    = OpenHands (open-source, self-hosteable, SWE-bench 72% para batch tasks económicos)
BEST_FRONTEND_AGENT     = Lovable (MCP disponible, GitHub export, Supabase integrado, ya en uso)
BEST_QA_AGENT           = Claude Code con test harness custom (fork agents para test paralelo)
BEST_RESEARCH_AGENT     = Claude Code fork agent (esta misión lo demuestra)
BEST_DATABASE           = Supabase (si Lovable es frontend principal) | Neon (si multi-tenant >20 clientes)
BEST_AUTOMATION         = n8n self-hosted (ya instalado, mantener)
BEST_AUTH               = Custom actual (mantener) | Better Auth (si se necesita migrar)

STACK_VERDICT = KEEP_CURRENT_STACK + MINOR_IMPROVEMENTS

Razón: El stack actual (Node.js + GCP + n8n + Lovable + Claude Code) es sólido.
Los blockers son operacionales (env vars, WABA, datos de Alicia), no arquitectónicos.
No hay beneficio en migrar agente o infraestructura. El costo sería > el beneficio.

Mejoras recomendadas (sin migración):
1. Agregar Supabase DB como destino final de migración (reemplaza JSON files)
2. Configurar Cal.com self-hosted post-piloto (slot_engine OK por ahora)
3. Evaluar OpenHands como agente complementario para tasks batch costosas
4. Aplicar n8n Startup Plan (50% off)
5. Investigar Tech Provider status en Meta para futura escala WhatsApp
```

---

## SOURCES

- Claude Code agents 2026: https://www.cloudzero.com/blog/claude-code-agents/ | https://saascity.io/blog/claude-code-subagents-agent-teams-2026
- Claude Code pricing: https://www.finout.io/blog/claude-code-pricing-2026
- OpenAI Codex pricing: https://www.morphllm.com/codex-pricing | https://uibakery.io/blog/openai-codex-pricing
- Cursor pricing/agents: https://www.cloudzero.com/blog/cursor-ai-pricing/ | https://www.buildfastwithai.com/blogs/cursor-cloud-agents-development-environments-2026
- Devin 2026: https://www.eesel.ai/blog/cognition-ai | https://www.idlen.io/blog/devin-ai-engineer-review-limits-2026/
- GitHub Copilot: https://github.com/features/copilot/plans | https://baeseokjae.github.io/posts/github-copilot-coding-agent-guide-2026/
- Windsurf: https://andrew.ooo/tools/ai-coding/windsurf/ | https://www.fundesk.io/windsurf-ide-review-codeium-ai-editor-2026
- OpenHands: https://www.openhands.dev/blog/openhands-index | https://www.openhands.dev/blog/open-source-ai-coding-agents
- Goose: https://theaiagentindex.com/agents/goose | https://www.arcade.dev/blog/goose-the-open-source-agent-that-shaped-mcp/
- Google Gemini/Firebase Studio: https://firebase.google.com/support/release-notes/firebase-studio | https://cloud.google.com/blog/products/application-development/firebase-studio-lets-you-build-full-stack-ai-apps-with-gemini
- Replit: https://espressio.ai/blog/replit-guide-2026/ | https://customaidashboard.com/blog/replit-agent-pricing-explained
- Lovable: https://www.eesel.ai/blog/lovable-pricing | https://www.nocode.mba/articles/lovable-ai-app-builder | https://www.totalum.app/blog/lovable-pricing-2026
- App builders comparison: https://appbuilder24.com/blog/bolt-vs-lovable-vs-v0-vs-base44-ai-app-builder-comparison-2026 | https://vulk.dev/blog/best-ai-app-builders-2026
- Neon vs Supabase: https://tech-insider.org/neon-vs-supabase-2026/ | https://www.devtoolreviews.com/reviews/neon-vs-supabase-postgres-2026
- PlanetScale: https://www.srvrlss.io/provider/planetscale/ | https://apiscout.dev/guides/supabase-vs-neon-vs-planetscale-serverless-db-2026
- n8n pricing: https://www.novelvista.com/blogs/ai-and-ml/n8n-pricing-2026 | https://automationatlas.io/answers/n8n-pricing-self-hosted-vs-cloud-2026/
- Trigger.dev: https://trigger.dev/vs/n8n | https://automationatlas.io/tools/trigger-dev/
- WhatsApp WABA pricing: https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing | https://eazybe.com/blog/whatsapp-business-api-pricing
- Meta Embedded Signup: https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/overview/
- Cal.com: https://cal.com/docs/developing/guides/automation/webhooks | https://zeeg.me/en/blog/post/cal-com-pricing
- Auth comparison: https://makerkit.dev/blog/tutorials/better-auth-vs-clerk | https://workos.com/blog/workos-vs-betterauth-vs-clerk | https://gautamkhorana.com/blog/authentication-services-2026-clerk-auth0-supabase-workos/
