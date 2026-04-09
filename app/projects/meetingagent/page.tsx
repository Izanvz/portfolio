import Link from "next/link";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MeetingAgent — Izan Villarejo",
  description:
    "Sistema autónomo de análisis de reuniones con IA. Pipeline local que convierte audio en texto estructurado, resumen y tareas accionables.",
};

const ARCHITECTURE = [
  { step: "01", name: "Ingesta de audio", desc: "Carga de archivo local o URL. Soporta múltiples formatos de audio." },
  { step: "02", name: "Preprocesamiento", desc: "Limpieza y normalización del audio para maximizar precisión en transcripción." },
  { step: "03", name: "Transcripción", desc: "WhisperX con timestamps por token y alineación forzada." },
  { step: "04", name: "Diarización", desc: "Pyannote identifica y separa hablantes, asignando segmentos a cada voz." },
  { step: "05", name: "Procesamiento LLM", desc: "El modelo extrae resumen, decisiones clave y action items del transcript." },
  { step: "06", name: "Orquestación", desc: "LangGraph gestiona el grafo de nodos, condiciones y flujo de datos entre etapas." },
  { step: "07", name: "Persistencia", desc: "SQLite guarda el historial estructurado. ChromaDB indexa para búsqueda semántica." },
  { step: "08", name: "API", desc: "FastAPI expone todos los endpoints. Diseñado para conectar cualquier frontend." },
];

const DECISIONS = [
  {
    title: "Local-first",
    trade: "Control y privacidad sobre comodidad en la nube",
    why: "Los datos de reuniones son sensibles. El procesamiento local garantiza que ningún audio sale del entorno del usuario. Además, elimina costes de API recurrentes.",
  },
  {
    title: "Pipeline modular",
    trade: "Complejidad inicial vs escalabilidad real",
    why: "Cada etapa es reemplazable independientemente. Se puede cambiar WhisperX por otro ASR, o el LLM por otro modelo, sin tocar el resto del sistema.",
  },
  {
    title: "Diarización con Pyannote",
    trade: "Modelo pesado vs segmentación básica por silencio",
    why: "Sin separación real de hablantes, el resumen pierde contexto. ¿Quién dijo qué? es información crítica. La diarización convierte el transcript en un diálogo estructurado.",
  },
  {
    title: "LangGraph vs flujo lineal",
    trade: "Grafo de nodos vs scripts secuenciales",
    why: "El flujo de procesamiento no siempre es lineal. LangGraph permite condicionales, reintentos y añadir nuevos nodos (ej: fact-checking, clasificación) sin reescribir el sistema.",
  },
  {
    title: "Diseño orientado a API",
    trade: "Overhead de FastAPI vs scripts directos",
    why: "Un pipeline sin API es una herramienta de una sola persona. Con API, el sistema puede ser consumido por cualquier frontend, bot de Slack, o herramienta externa.",
  },
];

const RESULTS = [
  "Procesamiento automático sin intervención manual tras la ingesta inicial.",
  "Historial persistente con búsqueda semántica sobre reuniones pasadas.",
  "API lista para conectar cualquier frontend o herramienta externa.",
  "Pipeline extensible: nuevos modelos o etapas sin reescribir el sistema.",
];

export default function MeetingAgentPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-28">
        <div className="max-w-4xl mx-auto px-6 md:px-8">

          {/* Back */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-ink-500 hover:text-ink-200 transition-colors mb-12 group"
          >
            <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
            Proyectos
          </Link>

          {/* Header */}
          <div className="mb-20 border-b border-ink-800/40 pb-12">
            <div className="flex items-center gap-2 mb-5 flex-wrap">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-amber/10 text-amber border border-amber/20">
                LLM System
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-ink-800/60 text-ink-400 border border-amber/15">
                flagship
              </span>
              <span className="inline-flex items-center gap-1.5 text-[13px] font-mono px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                demo live
              </span>
            </div>

            <h1
              className="font-semibold tracking-tight text-ink-100 leading-[1.02] mb-5"
              style={{ fontSize: "clamp(2.4rem, 5vw + 1rem, 4.2rem)" }}
            >
              MeetingAgent
            </h1>

            <p className="text-ink-400 text-lg leading-relaxed max-w-2xl mb-7">
              Sistema autónomo de análisis de reuniones con IA. Pipeline local que convierte audio en texto
              estructurado, resumen y tareas accionables — sin intervención manual, sin costes de API.
            </p>

            <div className="flex flex-wrap gap-1.5 mb-8">
              {["Python", "FastAPI", "LangGraph", "WhisperX", "Pyannote", "ChromaDB", "SQLite", "Docker"].map((s) => (
                <span
                  key={s}
                  className="text-[11px] font-mono px-2.5 py-1 rounded-full border border-ink-800/60 text-ink-400 bg-ink-950/50"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://meeting-agent-web.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber text-ink-950 px-5 py-2.5 rounded-full font-medium text-sm hover:bg-amber-bright transition-colors"
              >
                Ver demo ↗
              </a>
              <a
                href="https://github.com/Izanvz/MeetingAgent"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-ink-700/60 text-ink-300 hover:border-amber/30 hover:text-ink-100 transition-all text-sm"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          {/* 01 — Qué es */}
          <section className="mb-16">
            <p className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-amber mb-4">
              <span className="block w-4 h-px bg-amber/60" />
              01 — Qué es
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink-100 mb-4">
              Sistema backend de análisis de reuniones
            </h2>
            <p className="text-ink-400 leading-relaxed text-base md:text-lg max-w-2xl">
              MeetingAgent automatiza el procesamiento completo de reuniones: desde la ingesta del audio hasta
              la generación de resúmenes estructurados con decisiones y tareas accionables. Diseñado como un
              pipeline modular, ejecuta todas las etapas localmente sin depender de APIs externas de pago.
            </p>
          </section>

          {/* 02 — Problema */}
          <section className="mb-16 border-t border-ink-800/40 pt-12">
            <p className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-amber mb-4">
              <span className="block w-4 h-px bg-amber/60" />
              02 — Problema
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink-100 mb-6">
              Las reuniones generan información que se pierde
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { title: "Audios largos", desc: "1h de reunión = 1h de revisión manual. No escala." },
                { title: "Múltiples hablantes", desc: "¿Quién dijo qué? Sin diarización, el contexto se pierde." },
                { title: "Pérdida de contexto", desc: "Las decisiones quedan dispersas en el audio, sin estructura." },
                { title: "Documentación manual", desc: "Horas de trabajo dedicadas a resumir lo que ya ocurrió." },
              ].map((p) => (
                <div key={p.title} className="p-5 rounded-[18px] border border-ink-800/50 bg-ink-925">
                  <p className="text-ink-100 font-medium text-sm mb-2">{p.title}</p>
                  <p className="text-ink-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 03 — Arquitectura */}
          <section className="mb-16 border-t border-ink-800/40 pt-12">
            <p className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-amber mb-4">
              <span className="block w-4 h-px bg-amber/60" />
              03 — Arquitectura
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink-100 mb-6">
              Pipeline modular de 8 etapas
            </h2>
            <div className="space-y-2">
              {ARCHITECTURE.map((stage, i) => (
                <div
                  key={stage.step}
                  className="flex gap-5 p-4 rounded-[16px] border border-ink-800/40 bg-ink-925/60 hover:border-amber/20 transition-colors group"
                >
                  <span className="font-mono text-[11px] text-amber/50 mt-0.5 flex-shrink-0 group-hover:text-amber/70 transition-colors">
                    {stage.step}
                  </span>
                  <div className="flex items-baseline gap-3 min-w-0 flex-1">
                    <span className="font-medium text-ink-100 text-sm flex-shrink-0">{stage.name}</span>
                    <span className="text-ink-800 text-xs hidden sm:block">—</span>
                    <span className="text-ink-500 text-sm leading-relaxed">{stage.desc}</span>
                  </div>
                  {i < ARCHITECTURE.length - 1 && (
                    <span className="flex-shrink-0 text-ink-800 text-xs self-center">↓</span>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* 04 — Decisiones técnicas */}
          <section className="mb-16 border-t border-ink-800/40 pt-12">
            <p className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-amber mb-4">
              <span className="block w-4 h-px bg-amber/60" />
              04 — Decisiones técnicas
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink-100 mb-6">
              Trade-offs reales, no defaults
            </h2>
            <div className="space-y-4">
              {DECISIONS.map((d) => (
                <div key={d.title} className="p-6 rounded-[20px] border border-ink-800/50 bg-ink-925">
                  <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                    <h3 className="font-semibold text-ink-100">{d.title}</h3>
                    <span className="text-[11px] font-mono text-ink-600 bg-ink-900/80 px-2.5 py-1 rounded-md border border-ink-800/60 flex-shrink-0">
                      {d.trade}
                    </span>
                  </div>
                  <p className="text-ink-400 text-sm leading-relaxed">{d.why}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 05 — Resultado */}
          <section className="border-t border-ink-800/40 pt-12">
            <p className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-amber mb-4">
              <span className="block w-4 h-px bg-amber/60" />
              05 — Resultado
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink-100 mb-6">
              Pipeline funcional end-to-end
            </h2>

            <div className="grid sm:grid-cols-3 gap-3 mb-8">
              {[
                { value: "< 2 min", label: "tiempo por reunión" },
                { value: "0 €", label: "coste de API" },
                { value: "local-first", label: "modo" },
              ].map((m) => (
                <div
                  key={m.label}
                  className="rounded-[14px] border border-ink-700 bg-ink-950/60 px-5 py-4 flex flex-col gap-1"
                >
                  <p className="font-mono text-amber font-semibold text-xl leading-none">{m.value}</p>
                  <p className="font-mono text-ink-600 text-[10px] uppercase tracking-widest">{m.label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              {RESULTS.map((r) => (
                <p key={r} className="flex items-start gap-3 text-ink-400 text-sm leading-relaxed">
                  <span className="text-amber mt-0.5 flex-shrink-0">✓</span>
                  {r}
                </p>
              ))}
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
