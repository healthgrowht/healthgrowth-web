"use client";
import { motion } from 'framer-motion';

const steps = [
  {
    num: "01",
    icon: "📋",
    title: "Ordenar",
    desc: "Revisamos tu operación y definimos un plan de prioridades concreto.",
    bg: "bg-blue-500/8 border-blue-500/20",
    numColor: "text-blue-400",
    titleColor: "text-blue-100",
  },
  {
    num: "02",
    icon: "💻",
    title: "Digitalizar",
    desc: "Web, WhatsApp Business y canales digitales profesionales.",
    bg: "bg-cyan-500/8 border-cyan-500/20",
    numColor: "text-cyan-400",
    titleColor: "text-cyan-100",
  },
  {
    num: "03",
    icon: "⚙️",
    title: "Automatizar",
    desc: "Flujos de atención, recordatorios y seguimiento que trabajan solos.",
    bg: "bg-teal-500/8 border-teal-500/20",
    numColor: "text-teal-400",
    titleColor: "text-teal-100",
  },
  {
    num: "04",
    icon: "📈",
    title: "Crecer",
    desc: "Con la operación ordenada, tu negocio crece sin trabajar más horas.",
    bg: "bg-green-500/8 border-green-500/20",
    numColor: "text-green-400",
    titleColor: "text-green-100",
  },
];

export default function Transformation() {
  return (
    <section id="transformacion" className="py-14 md:py-20 px-6 bg-[#071428] border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500 mb-3 block">Qué hace Health Growth</span>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-3">
            Ordenar · Digitalizar · Automatizar · Crecer
          </h2>
        </div>

        {/* Mobile: snap-scroll carousel · Desktop: grid */}
        <div
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-6 px-6 pb-4 lg:grid lg:grid-cols-4 lg:mx-0 lg:px-0 lg:overflow-visible"
          style={{ scrollbarWidth: 'none' }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`flex-shrink-0 w-[76vw] max-w-[260px] snap-center lg:w-auto lg:max-w-none p-5 rounded-[20px] border ${step.bg} flex flex-col gap-3`}
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl">{step.icon}</span>
                <span className={`font-mono text-xs font-bold ${step.numColor}`}>{step.num}</span>
              </div>
              <h3 className={`text-base font-bold ${step.titleColor}`}>{step.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <p className="lg:hidden text-center text-gray-600 text-xs mt-3">← desliza para ver los pasos →</p>
      </div>
    </section>
  );
}
