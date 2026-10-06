# PATCH-003 — /api/capture UTM + Email + Consent Attribution
# Clasificación: CARLOS_APPROVAL_REQUIRED (requiere restart de carlos-os.service)
# Riesgo: MÍNIMO — additive only, sin cambios a campos existentes
# Fecha: 2026-09-02 | Estado: PREPARADO — no deployado

---

## PROBLEMA

Frontend (DiagnosticForm.tsx) envía estos campos al backend:

```
utmSource, utmMedium, utmCampaign, utmContent, utmTerm
referrer, landing_page
email (separado de telefono)
consent_privacy: true
```

Backend actual (`/api/capture`): **NINGUNO de estos se almacena**.  
Todos son silenciosamente descartados.

## IMPACTO

| Gap | Consecuencia |
|-----|-------------|
| UTM no almacenado | No se puede saber qué canal/campaña generó el lead |
| email no almacenado | Solo se guarda telefono — sin contacto alternativo |
| consent_privacy descartado | **Ley 21.719**: el consentimiento se envía pero no hay registro |
| landing_page/referrer descartados | Sin datos de recorrido del visitante |

## CAMBIO PROPUESTO

**Archivo:** `/opt/carlos-os/scripts/dashboard_server.js`  
**Línea aprox:** 3835–3852 (bloque `createRecord` dentro de `/api/capture`)

### Antes:

```js
const { ok: captOk, record: captLead } = createRecord('healthgrowth/leads', {
  nombre_contacto: nombre,
  nombre_negocio:  negocio,
  rubro:           body.rubro || '',
  ciudad:          body.ciudad || '',
  telefono:        contacto,
  canal:           source,
  necesidad:       necesidad,
  estado:          'NUEVO',
  nivel:           'lead',
  source:          source,
  first_touch:     new Date().toISOString(),
  channel:         source,
  data_mode:       dataMode,
})
```

### Después:

```js
const email = String(body.email || '').trim().slice(0, 120)
const { ok: captOk, record: captLead } = createRecord('healthgrowth/leads', {
  nombre_contacto:  nombre,
  nombre_negocio:   negocio,
  rubro:            body.rubro || '',
  ciudad:           body.ciudad || '',
  telefono:         contacto,
  email:            email,
  canal:            source,
  necesidad:        necesidad,
  estado:           'NUEVO',
  nivel:            'lead',
  source:           source,
  first_touch:      new Date().toISOString(),
  channel:          source,
  data_mode:        dataMode,
  utm_source:       String(body.utmSource   || '').trim().slice(0, 80),
  utm_medium:       String(body.utmMedium   || '').trim().slice(0, 80),
  utm_campaign:     String(body.utmCampaign || '').trim().slice(0, 80),
  utm_content:      String(body.utmContent  || '').trim().slice(0, 80),
  utm_term:         String(body.utmTerm     || '').trim().slice(0, 80),
  referrer:         String(body.referrer    || '').trim().slice(0, 200),
  landing_page:     String(body.landing_page|| '').trim().slice(0, 200),
  consent_privacy:  body.consent_privacy === true,
  consent_ts:       new Date().toISOString(),
})
```

---

## PASOS DE DEPLOY (cuando Carlos autorice)

```bash
# 1. Backup
sudo cp /opt/carlos-os/scripts/dashboard_server.js \
        /opt/carlos-os/scripts/dashboard_server.js.bak_patch003

# 2. Aplicar cambio (edición manual o sed)
#    Buscar: "const { ok: captOk" dentro del bloque /api/capture
#    Reemplazar con el bloque "Después" de arriba

# 3. Syntax check (no levanta el servidor — solo verifica sintaxis)
node --check /opt/carlos-os/scripts/dashboard_server.js

# 4. Reiniciar servicio
sudo systemctl restart carlos-os.service
sudo systemctl status carlos-os.service

# 5. Smoke test
curl -X POST http://localhost:3000/api/capture \
  -H 'Content-Type: application/json' \
  -d '{
    "nombre": "TEST PATCH003",
    "negocio": "TEST_CO",
    "email": "test@healthgrowth.cl",
    "telefono": "+56900000000",
    "rubro": "diagnostico",
    "necesidad": "prueba patch",
    "source": "TEST_HARNESS",
    "timestamp": "2026-09-02T00:00:00Z",
    "utmSource": "google",
    "utmMedium": "cpc",
    "consent_privacy": true,
    "data_mode": "TEST"
  }'

# 6. Verificar JSON creado
ls -la /opt/carlos-os/data/crm/healthgrowth/leads/ | tail -1
cat /opt/carlos-os/data/crm/healthgrowth/leads/<LAST_FILE>.json | python3 -m json.tool
# Esperado: utm_source, email, consent_privacy presentes
```

## ROLLBACK

```bash
sudo cp /opt/carlos-os/scripts/dashboard_server.js.bak_patch003 \
        /opt/carlos-os/scripts/dashboard_server.js
sudo systemctl restart carlos-os.service
```

## VERIFICACIÓN LEGAL (post-deploy)

- `consent_privacy: true` almacenado → cumple exigencia de Ley 21.719
- `consent_ts` = timestamp del consentimiento → auditable
- Para ARCO+ (derecho de eliminación): filtrar leads por email y borrar archivos JSON

---

*PATCH-003 preparado por POWER lane | Autorización requerida: Carlos*
