"use client";
import React from 'react';

const roadmap = [
  "Automatización de Agenda con IA",
  "Seguimiento Post-Venta Inteligente",
  "Integraciones ERP para Pymes",
  "Análisis de Datos Avanzado"
];

export default function ComingSoon() {
  return (
    <section className="py-24 px-6 bg-black border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-8 block">Visión Futura // HG_LABS</span>
        <h2 className="text-2xl font-bold text-white/40 mb-12">Estamos construyendo el futuro de la gestión operativa.</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {roadmap.map((item, i) => (
            <div key={i} className="px-5 py-2 rounded-full border border-white/5 bg-white/[0.02] text-gray-600 text-xs font-mono">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}