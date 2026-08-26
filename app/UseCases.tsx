"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const rubros = [
  {
    icon: "🐾",
    name: "Grooming",
    fullName: "Peluquería Canina / Grooming",
    problems: ["Reservas por WhatsApp sin orden", "Clientes que no confirman la cita", "Sin historial de mascotas"],
    solution: "Agenda digital, recordatorios automáticos y registro por mascota y dueño. Menos llamadas, más citas confirmadas.",
    result: "Menos ausencias, operación ordenada sin contratar más personal.",
  },
  {
    icon: "✂️",
    name: "Barbería",
    fullName: "Barberías y Salones",
    problems: ["Cancelaciones sin aviso previo", "Lista de espera difícil de manejar", "Sin base de clientes organizada"],
    solution: "Confirmaciones automáticas, lista de espera digital y fidelización de clientes habituales.",
    result: "Menos tiempos muertos y clientes que vuelven solos.",
  },
  {
    icon: "💅",
    name: "Estética",
    fullName: "Centros de Estética",
    problems: ["Agenda llena pero con inasistencias", "Clientes inactivos sin reactivación", "Imagen digital inconsistente"],
    solution: "Recordatorios de cita, reactivación automática y presencia digital profesional.",
    result: "Agenda más llena y clientes que no desaparecen.",
  },
  {
    icon: "🩺",
    name: "Salud",
    fullName: "Profesionales de Salud",
    problems: ["Consultas sin respuesta rápida", "Agenda manual propensa a errores", "Seguimiento informal de pacientes"],
    solution: "Flujo de atención organizado, agenda centralizada y recordatorios de consulta.",
    result: "Pacientes mejor atendidos y menos carga administrativa.",
  },
  {
    icon: "💼",
    name: "Servicios",
    fullName: "Servicios Profesionales",
    problems: ["Propuestas sin seguimiento", "Prospectos sin gestionar", "Comunicación dispersa entre canales"],
    solution: "CRM de oportunidades, seguimiento de propuestas y comunicación centralizada.",
    result: "Más cierres y menos oportunidades perdidas.",
  },
  {
    icon: "🏪",
    name: "PYME",
    fullName: "Pequeño Comercio / PYME",
    problems: ["Sin presencia digital confiable", "Atención manual que consume tiempo", "Sin datos reales de clientes"],
    solution: "Web + WhatsApp organizados y base de clientes para crecer con datos reales.",
    result: "Más canales de venta y operación que no depende solo de ti.",
  },
];

export default function UseCases() {
  const [selected, setSelected] = useState(5);
  const rubro = rubros[selected];

  return (
    <motion.section
      id="rubros"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-16 md:py-28 px-6 bg-[#0a1e38] border-t border-white/5"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400 mb-3 block">
            Tu tipo de negocio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
            ¿En qué tipo de negocio trabajas?
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Selecciona tu rubro para ver cómo aplica.
          </p>
        </div>

        {/* Chips — scroll horizontal en mobile */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-8 md:flex-wrap md:justify-center" style={{ scrollbarWidth: 'none' }}>
          {rubros.map((r, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all border ${
                selected === i
                  ? 'bg-cyan-500 text-black border-cyan-500 shadow-lg'
                  : 'bg-white/5 text-gray-400 border-white/15 hover:border-white/30 hover:text-white'
              }`}
            >
              <span>{r.icon}</span>
              <span>{r.name}</span>
            </button>
          ))}
        </div>

        {/* Card única con contenido dinámico */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="bg-[#071428] rounded-[28px] p-6 md:p-10 text-white"
          >
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
              <span className="text-3xl">{rubro.icon}</span>
              <div>
                <p className="text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-0.5">Rubro seleccionado</p>
                <h3 className="text-white text-xl font-bold">{rubro.fullName}</h3>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-red-400 mb-3">Problemas típicos</p>
                <ul className="space-y-2">
                  {rubro.problems.map((p, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-300 text-sm">
                      <span className="text-red-400 flex-shrink-0 mt-0.5 text-xs">✕</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 mb-3">Qué hacemos</p>
                <p className="text-gray-300 text-sm leading-relaxed">{rubro.solution}</p>
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-green-400 mb-3">Resultado esperado</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{rubro.result}</p>
                </div>
                <a
                  href="#diagnostico"
                  className="mt-auto block text-center px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-sm transition-all active:scale-[0.98]"
                >
                  Diagnóstico gratuito →
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
