"use client";
import { motion } from 'framer-motion';

const steps = [
  {
    num: "01",
    label: "Te conocemos",
    desc: "Evaluación gratuita para entender tu negocio y qué tiene más sentido mejorar.",
    accent: "text-cyan-400",
  },
  {
    num: "02",
    label: "Definimos qué necesitas",
    desc: "Te mostramos opciones concretas según tu situación real. Sin jerga técnica.",
    accent: "text-indigo-400",
  },
  {
    num: "03",
    label: "Lo implementamos",
    desc: "Ejecutamos lo que corresponde: imagen y contenido para estar bien presentes, promoción para atraer clientes, organización y seguimiento para no perderlos.",
    accent: "text-sky-400",
  },
  {
    num: "04",
    label: "Te acompañamos",
    desc: "No te dejamos solo. Revisamos y ajustamos para que el sistema funcione bien.",
    accent: "text-green-400",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 md:py-24 px-6 bg-[#0b1e38] border-t border-white/[0.07]">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-gray-500 block mb-3">Proceso</span>
          <h2 className="text-2xl md:text-[36px] font-extrabold text-white tracking-tight mb-3">
            Cómo trabajamos
          </h2>
          <p className="text-gray-500 text-base max-w-lg leading-relaxed">
            Simple, sin sorpresas, sin jerga técnica. Tu negocio mejora paso a paso.
          </p>
        </motion.div>

        {/* Steps — single render, responsive via grid/flex */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex gap-5 md:flex-col md:gap-4 md:pr-8"
            >
              {/* Number */}
              <div className="flex-shrink-0 md:flex-shrink">
                <span className={`font-mono font-black text-2xl md:text-3xl leading-none ${step.accent}`}>
                  {step.num}
                </span>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-white font-bold text-base md:text-lg mb-1.5">{step.label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>

              {/* Connector line - desktop only, between items */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute" />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 md:mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div>
            <p className="text-white font-bold text-lg">¿Empezamos con la evaluación gratuita?</p>
            <p className="text-gray-500 text-sm mt-0.5">Sin costo, sin compromiso — 30 a 60 minutos.</p>
          </div>
          <a
            href="#diagnostico"
            className="flex-shrink-0 px-7 py-3.5 bg-white text-[#071428] rounded-2xl font-extrabold text-sm hover:bg-cyan-400 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Evaluación gratuita →
          </a>
        </motion.div>

      </div>
    </section>
  );
}
