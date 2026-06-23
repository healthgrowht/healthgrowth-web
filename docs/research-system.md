# HG-Research — Sistema de Investigación Accionable
Versión: 1.0 | Fecha: 2026-06-22

---

## Propósito

Investigación privada, sistemática y orientada a resultados.
No se investiga por curiosidad. Se investiga para actuar.

**Regla de oro**: Toda investigación termina en:
- Hallazgo concreto
- Riesgo identificado
- Oportunidad específica
- Acción sugerida con prioridad

---

## Áreas de Investigación

### 1. Prospectos y Empresas
- Señales digitales de digitalización débil
- Nuevas aperturas, expansiones, contrataciones
- Presencia en Google Maps, Instagram, Facebook
- Calidad del sitio web y WhatsApp Business
- Decisores: dueño, gerente, encargado

### 2. Competencia de HG
- Otras consultoras digitales para pymes en Chile
- Precios del mercado (servicios similares)
- Propuestas de valor de competidores
- Gaps que HG puede explotar

### 3. Herramientas y Tecnología
- Nuevas herramientas de automatización para pymes
- Actualizaciones de n8n, Claude API, ManyChat
- Alternativas a herramientas actuales
- Integraciones disponibles

### 4. Mercado y Tendencias
- Adopción digital de pymes en Chile
- Sectores con mayor crecimiento
- Señales de inversión en tecnología PYME
- Cambios regulatorios relevantes

### 5. Estrategias de Creadores
- Embudos de Instagram que funcionan para consultoras
- Sistemas de captación de leads en redes sociales
- Contenido que convierte en el segmento PYME
- Estrategias de pricing para servicios digitales

---

## Formato de Salida Estándar

```markdown
## INVESTIGACIÓN: [TEMA]
Fecha: [FECHA]
Ejecutado por: Claude Code + Web Search

### Hallazgos Principales
1. [Hallazgo concreto y verificado]
2. [Hallazgo concreto y verificado]

### Riesgos Detectados
- [Riesgo específico + qué implica para HG]

### Oportunidades Identificadas
- [Oportunidad + por qué es relevante para HG]

### Acciones Sugeridas
| Acción | Prioridad | Responsable | Plazo |
|--------|-----------|-------------|-------|
| [Acción] | ALTA/MEDIA/BAJA | Carlos | [fecha] |

### Fuentes
- [URL o fuente verificada]
```

---

## Protocolo de Investigación de Prospectos

### Paso 1 — Búsqueda Inicial (5 min)
- Google: `"[nombre negocio]" "[ciudad]" site:instagram.com OR site:google.com/maps`
- Instagram: buscar handle del negocio
- Google Maps: ficha de Google Business

### Paso 2 — Evaluación Digital (10 min)
| Canal | Verificar |
|-------|-----------|
| Instagram | Última publicación, seguidores, respuestas, historias activas |
| Google Maps | Fotos actualizadas, horarios, reseñas, respuestas |
| WhatsApp | ¿Tienen WhatsApp Business? ¿Tienen catálogo? |
| Web | ¿Existe? ¿Carga rápido? ¿Tiene formulario de contacto? |
| Facebook | ¿Tienen página? ¿Está activa? |

### Paso 3 — Scoring (5 min)
Aplicar el scoring de la guía HG (ver `/docs/lead-crm-system.md`)
Resultado: URGENTE / ALTA / MEDIA / BAJA

### Paso 4 — Ficha del Prospecto
Completar campos del CRM y registrar en Notion.

---

## Investigación de Competencia

### Competidores a Monitorear (actualizar mensualmente)
| Empresa | URL | Propuesta de Valor | Precio referencial |
|---------|-----|-------------------|-------------------|
| [TODO: mapear competidores] | | | |

### Preguntas Clave
- ¿Qué ofrecen que HG no ofrece?
- ¿Qué ofrece HG que ellos no ofrecen?
- ¿Qué precio cobran por servicios similares?
- ¿Qué tipos de clientes están atendiendo?

---

## Investigación de Herramientas

### Stack Actual HG
| Herramienta | Costo/mes | Alternativa |
|------------|-----------|-------------|
| n8n (GCP) | Costo GCP VM | Make.com / Zapier |
| Claude API | ~$0.36/mes (Sonnet) | GPT-4o-mini |
| ManyChat Starter | $15 USD | Chatfuel, Manychat Pro |
| Notion | Gratis (plan actual) | Airtable |
| Cal.com | Gratis (planificado) | Calendly |

### Herramientas a Evaluar
- [ ] Herramientas de programación de Instagram (Meta Business Suite vs. Buffer vs. Hootsuite)
- [ ] Herramientas de diseño rápido (Canva vs. Adobe Express)
- [ ] Herramientas de video (Runway vs. Pika vs. HeyGen)
- [ ] CRM alternativo a Notion si escala (HubSpot free vs. Pipedrive)

---

## Investigación de Mercado Chile PYME

### Datos Base (fuente: investigación previa)
- Chile tiene ~1.2M de MiPymes
- Sector servicios locales: peluquerías, barberías, veterinarias, estética, odontología, kinesiología
- Penetración digital de WhatsApp Business: baja (<30% en pymes locales)
- Presencia web funcional: <50% de pymes locales
- Instagram activo: ~40% pero <20% con estrategia

### Sectores Prioritarios HG (Alta Conversión)
1. Peluquerías y barberías
2. Veterinarias y peluquería canina
3. Centros de estética
4. Clínicas de kinesiología y podología
5. Odontología privada

### Señales de Crecimiento a Monitorear
- Nuevas aperturas en comunas objetivo (Maipú, Santiago, Providencia, Vitacura)
- Publicaciones de "segunda sucursal" o "apertura"
- Contrataciones en LinkedIn o Indeed
- Cambios de local o expansión mencionados en redes

---

## Calendario de Investigación

| Frecuencia | Tipo | Duración |
|-----------|------|---------|
| Diario | Revisar Google Alerts configuradas | 10 min |
| Semanal | Buscar 3-5 nuevos prospectos | 30 min |
| Mensual | Auditoría de competencia | 1 hora |
| Trimestral | Revisión de herramientas y precios | 2 horas |
