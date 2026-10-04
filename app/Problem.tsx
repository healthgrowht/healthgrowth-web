"use client";
import { motion } from 'framer-motion';

const issues = [
  { icon: "💬", text: "Te llegan mensajes y después no sabes a quién tenías que llamar de vuelta." },
  { icon: "📅", text: "La agenda se cruza, hay cancelaciones sin aviso y horas perdidas." },
  { icon: "📱", text: "Publicas pero casi nadie pregunta — o piden precio y no responden más." },
  { icon: "📋", text: "Todo está en la memoria o en cuadernos, sin ningún registro claro." },
  { icon: "🌐", text: "Tu negocio funciona bien, pero en internet no se nota." },
  { icon: "⏱️", text: "Pasas horas respondiendo siempre lo mismo, en vez de atender." },
  { icon: "🚀", text: "Quieres promocionarte, pero no sabes bien por dónde empezar." },
  { icon: "🔄", text: "Todo depende de ti — si no estás, nada avanza." },
];

export default function Problem() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-16 md:py-24 px-6 bg-white"
    >
      <div className="max-w-4xl mx-auto text-center mb-10 md:mb-14">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 block mb-4">¿Te pasa esto?</span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight mb-4">
          El desorden es el freno silencioso de tu negocio
        </h2>
        <p className="text-gray-500 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
          La mayoría de los negocios no se estancan por falta de talento. Se estancan porque la operación diaria no tiene orden.
        </p>
      </div>

      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
        {issues.map((issue, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="flex items-start gap-3 p-4 rounded-2xl bg-red-50 border border-red-100"
          >
            <span className="text-xl flex-shrink-0">{issue.icon}</span>
            <p className="text-gray-700 text-sm font-medium leading-snug">{issue.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
