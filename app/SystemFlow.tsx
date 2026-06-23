"use client";
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { id: 1, label: "Instagram", sub: "Captación", icon: "📱" },
  { id: 2, label: "Landing HG", sub: "Conversión", icon: "🌐" },
  { id: 3, label: "Formulario", sub: "Calificación", icon: "📝" },
  { id: 4, label: "n8n Core", sub: "Automatización", icon: "⚙️" },
  { id: 5, label: "CRM HG", sub: "Seguimiento", icon: "📂" },
  { id: 6, label: "WhatsApp", sub: "Cierre", icon: "💬" },
];

export default function SystemFlow() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-32 px-6 bg-black relative overflow-hidden"
    >
      {/* Decoración de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-blue-500 mb-4 block">Arquitectura Operativa</span>
          <h2 className="text-3xl md:text-6xl font-bold tracking-tighter text-white mb-6">El Flujo de Crecimiento</h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto font-light">
            Diseñamos sistemas donde la información fluye sin interrupciones, asegurando que 
            <span className="text-white"> cada lead sea gestionado con rigor clínico</span>.
          </p>
        </div>

        <div className="relative">
          {/* Línea de flujo animada (Desktop) */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] overflow-hidden">
            <div className="w-full h-full bg-blue-500/10" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-data-flow" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative">
            {steps.map((step, i) => (
              <motion.div 
                key={step.id} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col items-center group"
              >
                {/* Nodo/Icono */}
                <div className="w-20 h-20 rounded-[24px] bg-zinc-900 border border-white/5 flex items-center justify-center text-3xl mb-6 group-hover:border-blue-500/50 group-hover:bg-zinc-800 transition-all duration-500 shadow-2xl relative">
                  <div className="absolute inset-0 bg-blue-600/5 rounded-[24px] group-hover:bg-blue-600/10 transition-colors" />
                  <span className="relative z-10">{step.icon}</span>
                  
                  {/* Indicador de conexión activa */}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,1)] opacity-50" />
                </div>
                
                {/* Texto */}
                <div className="text-center">
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-1 group-hover:text-blue-400 transition-colors">
                    {step.label}
                  </h4>
                  <p className="text-gray-600 text-[10px] font-mono uppercase tracking-tighter italic">
                    {step.sub}
                  </p>
                </div>

                {/* Flecha (Mobile/Tablet) */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden mt-8 text-blue-500/20 animate-pulse">
                    ↓
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Info Técnica de flujo */}
        <div className="mt-28 flex flex-wrap justify-center gap-x-12 gap-y-6 text-[10px] font-mono text-gray-600 uppercase tracking-[0.2em]">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40" />
            Sincronización API-REST
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40" />
            Trazabilidad Lead-to-Sale
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40" />
            Encriptación End-to-End
          </div>
        </div>
      </div>

    </motion.section>
  );
}