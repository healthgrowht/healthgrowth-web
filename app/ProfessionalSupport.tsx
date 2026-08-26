import { SITE_CONFIG } from './constants';

export default function ProfessionalSupport() {
  return (
    <section id="autoridad" className="py-14 md:py-20 px-6 bg-[#0a1e38] border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <div className="bg-zinc-900/30 rounded-[32px] p-6 md:p-10 border border-white/5 border-l-2 border-l-indigo-500/40">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-400 mb-3">Quién está detrás</p>
          <h3 className="text-xl font-bold text-white mb-1">{SITE_CONFIG.founder.name}</h3>
          <p className="text-gray-500 text-sm mb-5 max-w-xl leading-relaxed">
            Enfermero con 10+ años en entornos críticos. Fundador de Health Growth para aplicar
            la misma precisión operativa de una UCI a los procesos de PYMEs chilenas.
          </p>
          <div className="flex flex-wrap gap-2">
            {["HubSpot CRM", "Google Cloud", "Vertex AI", "Automatización", "IA Aplicada"].map(c => (
              <span key={c} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-gray-500">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
