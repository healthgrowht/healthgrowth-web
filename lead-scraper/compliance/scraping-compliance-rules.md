# Reglas de Compliance — HG-Lead Scraper
Health Growth SpA | Actualizado: 2026-06-23

---

## Principio General

El scraping de Health Growth busca construir listas de prospectos usando SOLO información comercial pública disponible en Google Maps, directorios públicos y sitios web comerciales. NO es espionaje, NO es spam, NO es extracción masiva agresiva.

**Objetivo**: encontrar negocios con necesidades digitales visibles y ofrecerles ayuda real.

---

## Reglas Obligatorias

### HACER

- [x] Respetar `robots.txt` de cada sitio
- [x] Usar rate limiting (mínimo 2-5 segundos entre requests)
- [x] Extraer solo información comercial pública (nombre, teléfono, dirección, web si existe)
- [x] Usar fuentes primarias oficiales (Google Maps, sitio oficial, Instagram público)
- [x] Identificarse claramente al contactar ("Soy Carlos de Health Growth")
- [x] Explicar el motivo del contacto en forma simple
- [x] Ofrecer siempre la opción de no recibir más mensajes
- [x] Detener el proceso si un sitio bloquea o prohíbe explícitamente
- [x] Priorizar fuentes de datos públicamente disponibles
- [x] Revisar que la información es actual antes de contactar
- [x] Registrar la fuente de cada lead en el CRM

### NO HACER

- [ ] NO extraer datos personales privados (domicilios personales, RUT, correos privados)
- [ ] NO saltarse CAPTCHAs con técnicas de evasión
- [ ] NO hacer requests masivos sin espera (no more than 1 req/seg sin pausa)
- [ ] NO enviar mensajes automáticos sin revisión humana previa
- [ ] NO usar información extraída para contacto no solicitado masivo
- [ ] NO ignorar un "NO" o una solicitud de no contacto
- [ ] NO clonar o copiar contenido protegido por copyright
- [ ] NO acceder a áreas privadas o de login de ningún sitio
- [ ] NO hacer scraping de sitios que lo prohíben expresamente en ToS
- [ ] NO almacenar datos de menores de edad
- [ ] NO compartir listas de leads con terceros sin autorización
- [ ] NO usar técnicas de fingerprint spoofing en sitios que lo penalizan

---

## Fuentes Permitidas

| Fuente | Permitida | Tipo de dato | Notas |
|--------|-----------|-------------|-------|
| Google Maps (búsqueda pública) | ✅ Sí | Nombre, tel, dirección, reseñas, web | Respetar límites |
| Instagram (perfil público) | ✅ Sí | Bio, seguidores, posts públicos | Solo datos visibles sin login |
| Sitio web del negocio | ✅ Sí | Contacto, servicios | Verificar robots.txt |
| Facebook Business (público) | ✅ Sí | Info de página | Datos visibles |
| Directorios públicos (Páginas Amarillas, etc.) | ✅ Sí | Info de negocio | Verificar ToS |
| WhatsApp (contacto público en Google Maps) | ✅ Sí | Número | Solo si está publicado |
| Datos de empleados | ❌ No | — | No aplica |
| Emails personales privados | ❌ No | — | No recolectar |
| Datos de clientes de otros negocios | ❌ No | — | Nunca |

---

## Señal de RIESGO

Si durante el proceso se detecta alguno de los siguientes, MARCAR COMO RIESGO y buscar alternativa:

- El sitio devuelve 403/429 repetidamente → DETENER, esperar 24h
- El sitio tiene en ToS "scraping prohibido" expresamente → DETENER, buscar fuente alternativa
- Se encuentran datos que parecen personales o privados → NO guardar, eliminar del export
- Se recibe una solicitud legal o de no contacto → REGISTRAR y EXCLUIR permanentemente
- El dominio pertenece a un competidor → EVITAR conflicto de intereses

---

## Protocolo de Contacto

Cuando se usa la lista para contactar:

1. Primer mensaje: breve, personalizado, con observación real del negocio
2. Máximo 2 seguimientos sin respuesta (día 3 y día 7)
3. Si no responde después de 2 seguimientos: CERRAR el lead (no insistir)
4. Si responde "no gracias": agradecer y marcar como `no_contactar`
5. Si responde con interés: derivar a Carlos inmediatamente

---

## Retención de Datos

- Los datos de leads se guardan en CRM solo mientras son procesables
- Si un lead lleva más de 6 meses sin actividad, revisar si sigue vigente
- No acumular listas de leads sin uso operativo

---

## Marco Legal Referencial (Chile)

- Ley 19.628 sobre Protección de la Vida Privada
- No aplica directamente a datos comerciales públicos, pero guía el espíritu del proceso
- En caso de duda: NO recolectar el dato
