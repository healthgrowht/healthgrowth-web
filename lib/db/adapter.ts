/**
 * DB Adapter v1 — dual-read/dual-write bridge between JSON file store and managed DB.
 *
 * MODES:
 *   JSON_ONLY   — reads/writes JSON files only (current production default)
 *   DUAL        — writes both JSON + DB; reads DB with JSON fallback
 *   DB_ONLY     — reads/writes DB only (post-migration)
 *
 * Set via env: DB_ADAPTER_MODE=JSON_ONLY|DUAL|DB_ONLY
 * Default: JSON_ONLY (safe — no DB dependency at startup)
 */

import * as fs from 'fs/promises'
import * as path from 'path'

export type DataMode = 'REAL' | 'TEST' | 'DEMO'
export type AdapterMode = 'JSON_ONLY' | 'DUAL' | 'DB_ONLY'

export interface Lead {
  id: string
  type: string
  data_mode: DataMode
  source?: string
  canal?: string
  estado?: string
  nivel?: string
  score?: number
  nombre_contacto?: string
  nombre_negocio?: string
  email?: string
  telefono?: string
  rubro?: string
  ciudad?: string
  urgencia?: string
  mensaje?: string
  nota_operativa?: string
  created_at?: string
  updated_at?: string
  data_mode_reason?: string
  reclassified_reason?: string
  reclassified_at?: string
  created_by?: string
  [key: string]: unknown
}

const LEADS_DIR = process.env.LEADS_DIR ?? '/opt/carlos-os/data/crm/healthgrowth/leads'
const MODE: AdapterMode = (process.env.DB_ADAPTER_MODE as AdapterMode) ?? 'JSON_ONLY'

// ── JSON helpers ──────────────────────────────────────────────────────────────

async function readLeadFile(id: string): Promise<Lead | null> {
  try {
    const raw = await fs.readFile(path.join(LEADS_DIR, `${id}.json`), 'utf-8')
    return JSON.parse(raw) as Lead
  } catch {
    return null
  }
}

async function writeLeadFile(lead: Lead): Promise<void> {
  const file = path.join(LEADS_DIR, `${lead.id}.json`)
  await fs.writeFile(file, JSON.stringify(lead, null, 2), 'utf-8')
}

async function listLeadFiles(): Promise<Lead[]> {
  const files = await fs.readdir(LEADS_DIR)
  const leads: Lead[] = []
  for (const f of files) {
    if (!f.endsWith('.json') || !f.startsWith('lead_')) continue
    try {
      const raw = await fs.readFile(path.join(LEADS_DIR, f), 'utf-8')
      leads.push(JSON.parse(raw) as Lead)
    } catch {
      // skip corrupt file
    }
  }
  return leads
}

// ── DB helpers (stub — replace with actual pg client) ─────────────────────────

async function dbGetLead(_id: string): Promise<Lead | null> {
  // TODO: replace with: SELECT * FROM leads WHERE id = $1
  throw new Error('DB not connected — set DB_ADAPTER_MODE=JSON_ONLY')
}

async function dbUpsertLead(_lead: Lead): Promise<void> {
  // TODO: replace with: INSERT INTO leads (...) VALUES (...) ON CONFLICT (id) DO UPDATE SET ...
  throw new Error('DB not connected — set DB_ADAPTER_MODE=JSON_ONLY')
}

async function dbListLeads(_filter?: Partial<Lead>): Promise<Lead[]> {
  // TODO: replace with parameterized SELECT
  throw new Error('DB not connected — set DB_ADAPTER_MODE=JSON_ONLY')
}

// ── Public API ────────────────────────────────────────────────────────────────

export async function getLead(id: string): Promise<Lead | null> {
  if (MODE === 'JSON_ONLY') return readLeadFile(id)
  if (MODE === 'DB_ONLY') return dbGetLead(id)
  // DUAL: DB primary, JSON fallback
  try {
    const dbResult = await dbGetLead(id)
    if (dbResult) return dbResult
  } catch { /* fallthrough to JSON */ }
  return readLeadFile(id)
}

export async function saveLead(lead: Lead): Promise<void> {
  if (MODE === 'JSON_ONLY' || MODE === 'DUAL') {
    await writeLeadFile(lead)
  }
  if (MODE === 'DB_ONLY' || MODE === 'DUAL') {
    await dbUpsertLead(lead)
  }
}

export async function listLeads(filter?: { data_mode?: DataMode }): Promise<Lead[]> {
  let leads: Lead[]
  if (MODE === 'JSON_ONLY') {
    leads = await listLeadFiles()
  } else if (MODE === 'DB_ONLY') {
    leads = await dbListLeads(filter)
  } else {
    // DUAL: DB primary, JSON fallback
    try {
      leads = await dbListLeads(filter)
    } catch {
      leads = await listLeadFiles()
    }
  }
  if (filter?.data_mode) {
    return leads.filter(l => (l.data_mode ?? 'REAL') === filter.data_mode)
  }
  return leads
}

export function getAdapterMode(): AdapterMode {
  return MODE
}
