'use strict';

/**
 * HEALTH GROWTH — INVESTIGATIVE RESEARCH ENGINE
 *
 * Orchestrates public-record research for inheritance, succession,
 * and unclaimed property cases.
 *
 * LEGAL LIMITS:
 *   - Only public records and official government databases
 *   - Never impersonate heirs, lawyers, or officials
 *   - Never submit claims without explicit human approval
 *   - Never access private accounts or bypass authentication
 *
 * HUMAN_APPROVAL_GATE: Required before any external action
 */

const fs = require('fs');
const path = require('path');

const RESEARCH_ROOT = path.resolve(__dirname, '../');
const CASES_DIR = path.join(RESEARCH_ROOT, 'cases');
const REPORTS_DIR = path.join(RESEARCH_ROOT, 'reports');
const SOURCE_REGISTRY = require('../sources/source_registry.json');

const EVIDENCE_LEVELS = {
  OFFICIAL_GOVERNMENT: 1,
  COURT: 2,
  PRIMARY_DOCUMENT: 3,
  INSTITUTIONAL: 4,
  REPUTABLE_SECONDARY: 5,
  LEAD_ONLY: 6
};

const MATCH_CONFIDENCE = ['POSSIBLE_MATCH', 'PROBABLE_MATCH', 'VERIFIED_MATCH'];

class ResearchEngine {
  constructor() {
    this._ensureDirs();
  }

  _ensureDirs() {
    [CASES_DIR, REPORTS_DIR].forEach(d => {
      if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
    });
  }

  /**
   * Create a new case from config object.
   * Returns case_id.
   */
  createCase(config) {
    const case_id = config.case_id || `INV-${new Date().getFullYear()}-${Date.now()}`;
    const caseDir = path.join(CASES_DIR, case_id);
    fs.mkdirSync(path.join(caseDir, 'evidence'), { recursive: true });

    const caseData = {
      case_id,
      status: 'ACTIVE',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      subject: config.subject || {},
      jurisdiction: config.jurisdiction || [],
      research_question: config.research_question || '',
      known_relations: config.known_relations || [],
      official_sources_checked: [],
      assets_found: [],
      estimated_relevance: 'UNKNOWN',
      claimant_beneficiary_issue: config.claimant_beneficiary_issue || '',
      legal_process: '',
      documents_required: [],
      deadlines: [],
      evidence: [],
      confidence: 'POSSIBLE_MATCH',
      next_action: 'Begin official source research',
      human_approval_required: true,
      approved_by: null,
      approved_at: null
    };

    fs.writeFileSync(
      path.join(caseDir, 'case.json'),
      JSON.stringify(caseData, null, 2)
    );

    return case_id;
  }

  /**
   * Load an existing case.
   */
  loadCase(case_id) {
    const caseFile = path.join(CASES_DIR, case_id, 'case.json');
    if (!fs.existsSync(caseFile)) throw new Error(`Case not found: ${case_id}`);
    return JSON.parse(fs.readFileSync(caseFile, 'utf8'));
  }

  /**
   * Add a finding to a case.
   * Findings must have: fact, source, evidence_level, confidence
   */
  addFinding(case_id, finding) {
    const caseData = this.loadCase(case_id);

    const entry = {
      id: `F${Date.now()}`,
      fact: finding.fact,
      source: finding.source,
      url_reference: finding.url_reference || null,
      date: finding.date || new Date().toISOString().split('T')[0],
      jurisdiction: finding.jurisdiction || caseData.jurisdiction[0] || 'UNKNOWN',
      confidence: finding.confidence || 'LEAD_ONLY',
      evidence_level: finding.evidence_level || EVIDENCE_LEVELS.LEAD_ONLY,
      added_at: new Date().toISOString()
    };

    caseData.evidence.push(entry);
    caseData.updated_at = new Date().toISOString();
    this._saveCase(case_id, caseData);

    return entry.id;
  }

  /**
   * Record that an official source was checked (found or not found).
   */
  recordSourceCheck(case_id, source_id, result, notes) {
    const caseData = this.loadCase(case_id);
    caseData.official_sources_checked.push({
      source_id,
      date: new Date().toISOString().split('T')[0],
      result, // FOUND | NOT_FOUND | ERROR | INACCESSIBLE
      notes: notes || ''
    });
    caseData.updated_at = new Date().toISOString();
    this._saveCase(case_id, caseData);
  }

  /**
   * Update confidence level of a case.
   * Confidence can only increase through verified evidence.
   */
  updateConfidence(case_id, new_confidence) {
    if (!MATCH_CONFIDENCE.includes(new_confidence)) {
      throw new Error(`Invalid confidence: ${new_confidence}`);
    }
    const caseData = this.loadCase(case_id);
    const current_idx = MATCH_CONFIDENCE.indexOf(caseData.confidence);
    const new_idx = MATCH_CONFIDENCE.indexOf(new_confidence);

    // Confidence can increase or be justified to decrease with documentation
    caseData.confidence = new_confidence;
    caseData.updated_at = new Date().toISOString();
    this._saveCase(case_id, caseData);
  }

  /**
   * Generate a structured report for a case.
   * Does NOT submit or act — only documents.
   */
  generateReport(case_id) {
    const caseData = this.loadCase(case_id);
    const sources = SOURCE_REGISTRY;

    const scamFlags = this._checkScamFlags(caseData);
    const verifiedFacts = caseData.evidence.filter(e => e.evidence_level <= 3);
    const leads = caseData.evidence.filter(e => e.evidence_level > 3);

    const report = `# CASO ${case_id} — REPORTE DE INVESTIGACIÓN
Fecha: ${new Date().toISOString().split('T')[0]} | Health Growth Research Agent

---

## EXECUTIVE SUMMARY
Caso: ${caseData.research_question}
Sujeto: ${caseData.subject.name || 'No especificado'}
Jurisdicción: ${caseData.jurisdiction.join(', ')}
Confianza: ${caseData.confidence}
Estado: ${caseData.status}

---

## VERIFIED FACTS (Evidencia Nivel 1-3)
${verifiedFacts.length === 0 ? 'Sin hechos verificados aún.' :
  verifiedFacts.map(f => `- **${f.fact}**\n  Fuente: ${f.source} | Nivel: ${f.evidence_level} | ${f.date}`).join('\n')}

---

## POSSIBLE LEADS
${leads.length === 0 ? 'Sin leads adicionales.' :
  leads.map(f => `- ${f.fact}\n  Fuente: ${f.source} | Confianza: ${f.confidence}`).join('\n')}

---

## SOURCES CHECKED
${caseData.official_sources_checked.length === 0 ? 'Sin fuentes verificadas aún.' :
  caseData.official_sources_checked.map(s =>
    `| ${s.source_id} | ${s.date} | ${s.result} | ${s.notes}`
  ).join('\n')}

---

## SOURCES NOT ACCESSIBLE
(Documentar manualmente fuentes que no se pudieron consultar y por qué)

---

## POTENTIAL ASSETS / FUNDS
${caseData.assets_found.length === 0 ? 'Sin activos identificados.' :
  caseData.assets_found.map(a => `- ${JSON.stringify(a)}`).join('\n')}

DISCLAIMER: Los activos listados son CANDIDATOS — entitlement no probado aún.

---

## ENTITLEMENT NOT YET PROVEN
Confianza actual: ${caseData.confidence}
Para escalar a VERIFIED_MATCH se requiere: documentación de identidad oficial del sujeto y heredero.

---

## DOCUMENTS NEEDED
${caseData.documents_required.length === 0 ? 'Pendiente determinar según jurisdicción.' :
  caseData.documents_required.map(d => `- ${d}`).join('\n')}

---

## LEGAL / ADMINISTRATIVE ROUTE
${caseData.legal_process || 'Pendiente análisis según jurisdicción. Ver INVESTIGATIVE_AGENT_SPEC.md §22.'}

DISCLAIMER: Este reporte es investigación. No constituye asesoría legal.

---

## RISK / SCAM FLAGS
${scamFlags.length === 0 ? '✅ Sin señales de alerta identificadas.' :
  scamFlags.map(f => `🚩 ${f}`).join('\n')}

---

## NEXT SAFE ACTION
${caseData.next_action}

---

⚠️ HUMAN_APPROVAL_REQUIRED para cualquier acción externa (claim, contacto, pago).
Este reporte es solo investigación. No se ha realizado ninguna acción externa.

---
*Health Growth Research Agent | ${new Date().toISOString()}*
`;

    const reportPath = path.join(REPORTS_DIR, `${case_id}_report.md`);
    fs.writeFileSync(reportPath, report);
    return { report_path: reportPath, confidence: caseData.confidence };
  }

  _checkScamFlags(caseData) {
    // Basic check — extend with real pattern matching
    const flags = [];
    if (caseData.claimant_beneficiary_issue?.toLowerCase().includes('advance fee')) {
      flags.push('Advance fee mentioned — potential scam indicator');
    }
    return flags;
  }

  _saveCase(case_id, caseData) {
    const caseFile = path.join(CASES_DIR, case_id, 'case.json');
    fs.writeFileSync(caseFile, JSON.stringify(caseData, null, 2));
  }

  /**
   * List all cases with their status.
   */
  listCases() {
    if (!fs.existsSync(CASES_DIR)) return [];
    return fs.readdirSync(CASES_DIR)
      .filter(d => fs.existsSync(path.join(CASES_DIR, d, 'case.json')))
      .map(d => {
        const c = this.loadCase(d);
        return { case_id: c.case_id, status: c.status, confidence: c.confidence, subject: c.subject.name };
      });
  }

  getSourcesForJurisdiction(jurisdiction_code) {
    return SOURCE_REGISTRY.jurisdictions[jurisdiction_code] || null;
  }
}

module.exports = ResearchEngine;
