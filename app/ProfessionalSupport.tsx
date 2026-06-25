import React from 'react';
import Image from 'next/image';
import { SITE_CONFIG } from './constants';

export default function ProfessionalSupport() {
  return (
    <section id="autoridad" className="py-32 px-6 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="bg-zinc-900/30 rounded-[48px] p-8 md:p-16 border border-white/5 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <div className="aspect-[4/5] rounded-[32px] bg-zinc-800 grayscale hover:grayscale-0 transition-all duration-700 border border-white/10 flex flex-col items-center justify-center overflow-hidden relative">
              <Image
                src={SITE_CONFIG.founder.image}
                alt={SITE_CONFIG.founder.name}
                fill
                className="object-cover opacity-50 hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
                <span className="text-gray-300 font-mono text-[10px] uppercase block text-center">{SITE_CONFIG.founder.name}<br/>Fundador</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3 space-y-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">{SITE_CONFIG.founder.name}</h2>
              <p className="text-indigo-400 font-medium tracking-widest uppercase text-sm">Fundador & Estratega Operacional</p>
            </div>
            
            <div className="space-y-4 text-gray-400 text-lg font-light leading-relaxed">
              <p>
                Enfermero Universitario con más de 10 años de experiencia profesional en áreas críticas de salud, incluyendo UPC, UCI, Pabellón Central, coordinación clínica, gestión de procesos y trabajo en entornos de alta complejidad.
              </p>
              <p>
                A partir de su experiencia profesional, comprendió cómo las organizaciones pierden tiempo, dinero y oportunidades debido al desorden operativo, la falta de procesos y la escasa digitalización.
              </p>
              
              <div className="py-6 space-y-4">
                <h4 className="text-white font-bold text-sm uppercase tracking-widest border-l-2 border-indigo-500 pl-4">
                  Formación Continua y Especialización Tecnológica
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <li className="flex items-center gap-2">✓ HubSpot CRM</li>
                  <li className="flex items-center gap-2">✓ HubSpot Customer Success</li>
                  <li className="flex items-center gap-2">✓ Google Cloud Platform</li>
                  <li className="flex items-center gap-2">✓ Vertex AI</li>
                  <li className="flex items-center gap-2">✓ Automatización con n8n</li>
                  <li className="flex items-center gap-2">✓ IA aplicada a negocios</li>
                  <li className="flex items-center gap-2">✓ Diseño de sistemas digitales</li>
                  <li className="flex items-center gap-2">✓ Automatización operativa</li>
                </ul>
              </div>

              <p>
                Así nace <strong>Health Growth</strong>, enfocada en ayudar a tu empresa a integrar todas estas herramientas en un ecosistema que aporte valor real, cercanía y crecimiento.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-gray-400 font-medium">Operaciones</span>
              <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-gray-400 font-medium">Tecnología</span>
              <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-gray-400 font-medium">Procesos</span>
            </div>

            <div className="pt-4">
               <p className="text-xs text-gray-600 italic">&ldquo;Garantizo la continuidad de tu negocio con la misma precisión que requiere una unidad crítica.&rdquo;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}