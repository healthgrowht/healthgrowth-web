"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Mission() {
  return (
    <section id="mision" className="py-32 px-6 bg-black border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-blue-500 font-mono text-xs font-bold tracking-widest">NUESTRO PROPÓSITO //</h3>
            <p className="text-2xl font-bold text-white leading-tight">
              Ayudar a pymes y profesionales a crecer mediante sistemas de organización y automatización que blindan su operación.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-white font-bold">Misión</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              Ayudar a emprendedores y pequeñas empresas a mejorar su organización, presencia digital, seguimiento comercial y experiencia de atención mediante herramientas modernas, acompañamiento y soluciones adaptadas a su realidad.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-white font-bold">Visión 2026</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              Convertirse en un referente nacional en modernización digital para pymes y profesionales, integrando organización, automatización y tecnología para construir negocios más eficientes, visibles y sostenibles.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}