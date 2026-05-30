import React from 'react';

export default function SocialProof() {
  return (
    <section id="piloto" className="py-32 px-6 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-blue-500 mb-4 block">Validación Metodológica</span>
          <h2 className="text-3xl md:text-6xl font-bold tracking-tighter text-white mb-6">Proyectos Piloto</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Actualmente validamos nuestra arquitectura mediante casos de estudio controlados para garantizar la máxima eficiencia en cada implementación.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="p-10 rounded-[32px] bg-zinc-900/30 border border-white/5 border-l-blue-500 border-l-4">
            <div className="text-blue-500 font-mono text-xs font-bold mb-4 uppercase tracking-widest">VALIDACIÓN COMERCIAL // HG_PILOT</div>
            <h3 className="text-2xl font-bold text-white mb-2">Patitas Felices SpA</h3>
            <p className="text-gray-600 mb-6 font-mono text-[10px] uppercase tracking-tighter">Estado: Caso piloto en desarrollo / Actualmente en implementación</p>
            <p className="text-gray-300 text-lg font-light leading-relaxed mb-8">
              Objetivo: Implementar y validar sistemas de organización, seguimiento y automatización en un negocio real para documentar resultados futuros.
            </p>
            <div className="inline-block px-6 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
               Caso en desarrollo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}