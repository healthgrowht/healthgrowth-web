"use client";
import React from 'react';
import Link from 'next/link';

const STATS = [
  { label: 'Leads Totales', value: '3', delta: '+3 esta semana', color: 'indigo', icon: '👥' },
  { label: 'Prioridad Alta', value: '2', delta: 'Acción requerida', color: 'orange', icon: '🔥' },
  { label: 'En Conversación', value: '0', delta: 'Ninguno aún', color: 'blue', icon: '💬' },
  { label: 'Clientes Ganados', value: '0', delta: 'Meta: 1 este mes', color: 'emerald', icon: '🏆' },
];

const COLOR_MAP: Record<string, string> = {
  indigo: 'border-indigo-500/20 bg-indigo-500/5 text-indigo-400',
  orange: 'border-orange-500/20 bg-orange-500/5 text-orange-400',
  blue: 'border-blue-500/20 bg-blue-500/5 text-blue-400',
  emerald: 'border-emerald-500/20 bg-emerald-500/5 text-emerald-400',
};

const LEADS = [
  {
    company: 'Inmigrants Barber Studio',
    contact: 'Dueño',
    origin: 'Scrapling',
    score: 3.40,
    stage: 'prospecto_enriquecido',
    priority: 'alta',
    commune: 'Maipú',
    sector: 'Barbería',
    lastSeen: 'Hace 1 día',
  },
  {
    company: 'Epoca Estilistas',
    contact: 'Dueña',
    origin: 'Scrapling',
    score: 3.40,
    stage: 'prospecto_enriquecido',
    priority: 'alta',
    commune: 'Santiago Centro',
    sector: 'Peluquería',
    lastSeen: 'Hace 1 día',
  },
  {
    company: 'Barbudos Barberia',
    contact: 'Dueño',
    origin: 'Scrapling',
    score: 2.75,
    stage: 'prospecto_enriquecido',
    priority: 'media',
    commune: 'Santiago Centro',
    sector: 'Barbería',
    lastSeen: 'Hace 1 día',
  },
];

const ACTIONS = [
  { text: 'Contactar Inmigrants Barber Studio vía DM', type: 'lead', urgency: 'HOY' },
  { text: 'Contactar Epoca Estilistas vía DM', type: 'lead', urgency: 'HOY' },
  { text: 'Publicar historia IG encuesta @healthgrowthspa', type: 'content', urgency: 'HOY' },
  { text: 'Instalar Scrapling para buscar 50 leads nuevos', type: 'tech', urgency: 'ESTA SEMANA' },
  { text: 'Subir logo oficial a /public/logo/', type: 'tech', urgency: 'ESTA SEMANA' },
  { text: 'Deploy a Vercel (web no está en internet aún)', type: 'tech', urgency: 'ESTA SEMANA' },
];

const URGENCY_COLOR: Record<string, string> = {
  HOY: 'bg-red-500/10 text-red-400 border-red-500/20',
  'ESTA SEMANA': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
};

const TYPE_ICON: Record<string, string> = {
  lead: '👤',
  content: '📸',
  tech: '⚙️',
};

const STAGE_LABEL: Record<string, string> = {
  senal_detectada: 'Señal',
  prospecto: 'Prospecto',
  prospecto_enriquecido: 'Enriquecido',
  validado: 'Validado',
  oportunidad: 'Oportunidad',
  contacto: 'Contacto',
  reunion: 'Reunión',
  propuesta: 'Propuesta',
  cliente: 'Cliente',
  nurturing: 'Nurturing',
};

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-xl font-bold text-white">Panel de Operaciones</h1>
          <p className="text-gray-600 text-sm mt-0.5">Lunes 23 junio 2026 — Semana 01</p>
        </div>
        <Link
          href="/dashboard/leads"
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold rounded-lg transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Ver Pipeline
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map((s) => (
          <div key={s.label} className={`p-4 rounded-2xl border ${COLOR_MAP[s.color]}`}>
            <div className="flex items-start justify-between mb-3">
              <span className="text-xl">{s.icon}</span>
            </div>
            <p className="text-3xl font-black text-white mb-1">{s.value}</p>
            <p className="text-xs font-medium opacity-90">{s.label}</p>
            <p className="text-[10px] text-gray-600 mt-1">{s.delta}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Leads recientes */}
        <div className="lg:col-span-2 bg-[#111118] rounded-2xl border border-white/5 overflow-hidden">
          <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between">
            <h2 className="text-sm font-bold text-white">Cartera Actual</h2>
            <Link href="/dashboard/leads" className="text-[10px] text-indigo-400 hover:text-indigo-300 font-bold uppercase tracking-wide">
              Ver pipeline →
            </Link>
          </div>
          <div className="divide-y divide-white/5">
            {LEADS.map((lead) => (
              <div key={lead.company} className="px-5 py-4 hover:bg-white/[0.02] transition-colors flex items-center gap-4">
                <div className="w-9 h-9 rounded-xl bg-zinc-800 flex items-center justify-center flex-shrink-0 text-lg">
                  {lead.sector === 'Barbería' ? '✂️' : '💇'}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-semibold truncate">{lead.company}</p>
                  <p className="text-gray-600 text-xs">{lead.commune} · {lead.sector}</p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <div className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${lead.priority === 'alta' ? 'bg-red-500/10 text-red-400' : 'bg-yellow-500/10 text-yellow-400'}`}>
                    {lead.priority}
                  </div>
                  <div className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-500/10 text-indigo-400">
                    {lead.score}
                  </div>
                  <div className="hidden sm:block text-[10px] text-gray-600 bg-zinc-800/50 px-2 py-0.5 rounded-full">
                    {STAGE_LABEL[lead.stage]}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="px-5 py-3 border-t border-white/5 bg-indigo-500/5">
            <p className="text-[11px] text-indigo-400 font-medium">
              ⚡ Acción recomendada: Mover los 3 a <strong>Oportunidad</strong> y preparar primer contacto esta semana
            </p>
          </div>
        </div>

        {/* Acciones prioritarias */}
        <div className="bg-[#111118] rounded-2xl border border-white/5 overflow-hidden">
          <div className="px-5 py-4 border-b border-white/5">
            <h2 className="text-sm font-bold text-white">Prioridades Activas</h2>
            <p className="text-[10px] text-gray-600 mt-0.5">Generado por Moltbot</p>
          </div>
          <div className="p-3 space-y-2">
            {ACTIONS.map((action, i) => (
              <div key={i} className="p-3 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-all">
                <div className="flex items-start gap-2">
                  <span className="text-base flex-shrink-0">{TYPE_ICON[action.type]}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-300 text-[11px] leading-snug">{action.text}</p>
                    <span className={`inline-block mt-1.5 px-2 py-0.5 rounded text-[9px] font-bold border ${URGENCY_COLOR[action.urgency]}`}>
                      {action.urgency}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sistema score */}
      <div className="bg-[#111118] rounded-2xl border border-white/5 p-5">
        <h2 className="text-sm font-bold text-white mb-4">Score de Madurez del Ecosistema</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Documentación', val: 95, color: 'bg-emerald-500' },
            { label: 'Infraestructura', val: 45, color: 'bg-blue-500' },
            { label: 'Automatización', val: 15, color: 'bg-yellow-500' },
            { label: 'Agentes IA', val: 0, color: 'bg-red-500' },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-[11px] text-gray-500">{item.label}</span>
                <span className="text-[11px] font-bold text-white">{item.val}%</span>
              </div>
              <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                <div className={`h-full ${item.color} rounded-full transition-all`} style={{ width: `${item.val}%` }} />
              </div>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-gray-600 mt-4 font-mono">Score global: 3.5/10 — Próximo hito: Deploy web + primer cliente</p>
      </div>
    </div>
  );
}
