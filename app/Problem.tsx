"use client";
import { motion } from 'framer-motion';

export default function Problem() {
  const issues = [
    "Mensajes de WhatsApp sin responder y clientes que se van con la competencia.",
    "Agenda desordenada: cruces de horario, olvidos y cancelaciones sin aviso.",
    "Sin seguimiento: leads que llegan pero nunca se convierten en clientes.",
    "Dependencia total de la memoria o de papeles para gestionar el día.",
    "Redes sociales sin estrategia: presencia sin resultados ni coherencia.",
    "Atención manual que consume horas que deberías usar en tu servicio.",
    "Imagen digital que no transmite confianza ni refleja la calidad real de tu trabajo.",
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-32 px-6 border-b border-white/5 bg-zinc-950/30"
    >
      <div className="max-w-4xl mx-auto text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 block mb-4">El Problema</span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight mb-8">
          El desorden es el freno silencioso de tu negocio
        </h2>
        <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
          La mayoría de las pequeñas empresas y profesionales no se estancan por falta de talento, sino por la incapacidad de gestionar su operación diaria de manera eficiente.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="p-8 md:p-12 rounded-[32px] bg-zinc-900/30 border border-white/5 shadow-2xl backdrop-blur-sm">
          <ul className="space-y-6">
            {issues.map((issue, i) => (
              <li key={i} className="flex items-center gap-4 text-gray-300 text-base md:text-lg font-light">
                <div className="min-w-8 h-8 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-zinc-500 text-sm">✕</div>
                {issue}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}