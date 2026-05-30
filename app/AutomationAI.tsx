import React from 'react';

const features = [
  {
    title: "Atención 24/7",
    description: "Sistemas inteligentes que responden y califican prospectos en WhatsApp mientras descansas.",
    icon: "🤖"
  },
  {
    title: "Seguimiento Infalible",
    description: "Automatización de recordatorios y confirmaciones para reducir ausentismos a cero.",
    icon: "🔄"
  },
  {
    title: "Recuperación de Leads",
    description: "IA programada para reactivar clientes antiguos y detectar oportunidades perdidas.",
    icon: "📈"
  }
];

export default function AutomationAI() {
  return (
    <section className="py-32 px-6 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500 mb-4 block">Inteligencia Operativa</span>
              <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-white mb-6">Tu negocio nunca <br /> deja de trabajar</h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                No es solo tecnología, es un sistema diseñado para garantizar que cada contacto reciba una respuesta impecable, profesional y oportuna.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {features.map((f, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-all">
                  <div className="text-3xl">{f.icon}</div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{f.title}</h4>
                    <p className="text-sm text-gray-500">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full aspect-square rounded-[40px] bg-gradient-to-br from-blue-600/20 to-zinc-900 border border-white/10 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
            <div className="text-blue-500/50 font-mono text-xs animate-pulse text-center p-8"> [ SYSTEM_CORE_ACTIVE ] <br /> n8n_integration_ready </div>
          </div>
        </div>
      </div>
    </section>
  );
}