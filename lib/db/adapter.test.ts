/**
 * Adapter tests — run against real JSON file store (no DB needed).
 * All tests use data_mode=TEST or DEMO leads only.
 *
 * Requires: DB_ADAPTER_MODE=JSON_ONLY (default)
 */

import { getLead, listLeads, saveLead, getAdapterMode } from './adapter'
import * as fs from 'fs/promises'
import * as path from 'path'
import * as os from 'os'

const LEADS_DIR = process.env.LEADS_DIR

async function withTempDir(fn: (dir: string) => Promise<void>) {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'adapter-test-'))
  const orig = process.env.LEADS_DIR
  process.env.LEADS_DIR = dir
  try {
    await fn(dir)
  } finally {
    process.env.LEADS_DIR = orig
    await fs.rm(dir, { recursive: true, force: true })
  }
}

async function runTests() {
  let passed = 0
  let failed = 0

  async function test(name: string, fn: () => Promise<void>) {
    try {
      await fn()
      console.log(`  ✓ ${name}`)
      passed++
    } catch (e) {
      console.error(`  ✗ ${name}:`, e)
      failed++
    }
  }

  console.log('=== Adapter tests (JSON_ONLY mode) ===')

  await test('mode is JSON_ONLY by default', async () => {
    const mode = getAdapterMode()
    if (mode !== 'JSON_ONLY') throw new Error(`Expected JSON_ONLY, got ${mode}`)
  })

  await test('getLead returns null for missing id', async () => {
    await withTempDir(async () => {
      const result = await getLead('lead_nonexistent')
      if (result !== null) throw new Error('Expected null')
    })
  })

  await test('saveLead + getLead round-trip (TEST mode)', async () => {
    await withTempDir(async (dir) => {
      const lead = {
        id: 'lead_test_roundtrip_001',
        type: 'lead',
        data_mode: 'TEST' as const,
        source: 'TEST_ADAPTER',
        nombre_contacto: 'Test Only',
        created_at: new Date().toISOString(),
      }
      await saveLead(lead)
      const saved = await getLead(lead.id)
      if (!saved) throw new Error('Lead not found after save')
      if (saved.data_mode !== 'TEST') throw new Error(`data_mode mismatch: ${saved.data_mode}`)
      if (saved.source !== 'TEST_ADAPTER') throw new Error('source mismatch')
    })
  })

  await test('listLeads returns all leads', async () => {
    await withTempDir(async () => {
      for (let i = 0; i < 3; i++) {
        await saveLead({ id: `lead_list_test_${i}`, type: 'lead', data_mode: 'TEST' as const })
      }
      const leads = await listLeads()
      if (leads.length !== 3) throw new Error(`Expected 3 leads, got ${leads.length}`)
    })
  })

  await test('listLeads filter by data_mode', async () => {
    await withTempDir(async () => {
      await saveLead({ id: 'lead_real_1', type: 'lead', data_mode: 'REAL' as const })
      await saveLead({ id: 'lead_test_1', type: 'lead', data_mode: 'TEST' as const })
      await saveLead({ id: 'lead_demo_1', type: 'lead', data_mode: 'DEMO' as const })
      const reals = await listLeads({ data_mode: 'REAL' })
      const tests = await listLeads({ data_mode: 'TEST' })
      if (reals.length !== 1) throw new Error(`Expected 1 REAL, got ${reals.length}`)
      if (tests.length !== 1) throw new Error(`Expected 1 TEST, got ${tests.length}`)
    })
  })

  await test('saveLead preserves unknown fields in extra', async () => {
    await withTempDir(async () => {
      const lead = {
        id: 'lead_extra_test_001',
        type: 'lead',
        data_mode: 'TEST' as const,
        some_future_field: 'preserved',
      }
      await saveLead(lead)
      const saved = await getLead(lead.id) as Record<string, unknown>
      if (saved?.['some_future_field'] !== 'preserved') {
        throw new Error('extra field lost in round-trip')
      }
    })
  })

  await test('getLead does not leak REAL data when LEADS_DIR points to temp', async () => {
    await withTempDir(async () => {
      // Temp dir has no real leads → no REAL data accessible
      const leads = await listLeads({ data_mode: 'REAL' })
      if (leads.length !== 0) throw new Error(`Expected 0 REAL leads in temp dir, got ${leads.length}`)
    })
  })

  console.log(`\nResults: ${passed} passed, ${failed} failed`)
  if (failed > 0) process.exit(1)
}

runTests().catch(e => { console.error(e); process.exit(1) })
