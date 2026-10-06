"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    problem: "Quiero que mi negocio se vea profesional y empezar bien.",
    forWho: "Para negocios sin imagen profesional o con presencia incoherente.",
    tagline: "Piezas gráficas, imagen de marca y presencia digital que representan bien tu negocio.",
    benefits: [
      "10 piezas gráficas personalizadas para Instagram y redes",
      "Imagen de marca coherente en todos tus canales",
      "WhatsApp Business configurado y personalizado",
      "Perfil de Instagram optimizado + sugerencias de texto y publicación",
    ],
    notIncluded: ["Sitio web", "Publicidad pagada", "Contenido mensual continuo"],
    howItWorks: "Health Growth crea tu identidad visual y configura tus canales digitales. Entregamos todo listo para usar, con guía de cómo mantenerlo.",
    nextStep: "Diagnóstico gratuito para revisar tu imagen actual.",
    model: "Pago único",
    cta: "Quiero esta solución",
    cardBorder: "border-blue-500/25 hover:border-blue-500/45",
    accent: "text-blue-400",
    iconBg: "bg-blue-500/10",
    detailBorder: "border-blue-500/15",
  },
  {
    id: "captacion",
    Icon: IconChat,
    badge: "CAPTACIÓN",
    badgeClass: "bg-indigo-500/15 text-indigo-400 border-indigo-500/25",
    title: "Captación Activa",
    problem: "Quiero conseguir más clientes nuevos y que me encuentren.",
    forWho: "Para negocios con imagen que quieren atraer más clientes en forma continua.",
    tagline: "Contenido y estrategia mensual para que tu negocio genere consultas.",
    benefits: [
      "Contenido para Instagram: posts, historias y reels",
      "Estrategia de publicación orientada a captar clientes",
      "Optimización para aparecer en búsquedas locales",
      "Seguimiento de resultados: qué funciona y qué mejorar",
    ],
    notIncluded: ["Publicidad pagada (se evalúa por separado)"],
    howItWorks: "Diseñamos y publicamos tu contenido mensual con foco en que más personas te contacten.",
    nextStep: "Requiere imagen digital establecida. Si no la tienes, empezamos por el nivel anterior.",
    model: "Mensualidad",
    cta: "Quiero esta solución",
    cardBorder: "border-indigo-500/25 hover:border-indigo-500/45",
    accent: "text-indigo-400",
    iconBg: "bg-indigo-500/10",
    detailBorder: "border-indigo-500/15",
  },
  {
    id: "atencion",
    Icon: IconFolder,
    badge: "ATENCIÓN Y ORDEN",
    badgeClass: "bg-purple-500/15 text-purple-400 border-purple-500/25",
    title: "Atención y Orden",
    problem: "Quiero ordenar mis consultas y no perder más clientes.",
    forWho: "Para negocios con consultas que se pierden o clientes que quedan sin respuesta.",
    tagline: "Automatizamos la atención por WhatsApp y organizamos tus clientes.",
    benefits: [
      "Respuestas automáticas y seguimiento por WhatsApp",
      "Agenda digital sin cruces de horario",
      "Registro de clientes e historial de atención",
      "Recordatorios automáticos de cita",
    ],
    notIncluded: ["Sitio web"],
    howItWorks: "Implementamos las automatizaciones en tu WhatsApp y configuramos tu agenda digital. También podemos configurar un número dedicado para tu negocio, separando tu atención profesional de tu teléfono personal.",
    nextStep: "Implementación inicial + mensualidad. Detalles en la evaluación gratuita.",
    model: "Implementación + mensualidad",
    cta: "Quiero esta solución",
    cardBorder: "border-purple-500/25 hover:border-purple-500/45",
    accent: "text-purple-400",
    iconBg: "bg-purple-500/10",
    detailBorder: "border-purple-500/15",
  },
  {
    id: "ecosistema",
    Icon: IconLayers,
    badge: "COMPLETO",
    badgeClass: "bg-cyan-500/15 text-cyan-400 border-cyan-500/25",
    title: "Avanza",
    problem: "Mi negocio ya tiene movimiento y necesito que todo funcione junto.",
    forWho: "Para negocios con movimiento que quieren imagen, captación y atención funcionando juntos.",
    tagline: "Todo en un solo sistema — imagen, clientes y organización — sin que tengas que coordinar cada parte.",
    benefits: [
      "Imagen Digital + Captación Activa + Atención y Orden integrados",
      "Estrategia de contenido mensual para redes",
      "Análisis de resultados y mejoras continuas",
      "Acompañamiento directo del equipo",
    ],
    notIncluded: [],
    howItWorks: "Implementamos el sistema completo y lo coordinamos. Tú operas tu negocio; nosotros hacemos que el sistema funcione.",
    nextStep: "Incluye todo lo anterior. Es el nivel más completo. Detalles en la evaluación gratuita.",
    model: "Implementación + mensualidad",
    cta: "Ver qué incluye",
    cardBorder: "border-cyan-500/25 hover:border-cyan-500/45",
    accent: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
    detailBorder: "border-cyan-500/15",
  },
];

export default function PacksCanonical() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const toggle = (id: string) => setExpandedId(prev => prev === id ? null : id);

  return (
    <section id="packs" className="py-16 md:py-24 px-6 bg-[#060e1c] border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-cyan-400/80 mb-3 block">Soluciones</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-3">
            Un camino, cuatro niveles
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto leading-relaxed mb-8">
            Empieza donde estás. Cada nivel resuelve un problema real y abre el siguiente.
          </p>

          {/* Journey progression strip */}
          <div className="flex items-center justify-center gap-0 overflow-x-auto max-w-2xl mx-auto">
            {["Empieza", "Crece", "Ordena", "Avanza"].map((label, i) => (
              <div key={i} className="flex items-center flex-shrink-0">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-7 h-7 rounded-full bg-[#0f2140] border border-white/15 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-gray-300">{i + 1}</span>
                  </div>
                  <span className="text-[10px] text-gray-500 whitespace-nowrap px-1">{label}</span>
                </div>
                {i < 3 && (
                  <div className="w-8 md:w-12 h-px bg-gradient-to-r from-white/10 to-white/5 mx-1 mb-3.5 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
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
              className={`rounded-[24px] border bg-[#0b1a2e] ${pack.cardBorder} p-5 md:p-6 flex flex-col gap-4 transition-all`}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className={`w-9 h-9 rounded-xl ${pack.iconBg} flex items-center justify-center ${pack.accent} flex-shrink-0`}>
                    <pack.Icon />
                  </div>
                  <span className="text-[11px] font-bold text-gray-600 tabular-nums">0{i + 1}</span>
                </div>
                <span className={`text-[9px] font-bold uppercase tracking-[0.25em] px-2 py-1 rounded-full border ${pack.badgeClass}`}>
                  {pack.badge}
                </span>
              </div>

              {/* Customer problem + title */}
              <div>
                <p className={`text-[11.5px] italic ${pack.accent} opacity-75 leading-snug mb-2`}>
                  &ldquo;{pack.problem}&rdquo;
                </p>
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

              {/* Expandable details */}
              <AnimatePresence initial={false}>
                {expandedId === pack.id && (
                  <motion.div
                    key="detail"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.22, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className={`rounded-xl border ${pack.detailBorder} bg-white/[0.02] p-3 space-y-2.5`}>
                      <div>
                        <p className={`text-[9.5px] font-bold uppercase tracking-[0.25em] mb-1 ${pack.accent} opacity-70`}>Para quién</p>
                        <p className="text-gray-400 text-[11px] leading-relaxed">{pack.forWho}</p>
                      </div>
                      <div>
                        <p className={`text-[9.5px] font-bold uppercase tracking-[0.25em] mb-1 ${pack.accent} opacity-70`}>Cómo funciona</p>
                        <p className="text-gray-400 text-[11px] leading-relaxed">{pack.howItWorks}</p>
                      </div>
                      {pack.notIncluded.length > 0 && (
                        <div>
                          <p className="text-[9.5px] font-bold uppercase tracking-[0.25em] text-gray-600 mb-1">No incluye</p>
                          <ul className="space-y-0.5">
                            {pack.notIncluded.map((n, k) => (
                              <li key={k} className="text-gray-600 text-[11px] flex items-center gap-1.5">
                                <span className="text-[9px]">–</span>{n}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <div>
                        <p className={`text-[9.5px] font-bold uppercase tracking-[0.25em] mb-1 ${pack.accent} opacity-70`}>Siguiente paso</p>
                        <p className="text-gray-400 text-[11px] leading-relaxed">{pack.nextStep}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Model + CTA */}
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <p className="text-[10px] text-gray-600 font-medium">
                    Modelo: <span className="text-gray-500">{pack.model}</span>
                  </p>
                  <button
                    onClick={() => toggle(pack.id)}
                    className={`text-[10px] font-medium transition-colors ${expandedId === pack.id ? 'text-gray-400' : pack.accent + ' opacity-70 hover:opacity-100'}`}
                  >
                    {expandedId === pack.id ? 'Ocultar ↑' : 'Ver más ↓'}
                  </button>
                </div>
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
