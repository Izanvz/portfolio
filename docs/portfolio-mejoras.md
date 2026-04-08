# Instrucciones de mejora — portfolio-izanv.vercel.app

> Este documento contiene los cambios exactos a implementar en el portfolio. Cada cambio incluye qué modificar, dónde y el copy o estructura exacta cuando aplica. Prioridad descendente: empieza por el bloque 1.

---

## BLOQUE 1 — HERO (alta prioridad, máximo impacto)

### 1.1 Reordenar elementos del hero

El badge de disponibilidad debe moverse **debajo** del rol (`<p data-hero="role">`), no antes del nombre.

Orden correcto:
1. Nombre (`h1`)
2. Rol (`p data-hero="role"`)
3. Badge de disponibilidad
4. Descripción
5. CTAs

### 1.2 Actualizar la descripción del hero

Reemplazar el texto actual de `<p data-hero="desc">`:

**Texto actual:**
```
Diseño e integro sistemas backend que incorporan IA en entornos reales: pipelines, APIs, automatización y producto listo para usarse.
```

**Texto nuevo:**
```
En TESI automaticé 40h/mes de trabajo manual con un pipeline Whisper + GPT-4. Construyo sistemas donde la IA tiene un rol concreto — no control total — sobre el flujo.
```

### 1.3 Reducir los CTAs del hero de 4 a 2

Eliminar los botones **"Contacto"** y mantener solo:
- CTA principal: `Ver proyectos →`
- CTA secundario: `CV ↓`
- CTA terciario: `GitHub ↗`

El botón "Contacto" en el hero es ruido. Ya existe la sección #contact y el nav.

---

## BLOQUE 2 — PROYECTOS (alta prioridad)

### 2.1 Cambiar los stats de las cards por métricas reales

Las cards actualmente muestran el nombre de tecnologías como si fueran métricas (ej: "Whisper", "LangGraph"). Cambiar a métricas de impacto real.

**MeetingAgent — stats nuevos:**
| Label (uppercase mono) | Valor |
|---|---|
| tiempo por reunión | < 2 min |
| coste de API | 0 € |
| modo | local-first |

**Sift — stats nuevos:**
| Label | Valor |
|---|---|
| reducción de tiempo | ~10× |
| fuentes | web + RAG + arXiv |
| refinamiento | 3 bucles auto-crítica |

**VisuCheck — stats nuevos:**
| Label | Valor |
|---|---|
| input | imagen de lineal |
| output | JSON + imagen anotada |
| sin | revisión manual |

**AudioSmart — stats nuevos:**
| Label | Valor |
|---|---|
| fuente | YouTube o archivo local |
| coste de API | 0 € |
| output | transcripción + resumen + hablantes |

### 2.2 Añadir una línea de contexto "problema → resultado" al principio de cada card

Insertar una línea corta justo antes de la descripción larga en cada card. Ejemplos:

**MeetingAgent:**
```
Problema: las reuniones se pierden. Solución: pipeline local que las convierte en texto, resumen y tareas accionables en menos de 2 minutos.
```

**Sift:**
```
Problema: la investigación profunda lleva horas. Solución: agente autónomo que descompone, busca y sintetiza en minutos con autocrítica integrada.
```

**VisuCheck:**
```
Problema: auditar lineales de retail requiere inspección manual. Solución: pipeline de visión que devuelve JSON estructurado con imagen anotada.
```

**AudioSmart:**
```
Problema: analizar audio manualmente es lento y caro. Solución: pipeline 100% local con WhisperX + LLM que procesa desde YouTube o archivo.
```

### 2.3 Añadir screenshot o GIF real a cada proyecto

En cada card, añadir una imagen del output real del proyecto:
- MeetingAgent: screenshot del dashboard o del output de action items
- Sift: screenshot del informe generado
- VisuCheck: imagen de ejemplo anotada con bounding boxes
- AudioSmart: screenshot del output de transcripción con hablantes

Colocarlas debajo de la descripción y encima de los stats. Si no hay assets disponibles, crear un GIF de terminal corto (15-30 segundos) mostrando el pipeline en acción.

### 2.4 Diferenciar AudioSmart de MeetingAgent visualmente y textualmente

Añadir una línea en AudioSmart que explique la relación con MeetingAgent:

```
Predecesor de MeetingAgent. Pipeline de análisis de audio general-purpose: 
cualquier fuente, sin restricción a reuniones.
```

Esto evita que parezcan el mismo proyecto duplicado.

---

## BLOQUE 3 — COPY (media prioridad)

### 3.1 Eliminar líneas de relleno en secciones

Eliminar o reemplazar estas frases que no aportan información:

| Ubicación | Texto actual | Acción |
|---|---|---|
| Sección Experiencia, subtítulo | `"Trayectoria profesional, formación académica y certificaciones relevantes."` | Eliminar |
| Sección Stack, subtítulo | `"Tecnologías que uso para construir sistemas backend con IA integrada en producción."` | Reemplazar |
| Stack card "Datos", descripción | `"Persistencia y modelado según el caso."` | Reemplazar |
| Sección Contacto, CTA | `"ponerse las pilas"` | Reemplazar |

**Textos de reemplazo:**

Stack, subtítulo:
```
Las herramientas con las que construyo — y las que he usado en proyectos reales.
```

Stack card "Datos", descripción:
```
SQLite para local, MySQL para relacional, ChromaDB para vectores.
```

Contacto, párrafo CTA:
```
Busco un equipo donde construir sistemas reales con Python e IA — no demos, producto. 
Si tienes un reto técnico concreto, mándame contexto y hablamos.
```
(Eliminar la frase "ponerse las pilas" — ya aparece en el copy actual, sustituir por lo de arriba)

### 3.2 Eliminar duplicación en sección "Sobre mí"

La frase `"El LLM extrae, SQLite guarda, ChromaDB indexa y FastAPI sirve"` aparece dos veces en la misma sección: en el card "02" (columna izquierda) y en el bloque "Filosofía" (columna derecha).

Reemplazar el texto del bloque "Filosofía" por:

```
La IA no es el producto. El sistema que la integra correctamente sí lo es. 
Mi trabajo es que cada capa tenga su responsabilidad — y que el resultado 
llegue a producción sin depender de APIs externas cuando no hace falta.
```

---

## BLOQUE 4 — DISEÑO Y UX (media prioridad)

### 4.1 Corregir inconsistencia en badges "core" de la sección Stack

Actualmente los paneles "Backend & APIs" y "Machine Learning & AI" tienen badge `core`. Los paneles "Datos & Bases de Datos" y "DevOps & Herramientas" no lo tienen.

**Opciones (elegir una):**
- A) Añadir badge `core` también a "Datos" y "DevOps" si se consideran igual de centrales.
- B) Eliminar el badge `core` de todos y dejar que el color amber/gris hable por sí solo.

**Recomendación: opción B.** El sistema de colores ya comunica la jerarquía.

### 4.2 Añadir un elemento visual diferenciador al hero

El portfolio usa Geist + amber + dark mode, que es el aesthetic estándar de 2024-2025 para developers Next.js. Añadir un elemento único al hero que rompa esa sensación de template.

**Opción recomendada:** Un pequeño snippet de código animado o un diagrama ASCII del pipeline de MeetingAgent, visible en desktop en la zona derecha del hero (donde actualmente está el mock panel de MeetingAgent).

Ejemplo de diagrama ASCII:
```
audio.mp3 → [WhisperX] → [LangGraph] → [FastAPI]
                              ↓               ↓
                         [SQLite]       [ChromaDB]
                              ↓
                        resumen + tareas
```

O mantener el mock panel actual pero reemplazarlo con una screenshot real del proyecto.

### 4.3 Arreglar el enlace de la certificación de Coursera

El enlace actual apunta a la página de la especialización en general:
```
https://www.coursera.org/specializations/machine-learning-introduction
```

Reemplazar por el enlace directo al certificado personal de Izan. Si está disponible en Coursera o LinkedIn, usar ese URL. Si no, añadir un botón "Ver certificado" que abra el PDF del certificado.

---

## BLOQUE 5 — SECCIONES NUEVAS (prioridad media-baja)

### 5.1 Añadir banner/sección "En construcción ahora"

Añadir una sección pequeña entre Proyectos y Experiencia, o como card adicional al final del grid de proyectos, con estado "WIP":

**Título:** `MeetingAgentWeb`

**Contenido:**
```
SaaS multi-tenant de MeetingAgent. Stack: Next.js, Clerk (auth), 
Recall.ai (integración con videollamadas), FastAPI backend.
Objetivo: de pipeline local a producto cloud con usuarios reales.
```

**Badge visual:** `🚧 En progreso` o una variante en el sistema de design existente.

**Por qué:** Un reclutador que llega desde LinkedIn donde ve el #BuildingInPublic espera encontrar esto en el portfolio. La coherencia narrativa importa.

### 5.2 Añadir formulario de contacto simple

La sección de contacto actual solo tiene email + botón copiar. Añadir un formulario mínimo con tres campos:
- Nombre
- Email
- Mensaje

Implementación recomendada: [Formspree](https://formspree.io) o [Resend](https://resend.com) — ambos tienen plan gratuito y se integran en minutos con Next.js.

Mantener el botón de email existente como alternativa.

---

## BLOQUE 6 — TÉCNICO (baja prioridad, verificar)

### 6.1 Verificar que /cv.pdf existe y está actualizado

El botón `CV ↓` en el hero apunta a `/cv.pdf`. Verificar que:
1. El archivo existe en el directorio public.
2. Está actualizado a la fecha actual.
3. Tiene el nombre correcto y se descarga correctamente en mobile.

**Este es el único punto de baja prioridad que puede tener impacto alto si falla.** Un reclutador que hace click en "CV" y no encuentra nada o encuentra un PDF roto descarta el portfolio.

### 6.2 Quitar "Safor" de las meta keywords si no aparece en el contenido

Las meta keywords incluyen `"Safor"` pero el término no aparece en ningún texto visible del portfolio. O añadirlo al contenido (ej: en la sección de contacto: "Gandía, La Safor, Valencia") o eliminarlo de las keywords.

---

## Resumen de cambios por prioridad

| Prioridad | Bloque | Cambio |
|---|---|---|
| 🔴 Crítico | 1.2 | Descripción del hero con métrica de TESI |
| 🔴 Crítico | 6.1 | Verificar que /cv.pdf existe |
| 🟠 Alto | 1.3 | Reducir CTAs del hero a 3 |
| 🟠 Alto | 2.1 | Stats de proyectos = métricas reales |
| 🟠 Alto | 2.3 | Añadir screenshots/GIFs a proyectos |
| 🟡 Medio | 1.1 | Reordenar elementos del hero |
| 🟡 Medio | 2.2 | Línea problema→resultado en cada card |
| 🟡 Medio | 3.1 | Eliminar copy de relleno |
| 🟡 Medio | 3.2 | Eliminar duplicación en "Sobre mí" |
| 🟡 Medio | 4.3 | Enlace directo al certificado |
| 🟢 Bajo | 4.1 | Inconsistencia badges "core" |
| 🟢 Bajo | 4.2 | Elemento visual diferenciador |
| 🟢 Bajo | 5.1 | Banner MeetingAgentWeb WIP |
| 🟢 Bajo | 5.2 | Formulario de contacto |
| 🟢 Bajo | 6.2 | Meta keywords consistency |
