"use client";
export default function Transformation() {
  return (
    <section id="transformacion" className="py-32 px-6 bg-zinc-950/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">El impacto del orden</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-10 rounded-[40px] bg-zinc-900/20 border border-white/5 relative overflow-hidden transition-all hover:bg-zinc-900/40">
            <div className="text-zinc-500 font-mono text-xs mb-8 uppercase tracking-[0.2em] font-bold">Sin un sistema claro</div>
            <h3 className="text-2xl font-bold text-white mb-8">Operación Tradicional</h3>
            <ul className="space-y-4">
              <li className="text-gray-500 text-sm flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-zinc-700" /> Tu marca no transmite confianza digital</li>
              <li className="text-gray-500 text-sm flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-zinc-700" /> Uso de libretas o memoria para organizar el día</li>
              <li className="text-gray-500 text-sm flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-zinc-700" /> Clientes ignorados por responder tarde en WhatsApp</li>
              <li className="text-gray-500 text-sm flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-zinc-700" /> Ausentismo de clientes por falta de recordatorios</li>
              <li className="text-gray-500 text-sm flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-zinc-700" /> Dueño sobrepasado apagando incendios operativos</li>
            </ul>
          </div>

          <div className="p-10 rounded-[40px] bg-indigo-500/5 border border-indigo-500/20 relative overflow-hidden transition-all hover:bg-indigo-500/10">
            <div className="text-indigo-400 font-mono text-xs mb-8 uppercase tracking-[0.2em] font-bold">Con Health Growth</div>
            <h3 className="text-2xl font-bold text-white mb-8">Crecimiento Organizado</h3>
            <ul className="space-y-4">
              <li className="text-gray-300 text-sm flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> Presencia profesional que atrae y da seguridad</li>
              <li className="text-gray-300 text-sm flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> Agenda digital clara y sin cruces de horarios</li>
              <li className="text-gray-300 text-sm flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> WhatsApp profesional y respuestas estructuradas</li>
              <li className="text-gray-300 text-sm flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> Recordatorios automáticos que ayudan a reducir inasistencias</li>
              <li className="text-gray-300 text-sm flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> Tiempo libre para concentrarte en dar tu servicio</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}