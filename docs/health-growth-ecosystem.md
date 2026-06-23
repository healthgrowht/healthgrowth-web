# Health Growth — Ecosistema Digital Completo
Versión: 1.0 | Fecha: 2026-06-22

---

## Principio Fundamental

Health Growth NO es una agencia de marketing.
Health Growth ayuda a emprendedores, minipymes y pymes a modernizar, organizar y crecer
mediante tecnología, automatización, presencia digital y soluciones prácticas orientadas a resultados.

**Frase central del sistema:**
Instagram atrae → La página convierte → WhatsApp/formulario captura → CRM ordena → n8n ejecuta → Claude Code construye → Carlos decide y cierra.

---

## Módulos del Ecosistema

### HG-Web — Plataforma Digital Central
**Propósito**: Primera impresión y punto de conversión.
**Entradas**: Tráfico desde Instagram, WhatsApp, boca a boca.
**Salidas**: Leads capturados (nombre, empresa, email, WhatsApp, servicio).
**Webhook activo**: `https://n8n.healthgrowth.cl/webhook/.../hg-captacion`
**Tecnología**: Next.js 16 + React 19 + Tailwind 4 + Framer Motion
**Estado**: ✅ Construido | Bugs corregidos | Pendiente: logo oficial + OG image
**Tareas pendientes**:
- [ ] Logo oficial en `/public/logo/`
- [ ] OG image 1200x630
- [ ] Páginas legales (privacidad, términos)
- [ ] Deploy a Vercel con dominio healthgrowth.cl
- [ ] Instalar react-icons para WhatsApp

---

### HG-Marketing — Sistema de Visibilidad y Crecimiento
**Propósito**: Mantener presencia activa diaria en Instagram y atraer leads.
**Entradas**: Pilares de contenido, calendario semanal, casos reales.
**Salidas**: Seguidores, comentarios, DMs, clics a web, leads.
**Canales activos**: @healthgrowthspa (Instagram), Página Facebook HG
**Estado**: 🔄 En construcción — ver `/docs/marketing-system.md`
**Tareas pendientes**:
- [ ] 6 posts de credibilidad mínimos en @healthgrowthspa
- [ ] Historias diarias activas
- [ ] Primer reel con Chimi

---

### HG-Leads — Captador y Clasificador de Prospectos
**Propósito**: Recibir, registrar y priorizar leads de todas las fuentes.
**Entradas**: Formulario web, DMs Instagram, WhatsApp, referidos.
**Salidas**: Prospectos en Notion CRM con estado y prioridad.
**Automatización**: n8n Workflow `HealthGrowth-Pipeline-V1` (ID: a0b41fdd)
**Estado**: ✅ Workflow operativo | 3 prospectos activos
**Tareas pendientes**:
- [ ] Verificar P04-P08 (5 prospectos pendientes)
- [ ] Activar respuesta automática inicial

---

### HG-CRM — Registro, Estados y Seguimiento
**Propósito**: Mantener trazabilidad completa de cada prospecto.
**Sistema**: Notion CRM (`👥 Clientes` ID: 26ee63f1)
**Pipeline 10 estados**: senal_detectada → prospecto → prospecto_enriquecido → validado → oportunidad → contacto → reunion → propuesta → cliente → nurturing
**Estado**: ✅ Operativo con 3 prospectos en `prospecto_enriquecido`
**Reglas**:
- Nada entra sin validación
- Todo debe tener evidencia
- Nada se elimina sin trazabilidad

---

### HG-Content — Fábrica de Contenido
**Propósito**: Producir contenido diario sin depender de inspiración.
**Entradas**: Pilares de contenido, calendario, noticias del sector.
**Salidas**: Guiones, copies, carouseles, hooks, hashtags, captions.
**Estado**: 🔄 Sistema creado — ver `/docs/content-engine.md`
**Tareas pendientes**:
- [ ] Primer batch de 7 posts producidos
- [ ] 30-day content plan completado

---

### HG-Presentations — Diagnósticos y Propuestas
**Propósito**: Convertir reuniones y datos en documentos profesionales vendibles.
**Entradas**: Notas de reunión, datos del cliente, diagnóstico digital.
**Salidas**: PDF de diagnóstico, propuesta comercial, resumen ejecutivo.
**Estado**: 📋 Documentado — ver `/docs/presentation-diagnostics-system.md`
**Tareas pendientes**:
- [ ] Completar plantilla de diagnóstico para 3 prospectos actuales
- [ ] Enviar primera propuesta

---

### HG-Objects — Objetos Parlantes y Personajes
**Propósito**: Contenido viral y memorable con personajes 3D que hablan.
**Casos de uso**: Chimi, Roquito, objetos con mensaje (celular, calendario, botón WA).
**Estado**: 📋 Documentado — ver `/docs/objects-speaking-content-system.md`
**Tareas pendientes**:
- [ ] Primer objeto parlante para Instagram (celular o Chimi)

---

### HG-Remotion — Motor de Video
**Propósito**: Videos explicativos, demos y motion graphics con código.
**Tecnología**: Remotion (React → MP4)
**Estado**: 📋 Documentado — NO instalar hasta tener web en producción
**Tareas pendientes**:
- [ ] Revisar entorno antes de instalar Remotion

---

### HG-Research — Investigación de Mercado
**Propósito**: Inteligencia competitiva y detección de oportunidades accionables.
**Herramientas**: OpenClaw, web search, LinkedIn.
**Estado**: 📋 Documentado — ver `/docs/research-system.md`
**Regla**: Toda investigación termina en hallazgo + acción sugerida.

---

### HG-Liquidez — Oportunidades de Ingreso
**Propósito**: Detectar y priorizar fuentes de ingreso para Carlos.
**Estado**: 📋 Documentado — ver `/docs/liquidez-system.md`
**Categorías**: empleos, clientes HG, ISAPRE, seguros, financiamiento.

---

### HG-Security — Seguridad del Ecosistema
**Propósito**: Proteger accesos, tokens y datos del sistema.
**Estado**: 📋 Documentado — ver `/docs/security-system.md`
**Regla**: No exponer servicios sin protección. No tokens en archivos públicos.

---

### HG-Operations — Coordinador General
**Propósito**: Orquestar el ecosistema completo como COO digital.
**Este archivo es el mapa maestro**.

---

## Relación Entre Módulos

```
Instagram (@healthgrowthspa)
    ↓ tráfico
HG-Web (healthgrowth.cl)
    ↓ formulario
HG-Leads (n8n webhook)
    ↓ registro
HG-CRM (Notion)
    ↓ seguimiento
HG-Presentations (diagnóstico + propuesta)
    ↓ cierre
CLIENTE GANADO
    ↓ caso de éxito
HG-Content (Patitas Felices, testimonios)
    ↓ alimenta
Instagram (@healthgrowthspa)    ← bucle cerrado
```

---

## Prioridad de Construcción

| Orden | Módulo | Estado |
|-------|--------|--------|
| 1 | HG-Web | ✅ Operativo (bugs corregidos) |
| 2 | HG-Leads | ✅ Operativo |
| 3 | HG-CRM | ✅ Operativo |
| 4 | HG-Marketing | 🔄 En progreso |
| 5 | HG-Content | 🔄 En progreso |
| 6 | HG-Presentations | 📋 Documentado |
| 7 | HG-Research | 📋 Documentado |
| 8 | HG-Liquidez | 📋 Documentado |
| 9 | HG-Security | 📋 Documentado |
| 10 | HG-Objects | 📋 Documentado |
| 11 | HG-Remotion | ⏸ Pendiente |
| 12 | Moltbot/OpenClaw | ⏸ Futuro |

---

## Infraestructura Central

| Componente | Detalles |
|-----------|---------|
| GCP Project | `bunkermaestro-494818` |
| VM n8n | `n8n-patitas` (southamerica-east1-c) |
| VM OpenClaw | `openclaw-bunker` (southamerica-west1-a) |
| n8n URL | https://n8n.healthgrowth.cl |
| CRM | Notion workspace "Centro de mando" |
| Dominio | healthgrowth.cl (Caddy + Let's Encrypt) |
| Email alertas | agenda.salud.digital@gmail.com |
| WhatsApp HG | +56 9 5101 7947 |
| Instagram | @healthgrowthspa |

---

## Automatizaciones Futuras

Ver `/docs/automation-roadmap.md` para el detalle completo por fases.
