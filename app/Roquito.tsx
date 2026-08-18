"use client";

const functions = [
  { icon: "💬", title: "Recibe consultas", desc: "Primer punto de contacto para reservas y preguntas del negocio." },
  { icon: "📋", title: "Ordena solicitudes", desc: "Clasifica y prioriza cada mensaje antes de pasarlo al equipo." },
  { icon: "📅", title: "Apoya reservas", desc: "Informa disponibilidad y guía al cliente hasta la confirmación." },
  { icon: "🔗", title: "Deriva a Alicia", desc: "Cuando se necesita atención humana, conecta de inmediato." },
  { icon: "📊", title: "Registra información", desc: "Guarda datos del cliente y la mascota para dar seguimiento real." },
  { icon: "🔔", title: "Activa seguimiento", desc: "Recuerda citas, reagendamientos y novedades del servicio." },
];

export default function Roquito() {
  return (
    <section id="rokito" className="py-32 px-6 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[400px] bg-blue-500/5 blur-[120px] -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-blue-500 mb-4 block">
            Piloto Tecnológico · Patitas Felices
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            ROCCO: asistente digital{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              en preparación
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            ROCCO es el piloto de asistente digital que estamos implementando para Patitas Felices.
            Mismo modelo que ofrece Health Growth — probado primero en casa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: identity card */}
          <div className="space-y-6">
            <div className="p-8 rounded-[32px] bg-zinc-900/40 border border-white/10 relative overflow-hidden">
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-[10px] font-bold uppercase tracking-widest">
                En Preparación
              </div>

              <div className="flex items-center gap-5 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/30 to-indigo-500/20 border border-blue-500/30 flex items-center justify-center text-2xl">
                  🐕
                </div>
                <div>
                  <p className="text-white font-bold text-xl">ROCCO</p>
                  <p className="text-blue-400 text-sm font-medium">Asistente Digital · Patitas Felices</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-gray-500 text-xs">Prototipo funcional · Próxima activación</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                ROCCO nace como el primer piloto real del modelo Health Growth aplicado a servicios
                de peluquería canina (dog grooming). Su rol es demostrar que una PYME local puede
                atender mejor, perder menos citas y organizarse — sin contratar más personal.
              </p>

              <div className="p-4 rounded-2xl bg-zinc-950/60 border border-white/5 text-xs font-mono text-gray-500 space-y-1">
                <p className="text-gray-400 font-bold mb-2">Stack tecnológico:</p>
                <p>— WhatsApp Business API</p>
                <p>— Automatización de flujos digitales</p>
                <p>— CRM Health Growth OS</p>
                <p>— IA conversacional aplicada</p>
              </div>
            </div>

            <div className="p-6 rounded-[24px] bg-zinc-900/20 border border-white/5 border-l-4 border-l-blue-500">
              <p className="text-gray-400 text-sm leading-relaxed">
                <span className="text-white font-semibold">¿Por qué un piloto propio?</span> Antes de
                ofrecer un sistema a un cliente, lo construimos y probamos en un negocio real. ROCCO
                es ese laboratorio. Lo que aprenda aquí, lo trae Health Growth a tu empresa.
              </p>
            </div>
          </div>

          {/* Right: functions grid */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-600 mb-6">
              Funciones del asistente
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {functions.map((fn, i) => (
                <div
                  key={i}
                  className="p-5 rounded-[20px] bg-zinc-900/30 border border-white/5 hover:border-blue-500/20 hover:bg-zinc-900/50 transition-all duration-300 group"
                >
                  <div className="text-2xl mb-3">{fn.icon}</div>
                  <p className="text-white font-bold text-sm mb-1 group-hover:text-blue-300 transition-colors">
                    {fn.title}
                  </p>
                  <p className="text-gray-500 text-xs leading-relaxed">{fn.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-5 rounded-[20px] bg-indigo-500/10 border border-indigo-500/20 text-center">
              <p className="text-indigo-300 text-sm font-medium mb-1">
                ¿Quieres un asistente como ROCCO para tu negocio?
              </p>
              <a
                href="#diagnostico"
                className="text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-bold underline underline-offset-4 decoration-indigo-500/40"
              >
                Solicita tu evaluación gratuita →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
