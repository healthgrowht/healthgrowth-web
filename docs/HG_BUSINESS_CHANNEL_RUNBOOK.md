# HEALTH GROWTH — HG BUSINESS CHANNEL RUNBOOK
# Versión: 1.0 | Fecha: 2026-09-06
# Canal de negocio HEALTH GROWTH — SEPARADO de Patitas Felices / Alicia

---

## AVISO CRÍTICO

Este documento describe el canal de comunicación **HEALTH GROWTH** (la empresa).
Es completamente separado del canal Patitas Felices (de Alicia).

| Canal | Para qué | Número | Estado |
|-------|---------|--------|--------|
| Patitas Felices (Alicia) | Clientes de Patitas | Número de Alicia (ending 3036) | Pre-WABA |
| **Health Growth** (Carlos/empresa) | Clientes de HG, prospectos de servicios | **POR DEFINIR** | ❌ NO CONFIGURADO |

---

## AUDITORÍA ACTUAL HG BUSINESS NUMBER

| COMPONENTE | ESTADO |
|-----------|--------|
| HG business phone number | ❌ NO DEFINIDO — `HG_PHONE_NUMBER_ID` está vacío en .env |
| WhatsApp Business Account (WABA) HG | ❌ NO REGISTRADO |
| Meta App HG | ❌ NO CREADA (la app de Patitas puede compartirse o crear una nueva) |
| Webhook HG | ✅ PREPARADO — `api.healthgrowth.cl/webhook` ya existe y enruta por `recipient_asset_id` |
| CRM mapping | ✅ PREPARADO — `data/crm/healthgrowth/` existe en carlos-os |
| Automated intake | ❌ SIN CONFIGURAR — `chimi_agent.js` existe pero no activado |
| `HG_IG_ACCOUNT_ID` | ❌ VACÍO |

**HG_BUSINESS_NUMBER_GATE = READY_FOR_EXTERNAL_SETUP**

(La infraestructura que recibe mensajes está lista. Lo que falta es el WABA y número HG.)

---

## ARQUITECTURA TARGET

```
INBOUND BUSINESS MESSAGE (cliente escribe a HG WhatsApp)
  ↓
Meta Cloud API
  ↓
POST api.healthgrowth.cl/webhook (HMAC verify)
  ↓
channel_event_pipeline.js
  → determineEcosystem(HG_PHONE_NUMBER_ID) → "healthgrowth"
  ↓
chimi_agent.js (equivalente de ROKITO para HG)
  ↓
[INTENT] CONSULTA / PRESUPUESTO / CONTACTO / INFO
  ↓
CRM: data/crm/healthgrowth/ (lead/contact record)
  ↓
RESPONSE / HUMAN HANDOFF
  → Si automatizable: WhatsApp reply via Cloud API
  → Si requiere Carlos: Telegram notification a Carlos
  ↓
FOLLOW-UP (n8n pipeline o manual)
```

---

## SEPARACIÓN DE NÚMEROS

```
MODELO RECOMENDADO:
  Número Patitas: registro separado en WABA Patitas (Alicia es dueña)
  Número HG: registro separado en WABA HG (Carlos es dueño)
  
  Ambos pueden estar en la misma Meta App (recomendado) o apps separadas.
  El routing en carlos-os distingue por recipient_asset_id (phone_number_id).
  
VARIABLES .env para HG (cuando se registre):
  HG_PHONE_NUMBER_ID=<phone_number_id del número HG>
  HG_WABA_ID=<WABA ID de HG>  (a agregar al .env si no existe)
  HG_IG_ACCOUNT_ID=<Instagram account ID HG>
```

---

## PASOS PARA ACTIVAR HG BUSINESS NUMBER

### PRE-REQUISITO: Tener un número dedicado para HG
```
Opciones:
A. Número nuevo (más limpio): +56 2 XXXX XXXX (fijo) o +56 9 XXXX XXXX (móvil)
   - No tiene historial de WA
   - Registro WABA más simple
   
B. Número existente sin WA Business App
   - Puede migrar a Cloud API directamente
   
C. Número existente con WA Business App de Carlos
   - Requiere migración (pierde historial en app)
   
RECOMENDADO: Número nuevo dedicado para HG
```

### Registro WABA HG:
```
1. Meta App (reutilizar "Health Growth - Patitas Felices" o crear "Health Growth")
2. Añadir segundo Phone Number en WhatsApp → API Setup
3. Ingresar número HG + verificar OTP
4. Crear System User token (puede reutilizar el de Patitas o crear uno nuevo)
5. Anotar HG_PHONE_NUMBER_ID
6. Añadir al .env.production:
   HG_PHONE_NUMBER_ID=<valor>
   (Si WABA diferente: HG_WABA_ID=<valor>)
7. Reiniciar carlos-os.service
8. Configurar chimi_agent.js con info HG (servicios, precios, etc.)
```

---

## CHIMI AGENT — ESTADO

El agente de HG (`src/ecosystems/healthgrowth/chimi_agent.js`) existe en el sistema.
Es el equivalente de ROKITO pero para Health Growth.

**Estado**: EXISTENTE PERO NO ACTIVADO

Para activar requiere:
1. `HG_PHONE_NUMBER_ID` configurado en .env
2. Business profile HG (`data/tenants/healthgrowth/business_profile.json`) completado
3. Intents definidos para servicios HG (diferente a Patitas)

---

## STANDBY CONFIGURATION

Mientras HG business number no esté registrado:

```
CHANNEL_STANDBY = CONFIG_PREPARED | READY_FOR_EXTERNAL_SETUP

Inbound lead capture ACTIVO: formulario healthgrowth.cl → /api/capture → CRM
WhatsApp HG: SIN CONFIGURAR (requiere número + WABA)
Instagram HG: SIN CONFIGURAR (HG_IG_ACCOUNT_ID vacío)
```

---

## GATE DE ESTADO

```
HG_BUSINESS_NUMBER_GATE:

  CONFIG_PREPARED            ← ✅ ACTUAL (infraestructura lista en carlos-os)
  READY_FOR_EXTERNAL_SETUP   ← ✅ ACTUAL (solo falta número + Meta registration)
  READY_FOR_CONTROLLED_E2E   ← ⏳ Pendiente registro WABA HG
  LIVE_E2E_PASS              ← ⏳ Pendiente
```

---

## FLUJO MANUAL EN STANDBY

Mientras WhatsApp HG no esté configurado:
```
Lead llega por web → CRM automático → Telegram notif a Carlos → Carlos responde manualmente
```

Este flujo ya funciona. El sistema no está roto, solo no tiene canal WA HG.

---

*Generado por POWER lane | Misión ALL-HAZARDS CONTINUITY | 2026-09-06*
