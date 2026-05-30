"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONFIG } from './constants';

const faqs = [
  {
    q: "¿Es esto una agencia de marketing?",
    a: "No. Las agencias te traen clics; nosotros construimos el sistema para que esos clics se conviertan en dinero. Somos arquitectos de procesos y automatización."
  },
  {
    q: "¿Mi negocio es muy pequeño para esto?",
    a: "Al contrario. Las empresas grandes ya tienen estos sistemas. Health Growth nace para que las pymes tengan acceso a la tecnología de élite de forma accesible y escalable."
  },
  {
    q: "¿Necesito conocimientos técnicos?",
    a: "Ninguno. Nosotros implementamos, configuramos y capacitamos a tu equipo. Tu única tarea es atender a los clientes que el sistema organizará por ti."
  },
  {
    q: "¿Cuánto tiempo toma ver resultados?",
    a: "Desde el Nivel 1 (Presencia Digital) el cambio de imagen es inmediato. Los sistemas de automatización suelen estar operativos y generando ahorro de tiempo en menos de 15 días."
  },
  {
    q: "¿Cuál es la inversión requerida?",
    a: "No creemos en tarifas planas porque no existen negocios idénticos. Nuestra estrategia comienza con un diagnóstico gratuito donde identificamos tus fugas operativas. Basándonos en ese análisis, te entregamos una propuesta personalizada, rentable y adaptada a la escala de tu negocio."
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
                className="w-full p-8 text-left flex items-center justify-between group"
              >
                <h4 className="text-lg font-bold text-white flex items-center gap-3 group-hover:text-blue-400 transition-colors">
                  <span className="text-blue-500 text-sm font-mono">0{i+1}.</span>
                  {faq.q}
                </h4>
                <span className={`text-blue-500 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
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
            className="text-blue-500 font-bold hover:text-blue-400 transition-colors"
          >Hablar con fundador &rarr;</a>
        </div>
      </div>
    </motion.section>
  );
}