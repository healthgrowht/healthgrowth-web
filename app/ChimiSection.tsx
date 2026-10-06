"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

const benefits = [
  "Te hace preguntas simples para entender tu negocio",
  "Te orienta sobre qué tiene más sentido mejorar primero",
  "Sin formularios largos, sin presión — a tu ritmo",
  "Cuando estés listo, te conecta con el equipo",
];

export default function ChimiSection() {
  const openChimi = () => {
    if (typeof window === 'undefined') return;
    const launcher = document.querySelector<HTMLButtonElement>('[aria-label="Abrir chat con Chimi"]');
    launcher?.click();
  };

  return (
    <section className="py-16 md:py-24 px-6 bg-[#060e20] border-t border-white/[0.05]">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[360px_1fr] lg:grid-cols-[400px_1fr] gap-10 md:gap-16 items-center">

          {/* Chimi character card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center md:justify-start"
          >
            {/* Ambient glow behind card */}
            <div className="absolute inset-10 bg-cyan-500/10 blur-[60px] rounded-full pointer-events-none" />

            {/* Character card — rounded square, not circle */}
            <div className="relative w-72 md:w-80 rounded-[32px] overflow-hidden bg-gradient-to-b from-[#0e1b30] to-[#071220] border border-cyan-500/15 shadow-2xl shadow-cyan-900/20">

              {/* Inner glow top */}
              <div className="absolute inset-0 bg-radial-at-top from-cyan-500/[0.07] to-transparent pointer-events-none" />

              {/* Character SVG at full width */}
              <div className="flex justify-center pt-6 pb-2 px-4">
                <Image
                  src="/images/chimi.svg"
                  alt="Chimi — Asistente digital de Health Growth"
                  width={200}
                  height={220}
                  className="w-48 h-auto md:w-56 drop-shadow-[0_0_24px_rgba(34,211,238,0.25)]"
                  priority
                />
              </div>

              {/* Name strip at bottom of card */}
              <div className="px-5 pb-5 pt-2 text-center border-t border-white/[0.06]">
                <div className="flex items-center justify-center gap-2 mb-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                  <p className="text-white font-extrabold text-base tracking-tight">Chimi</p>
                </div>
                <p className="text-cyan-400/80 text-[11px] font-semibold uppercase tracking-[0.2em]">Asistente Digital</p>
                <p className="text-gray-600 text-[10px] mt-0.5">Health Growth</p>
              </div>
            </div>

            {/* Brand badge — subtle context marker */}
            <motion.div
              initial={{ opacity: 0, x: 12, y: -6 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="absolute -top-3 -right-3 md:right-0 bg-[#060e20] border border-cyan-500/20 rounded-2xl px-3.5 py-2 shadow-lg"
            >
              <p className="text-[10px] font-extrabold text-cyan-400 uppercase tracking-wider">Disponible ahora</p>
              <p className="text-gray-600 text-[9px] mt-0.5">Sin costo · Sin compromiso</p>
            </motion.div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-10 md:mt-0"
          >
            <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-cyan-400/70 block mb-4">
              Asistente digital
            </span>

            <h2 className="text-[28px] md:text-[38px] lg:text-[42px] font-extrabold tracking-tight text-white leading-[1.1] mb-5">
              ¿No sabes por dónde<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">
                empezar?
              </span>
            </h2>

            <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed mb-7 max-w-md">
              Chimi es el asistente digital de Health Growth. Te ayuda a encontrar el primer paso que tiene sentido para tu negocio — en una conversación simple.
            </p>

            {/* Benefits */}
            <ul className="space-y-2.5 mb-8">
              {benefits.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.07 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-4 h-4 rounded-full bg-cyan-500/15 border border-cyan-500/25 flex-shrink-0 flex items-center justify-center">
                    <span className="text-cyan-400 text-[9px] font-bold">✓</span>
                  </span>
                  <span className="text-gray-300 text-sm md:text-base">{b}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <button
              onClick={openChimi}
              className="inline-flex items-center gap-3 px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-extrabold rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-cyan-900/40"
            >
              <Image src="/images/chimi.svg" alt="" width={28} height={28} className="w-7 h-7" />
              <span>Hablar con Chimi</span>
              <span className="text-cyan-300 text-sm">→</span>
            </button>

            <p className="mt-3 text-gray-600 text-xs">
              Responde en este sitio — sin redireccionarte a ningún lado.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
