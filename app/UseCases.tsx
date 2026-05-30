"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { SITE_CONFIG } from './constants';

const industries = [
  { name: "Nuevos Emprendedores", image: "/images/industries/new-biz.jpg" },
  { name: "Profesionales Independientes", image: "/images/industries/professional.jpg" },
  { name: "Barberías y Salones", image: "/images/industries/barber.jpg" },
  { name: "Veterinarias y Grooming", image: "/images/industries/vet.jpg" },
  { name: "Centros de Estética", image: "/images/industries/aesthetic.jpg" },
  { name: "Profesionales de Salud", image: "/images/industries/health.jpg" },
  { name: "Pymes Establecidas", image: "/images/industries/pyme.jpg" },
  { name: "Modernización Digital", image: "/images/industries/modernization.jpg" }
];

export default function UseCases() {
  return (
    <motion.section 
      id="casos-uso"
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
              className="group p-8 rounded-3xl bg-zinc-900/30 border border-white/5 hover:bg-white/5 transition-all text-center"
            >
              <div className="relative w-full aspect-square mb-6 rounded-2xl overflow-hidden border border-white/5">
                <Image 
                  src={ind.image} 
                  alt={ind.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100"
                />
              </div>
              <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">{ind.name}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-[32px] bg-blue-600/5 border border-blue-500/20 text-center">
          <p className="text-blue-400 font-medium mb-6 italic">"El desorden operativo es el drenaje silencioso de tus utilidades."</p>
          <a 
            href={SITE_CONFIG.whatsapp.url} 
            target="_blank"
            className="text-white font-bold hover:underline underline-offset-8"
          >
            Ver cómo aplicar esto a mi rubro &rarr;
          </a>
        </div>
      </div>
    </motion.section>
  );
}