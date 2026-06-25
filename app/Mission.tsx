"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Mission() {
  const sections = [
    {
      title: "Misión",
      icon: "🎯",
      content: "Democratizar el acceso a la modernización de PYMEs, entregando soluciones prácticas de organización, automatización e Inteligencia Artificial para optimizar rendimiento y potenciar crecimiento empresarial real.",
      color: "from-blue-500/20 to-blue-600/10"
    },
    {
      title: "Visión 2030",
      icon: "🌟",
      content: "Ser el ecosistema digital más confiable de Latinoamérica, reconocido por integrar automatización e IA como pilares para escalabilidad sostenible de PYMEs.",
      color: "from-indigo-500/20 to-indigo-600/10"
    },
    {
      title: "Valores",
      icon: "💎",
      content: "Simplicidad sin sofisticación innecesaria. Velocidad en resultados. Confiabilidad absoluta. Creemos en soluciones pragmáticas, medibles y escalables.",
      color: "from-purple-500/20 to-purple-600/10"
    }
  ];

  return (
    <section id="mision" className="py-32 px-6 bg-gradient-to-b from-black via-black to-black border-b border-white/5 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-indigo-500/5 blur-[150px] -z-10 rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[150px] -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-400 mb-4 block">Nuestro Propósito</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
            El <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">Por Qué</span> Detrás de Health Growth
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light">
            Impulsar la transformación digital de las PYMEs a través de ecosistemas tecnológicos que garantizan orden, eficiencia y escalabilidad.
          </p>
        </motion.div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative"
            >
              <div className={`relative p-8 rounded-[32px] bg-gradient-to-br ${section.color} border border-white/10 hover:border-indigo-500/40 transition-all duration-500 overflow-hidden h-full`}>
                {/* Animated background on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-indigo-500/10 to-transparent -z-10" />

                {/* Icon */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  className="text-5xl mb-6"
                >
                  {section.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">
                  {section.title}
                </h3>

                {/* Content */}
                <p className="text-gray-400 leading-relaxed text-base group-hover:text-gray-300 transition-colors">
                  {section.content}
                </p>

                {/* Accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-12 rounded-[32px] border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 via-indigo-500/5 to-blue-500/5 text-center"
        >
          <p className="text-xl md:text-2xl font-light text-white mb-6 leading-relaxed max-w-3xl mx-auto">
            &ldquo;No es solo tecnología. Es el <span className="font-semibold text-indigo-300">compromiso</span> de transformar la realidad operativa de tu negocio, haciéndola más simple, más rápida, más confiable.&rdquo;
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-2 h-2 rounded-full bg-indigo-500" />
            <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">Health Growth Team</p>
            <div className="w-2 h-2 rounded-full bg-indigo-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}