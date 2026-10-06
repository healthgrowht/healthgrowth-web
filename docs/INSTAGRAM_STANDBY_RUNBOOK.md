# HEALTH GROWTH — INSTAGRAM STANDBY RUNBOOK
# Versión: 1.0 | Fecha: 2026-09-06
# ESTADO OBJETIVO: INSTAGRAM_MODE = STANDBY

---

## ESTADO ACTUAL AUDITADO

| COMPONENTE | ESTADO | DETALLE |
|-----------|--------|---------|
| Instagram Patitas (cuenta Alicia) | UNKNOWN | `PATITAS_IG_ACCOUNT_ID` presente, token presente |
| Instagram HG (cuenta propia HG) | ❌ SIN CONFIGURAR | `HG_IG_ACCOUNT_ID` vacío en .env |
| Meta App connection | PARTIAL | App existe para WA, IG permissions desconocidas |
| n8n workflow [PF] Instagram | INACTIVE | Bloqueado por n8n.healthgrowth.cl sin DNS (HAQ-06) |
| ManyChat integration | INACTIVE | No configurado/activo |
| Publishing access | UNKNOWN | No verificado |
| DM automation | INACTIVE | Workflow n8n off |
| Content workflow | PAUSED | content-system/ existe, no hay publicación activa |

**INSTAGRAM_MODE = STANDBY (de facto — sistemas pausados, no formalmente)**

---

## AUDITORÍA DETALLADA

### Patitas Instagram:
```
INSTAGRAM_ACCESS_TOKEN: ✅ PRESENTE (en .env.production)
PATITAS_IG_ACCOUNT_ID: ✅ PRESENTE (en .env.production)
n8n workflow ROKITO IG: INACTIVE (workflow cf35de56)
Webhook: n8n.healthgrowth.cl/webhook/instagram-patitas → SIN DNS
Estado real: Token puede haber expirado (Instagram tokens expiran si no se refrescan)
```

### HG Instagram:
```
HG_IG_ACCOUNT_ID: ❌ VACÍO
No existe workflow HG IG activo
No existe doc de identidad de cuenta IG HG
```

### Content System:
```
content-system/health-growth/ → existe (plantillas, calendarios)
content-system/calendar/30-day-content-plan.md → existe
ESTADO: DRAFT / archivos existen, no hay publicación activa
```

---

## MODO STANDBY — DEFINICIÓN

```
INSTAGRAM_MODE = STANDBY significa:

✅ Cuenta(s) intactas — no borrar, no desautorizar
✅ Acceso conocido (Carlos sabe cómo entrar)
✅ Content system preservado (drafts/templates no se pierden)
✅ Sin publicación automática
✅ Sin campañas activas
✅ Analytics accesibles cuando se requiera
⏸ Queue pausado — contenido aprobado en espera
```

---

## ACCIONES PARA CONFIRMAR STANDBY SEGURO

```
☐ 1. Verificar que INSTAGRAM_ACCESS_TOKEN de Patitas no ha expirado
     → Instagram: Token de larga duración expira en 60 días si no se refresca
     → Verificar: GET https://graph.facebook.com/me?access_token=<TOKEN>
     → Si expirado: refrescar vía Meta App o generar nuevo token

☐ 2. Verificar que la cuenta HG Instagram sigue accesible
     → Iniciar sesión manual en Instagram (app o web)
     → Confirmar que Carlos tiene acceso admin

☐ 3. No desconectar Meta App de Instagram mientras no se planee reconectar
     → Una desconexión requiere re-autorizar permisos y puede demorar

☐ 4. Verificar que content-system/health-growth/ tiene drafts organizados
     → Sin publicar ninguno (solo verificar que existen)

☐ 5. Estado del token IG Patitas:
     → Si expirado, renovar. Si activo, documentar fecha de expiración.
```

---

## SISTEMA DE CONTENIDO EN STANDBY

### Estructura actual:
```
content-system/
├── health-growth/       ← Contenido HG propio
├── calendar/
│   └── 30-day-content-plan.md  ← Plan existente
├── captions/            ← Plantillas de captions
├── carousels/           ← Carruseles
├── hooks/               ← Hooks para posts
├── reels/               ← Sistema Remotion para videos
└── stories/             ← Stories templates
```

### Clasificación de contenido:
```
DRAFT: Cualquier archivo en content-system/ no marcado como publicado
APPROVED: Requiere revisión manual de Carlos antes de publicar
PUBLISHED: Documentar en content-system/calendar/ con fecha
ARCHIVED: Mover a content-system/_archive/ si ya no es relevante
```

---

## RUNBOOK DE REANUDACIÓN (UNA PÁGINA)

### Cuándo reanudar: Cuando Carlos decida explícitamente salir de STANDBY

```
PASO 1 — VERIFICAR CUENTA
  ☐ Iniciar sesión en Instagram (app o web)
  ☐ Verificar que la cuenta no fue suspendida
  ☐ Verificar que el perfil de HG está completo (bio, foto, link)
  ☐ Verificar número de seguidores y que no hubo problemas durante pausa

PASO 2 — VERIFICAR MARCA
  ☐ Revisar docs/branding/MANUAL_DE_MARCA_HEALTHGROWTH.md
  ☐ Confirmar que el contenido preparado sigue alineado con identidad actual
  ☐ Verificar que no hay cambios de producto/precio que hagan el contenido incorrecto

PASO 3 — VERIFICAR CONEXIÓN META
  ☐ Verificar que INSTAGRAM_ACCESS_TOKEN de HG sigue válido
  ☐ Si vence en menos de 14 días: renovar antes de publicar
  ☐ Verificar que Meta App tiene permisos de publishing (instagram_content_publish)
  ☐ Si DNS de n8n.healthgrowth.cl sigue sin configurar: respetar ese bloqueador antes de activar n8n workflow

PASO 4 — SELECCIONAR CONTENIDO APROBADO
  ☐ Revisar content-system/health-growth/ y content-system/calendar/
  ☐ Seleccionar UNA pieza para prueba controlada
  ☐ Verificar que la pieza seleccionada está marcada APPROVED o aprobarla ahora
  ☐ NO publicar el backlog completo de golpe

PASO 5 — HABILITAR QUEUE (si se usa programador)
  ☐ Si se usa Later/Buffer/n8n: confirmar credenciales activas
  ☐ Configurar horario de publicación (recomendado: fuera de horario peak primero)
  ☐ Agregar solo la pieza de prueba al queue

PASO 6 — TEST CON UNA PIEZA
  ☐ Publicar manualmente UNA pieza de prueba
  ☐ Verificar que aparece correctamente en el perfil
  ☐ Verificar que links funcionan
  ☐ Monitorear 24h antes de continuar

PASO 7 — MEDIR
  ☐ Revisar métricas básicas: alcance, engagement, saves
  ☐ Comparar con baseline pre-pausa si existe
  ☐ No optimizar aún — solo verificar que el canal funciona

PASO 8 — REANUDAR CADENCIA NORMAL
  ☐ Solo después de que PASO 6 y 7 pasen
  ☐ Activar n8n workflow IG solo si DNS de n8n.healthgrowth.cl está resuelto
  ☐ Documentar fecha de reanudación en content-system/calendar/
```

**REGLA: No publicar en bulk después de una pausa larga sin el test de 1 pieza.**

---

## HEALTH GROWTH IG vs PATITAS IG

```
Health Growth (@healthgrowth o cuenta HG):
  - Contenido: marca HG, servicios B2B/B2C
  - Gestor: Carlos
  - Estado: STANDBY

Patitas Felices (@patitasfelices o cuenta Alicia):
  - Contenido: veterinaria, mascotas, local Puerto Montt
  - Gestor: Alicia (cuando esté configurado)
  - Estado: STANDBY (workflow n8n inactivo, bloqueado por DNS)
```

---

## DEPENDENCIAS BLOQUEADORAS ACTUALES

| DEPENDENCIA | BLOQUEA | RESOLUCIÓN |
|------------|--------|-----------|
| n8n.healthgrowth.cl DNS (HAQ-06) | Workflow automático Instagram Patitas | Carlos configura DNS en Cloudflare |
| HG_IG_ACCOUNT_ID vacío | Automatización IG HG | Carlos obtiene account ID de la cuenta HG |
| [PF] n8n workflow INACTIVE | Respuestas automáticas DMs Patitas | Carlos activa después de DNS |
| INSTAGRAM_ACCESS_TOKEN expirado (posible) | Cualquier llamada a Graph API | Carlos verifica y renueva |

---

*Generado por POWER lane | Misión ALL-HAZARDS CONTINUITY | 2026-09-06*
*No publicar. No activar campañas. Solo para operaciones de mantenimiento.*
