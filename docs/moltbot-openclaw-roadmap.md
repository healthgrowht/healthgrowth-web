# Moltbot / OpenClaw — Roadmap del Operador Digital 24/7
Versión: 1.0 | Fecha: 2026-06-22 | Estado: DOCUMENTADO (no instalar todavía)

---

## Qué es Moltbot / OpenClaw

Sistema de agentes autónomos que opera el ecosistema Health Growth
mientras Carlos trabaja, duerme o está ocupado con otros proyectos.

**OpenClaw** = infraestructura de agentes (ya existe en GCP, VM `openclaw-bunker`)
**Moltbot** = nombre operativo del sistema de automatización inteligente

---

## Misión

Actuar como COO digital que:
- Monitorea el ecosistema continuamente
- Detecta oportunidades y riesgos
- Prepara información para que Carlos decida
- Ejecuta tareas repetitivas sin intervención humana
- Alerta cuando algo requiere atención

---

## Los 5 Niveles de Autonomía

### Nivel 1 — MIRAR Y RESUMIR (primero en activar)
El agente solo observa y reporta. No actúa.
- Monitorear correos
- Resumir conversaciones
- Leer noticias relevantes
- Reportar estado del CRM
- Detectar nuevos prospectos

### Nivel 2 — ALERTAR
El agente detecta y notifica. No actúa sin aprobación.
- Alerta: "Hay un lead nuevo en el formulario"
- Alerta: "Este prospecto tiene señal de crecimiento"
- Alerta: "El workflow de n8n falló"
- Alerta: "Nuevas empresas publicaron que abren segunda sucursal"

### Nivel 3 — PREPARAR BORRADORES
El agente prepara pero Carlos aprueba antes de enviar.
- Borrador de respuesta a prospecto
- Borrador de diagnóstico para cliente
- Borrador de post de Instagram
- Borrador de propuesta comercial

### Nivel 4 — EJECUTAR CON APROBACIÓN EXPRÉS
El agente ejecuta con un "sí" de 1 clic de Carlos.
- Registrar prospecto en CRM
- Enviar recurso gratuito a lead
- Publicar contenido programado
- Responder DM estándar

### Nivel 5 — AUTOMATIZAR PROCESOS VALIDADOS (el objetivo final)
El agente ejecuta flujos completos sin intervención en casos conocidos.
- ROKITO atiende consultas de Patitas Felices 24/7
- CHIMI responde DMs de HG en horario extendido
- OpenClaw investiga nuevos prospectos automáticamente
- n8n registra leads y notifica a Carlos
- Sistema de seguimiento se activa solo a día 3 y 7

---

## Estado Actual de Componentes

| Componente | Estado | Nivel activado |
|-----------|--------|----------------|
| n8n (orquestador) | ✅ Operativo | Nivel 2-4 |
| ROKITO (Patitas) | ⏸ Listo, pendiente KB | Nivel 4-5 |
| CHIMI (HG) | ⏸ Listo, pendiente activación | Nivel 4-5 |
| OpenClaw (VM) | ✅ Existe en GCP | Nivel 1-2 (básico) |
| Vertex AI | ⏸ Pendiente configuración | Nivel 1 |
| Investigador HG | ✅ USER_HG.md activo | Manual (Nivel 0) |
| Investigador ISAPRE | ✅ USER.md activo | Manual (Nivel 0) |

---

## Roadmap de Activación

### Fase 1 — Base (COMPLETADA)
- [x] n8n operativo
- [x] Notion CRM operativo
- [x] Webhooks funcionales
- [x] Email de alertas activo

### Fase 2 — Conversacional (EN PROGRESO)
- [ ] ROKITO activo en Patitas Felices (bloqueado por KB de Alicia)
- [ ] CHIMI activo en @healthgrowthspa
- [ ] ManyChat conectado a Instagram/Facebook

### Fase 3 — Research Automatizado
- [ ] OpenClaw busca prospectos nuevos semanalmente
- [ ] Alertas automáticas de señales de crecimiento
- [ ] Resumen semanal de oportunidades → email a Carlos

### Fase 4 — Seguimiento Autónomo
- [ ] n8n cron: seguimiento día 3 y día 7 automático
- [ ] Clasificación automática de leads por score
- [ ] Reactivación automática de prospectos fríos

### Fase 5 — Operador Completo
- [ ] Dashboard de operaciones en tiempo real
- [ ] Agente de monitoreo de Instagram (métricas, menciones)
- [ ] Generación de contenido semanal asistida por IA
- [ ] Propuestas automáticas para prospectos calificados

---

## Qué NO Puede Hacer Moltbot (reglas permanentes)

❌ Enviar propuestas sin revisión de Carlos
❌ Comprometer dinero o contratar servicios
❌ Publicar en redes sociales sin aprobación expresa
❌ Contactar clientes reales de forma no autorizada
❌ Modificar CRM de forma masiva sin respaldo
❌ Eliminar datos sin confirmación
❌ Cambiar configuraciones de producción sin aviso

---

## Infraestructura Futura

| Componente | Para qué | Cuándo |
|-----------|---------|--------|
| Vertex AI | Scoring avanzado de prospectos | Fase 3 |
| Tavily API | Research web automatizado | Fase 3 |
| WhatsApp Business API | Canal propio sin ManyChat | Fase 4 |
| Cal.com + n8n | Agendamiento automático | Fase 2-3 |
| Dashboard tiempo real | Visibility del ecosistema | Fase 4 |

---

## Costo Estimado del Ecosistema Completo (Fase 5)

| Componente | Costo mensual |
|-----------|--------------|
| GCP (2 VMs) | ~$40 USD |
| Claude API (Haiku + Sonnet) | ~$1 USD |
| ManyChat Starter | $15 USD |
| Cal.com | $0 (gratuito) |
| Notion | $0 (gratuito) |
| Vercel | $0 (gratuito plan pro inicio) |
| **TOTAL ESTIMADO** | **~$56 USD/mes** |

---

## Regla de Activación

Antes de activar cualquier nivel de autonomía nuevo:
1. Carlos revisa y aprueba el scope exacto del nivel
2. Se prueba en sandbox por 72 horas
3. Se monitorea durante 1 semana
4. Se activa con límites de uso claros
5. Se documenta el nivel activado en este archivo
