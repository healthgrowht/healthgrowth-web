# Scrapling — Configuración MCP
Health Growth SpA | Actualizado: 2026-06-23

---

## Estado

| Item | Estado |
|------|--------|
| Scrapling instalado | ❌ Pendiente |
| MCP verificado | ❌ Pendiente (requiere instalación primero) |
| Claude Desktop configurado | — |

---

## REGLA IMPORTANTE

No inventar el nombre del comando MCP.
Debe verificarse desde la versión instalada con:

```powershell
scrapling --help
# o
python -m scrapling --help
```

---

## Proceso de Configuración MCP

Una vez instalado Scrapling, verificar si incluye servidor MCP:

```powershell
scrapling mcp --help
```

Si existe el comando MCP, el servidor se configura así:

**Ruta de configuración Claude Desktop (Windows):**
```
C:\Users\carlo\AppData\Roaming\Claude\claude_desktop_config.json
```

**Bloque a agregar (NO sobrescribir — agregar dentro de `mcpServers`):**
```json
{
  "mcpServers": {
    "scrapling": {
      "command": "[VERIFICAR comando exacto tras instalar]",
      "args": ["[VERIFICAR argumentos]"],
      "env": {}
    }
  }
}
```

---

## Reiniciar Claude Desktop

Tras modificar la configuración:
1. Cerrar Claude Desktop completamente
2. Volver a abrir
3. Verificar que "scrapling" aparece en la lista de herramientas MCP

---

## Verificar que Aparece

En Claude Desktop, el MCP activo aparece en el ícono de herramientas.
Probar con: "Usa scrapling para buscar negocios..."

---

## Si Falla

1. Revisar logs: `C:\Users\carlo\AppData\Roaming\Claude\logs\`
2. Verificar que el comando del JSON existe y es ejecutable
3. Reiniciar Claude Desktop de nuevo
4. Si persiste, usar Scrapling directamente desde Python (sin MCP)

---

## Alternativa sin MCP

Si Scrapling no tiene servidor MCP, usarlo directamente desde scripts Python:

```python
# /lead-scraper/scripts/search_businesses.py
from scrapling import Fetcher

def search_local_businesses(niche: str, city: str, limit: int = 50):
    fetcher = Fetcher()
    # Implementar búsqueda según fuente permitida
    pass
```

Los resultados se exportan a CSV y se importan al CRM manualmente o via n8n.

---

## Configuraciones Existentes Que NO Deben Tocarse

Las siguientes configuraciones MCP ya existen y no deben modificarse:
- Notion MCP
- Google Drive MCP
- Gmail MCP
- Canva MCP
- Lovable MCP

Solo agregar el bloque de Scrapling dentro del objeto `mcpServers` existente.
