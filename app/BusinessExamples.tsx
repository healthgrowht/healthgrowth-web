"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const examples = [
  {
    id: "grooming",
    icon: "✂️",
    label: "Grooming / Peluquería Canina",
    challenge: "Las reservas llegan por WhatsApp pero se mezclan, los clientes preguntan y no responden, y los horarios se cruzan constantemente.",
    howWeHelp: "Te ayudamos a mostrar tus servicios y precios de forma profesional, organizar las consultas por WhatsApp, registrar tus clientes con historial de mascotas y coordinar las horas sin llamadas de más.",
    outcomes: ["Perfil e imagen digital ordenados", "Historial por mascota", "Menos cruces de horario", "Seguimiento a clientes habituales"],
  },
  {
    id: "barberia",
    icon: "💈",
    label: "Barbería / Peluquería",
    challenge: "El teléfono no para, los clientes se confunden con los horarios y es difícil recordar quiénes son los habituales.",
    howWeHelp: "Creamos tu presencia digital profesional, organizamos tus canales de contacto y registramos a tus clientes con su historial para que los reconozcas siempre.",
    outcomes: ["Web y WhatsApp Business", "Registro de clientes frecuentes", "Coordinación de horas más clara", "Imagen que transmite confianza"],
  },
  {
    id: "estetica",
    icon: "💆",
    label: "Centro de Estética / Spa",
    challenge: "Muchas consultas por Instagram y WhatsApp que se pierden, agenda llena a veces y vacía otras, difícil hacer seguimiento.",
    howWeHelp: "Conectamos tus canales, organizamos las consultas, facilitamos la coordinación de horas y te ayudamos a mantener contacto con tus clientes de forma ordenada.",
    outcomes: ["Instagram y web alineados", "Consultas organizadas", "Recordatorios de cita", "Seguimiento post-servicio"],
  },
  {
    id: "profesional",
    icon: "💼",
    label: "Profesional Independiente",
    challenge: "Imagen digital básica, dificultad para separar el WhatsApp personal del laboral, y sin registro claro de qué está pasando con cada cliente.",
    howWeHelp: "Te damos presencia digital seria, organizamos tu canal de contacto profesional y creamos un registro claro de tus proyectos y clientes.",
    outcomes: ["Imagen profesional en internet", "WhatsApp Business separado", "Registro de clientes y proyectos", "Seguimiento sin confusión"],
  },
  {
    id: "comercio",
    icon: "🛍️",
    label: "Comercio Local / Tienda",
    challenge: "La gente pregunta precios y disponibilidad por WhatsApp pero nunca llega, la presencia en internet es mínima y no hay forma de dar seguimiento.",
    howWeHelp: "Creamos tu vitrina digital, organizamos las consultas de potenciales clientes y te ayudamos a dar seguimiento a quienes mostraron interés.",
    outcomes: ["Presencia digital clara", "Consultas mejor organizadas", "Seguimiento a interesados", "Más conversión de visitas"],
  },
];

export default function BusinessExamples() {
  const [activeId, setActiveId] = useState(examples[0].id);
  const active = examples.find(e => e.id === activeId) ?? examples[0];

  return (
    <section className="py-16 md:py-24 px-6 bg-[#071428] border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-indigo-400 mb-3 block">¿Para quién es Health Growth?</span>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-3">
            ¿Cómo podríamos ayudarte?
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-xl leading-relaxed">
            Trabajamos con negocios de servicios que quieren verse mejor, ordenarse y recibir más consultas.
          </p>
        </div>

        {/* Type selector */}
        <div
          className="flex gap-2 overflow-x-auto pb-3 mb-8"
          style={{ scrollbarWidth: 'none' }}
        >
          {examples.map(ex => (
            <button
              key={ex.id}
              onClick={() => setActiveId(ex.id)}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-full text-sm font-semibold border transition-all ${
                activeId === ex.id
                  ? 'bg-white text-[#071428] border-white shadow'
                  : 'bg-transparent text-gray-400 border-white/15 hover:border-white/35 hover:text-white'
              }`}
            >
              <span>{ex.icon}</span>
              <span className="hidden sm:block">{ex.label}</span>
              <span className="sm:hidden">{ex.label.split('/')[0].trim()}</span>
            </button>
          ))}
        </div>

        {/* Detail card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="grid md:grid-cols-2 gap-5"
          >
            {/* Challenge */}
            <div className="p-5 rounded-[20px] bg-red-500/[0.05] border border-red-500/15">
              <p className="text-[10px] font-bold uppercase tracking-widest text-red-400 mb-2">El desafío</p>
              <p className="text-gray-300 text-sm leading-relaxed">{active.challenge}</p>
            </div>

            {/* How we help */}
            <div className="p-5 rounded-[20px] bg-cyan-500/[0.05] border border-cyan-500/15">
              <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 mb-2">Cómo podemos ayudarte</p>
              <p className="text-gray-300 text-sm leading-relaxed">{active.howWeHelp}</p>
            </div>

            {/* Outcomes */}
            <div className="md:col-span-2 p-5 rounded-[20px] bg-white/[0.03] border border-white/[0.07]">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-3">Qué incluiría</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {active.outcomes.map((o, i) => (
                  <div key={i} className="flex items-start gap-2 p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                    <span className="text-cyan-400 flex-shrink-0 text-xs mt-0.5">✓</span>
                    <span className="text-gray-400 text-xs leading-snug">{o}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <p className="text-gray-600 text-xs mt-5 italic text-center">
          Esto es orientativo — cada negocio es distinto. La evaluación gratuita define qué tiene más sentido para tu caso.
        </p>
      </div>
    </section>
  );
}
