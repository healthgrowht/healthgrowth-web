import React from 'react';

const levels = [
  { phase: "01", title: "Presencia Digital", items: ["Sitio Web Premium", "WhatsApp Business", "Optimización IG", "Imagen Profesional"] },
  { phase: "02", title: "Orden Comercial", items: ["Implementación CRM", "Agenda Digital", "Registro de Clientes", "Flujo de Atención"] },
  { phase: "03", title: "Automatización", items: ["Recordatorios Automáticos", "IA de Clasificación", "WhatsApp Inteligente", "Recuperación de Leads"] },
  { phase: "04", title: "Ecosistema Total", items: ["Dashboards n8n", "Inteligencia Op.", "Seguimiento Avanzado", "Integración CRM Pro"] }
];

export default function Levels() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-20 text-center md:text-left">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500 mb-4 block">Metodología Progresiva</span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white">Evolución de tu Ecosistema</h2>
        <div className="h-1 w-20 bg-blue-600 mb-8 mx-auto md:mx-0" />
        <p className="text-gray-500 text-lg max-w-xl font-light leading-relaxed">
          Implementación por fases para garantizar resultados tangibles sin saturar la operación diaria de tu negocio.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {levels.map((item, i) => (
          <div 
            key={i} 
            className="group relative p-8 rounded-[32px] bg-zinc-900/30 border border-white/5 hover:border-blue-500/30 hover:bg-zinc-900/50 transition-all duration-500 overflow-hidden"
          >
            <div className="text-sm font-mono text-blue-500/40 mb-6 font-bold group-hover:text-blue-500 transition-colors">NIVEL {item.phase}</div>
            <h3 className="text-2xl font-bold mb-8 text-white">{item.title}</h3>
            <ul className="space-y-4">
              {item.items.map((li, j) => (
                <li key={j} className="text-sm text-gray-500 flex items-center gap-3 group-hover:text-gray-300 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600/30 group-hover:bg-blue-500 transition-colors" /> {li}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}