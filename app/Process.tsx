import React from 'react';

const roadmap = [
  { step: "01", title: "Diagnóstico", desc: "Evaluación clínica de flujos." },
  { step: "02", title: "Plan", desc: "Arquitectura a medida." },
  { step: "03", title: "Implementación", desc: "Puesta en marcha del sistema." },
  { step: "04", title: "Automatización", desc: "Activación de IA y Seguimiento." },
  { step: "05", title: "Seguimiento", desc: "Control de trazabilidad activa." },
  { step: "06", title: "Optimización", desc: "Mejora continua de resultados." }
];

export default function Process() {
  return (
    <section id="proceso" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500 mb-4 block">Metodología HG</span>
          <h2 className="text-3xl md:text-6xl font-bold tracking-tighter text-white mb-6">Un proceso quirúrgico</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light">Transformamos el caos en un sistema ordenado mediante una implementación controlada.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {roadmap.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-full border border-blue-500/20 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 text-blue-500 font-mono font-bold">
                {item.step}
              </div>
              <h4 className="text-white font-bold text-sm mb-2">{item.title}</h4>
              <p className="text-[10px] text-gray-600 uppercase tracking-tighter leading-tight">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}