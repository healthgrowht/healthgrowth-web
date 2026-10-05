import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

// ── Anthropic client (lazy — only initialised when key is present) ──────────

function getClient(): Anthropic | null {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return null;
  return new Anthropic({ apiKey: key });
}

// ── Chimi system prompt ─────────────────────────────────────────────────────

const SYSTEM_PROMPT = `Eres Chimi, el asistente digital de Health Growth, una empresa chilena que ayuda a pequeños negocios a verse bien, atraer más clientes y organizarse mejor.

PERSONALIDAD:
- Cálido, directo y sin jerga técnica.
- Hablas de tú, con tono amigable pero profesional.
- Usas el contexto del negocio del usuario para personalizar cada respuesta.
- Nunca inventas precios ni prometes resultados específicos.
- Si no sabes algo, lo dices con honestidad y ofreces conectar con el equipo.

TUS SOLUCIONES (catálogo actual — progresión lógica):
1. Diagnóstico Express (GRATIS) — Revisión del negocio, 3 mejoras concretas, sin compromiso. Para quien no sabe por dónde empezar.
2. Imagen Digital (IMAGEN + CONTENIDO) — Piezas gráficas para Instagram, imagen de marca, WhatsApp Business, perfil Instagram optimizado. Para quienes quieren verse bien y comunicar con confianza.
3. Captación Activa (CAPTACIÓN) — Contenido para Instagram (posts, historias, reels), estrategia de publicación, visibilidad local. Para quienes ya tienen imagen y quieren atraer más clientes nuevos.
4. Atención y Orden (ATENCIÓN) — Respuestas automáticas WhatsApp, agenda digital, registro de clientes, recordatorios. Para quienes pierden consultas o tienen todo desordenado.
5. Ecosistema Completo (INTEGRAL) — Todo lo anterior integrado + estrategia mensual + canales conectados. Para PYMEs que quieren crecer en serio.

PROGRESIÓN NATURAL DEL NEGOCIO:
- Sin imagen → Imagen Digital primero.
- Con imagen pero sin clientes nuevos → Captación Activa.
- Con consultas pero desordenado → Atención y Orden.
- Quiere todo funcionando junto → Ecosistema Completo.

RUBROS QUE ATENDEMOS: Barbería y peluquería, Grooming de mascotas, Estética y spa, Profesionales independientes (nutricionistas, psicólogos, dentistas, etc.), PYMEs y comercio local.

FLUJO DE CONVERSACIÓN:
1. Entender qué problema tiene el negocio (no qué solución quiere).
2. Hacer UNA pregunta de seguimiento para confirmar el contexto.
3. Recomendar la solución más adecuada con 2–3 razones específicas.
4. Ofrecer evaluación gratuita o conectar por WhatsApp.

RESTRICCIONES:
- No inventes precios. Si preguntan precio, di que se define en la evaluación gratuita.
- No hagas más de 2 preguntas seguidas.
- Respuestas cortas: máximo 3–4 oraciones por mensaje.
- Si el usuario pide hablar con una persona, usa handoff_to_human.

CONTACTO REAL: WhatsApp +56 9 5101 7947`;

// ── Tool definitions ────────────────────────────────────────────────────────

const TOOLS: Anthropic.Tool[] = [
  {
    name: 'get_healthgrowth_context',
    description: 'Retrieve business context stored from a previous interaction (need, pack, source). Use at conversation start to personalize the greeting.',
    input_schema: {
      type: 'object' as const,
      properties: {
        session_data: {
          type: 'object',
          description: 'sessionStorage data passed from the frontend: { need, pack, source }',
          properties: {
            need: { type: 'string' },
            pack: { type: 'string' },
            source: { type: 'string' },
          },
        },
      },
      required: [],
    },
  },
  {
    name: 'get_catalog',
    description: 'Get structured info about a specific Health Growth solution to present it to the user.',
    input_schema: {
      type: 'object' as const,
      properties: {
        pack_id: {
          type: 'string',
          enum: ['diagnostico', 'imagen', 'captacion', 'atencion', 'ecosistema'],
          description: 'Which solution to retrieve',
        },
      },
      required: ['pack_id'],
    },
  },
  {
    name: 'save_customer_context',
    description: 'Save what you learned about the customer during this conversation. Triggers a sessionStorage update on the frontend.',
    input_schema: {
      type: 'object' as const,
      properties: {
        need: { type: 'string', description: "Customer's core need (presencia/consultas/ordenar/tiempo/nosé)" },
        rubro: { type: 'string', description: 'Business type if disclosed' },
        pack_recommendation: { type: 'string', description: 'Recommended pack id' },
        notes: { type: 'string', description: 'Free-text notes about this customer for handoff' },
      },
      required: ['need'],
    },
  },
  {
    name: 'request_next_action',
    description: 'Ask the frontend to trigger a specific action: scroll to diagnostico form, scroll to packs, or open WhatsApp.',
    input_schema: {
      type: 'object' as const,
      properties: {
        action: {
          type: 'string',
          enum: ['scroll_to_diagnostico', 'scroll_to_packs', 'open_whatsapp'],
        },
        pack_id: { type: 'string', description: 'Pre-select this pack in the form (optional)' },
        whatsapp_message: { type: 'string', description: 'Pre-filled WhatsApp message (optional)' },
      },
      required: ['action'],
    },
  },
  {
    name: 'handoff_to_human',
    description: 'User wants to speak with a real person from Health Growth. Provide a warm handoff via WhatsApp.',
    input_schema: {
      type: 'object' as const,
      properties: {
        reason: { type: 'string', description: "Why the user wants a human (brief)" },
        context_summary: { type: 'string', description: 'Summary of the conversation to pass to the human agent' },
      },
      required: ['reason'],
    },
  },
];

// ── Catalog data (tool handler) ─────────────────────────────────────────────

const CATALOG: Record<string, object> = {
  diagnostico: {
    name: 'Diagnóstico Express Pyme',
    badge: 'GRATIS',
    tagline: 'Entiende qué frena tu negocio antes de invertir en nada.',
    benefits: ['Revisión de tu operación actual', '3 mejoras concretas', 'Plan de prioridades claro', 'Sin costo y sin compromiso'],
    model: 'Gratuito',
  },
  impulso: {
    name: 'Pack Impulso',
    badge: 'PRESENCIA',
    tagline: 'Presencia profesional que genera contactos.',
    benefits: ['Web profesional orientada a consultas', 'WhatsApp Business configurado', 'Imagen digital coherente', 'Perfil Instagram optimizado'],
    model: 'Pago único',
  },
  asistente: {
    name: 'Atención Automática',
    badge: 'ATENCIÓN',
    tagline: 'Responde y organiza sin que estés pendiente.',
    benefits: ['Respuestas automáticas WhatsApp', 'Consultas organizadas por tipo', 'Recordatorios de cita', 'Seguimiento a clientes'],
    model: 'Implementación + mensualidad',
  },
  automatizacion: {
    name: 'Pack Organización',
    badge: 'GESTIÓN',
    tagline: 'Clientes, agenda y seguimientos en un solo lugar.',
    benefits: ['Registro de clientes e historial', 'Agenda digital sin cruces', 'Seguimiento claro por cliente', 'Información para decidir mejor'],
    model: 'Implementación + mensualidad',
  },
  ecosistema: {
    name: 'Ecosistema Completo',
    badge: 'INTEGRAL',
    tagline: 'Presencia + atención + organización integrados.',
    benefits: ['Todo lo anterior funcionando junto', 'Seguimiento de resultados', 'Estrategia de contenido digital', 'Canales conectados entre sí'],
    model: 'Implementación + mensualidad',
  },
};

// ── Tool execution ──────────────────────────────────────────────────────────

function executeTool(name: string, input: Record<string, unknown>): unknown {
  switch (name) {
    case 'get_healthgrowth_context':
      return { context_loaded: true, session: input.session_data ?? null };

    case 'get_catalog': {
      const id = input.pack_id as string;
      return CATALOG[id] ?? { error: 'unknown pack_id' };
    }

    case 'save_customer_context':
      // Frontend applies this via the response payload
      return { saved: true, data: input };

    case 'request_next_action':
      // Frontend processes the action from response payload
      return { queued: true, action: input.action, pack_id: input.pack_id ?? null, whatsapp_message: input.whatsapp_message ?? null };

    case 'handoff_to_human':
      return {
        handoff: true,
        whatsapp_url: 'https://wa.me/56951017947',
        message: `Hola Health Growth. ${input.context_summary ?? ''} Me gustaría hablar con alguien del equipo.`,
      };

    default:
      return { error: 'unknown tool' };
  }
}

// ── Request / Response types ────────────────────────────────────────────────

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface ChimiRequest {
  messages: ChatMessage[];
  session?: { need?: string; pack?: string; source?: string };
}

interface ChimiResponse {
  text: string;
  actions?: unknown[];
  customer_context?: unknown;
  error?: string;
}

// ── Main handler ────────────────────────────────────────────────────────────

export async function POST(req: NextRequest): Promise<NextResponse<ChimiResponse>> {
  const client = getClient();

  if (!client) {
    return NextResponse.json(
      { text: '', error: 'AI_UNAVAILABLE' },
      { status: 503 },
    );
  }

  let body: ChimiRequest;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ text: '', error: 'INVALID_JSON' }, { status: 400 });
  }

  const { messages = [], session } = body;

  if (!messages.length) {
    return NextResponse.json({ text: '', error: 'NO_MESSAGES' }, { status: 400 });
  }

  // Inject session context into first user message if present
  const anthropicMessages: Anthropic.MessageParam[] = messages.map(m => ({
    role: m.role,
    content: m.content,
  }));

  if (session && Object.keys(session).length) {
    const contextNote = `[Contexto de sesión: ${JSON.stringify(session)}]`;
    if (anthropicMessages[0]?.role === 'user') {
      anthropicMessages[0] = {
        role: 'user',
        content: `${contextNote}\n\n${anthropicMessages[0].content}`,
      };
    }
  }

  const pendingActions: unknown[] = [];
  let customerContext: unknown = null;

  try {
    // Agentic loop — max 5 iterations to prevent runaway
    let iteration = 0;
    let currentMessages = anthropicMessages;

    while (iteration < 5) {
      iteration++;

      const response = await client.messages.create({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 512,
        system: SYSTEM_PROMPT,
        tools: TOOLS,
        messages: currentMessages,
      });

      if (response.stop_reason === 'end_turn') {
        // Extract text from response
        const textBlock = response.content.find(b => b.type === 'text');
        const text = textBlock?.type === 'text' ? textBlock.text : '';

        return NextResponse.json({
          text,
          actions: pendingActions.length ? pendingActions : undefined,
          customer_context: customerContext ?? undefined,
        });
      }

      if (response.stop_reason === 'tool_use') {
        const toolUseBlocks = response.content.filter(b => b.type === 'tool_use');
        const toolResults: Anthropic.ToolResultBlockParam[] = [];

        for (const block of toolUseBlocks) {
          if (block.type !== 'tool_use') continue;
          const result = executeTool(block.name, block.input as Record<string, unknown>);

          // Collect side-effects for the frontend
          if (block.name === 'request_next_action') {
            pendingActions.push(result);
          }
          if (block.name === 'save_customer_context') {
            customerContext = result;
          }

          toolResults.push({
            type: 'tool_result',
            tool_use_id: block.id,
            content: JSON.stringify(result),
          });
        }

        // Continue the loop with tool results
        currentMessages = [
          ...currentMessages,
          { role: 'assistant', content: response.content },
          { role: 'user', content: toolResults },
        ];
        continue;
      }

      // Unexpected stop reason — return whatever text we have
      const textBlock = response.content.find(b => b.type === 'text');
      const text = textBlock?.type === 'text' ? textBlock.text : 'No pude procesar eso.';
      return NextResponse.json({ text });
    }

    // Loop limit reached
    return NextResponse.json({ text: 'Lo siento, no pude completar la respuesta. ¿Puedes reformular tu pregunta?', error: 'LOOP_LIMIT' });

  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('[chimi/route] error:', message);
    return NextResponse.json({ text: '', error: `API_ERROR: ${message}` }, { status: 500 });
  }
}
