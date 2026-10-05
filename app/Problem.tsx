"use client";
import { motion } from 'framer-motion';

const problems = [
  {
    headline: "Mi negocio casi no se ve en internet.",
    detail: "Tu trabajo es bueno, pero online pareces desaparecer. Instagram inconsistente, sin web, o con una que no genera confianza.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M1.5 10h17M10 1.5c-2 2.5-3 5-3 8.5s1 6 3 8.5M10 1.5c2 2.5 3 5 3 8.5s-1 6-3 8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    headline: "Publico, pero no consigo suficientes consultas.",
    detail: "Las personas ven lo que haces pero no se contactan. O preguntan y después desaparecen antes de convertirse en clientes.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M3 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7l-4 3V4z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    headline: "Los mensajes, clientes y horas se me desordenan.",
    detail: "Todo está disperso en WhatsApp, libretas y hojas de Excel. Sabes que necesitas ordenarte, pero no sabes por dónde empezar.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2.5" y="2.5" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="11.5" y="2.5" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="2.5" y="11.5" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="11.5" y="11.5" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
  },
  {
    headline: "Pierdo demasiado tiempo haciendo todo manual.",
    detail: "Pasas horas respondiendo las mismas preguntas, confirmando horas y coordinando de a poco. Tu trabajo real queda para después.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M10 5.5V10l3 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function Problem() {
  return (
    <section className="py-14 md:py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-12"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 block mb-4">¿Te pasa esto?</span>
          <h2 className="text-3xl md:text-[40px] font-extrabold tracking-tight text-gray-900 leading-[1.12] mb-4">
            El freno silencioso<br className="hidden sm:block" /> de tu negocio.
          </h2>
          <p className="text-gray-500 text-base md:text-lg font-light leading-relaxed max-w-xl">
            Tu negocio puede hacer un excelente trabajo y aun así perder oportunidades por falta de visibilidad, orden o seguimiento.
          </p>
        </motion.div>

        {/* 4 problems */}
        <div className="divide-y divide-gray-100">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.09, duration: 0.5 }}
              className="flex gap-5 py-7 md:py-8"
            >
              {/* Number */}
              <div className="flex-shrink-0 w-7 pt-0.5">
                <span className="text-[11px] font-black text-gray-200 tracking-wide tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-gray-400 flex-shrink-0 mt-0.5">{p.icon}</span>
                  <h3 className="text-[17px] md:text-[19px] font-bold text-gray-900 leading-snug">
                    {p.headline}
                  </h3>
                </div>
                <p className="text-gray-500 text-sm md:text-base font-light leading-relaxed pl-9 md:pl-10">
                  {p.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bridge */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 pt-7 border-t border-gray-100 text-gray-400 text-sm font-light italic text-center"
        >
          Si te identificas con alguno de estos — Health Growth está hecho para tu negocio.
        </motion.p>

      </div>
    </section>
  );
}
