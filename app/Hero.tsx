"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONFIG } from './constants';

const STEPS = [
  { icon: "🌐", label: "Lead llega", sub: "Web · WhatsApp · Instagram" },
  { icon: "📊", label: "CRM Carlos OS", sub: "lead_id · trazabilidad completa" },
  { icon: "🤖", label: "IA Comercial", sub: "Califica · Responde · Agenda" },
  { icon: "💬", label: "WhatsApp Business", sub: "Respuesta en minutos" },
  { icon: "📅", label: "Reserva confirmada", sub: "Hora + seguimiento automático" },
];

const LIVE_EVENTS = [
  "Nuevo lead · formulario web",
  "Lead calificado por IA",
  "WhatsApp enviado",
  "Reserva confirmada",
];

function PipelineCard() {
  const [active, setActive] = useState(0);
  const [notifVisible, setNotifVisible] = useState(false);
  const [notifIdx, setNotifIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive(a => (a + 1) % STEPS.length), 1800);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const show = setTimeout(() => {
      setNotifVisible(true);
      const hide = setTimeout(() => {
        setNotifVisible(false);
        setNotifIdx(n => (n + 1) % LIVE_EVENTS.length);
      }, 2600);
      return () => clearTimeout(hide);
    }, 3000);
    const repeat = setInterval(() => {
      setNotifVisible(true);
      setTimeout(() => {
        setNotifVisible(false);
        setNotifIdx(n => (n + 1) % LIVE_EVENTS.length);
      }, 2600);
    }, 7000);
    return () => { clearTimeout(show); clearInterval(repeat); };
  }, []);

  return (
    <div className="relative w-full max-w-[340px] mx-auto lg:mx-0 lg:ml-auto">
      <div className="absolute inset-0 bg-cyan-500/[0.04] blur-3xl rounded-full pointer-events-none" />

      {/* Live notification toast */}
      <AnimatePresence>
        {notifVisible && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="absolute -top-10 left-2 right-2 z-10 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#071f3a] border border-cyan-500/25 shadow-lg shadow-black/40"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse flex-shrink-0" />
            <span className="text-[10px] text-cyan-300 font-mono truncate">{LIVE_EVENTS[notifIdx]}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative bg-[#071f3a]/90 backdrop-blur-2xl border border-white/[0.09] rounded-[28px] p-5 shadow-2xl shadow-black/40">

        <div className="flex items-center gap-2 mb-5 pb-4 border-b border-white/[0.05]">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-500">Sistema activo</span>
          <span className="ml-auto text-[9px] font-mono text-cyan-400/50">Carlos OS</span>
        </div>

        <div className="space-y-0">
          {STEPS.map((step, i) => (
            <div key={i}>
              <motion.div
                animate={{ backgroundColor: active === i ? 'rgba(6,182,212,0.07)' : 'rgba(0,0,0,0)' }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-3 rounded-2xl px-3 py-2.5"
              >
                <motion.div
                  animate={{ scale: active === i ? [1, 1.12, 1] : 1 }}
                  transition={{ duration: 0.5, repeat: active === i ? Infinity : 0, repeatDelay: 1.3 }}
                  className={`w-9 h-9 rounded-xl flex items-center justify-center text-base flex-shrink-0 border transition-all duration-300 ${
                    active === i
                      ? 'bg-cyan-500/15 border-cyan-500/40'
                      : 'bg-white/[0.04] border-white/[0.09]'
                  }`}
                >
                  {step.icon}
                </motion.div>
                <div className="flex-1 min-w-0">
                  <p className={`text-[13px] font-semibold leading-tight truncate transition-colors duration-300 ${
                    active === i ? 'text-white' : 'text-gray-500'
                  }`}>
                    {step.label}
                  </p>
                  <p className="text-[10px] text-gray-600 truncate mt-0.5">{step.sub}</p>
                </div>
                {active === i && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-2 h-2 rounded-full bg-cyan-400 flex-shrink-0"
                  />
                )}
              </motion.div>

              {i < STEPS.length - 1 && (
                <div className="ml-[22px] w-px h-4 bg-white/[0.05]" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-5 pt-4 border-t border-white/[0.05] grid grid-cols-3 gap-2">
          {[
            { label: 'Leads hoy', val: '3' },
            { label: 'Respuesta', val: '<2m' },
            { label: 'Tasa cierre', val: '↑' },
          ].map(m => (
            <div key={m.label} className="text-center">
              <p className="text-sm font-bold text-white font-mono">{m.val}</p>
              <p className="text-[9px] text-gray-600 uppercase tracking-wide mt-0.5">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-24 md:pt-36 pb-16 md:pb-24 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-[20%] w-[600px] h-[400px] bg-cyan-500/[0.03] rounded-full blur-[120px]" />
        <div className="absolute top-32 right-[15%] w-[400px] h-[400px] bg-blue-600/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1fr_360px] lg:grid-cols-[1fr_380px] gap-10 md:gap-14 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-500/[0.05] backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-cyan-300">
                Digitalización · Gestión · Crecimiento · Chile
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[58px] font-bold tracking-tight leading-[1.1] mb-5">
              Ordenamos tu negocio{' '}
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500">
                para que venda mejor.
              </span>
            </h1>

            <p className="max-w-lg text-base md:text-lg text-gray-400 font-light leading-relaxed mb-10">
              Ayudamos a PYMEs y negocios de servicios a ordenar su atención,
              automatizar procesos y vender más — sin complicaciones técnicas.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href="#diagnostico"
                className="px-8 py-4 bg-white text-black rounded-2xl font-extrabold text-base transition-all hover:shadow-[0_0_32px_rgba(6,182,212,0.3)] hover:scale-105 active:scale-95 text-center"
              >
                Evaluación gratuita →
              </a>
              <a
                href={`${SITE_CONFIG.whatsapp.url}?text=${encodeURIComponent(SITE_CONFIG.whatsapp.messages.general)}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 border border-white/15 text-white font-semibold rounded-2xl hover:border-green-500/40 hover:text-green-400 transition-all"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-green-400 flex-shrink-0">
                  <path d="M12 4C7.58 4 4 7.58 4 12c0 1.49.42 2.87 1.14 4.04L4 20l4.08-1.07A7.96 7.96 0 0 0 12 20c4.42 0 8-3.58 8-8s-3.58-8-8-8zm3.9 11.08c-.16.45-.95.88-1.3.92-.35.04-1.03.14-3.06-.65-2.44-.95-4-3.43-4.12-3.59-.12-.16-.98-1.3-.98-2.48 0-1.18.62-1.76.84-2 .22-.24.48-.3.64-.3h.46c.14.01.34-.05.53.4.19.46.65 1.59.71 1.7.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.25.3-.36.4-.12.1-.24.21-.1.41.14.2.62.9 1.33 1.46.91.76 1.68 1 1.92 1.11.24.11.38.09.52-.05.14-.14.59-.69.75-.93.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.56-.1 1.01z"/>
                </svg>
                WhatsApp
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-10 text-gray-600">
              {[
                { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", label: "CRM propio" },
                { icon: "M13 10V3L4 14h7v7l9-11h-7z", label: "IA en WhatsApp" },
                { icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", label: "Agenda automática" },
              ].map(f => (
                <div key={f.label} className="flex items-center gap-1.5">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-cyan-500/50 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d={f.icon} />
                  </svg>
                  <span className="text-[11px]">{f.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pipeline card — desktop only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:block"
          >
            <PipelineCard />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex justify-center mt-14 md:mt-20"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-white/10" />
            <motion.svg
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              width="16" height="16" viewBox="0 0 24 24" fill="none"
              className="text-white/20"
            >
              <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-white/10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
