/**
 * Health Growth WhatsApp Assistant API
 *
 * STATUS: ARCHITECTURE_READY — BLOCKED_HUMAN (GATE_WA + GATE_2)
 * Gates:
 *   GATE_WA  — Meta App + WhatsApp Business API credentials
 *   GATE_2   — n8n owner account to activate webhook routing
 *
 * Uses the SAME canonical commercial knowledge as Chimi web (/api/chimi).
 * ONE brain — no conflicting packs, prices, FAQ or recommendations.
 *
 * When gates are completed:
 *   1. Set WA_ASSISTANT_ENABLED=true in environment
 *   2. n8n "WhatsApp — Router de Webhook Unificado" routes to this endpoint
 *   3. This endpoint replies via Meta WhatsApp Business API
 */

import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import {
  CATALOG,
  HG_CONTACT,
  SECURITY_RULES,
  FAQ,
  CONVERSATION_FLOW_RULES,
  buildHandoffMessage,
} from '../../../lib/hg-commercial-knowledge';

// ── Guard — returns 503 until gate is explicitly enabled ───────────────────

const WA_ENABLED = process.env.WA_ASSISTANT_ENABLED === 'true';

// ── Anthropic client ───────────────────────────────────────────────────────

function getClient(): Anthropic | null {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return null;
  return new Anthropic({ apiKey: key });
}

// ── WhatsApp assistant system prompt ───────────────────────────────────────

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

const SYSTEM_PROMPT = `Eres el asistente de WhatsApp de Health Growth — la misma inteligencia comercial que Chimi en el sitio web, adaptada al canal WhatsApp.

${SECURITY_RULES}

════════════════════════════════════════
CANAL: WHATSAPP
════════════════════════════════════════
- Respuestas más cortas que en web: máximo 3 oraciones por mensaje
- Formato: texto plano, sin markdown, sin bullets complejos (usa guiones simples si es necesario)
- Si el prospecto viene del sitio web con contexto de Chimi, úsalo: no pidas que repita lo que ya dijo

════════════════════════════════════════
QUIÉN ES HEALTH GROWTH
════════════════════════════════════════
${HG_CONTACT.legal_name} — empresa digital chilena que ayuda a PYMEs a verse bien, atraer clientes y organizarse mejor.
Sitio: ${HG_CONTACT.website}

════════════════════════════════════════
CATÁLOGO (información verificada)
════════════════════════════════════════

${CATALOG_TEXT}

PRECIOS: Se definen en la evaluación gratuita. No los inventes.

${CONVERSATION_FLOW_RULES}

${FAQ}

════════════════════════════════════════
CONTINUIDAD CON CHIMI WEB
════════════════════════════════════════
Si el mensaje incluye contexto de Chimi (tipo de negocio, necesidad, solución recomendada), continúa la conversación desde ahí. No vuelvas a hacer preguntas que Chimi ya respondió.

════════════════════════════════════════
ESCALACIÓN A CARLOS (humano)
════════════════════════════════════════
Escala a Carlos cuando:
- El prospecto quiere negociar una excepción o precio especial
- Hay una queja o problema que requiere decisión del dueño
- El prospecto quiere contratar y necesita confirmar términos
- La pregunta tiene implicaciones legales o contractuales
- No tienes información verificada para responder correctamente

Al escalar, avisa: "Voy a avisarle a Carlos para que te atienda personalmente. Puede tomar unos minutos. Mientras tanto, ¿hay algo más en lo que pueda ayudarte?"`;

// ── Request handler ────────────────────────────────────────────────────────

export async function POST(req: NextRequest): Promise<NextResponse> {
  if (!WA_ENABLED) {
    return NextResponse.json(
      {
        status: 'BLOCKED_HUMAN',
        message: 'WhatsApp AI assistant is not yet active. Gates required: GATE_WA (Meta App credentials) + GATE_2 (n8n owner account).',
        click_to_chat_url: HG_CONTACT.whatsapp_url,
      },
      { status: 503 },
    );
  }

  const client = getClient();
  if (!client) {
    return NextResponse.json({ error: 'AI_UNAVAILABLE' }, { status: 503 });
  }

  let body: {
    message: string;
    from?: string;
    chimi_context?: {
      need?: string;
      pack?: string;
      businessType?: string;
      notes?: string;
    };
    conversation_history?: Array<{ role: 'user' | 'assistant'; content: string }>;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'INVALID_JSON' }, { status: 400 });
  }

  const { message, chimi_context, conversation_history = [] } = body;

  if (!message?.trim()) {
    return NextResponse.json({ error: 'NO_MESSAGE' }, { status: 400 });
  }

  // Build context prefix if coming from Chimi web
  let userMessageContent = message;
  if (chimi_context) {
    const ctx = [
      chimi_context.businessType && `Negocio: ${chimi_context.businessType}`,
      chimi_context.need && `Necesidad: ${chimi_context.need}`,
      chimi_context.pack && `Solución recomendada por Chimi: ${CATALOG[chimi_context.pack]?.name ?? chimi_context.pack}`,
      chimi_context.notes && `Notas previas: ${chimi_context.notes}`,
    ].filter(Boolean).join(' | ');
    if (ctx) {
      userMessageContent = `[Contexto de Chimi web: ${ctx}]\n\n${message}`;
    }
  }

  const messages: Anthropic.MessageParam[] = [
    ...conversation_history.map(m => ({ role: m.role, content: m.content })),
    { role: 'user' as const, content: userMessageContent },
  ];

  try {
    const response = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 400,
      system: SYSTEM_PROMPT,
      messages,
    });

    const textBlock = response.content.find(b => b.type === 'text');
    const text = textBlock?.type === 'text' ? textBlock.text : '';

    // Detect if human escalation is needed (heuristic — real routing via n8n)
    const needsHuman = /carlos|escalar|dueño|persona real|hablar contigo directamente/i.test(text);

    return NextResponse.json({
      text,
      needs_human_escalation: needsHuman,
      handoff_message: needsHuman
        ? buildHandoffMessage({
            businessType: chimi_context?.businessType,
            recommendedPack: chimi_context?.pack,
            source: 'whatsapp',
          })
        : undefined,
    });

  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('[wa-assistant/route] error:', message);
    return NextResponse.json({ error: `API_ERROR: ${message}` }, { status: 500 });
  }
}

// Health check
export async function GET(): Promise<NextResponse> {
  return NextResponse.json({
    status: WA_ENABLED ? 'ACTIVE' : 'BLOCKED_HUMAN',
    gates_required: WA_ENABLED ? [] : ['GATE_WA', 'GATE_2'],
    canonical_knowledge_source: 'lib/hg-commercial-knowledge.ts',
    same_brain_as_chimi: true,
    whatsapp_number: HG_CONTACT.whatsapp_number,
  });
}
