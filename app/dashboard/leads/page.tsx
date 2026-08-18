"use client";
import { useState } from 'react';

type Priority = 'alta' | 'media' | 'baja';
type Stage =
  | 'senal_detectada'
  | 'prospecto'
  | 'prospecto_enriquecido'
  | 'validado'
  | 'oportunidad'
  | 'contacto'
  | 'reunion'
  | 'propuesta'
  | 'cliente'
  | 'nurturing';
type Origin = 'scrapling' | 'formulario' | 'instagram' | 'whatsapp' | 'referido';

interface Lead {
  id: string;
  company: string;
  contact: string;
  commune: string;
  sector: string;
  origin: Origin;
  score: number;
  priority: Priority;
  stage: Stage;
  lastSeen: string;
  challenge?: string;
  nextAction?: string;
}

const SEED_LEADS: Lead[] = [
  {
    id: '1',
    company: 'Inmigrants Barber Studio',
    contact: 'Dueño',
    commune: 'Maipú',
    sector: 'Barbería',
    origin: 'scrapling',
    score: 3.40,
    priority: 'alta',
    stage: 'prospecto_enriquecido',
    lastSeen: '22 Jun',
    challenge: 'Sin WhatsApp Business, Instagram sin actividad',
    nextAction: 'Primer contacto vía DM Instagram',
  },
  {
    id: '2',
    company: 'Epoca Estilistas',
    contact: 'Dueña',
    commune: 'Santiago Centro',
    sector: 'Peluquería',
    origin: 'scrapling',
    score: 3.40,
    priority: 'alta',
    stage: 'prospecto_enriquecido',
    lastSeen: '22 Jun',
    challenge: 'Web obsoleta, sin reservas online',
    nextAction: 'Primer contacto vía DM Instagram',
  },
  {
    id: '3',
    company: 'Barbudos Barberia',
    contact: 'Dueño',
    commune: 'Santiago Centro',
    sector: 'Barbería',
    origin: 'scrapling',
    score: 2.75,
    priority: 'media',
    stage: 'prospecto_enriquecido',
    lastSeen: '22 Jun',
    challenge: 'Google Business incompleto',
    nextAction: 'Verificar datos antes de contactar',
  },
  {
    id: '4',
    company: 'Lead demo — Clínica Estética',
    contact: 'Directora',
    commune: 'Providencia',
    sector: 'Estética',
    origin: 'formulario',
    score: 2.20,
    priority: 'media',
    stage: 'contacto',
    lastSeen: 'Hoy',
    challenge: 'Quiere automatizar reservas',
    nextAction: 'Agendar diagnóstico',
  },
  {
    id: '5',
    company: 'Lead demo — Veterinaria',
    contact: 'Dueño',
    commune: 'Las Condes',
    sector: 'Veterinaria',
    origin: 'instagram',
    score: 1.80,
    priority: 'baja',
    stage: 'prospecto',
    lastSeen: '20 Jun',
    challenge: 'Sin presencia digital',
    nextAction: 'Enriquecer datos',
  },
];

const STAGES: { key: Stage; label: string; color: string }[] = [
  { key: 'senal_detectada', label: 'Señal', color: 'border-zinc-500' },
  { key: 'prospecto', label: 'Prospecto', color: 'border-zinc-400' },
  { key: 'prospecto_enriquecido', label: 'Enriquecido', color: 'border-blue-500' },
  { key: 'validado', label: 'Validado', color: 'border-cyan-500' },
  { key: 'oportunidad', label: 'Oportunidad', color: 'border-indigo-500' },
  { key: 'contacto', label: 'Contacto', color: 'border-violet-500' },
  { key: 'reunion', label: 'Reunión', color: 'border-purple-500' },
  { key: 'propuesta', label: 'Propuesta', color: 'border-pink-500' },
  { key: 'cliente', label: 'Cliente ✓', color: 'border-emerald-500' },
  { key: 'nurturing', label: 'Nurturing', color: 'border-gray-500' },
];

const PRIORITY_STYLE: Record<Priority, string> = {
  alta: 'bg-red-500/10 text-red-400 border-red-500/20',
  media: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  baja: 'bg-gray-500/10 text-gray-500 border-gray-500/20',
};

const ORIGIN_ICON: Record<Origin, string> = {
  scrapling: '🔍',
  formulario: '📋',
  instagram: '📸',
  whatsapp: '💬',
  referido: '🤝',
};

function ScoreBadge({ score }: { score: number }) {
  const color = score >= 3.0 ? 'text-emerald-400 bg-emerald-500/10' : score >= 2.0 ? 'text-yellow-400 bg-yellow-500/10' : 'text-gray-500 bg-gray-500/10';
  return (
    <span className={`text-[10px] font-black px-1.5 py-0.5 rounded ${color}`}>
      {score.toFixed(2)}
    </span>
  );
}

function LeadCard({ lead, onMove }: { lead: Lead; onMove: (id: string, direction: 'forward' | 'back') => void }) {
  const [expanded, setExpanded] = useState(false);
  const stageIdx = STAGES.findIndex((s) => s.key === lead.stage);

  return (
    <div className="bg-[#1a1a24] border border-white/5 hover:border-white/10 rounded-xl p-3 transition-all group">
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-base">{ORIGIN_ICON[lead.origin]}</span>
          <p className="text-white text-xs font-semibold truncate">{lead.company}</p>
        </div>
        <ScoreBadge score={lead.score} />
      </div>

      <p className="text-gray-600 text-[10px] mb-2">{lead.commune} · {lead.sector}</p>

      <div className="flex items-center gap-1.5 mb-3">
        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded border ${PRIORITY_STYLE[lead.priority]}`}>
          {lead.priority}
        </span>
        <span className="text-[9px] text-gray-700">{lead.lastSeen}</span>
      </div>

      {expanded && lead.challenge && (
        <div className="mb-3 p-2 rounded-lg bg-zinc-900/80 border border-white/5">
          <p className="text-[10px] text-gray-500 font-bold uppercase mb-1">Gap detectado</p>
          <p className="text-[11px] text-gray-400">{lead.challenge}</p>
          {lead.nextAction && (
            <>
              <p className="text-[10px] text-gray-500 font-bold uppercase mt-2 mb-1">Próxima acción</p>
              <p className="text-[11px] text-indigo-400">{lead.nextAction}</p>
            </>
          )}
        </div>
      )}

      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex-1 py-1 text-[10px] text-gray-500 hover:text-gray-300 bg-zinc-800/50 hover:bg-zinc-700/50 rounded transition-all"
        >
          {expanded ? 'Cerrar' : 'Ver más'}
        </button>
        {stageIdx > 0 && (
          <button
            onClick={() => onMove(lead.id, 'back')}
            title="Retroceder"
            className="px-1.5 py-1 text-gray-600 hover:text-gray-400 bg-zinc-800/50 hover:bg-zinc-700/50 rounded transition-all"
          >
            ←
          </button>
        )}
        {stageIdx < STAGES.length - 1 && (
          <button
            onClick={() => onMove(lead.id, 'forward')}
            title="Avanzar"
            className="px-1.5 py-1 text-indigo-400 hover:text-indigo-300 bg-indigo-500/10 hover:bg-indigo-500/20 rounded transition-all"
          >
            →
          </button>
        )}
      </div>
    </div>
  );
}

export default function PipelinePage() {
  const [leads, setLeads] = useState<Lead[]>(SEED_LEADS);
  const [view, setView] = useState<'kanban' | 'table'>('kanban');
  const [filter, setFilter] = useState<Priority | 'all'>('all');

  const moveCard = (id: string, direction: 'forward' | 'back') => {
    setLeads((prev) =>
      prev.map((l) => {
        if (l.id !== id) return l;
        const idx = STAGES.findIndex((s) => s.key === l.stage);
        const newIdx = direction === 'forward' ? idx + 1 : idx - 1;
        if (newIdx < 0 || newIdx >= STAGES.length) return l;
        return { ...l, stage: STAGES[newIdx].key };
      })
    );
  };

  const filtered = filter === 'all' ? leads : leads.filter((l) => l.priority === filter);

  const stagesWithLeads = STAGES.map((s) => ({
    ...s,
    leads: filtered.filter((l) => l.stage === s.key),
  }));

  const nonEmptyStages = stagesWithLeads.filter((s) => s.leads.length > 0 || ['prospecto_enriquecido', 'oportunidad', 'contacto', 'propuesta', 'cliente'].includes(s.key));

  return (
    <div className="h-full flex flex-col">
      {/* Toolbar */}
      <div className="px-6 py-4 border-b border-white/5 flex items-center gap-3 flex-shrink-0">
        <div>
          <h1 className="text-sm font-bold text-white">Pipeline de Leads</h1>
          <p className="text-[10px] text-gray-600">{leads.length} leads · {leads.filter((l) => l.priority === 'alta').length} prioridad alta</p>
        </div>

        <div className="ml-auto flex items-center gap-2">
          {/* Filter */}
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as Priority | 'all')}
            className="bg-zinc-800 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-gray-300 focus:outline-none focus:border-indigo-500"
          >
            <option value="all">Todas las prioridades</option>
            <option value="alta">Alta prioridad</option>
            <option value="media">Media prioridad</option>
            <option value="baja">Baja prioridad</option>
          </select>

          {/* View toggle */}
          <div className="flex items-center bg-zinc-800 rounded-lg border border-white/10 p-0.5">
            <button
              onClick={() => setView('kanban')}
              className={`px-3 py-1 rounded text-xs font-medium transition-all ${view === 'kanban' ? 'bg-indigo-600 text-white' : 'text-gray-500 hover:text-gray-300'}`}
            >
              Kanban
            </button>
            <button
              onClick={() => setView('table')}
              className={`px-3 py-1 rounded text-xs font-medium transition-all ${view === 'table' ? 'bg-indigo-600 text-white' : 'text-gray-500 hover:text-gray-300'}`}
            >
              Tabla
            </button>
          </div>

          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-lg transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Agregar lead
          </button>
        </div>
      </div>

      {/* Kanban view */}
      {view === 'kanban' && (
        <div className="flex-1 overflow-x-auto">
          <div className="flex gap-3 p-4 h-full" style={{ minWidth: `${nonEmptyStages.length * 220}px` }}>
            {nonEmptyStages.map((stage) => (
              <div key={stage.key} className="flex flex-col w-52 flex-shrink-0">
                {/* Column header */}
                <div className={`flex items-center justify-between px-3 py-2 mb-2 rounded-lg border-t-2 bg-[#111118] border border-white/5 ${stage.color}`}>
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wide">{stage.label}</span>
                  <span className="text-[10px] text-gray-600 bg-zinc-800 px-1.5 rounded font-mono">{stage.leads.length}</span>
                </div>

                {/* Cards */}
                <div className="flex-1 space-y-2 overflow-y-auto">
                  {stage.leads.map((lead) => (
                    <LeadCard key={lead.id} lead={lead} onMove={moveCard} />
                  ))}
                  {stage.leads.length === 0 && (
                    <div className="border border-dashed border-white/5 rounded-xl p-4 text-center">
                      <p className="text-[10px] text-gray-700">Sin leads</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Table view */}
      {view === 'table' && (
        <div className="flex-1 overflow-auto p-4">
          <div className="bg-[#111118] rounded-2xl border border-white/5 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5">
                  {['Empresa', 'Sector', 'Comuna', 'Origen', 'Score', 'Prioridad', 'Estado', 'Acción'].map((h) => (
                    <th key={h} className="text-left px-4 py-3 text-[10px] font-bold text-gray-600 uppercase tracking-widest">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filtered.map((lead) => (
                  <tr key={lead.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-4 py-3">
                      <p className="text-white font-medium text-xs">{lead.company}</p>
                      <p className="text-gray-600 text-[10px]">{lead.contact}</p>
                    </td>
                    <td className="px-4 py-3 text-gray-500 text-xs">{lead.sector}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs">{lead.commune}</td>
                    <td className="px-4 py-3 text-xs">
                      <span className="flex items-center gap-1">
                        <span>{ORIGIN_ICON[lead.origin]}</span>
                        <span className="text-gray-500 capitalize">{lead.origin}</span>
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <ScoreBadge score={lead.score} />
                    </td>
                    <td className="px-4 py-3">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${PRIORITY_STYLE[lead.priority]}`}>
                        {lead.priority}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-[10px] text-gray-500 bg-zinc-800 px-2 py-0.5 rounded">
                        {STAGES.find((s) => s.key === lead.stage)?.label}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-1">
                        <button
                          onClick={() => moveCard(lead.id, 'forward')}
                          className="px-2 py-1 text-[10px] bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 rounded transition-all"
                        >
                          Avanzar →
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Footer hint */}
      <div className="px-6 py-2 border-t border-white/5 bg-[#0d0d14] flex-shrink-0">
        <p className="text-[10px] text-gray-700 font-mono">
          Datos de prueba — Conectar con Notion CRM via API para datos en tiempo real · Moltbot activo como operador manual
        </p>
      </div>
    </div>
  );
}
