# HEALTH GROWTH — INVESTIGATIVE RESEARCH AGENT SPEC
# Versión: 1.0 | Fecha: 2026-09-06
# AGENTE DE INVESTIGACIÓN LEGAL / HERENCIAS / BIENES NO RECLAMADOS

---

## PROPÓSITO Y ALCANCE

Este agente es un sistema de **investigación y evidencia** basado en fuentes públicas oficiales.

**ES**: Un motor de investigación que usa registros públicos para construir evidencia.
**NO ES**: Un bot de impersonación, presentación de claims o representación legal.

### Especializaciones iniciales:
- Sucesiones / herencias
- Bienes no reclamados (unclaimed property / unclaimed money)
- Fondos dormidos
- Activos legalmente recuperables
- Procesos de probate / sucesión

### Usos futuros:
- Otros casos de investigación de registros públicos
- Debida diligencia empresarial
- Research corporativo / inmobiliario

---

## LÍMITES LEGALES Y ÉTICOS (NON-NEGOTIABLE)

### USAR:
```
✅ Registros públicos oficiales
✅ Registros judiciales/tribunales (acceso público)
✅ Bases de datos gubernamentales de bienes no reclamados
✅ Registros de propiedad públicos
✅ Registros corporativos públicos
✅ Fuentes de probate/sucesión accesibles públicamente
✅ Motores de búsqueda y fuentes reputadas secundarias
```

### NUNCA USAR / NUNCA HACER:
```
❌ Impersonar herederos, abogados u oficiales
❌ Presentar claims sin autorización explícita del cliente/heredero real
❌ Acceder a cuentas privadas o sistemas sin autenticación pública
❌ Usar bases de datos obtenidas ilegalmente o filtradas
❌ Engañar a funcionarios o registradores
❌ Fabricar parentesco o documentos
❌ Contactar partes terceras (herederos, administradores) sin autorización
❌ Actuar como representación legal no autorizada
```

---

## JERARQUÍA DE EVIDENCIA

```
NIVEL 1 — OFFICIAL GOVERNMENT (máxima confianza)
  Ejemplos: TESORONET Chile, Gobierno Federal unclaimed property USA,
            Registro Civil, SBIF, CMF, SII registros públicos

NIVEL 2 — COURT / REGISTRY
  Ejemplos: Poder Judicial Chile, USPS, registros de sucesión de tribunales

NIVEL 3 — PRIMARY DOCUMENT
  Ejemplos: Certificado de defunción, escritura notarial, testamento público

NIVEL 4 — INSTITUTIONAL SOURCE
  Ejemplos: Boletín Oficial, publicación registral oficial, institución bancaria

NIVEL 5 — REPUTABLE SECONDARY SOURCE
  Ejemplos: Nota de prensa de medio reconocido, publicación académica

NIVEL 6 — LEAD ONLY (no usar como evidencia)
  Ejemplos: Rumor, redes sociales, fuente anónima
```

### Formato de hallazgo (cada finding):
```
FACT: [enunciado del hecho]
SOURCE: [nombre de la fuente]
URL/REFERENCE: [URL o referencia exacta]
DATE: [fecha del documento/consulta]
JURISDICTION: [país/región/tribunal]
CONFIDENCE: [HIGH / MEDIUM / LOW / LEAD_ONLY]
EVIDENCE_LEVEL: [1-6]
```

---

## MODELO DE CASO

```json
{
  "case_id": "INV-2026-001",
  "status": "ACTIVE | CLOSED | PENDING_HUMAN_REVIEW",
  "subject": {
    "name": "Nombre de la persona o entidad investigada",
    "aliases": [],
    "deceased_date": "YYYY-MM-DD",
    "birth_date": "YYYY-MM-DD",
    "last_known_jurisdiction": "Chile / USA / etc"
  },
  "jurisdiction": ["CL", "US-CA"],
  "research_question": "¿Existen bienes no reclamados a nombre de X en jurisdicción Y?",
  "known_relations": [
    {"name": "...", "relation": "hijo/cónyuge/etc", "status": "VERIFIED | UNVERIFIED"}
  ],
  "identifiers_where_lawful": {
    "note": "Solo identificadores disponibles en registros públicos"
  },
  "official_sources_checked": [
    {"source": "TESORONET", "date": "2026-09-06", "result": "NOT_FOUND | FOUND | ERROR"}
  ],
  "assets_found": [],
  "estimated_relevance": "HIGH | MEDIUM | LOW | UNKNOWN",
  "claimant_beneficiary_issue": "...",
  "legal_process": "...",
  "documents_required": [],
  "deadlines": [
    {"description": "Prescripción herencia Chile", "date": "...", "jurisdiction": "CL"}
  ],
  "evidence": [],
  "confidence": "POSSIBLE_MATCH | PROBABLE_MATCH | VERIFIED_MATCH",
  "next_action": "...",
  "human_approval_required": true,
  "approved_by": null,
  "approved_at": null
}
```

---

## DISTINCIÓN DE MATCH

```
POSSIBLE_MATCH:
  - Mismo nombre (puede coincidir con muchas personas)
  - Sin verificación de identidad adicional
  - ACCIÓN: Requiere más investigación antes de comunicar

PROBABLE_MATCH:
  - Nombre + datos adicionales correlacionados (fecha de nacimiento, ciudad, etc.)
  - Fuente oficial secundaria confirma
  - ACCIÓN: Documentar, presentar a human review

VERIFIED_MATCH:
  - Confirmado por documento oficial primario
  - Identidad corroborada por múltiples fuentes independientes
  - ACCIÓN: Solo entonces proceder a siguiente paso con autorización humana
  
NUNCA: Saltar de same_name → verified_entitlement sin pasos intermedios
```

---

## WORKFLOW DE FONDOS NO RECLAMADOS

```
STEP 1: SUBJECT / ESTATE
  Input: nombre completo, apellidos, última residencia conocida, fecha aprox. fallecimiento

STEP 2: JURISDICTION
  Determinar jurisdicciones relevantes:
    - Chile: TESORONET (tesoronet.cl) — Tesorería General de la República
    - USA: missingmoney.com (oficial NAUPA) + unclaimed.org por estado
    - Argentina: Banco Central (depósitos inactivos)
    - Otros: investigar base de datos oficial por país

STEP 3: OFFICIAL DATABASES
  Para cada jurisdicción:
    - Buscar por nombre completo
    - Buscar por variantes de nombre
    - Registrar resultado (FOUND / NOT_FOUND / NO_SEARCH_AVAILABLE)
    - Documentar URL y fecha

STEP 4: CANDIDATE MATCH
  Si FOUND: registrar como POSSIBLE_MATCH
  Documentar todos los campos del hallazgo (monto si visible, tipo de fondo, origen)

STEP 5: IDENTITY MATCH
  Correlacionar con datos conocidos del sujeto:
    - Dirección registrada
    - RUT/SSN/ID donde sea público
    - Fecha de nacimiento si coincide con registros
  Escalar confidence: POSSIBLE → PROBABLE si datos adicionales coinciden

STEP 6: ESTATE / BENEFICIARY ANALYSIS
  - ¿Existe testamento conocido? ¿Es público?
  - ¿Quiénes son los herederos legítimos según ley local?
  - ¿Hay administrador/executor nombrado en registro?
  - ¿Hay otros claims previos registrados?

STEP 7: DOCUMENT REQUIREMENTS
  Por jurisdicción, listar documentos requeridos para reclamar:
    Chile típico: Certificado de defunción + posesión efectiva + cédula herederos
    USA típico: Death certificate + proof of heirship + claim form

STEP 8: RECOVERY PATH
  Documentar el proceso oficial de reclamo:
    - Organismo receptor del claim
    - Formulario oficial
    - Plazo de resolución típico
    - Costo (si aplica)
  
  → HUMAN_APPROVAL_GATE: presentar reporte completo, esperar autorización
  → NO ENVIAR CLAIM ni CONTACTAR terceros sin aprobación explícita
```

---

## MÓDULO HERENCIA / SUCESIÓN

Para casos de investigación de herencia:

```
ANALIZAR:
  ☐ Persona fallecida: nombre, jurisdicción, fecha
  ☐ Estado de sucesión: ¿hay posesión efectiva otorgada? (Chile: Poder Judicial)
  ☐ Herederos conocidos: ¿quiénes son, están todos incluidos?
  ☐ Activos identificados: propiedades (Conservador de Bienes Raíces), vehículos (Registro Civil), cuentas (bancario no público sin acceso)
  ☐ Estado testamentario: ¿hay testamento en registro público?
  ☐ Administrador/ejecutor: ¿nombrado en tribunal?
  ☐ Distribuciones no reclamadas: herederos que no han retirado su parte
  ☐ Certificados requeridos: CBR, Civil, Judicial, SII

FUENTES CHILE:
  - Poder Judicial (pjud.cl): causas de sucesión, posesión efectiva
  - Conservador de Bienes Raíces local: propiedades
  - Registro Civil (srcei.cl): nacimientos, defunciones, matrimonios
  - Notarías: testamentos (no hay registro central público en CL)
  - TESORONET (tesoronet.cl): fondos no reclamados
  - SII: bienes raíces, RUT (solo público parcialmente)

NOTA LEGAL: La ley de sucesión varía por país y región.
Verificar ley aplicable antes de cualquier recomendación.
NO proporcionar representación legal no autorizada.
```

---

## FUENTES OFICIALES — REGISTRO

### Chile:
| FUENTE | URL | TIPO | GRATUITO |
|--------|-----|------|---------|
| TESORONET (fondos no reclamados) | tesoronet.cl | Gov | ✅ |
| Poder Judicial (causas) | pjud.cl | Court | ✅ (limitado) |
| Registro Civil | srcei.cl | Gov | ✅ |
| Conservador de Bienes Raíces | Ver local por región | Registry | ✅ (consulta) |
| Notaría (testamentos) | No registro central | Notarial | Requiere búsqueda |
| SII | sii.cl | Gov | ✅ (parcial) |
| CMF (bancario) | cmfchile.cl | Gov | ✅ |

### USA:
| FUENTE | URL | TIPO | GRATUITO |
|--------|-----|------|---------|
| MissingMoney (NAUPA) | missingmoney.com | Official multi-state | ✅ |
| Unclaimed.org | unclaimed.org | NAUPA aggregator | ✅ |
| USA Gov unclaimed | usa.gov/unclaimed-money | Gov portal | ✅ |
| FDIC | fdic.gov | Gov (bank failures) | ✅ |
| PBGC (pensions) | pbgc.gov | Gov | ✅ |
| IRS unclaimed refunds | irs.gov | Gov | ✅ |
| State-specific: CA | sco.ca.gov/upd | State gov | ✅ |
| State-specific: NY | osc.state.ny.us | State gov | ✅ |
| Federal court PACER | pacer.gov | Court | $$ (por página) |

### International (verificar caso a caso):
- Argentina: bcra.gob.ar (depósitos inactivos)
- España: Banco de España + Catastro
- UK: gov.uk/unclaimed-estates, probate.service.gov.uk

---

## ARQUITECTURA DEL SISTEMA (MODULAR)

```
research-agent/
├── core/
│   ├── research_engine.js      ← Orquestador principal
│   ├── evidence_store.js       ← Almacena y recupera hallazgos
│   └── human_approval_gate.js  ← Requiere OK explícito antes de acción
├── modules/
│   ├── jurisdiction/
│   │   ├── chile.js            ← Fuentes y procesos Chile
│   │   ├── usa.js              ← Fuentes y procesos USA
│   │   └── template.js         ← Para nuevas jurisdicciones
│   ├── unclaimed_funds.js      ← Workflow bienes no reclamados
│   └── succession.js           ← Workflow herencia/sucesión
├── sources/
│   ├── source_registry.json    ← Catálogo de fuentes oficiales
│   └── scrapers/ (si aplica)   ← Solo fuentes con robots.txt permisivo
├── cases/
│   └── [case_id]/
│       ├── case.json           ← Modelo de caso
│       └── evidence/           ← Hallazgos documentados
└── reports/
    └── [case_id]_report.md     ← Reporte final estructurado
```

---

## FORMATO DE REPORTE POR CASO

```markdown
# CASO [case_id] — REPORTE DE INVESTIGACIÓN
Fecha: YYYY-MM-DD | Analista: Health Growth Research Agent

## EXECUTIVE SUMMARY
[2-3 oraciones: qué se investigó, hallazgo principal, siguiente paso]

## VERIFIED FACTS
[Solo hechos confirmados por fuentes Nivel 1-4]

## POSSIBLE LEADS
[Hallazgos que requieren más investigación]

## SOURCES CHECKED
| Fuente | Fecha | Resultado |
|--------|-------|-----------|

## SOURCES NOT ACCESSIBLE
[Fuentes que no se pudieron consultar y por qué]

## POTENTIAL ASSETS / FUNDS
[Solo si hay PROBABLE_MATCH o mejor — con disclaimer "no verificado"]

## ENTITLEMENT NOT YET PROVEN
[Qué falta para establecer derecho]

## DOCUMENTS NEEDED
[Lista de documentos requeridos para proceder]

## LEGAL / ADMINISTRATIVE ROUTE
[Proceso oficial a seguir — con disclaimer: no es asesoría legal]

## RISK / SCAM FLAGS
[Señales de alerta si aplica]

## NEXT SAFE ACTION
[Una acción concreta, que no requiere autorización para ejecutar, a cargo de humano]

---
HUMAN_APPROVAL_REQUIRED para cualquier acción posterior.
Este reporte es investigación, no asesoría legal.
```

---

## DEFENSA ANTI-ESTAFA

El agente debe identificar y reportar:

```
🚩 RED FLAGS:
  - Cobro de honorarios anticipados para "recuperar" fondos
  - Sitios web no gubernamentales que piden datos de identidad
  - Emails con "herencia de extranjero" no solicitada
  - Solicitudes de documentos de identidad por canales no oficiales
  - Demandas de pago en crypto para "desbloquear" fondos
  - Contactos que dicen ser "abogados" sin verificación oficial
  - Promesas de fondos a cambio de porcentaje anticipado

PRINCIPIO: El proceso oficial es siempre gratuito para consulta.
Los organismos gubernamentales nunca cobran por verificar si tienes fondos.
```

---

## HUMAN APPROVAL GATE

```
ANTES de cualquiera de estas acciones, se requiere aprobación explícita de Carlos:
  - Presentar un claim oficial
  - Contactar un administrador de sucesión
  - Comunicar a un heredero sobre bienes encontrados
  - Contratar abogado o representante
  - Firmar cualquier documento
  - Pagar cualquier honorario

EL AGENTE PRODUCE:
  → Reporte de investigación
  → Lista de acciones disponibles
  → Riesgos identificados
  → Requiere: "CARLOS_APPROVES: [acción específica]" para proceder

EL AGENTE NUNCA ACTÚA SIN APROBACIÓN EXPLÍCITA.
```

---

## ESTADO DEL AGENTE

```
INVESTIGATIVE_AGENT_STATUS = READY_FOR_CASE

Para iniciar un caso:
1. Crear archivo cases/[case_id]/case.json con datos básicos
2. Definir research_question
3. Agent ejecuta fuentes oficiales según jurisdicción
4. Agent produce reporte estructurado
5. Human review → aprobación → siguiente acción

MODO: STANDBY — esperando primer caso
```

---

*Generado por POWER lane | Misión ALL-HAZARDS CONTINUITY | 2026-09-06*
*Este agente opera bajo principios de legalidad, privacidad y ética.*
*No es sustituto de asesoría legal profesional.*
