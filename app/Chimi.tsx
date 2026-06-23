"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Chimi() {
  return (
    <section id="chimi" className="py-32 px-6 border-y border-white/5 bg-zinc-950/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-indigo-500/10 blur-[150px] -z-10 rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-400 block">Embajador y Asesor Oficial</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Conoce a Chimi
          </h2>
          <div className="space-y-6 text-gray-400 font-light leading-relaxed text-lg">
            <p>
              Chimi es un gato negro que llegó a la vida de Luis Carlos en un momento complejo. Fue esperado durante mucho tiempo, ya que existía el profundo deseo de adoptar un gato negro.
            </p>
            <p>
              Cuando finalmente apareció la oportunidad, todo el departamento se preparó para recibirlo. Desde pequeño, acompañó cada etapa de construcción de Health Growth, estando presente durante largas jornadas de estudio, planificación y crecimiento personal.
            </p>
            <p>
              Hoy, Chimi no es una simple mascota. Es el <strong className="text-white font-medium">embajador oficial, asesor digital y guía del ecosistema Health Growth</strong>. Representa la curiosidad por la Inteligencia Artificial, la adaptación tecnológica, el compañerismo y la resiliencia que inyectamos en cada proyecto para el crecimiento de las PYMEs.
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] md:aspect-square w-full rounded-[40px] bg-zinc-900/50 backdrop-blur-md border border-white/10 flex flex-col items-center justify-center p-12 text-center group overflow-hidden relative shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
            <div className="w-32 h-32 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-6xl mb-8 relative z-20 group-hover:scale-110 transition-transform duration-700 shadow-[0_0_40px_rgba(99,102,241,0.2)]">
              🐈‍⬛
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 relative z-20">Las Aventuras de Chimi</h3>
            <p className="text-gray-400 text-sm mb-8 relative z-20 leading-relaxed max-w-sm">
              Acompaña a nuestro embajador en futuras historias, descubriendo cómo la tecnología y la empatía transforman negocios.
            </p>
            <span className="px-6 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-indigo-300 font-medium tracking-widest uppercase relative z-20">
              Próximamente
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}