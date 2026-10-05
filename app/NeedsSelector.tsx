"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// SVG icon system — consistent with Problem.tsx and PacksCanonical.tsx
const IconMegaphone = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M19 9.5V14.5M5 9H3a1 1 0 00-1 1v3a1 1 0 001 1h2V9z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M5 9l11-6v15L5 14V9z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M9 14l1.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconChat = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v10a1 1 0 01-1 1H7l-4 4V4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M8 8h8M8 11h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconFolder = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M2 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M7 13h4M7 16h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconClock = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconQuestion = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M9.5 9.5a2.5 2.5 0 014.5 1.5c0 1.5-2 2-2 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="17" r="0.75" fill="currentColor"/>
  </svg>
);

const needs = [
  {
    id: "presencia",
    Icon: IconMegaphone,
    label: "Darme a conocer",
    packId: "impulso",
    pack: "Pack Impulso",
    tip: "Piezas gráficas para Instagram, imagen digital coherente y presencia web que muestran tu negocio como corresponde.",
    benefit: "Más personas te encuentran y se animan a contactarte.",
  },
  {
    id: "consultas",
    Icon: IconChat,
    label: "Conseguir más clientes",
    packId: "asistente",
    pack: "Atención Automática",
    tip: "Organizamos cómo llegan y se gestionan las consultas para que no se pierda ninguna.",
    benefit: "Las personas que preguntan reciben respuesta rápida — y eligen tu negocio.",
  },
  {
    id: "ordenar",
    Icon: IconFolder,
    label: "Ordenar mi negocio",
    packId: "automatizacion",
    pack: "Pack Organización",
    tip: "Clientes, agenda y seguimientos en un solo lugar, sin papeles ni memoria.",
    benefit: "Sabes quién te contactó, cuándo y qué necesita — siempre.",
  },
  {
    id: "tiempo",
    Icon: IconClock,
    label: "Ahorrar tiempo",
    packId: "asistente",
    pack: "Atención Automática",
    tip: "Configuramos respuestas y recordatorios para que las tareas repetitivas se hagan solas.",
    benefit: "Dejas de responder siempre lo mismo y te enfocas en lo que importa.",
  },
  {
    id: "nosé",
    Icon: IconQuestion,
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
              <span className="flex-shrink-0 leading-none"><n.Icon /></span>
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
                <span className="text-cyan-400 flex-shrink-0"><need.Icon /></span>
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
