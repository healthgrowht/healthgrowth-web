"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Transformation() {
  return (
    <section id="transformacion" className="py-32 px-6 bg-zinc-950/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-6xl font-bold tracking-tighter text-white mb-6">El impacto del orden</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-10 rounded-[40px] bg-red-500/5 border border-red-500/10 relative overflow-hidden">
            <div className="text-red-500 font-mono text-xs mb-8 uppercase tracking-[0.2em] font-bold">● Escenario Inicial</div>
            <h3 className="text-2xl font-bold text-white mb-8 italic">"El desorden invisible"</h3>
            <ul className="space-y-4">
              <li className="text-gray-500 text-sm flex gap-3 italic"><span>✕</span> Negocio poco visible o estancado</li>
              <li className="text-gray-500 text-sm flex gap-3 italic"><span>✕</span> Redes sociales desactualizadas</li>
              <li className="text-gray-500 text-sm flex gap-3 italic"><span>✕</span> Imagen poco profesional ante el cliente</li>
              <li className="text-gray-500 text-sm flex gap-3 italic"><span>✕</span> Procesos improvisados y manuales</li>
              <li className="text-gray-500 text-sm flex gap-3 italic"><span>✕</span> Fuga constante de prospectos</li>
            </ul>
          </div>

          <div className="p-10 rounded-[40px] bg-blue-500/5 border border-blue-500/20 relative overflow-hidden">
            <div className="text-blue-500 font-mono text-xs mb-8 uppercase tracking-[0.2em] font-bold">● Escenario HealthGrowth</div>
            <h3 className="text-2xl font-bold text-white mb-8 italic">"Crecimiento Organizado"</h3>
            <ul className="space-y-4">
              <li className="text-white text-sm flex gap-3"><span>✓</span> Imagen de autoridad inmediata</li>
              <li className="text-white text-sm flex gap-3"><span>✓</span> Presencia digital activa y atractiva</li>
              <li className="text-white text-sm flex gap-3"><span>✓</span> Aumento en la captación de consultas</li>
              <li className="text-white text-sm flex gap-3"><span>✓</span> Operación centralizada y eficiente</li>
              <li className="text-white text-sm flex gap-3"><span>✓</span> Experiencia de cliente premium</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}