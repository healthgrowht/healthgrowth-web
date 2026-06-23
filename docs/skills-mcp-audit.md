# Skills y MCPs — Auditoría del Ecosistema Health Growth
Fecha: 2026-06-22

---

## MCPs Detectados en el Entorno

| MCP | Estado | Uso en HG |
|-----|--------|-----------|
| Gmail | ✅ Activo (claude.ai) | Alertas de leads, comunicación clientes |
| Google Drive | ✅ Activo (claude.ai) | Documentos, plantillas, recursos |
| Notion | ✅ Activo (claude.ai) | CRM, base de conocimiento |
| Canva | ✅ Activo (claude.ai) | Diseño gráfico, OG images, contenido Instagram |
| Lovable | ✅ Activo (claude.ai) | Prototipado rápido de apps |
| Filesystem | ✅ Activo (Claude Code) | Leer/escribir archivos del proyecto |
| Git/GitHub | ✅ Activo (Claude Code) | Control de versiones |
| Web Search | ✅ Activo (Claude Code) | Investigación de mercado |
| Web Fetch | ✅ Activo (Claude Code) | Lectura de páginas web |

---

## MCPs Faltantes / Deseados

| MCP | Estado | Prioridad | Alternativa Actual |
|-----|--------|-----------|-------------------|
| n8n | ❌ No disponible | ALTA | Configurar directamente en n8n.healthgrowth.cl |
| Vercel | ❌ No disponible | ALTA | Deploy manual via CLI |
| Google Calendar | ❌ No disponible | MEDIA | Cal.com (planificado) |
| Google Sheets | ❌ No disponible | MEDIA | Notion como alternativa |
| Supabase | ❌ No disponible | BAJA | n8n + SQLite actual |
| Instagram/Meta | ❌ No oficial seguro | ALTA | ManyChat + n8n como proxy |
| WhatsApp Business | ❌ No oficial seguro | ALTA | ManyChat + n8n como proxy |
| Firebase | ❌ No disponible | BAJA | No requerido actualmente |

---

## Skills Detectadas en Claude Code

| Skill | Estado | Uso en HG |
|-------|--------|-----------|
| `code-review` | ✅ Disponible | Revisar componentes antes de deploy |
| `security-review` | ✅ Disponible | Auditar exposición de tokens |
| `init` | ✅ Disponible | Inicializar CLAUDE.md |
| `run` | ✅ Disponible | Ejecutar dev server |
| `verify` | ✅ Disponible | Verificar cambios en browser |
| `simplify` | ✅ Disponible | Limpiar código |
| `schedule` | ✅ Disponible | Tareas programadas |
| `loop` | ✅ Disponible | Ciclos de trabajo |
| `claude-api` | ✅ Disponible | Referencia API Anthropic |
| `update-config` | ✅ Disponible | Configurar Claude Code |

---

## Skills Faltantes / Deseadas

| Skill | Estado | Alternativa |
|-------|--------|-------------|
| `frontend-design` | ❌ No detectada | Usar directamente Tailwind + Framer Motion |
| `marketing-skills` | ❌ No detectada | Prompts manuales en este ecosistema |
| `social-media` | ❌ No detectada | Sistema HG-Content (en construcción) |
| `remotion-video` | ❌ No detectada | Ver `/docs/remotion-content-system.md` |
| `mcp-builder` | ❌ No detectada | Construcción manual de MCPs |
| `awesome-claude-skills` | ❌ No detectada | Revisar repositorio oficial |

---

## Plan de Instalación de MCPs Prioritarios

### 1. n8n MCP (ALTA PRIORIDAD)
```bash
# Requiere: configurar MCP server apuntando a n8n API
# URL: https://n8n.healthgrowth.cl/api/v1/
# API Key: [TODO: obtener desde n8n settings → API → Create API key]
# Permite: crear/editar workflows desde Claude Code directamente
```

### 2. Vercel MCP (ALTA PRIORIDAD)
```bash
# Requiere: Vercel account + token
# npm install -g vercel
# vercel login
# Permite: deploy directo desde Claude Code
```

### 3. Google Calendar MCP (MEDIA PRIORIDAD)
```bash
# Alternativa: Cal.com (ya planificado en ecosistema)
# Cuando Cal.com esté activo, conectar via webhook a n8n
```

---

## Prioridad de Herramientas por Fase

### Fase 1 — Producción Web (HOY)
- Filesystem ✅ | Git ✅ | Web Search ✅ | Canva ✅

### Fase 2 — Captación de Leads (ESTA SEMANA)
- n8n (ya activo, webhook configurado) | Notion ✅ | Gmail ✅

### Fase 3 — Contenido Instagram (ESTE MES)
- Canva ✅ | Google Drive ✅ | Sistema HG-Content

### Fase 4 — Automatización Conversacional
- ManyChat (Starter $15/mes) + n8n + Claude API
- ROKITO + CHIMI (documentados, listos para activar)

### Fase 5 — Agentes y Research
- OpenClaw (ya existe en GCP) + Vertex AI
- MCP n8n cuando esté disponible

---

## Alternativas Manuales para MCPs Faltantes

| MCP Faltante | Alternativa Manual |
|-------------|-------------------|
| Instagram API | Publicar manualmente usando contenido de `/content-system/` |
| WhatsApp API | ManyChat Starter ($15/mes) como proxy |
| n8n MCP | Administrar directamente en https://n8n.healthgrowth.cl |
| Vercel | `vercel deploy` desde terminal |
| Google Sheets | Exportar CSV desde Notion CRM |
