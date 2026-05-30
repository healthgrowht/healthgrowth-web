"use client";
import React from 'react';
import { motion } from 'framer-motion';

const points = [
  { title: "Acompañamiento Real", desc: "No te entregamos un software y nos vamos. Te acompañamos en la implementación y capacitación de tu equipo." },
  { title: "Modernización Progresiva", desc: "Avanzamos paso a paso. Desde tu imagen digital básica hasta la automatización con IA." },
  { title: "Tecnología con Propósito", desc: "Usamos herramientas de élite para resolver problemas prácticos: falta de tiempo y pérdida de clientes." },
  { title: "Enfoque en Resultados", desc: "Menos clics vacíos, más procesos organizados que se traducen en un negocio más rentable." }
];

export default function WhyHealthGrowth() {
  return (
    <section id="por-que-hg" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500 mb-4 block">Diferenciación Operativa</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">¿Por qué HealthGrowth?</h2>
          <p className="text-gray-500 text-lg max-w-2xl font-light leading-relaxed">
            No somos una agencia convencional ni diseñadores gráficos tradicionales. Somos socios estratégicos para tu modernización.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {points.map((point, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-12 group"
            >
              <div className="absolute left-0 top-0 text-blue-500 font-mono text-xl opacity-50 group-hover:opacity-100 transition-opacity">
                0{i+1}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{point.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}