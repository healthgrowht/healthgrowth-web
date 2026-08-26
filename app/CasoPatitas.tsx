"use client";
import { motion } from 'framer-motion';
import { SITE_CONFIG } from './constants';

const implemented = [
  { icon: "🌐", item: "Landing page profesional con WhatsApp integrado" },
  { icon: "📱", item: "Calendario de contenido y reels para Instagram" },
  { icon: "🔔", item: "Automatización de confirmación y recordatorio de citas" },
  { icon: "📋", item: "Registro de clientes y seguimiento de mascotas" },
  { icon: "📊", item: "CRM básico operativo para gestión interna" },
];

const roccoFunctions = [
  { icon: "💬", title: "Recibe consultas" },
  { icon: "📋", title: "Ordena solicitudes" },
  { icon: "📅", title: "Apoya reservas" },
  { icon: "🔔", title: "Activa seguimiento" },
];

export default function CasoPatitas() {
  const waUrl = `${SITE_CONFIG.whatsapp.url}?text=${encodeURIComponent('Hola, quiero saber cómo aplicar esto en mi negocio.')}`;

  return (
    <section id="piloto" className="py-14 md:py-20 px-6 bg-[#0a1e38] border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-blue-400 mb-2 block">Caso Real · En Desarrollo</span>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-1">Patitas Felices</h2>
          <p className="text-gray-500 text-sm">Peluquería Canina / Dog Grooming · Puerto Montt</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Left: story + implemented */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-5 rounded-2xl bg-white/4 border border-white/8"
            >
              <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-2 font-bold">Desafío</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Gestión de reservas por WhatsApp sin orden, sin historial de mascotas y sin seguimiento de clientes habituales.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="p-5 rounded-2xl bg-white/4 border border-white/8"
            >
              <p className="text-[10px] text-cyan-400 uppercase tracking-widest mb-3 font-bold">Qué se implementó</p>
              <ul className="space-y-2">
                {implemented.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-green-400 flex-shrink-0 mt-0.5 text-xs">✓</span>
                    <span>{item.item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <p className="text-gray-600 text-xs italic px-1">
              Estado: implementación activa · resultados en medición continua — mostramos lo que existe, no lo que esperamos.
            </p>
          </div>

          {/* Right: ROCCO + why + CTA */}
          <div className="space-y-4">
            {/* ROCCO compact card */}
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-5 rounded-2xl bg-[#071428] border border-blue-500/20 relative overflow-hidden"
            >
              <span className="absolute top-4 right-4 text-[10px] bg-amber-500/15 border border-amber-500/30 text-amber-400 px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">
                Próximamente
              </span>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-lg flex-shrink-0">
                  🐕
                </div>
                <div>
                  <p className="text-white font-bold text-sm">ROCCO</p>
                  <p className="text-blue-400 text-xs">Asistente Digital · Patitas Felices</p>
                </div>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed mb-4">
                Primer piloto de asistente digital del modelo Health Growth. Demuestra que una PYME local puede atender mejor sin contratar más personal.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {roccoFunctions.map((fn, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded-xl bg-white/4 border border-white/6">
                    <span className="text-sm">{fn.icon}</span>
                    <span className="text-gray-400 text-xs">{fn.title}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 p-3 rounded-xl bg-white/3 border border-white/6">
                <p className="text-gray-600 text-[10px] font-mono uppercase tracking-wider mb-1">Stack:</p>
                <p className="text-gray-500 text-[11px] leading-relaxed">WhatsApp Business API · Automatización de flujos · CRM Health Growth · IA conversacional</p>
              </div>
            </motion.div>

            {/* Why pilot */}
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="p-4 rounded-2xl bg-white/3 border border-white/8 border-l-2 border-l-blue-500"
            >
              <p className="text-gray-300 text-sm leading-relaxed">
                <span className="text-white font-semibold">¿Por qué un laboratorio propio?</span>{' '}
                Antes de ofrecer un sistema a un cliente, lo construimos y probamos en casa. Lo que aprende ROCCO aquí lo trae Health Growth a tu empresa.
              </p>
            </motion.div>

            {/* CTA */}
            <a
              href="#diagnostico"
              className="block text-center py-3.5 px-6 rounded-2xl bg-indigo-500 hover:bg-indigo-400 text-white font-bold text-sm transition-all active:scale-[0.98]"
            >
              Quiero algo así para mi negocio →
            </a>
            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              className="block text-center py-2.5 text-gray-500 hover:text-gray-300 text-sm transition-colors"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
