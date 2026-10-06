-- Managed DB Schema v1 — Health Growth OS
-- Preserves all existing IDs and data_mode values from JSON store
-- Target: PostgreSQL / Cloud SQL (also compatible with SQLite for local dev)

-- ============================================================
-- LEADS
-- ============================================================
CREATE TABLE IF NOT EXISTS leads (
  -- Identity
  id              TEXT PRIMARY KEY,          -- e.g. "lead_1785802691090_488f3"
  type            TEXT NOT NULL DEFAULT 'lead',

  -- Data classification (NEVER loses existing value)
  data_mode       TEXT NOT NULL DEFAULT 'REAL'
                  CHECK (data_mode IN ('REAL','TEST','DEMO')),

  -- Core fields (flexible — not all leads have all fields)
  source          TEXT,                      -- 'hg_whatsapp','OUTBOUND','WEB','QA_FINAL',…
  utm_source      TEXT,
  canal           TEXT,
  estado          TEXT DEFAULT 'NUEVO',
  nivel           TEXT DEFAULT 'lead',
  score           INTEGER DEFAULT 0,

  -- Contact
  nombre_contacto TEXT,
  nombre_negocio  TEXT,
  email           TEXT,
  telefono        TEXT,
  rubro           TEXT,
  ciudad          TEXT,
  urgencia        TEXT,
  mensaje         TEXT,
  nota_operativa  TEXT,

  -- Metadata
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at      TIMESTAMPTZ,

  -- Audit trail (preserves reclassification history from JSON)
  data_mode_reason     TEXT,   -- was _data_mode_reason
  reclassified_reason  TEXT,   -- was _reclassified_reason
  reclassified_at      TIMESTAMPTZ,
  created_by           TEXT,   -- was _created_by

  -- Raw overflow — any unknown fields stored here to avoid data loss
  extra            JSONB DEFAULT '{}'
);

CREATE INDEX IF NOT EXISTS leads_data_mode_idx  ON leads (data_mode);
CREATE INDEX IF NOT EXISTS leads_source_idx     ON leads (source);
CREATE INDEX IF NOT EXISTS leads_estado_idx     ON leads (estado);
CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at DESC);

-- ============================================================
-- PATITAS — TUTORS
-- ============================================================
CREATE TABLE IF NOT EXISTS patitas_tutors (
  id          TEXT PRIMARY KEY,
  nombre      TEXT,
  telefono    TEXT,
  email       TEXT,
  comuna      TEXT,
  extra       JSONB DEFAULT '{}',
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at  TIMESTAMPTZ
);

-- ============================================================
-- PATITAS — MASCOTAS
-- ============================================================
CREATE TABLE IF NOT EXISTS patitas_mascotas (
  id          TEXT PRIMARY KEY,
  tutor_id    TEXT REFERENCES patitas_tutors(id),
  nombre      TEXT,
  especie     TEXT,
  raza        TEXT,
  extra       JSONB DEFAULT '{}',
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at  TIMESTAMPTZ
);

-- ============================================================
-- PATITAS — CITAS
-- ============================================================
CREATE TABLE IF NOT EXISTS patitas_citas (
  id          TEXT PRIMARY KEY,
  tutor_id    TEXT REFERENCES patitas_tutors(id),
  mascota_id  TEXT REFERENCES patitas_mascotas(id),
  servicio    TEXT,
  fecha       TIMESTAMPTZ,
  estado      TEXT DEFAULT 'PENDIENTE',
  extra       JSONB DEFAULT '{}',
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at  TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS citas_fecha_idx   ON patitas_citas (fecha DESC);
CREATE INDEX IF NOT EXISTS citas_estado_idx  ON patitas_citas (estado);

-- ============================================================
-- SCHEMA VERSION
-- ============================================================
CREATE TABLE IF NOT EXISTS schema_migrations (
  version     TEXT PRIMARY KEY,
  applied_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);
INSERT INTO schema_migrations (version) VALUES ('001_initial') ON CONFLICT DO NOTHING;
