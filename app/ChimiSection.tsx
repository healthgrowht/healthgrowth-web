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

          {/* Chimi visual — mascot treatment */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center md:justify-start"
          >
            {/* Ambient glow */}
            <div className="absolute inset-0 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none" />

            {/* Mascot card — NOT rectangular photo, styled character presentation */}
            <div className="relative w-72 md:w-80">
              {/* Brand ring */}
              <div className="absolute -inset-3 rounded-full border-2 border-indigo-500/20 border-dashed animate-spin" style={{ animationDuration: '20s' }} />
              <div className="absolute -inset-6 rounded-full border border-cyan-500/10" />

              {/* Main circle crop */}
              <div className="relative w-full aspect-square rounded-full overflow-hidden border-4 border-indigo-500/30 shadow-2xl shadow-indigo-900/40">
                <Image
                  src="/images/chimi.jpeg"
                  alt="Chimi — Asistente digital de Health Growth"
                  fill
                  className="object-cover object-[80%_15%] scale-110"
                  sizes="(max-width: 768px) 288px, 320px"
                  priority
                />
                {/* Subtle brand overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent" />
              </div>

              {/* Name badge — overlaps bottom of circle */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#060e20] border border-white/[0.1] rounded-2xl px-5 py-2.5 shadow-xl text-center whitespace-nowrap">
                <div className="flex items-center gap-2 justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <p className="text-white font-extrabold text-sm">Chimi</p>
                </div>
                <p className="text-gray-500 text-[10px] mt-0.5">Asistente Digital · Health Growth</p>
              </div>

              {/* Floating tag */}
              <motion.div
                initial={{ opacity: 0, x: 16, rotate: 4 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="absolute -top-2 -right-2 bg-[#060e20] border border-indigo-500/30 rounded-xl px-3 py-1.5 shadow-lg"
              >
                <p className="text-indigo-300 text-[11px] font-bold">Gratis · Sin compromiso</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-10 md:mt-0"
          >
            <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-indigo-400 block mb-4">
              Asistente digital
            </span>

            <h2 className="text-[28px] md:text-[38px] lg:text-[42px] font-extrabold tracking-tight text-white leading-[1.1] mb-5">
              ¿No sabes por dónde<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
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
                  <span className="w-4 h-4 rounded-full bg-indigo-500/15 border border-indigo-500/25 flex-shrink-0 flex items-center justify-center">
                    <span className="text-indigo-400 text-[9px] font-bold">✓</span>
                  </span>
                  <span className="text-gray-300 text-sm md:text-base">{b}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <button
              onClick={openChimi}
              className="inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-indigo-900/40"
            >
              <div className="w-7 h-7 rounded-full overflow-hidden border border-white/25 flex-shrink-0">
                <Image src="/images/chimi.jpeg" alt="" width={28} height={28}
                  className="w-full h-full object-cover object-[80%_15%]" />
              </div>
              <span>Hablar con Chimi</span>
              <span className="text-indigo-300 text-sm">→</span>
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
