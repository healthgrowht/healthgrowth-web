"use client";
import React from 'react';
import { motion } from 'framer-motion';

const benefitsList = [
  { title: "Más Clientes", desc: "Sistemas de captación optimizados que atraen y convierten leads de forma constante." },
  { title: "Cero Oportunidades Perdidas", desc: "Automatización y seguimiento riguroso para que ningún contacto se quede sin atención." },
  { title: "Negocio Organizado", desc: "Información centralizada y procesos claros que eliminan el caos operativo." },
  { title: "Continuidad Comercial", desc: "Tu negocio funciona 24/7, con recordatorios y reactivación automática de clientes." },
  { title: "Decisiones Inteligentes", desc: "Datos organizados y análisis para tomar mejores decisiones estratégicas." },
  { title: "Libertad para Crecer", desc: "Automatiza tareas repetitivas y enfócate en lo que realmente importa: tu visión." }
];

export default function Benefits() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-32 px-6 bg-zinc-950/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-blue-500 mb-4 block">Resultados Tangibles</span>
          <h2 className="text-3xl md:text-6xl font-bold tracking-tighter text-white mb-6">Tu negocio, potenciado.</h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto font-light">
            Transformamos tu operación con sistemas que no solo resuelven problemas, sino que impulsan tu crecimiento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsList.map((benefit, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-[32px] bg-zinc-900/30 border border-white/5 hover:border-blue-500/30 hover:bg-zinc-900/50 transition-all duration-500 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center text-xl text-blue-300 group-hover:bg-blue-600/40 transition-colors">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{benefit.title}</h3>
              </div>
              <p className="text-gray-500 font-light leading-relaxed">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}