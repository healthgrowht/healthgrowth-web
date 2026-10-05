"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

const processSteps = [
  { icon: "🎯", label: "Te encuentran", sub: "Tu negocio visible en internet" },
  { icon: "💬", label: "Te consultan", sub: "Mensajes e interesados llegan" },
  { icon: "📊", label: "Ordenamos", sub: "Registramos y organizamos" },
  { icon: "✅", label: "Atiendes mejor", sub: "Con contexto, sin perder nada" },
  { icon: "🔄", label: "Seguimiento", sub: "Nadie queda sin respuesta" },
  { icon: "⚙️", label: "Automatizas", sub: "Lo repetitivo, cuando conviene" },
];

const services = [
  {
    icon: "🌐",
    title: "Presencia digital profesional",
    description: "Diseñamos y configuramos tu web, WhatsApp Business y redes para que tu negocio genere más consultas.",
  },
  {
    icon: "📋",
    title: "Operación organizada",
    description: "Implementamos registro de clientes, agenda y seguimiento — todo en un lugar, sin papeles ni memoria.",
  },
  {
    icon: "⚙️",
    title: "Automatización cuando conviene",
    description: "Configuramos respuestas, recordatorios y flujos para reducir el trabajo manual en lo que más te consume tiempo.",
  },
];

export default function AutomationAI() {
  const openChimi = () => {
    if (typeof window === 'undefined') return;
    const launcher = document.querySelector<HTMLButtonElement>('[aria-label="Abrir chat con Chimi"]');
    launcher?.click();
  };

  return (
    <section id="automatizacion" className="py-14 md:py-20 px-6 bg-[#071428] border-t border-white/5">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400 mb-2 block">Cómo trabajamos</span>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">Cómo acompañamos tu negocio</h2>
          <p className="text-gray-500 text-sm max-w-xl">
            Desde que te encuentran en internet hasta que tienes todo ordenado y funcionando mejor — paso a paso, sin apuros.
          </p>
        </div>

        {/* Process journey — distinct from the pipeline flow in Hero/LiveSystemFlow */}
        <div className="flex gap-2 mb-10 overflow-x-auto pb-2 no-scrollbar">
          {processSteps.map((step, i) => (
            <div key={i} className="flex items-center gap-2 flex-shrink-0">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center text-center p-3 rounded-xl bg-white/5 border border-white/8 min-w-[80px] hover:bg-white/8 hover:border-cyan-500/20 transition-all"
              >
                <span className="text-lg mb-1">{step.icon}</span>
                <p className="text-white text-[11px] font-semibold leading-tight">{step.label}</p>
                <p className="text-gray-600 text-[10px] leading-tight mt-0.5">{step.sub}</p>
              </motion.div>
              {i < processSteps.length - 1 && (
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 + 0.12 }}
                  className="text-cyan-500/30 text-base flex-shrink-0"
                >→</motion.span>
              )}
            </div>
          ))}
        </div>

        {/* Services + Chimi */}
        <div className="grid md:grid-cols-2 gap-5">

          {/* Services */}
          <div className="space-y-3">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/8 hover:border-cyan-500/20 transition-all"
              >
                <span className="text-xl flex-shrink-0">{s.icon}</span>
                <div>
                  <p className="text-white font-bold text-sm mb-0.5">{s.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{s.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Chimi — opens the real floating chat widget */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[24px] bg-zinc-900/60 border border-white/10 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center gap-3 p-4 border-b border-white/5 bg-zinc-900/80">
              <div className="relative w-10 h-10 rounded-full border-2 border-indigo-500/40 overflow-hidden flex-shrink-0">
                <Image
                  src="/images/chimi.jpeg"
                  alt="Chimi"
                  width={40}
                  height={40}
                  className="object-cover w-full h-full object-[85%_25%]"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-bold text-sm">Chimi</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                  <span className="text-green-400 text-[11px] truncate">Asistente Digital · Health Growth</span>
                </div>
              </div>
            </div>

            {/* Photo */}
            <div className="relative overflow-hidden">
              <Image
                src="/images/chimi.jpeg"
                alt="Chimi — Asistente de Health Growth"
                width={640}
                height={260}
                priority
                className="w-full h-44 object-cover object-[85%_20%]"
              />
            </div>

            {/* Invitation */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-white font-bold text-sm mb-1.5">¿No sabes por dónde empezar?</p>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">
                  Cuéntale a Chimi qué tiene tu negocio y te orienta sobre qué tiene más sentido mejorar primero — sin compromiso.
                </p>
              </div>
              <button
                onClick={openChimi}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-indigo-500/15 border border-indigo-500/25 text-indigo-300 text-sm font-bold hover:bg-indigo-500/25 hover:border-indigo-500/45 transition-all"
              >
                🐾 Conversar con Chimi
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
