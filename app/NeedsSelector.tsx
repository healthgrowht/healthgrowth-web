"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const needs = [
  {
    id: "profesional",
    icon: "🌐",
    label: "Verme profesional en internet",
    pack: "Pack Impulso",
    packId: "impulso",
    tip: "Web profesional + WhatsApp Business + imagen digital coherente.",
    benefit: "Tus clientes te ven, te contactan y te perciben como un negocio de verdad.",
  },
  {
    id: "promocionar",
    icon: "📣",
    label: "Promocionar mi negocio",
    pack: "Pack Impulso",
    packId: "impulso",
    tip: "Presencia en redes + página web que convierte + WhatsApp listo para atender.",
    benefit: "Más personas conocen lo que haces y saben cómo contactarte.",
  },
  {
    id: "consultas",
    icon: "💬",
    label: "Conseguir más consultas",
    pack: "Asistente IA Esencial",
    packId: "asistente",
    tip: "Flujos automáticos de respuesta para que nadie quede sin atender.",
    benefit: "Las personas que preguntan reciben respuesta rápida — y vuelven.",
  },
  {
    id: "organizar",
    icon: "📋",
    label: "Organizar mis clientes y mi agenda",
    pack: "Pack Automatización",
    packId: "automatizacion",
    tip: "Registro de clientes, agenda digital y seguimiento sin papeles ni memoria.",
    benefit: "Sabes quién te contactó, cuándo, qué necesita — y a quién tenías que llamar.",
  },
  {
    id: "tiempo",
    icon: "⏱️",
    label: "Ahorrar tiempo en atención",
    pack: "Asistente IA Esencial",
    packId: "asistente",
    tip: "Respuestas automáticas, recordatorios y seguimiento que funcionan solos.",
    benefit: "Dejas de responder siempre lo mismo y te enfocas en lo que importa.",
  },
  {
    id: "automatizar",
    icon: "⚙️",
    label: "Automatizar mi operación",
    pack: "Ecosistema Completo",
    packId: "ecosistema",
    tip: "Presencia + atención automática + clientes organizados + seguimiento integrado.",
    benefit: "Tu negocio trabaja con menos esfuerzo de tu parte.",
  },
  {
    id: "nosé",
    icon: "🤷",
    label: "No sé qué necesito",
    pack: "Diagnóstico Express Pyme",
    packId: "diagnostico",
    tip: "Revisamos tu negocio juntos y te decimos qué tiene más sentido mejorar primero.",
    benefit: "Te vas con 3 mejoras concretas — sin costo y sin compromiso.",
  },
];

export default function NeedsSelector() {
  const [selected, setSelected] = useState<number | null>(null);
  const need = selected !== null ? needs[selected] : null;

  const handleSelect = (i: number) => {
    setSelected(prev => prev === i ? null : i);
  };

  const handleViewPack = () => {
    if (!need) return;
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('hg-pack', need.packId);
    }
    document.getElementById('packs')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 md:py-16 px-6 bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
            ¿Qué quieres mejorar en tu negocio?
          </h2>
          <p className="text-gray-400 text-sm">Selecciona lo que más te identifica.</p>
        </div>

        {/* Chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-5">
          {needs.map((n, i) => (
            <button
              key={n.id}
              onClick={() => handleSelect(i)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                selected === i
                  ? 'bg-[#071428] text-white border-[#071428] shadow-md'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:text-gray-900'
              }`}
            >
              <span className="text-base leading-none">{n.icon}</span>
              <span>{n.label}</span>
            </button>
          ))}
        </div>

        {/* Result card */}
        <AnimatePresence mode="wait">
          {need && (
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="rounded-[20px] bg-[#071428] border border-white/10 p-5 md:p-6"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <p className="text-xs text-cyan-400 font-bold uppercase tracking-widest mb-0.5">Te recomendamos</p>
                  <p className="text-white font-bold text-lg">{need.pack}</p>
                </div>
                <span className="text-2xl flex-shrink-0">{need.icon}</span>
              </div>
              <p className="text-gray-400 text-sm mb-1 leading-relaxed">{need.tip}</p>
              <p className="text-cyan-300 text-sm font-medium mb-4">{need.benefit}</p>
              <button
                onClick={handleViewPack}
                className="w-full py-3 rounded-xl bg-white text-black font-extrabold text-sm hover:bg-cyan-400 transition-all active:scale-[0.98]"
              >
                Ver {need.pack} →
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
