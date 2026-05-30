import React from 'react';

const pillars = [
  { 
    title: "Visibilidad", 
    desc: "Presencia digital profesional (Instagram, Web, WhatsApp) que atrae a los prospectos correctos cada día." 
  },
  { 
    title: "Organización", 
    desc: "Sistemas CRM robustos para que cada dato de cliente se convierta en un activo valioso y trazable." 
  },
  { 
    title: "Continuidad", 
    desc: "Seguimiento, recordatorios y reactivación automática. Tu negocio nunca deja de trabajar." 
  }
];

export default function Pillars() {
  return (
    <section className="py-24 px-6 border-y border-white/5 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {pillars.map((pilar, i) => (
          <div key={i} className="group p-8 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500">
            <div className="text-blue-500 mb-6 font-mono text-sm font-bold tracking-widest">0{i + 1} //</div>
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">{pilar.title}</h3>
            <p className="text-gray-500 font-light leading-relaxed">{pilar.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}