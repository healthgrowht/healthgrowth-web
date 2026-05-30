"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Problem() {
  const issues = [
    "Clientes que se pierden por falta de respuesta inmediata.",
    "Dependencia absoluta de la memoria o de cuadernos físicos.",
    "Falta de seguimiento comercial tras el primer contacto.",
    "Desorden operativo que genera fugas de ingresos invisibles."
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-24 px-6 bg-zinc-950/30 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-red-500/80 block">El Diagnóstico Actual</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
            El desorden es el drenaje silencioso de tus utilidades
          </h2>
          <p className="text-gray-400 text-lg font-light">
            Muchas minipymes no fallan por falta de clientes, sino por la incapacidad de gestionar la información con eficiencia.
          </p>
          <ul className="space-y-4">
            {issues.map((issue, i) => (
              <li key={i} className="flex items-start gap-4 text-gray-500 text-sm">
                <span className="text-red-900 font-bold">✕</span> {issue}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-red-500/10 group">
          <Image 
            src="/images/visuals/disorder.jpg"
            alt="Desorden operativo"
            fill
            className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8">
            <p className="text-2xl font-black text-red-500 mb-1">PÉRDIDA SILENCIOSA</p>
            <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Fugas operativas detectadas en el modelo tradicional</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}