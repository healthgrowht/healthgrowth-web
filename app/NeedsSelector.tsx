"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const needs = [
  {
    id: "presencia",
    icon: "📣",
    label: "Darme a conocer",
    packId: "impulso",
    pack: "Pack Impulso",
    tip: "Web profesional, WhatsApp Business y redes que muestran tu negocio como corresponde.",
    benefit: "Más personas te encuentran y se animan a contactarte.",
  },
  {
    id: "consultas",
    icon: "💬",
    label: "Conseguir más clientes",
    packId: "asistente",
    pack: "Atención Automática",
    tip: "Organizamos cómo llegan y se gestionan las consultas para que no se pierda ninguna.",
    benefit: "Las personas que preguntan reciben respuesta rápida — y eligen tu negocio.",
  },
  {
    id: "ordenar",
    icon: "📋",
    label: "Ordenar mi negocio",
    packId: "automatizacion",
    pack: "Pack Organización",
    tip: "Clientes, agenda y seguimientos en un solo lugar, sin papeles ni memoria.",
    benefit: "Sabes quién te contactó, cuándo y qué necesita — siempre.",
  },
  {
    id: "tiempo",
    icon: "⏱️",
    label: "Ahorrar tiempo",
    packId: "asistente",
    pack: "Atención Automática",
    tip: "Configuramos respuestas y recordatorios para que las tareas repetitivas se hagan solas.",
    benefit: "Dejas de responder siempre lo mismo y te enfocas en lo que importa.",
  },
  {
    id: "nosé",
    icon: "🐾",
    label: "No sé — ayúdame",
    packId: "diagnostico",
    pack: "Chimi te orienta",
    tip: "Cuéntale a Chimi qué pasa en tu negocio y te dice qué tiene más sentido mejorar primero.",
    benefit: "Te vas con claridad, sin costo y sin compromiso.",
  },
];

export default function NeedsSelector() {
  const [selected, setSelected] = useState<number | null>(null);
  const need = selected !== null ? needs[selected] : null;

  const handleSelect = (i: number) => {
    setSelected(prev => prev === i ? null : i);
    const id = needs[i].id;
    try { sessionStorage.setItem('chimi-need', id); } catch { /* ok */ }
    if (id === 'nosé') {
      setTimeout(() => {
        const launcher = document.querySelector<HTMLButtonElement>('[aria-label="Abrir chat con Chimi"]');
        launcher?.click();
      }, 400);
    }
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
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-7">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-1.5">
            ¿Qué necesitas hoy?
          </h2>
          <p className="text-gray-400 text-sm">Elige lo que más se parece a tu situación.</p>
        </div>

        {/* 5 chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-5">
          {needs.map((n, i) => (
            <button
              key={n.id}
              onClick={() => handleSelect(i)}
              className={`flex items-center gap-2 px-5 py-3 min-h-[44px] rounded-full text-sm font-semibold border transition-all ${
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
          {need && need.id !== 'nosé' && (
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
                  <p className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest mb-0.5">Solución recomendada</p>
                  <p className="text-white font-bold text-lg">{need.pack}</p>
                </div>
                <span className="text-2xl flex-shrink-0">{need.icon}</span>
              </div>
              <p className="text-gray-400 text-sm mb-1 leading-relaxed">{need.tip}</p>
              <p className="text-cyan-300 text-sm font-medium mb-5">{need.benefit}</p>
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
