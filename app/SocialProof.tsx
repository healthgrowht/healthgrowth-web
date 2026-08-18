"use client";
import { motion } from 'framer-motion';
import { SITE_CONFIG } from './constants';

const implemented = [
  { icon: "🌐", item: "Landing page profesional con WhatsApp integrado" },
  { icon: "📱", item: "Calendario de contenido y reels para Instagram" },
  { icon: "🔔", item: "Automatización de confirmación y recordatorio de citas" },
  { icon: "📋", item: "Registro de clientes y seguimiento de mascotas" },
  { icon: "🤖", item: "ROCCO: asistente digital en preparación" },
  { icon: "📊", item: "CRM básico operativo para gestión interna" },
];

export default function SocialProof() {
  return (
    <section id="piloto" className="py-32 px-6 bg-zinc-950/50 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-blue-500/5 blur-[120px] -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-blue-500 mb-4 block">
            Caso Real en Desarrollo
          </span>
          <h2 className="text-3xl md:text-6xl font-bold tracking-tighter text-white mb-6">
            Patitas Felices
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Nuestro primer laboratorio real: un negocio de peluquería canina (dog grooming) en Puerto Montt donde aplicamos el
            modelo Health Growth desde cero.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Main card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[32px] bg-zinc-900/40 border border-white/5 border-l-4 border-l-blue-500 h-full flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/30 to-indigo-500/20 border border-blue-500/30 flex items-center justify-center text-2xl">
                🐾
              </div>
              <div>
                <div className="text-blue-500 font-mono text-[10px] font-bold uppercase tracking-widest">
                  Implementación Activa · Caso Piloto Real
                </div>
                <h3 className="text-xl font-bold text-white">Cómo ordenamos Patitas Felices</h3>
              </div>
            </div>

            <p className="text-gray-300 text-base font-light leading-relaxed mb-6">
              Patitas Felices es una peluquería canina (dog grooming) ubicada en Puerto Montt. Trabajamos con ellos
              implementando presencia web, WhatsApp Business profesional, contenido para redes y
              automatización de confirmación de citas. Es nuestro laboratorio vivo — donde probamos
              cada herramienta antes de ofrecerla a otros negocios.
            </p>

            <div className="p-4 rounded-2xl bg-zinc-950/60 border border-white/5 mb-6">
              <p className="text-gray-500 text-[11px] font-mono uppercase tracking-widest mb-1">
                ¿Por qué un caso piloto propio?
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Antes de cobrar por un sistema, lo construimos y medimos en casa. Eso nos permite
                ofrecer soluciones probadas, no propuestas teóricas.
              </p>
            </div>

            <p className="text-gray-600 text-xs italic mb-8">
              Estado: resultados en medición continua — mostramos lo que existe, no lo que esperamos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <a
                href="#diagnostico"
                className="px-6 py-3 rounded-full bg-indigo-500 text-white font-bold text-sm transition-all hover:bg-indigo-400 active:scale-[0.98] text-center"
              >
                Quiero algo así para mi negocio
              </a>
              <a
                href={SITE_CONFIG.whatsapp.url}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full border border-white/10 text-white text-sm font-semibold transition-all hover:bg-white/10 active:scale-[0.98] text-center"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Implemented items */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-600 mb-6">
              Qué se ha implementado
            </p>
            {implemented.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-4 p-4 rounded-[20px] bg-zinc-900/30 border border-white/5 hover:border-blue-500/20 hover:bg-zinc-900/50 transition-all duration-300"
              >
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <div className="flex items-center gap-2 flex-1">
                  <span className="text-blue-500 text-sm flex-shrink-0">✓</span>
                  <p className="text-gray-300 text-sm font-light">{item.item}</p>
                </div>
              </motion.div>
            ))}

            {/* What lab means */}
            <div className="mt-6 p-6 rounded-[20px] bg-gradient-to-br from-blue-500/10 to-indigo-500/5 border border-blue-500/20">
              <p className="text-blue-300 text-sm font-medium mb-2">
                Patitas Felices como laboratorio real
              </p>
              <p className="text-gray-500 text-xs leading-relaxed">
                Cada sistema que implementamos aquí valida el modelo para otros negocios: agenda,
                WhatsApp, seguimiento, contenido, automatización y asistente digital. Lo que funciona
                acá, lo llevamos a tu empresa.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
