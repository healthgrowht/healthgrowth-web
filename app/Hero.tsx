"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { SITE_CONFIG } from './constants';

export default function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center"
    >
      {/* Logo Principal con Brillo de Marca */}
      <div className="relative mt-10 mb-12 group">
        <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full group-hover:bg-indigo-500/30 transition-all duration-700" />
        <Image
          src={SITE_CONFIG.assets.logo}
          alt={SITE_CONFIG.legal.companyName}
          width={120}
          height={120}
          priority
          className="relative z-10 transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-10 group hover:border-white/20 transition-all">
        <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
        <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-indigo-300">
          Agencia de Modernización y Crecimiento
        </span>
      </div>
      
      <h1 className="text-5xl md:text-7xl lg:text-[80px] font-bold tracking-tighter leading-[1] mb-10">
        Orden, tecnología y <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-teal-400">
          crecimiento para tu negocio.
        </span>
      </h1>
      
      <p className="max-w-3xl text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-16">
        Ayudamos a profesionales, emprendedores y pequeñas empresas a organizarse, automatizar procesos y crecer utilizando herramientas digitales, inteligencia artificial y sistemas modernos de gestión.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-8 items-center">
        <a 
          href="#diagnostico"
          className="px-12 py-6 bg-white text-black rounded-full font-extrabold text-xl transition-all hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:scale-105 active:scale-95"
        >
          Solicitar Evaluación
        </a>
        <a 
          href={SITE_CONFIG.whatsapp.url}
          target="_blank"
          rel="noreferrer"
          className="text-white font-bold hover:text-blue-400 transition-colors flex items-center gap-2"
        >
          <span>WhatsApp Business</span>
          <span className="text-xl">→</span>
        </a>
      </div>
    </motion.section>
  );
}