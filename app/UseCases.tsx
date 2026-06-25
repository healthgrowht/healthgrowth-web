"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { SITE_CONFIG } from './constants';

const industries = [
  { name: "Nuevos Emprendedores", icon: "🚀" },
  { name: "Profesionales Independientes", icon: "💼" },
  { name: "Barberías y Salones", icon: "✂️" },
  { name: "Veterinarias y Grooming", icon: "🐾" },
  { name: "Centros de Estética", icon: "💅" },
  { name: "Profesionales de Salud", icon: "🩺" },
  { name: "Pymes Establecidas", icon: "🏪" },
  { name: "Modernización Digital", icon: "⚡" }
];

export default function UseCases() {
  return (
    <motion.section 
      id="soluciones"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-24 px-6 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">¿Te sientes identificado?</h2>
          <p className="text-gray-500">Diseñamos soluciones para realidades distintas, pero con el mismo objetivo: Ordenar para crecer.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 md:p-8 rounded-3xl bg-zinc-900/20 border border-white/5 hover:bg-zinc-900/40 hover:border-white/10 transition-all text-center"
            >
              <div className="w-full aspect-square mb-6 rounded-2xl overflow-hidden border border-white/5 bg-zinc-900/50 flex items-center justify-center">
                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{ind.icon}</span>
              </div>
              <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">{ind.name}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-[32px] bg-indigo-500/5 border border-indigo-500/20 text-center max-w-3xl mx-auto">
          <p className="text-indigo-300 font-medium mb-6 italic text-lg">&ldquo;Toda gran empresa comenzó ordenando sus cimientos.&rdquo;</p>
          <a 
            href={SITE_CONFIG.whatsapp.url}
            target="_blank"
            rel="noreferrer"
            className="text-white font-bold hover:underline underline-offset-8"
          >
            Ver cómo aplicar esto a mi rubro &rarr;
          </a>
        </div>
      </div>
    </motion.section>
  );
}