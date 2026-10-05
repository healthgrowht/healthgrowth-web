"use client";
import { motion } from 'framer-motion';
import { SITE_CONFIG } from './constants';

// Solo items verificados y completos
const implemented = [
  { item: "Landing page profesional con WhatsApp integrado", done: true },
  { item: "Registro de clientes y seguimiento de mascotas", done: true },
  { item: "Sistema básico de seguimiento de clientes", done: true },
  { item: "Calendario de contenido para Instagram", done: true },
];

// Lo que ROCCO está siendo diseñado para hacer (aún no activo)
const roccoPlanned = [
  { title: "Responder consultas por WhatsApp" },
  { title: "Organizar solicitudes de turno" },
  { title: "Recordatorios automáticos de cita" },
  { title: "Seguimiento de clientes habituales" },
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
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="flex-shrink-0 mt-0.5 text-xs text-green-400">✓</span>
                    <span className="text-gray-300">{item.item}</span>
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
                En desarrollo
              </span>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 2C7 2 4 6 4 10c0 3 1.5 5.5 4 7v3l4-2 4 2v-3c2.5-1.5 4-4 4-7 0-4-3-8-8-8z" stroke="#60a5fa" strokeWidth="1.4" strokeLinejoin="round"/>
                    <path d="M9 10h.01M15 10h.01M9 13s1 1.5 3 1.5 3-1.5 3-1.5" stroke="#60a5fa" strokeWidth="1.4" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">ROCCO</p>
                  <p className="text-blue-400 text-xs">Asistente Digital · Patitas Felices</p>
                </div>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed mb-3">
                Primer piloto de asistente digital del modelo Health Growth. Actualmente en configuración — la integración WhatsApp está pendiente de credenciales Meta.
              </p>
              <p className="text-gray-600 text-[10px] font-bold uppercase tracking-widest mb-2">Diseñado para hacer:</p>
              <div className="grid grid-cols-2 gap-2">
                {roccoPlanned.map((fn, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded-xl bg-white/4 border border-white/6">
                    <span className="w-1 h-1 rounded-full bg-blue-400/50 flex-shrink-0" />
                    <span className="text-gray-500 text-xs">{fn.title}</span>
                  </div>
                ))}
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
                Antes de ofrecer un sistema a un cliente, lo construimos y probamos en casa. Lo que validamos con este piloto nos permite mejorar cómo implementamos estas soluciones en otros negocios.
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
