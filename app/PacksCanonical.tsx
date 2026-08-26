"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const packs = [
  {
    id: "diagnostico",
    chip: "Diagnóstico",
    icon: "🔍",
    badge: "GRATIS",
    badgeClass: "bg-green-500 text-black font-bold",
    title: "Diagnóstico Express Pyme",
    tagline: "Entiende qué frena tu negocio antes de invertir en nada.",
    benefits: [
      "Revisión de tu operación y presencia actual",
      "3 mejoras concretas aplicables de inmediato",
      "Plan de prioridades claro para tu caso",
      "Sin costo y sin compromiso",
    ],
    cta: "Solicitar diagnóstico gratuito",
    ctaClass: "bg-green-500 hover:bg-green-400 text-black font-extrabold",
    cardBorder: "border-green-500/20",
    cardBg: "bg-green-500/5",
  },
  {
    id: "impulso",
    chip: "Impulso",
    icon: "🌐",
    badge: "PRESENCIA",
    badgeClass: "bg-blue-500/20 border border-blue-500/30 text-blue-400",
    title: "Pack Impulso",
    tagline: "Tu negocio en internet, con imagen y WhatsApp que transmiten confianza.",
    benefits: [
      "Sitio web profesional orientado a conversiones",
      "WhatsApp Business configurado y organizado",
      "Imagen digital coherente en todos los canales",
      "Perfil de Instagram optimizado",
    ],
    cta: "Consultar disponibilidad",
    ctaClass: "bg-white hover:bg-cyan-500 hover:text-black text-black font-extrabold",
    cardBorder: "border-blue-500/15",
    cardBg: "bg-blue-500/5",
  },
  {
    id: "asistente",
    chip: "Asistente IA",
    icon: "🤖",
    badge: "AUTOMÁTICO",
    badgeClass: "bg-indigo-500/20 border border-indigo-500/30 text-indigo-400",
    title: "Asistente IA Esencial",
    tagline: "Responde, clasifica y hace seguimiento automáticamente.",
    benefits: [
      "Flujos automáticos de respuesta en WhatsApp",
      "Clasificación de consultas sin trabajo manual",
      "Recordatorios de cita que llegan solos",
      "Seguimiento de clientes que no cerraron",
    ],
    cta: "Consultar disponibilidad",
    ctaClass: "bg-white hover:bg-cyan-500 hover:text-black text-black font-extrabold",
    cardBorder: "border-indigo-500/15",
    cardBg: "bg-indigo-500/5",
  },
  {
    id: "automatizacion",
    chip: "Automatización",
    icon: "⚙️",
    badge: "GESTIÓN",
    badgeClass: "bg-purple-500/20 border border-purple-500/30 text-purple-400",
    title: "Pack Automatización",
    tagline: "Organiza tus clientes, tu agenda y tus seguimientos en un solo lugar.",
    benefits: [
      "Sistema de gestión de clientes (CRM)",
      "Agenda digital sin cruces de horario",
      "Flujos de seguimiento de oportunidades",
      "Reportes básicos para tomar decisiones",
    ],
    cta: "Consultar disponibilidad",
    ctaClass: "bg-white hover:bg-cyan-500 hover:text-black text-black font-extrabold",
    cardBorder: "border-purple-500/15",
    cardBg: "bg-purple-500/5",
  },
  {
    id: "ecosistema",
    chip: "Ecosistema",
    icon: "🚀",
    badge: "INTEGRAL",
    badgeClass: "bg-pink-500/20 border border-pink-500/30 text-pink-400",
    title: "Ecosistema Completo",
    tagline: "Presencia + automatización + gestión de clientes + contenido.",
    benefits: [
      "Todo lo de los packs anteriores integrado",
      "Paneles de seguimiento de resultados",
      "Estrategia de contenido digital",
      "Canales digitales conectados entre sí",
    ],
    cta: "Consultar disponibilidad",
    ctaClass: "bg-white hover:bg-cyan-500 hover:text-black text-black font-extrabold",
    cardBorder: "border-pink-500/15",
    cardBg: "bg-pink-500/5",
  },
  {
    id: "acompanamiento",
    chip: "Mensual",
    icon: "📈",
    badge: "CONTINUO",
    badgeClass: "bg-amber-500/20 border border-amber-500/30 text-amber-400",
    title: "Acompañamiento Mensual",
    tagline: "Revisión, ajustes y soporte mensual para que el sistema siempre funcione.",
    benefits: [
      "Revisión mensual de operación y resultados",
      "Ajustes y mejoras continuas al sistema",
      "Soporte directo con el equipo",
      "Estrategia de crecimiento progresivo",
    ],
    cta: "Consultar disponibilidad",
    ctaClass: "bg-white hover:bg-cyan-500 hover:text-black text-black font-extrabold",
    cardBorder: "border-amber-500/15",
    cardBg: "bg-amber-500/5",
  },
];

export default function PacksCanonical() {
  const [selected, setSelected] = useState(0);
  const pack = packs[selected];

  return (
    <section id="packs" className="py-16 md:py-24 px-6 bg-[#0a1e38] border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400 mb-3 block">Soluciones</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
            Empieza por donde necesitas
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
            No tienes que comprometerte con todo. Cada solución resuelve un problema concreto y se puede ampliar cuando quieras.
          </p>
        </div>

        {/* Chips — scroll horizontal en mobile */}
        <div
          className="flex gap-2 overflow-x-auto pb-3 mb-6 md:flex-wrap md:justify-center"
          style={{ scrollbarWidth: 'none' }}
        >
          {packs.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setSelected(i)}
              className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                selected === i
                  ? 'bg-white text-[#071428] border-white shadow-lg'
                  : 'bg-transparent text-gray-400 border-white/15 hover:border-white/35 hover:text-white'
              }`}
            >
              <span className="text-base">{p.icon}</span>
              <span>{p.chip}</span>
            </button>
          ))}
        </div>

        {/* Card dinámica */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className={`rounded-[24px] border ${pack.cardBorder} ${pack.cardBg} p-6 md:p-8`}
          >
            <div className="flex items-start justify-between mb-4 gap-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{pack.icon}</span>
                <h3 className="text-white font-bold text-lg leading-tight">{pack.title}</h3>
              </div>
              <span className={`flex-shrink-0 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${pack.badgeClass}`}>
                {pack.badge}
              </span>
            </div>

            <p className="text-gray-300 text-sm font-medium leading-relaxed mb-5">{pack.tagline}</p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
              {pack.benefits.map((b, j) => (
                <li key={j} className="flex items-start gap-2 text-gray-400 text-sm">
                  <span className="text-cyan-400 flex-shrink-0 mt-0.5 text-xs">✓</span>
                  {b}
                </li>
              ))}
            </ul>

            <a
              href="#diagnostico"
              onClick={() => {
                if (typeof window !== 'undefined') sessionStorage.setItem('hg-pack', pack.id);
              }}
              className={`block w-full py-3.5 rounded-2xl text-sm text-center transition-all active:scale-[0.98] ${pack.ctaClass}`}
            >
              {pack.cta} →
            </a>
          </motion.div>
        </AnimatePresence>

        <p className="mt-5 text-center text-gray-600 text-xs italic">
          Precios y condiciones disponibles en la evaluación gratuita.
        </p>
      </div>
    </section>
  );
}
