# Scrapling — Estado de Instalación
Health Growth SpA | Actualizado: 2026-06-23

---

## Estado del Entorno

| Componente | Estado | Versión | Acción |
|-----------|--------|---------|--------|
| Python | ✅ Disponible | 3.14.4 | Listo |
| uv | ❌ No instalado | — | Instalar (ver abajo) |
| Scrapling | ⏳ Pendiente | — | Instalar tras uv |
| Playwright (browsers) | ⏳ Pendiente | — | Instalar tras Scrapling |

---

## Paso 1 — Instalar uv

uv es el gestor de paquetes Python recomendado por Scrapling (más rápido que pip).

**En PowerShell (como administrador):**
```powershell
irm https://astral.sh/uv/install.ps1 | iex
```

**Verificar:**
```powershell
uv --version
```

**Alternativa sin uv (usando pip directamente):**
```powershell
pip install "scrapling[all]"
```

---

## Paso 2 — Instalar Scrapling

**Con uv (recomendado):**
```powershell
uv pip install "scrapling[all]"
```

**Con pip:**
```powershell
pip install "scrapling[all]"
```

El flag `[all]` instala todas las dependencias opcionales:
- Playwright (navegadores headless)
- httpx (requests avanzados)
- camoufox (anti-detección)
- parsers adicionales

---

## Paso 3 — Instalar Navegadores

Tras instalar Scrapling, ejecutar:
```powershell
scrapling install
```

Esto instala los navegadores necesarios para Playwright (Chromium, Firefox, WebKit).

---

## Paso 4 — Verificar Instalación

```python
from scrapling import Fetcher

fetcher = Fetcher()
page = fetcher.get("https://httpbin.org/get")
print(page.status)
```

Si imprime `200`, la instalación es correcta.

---

## Configuración MCP

Ver `/docs/scrapling-mcp-config.md` para instrucciones de integración con Claude Desktop/Claude Code.

**Nota importante:** El comando MCP de Scrapling debe verificarse desde la versión instalada. No está pre-configurado — requiere revisar la documentación oficial del paquete instalado.

---

## Errores Comunes

| Error | Causa | Solución |
|-------|-------|---------|
| `ModuleNotFoundError: scrapling` | No instalado | Ejecutar `pip install scrapling[all]` |
| `uv: no se reconoce` | uv no instalado | Instalar uv primero |
| `playwright: No browser found` | Browsers no instalados | Ejecutar `scrapling install` |
| `Permission denied` | PowerShell sin admin | Abrir PowerShell como administrador |

---

## Próximos Pasos

1. [ ] Instalar uv: `irm https://astral.sh/uv/install.ps1 | iex`
2. [ ] Instalar Scrapling: `uv pip install "scrapling[all]"`
3. [ ] Instalar browsers: `scrapling install`
4. [ ] Verificar con script de prueba
5. [ ] Configurar MCP si disponible
6. [ ] Ejecutar primera búsqueda de prueba (ver `/lead-scraper/prompts/`)
