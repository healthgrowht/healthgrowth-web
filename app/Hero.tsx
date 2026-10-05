"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

function ChimiPreview() {
  const [stage, setStage] = useState<0|1|2|3>(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 700);
    const t2 = setTimeout(() => setStage(2), 1600);
    const t3 = setTimeout(() => setStage(3), 2600);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  const openChimi = () => {
    const launcher = document.querySelector<HTMLButtonElement>('[aria-label="Abrir chat con Chimi"]');
    launcher?.click();
  };

  return (
    <div className="relative">
      <div className="absolute -inset-10 bg-indigo-600/8 blur-3xl rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.35, duration: 0.7, type: 'spring', stiffness: 200, damping: 28 }}
        className="relative bg-[#09132a] border border-white/[0.09] rounded-[28px] overflow-hidden shadow-2xl shadow-black/50"
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-3.5 bg-[#060e1f] border-b border-white/[0.06]">
          <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-indigo-500/40 flex-shrink-0">
            <Image src="/images/chimi.jpeg" alt="Chimi" width={36} height={36}
              className="w-full h-full object-cover object-[85%_25%]" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-bold text-sm leading-none">Chimi</p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <p className="text-green-400 text-[11px]">Asistente de Health Growth</p>
            </div>
          </div>
          <div className="flex gap-1.5 opacity-40">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
        </div>

        {/* Messages */}
        <div className="px-4 py-5 space-y-3.5 min-h-[220px]">

          {/* Chimi opens */}
          {stage >= 1 && (
            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex gap-2 items-start">
              <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0 border border-indigo-500/25 mt-0.5">
                <Image src="/images/chimi.jpeg" alt="" width={28} height={28}
                  className="w-full h-full object-cover object-[85%_25%]" />
              </div>
              <div className="bg-zinc-800/70 border border-white/[0.06] rounded-2xl rounded-tl-sm px-3 py-2.5 max-w-[240px]">
                <p className="text-gray-200 text-[13px] leading-relaxed">Hola 👋 Soy Chimi. ¿Qué quieres mejorar en tu negocio?</p>
              </div>
            </motion.div>
          )}

          {/* Quick replies */}
          {stage >= 1 && (
            <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="flex flex-wrap gap-1.5 pl-9">
              {["📣 Promocionarme", "💬 Más consultas", "🤷 No sé"].map((qr, i) => (
                <span key={i} className="px-2.5 py-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[12px] font-medium">
                  {qr}
                </span>
              ))}
            </motion.div>
          )}

          {/* User reply */}
          {stage >= 2 && (
            <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="flex justify-end">
              <div className="bg-indigo-600/25 border border-indigo-500/20 rounded-2xl rounded-tr-sm px-3 py-2.5 max-w-[200px]">
                <p className="text-[13px] text-gray-200">💬 Más consultas</p>
              </div>
            </motion.div>
          )}

          {/* Chimi follow-up */}
          {stage >= 3 ? (
            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex gap-2 items-start">
              <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0 border border-indigo-500/25 mt-0.5">
                <Image src="/images/chimi.jpeg" alt="" width={28} height={28}
                  className="w-full h-full object-cover object-[85%_25%]" />
              </div>
              <div className="bg-zinc-800/70 border border-white/[0.06] rounded-2xl rounded-tl-sm px-3 py-2.5 max-w-[240px]">
                <p className="text-gray-200 text-[13px] leading-relaxed">Entendido, ¿por dónde te llegan las consultas hoy?</p>
              </div>
            </motion.div>
          ) : stage === 2 ? (
            <div className="flex gap-2 items-center">
              <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0 border border-indigo-500/25">
                <Image src="/images/chimi.jpeg" alt="" width={28} height={28}
                  className="w-full h-full object-cover object-[85%_25%]" />
              </div>
              <div className="bg-zinc-800/70 border border-white/[0.06] rounded-2xl rounded-tl-sm px-3 py-2.5">
                <span className="flex gap-1 items-center h-4">
                  {[0,1,2].map(i => (
                    <motion.span key={i} className="w-1.5 h-1.5 bg-gray-500 rounded-full inline-block"
                      animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
                      transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.22 }} />
                  ))}
                </span>
              </div>
            </div>
          ) : null}
        </div>

        {/* Open real chat */}
        <div className="px-4 pb-4">
          <button
            onClick={openChimi}
            className="w-full py-2.5 rounded-xl bg-indigo-500/15 border border-indigo-500/25 text-indigo-300 text-[12px] font-bold hover:bg-indigo-500/25 transition-all"
          >
            Continuar esta conversación →
          </button>
        </div>
      </motion.div>

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: 12 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 2.8, type: 'spring' }}
        className="absolute -bottom-5 -right-5 bg-[#060e1f] border border-white/[0.09] rounded-2xl px-4 py-2.5 shadow-xl shadow-black/40"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <p className="text-white text-xs font-bold">Disponible ahora</p>
        </div>
        <p className="text-gray-500 text-[10px] mt-0.5">Responde en este sitio</p>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const openChimi = () => {
    if (typeof window === 'undefined') return;
    const launcher = document.querySelector<HTMLButtonElement>('[aria-label="Abrir chat con Chimi"]');
    launcher?.click();
  };

  return (
    <section className="relative pt-28 md:pt-40 pb-16 md:pb-24 px-6 overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-[15%] w-[700px] h-[500px] bg-indigo-600/[0.05] rounded-full blur-[140px]" />
        <div className="absolute top-20 right-[10%] w-[500px] h-[400px] bg-cyan-500/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_420px] gap-10 lg:gap-16 items-center">

          {/* Left: Typography */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.03] mb-7">
              <span className="text-sm">🇨🇱</span>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400">
                Para PYMEs · Chile
              </span>
            </div>

            {/* H1 — editorial, 3-line composition */}
            <h1 className="text-[42px] md:text-[56px] lg:text-[64px] font-extrabold tracking-tight leading-[1.07] mb-6">
              Más presencia.<br />
              Más clientes.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-400">
                Menos caos.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed mb-8 max-w-xl">
              Ayudamos a pequeños negocios a verse profesionales,
              crear contenido, atraer nuevos clientes y organizarse mejor —
              {' '}<span className="text-gray-300 font-medium">con acompañamiento real, sin jerga técnica.</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-9">
              <a
                href="#diagnostico"
                className="px-8 py-4 bg-white text-[#071428] rounded-2xl font-extrabold text-base text-center transition-all hover:bg-cyan-400 hover:scale-[1.02] active:scale-[0.98]"
              >
                Quiero mejorar mi negocio →
              </a>
              <button
                onClick={openChimi}
                className="flex items-center justify-center gap-2 px-8 py-4 border border-white/[0.12] text-white font-semibold rounded-2xl hover:border-indigo-500/50 hover:text-indigo-300 transition-all"
              >
                <div className="w-6 h-6 rounded-full overflow-hidden border border-white/20 flex-shrink-0">
                  <Image src="/images/chimi.jpeg" alt="" width={24} height={24} className="w-full h-full object-cover object-[85%_25%]" />
                </div>
                Hablar con Chimi
              </button>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center gap-4 text-[12px] text-gray-500">
              <div className="flex items-center gap-1.5">
                <span className="text-green-400 text-xs">✓</span>
                <span>Diagnóstico inicial gratuito</span>
              </div>
              <div className="w-px h-3 bg-white/[0.08] hidden sm:block" />
              <div className="flex items-center gap-1.5">
                <span className="text-green-400 text-xs">✓</span>
                <span>Empresa chilena</span>
              </div>
              <div className="w-px h-3 bg-white/[0.08] hidden sm:block" />
              <div className="flex items-center gap-1.5">
                <span className="text-green-400 text-xs">✓</span>
                <span>Sin jerga técnica</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Chimi chat preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="hidden lg:block"
          >
            <ChimiPreview />
          </motion.div>

        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="flex justify-center mt-14 md:mt-20"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-white/[0.08]" />
            <motion.svg
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              width="16" height="16" viewBox="0 0 24 24" fill="none"
              className="text-white/20"
            >
              <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-white/[0.08]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
