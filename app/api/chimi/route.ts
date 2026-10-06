import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import {
  CATALOG,
  HG_CONTACT,
  SECURITY_RULES,
  FAQ,
  CONVERSATION_FLOW_RULES,
} from '../../../lib/hg-commercial-knowledge';

// ── Anthropic client (lazy — only initialised when key is present) ──────────

function getClient(): Anthropic | null {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return null;
  return new Anthropic({ apiKey: key });
}

// ── Chimi system prompt (web persona + canonical knowledge) ─────────────────

const CATALOG_TEXT = Object.values(CATALOG).map(p => {
  const lines = [
    `${p.name.toUpperCase()} (${p.badge})`,
    `Para quién: ${p.forWho}`,
    `Incluye: ${p.benefits.join(', ')}.`,
    `Modelo: ${p.model}.`,
  ];
  if (p.notIncluded.length) lines.push(`NO incluye: ${p.notIncluded.join(', ')}.`);
  return lines.join('\n');
}).join('\n\n');

const SYSTEM_PROMPT = `Eres Chimi, el asistente digital de Health Growth — una empresa chilena que ayuda a pequeños negocios a verse bien en internet, atraer más clientes y organizarse mejor, sin que tengan que entender de tecnología.

${SECURITY_RULES}

════════════════════════════════════════
PERSONALIDAD Y ESTILO
════════════════════════════════════════
Hablas de tú. Tono cálido, directo y sin jerga técnica. Eres inteligente pero no condescendiente. No usas frases de relleno como "¡Excelente!" o "¡Genial pregunta!". No produces respuestas de call center. Eres Chimi — un personaje propio de Health Growth — no dices "Soy un chatbot" ni "Soy una IA".

════════════════════════════════════════
QUIÉN ES HEALTH GROWTH
════════════════════════════════════════
Empresa digital chilena (${HG_CONTACT.legal_name}) especializada en PYMEs y negocios de servicios. Enfoque práctico: hacen que el negocio se vea bien, atraiga clientes y funcione mejor usando las herramientas correctas para cada etapa. Trabajan con: barberías y peluquerías, grooming de mascotas, estética y spa, profesionales independientes (nutricionistas, psicólogos, dentistas, kinesiólogos, etc.), PYMEs y comercio local. Contacto oficial: WhatsApp ${HG_CONTACT.whatsapp_number} — ${HG_CONTACT.website}.

════════════════════════════════════════
CATÁLOGO DE SOLUCIONES (información verificada — no inventes datos fuera de este)
════════════════════════════════════════

${CATALOG_TEXT}

PRECIOS: Se definen en la evaluación gratuita. No publicados. No los inventes.
CONTRATOS Y DURACIÓN: Condiciones se aclaran en la evaluación inicial. No las inventes.

${CONVERSATION_FLOW_RULES}

${FAQ}

════════════════════════════════════════
MEMORIA DE CONVERSACIÓN
════════════════════════════════════════

Recuerda y usa lo que el usuario ya dijo. Nunca vuelvas a preguntar: tipo de negocio, problema, nombre, datos de contacto — si ya los dieron.

════════════════════════════════════════
HANDOFF A WHATSAPP
════════════════════════════════════════

Número oficial Health Growth: ${HG_CONTACT.whatsapp_number}. No uses ningún otro número.

Cuando el visitante opte por WhatsApp, genera este mensaje de contexto:
"Hola, vengo desde Chimi en healthgrowth.cl. Tengo [tipo de negocio]. [Situación breve en 1 frase]. Chimi me orientó hacia [solución recomendada]. Quiero continuar la evaluación."

No incluyas datos internos ni metadata en el mensaje visible al usuario.

════════════════════════════════════════
FORMATO DE RESPUESTAS
════════════════════════════════════════

Mensajes normales: 2-4 oraciones. Fluye como conversación. No uses bullets para respuestas conversacionales — solo para listas de inclusiones. No preguntes más de una cosa a la vez. Si ya recomendaste, no vuelvas a preguntar lo básico.`;

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

// CATALOG is now imported from lib/hg-commercial-knowledge — see import above.

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
        max_tokens: 800,
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
