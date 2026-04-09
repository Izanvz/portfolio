import Link from "next/link";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sift — Izan Villarejo",
  description:
    "Agente autónomo de investigación profunda. Descompone la consulta, lanza búsquedas paralelas en web, RAG y arXiv, sintetiza y se auto-critica antes de devolver el resultado.",
};

const ARCHITECTURE = [
  { step: "01", name: "Recepción de consulta", desc: "El agente recibe la pregunta y la descompone en sub-queries específicas." },
  { step: "02", name: "Búsqueda paralela", desc: "Lanza búsquedas simultáneas en web, RAG (ChromaDB) y arXiv según el tipo de consulta." },
  { step: "03", name: "Recolección y filtrado", desc: "Agrega los resultados de las 3 fuentes y descarta información irrelevante o redundante." },
  { step: "04", name: "Síntesis inicial", desc: "El LLM genera un borrador de respuesta consolidando las fuentes recopiladas." },
  { step: "05", name: "Auto-crítica", desc: "El agente evalúa su propia síntesis: identifica lagunas, contradicciones o afirmaciones sin respaldo." },
  { step: "06", name: "Refinamiento (hasta 3 bucles)", desc: "Si la auto-crítica detecta problemas, lanza búsquedas adicionales y refina la síntesis." },
  { step: "07", name: "Checkpoint humano", desc: "Antes de entregar el resultado final, el flujo pausa para validación o redirección del usuario." },
  { step: "08", name: "Respuesta final", desc: "Síntesis estructurada con fuentes citadas, entregada vía API o interfaz." },
];

const DECISIONS = [
  {
    title: "LangGraph vs agente single-shot",
    trade: "Grafo con estado vs LLM en un solo prompt",
    why: "La investigación profunda requiere iteración. Un LLM single-shot no puede relanzar búsquedas cuando detecta huecos en la información. LangGraph permite ciclos controlados con condiciones de parada.",
  },
  {
    title: "3 fuentes paralelas",
    trade: "Complejidad de integración vs calidad de resultados",
    why: "Web cubre noticias y contenido reciente, RAG cubre documentos propios indexados, arXiv cubre investigación académica. Ninguna fuente sola cubre los 3 dominios.",
  },
  {
    title: "Auto-crítica integrada",
    trade: "Latencia extra vs fiabilidad del output",
    why: "Sin auto-evaluación, el agente entrega el primer borrador sin filtrar. La auto-crítica reduce alucinaciones y aumenta la calidad sin requerir supervisión humana en cada ciclo.",
  },
  {
    title: "Human-in-the-loop como checkpoint",
    trade: "Interrupción del flujo vs control sobre el resultado",
    why: "La investigación profunda puede derivar en direcciones inesperadas. El checkpoint permite al usuario redirigir antes de que el agente consolide una síntesis errónea.",
  },
  {
    title: "ChromaDB para RAG",
    trade: "Vector store dedicado vs embeddings en memoria",
    why: "Para consultas que cruzan documentos propios con fuentes externas, ChromaDB permite búsqueda semántica persistente sin reindexar en cada sesión.",
  },
];

const RESULTS = [
  "Pipeline de investigación multi-fuente funcional con paralelismo real.",
  "Bucles de auto-crítica que reducen afirmaciones sin respaldo en el output.",
  "Arquitectura extensible: nuevas fuentes (PubMed, base de datos interna) se añaden como nodos.",
  "Checkpoint humano que convierte el agente en herramienta colaborativa, no solo autónoma.",
];

export default function SiftPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-28">
        <div className="max-w-4xl mx-auto px-6 md:px-8">

          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-ink-500 hover:text-ink-200 transition-colors mb-12 group"
          >
            <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
            Proyectos
          </Link>

          <div className="mb-20 border-b border-ink-800/40 pb-12">
            <div className="flex items-center gap-2 mb-5 flex-wrap">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-amber/10 text-amber border border-amber/20">
                LLM Agent
              </span>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2 py-0.5 rounded-md bg-amber/10 text-amber border border-amber/20">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber opacity-60" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber" />
                </span>
                en construcción
              </span>
            </div>

            <h1
              className="font-semibold tracking-tight text-ink-100 leading-[1.02] mb-5"
              style={{ fontSize: "clamp(2.4rem, 5vw + 1rem, 4.2rem)" }}
            >
              Sift
            </h1>

            <p className="text-ink-400 text-lg leading-relaxed max-w-2xl mb-7">
              Agente autónomo de investigación profunda. Descompone la consulta, lanza búsquedas paralelas
              en web, RAG y arXiv, sintetiza y se auto-critica antes de devolver un resultado estructurado
              con fuentes citadas.
            </p>

            <div className="flex flex-wrap gap-1.5 mb-8">
              {["Python", "LangGraph", "FastAPI", "ChromaDB", "Ollama", "arXiv API"].map((s) => (
                <span
                  key={s}
                  className="text-[11px] font-mono px-2.5 py-1 rounded-full border border-ink-800/60 text-ink-400 bg-ink-950/50"
                >
                  {s}
                </span>
              ))}
            </div>

            <a
              href="https://github.com/Izanvz/Sift"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-ink-700/60 text-ink-300 hover:border-amber/30 hover:text-ink-100 transition-all text-sm"
            >
              GitHub ↗
            </a>
          </div>

          {/* 01 — Qué es */}
          <section className="mb-16">
            <p className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-amber mb-4">
              <span className="block w-4 h-px bg-amber/60" />
              01 — Qué es
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink-100 mb-4">
              Agente de investigación profunda multi-fuente
            </h2>
            <p className="text-ink-400 leading-relaxed text-base md:text-lg max-w-2xl">
              Sift automatiza la investigación profunda sobre cualquier tema. En lugar de hacer una búsqueda
              simple, descompone la pregunta en sub-queries, consulta simultáneamente múltiples fuentes y
              refina la síntesis mediante bucles de auto-crítica antes de entregar el resultado al usuario.
            </p>
          </section>

          {/* 02 — Problema */}
          <section className="mb-16 border-t border-ink-800/40 pt-12">
            <p className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-amber mb-4">
              <span className="block w-4 h-px bg-amber/60" />
              02 — Problema
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink-100 mb-6">
              La investigación profunda no escala manualmente
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { title: "Tiempo elevado", desc: "Una investigación rigurosa en múltiples fuentes lleva horas de trabajo manual." },
                { title: "Fuentes dispersas", desc: "Web, papers académicos y documentos propios están en silos separados. Cruzarlos es costoso." },
                { title: "Sin verificación", desc: "Los LLMs single-shot generan síntesis sin evaluar si hay huecos o contradicciones en la información." },
                { title: "Deriva sin control", desc: "Un agente completamente autónomo puede consolidar una dirección errónea sin que el usuario pueda intervenir." },
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
            <h2 className="text-2xl md:text-3xl font-semibold text-ink-100 mb-2">
              Grafo LangGraph de 12 nodos con bucles de refinamiento
            </h2>
            <p className="text-ink-500 text-sm mb-6">El grafo no es lineal: los nodos de auto-crítica pueden redirigir al agente a nuevas búsquedas.</p>
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
              Pipeline de investigación multi-fuente
            </h2>

            <div className="grid sm:grid-cols-3 gap-3 mb-8">
              {[
                { value: "12 nodos", label: "grafo LangGraph" },
                { value: "3 fuentes", label: "web · RAG · arXiv" },
                { value: "human-in-loop", label: "checkpoint" },
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
