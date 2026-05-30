import React from 'react';

export default function ProfessionalSupport() {
  return (
    <section id="autoridad" className="py-32 px-6 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="bg-zinc-900/30 rounded-[48px] p-8 md:p-16 border border-white/5 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <div className="aspect-[4/5] rounded-[32px] bg-zinc-800 grayscale hover:grayscale-0 transition-all duration-700 border border-white/10 flex items-center justify-center overflow-hidden">
               {/* Aquí va la imagen de Luis Villanueva */}
               <span className="text-gray-600 font-mono text-[10px] uppercase">Luis Villanueva - HG Founder</span>
            </div>
          </div>
          
          <div className="lg:w-2/3 space-y-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">Luis Villanueva</h2>
              <p className="text-blue-500 font-medium tracking-widest uppercase text-sm">Founder & Arquitecto Operacional</p>
            </div>
            
            <div className="space-y-4 text-gray-400 text-lg font-light leading-relaxed">
              <p>
                HealthGrowth SpA no nace en una oficina de marketing, sino en unidades de cuidados críticos. Aplicamos los principios de <strong>trazabilidad, rigor y respuesta inmediata</strong> de la salud a la salud operativa de los negocios.
              </p>
              <p>
                Entendemos que un emprendedor no necesita "posts", necesita un sistema que funcione con la misma precisión que requiere una unidad de alta complejidad.
              </p>
              
              <div className="py-6 space-y-4">
                <h4 className="text-white font-bold text-sm uppercase tracking-widest border-l-2 border-blue-500 pl-4">Formación Profesional Verificable</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <li className="flex items-center gap-2">✓ Enfermero Universitario (USS)</li>
                  <li className="flex items-center gap-2">✓ Dipl. Gestión de Calidad en Salud</li>
                  <li className="flex items-center gap-2 text-blue-400/80 italic">● Postítulo Cuidados Intensivos (U. de Chile - En curso)</li>
                  <li className="flex items-center gap-2 text-blue-400/80 italic">● Dipl. Prácticas Enfermeras Avanzadas (UA - En curso)</li>
                </ul>
              </div>

              <p>
                Nuestra metodología garantiza que la información fluya sin errores, asegurando que tu crecimiento sea sostenible y organizado.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-gray-500 font-medium">U. San Sebastián</span>
              <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-gray-500 font-medium">U. de Chile</span>
              <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-gray-500 font-medium">U. Autónoma</span>
              <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-gray-500 font-medium">Diplomado Calidad</span>
            </div>

            {/* Estructura preparada para futuras certificaciones */}
            <div className="flex items-center gap-2 opacity-50 mt-2">
               <div className="w-3 h-3 rounded-full border border-dashed border-gray-600 animate-spin-slow" />
               <span className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">Actualización en IA y Automatización</span>
            </div>

            <div className="pt-4">
               <p className="text-xs text-gray-600 italic">"Garantizo la continuidad de tu negocio con la misma precisión que requiere una unidad crítica."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}