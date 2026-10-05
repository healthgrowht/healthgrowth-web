"use client";
import { motion } from 'framer-motion';

const businesses = [
  {
    id: "barberia",
    label: "Barbería",
    tagline: "Presencia profesional y agenda sin cruces de horario.",
    color: { bg: "from-amber-950/80 to-amber-900/40", border: "border-amber-700/25", icon: "text-amber-400", bar: "bg-amber-500" },
    icon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="7" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="7" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M9.5 7.5L20 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M9.5 16.5L20 21" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M10.5 9.5L14.5 12L10.5 14.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "grooming",
    label: "Grooming",
    tagline: "Clientes, mascotas e historial organizado en un solo lugar.",
    color: { bg: "from-teal-950/80 to-teal-900/40", border: "border-teal-700/25", icon: "text-teal-400", bar: "bg-teal-400" },
    icon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <ellipse cx="12" cy="16" rx="5" ry="3.5" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="7.5" cy="11" r="1.5" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="10.5" cy="9" r="1.5" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="13.5" cy="9" r="1.5" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="16.5" cy="11" r="1.5" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
  },
  {
    id: "estetica",
    label: "Estética",
    tagline: "Imagen digital y agenda que convierten seguidores en clientes.",
    color: { bg: "from-rose-950/80 to-rose-900/40", border: "border-rose-700/25", icon: "text-rose-400", bar: "bg-rose-400" },
    icon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3l1.8 5.5H19l-4.7 3.4 1.8 5.5L12 14l-4.1 3.4 1.8-5.5L5 8.5h5.2L12 3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "profesional",
    label: "Profesionales",
    tagline: "Presencia seria y clientes bien registrados desde el primer día.",
    color: { bg: "from-blue-950/80 to-blue-900/40", border: "border-blue-700/25", icon: "text-blue-400", bar: "bg-blue-400" },
    icon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M2 12h20" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M12 12v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "pyme",
    label: "PYME / Comercio",
    tagline: "De la consulta por WhatsApp al cliente que vuelve a comprar.",
    color: { bg: "from-violet-950/80 to-violet-900/40", border: "border-violet-700/25", icon: "text-violet-400", bar: "bg-violet-400" },
    icon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 11V21h18V11" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M2.5 7.5h19l-2-4.5h-15L2.5 7.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M9 21V14h6v7" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M9 7.5v1.5a3 3 0 01-6 0V7.5m6 0v1.5a3 3 0 006 0V7.5m6 0v1.5a3 3 0 01-6 0V7.5" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
  },
];

export default function BusinessStrip() {
  return (
    <section className="py-12 md:py-16 px-6 bg-[#071428] border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8 md:mb-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-gray-600 mb-1.5">
            Trabajamos con
          </p>
          <h2 className="text-xl md:text-2xl font-extrabold text-white">
            Negocios de servicios como el tuyo
          </h2>
        </div>

        {/* Cards */}
        <div
          className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-5 md:overflow-visible md:pb-0"
          style={{ scrollbarWidth: 'none' }}
        >
          {businesses.map((b, i) => (
            <motion.div
              key={b.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              className={`relative flex-shrink-0 w-[200px] md:w-auto rounded-[20px] border ${b.color.border} overflow-hidden bg-[#060d1c]`}
            >
              {/* Top accent bar */}
              <div className={`h-[3px] w-full ${b.color.bar}`} />

              {/* Icon area */}
              <div className={`flex items-center justify-center bg-gradient-to-b ${b.color.bg} px-4 pt-6 pb-5`}>
                <span className={b.color.icon}>{b.icon}</span>
              </div>

              {/* Text */}
              <div className="px-4 pb-5 pt-3">
                <p className="text-white font-extrabold text-[15px] leading-tight mb-1.5">
                  {b.label}
                </p>
                <p className="text-gray-500 text-[12px] leading-relaxed">
                  {b.tagline}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="md:hidden text-center text-gray-700 text-[11px] mt-3">← desliza →</p>
      </div>
    </section>
  );
}
