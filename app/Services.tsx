"use client";
import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Diagnóstico Digital",
    description: "Evaluamos tu presencia online, WhatsApp y propuesta de valor para darte 3 mejoras concretas sin costo.",
    bullet: "Diagnóstico rápido y accionable"
  },
  {
    title: "Presencia Digital Premium",
    description: "Construimos tu landing enfocada en conversiones con WhatsApp integrado y una imagen profesional clara.",
    bullet: "Web + WhatsApp + imagen digital"
  },
  {
    title: "Automatización de Atención",
    description: "Creamos flujos de WhatsApp, recordatorios y seguimiento para que ninguna oportunidad se pierda.",
    bullet: "Menos trabajo manual, más cierres"
  },
  {
    title: "Ecosistema de Crecimiento",
    description: "Integramos tu negocio con sistemas de CRM, n8n y reportes para que tomes decisiones con datos.",
    bullet: "Sistema organizado y escalable"
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-32 px-6 bg-zinc-950/80 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-indigo-400 mb-4 block">Servicios Claros</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">Qué hacemos por tu negocio</h2>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto font-light">
            Servicios diseñados para resolver problemas reales de las PYMEs: falta de orden, baja conversión y atención caótica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-[40px] border border-white/10 bg-zinc-900/30 p-10 hover:border-indigo-500/30 hover:bg-zinc-900/50 transition-all shadow-2xl"
            >
              <div className="text-indigo-300 text-sm font-bold uppercase tracking-[0.3em] mb-4">{service.bullet}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>
              <a href="#diagnostico" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold hover:bg-indigo-500 hover:text-white transition-all">
                Ver diagnóstico
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
