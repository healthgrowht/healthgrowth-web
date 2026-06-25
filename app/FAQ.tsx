"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONFIG } from './constants';

const faqs = [
  {
    q: "¿Es esto una agencia de marketing?",
    a: "No. Las agencias tradicionales se enfocan en likes o campañas. Nosotros nos enfocamos en tu operación: ordenamos tu agenda, mejoramos tu atención por WhatsApp y profesionalizamos tu imagen digital para que crezcas sobre una base sólida."
  },
  {
    q: "¿Mi negocio es muy pequeño para esto?",
    a: "Al contrario. Nuestro objetivo es que emprendedores, profesionales independientes y minipymes tengan acceso a la misma organización, imagen y tecnología que usan las grandes empresas, pero adaptado a su realidad."
  },
  {
    q: "¿Necesito conocimientos técnicos?",
    a: "Ninguno. Nosotros nos encargamos de implementar, configurar y dejar todo funcionando. Nuestro enfoque es que la tecnología trabaje para ti de forma simple, guiándote paso a paso en su uso."
  },
  {
    q: "¿Cuánto tiempo toma ver resultados?",
    a: "El impacto en tu imagen profesional (Presencia Digital) es inmediato. Los sistemas de organización y recordatorios suelen estar operativos e integrados en menos de un mes, generándote ahorro de tiempo desde el primer día de uso."
  },
  {
    q: "¿Cuál es la inversión requerida?",
    a: "Contamos con servicios desde la creación de una Presencia Digital Profesional hasta la implementación de Sistemas Inteligentes completos. La inversión depende del nivel de modernización que tu negocio necesite ahora. Inicia solicitando una evaluación sin costo."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <motion.section 
      id="faq" 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-32 px-6 bg-zinc-950/50 border-t border-white/5"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">Claridad Operativa</h2>
          <p className="text-gray-500 text-lg">Resolviendo las dudas sobre la modernización de tu negocio.</p>
        </div>

        <div className="grid gap-6">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i} 
              initial={false}
              className="rounded-[32px] bg-zinc-900/30 border border-white/5 overflow-hidden"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-8 text-left flex items-center justify-between group transition-colors hover:bg-zinc-800/30"
              >
                <h4 className="text-lg font-bold text-white flex items-center gap-3 group-hover:text-indigo-300 transition-colors">
                  <span className="text-indigo-500/50 text-sm font-mono">0{i+1}</span>
                  {faq.q}
                </h4>
                <span className={`text-indigo-400 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                  ↓
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-8 pb-8 text-gray-400 leading-relaxed font-light">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-sm italic">¿Tienes otra pregunta? Luis te responde directamente.</p>
          <a 
            href={SITE_CONFIG.whatsapp.url}
            target="_blank"
            rel="noreferrer"
            className="text-indigo-400 font-bold hover:text-indigo-300 transition-colors"
          >Habla directamente con nosotros &rarr;</a>
        </div>
      </div>
    </motion.section>
  );
}