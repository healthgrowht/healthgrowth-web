"use client";
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { SITE_CONFIG } from './constants';
import { track } from './analytics';

// ── Types ──────────────────────────────────────────────────────────────────

interface QR { icon: string; label: string; value: string; }

interface PackInfo {
  name: string;
  tagline: string;
  benefits: string[];
  id: string;
  badge: string;
}

interface Msg {
  id: string;
  role: 'chimi' | 'user';
  text: string;
  qrs?: QR[];
  pack?: PackInfo;
  usedQrs?: boolean;
}

type Stage = 'welcome' | 'follow_up' | 'recommendation';

interface ChimiCtx {
  need: string | null;
  packId: string | null;
}

// ── Static data ────────────────────────────────────────────────────────────

const PACKS: Record<string, PackInfo> = {
  diagnostico: {
    name: "Diagnóstico Express Pyme",
    tagline: "Entiende qué frena tu negocio antes de invertir en nada.",
    benefits: ["Revisión de tu operación actual", "3 mejoras concretas", "Plan de prioridades claro", "Sin costo y sin compromiso"],
    id: "diagnostico", badge: "GRATIS",
  },
  impulso: {
    name: "Pack Impulso",
    tagline: "Presencia profesional que genera contactos.",
    benefits: ["Web profesional orientada a consultas", "WhatsApp Business configurado", "Imagen digital coherente", "Perfil Instagram optimizado"],
    id: "impulso", badge: "PRESENCIA",
  },
  asistente: {
    name: "Atención Automática",
    tagline: "Responde y organiza sin que estés pendiente.",
    benefits: ["Respuestas automáticas en WhatsApp", "Consultas organizadas por tipo", "Recordatorios de cita", "Seguimiento a clientes"],
    id: "asistente", badge: "ATENCIÓN",
  },
  automatizacion: {
    name: "Pack Organización",
    tagline: "Clientes, agenda y seguimientos en un solo lugar.",
    benefits: ["Registro de clientes e historial", "Agenda digital sin cruces", "Seguimiento claro por cliente", "Información para decidir mejor"],
    id: "automatizacion", badge: "GESTIÓN",
  },
  ecosistema: {
    name: "Ecosistema Completo",
    tagline: "Presencia + atención + organización integrados.",
    benefits: ["Todo lo anterior funcionando junto", "Seguimiento de resultados", "Estrategia de contenido digital", "Canales conectados entre sí"],
    id: "ecosistema", badge: "INTEGRAL",
  },
};

const NEED_TO_PACK: Record<string, string> = {
  empezar: "diagnostico", imagen: "impulso", promocionar: "impulso",
  consultas: "asistente", organizar: "automatizacion", agenda: "automatizacion",
  tiempo: "asistente", automatizar: "ecosistema", "nosé": "diagnostico",
  // V39.3 new IDs
  presencia: "impulso", ordenar: "automatizacion",
};

const WELCOME_QRS: QR[] = [
  { icon: "📣", label: "Darme a conocer", value: "presencia" },
  { icon: "💬", label: "Conseguir más clientes", value: "consultas" },
  { icon: "📋", label: "Ordenar mi negocio", value: "ordenar" },
  { icon: "⏱️", label: "Ahorrar tiempo", value: "tiempo" },
  { icon: "🤷", label: "No sé por dónde empezar", value: "nosé" },
];

const CONTEXT_ACK: Record<string, string> = {
  empezar:    "Vi que estás empezando tu negocio 🚀 ¡Buen momento para ordenarse bien desde el principio!",
  imagen:     "Vi que quieres mejorar cómo te ven en internet. Eso puede marcar mucha diferencia.",
  promocionar:"Vi que quieres dar a conocer y promocionar tu negocio 📣 ¡Perfecto, es un gran primer paso!",
  consultas:  "Vi que quieres conseguir más clientes. Vamos a ver cómo tu negocio puede recibir más oportunidades.",
  organizar:  "Vi que quieres ordenar tus clientes y su información. Con eso se gana mucho tiempo y claridad.",
  agenda:     "Vi que quieres organizar mejor tus horas y citas. Eso puede cambiar mucho tu día a día.",
  tiempo:     "Vi que quieres ahorrar tiempo en tu operación. Vamos a ver dónde está la mayor oportunidad.",
  automatizar:"Vi que quieres automatizar partes de tu negocio ⚙️ ¡Vamos a explorarlo!",
  "nosé":     "No pasa nada si no sabes bien qué necesitas 🐱 Para eso estoy acá.",
  // V39.3 new IDs
  presencia:  "Vi que quieres darte a conocer y que más personas encuentren tu negocio 📣",
  ordenar:    "Vi que quieres ordenar tu negocio. Con el sistema correcto eso cambia mucho el día a día.",
};

const FOLLOW_UPS: Record<string, { q: string; qrs: QR[] }> = {
  empezar: {
    q: "¡Buen momento para empezar bien ordenado! ¿Tienes algo de presencia digital hoy?",
    qrs: [{ icon:"📱", label:"Solo WhatsApp", value:"wa" }, { icon:"📸", label:"Tengo Instagram", value:"ig" }, { icon:"🌐", label:"Web básica", value:"web" }, { icon:"🚫", label:"Nada aún", value:"none" }],
  },
  imagen: {
    q: "Entiendo. ¿Cómo te ven tus clientes en internet hoy?",
    qrs: [{ icon:"🚫", label:"No tengo página", value:"none" }, { icon:"📱", label:"Solo redes sociales", value:"social" }, { icon:"🌐", label:"Web pero básica", value:"basic" }, { icon:"❓", label:"No sé bien", value:"unsure" }],
  },
  promocionar: {
    q: "¿Dónde estás mostrando tu negocio hoy?",
    qrs: [{ icon:"📱", label:"Solo WhatsApp", value:"wa" }, { icon:"📸", label:"Instagram / Facebook", value:"social" }, { icon:"👥", label:"Boca a boca", value:"word" }, { icon:"🚫", label:"Casi en ningún lado", value:"none" }],
  },
  consultas: {
    q: "¿Por dónde te llegan las consultas hoy?",
    qrs: [{ icon:"💬", label:"WhatsApp", value:"wa" }, { icon:"📸", label:"Instagram / DM", value:"ig" }, { icon:"👥", label:"Referidos", value:"ref" }, { icon:"🚫", label:"Casi no llegan", value:"few" }],
  },
  organizar: {
    q: "¿Dónde guardas la información de tus clientes hoy?",
    qrs: [{ icon:"🧠", label:"En la memoria", value:"memory" }, { icon:"💬", label:"WhatsApp", value:"wa" }, { icon:"📓", label:"Libreta o Excel", value:"book" }, { icon:"🗂️", label:"Varios lados", value:"scatter" }],
  },
  agenda: {
    q: "¿Cómo coordinas las horas o citas hoy?",
    qrs: [{ icon:"💬", label:"WhatsApp / llamadas", value:"wa" }, { icon:"🤝", label:"De palabra", value:"word" }, { icon:"📱", label:"Una app", value:"app" }, { icon:"🚫", label:"Sin sistema claro", value:"none" }],
  },
  tiempo: {
    q: "¿Qué tarea te consume más tiempo en tu día?",
    qrs: [{ icon:"💬", label:"Responder mensajes", value:"msgs" }, { icon:"📅", label:"Confirmar citas", value:"appts" }, { icon:"🔄", label:"Hacer seguimiento", value:"follow" }, { icon:"📢", label:"Repetir info", value:"repeat" }],
  },
  automatizar: {
    q: "¿Qué parte de tu negocio quisieras que funcionara más sola?",
    qrs: [{ icon:"💬", label:"Responder consultas", value:"replies" }, { icon:"📅", label:"Confirmar citas", value:"appts" }, { icon:"🔄", label:"Seguimiento a clientes", value:"follow" }, { icon:"⚡", label:"Todo lo que se pueda", value:"all" }],
  },
  "nosé": {
    q: "No te preocupes, es lo más normal 🐱 ¿A qué se dedica tu negocio?",
    qrs: [{ icon:"💆", label:"Salud y estética", value:"health" }, { icon:"🐾", label:"Mascotas", value:"pets" }, { icon:"💼", label:"Servicios profesionales", value:"pro" }, { icon:"🛍️", label:"Comercio / tienda", value:"shop" }, { icon:"🏢", label:"Otro tipo de negocio", value:"other" }],
  },
  // V39.3 new IDs
  presencia: {
    q: "¿Cómo te muestras en internet hoy?",
    qrs: [{ icon:"📱", label:"Solo WhatsApp", value:"wa" }, { icon:"📸", label:"Instagram / Facebook", value:"social" }, { icon:"🌐", label:"Web básica", value:"web" }, { icon:"🚫", label:"Casi nada", value:"none" }],
  },
  ordenar: {
    q: "¿Qué es lo más desordenado en tu negocio hoy?",
    qrs: [{ icon:"👥", label:"Mis clientes y su historial", value:"clients" }, { icon:"📅", label:"La agenda y las citas", value:"appts" }, { icon:"💬", label:"Los mensajes", value:"msgs" }, { icon:"🗂️", label:"Todo un poco", value:"all" }],
  },
};

const RECOMMENDATION_INTROS: Record<string, string> = {
  empezar:     "Con lo que me cuentas, el primer paso ideal es una revisión gratuita. Así sabrás exactamente qué necesitas antes de invertir nada:",
  imagen:      "Para que tus clientes te vean como un negocio serio y confiable, esto puede hacer la diferencia:",
  promocionar: "Para que más personas te encuentren y sepan cómo contactarte, esto podría cambiar tu situación concretamente:",
  consultas:   "Para que no pierdas ninguna consulta y respondas antes que la competencia:",
  organizar:   "Para tener todo en un solo lugar y dejar de depender de la memoria o el WhatsApp:",
  agenda:      "Para ordenar tus horas sin cruces ni llamadas de más, esto puede liberarte bastante tiempo:",
  tiempo:      "Para recuperar horas en tu día y dejar de responder lo mismo una y otra vez:",
  automatizar: "Para que tu operación funcione con menos esfuerzo de tu parte, esto sería el punto de partida:",
  "nosé":      "Para descubrir exactamente qué tiene sentido mejorar primero, el diagnóstico gratuito es el mejor inicio:",
  // V39.3 new IDs
  presencia:   "Para que más personas te encuentren y sepan cómo contactarte, esto puede marcar la diferencia:",
  ordenar:     "Para tener todo en un solo lugar y dejar de depender de la memoria o el WhatsApp:",
};

const ACTION_QRS: QR[] = [
  { icon: "🔍", label: "Ver la solución", value: "view_pack" },
  { icon: "📋", label: "Pedir evaluación gratuita", value: "get_eval" },
  { icon: "💬", label: "Hablar por WhatsApp", value: "whatsapp" },
];

// ── Main component ─────────────────────────────────────────────────────────

export default function ChimiChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [stage, setStage] = useState<Stage>('welcome');
  const [ctx, setCtx] = useState<ChimiCtx>({ need: null, packId: null });
  const [showTooltip, setShowTooltip] = useState(false);

  const messagesRef = useRef<HTMLDivElement>(null);
  const hasInit = useRef(false);

  // Tooltip: show at 4 s, hide at 10 s
  useEffect(() => {
    const t1 = setTimeout(() => setShowTooltip(true), 4000);
    const t2 = setTimeout(() => setShowTooltip(false), 10000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // Scroll to bottom whenever messages or typing state changes
  useEffect(() => {
    const el = messagesRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, isTyping]);

  const addChimiMsg = useCallback(
    (text: string, qrs?: QR[], pack?: PackInfo, delay = 650) => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const id = `${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
        setMessages(prev => [...prev, { id, role: 'chimi', text, qrs, pack }]);
      }, delay);
    },
    [],
  );

  // Init conversation on first open
  useEffect(() => {
    if (!open || hasInit.current) return;
    hasInit.current = true;
    track.chimiOpen();

    let storedNeed: string | null = null;
    try { storedNeed = sessionStorage.getItem('chimi-need'); } catch { /* ok */ }

    if (storedNeed && FOLLOW_UPS[storedNeed]) {
      const need = storedNeed; // capture for closures
      const qr = WELCOME_QRS.find(q => q.value === need);
      setCtx(c => ({ ...c, need }));
      setStage('follow_up');
      setMessages([{ id: 'init-u', role: 'user', text: `${qr?.icon ?? ''} ${qr?.label ?? need}` }]);
      const ack = CONTEXT_ACK[need];
      if (ack) {
        addChimiMsg(ack, undefined, undefined, 500);
        setTimeout(() => addChimiMsg(FOLLOW_UPS[need].q, FOLLOW_UPS[need].qrs, undefined, 700), 1300);
      } else {
        addChimiMsg(FOLLOW_UPS[need].q, FOLLOW_UPS[need].qrs, undefined, 700);
      }
    } else {
      setTimeout(() =>
        addChimiMsg(
          "Hola, soy Chimi, el asistente digital de Health Growth.\n\nCuéntame qué te gustaría mejorar en tu negocio. Si no sabes cómo explicarlo, no importa: te ayudo.",
          WELCOME_QRS, undefined, 600,
        ), 200,
      );
    }
  }, [open, addChimiMsg]);

  // Handle quick-reply click — receives current stage & ctx to avoid stale closures
  const handleQR = useCallback(
    (msgId: string, qr: QR, snapStage: Stage, snapCtx: ChimiCtx) => {
      track.chimiQuickReply(qr.value, snapStage);

      const uid = `${Date.now()}-u`;
      setMessages(prev =>
        prev
          .map(m => m.id === msgId ? { ...m, usedQrs: true } : m)
          .concat({ id: uid, role: 'user', text: `${qr.icon} ${qr.label}` }),
      );

      if (snapStage === 'welcome') {
        const need = qr.value;
        setCtx(c => ({ ...c, need }));
        setStage('follow_up');
        const fu = FOLLOW_UPS[need];
        addChimiMsg(fu.q, fu.qrs);

      } else if (snapStage === 'follow_up') {
        const need = snapCtx.need ?? 'nosé';
        const packId = NEED_TO_PACK[need] ?? 'diagnostico';
        const pack = PACKS[packId];
        setCtx(c => ({ ...c, packId }));
        setStage('recommendation');
        track.chimiRecommendation(packId);
        addChimiMsg(
          RECOMMENDATION_INTROS[need] ?? "Por lo que me cuentas, esto podría ser una buena forma de empezar:",
          ACTION_QRS, pack, 800,
        );

      } else {
        // recommendation actions
        doAction(qr.value, snapCtx);
      }
    },
    [addChimiMsg],
  );

  const doAction = (action: string, snapCtx: ChimiCtx) => {
    const packId = snapCtx.packId ?? 'diagnostico';

    if (action === 'view_pack') {
      track.solutionView(packId);
      try { sessionStorage.setItem('hg-pack', packId); } catch { /* ok */ }
      setOpen(false);
      setTimeout(() => document.getElementById('packs')?.scrollIntoView({ behavior: 'smooth' }), 150);

    } else if (action === 'get_eval') {
      track.chimiForm(packId);
      try {
        sessionStorage.setItem('hg-pack', packId);
        sessionStorage.setItem('chimi-context', JSON.stringify({ need: snapCtx.need, pack: packId, source: 'chimi' }));
      } catch { /* ok */ }
      setOpen(false);
      setTimeout(() => document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' }), 150);

    } else if (action === 'whatsapp') {
      const needLabel = snapCtx.need ? (WELCOME_QRS.find(q => q.value === snapCtx.need)?.label ?? snapCtx.need) : '';
      const packName = PACKS[packId]?.name ?? '';
      const msg = needLabel
        ? `Hola Health Growth. Estuve conversando con Chimi en la web. Quiero ${needLabel.toLowerCase()} y me recomendó ${packName}. Me gustaría orientación.`
        : 'Hola, estuve conversando con Chimi en la web y me gustaría orientación para mi negocio.';
      track.chimiWhatsapp(snapCtx.need ?? 'unknown');
      window.open(`${SITE_CONFIG.whatsapp.url}?text=${encodeURIComponent(msg)}`, '_blank');
    }
  };

  const handleFreeText = (text: string) => {
    if (!text.trim()) return;
    track.chimiMessage();
    const uid = `${Date.now()}-u`;
    setMessages(prev => [...prev, { id: uid, role: 'user', text: text.trim() }]);
    addChimiMsg(
      "Entendido 🐱 ¿Se parece a alguna de estas opciones? Así puedo orientarte mejor.",
      WELCOME_QRS, undefined, 900,
    );
    setStage('welcome');
    setCtx({ need: null, packId: null });
  };

  const toggle = () => {
    setOpen(o => !o);
    setShowTooltip(false);
  };

  return (
    <div
      className="fixed left-5 z-[60]"
      style={{ bottom: 'calc(1.5rem + env(safe-area-inset-bottom, 0px))' }}
    >
      {/* ── Chat panel ────────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.95 }}
            transition={{ duration: 0.22, type: 'spring', stiffness: 320, damping: 32 }}
            className="absolute bottom-[72px] left-0 flex flex-col rounded-[24px] bg-[#09132a] border border-white/10 shadow-2xl shadow-black/60 overflow-hidden"
            style={{ width: 'min(360px, calc(100vw - 40px))', maxHeight: 'min(580px, 70svh)' }}
            role="dialog"
            aria-modal="true"
            aria-label="Chat con Chimi"
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 bg-[#060e1f] border-b border-white/[0.06] flex-shrink-0">
              <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-indigo-500/40 flex-shrink-0">
                <Image src="/images/chimi.jpeg" alt="Chimi" width={36} height={36} className="w-full h-full object-cover object-[85%_25%]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-bold text-sm leading-none">Chimi</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                  <p className="text-green-400 text-[10px]">Asistente digital · Health Growth</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/[0.12] flex items-center justify-center text-gray-500 hover:text-white transition-all flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                aria-label="Cerrar chat"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Messages area */}
            <div
              ref={messagesRef}
              className="flex-1 overflow-y-auto px-4 py-4 space-y-4 min-h-0"
              style={{ scrollbarWidth: 'none' }}
            >
              {messages.map(msg => (
                <div key={msg.id}>
                  {msg.role === 'chimi' ? (
                    <div className="flex gap-2 items-start">
                      <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0 border border-indigo-500/25 mt-0.5">
                        <Image src="/images/chimi.jpeg" alt="" width={28} height={28} className="w-full h-full object-cover object-[85%_25%]" />
                      </div>
                      <div className="flex-1 space-y-2.5 min-w-0">
                        {/* Bubble */}
                        <div className="bg-zinc-800/70 border border-white/[0.06] rounded-2xl rounded-tl-sm px-3 py-2.5 max-w-[260px] text-gray-200 text-[13px] leading-relaxed">
                          {msg.text.split('\n').map((line, i, arr) => (
                            <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                          ))}
                        </div>

                        {/* Pack card */}
                        {msg.pack && (
                          <motion.div
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-[#071f3a] border border-cyan-500/20 rounded-2xl p-3.5 max-w-[260px]"
                          >
                            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-cyan-400">{msg.pack.badge}</span>
                            <p className="text-white font-bold text-sm mt-0.5 leading-tight">{msg.pack.name}</p>
                            <p className="text-gray-400 text-xs mt-1.5 leading-relaxed">{msg.pack.tagline}</p>
                            <ul className="mt-2 space-y-1">
                              {msg.pack.benefits.map((b, i) => (
                                <li key={i} className="flex items-start gap-1.5 text-[11px] text-gray-400 leading-snug">
                                  <span className="text-cyan-400 flex-shrink-0 mt-0.5 text-[10px]">✓</span>
                                  {b}
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}

                        {/* Quick replies */}
                        {msg.qrs && !msg.usedQrs && (
                          <div className="flex flex-wrap gap-1.5">
                            {msg.qrs.map((qr, i) => (
                              <button
                                key={i}
                                onClick={() => handleQR(msg.id, qr, stage, ctx)}
                                className="flex items-center gap-1 px-2.5 py-1.5 min-h-[36px] rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[12px] font-medium hover:bg-indigo-500/25 hover:border-indigo-500/45 transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-400"
                              >
                                <span className="text-sm leading-none">{qr.icon}</span>
                                <span>{qr.label}</span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-end">
                      <div className="bg-indigo-600/25 border border-indigo-500/20 rounded-2xl rounded-tr-sm px-3 py-2.5 text-[13px] text-gray-200 max-w-[230px] leading-relaxed">
                        {msg.text}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Typing dots */}
              <AnimatePresence>
                {isTyping && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex gap-2 items-center">
                    <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0 border border-indigo-500/25">
                      <Image src="/images/chimi.jpeg" alt="" width={28} height={28} className="w-full h-full object-cover object-[85%_25%]" />
                    </div>
                    <div className="bg-zinc-800/70 border border-white/[0.06] rounded-2xl rounded-tl-sm px-3 py-2.5">
                      <span className="flex gap-1 items-center h-4">
                        {[0, 1, 2].map(i => (
                          <motion.span key={i} className="w-1.5 h-1.5 bg-gray-500 rounded-full inline-block"
                            animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
                            transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.22, ease: 'easeInOut' }}
                          />
                        ))}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Text input */}
            <ChatInput onSend={handleFreeText} />

            <p className="text-center text-gray-700 text-[10px] pb-2.5 flex-shrink-0 px-4">
              Chimi en tu sitio · Health Growth
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Launcher button ────────────────────────────────────── */}
      <div className="relative">
        {/* Tooltip bubble */}
        <AnimatePresence>
          {showTooltip && !open && (
            <motion.div
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -6 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-2 left-[68px] pointer-events-none"
            >
              <div className="relative bg-[#09132a] border border-white/10 text-gray-300 text-[12px] px-3 py-2 rounded-xl shadow-lg font-medium whitespace-nowrap">
                ¿Te ayudo? 🐱
                <span
                  className="absolute top-1/2 -left-[7px] w-3 h-3 bg-[#09132a] border-l border-b border-white/10"
                  style={{ transform: 'translateY(-50%) rotate(45deg)', display: 'block' }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={toggle}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.92 }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.4, type: 'spring', stiffness: 260, damping: 22 }}
          className="relative w-14 h-14 rounded-full overflow-hidden shadow-2xl shadow-indigo-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          aria-label={open ? 'Cerrar chat con Chimi' : 'Abrir chat con Chimi'}
          aria-expanded={open}
        >
          {/* Pulse ring */}
          {!open && (
            <span className="absolute inset-0 rounded-full border-2 border-indigo-400/50 animate-ping pointer-events-none" />
          )}
          {/* Border */}
          <span className="absolute inset-0 rounded-full border-2 border-indigo-500/60 pointer-events-none z-10" />

          <Image
            src="/images/chimi.jpeg"
            alt="Chimi — Asistente Health Growth"
            width={56}
            height={56}
            className="w-full h-full object-cover object-[85%_25%]"
          />

          {/* Close overlay */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/55 flex items-center justify-center z-20"
              >
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                  <path d="M1 1l10 10M11 1L1 11" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}

// ── ChatInput sub-component ────────────────────────────────────────────────

function ChatInput({ onSend }: { onSend: (text: string) => void }) {
  const [val, setVal] = useState('');
  const ref = useRef<HTMLInputElement>(null);

  const submit = () => {
    if (!val.trim()) return;
    onSend(val.trim());
    setVal('');
    ref.current?.focus();
  };

  return (
    <div className="px-3 pb-3 pt-2 flex-shrink-0 border-t border-white/[0.06]">
      <div className="flex gap-2 items-end">
        <input
          ref={ref}
          value={val}
          onChange={e => setVal(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) submit(); }}
          placeholder="Cuéntame sobre tu negocio..."
          className="flex-1 bg-zinc-900/70 border border-white/[0.1] rounded-2xl px-4 py-3 text-[14px] text-white placeholder:text-gray-500 outline-none focus:border-indigo-500/60 focus:bg-zinc-900 transition-all min-h-[44px]"
          aria-label="Mensaje a Chimi"
        />
        <button
          onClick={submit}
          disabled={!val.trim()}
          className="w-10 h-10 min-h-[44px] min-w-[40px] rounded-2xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-20 flex items-center justify-center text-white transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          aria-label="Enviar"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 8h12M9 3l5 5-5 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
