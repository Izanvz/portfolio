# Auditoría Portfolio — Izan Villarejo
> Análisis de `portfolio-izanv.vercel.app` — Abril 2026

---

## 💀 ELIMINAR SÍ O SÍ

### 1. Los stats del hero: "4+ proyectos con IA", "Python", "ML Cert."
**Problema:** Una fila de 3 stats donde uno dice literalmente "Python" como valor y otro "ML Cert." no transmite nada. Es el filler más clásico de portfolios de plantilla.  
**Fix:** Quita esa sección entera del hero. Nada es mejor que números falsos.

---

### 2. La segunda certificación "Unsupervised Learning, Recommenders, RL"
**Problema:** La Machine Learning Specialization de DeepLearning.AI tiene 3 cursos. Estás mostrando 2 de 3 certificados del mismo programa como si fueran logros separados. Parece relleno.  
**Fix:** Una sola entrada:
```
Machine Learning Specialization (3 cursos) — DeepLearning.AI / Stanford, 2025
[link a Coursera]
```

---

### 3. El panel hero de MeetingAgent en la columna derecha del hero
**Problema:** El layout de 2 columnas con una tarjeta de preview del proyecto a la derecha lo hace todo el mundo con plantillas de 2024. En un perfil junior con 1 año de experiencia, el reclutador quiere ver quién eres, no solo qué has hecho.  
**Fix:** Considera una foto profesional en ese espacio, o elimina la segunda columna y haz el hero centrado y más personal.

---

## ⚠️ COPIA-PEGA / GENÉRICO

### 4. Los 3 bullets del About: "Automatización real", "Arquitectura limpia", "Impacto medible"
**Problema:** Cualquier desarrollador backend podría copiar exactamente estos 3 títulos. "Arquitectura limpia" es tan genérico que no dice nada. "Impacto medible" pero no hay ninguna métrica concreta en toda esa sección.  
**Fix:** Que sean específicos de ti:
- "Reemplacé 40h/mes de trabajo manual en TESI con un pipeline de IA"
- "Diseño agentes donde el LLM no tiene control total del flujo (LangGraph con nodos específicos)"
- "Local-first: todo corre en tu máquina, sin APIs de pago"

---

### 5. "Trabajemos juntos" + "Respondo rápido por email" en el contacto
**Problema:** "Trabajemos juntos" es la frase más usada en portfolios del mundo. "Respondo rápido por email" se da por sentado. El bloque de contacto es donde tienes que ser más tú, no más genérico.  
**Fix:** Algo como:
> "Estoy buscando trabajo activamente. Si tu equipo trabaja con Python, IA y necesitas a alguien que se ponga las pilas desde el día 1, escríbeme."

---

### 6. La "filosofía": "La IA no es el producto. El sistema que la integra correctamente sí lo es."
**Problema:** Es una frase bonita pero se ha convertido en cliché del sector en 2024–2025. Cualquier prompt de ChatGPT genera variantes de esto.  
**Fix:** Si la usas, hazla tuya. Añade algo específico después:
> "Por eso en MeetingAgent el LLM extrae, pero SQLite guarda, ChromaDB indexa, y FastAPI sirve — cada capa con su responsabilidad."

---

### 7. Stack "Interfaces & Tools" con yt-dlp, "JSON/CSV export" y "Dashboard web"
**Problema:** yt-dlp es una herramienta que usaste en un proyecto, no una habilidad de tu stack. "JSON/CSV export" y "Dashboard web" son actividades, no tecnologías. Parece relleno.  
**Fix:** Quita esa categoría o fúndela con DevOps. Si quieres mencionar Streamlit, ponlo en el proyecto donde lo usaste, no como skill core.

---

## 🔧 MEJORAR ESTRUCTURA / CONTENIDO

### 8. BTC-Pred tiene el único resultado cuantificable real del portfolio y está escondido
**Problema:** Tienes la única métrica concreta (R² 0.645 con GridSearchCV) en la tarjeta más pequeña. Es exactamente lo que diferencia un proyecto serio de un tutorial de YouTube.  
**Fix:** Dale más espacio. Añade: qué modelos comparaste, por qué ganó ese, qué aprendiste del proceso.

---

### 9. AudioSmart y MeetingAgent son casi el mismo proyecto — el reclutador lo nota
**Problema:**
- MeetingAgent: Whisper + LangGraph + ChromaDB para reuniones
- AudioSmart: WhisperX + Mistral 7B para audios

El solapamiento es obvio. Cuatro proyectos con variaciones del mismo tema de audio/transcripción señalan falta de amplitud.  
**Fix:** Mantén MeetingAgent como flagship. Fusiona AudioSmart como "versión previa local-only" dentro de la descripción de MeetingAgent. Usa ese espacio para MeetingAgentWeb.

---

### 10. Falta MeetingAgentWeb — tu proyecto más ambicioso
**Problema:** MeetingAgentWeb (multi-tenant SaaS, Clerk, Next.js, Recall.ai) no aparece en el portfolio. Ese proyecto demuestra que puedes ir más allá de un pipeline local y construir producto real con autenticación, multi-tenancy e integraciones externas.  
**Fix:** Añádelo aunque esté en progreso. Etiqueta "In progress" o "beta" es honesto y demuestra que estás activo construyendo.

---

### 11. El orden de secciones pone lo más fuerte al final
**Problema:** Orden actual: Hero → About → Experience → Projects. Con solo 1 año de experiencia, los proyectos son tu argumento más fuerte pero están en el tercer bloque. El reclutador llega con el scroll ya cansado.  
**Fix:** Cambiar a:
```
Hero → Projects → Experience → About → Contact
```

---

### 12. No hay ninguna prueba visual en todo el portfolio
**Problema:** 100% texto y tarjetas de código. Con proyectos de IA que generan output visible (transcripciones, resúmenes, detecciones de objetos), no mostrar ningún resultado visual es una oportunidad enorme perdida.  
**Fix:**
- Un GIF de 5 segundos de MeetingAgent procesando un audio vale más que 3 párrafos describiéndolo
- Para VisuCheck: una imagen antes/después con la anotación de YOLOv8 sería muy impactante
- Para BTC-Pred: un gráfico del modelo vs precio real

---

## ✅ LO QUE FUNCIONA BIEN — NO TOCAR

### Diseño visual
El sistema de colores amber/ink es coherente y profesional. No es una plantilla obvia. El navbar flotante con glassmorphism funciona. El dark mode está bien implementado.

### Los bullets de TESI
"Reemplacé un proceso 100% manual, llevado por una persona y hojas de cálculo..." — eso es exactamente cómo se describe impacto real. Es de lo mejor del portfolio. Mantén ese tono para el resto.

### El badge de disponibilidad en el hero
"Disponible · España remoto · Valencia/Safor" con el punto verde parpadeante. Un reclutador puede saber en 2 segundos si eres viable geográficamente. Funciona bien.

---

## 📋 PRIORIDADES DE IMPLEMENTACIÓN

### Hoy mismo (30 min)
1. Quitar los stats del hero (4+ proyectos, "Python", "ML Cert.")
2. Fusionar las 2 certificaciones en 1 entrada
3. Reordenar secciones: Hero → Projects → Experience → About → Contact

### Esta semana
4. Fusionar AudioSmart dentro de MeetingAgent
5. Añadir MeetingAgentWeb como proyecto "in progress"
6. Reescribir los 3 bullets del About con datos concretos de TESI
7. Reescribir el bloque de contacto con tono más directo y personal

### Siguiente iteración
8. Añadir screenshots o GIFs a los proyectos
9. Expandir BTC-Pred con más detalle de la comparativa de modelos
10. Revisar y humanizar la sección "Filosofía"
11. Eliminar o fusionar la categoría "Interfaces & Tools" del stack
