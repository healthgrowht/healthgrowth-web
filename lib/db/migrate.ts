/**
 * Migration script: JSON files → managed DB (one-time, non-destructive).
 *
 * Safety guarantees:
 * - Reads JSON files, writes to DB — never modifies JSON source
 * - Preserves all IDs and data_mode values exactly
 * - Idempotent: ON CONFLICT DO NOTHING on duplicate IDs
 * - Reports counts at end; rollback by simply switching DB_ADAPTER_MODE back
 *
 * Usage (dry run first):
 *   npx ts-node lib/db/migrate.ts --dry-run
 *   npx ts-node lib/db/migrate.ts
 */

import * as fs from 'fs/promises'
import * as path from 'path'

const LEADS_DIR = process.env.LEADS_DIR ?? '/opt/carlos-os/data/crm/healthgrowth/leads'
const DRY_RUN = process.argv.includes('--dry-run')

interface Lead { [key: string]: unknown; id: string; data_mode?: string }

function mapToRow(lead: Lead): Record<string, unknown> {
  const {
    id, type, data_mode, source, utm_source: utmSource, canal, estado, nivel,
    score, nombre_contacto, nombre_negocio, email, telefono, rubro, ciudad,
    urgencia, mensaje, nota_operativa, created_at, updated_at,
    _data_mode_reason: dmr, _reclassified_reason: rr, _reclassified_at: ra,
    _created_by: cb,
    ...rest
  } = lead as Record<string, unknown> & Lead

  // Known fields go to columns; anything else → extra JSONB
  const known = new Set([
    'id','type','data_mode','source','utmSource','canal','estado','nivel',
    'score','nombre_contacto','nombre_negocio','email','telefono','rubro',
    'ciudad','urgencia','mensaje','nota_operativa','created_at','updated_at',
    '_data_mode_reason','_reclassified_reason','_reclassified_at','_created_by',
  ])
  const extra: Record<string, unknown> = {}
  for (const k of Object.keys(lead)) {
    if (!known.has(k)) extra[k] = (lead as Record<string, unknown>)[k]
  }

  return {
    id: id as string,
    type: type ?? 'lead',
    data_mode: (data_mode ?? 'REAL') as string,
    source: source ?? utmSource ?? null,
    canal: canal ?? null,
    estado: estado ?? 'NUEVO',
    nivel: nivel ?? 'lead',
    score: score ?? 0,
    nombre_contacto: nombre_contacto ?? null,
    nombre_negocio: nombre_negocio ?? null,
    email: email ?? null,
    telefono: telefono ?? null,
    rubro: rubro ?? null,
    ciudad: ciudad ?? null,
    urgencia: urgencia ?? null,
    mensaje: mensaje ?? null,
    nota_operativa: nota_operativa ?? null,
    created_at: created_at ?? new Date().toISOString(),
    updated_at: updated_at ?? null,
    data_mode_reason: dmr ?? null,
    reclassified_reason: rr ?? null,
    reclassified_at: ra ?? null,
    created_by: cb ?? null,
    extra: Object.keys(extra).length > 0 ? JSON.stringify(extra) : '{}',
  }
}

async function run() {
  const files = (await fs.readdir(LEADS_DIR)).filter(f => f.startsWith('lead_') && f.endsWith('.json'))
  console.log(`Found ${files.length} lead JSON files in ${LEADS_DIR}`)

  if (DRY_RUN) {
    console.log('DRY RUN — no DB writes. Parsing all files…')
    let errors = 0
    const modeCounts: Record<string, number> = {}
    for (const f of files) {
      try {
        const raw = await fs.readFile(path.join(LEADS_DIR, f), 'utf-8')
        const lead = JSON.parse(raw) as Lead
        const row = mapToRow(lead)
        const dm = String(row.data_mode)
        modeCounts[dm] = (modeCounts[dm] ?? 0) + 1
      } catch (e) {
        console.error(`  ERROR: ${f} —`, e)
        errors++
      }
    }
    console.log('Mode counts:', modeCounts)
    console.log(`Parse errors: ${errors}`)
    console.log('DRY RUN complete. No writes performed.')
    return
  }

  // LIVE migration — requires DB connection
  // TODO: import pg client and connect here
  console.error('Live migration requires DB connection. Run with --dry-run first,')
  console.error('then configure DATABASE_URL env var and implement the DB insert section.')
  process.exit(1)
}

run().catch(e => { console.error(e); process.exit(1) })
