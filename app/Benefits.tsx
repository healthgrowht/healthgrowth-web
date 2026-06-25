"use client";
import React from 'react';
import { motion } from 'framer-motion';

const benefitsList = [
  { title: "Más Confianza", desc: "Tu marca se percibe profesional, seria y lista para recibir a clientes exigentes." },
  { title: "Atención Impecable", desc: "Flujos de WhatsApp ordenados para responder rápido y sin perder ninguna oportunidad." },
  { title: "Agenda Inteligente", desc: "Reservas claras, confirmaciones automáticas y reducción drástica de inasistencias." },
  { title: "Datos Seguros", desc: "Un registro centralizado donde conoces la historia y preferencias de cada cliente." },
  { title: "Innovación Real", desc: "Aplicamos Inteligencia Artificial de manera práctica para facilitar tu gestión diaria." },
  { title: "Tranquilidad Mental", desc: "Delegas el estrés operativo en sistemas confiables y te enfocas en entregar tu servicio." }
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
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-indigo-400 mb-4 block">El Resultado</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">Un negocio que fluye y crece</h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto font-light">
            La tecnología y el orden no son un gasto, son la base indispensable para escalar tu servicio con tranquilidad.
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
              className="p-8 rounded-[32px] bg-zinc-900/20 border border-white/5 hover:border-indigo-500/30 hover:bg-zinc-900/40 transition-all duration-500 group shadow-lg"
            >
              <div className="w-2 h-2 rounded-full bg-indigo-500/50 mb-6 group-hover:scale-150 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">{benefit.title}</h3>
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