import React from 'react';
import { SITE_CONFIG } from './constants';

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
            <div className="text-blue-500 font-mono text-xs font-bold mb-4 uppercase tracking-widest">CASO DE ÉXITO REAL // HG_PILOT</div>
            <h3 className="text-2xl font-bold text-white mb-2">Caso Fundacional: Patitas Felices</h3>
            <p className="text-gray-600 mb-6 font-mono text-[10px] uppercase tracking-tighter">Estado: Proyecto Piloto en Desarrollo</p>
            <p className="text-gray-300 text-lg font-light leading-relaxed mb-8">
              &ldquo;Patitas Felices&rdquo; es nuestro <strong className="text-white/80">primer caso de estudio real</strong> y el <strong className="text-white/80">proyecto fundacional</strong> que nos permitió validar el modelo Health Growth. A través de esta colaboración, hemos implementado y refinado nuestros sistemas de organización, automatización y seguimiento, demostrando el impacto directo de nuestra metodología en la modernización de una PYME.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center sm:justify-start">
              <a
                href="#diagnostico"
                className="px-6 py-3 rounded-full bg-indigo-500 text-white font-bold text-sm transition-all hover:bg-indigo-400 active:scale-[0.98]"
              >
                Solicitar Diagnóstico
              </a>
              <a
                href={SITE_CONFIG.whatsapp.url}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full border border-white/10 text-white text-sm font-semibold transition-all hover:bg-white/10 active:scale-[0.98]"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}