"use client";
import { motion } from 'framer-motion';

// SVG icon components — consistent stroke-based system
const IconMegaphone = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M19 9.5V14.5M5 9H3a1 1 0 00-1 1v3a1 1 0 001 1h2V9z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M5 9l11-6v15L5 14V9z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M9 14l1.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconChat = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v10a1 1 0 01-1 1H7l-4 4V4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M8 8h8M8 11h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconFolder = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M2 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M7 13h4M7 16h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconLayers = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

const IconSearch = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const packs = [
  {
    id: "imagen",
    Icon: IconMegaphone,
    badge: "IMAGEN + CONTENIDO",
    badgeClass: "bg-blue-500/15 text-blue-400 border-blue-500/25",
    title: "Imagen Digital",
    forWho: "Para negocios que quieren verse bien, comunicar con confianza y tener una imagen coherente.",
    tagline: "Piezas gráficas, imagen de marca y presencia digital que representan bien tu negocio.",
    benefits: [
      "Piezas gráficas personalizadas para Instagram y redes",
      "Imagen digital coherente en todos tus canales",
      "WhatsApp Business configurado y personalizado",
      "Perfil de Instagram optimizado para atraer clientes",
    ],
    model: "Pago único",
    cta: "Quiero esta solución",
    cardBorder: "border-blue-500/15 hover:border-blue-500/30",
    accent: "text-blue-400",
    iconBg: "bg-blue-500/10",
  },
  {
    id: "captacion",
    Icon: IconChat,
    badge: "CAPTACIÓN",
    badgeClass: "bg-indigo-500/15 text-indigo-400 border-indigo-500/25",
    title: "Captación Activa",
    forWho: "Para negocios con buena imagen que quieren atraer más clientes nuevos.",
    tagline: "Más contenido, más visibilidad y estrategia para que tu negocio genere consultas.",
    benefits: [
      "Contenido para Instagram: posts, historias y reels",
      "Estrategia de publicación orientada a captar clientes",
      "Optimización para aparecer en búsquedas locales",
      "Seguimiento de resultados: qué funciona y qué mejorar",
    ],
    model: "Mensualidad",
    cta: "Quiero esta solución",
    cardBorder: "border-indigo-500/15 hover:border-indigo-500/30",
    accent: "text-indigo-400",
    iconBg: "bg-indigo-500/10",
  },
  {
    id: "atencion",
    Icon: IconFolder,
    badge: "ATENCIÓN Y ORDEN",
    badgeClass: "bg-purple-500/15 text-purple-400 border-purple-500/25",
    title: "Atención y Orden",
    forWho: "Para negocios con consultas que se pierden o clientes que quedan sin respuesta.",
    tagline: "Automatizamos la atención por WhatsApp y organizamos tus clientes para que no pierdas nada.",
    benefits: [
      "Respuestas automáticas y seguimiento por WhatsApp",
      "Agenda digital sin cruces de horario",
      "Registro de clientes e historial de atención",
      "Recordatorios automáticos de cita",
    ],
    model: "Implementación + mensualidad",
    cta: "Quiero esta solución",
    cardBorder: "border-purple-500/15 hover:border-purple-500/30",
    accent: "text-purple-400",
    iconBg: "bg-purple-500/10",
  },
  {
    id: "ecosistema",
    Icon: IconLayers,
    badge: "INTEGRAL",
    badgeClass: "bg-cyan-500/15 text-cyan-400 border-cyan-500/25",
    title: "Ecosistema Completo",
    forWho: "Para PYMEs que quieren un sistema completo: imagen, captación, atención y organización.",
    tagline: "Todo conectado y funcionando junto — sin que tengas que manejar cada parte por separado.",
    benefits: [
      "Todo lo anterior integrado y coordinado",
      "Estrategia de contenido mensual para redes",
      "Análisis de resultados y mejora continua",
      "Canales digitales conectados entre sí",
    ],
    model: "Implementación + mensualidad",
    cta: "Ver qué incluye",
    cardBorder: "border-cyan-500/15 hover:border-cyan-500/30",
    accent: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
  },
];

export default function PacksCanonical() {
  return (
    <section id="packs" className="py-16 md:py-24 px-6 bg-[#0a1e38] border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-cyan-400 mb-3 block">Soluciones</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-3">
            ¿Qué puedes contratar?
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto leading-relaxed">
            Cuatro soluciones concretas para problemas concretos. Puedes empezar por cualquiera y ampliar después.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
          {packs.map((pack, i) => (
            <motion.div
              key={pack.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className={`rounded-[24px] border bg-[#071428] ${pack.cardBorder} p-5 md:p-6 flex flex-col gap-4 transition-all`}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-2">
                <div className={`w-9 h-9 rounded-xl ${pack.iconBg} flex items-center justify-center ${pack.accent} flex-shrink-0`}>
                  <pack.Icon />
                </div>
                <span className={`text-[9px] font-bold uppercase tracking-[0.25em] px-2 py-1 rounded-full border ${pack.badgeClass}`}>
                  {pack.badge}
                </span>
              </div>

              {/* Title + tagline */}
              <div>
                <h3 className="text-white font-extrabold text-base leading-tight mb-1.5">{pack.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{pack.tagline}</p>
              </div>

              {/* Benefits */}
              <ul className="space-y-1.5 flex-1">
                {pack.benefits.map((b, j) => (
                  <li key={j} className="flex items-start gap-2 text-gray-400 text-xs leading-snug">
                    <span className={`flex-shrink-0 mt-0.5 text-[10px] ${pack.accent}`}>✓</span>
                    {b}
                  </li>
                ))}
              </ul>

              {/* Model + CTA */}
              <div>
                <p className="text-[10px] text-gray-600 font-medium mb-2.5">
                  Modelo: <span className="text-gray-500">{pack.model}</span>
                </p>
                <a
                  href="#diagnostico"
                  onClick={() => {
                    if (typeof window !== 'undefined') sessionStorage.setItem('hg-pack', pack.id);
                  }}
                  className="block w-full py-2.5 rounded-xl bg-white/90 hover:bg-white text-[#071428] font-extrabold text-xs text-center transition-all active:scale-[0.98]"
                >
                  {pack.cta} →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Diagnóstico — entry point, NOT a product */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="rounded-[20px] border border-green-500/20 bg-green-500/[0.04] p-5 md:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-green-500/15 flex items-center justify-center text-green-400 flex-shrink-0">
              <IconSearch />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <p className="text-white font-extrabold text-base">¿No sabes cuál elegir?</p>
                <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-green-500 text-black">GRATIS</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Partamos con un diagnóstico gratuito. Revisamos tu negocio y te decimos 3 mejoras concretas — sin costo y sin compromiso.
              </p>
            </div>
          </div>
          <a
            href="#diagnostico"
            className="flex-shrink-0 px-7 py-3 bg-green-500 hover:bg-green-400 text-black font-extrabold text-sm rounded-2xl transition-all active:scale-[0.98] text-center whitespace-nowrap"
          >
            Diagnóstico gratuito →
          </a>
        </motion.div>

        <p className="mt-5 text-center text-gray-600 text-xs italic">
          Precios y condiciones se definen en la evaluación gratuita, según tu negocio específico.
        </p>
      </div>
    </section>
  );
}
