import React from 'react';

const pillars = [
  { 
    title: "Imagen y Confianza", 
    desc: "Una presencia digital pulida que proyecta autoridad y asegura que tus futuros clientes te elijan a ti antes que a tu competencia." 
  },
  { 
    title: "Organización", 
    desc: "Centralizamos la información, las reservas y el seguimiento para que nada dependa exclusivamente de tu memoria." 
  },
  { 
    title: "Tecnología Asistida", 
    desc: "Implementamos herramientas modernas e inteligencia artificial de forma amable, sin que tengas que ser un experto en sistemas." 
  }
];

export default function Pillars() {
  return (
    <section className="py-24 px-6 border-y border-white/5 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {pillars.map((pilar, i) => (
          <div key={i} className="group p-8 rounded-[32px] bg-zinc-900/20 border border-white/5 hover:border-white/10 hover:bg-zinc-900/40 transition-all duration-500">
            <div className="w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 font-mono text-xs font-bold">
              0{i + 1}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-indigo-300 transition-colors">{pilar.title}</h3>
            <p className="text-gray-500 font-light leading-relaxed">{pilar.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}