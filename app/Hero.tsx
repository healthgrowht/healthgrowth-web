"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { SITE_CONFIG } from './constants';

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative pt-28 md:pt-40 pb-14 md:pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center"
    >
      <div className="relative mt-4 mb-8 group">
        <div className="absolute -inset-6 bg-cyan-500/10 blur-3xl rounded-3xl group-hover:bg-cyan-500/15 transition-all duration-700" />
        <Image
          src={SITE_CONFIG.assets.logoPng}
          alt={SITE_CONFIG.legal.companyName}
          width={200}
          height={250}
          priority
          className="relative z-10 h-28 md:h-36 w-auto object-contain drop-shadow-2xl"
        />
      </div>

      <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-500/5 backdrop-blur-md mb-10">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-cyan-300">
          Digitalización · Gestión · Crecimiento · Chile
        </span>
      </div>

      <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold tracking-tighter leading-[1.1] mb-6">
        Ordenamos tu negocio <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500">
          para que venda mejor.
        </span>
      </h1>

      <p className="max-w-2xl text-base md:text-lg text-gray-400 font-light leading-relaxed mb-12">
        Ayudamos a PYMEs y negocios de servicios a ordenar su atención,
        profesionalizar procesos y vender mejor — paso a paso, sin complicaciones técnicas.
      </p>

      <div className="flex flex-col sm:flex-row gap-8 items-center mb-16">
        <a
          href="#diagnostico"
          className="px-12 py-6 bg-white text-black rounded-full font-extrabold text-xl transition-all hover:shadow-[0_0_40px_rgba(6,182,212,0.35)] hover:scale-105 active:scale-95"
        >
          Quiero ordenar mi negocio
        </a>
        <a
          href={`${SITE_CONFIG.whatsapp.url}?text=${encodeURIComponent(SITE_CONFIG.whatsapp.messages.general)}`}
          target="_blank"
          rel="noreferrer"
          className="text-white font-bold hover:text-green-400 transition-colors flex items-center gap-2"
        >
          <span>Hablar por WhatsApp</span>
          <span className="text-xl">→</span>
        </a>
      </div>

      <div className="flex items-center gap-3 text-gray-600">
        <div className="w-10 h-px bg-gradient-to-r from-transparent to-cyan-500/30" />
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-cyan-500/40 animate-bounce">
          <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div className="w-10 h-px bg-gradient-to-l from-transparent to-cyan-500/30" />
      </div>
    </motion.section>
  );
}
