"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { SITE_CONFIG } from './constants';
import { WhatsAppIcon } from './SocialIcons';

const features = [
  {
    icon: "🤖",
    title: "Respuestas fuera del horario",
    description: "Flujos automáticos en WhatsApp que responden y califican consultas cuando no estás disponible.",
  },
  {
    icon: "🔄",
    title: "Seguimiento programado",
    description: "Recordatorios y confirmaciones automáticas que reducen inasistencias y olvidos.",
  },
  {
    icon: "📈",
    title: "Recuperación de leads",
    description: "Flujos para reactivar contactos que no cerraron y detectar oportunidades sin seguimiento.",
  },
];

const flowSteps = [
  { icon: "💬", label: "Consulta", sub: "WhatsApp / Web" },
  { icon: "🔍", label: "Clasifica", sub: "Tipo y prioridad" },
  { icon: "⚡", label: "Responde", sub: "Sin espera" },
  { icon: "📋", label: "Seguimiento", sub: "Programado" },
];

const CHIMI_MESSAGES = [
  "¡Hola! Soy Chimi 🐱 ¿En qué puedo ayudarte hoy?",
  "¿Quieres modernizar tu negocio? Te conecto con el equipo.",
  "¡Pregúntame sobre los servicios de Health Growth!",
  "¿Listo para dar el siguiente paso? 🚀",
];

export default function AutomationAI() {
  const [chatOpen, setChatOpen] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);

  const nextMessage = () => setMsgIndex((prev) => (prev + 1) % CHIMI_MESSAGES.length);

  const whatsappChimi = `${SITE_CONFIG.whatsapp.url}?text=${encodeURIComponent('Hola, me contacta Chimi desde la web de Health Growth. Me gustaría saber más sobre cómo pueden ayudar a mi negocio.')}`;

  return (
    <section id="automatizacion" className="py-14 md:py-20 px-6 bg-[#071428] border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400 mb-2 block">Cómo funciona Health Growth</span>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">Tu operación organizada, aunque no estés mirando</h2>
          <p className="text-gray-500 text-sm max-w-xl">Flujos automáticos para que cada consulta tenga respuesta, cada cita tenga recordatorio y cada lead tenga seguimiento.</p>
        </div>

        {/* Flow — horizontal compact */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>
          {flowSteps.map((step, i) => (
            <div key={i} className="flex items-center gap-2 flex-shrink-0">
              <div className="flex flex-col items-center text-center p-3 rounded-xl bg-white/5 border border-white/8 min-w-[72px]">
                <span className="text-lg mb-1">{step.icon}</span>
                <p className="text-white text-[11px] font-semibold leading-tight">{step.label}</p>
                <p className="text-gray-600 text-[10px] leading-tight">{step.sub}</p>
              </div>
              {i < flowSteps.length - 1 && (
                <span className="text-cyan-500/30 text-base flex-shrink-0">→</span>
              )}
            </div>
          ))}
        </div>

        {/* 2-col: features + Chimi */}
        <div className="grid md:grid-cols-2 gap-5">
          {/* Features */}
          <div className="space-y-3">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/8 hover:border-cyan-500/20 transition-all"
              >
                <span className="text-xl flex-shrink-0">{f.icon}</span>
                <div>
                  <p className="text-white font-bold text-sm mb-0.5">{f.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{f.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Chimi card — identity preserved */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[24px] bg-zinc-900/60 border border-white/10 overflow-hidden"
          >
            {/* Chimi header */}
            <div className="flex items-center gap-3 p-4 border-b border-white/5 bg-zinc-900/80">
              <div className="relative w-10 h-10 rounded-full border-2 border-indigo-500/40 overflow-hidden flex-shrink-0">
                <Image
                  src="/images/chimi.jpeg"
                  alt="Chimi"
                  width={40}
                  height={40}
                  className="object-cover w-full h-full object-[85%_25%]"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-bold text-sm">Chimi</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                  <span className="text-green-400 text-[11px] truncate">Embajador Digital · Health Growth</span>
                </div>
              </div>
              <button
                onClick={() => setChatOpen(!chatOpen)}
                className="px-3 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-500/25 text-indigo-300 text-[11px] font-bold hover:bg-indigo-500/25 transition-all flex-shrink-0"
              >
                {chatOpen ? 'Cerrar' : 'Chat'}
              </button>
            </div>

            {/* Chimi photo */}
            <div className="relative overflow-hidden">
              <Image
                src="/images/chimi.jpeg"
                alt="Chimi — Embajador de Health Growth"
                width={640}
                height={260}
                priority
                className="w-full h-44 object-cover object-[85%_20%]"
              />
            </div>

            {/* Chat area */}
            <AnimatePresence>
              {chatOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="border-t border-white/5"
                >
                  <div className="p-4 space-y-3">
                    <motion.div
                      key={msgIndex}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-2 items-start"
                    >
                      <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0 border border-indigo-500/30">
                        <Image src="/images/chimi.jpeg" alt="Chimi" width={28} height={28} className="w-full h-full object-cover object-[85%_25%]" />
                      </div>
                      <div className="bg-zinc-800/80 border border-white/5 rounded-xl rounded-tl-none px-3 py-2 max-w-[200px]">
                        <p className="text-white text-xs leading-relaxed">{CHIMI_MESSAGES[msgIndex]}</p>
                      </div>
                    </motion.div>
                    <div className="flex gap-2">
                      <button
                        onClick={nextMessage}
                        className="flex-1 py-2 rounded-xl bg-zinc-800/60 border border-white/5 text-gray-400 text-xs hover:text-white hover:border-white/10 transition-all"
                      >
                        Siguiente →
                      </button>
                      <a
                        href={whatsappChimi}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 py-2 rounded-xl bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] text-xs font-bold text-center hover:bg-[#25D366]/30 transition-all"
                      >
                        Real →
                      </a>
                    </div>
                    <p className="text-center text-gray-700 text-[10px]">Demo — el equipo real te atiende por WhatsApp</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Footer CTA */}
            <div className="p-4 pt-3 border-t border-white/5">
              <a
                href={whatsappChimi}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#25D366]/15 border border-[#25D366]/25 text-[#25D366] text-xs font-bold hover:bg-[#25D366]/25 transition-all"
              >
                <WhatsAppIcon size={16} />
                Habla con el Equipo
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
