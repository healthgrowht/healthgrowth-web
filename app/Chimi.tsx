"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { SITE_CONFIG } from './constants';
import { WhatsAppIcon } from './SocialIcons';

const CHIMI_MESSAGES = [
  "¡Hola! Soy Chimi 🐱 ¿En qué puedo ayudarte hoy?",
  "¿Quieres saber cómo modernizar tu negocio? Te conecto con el equipo.",
  "¡Pregúntame sobre los servicios de Health Growth!",
  "¿Listo para dar el siguiente paso? 🚀",
];

export default function Chimi() {
  const [chatOpen, setChatOpen] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);

  const nextMessage = () => {
    setMsgIndex((prev) => (prev + 1) % CHIMI_MESSAGES.length);
  };

  const whatsappChimi = `${SITE_CONFIG.whatsapp.url}?text=${encodeURIComponent('Hola, me contacta Chimi desde la web de Health Growth. Me gustaría saber más sobre cómo pueden ayudar a mi negocio.')}`;

  return (
    <section id="chimi" className="py-32 px-6 border-y border-white/5 bg-zinc-950/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-indigo-500/10 blur-[150px] -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-400 block">
            Embajador Digital y Canal Oficial
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Chimi, tu guía en<br />
            <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Health Growth
            </span>
          </h2>
          <div className="space-y-4 text-gray-400 font-light leading-relaxed text-base">
            <p>
              Chimi es un gato negro que llegó a la vida de Luis Carlos en un momento complejo. Desde pequeño, acompañó cada etapa de construcción de Health Growth — largas jornadas de estudio, planificación y crecimiento.
            </p>
            <p>
              Hoy, Chimi no es solo una mascota. Es el{' '}
              <strong className="text-white font-medium">embajador oficial, asesor digital y canal de contacto</strong>{' '}
              del ecosistema Health Growth. Representa la curiosidad por la IA, la adaptación tecnológica y la resiliencia.
            </p>
          </div>

          {/* Contact actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={whatsappChimi}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-green-500/20"
            >
              <WhatsAppIcon size={22} />
              Habla con el Equipo
            </a>
            <a
              href="#diagnostico"
              className="flex items-center gap-3 px-6 py-4 border border-indigo-500/40 hover:border-indigo-500 text-indigo-300 rounded-2xl font-bold transition-all hover:bg-indigo-500/10"
            >
              Solicitar Evaluación →
            </a>
          </div>
        </motion.div>

        {/* Chimi card / chat widget */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative w-full rounded-[40px] bg-zinc-900/60 backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-4 p-6 border-b border-white/5 bg-zinc-900/80">
              <div className="relative w-12 h-12 rounded-full border-2 border-indigo-500/50 overflow-hidden flex-shrink-0">
                <Image
                  src="/images/chimi.jpeg"
                  alt="Chimi"
                  width={48}
                  height={48}
                  className="object-cover w-full h-full object-[85%_25%]"
                />
              </div>
              <div className="flex-1">
                <p className="text-white font-bold text-sm">Chimi</p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-green-400 font-medium">Embajador Digital · Vista previa del ecosistema</span>
                </div>
              </div>
              <button
                onClick={() => setChatOpen(!chatOpen)}
                className="px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-bold hover:bg-indigo-500/30 transition-all"
              >
                {chatOpen ? 'Cerrar' : 'Explorar'}
              </button>
            </div>

            {/* Chimi image */}
            <div className="relative group overflow-hidden">
              <div className="absolute inset-0 bg-indigo-500/10 blur-3xl group-hover:bg-indigo-500/20 transition-all duration-700" />
              <Image
                src="/images/chimi.jpeg"
                alt="Chimi — Embajador de Health Growth"
                width={640}
                height={360}
                className="relative z-10 w-full h-56 object-cover object-[85%_20%] transition-transform duration-700 group-hover:scale-105"
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
                  <div className="p-6 space-y-4">
                    <motion.div
                      key={msgIndex}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-3 items-start"
                    >
                      <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 border border-indigo-500/30">
                        <Image src="/images/chimi.jpeg" alt="Chimi" width={32} height={32} className="w-full h-full object-cover object-[85%_25%]" />
                      </div>
                      <div className="bg-zinc-800/80 border border-white/5 rounded-2xl rounded-tl-none px-4 py-3 max-w-xs">
                        <p className="text-white text-sm leading-relaxed">{CHIMI_MESSAGES[msgIndex]}</p>
                      </div>
                    </motion.div>

                    <div className="flex gap-2 pt-2">
                      <button
                        onClick={nextMessage}
                        className="flex-1 py-3 rounded-xl bg-zinc-800/60 border border-white/5 text-gray-400 text-xs hover:text-white hover:border-white/10 transition-all"
                      >
                        Siguiente →
                      </button>
                      <a
                        href={whatsappChimi}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 py-3 rounded-xl bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] text-xs font-bold text-center hover:bg-[#25D366]/30 transition-all"
                      >
                        Hablar real →
                      </a>
                    </div>
                    <p className="text-center text-gray-700 text-[10px] pt-1">Este es un demo — el equipo real te atiende por WhatsApp</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Footer CTA */}
            <div className="p-6 pt-0">
              <a
                href={whatsappChimi}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-bold hover:bg-indigo-500/20 hover:border-indigo-500/40 transition-all"
              >
                <WhatsAppIcon size={18} />
                Contactar vía WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
