"use client";
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const NODES = [
  {
    icon: "🌐",
    id: "lead",
    label: "Consulta llega",
    channel: "Web · WhatsApp · Instagram",
    event: "LEAD_CAPTURED",
    badge: "Nuevo",
    notification: "Formulario enviado desde healthgrowth.cl",
    color: "cyan",
  },
  {
    icon: "📊",
    id: "crm",
    label: "Se registra",
    channel: "Nada se pierde",
    event: "CRM_UPDATED",
    badge: "guardado",
    notification: "Consulta registrada correctamente",
    color: "blue",
  },
  {
    icon: "🤖",
    id: "ai",
    label: "Clasifica y responde",
    channel: "Califica · Responde",
    event: "AI_QUALIFIED",
    badge: "score:8/10",
    notification: "Intención: agendar evaluación → prioridad alta",
    color: "indigo",
  },
  {
    icon: "💬",
    id: "whatsapp",
    label: "WhatsApp",
    channel: "Respuesta < 2 min",
    event: "WA_SENT",
    badge: "enviado",
    notification: "Hola, recibimos tu consulta. Te contactamos hoy.",
    color: "green",
  },
  {
    icon: "📅",
    id: "booking",
    label: "Reserva",
    channel: "Confirmada · Calendar",
    event: "BOOKING_CONFIRMED",
    badge: "✓",
    notification: "Evaluación agendada. Recordatorio automático programado.",
    color: "emerald",
  },
];

const COLORS: Record<string, { node: string; badge: string; text: string; line: string }> = {
  cyan:    { node: "bg-cyan-500/15 border-cyan-500/40",    badge: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",    text: "text-cyan-300",    line: "bg-cyan-500" },
  blue:    { node: "bg-blue-500/15 border-blue-500/40",    badge: "bg-blue-500/20 text-blue-300 border-blue-500/30",    text: "text-blue-300",    line: "bg-blue-500" },
  indigo:  { node: "bg-indigo-500/15 border-indigo-500/40", badge: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30", text: "text-indigo-300", line: "bg-indigo-500" },
  green:   { node: "bg-green-500/15 border-green-500/40",  badge: "bg-green-500/20 text-green-300 border-green-500/30",  text: "text-green-300",  line: "bg-green-500" },
  emerald: { node: "bg-emerald-500/15 border-emerald-500/40", badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30", text: "text-emerald-300", line: "bg-emerald-500" },
};

export default function LiveSystemFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeStep, setActiveStep] = useState(-1);
  const [logEntries, setLogEntries] = useState<number[]>([]);

  useEffect(() => {
    if (!inView) return;
    let step = 0;
    const tick = () => {
      if (step >= NODES.length) return;
      setActiveStep(step);
      setLogEntries(prev => [...prev, step]);
      step++;
      if (step < NODES.length) setTimeout(tick, 900);
    };
    const t = setTimeout(tick, 400);
    return () => clearTimeout(t);
  }, [inView]);

  return (
    <section ref={ref} className="py-16 md:py-24 px-6 bg-[#040e1f] border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/[0.07] border border-cyan-500/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-400">Demo del flujo · Así funciona</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight mb-3">
            Del primer contacto a la cita confirmada
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-xl">
            Cada consulta que llega se registra, clasifica, responde y agenda — sin que tengas que hacer nada.
          </p>
        </motion.div>

        {/* Pipeline — desktop horizontal / mobile vertical */}
        <div className="relative mb-10">
          {/* Desktop: horizontal flow */}
          <div className="hidden md:flex items-start gap-0">
            {NODES.map((node, i) => {
              const active = i <= activeStep;
              const c = COLORS[node.color];
              return (
                <div key={node.id} className="flex items-center flex-1 min-w-0">
                  <div className="flex-1 flex flex-col items-center gap-2 relative">
                    {/* Node */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={active ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0.25 }}
                      transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl border-2 transition-all duration-500 ${active ? c.node : 'bg-white/[0.03] border-white/10'}`}
                    >
                      {node.icon}
                    </motion.div>

                    {/* Badge */}
                    <AnimatePresence>
                      {active && (
                        <motion.span
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0 }}
                          transition={{ delay: 0.2 }}
                          className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider border ${c.badge}`}
                        >
                          {node.badge}
                        </motion.span>
                      )}
                    </AnimatePresence>

                    <p className={`text-[11px] font-bold text-center transition-colors duration-500 ${active ? 'text-white' : 'text-gray-600'}`}>{node.label}</p>
                    <p className="text-[9px] text-gray-600 text-center leading-tight">{node.channel}</p>
                  </div>

                  {/* Connector */}
                  {i < NODES.length - 1 && (
                    <div className="flex-shrink-0 w-8 flex items-center justify-center mt-[-28px]">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={i < activeStep ? { scaleX: 1 } : { scaleX: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className={`h-0.5 w-full origin-left ${COLORS[NODES[i].color].line}`}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile: vertical flow */}
          <div className="md:hidden space-y-1">
            {NODES.map((node, i) => {
              const active = i <= activeStep;
              const c = COLORS[node.color];
              return (
                <div key={node.id}>
                  <motion.div
                    initial={{ x: -12, opacity: 0 }}
                    animate={active ? { x: 0, opacity: 1 } : { x: -12, opacity: 0.3 }}
                    transition={{ duration: 0.35 }}
                    className={`flex items-center gap-3 p-3 rounded-2xl border transition-all duration-400 ${active ? c.node : 'bg-white/[0.02] border-white/5'}`}
                  >
                    <span className="text-xl flex-shrink-0">{node.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-bold ${active ? 'text-white' : 'text-gray-500'}`}>{node.label}</p>
                      <p className="text-[10px] text-gray-600">{node.channel}</p>
                    </div>
                    {active && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className={`flex-shrink-0 px-2 py-0.5 rounded-full text-[9px] font-bold border ${c.badge}`}
                      >
                        {node.badge}
                      </motion.span>
                    )}
                  </motion.div>
                  {i < NODES.length - 1 && (
                    <div className="ml-6 w-0.5 h-3 bg-white/10" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Live log feed */}
        <div className="bg-[#071428]/80 backdrop-blur border border-white/[0.07] rounded-[20px] p-4 md:p-5">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/[0.05]">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-gray-500">Health Growth · Flujo de ejemplo</span>
            <span className="ml-auto font-mono text-[9px] text-cyan-500/50">api.healthgrowth.cl</span>
          </div>
          <div className="space-y-2 min-h-[80px]">
            <AnimatePresence>
              {logEntries.map((idx) => {
                const node = NODES[idx];
                const c = COLORS[node.color];
                return (
                  <motion.div
                    key={`log-${idx}`}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-start gap-3 font-mono text-[11px]"
                  >
                    <span className={`flex-shrink-0 font-bold ${c.text}`}>{node.event}</span>
                    <span className="text-gray-600 truncate">{node.notification}</span>
                  </motion.div>
                );
              })}
            </AnimatePresence>
            {logEntries.length === 0 && (
              <div className="flex items-center gap-2 font-mono text-[11px] text-gray-700">
                <span className="animate-pulse">▋</span>
                <span>esperando scroll para activar demo…</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
