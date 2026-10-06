# PATCH: reminder_runner.js
# ID: PATCH-002
# STATUS: PREPARED — requiere autorización para deploy
# ARCHIVOS: src/scheduling/reminder_runner.js (NUEVO) + dashboard_server.js (1 línea)

## ROOT CAUSE
`reminder_scheduler.js::runDueReminders(notifyFn)` está implementado correctamente
pero NUNCA se llama en el codebase. No existe ningún cron/interval que lo invoque.
Resultado: los recordatorios se crean en `data/scheduling/reminders.json` pero
nunca se envían.

## DIAGNÓSTICO
```
grep -rn 'runDueReminders' /opt/carlos-os/src/ /opt/carlos-os/scripts/
→ SOLO aparece en reminder_scheduler.js (definición) y readiness_score (check de archivo)
→ NINGÚN caller existe
```

## RIESGO: BAJO
## RESTART_REQUIRED: SÍ
## DOWNTIME: ~2s (restart carlos-os.service)
## ROLLBACK: comentar la línea de start en dashboard_server.js + restart

---

## CAMBIO 1 — ARCHIVO NUEVO

`/opt/carlos-os/src/scheduling/reminder_runner.js`

Ver archivo preparado en: `scratchpad/reminder_runner.js`

---

## CAMBIO 2 — DASHBOARD_SERVER.JS (2 líneas)

Añadir ANTES de `server.listen(PORT, ...)`:

```js
// PATCH-002: reminder runner — ejecuta recordatorios pendientes cada 5 min
const reminderRunner = require('./src/scheduling/reminder_runner')
```

Añadir DENTRO del callback de `server.listen(PORT, '127.0.0.1', () => {`:

```js
  reminderRunner.start()
```

Resultado final (líneas ~5828-5848):
```js
// PATCH-002: reminder runner — ejecuta recordatorios pendientes cada 5 min
const reminderRunner = require('./src/scheduling/reminder_runner')

server.listen(PORT, '127.0.0.1', () => {
  reminderRunner.start()
  console.log(`\n${'='.repeat(62)}`)
  console.log('  CARLOS OS — DASHBOARD SERVER v9.6.0 (Auth activo)')
  // ... resto igual
})
```

---

## EFECTO

- `runDueReminders` se ejecuta 5s después del start y luego cada 5 minutos
- En sandbox mode: escribe draft en `output/whatsapp/outbox/` + notifica por Telegram
- Cuando WA esté activo: reemplazar `writeSandboxDraft` por envío real en el notifyFn
- Backward compatible: si no hay reminders pendientes, es no-op

---

## TEST UNITARIO

```js
// test manual en la VM:
node -e "
const { scheduleReminders, runDueReminders } = require('./src/scheduling/reminder_scheduler')
const appt = {
  id: 'test_001',
  fecha_preferida: '2026-09-01',
  hora_preferida: '09:00',
  data_mode: 'TEST'
}
scheduleReminders(appt)
runDueReminders(async (r) => console.log('REMINDER DUE:', r.type, r.label)).then(console.log)
"
```

## PASS CRITERIA
- Script no lanza excepción
- `result.processed >= 0`
- Archivos escritos en `output/whatsapp/outbox/reminder_*.json`
- Log `[reminder_runner] Started` aparece en `journalctl -u carlos-os -n 50`
