"use client";
import { motion } from 'framer-motion';

const packValues: Record<string, string> = {
  "Presencia Digital": "presencia",
  "Orden Comercial": "automatizacion",
  "Automatización": "automatizacion",
  "Sistema de Crecimiento": "personalizado",
};

const levels = [
  { 
    phase: "01", 
    title: "Presencia Digital", 
    icon: "🌐",
    color: "from-blue-500/20 to-blue-600/10",
    items: ["Sitio Web Premium", "WhatsApp Business", "Optimización IG", "Imagen Profesional"],
    description: "Tu negocio entra a internet con presencia profesional."
  },
  { 
    phase: "02", 
    title: "Orden Comercial", 
    icon: "📊",
    color: "from-indigo-500/20 to-indigo-600/10",
    items: ["Implementación CRM", "Agenda Digital", "Registro de Clientes", "Flujo de Atención"],
    description: "Organiza tus clientes y procesos en un único lugar."
  },
  { 
    phase: "03", 
    title: "Automatización", 
    icon: "⚙️",
    color: "from-purple-500/20 to-purple-600/10",
    items: ["Recordatorios Automáticos", "Clasificación de consultas", "WhatsApp con seguimiento", "Recuperación de Leads"],
    description: "Deja que la tecnología trabaje mientras tú creces."
  },
  { 
    phase: "04", 
    title: "Sistema de Crecimiento",
    icon: "🚀",
    color: "from-pink-500/20 to-pink-600/10",
    items: ["Paneles de seguimiento", "Inteligencia Operativa", "Seguimiento Avanzado", "Integración CRM Pro"],
    description: "Toma decisiones con datos reales, en tiempo real."
  }
];

export default function Levels() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto relative">
      {/* Background elements */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gradient-to-l from-indigo-500/5 to-transparent blur-[150px] -z-10 rounded-full pointer-events-none" />
      
      <div className="mb-20 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-400 mb-4 block">Metodología Probada</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
            Los 4 Pilares de <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">tu Transformación</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-blue-600 mb-8" />
          <p className="text-gray-500 text-base md:text-lg max-w-2xl font-light leading-relaxed">
            Implementación por fases diseñada para generar resultados concretos sin saturar la operación diaria de tu negocio. Cada nivel construye sobre el anterior.
          </p>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {levels.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`group relative p-8 rounded-[32px] bg-gradient-to-br ${item.color} border border-white/5 hover:border-indigo-500/50 hover:bg-gradient-to-br hover:from-indigo-500/30 hover:to-blue-500/10 transition-all duration-500 overflow-hidden cursor-pointer hover:shadow-xl`}
          >
            {/* Animated background glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-indigo-500/10 to-transparent -z-10" />
            
            {/* Phase number and icon */}
            <div className="flex items-start justify-between mb-8">
              <div className="space-y-2">
                <div className="text-sm font-mono text-indigo-500/40 group-hover:text-indigo-400 transition-colors font-bold">NIVEL {item.phase}</div>
                <div className="text-4xl">{item.icon}</div>
              </div>
              {i < levels.length - 1 && (
                <div className="hidden lg:flex items-center justify-center text-indigo-500/20">→</div>
              )}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-indigo-300 transition-colors">{item.title}</h3>
            
            {/* Description */}
            <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors mb-6 leading-relaxed">{item.description}</p>

            {/* Features list */}
            <ul className="space-y-3 mb-6">
              {item.items.map((li, j) => (
                <li key={j} className="text-sm text-gray-500 flex items-center gap-3 group-hover:text-gray-300 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-indigo-600/50 group-hover:bg-indigo-400 transition-colors flex-shrink-0" /> 
                  <span>{li}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a
              href="#diagnostico"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  sessionStorage.setItem('hg-pack', packValues[item.title] ?? '');
                }
              }}
              className="w-full px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-bold text-indigo-300 hover:bg-indigo-500/20 hover:border-indigo-500/50 transition-all uppercase tracking-wider group-hover:scale-105 text-center block"
            >
              Conocer Detalles →
            </a>
          </motion.div>
        ))}
      </div>

      {/* Bottom note */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 p-6 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 text-center"
      >
        <p className="text-sm text-gray-400">
          <span className="text-indigo-400 font-bold">💡 Tip:</span> Cada negocio es diferente. Adaptamos el roadmap a tu contexto específico.
        </p>
      </motion.div>
    </section>
  );
}