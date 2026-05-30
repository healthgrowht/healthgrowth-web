"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const pymePacks = [
  { 
    phase: "PACK 1", 
    title: "Presencia Digital", 
    benefit: "Autoridad Visual",
    problem: "Tu negocio se ve 'amateur' o es invisible frente a la competencia.",
    result: "Imagen profesional que genera confianza inmediata.",
    items: ["10 piezas gráficas/mes", "5 historias/mes", "Optimización visual", "Mantenimiento imagen"], 
    image: "/images/packs/presencia-digital.jpg",
    accent: "from-blue-500/20"
  },
  { 
    phase: "PACK 2", 
    title: "Promoción Activa", 
    benefit: "Flujo de Clientes",
    problem: "Ventas estancadas por falta de visibilidad constante.",
    result: "Aumento de prospectos y reconocimiento local.",
    items: ["15 piezas gráficas/mes", "10 historias/mes", "2 Reels mensuales", "Optimización completa"], 
    image: "/images/packs/promocion-activa.jpg",
    accent: "from-blue-400/20"
  },
  { 
    phase: "PACK 3", 
    title: "Negocio Digital", 
    benefit: "Ecosistema Autónomo",
    problem: "Dueño agotado y leads que se pierden por desorden.",
    result: "Operación organizada que capta y atiende 24/7.",
    items: ["20 piezas gráficas/mes", "15 historias/mes", "4 Reels mensuales", "Mini Landing Page"], 
    image: "/images/packs/negocio-digital.jpg",
    accent: "from-blue-600/20"
  }
];

const healthPacks = [
  { 
    phase: "SALUD PRO", 
    title: "Profesional Salud", 
    benefit: "Autoridad Médica",
    problem: "Dificultad para transmitir rigor y confianza técnica online.",
    result: "Posicionamiento ético como referente especializado.",
    items: ["Imagen de Autoridad", "Confianza Clínica", "Presencia Digital", "Gestión de Marca"], 
    image: "/images/packs/salud-pro.jpg",
    accent: "from-emerald-400/30"
  },
  { 
    phase: "CLÍNICA", 
    title: "Clínica Digital", 
    benefit: "Orden Institucional",
    problem: "Agenda caótica y comunicación fragmentada.",
    result: "Centro de salud con flujo de pacientes organizado.",
    items: ["Imagen Institucional", "Múltiples Servicios", "Organización Inicial", "Identidad Unificada"], 
    image: "/images/packs/clinica-digital.jpg",
    accent: "from-teal-500/30"
  }
];

export default function Packs() {
  return (
    <motion.section id="packs" className="py-32 px-6 max-w-7xl mx-auto">
      {/* Cabecera Packs PYME */}
      <div className="mb-20">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500 mb-4 block">Contrato mínimo 3 meses</span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">Packs Oficiales Pyme</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
        {pymePacks.map((item, i) => (
          <div key={i} className={`group p-1 rounded-[32px] bg-gradient-to-b ${item.accent} to-transparent border border-white/5 hover:border-blue-500/30 transition-all flex flex-col h-full overflow-hidden`}>
            <div className="bg-zinc-950/80 rounded-[31px] p-8 flex flex-col h-full backdrop-blur-sm">
              <div className="relative h-48 mb-8 rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <Image 
                  src={item.image} 
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex justify-between items-start mb-4">
                <div className="text-blue-500 font-mono text-sm font-bold tracking-widest">{item.phase}</div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
              <p className="text-blue-400 font-bold text-xs mb-6 uppercase tracking-wider">{item.benefit}</p>
              
              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-[10px] uppercase text-gray-500 font-bold mb-1">El Desafío:</p>
                  <p className="text-xs text-gray-400 italic font-light leading-relaxed">"{item.problem}"</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase text-gray-500 font-bold mb-1">El Objetivo:</p>
                  <p className="text-xs text-white font-medium">{item.result}</p>
                </div>
              </div>

              <ul className="space-y-3 mb-10 flex-grow border-t border-white/5 pt-6">
                {item.items.map((li, j) => <li key={j} className="text-gray-400 text-[11px] flex items-center gap-2">✓ {li}</li>)}
              </ul>
              <a 
                href="#diagnostico" 
                className="w-full py-4 rounded-2xl bg-white text-black text-center text-sm font-extrabold hover:bg-blue-500 hover:text-white transition-all shadow-lg active:scale-95"
              >
                Solicitar Propuesta
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Cabecera Línea Salud */}
      <div id="salud" className="mb-20">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400 block mb-4">Línea Salud Independiente</span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Especialización Clínica</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {healthPacks.map((item, i) => (
          <div key={i} className={`group p-1 rounded-[32px] bg-gradient-to-b ${item.accent} to-transparent border border-white/5 hover:border-blue-400/30 transition-all flex flex-col h-full overflow-hidden`}>
            <div className="bg-zinc-950/80 rounded-[31px] p-8 flex flex-col h-full backdrop-blur-sm">
              <div className="relative h-48 mb-8 rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <Image 
                  src={item.image} 
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex justify-between items-start mb-4">
                <div className="text-blue-400 font-mono text-sm font-bold tracking-widest">{item.phase}</div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
              <p className="text-blue-400 font-bold text-xs mb-6 uppercase tracking-wider">{item.benefit}</p>
              
              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-[10px] uppercase text-gray-500 font-bold mb-1">El Desafío:</p>
                  <p className="text-xs text-gray-400 italic font-light leading-relaxed">"{item.problem}"</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase text-gray-500 font-bold mb-1">El Objetivo:</p>
                  <p className="text-xs text-white font-medium">{item.result}</p>
                </div>
              </div>

              <ul className="space-y-3 mb-10 flex-grow border-t border-white/5 pt-6">
                {item.items.map((li, j) => <li key={j} className="text-gray-400 text-[11px] flex items-center gap-2">✓ {li}</li>)}
              </ul>
              <a 
                href="#diagnostico" 
                className="w-full py-4 rounded-2xl bg-blue-600 text-white text-center text-sm font-extrabold hover:bg-blue-500 transition-all shadow-lg active:scale-95"
              >
                Solicitar Propuesta
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}