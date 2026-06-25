"use client";
import React from 'react';
import { motion } from 'framer-motion';
const services = [
  { 
    phase: "01 // ESENCIAL", 
    title: "Presencia Digital Profesional", 
    benefit: "Confianza e Imagen",
    problem: "Negocios que no tienen presencia digital o transmiten poca confianza.",
    result: "Canales digitales optimizados y listos para convertir.",
    items: ["Sitios Web Modernos", "Google Business", "WhatsApp Business", "Redes Sociales", "Imagen Digital"], 
    accent: "from-zinc-500/20"
  },
  { 
    phase: "02 // AVANZADO", 
    title: "Organización Digital Pro", 
    benefit: "Eficiencia Operativa",
    problem: "Desorden en la atención y pérdida de tiempo.",
    result: "Flujos de trabajo que funcionan en piloto automático.",
    items: ["Confirmaciones automáticas", "Recordatorios automáticos", "Gestión básica de reservas", "Organización operativa"], 
    accent: "from-blue-500/20"
  },
  { 
    phase: "03 // PREMIUM", 
    title: "Sistema Inteligente HG", 
    benefit: "Escalamiento Comercial",
    problem: "Pérdida de clientes potenciales y desorganización comercial.",
    result: "Captar, organizar y gestionar oportunidades de alto valor.",
    items: ["Formularios inteligentes", "Sistema de captación", "Base de datos centralizada", "Registro automático de clientes", "Seguimiento de prospectos", "Historial de clientes", "Clasificación automática", "Recordatorios", "Gestión de oportunidades", "Supervisión y mantención"], 
    accent: "from-indigo-500/30"
  }
];

export default function Packs() {
  return (
    <motion.section id="packs" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-20">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-400 mb-4 block">Nuestras Soluciones</span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">Servicios Principales</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {services.map((item, i) => (
          <div key={i} className={`group p-px rounded-[32px] bg-gradient-to-b ${item.accent} to-transparent border border-white/5 hover:border-indigo-500/30 transition-all flex flex-col h-full overflow-hidden`}>
            <div className="bg-zinc-950/80 rounded-[31px] p-8 flex flex-col h-full backdrop-blur-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="text-indigo-400 font-mono text-xs font-bold tracking-widest">{item.phase}</div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{item.title}</h3>
              <p className="text-indigo-300 font-bold text-xs mb-8 uppercase tracking-wider">{item.benefit}</p>
              
              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-[10px] uppercase text-gray-500 font-bold mb-1">El Desafío:</p>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">&ldquo;{item.problem}&rdquo;</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase text-gray-500 font-bold mb-1">El Objetivo:</p>
                  <p className="text-sm text-white font-medium">{item.result}</p>
                </div>
              </div>

              <ul className="space-y-3 mb-10 flex-grow border-t border-white/5 pt-6">
                {item.items.map((li, j) => <li key={j} className="text-gray-400 text-[13px] flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/50 block" /> {li}
                </li>)}
              </ul>
              <a 
                href="#diagnostico" 
                className="w-full py-4 rounded-2xl bg-white text-black text-center text-sm font-extrabold hover:bg-indigo-500 hover:text-white transition-all shadow-lg active:scale-95"
              >
                Cotizar Servicio
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}