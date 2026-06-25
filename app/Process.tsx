import React from 'react';

const roadmap = [
  { step: "01", title: "Diagnóstico y Plan", desc: "Evaluamos el estado actual de tu negocio y definimos qué herramientas necesitas para crecer sin caos." },
  { step: "02", title: "Orden e Imagen", desc: "Profesionalizamos tus canales (WhatsApp, Web, Redes) para proyectar máxima confianza." },
  { step: "03", title: "Integración Digital", desc: "Conectamos tu agenda, automatizamos tus recordatorios y organizamos a tus clientes." },
  { step: "04", title: "Acompañamiento", desc: "No te dejamos solo. Capacitamos a tu equipo y aseguramos que todo funcione perfectamente." }
];

export default function Process() {
  return (
    <section id="proceso" className="py-32 px-6 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-400 mb-4 block">Cómo trabajamos</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">Un proceso claro y acompañado</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light">Transformamos el desorden en una estructura sólida mediante una integración paso a paso y sin fricciones.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roadmap.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center group p-8 rounded-[32px] bg-zinc-900/20 border border-white/5 hover:border-indigo-500/30 transition-all">
              <div className="w-12 h-12 rounded-full border border-indigo-500/20 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 text-indigo-400 font-mono font-bold">
                {item.step}
              </div>
              <h4 className="text-white font-bold text-lg mb-3">{item.title}</h4>
              <p className="text-sm text-gray-500 font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}