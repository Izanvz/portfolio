import Link from "next/link";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AudioSmart — Izan Villarejo",
  description:
    "Pipeline de análisis de audio general-purpose. 100% local con WhisperX + Mistral 7B. Procesa desde YouTube o archivo y devuelve transcripción con hablantes, resumen y puntos clave.",
};

const ARCHITECTURE = [
  { step: "01", name: "Fuente de entrada", desc: "URL de YouTube o archivo de audio local. yt-dlp gestiona la descarga y extracción del audio." },
  { step: "02", name: "Preprocesamiento", desc: "Normalización del audio: formato, sample rate y limpieza de ruido para mejorar la transcripción." },
  { step: "03", name: "Transcripción con WhisperX", desc: "Transcripción con alineación forzada a nivel de token y timestamps precisos por segmento." },
  { step: "04", name: "Diarización de hablantes", desc: "Identificación y separación de voces para asignar cada segmento al hablante correspondiente." },
  { step: "05", name: "Análisis con LLM local", desc: "Mistral 7B (vía Ollama) genera resumen, extrae puntos clave y detecta temas principales." },
  { step: "06", name: "Estructuración del output", desc: "Combinación de transcripción diarizada y análisis del LLM en un output unificado." },
  { step: "07", name: "Interfaz Streamlit", desc: "UI para cargar audio, lanzar el pipeline y visualizar resultados sin necesidad de API." },
];

const DECISIONS = [
  {
    title: "Mistral 7B local vs OpenAI API",
    trade: "Inferencia local vs coste por llamada",
    why: "AudioSmart nació con el principio de coste cero en APIs externas. Mistral 7B vía Ollama ofrece calidad suficiente para resumen y extracción sin enviar datos a terceros.",
  },
  {
    title: "WhisperX sobre Whisper estándar",
    trade: "Alineación forzada vs transcripción básica",
    why: "Whisper estándar transcribe pero sin timestamps precisos por palabra. WhisperX añade alineación forzada, lo que permite asignar segmentos a hablantes con precisión real.",
  },
  {
    title: "yt-dlp para fuentes externas",
    trade: "Integración de YouTube vs solo archivos locales",
    why: "Limitar la entrada a archivos locales reduce enormemente la utilidad práctica. yt-dlp permite procesar cualquier vídeo o audio público sin intervención manual de descarga.",
  },
  {
    title: "Streamlit como interfaz",
    trade: "UI rápida vs API REST",
    why: "AudioSmart es el predecesor de MeetingAgent. En esa fase, el objetivo era validar el pipeline con usuarios reales sin invertir en frontend. Streamlit permite iterar en días, no semanas.",
  },
  {
    title: "General-purpose vs dominio específico",
    trade: "Flexibilidad vs especialización",
    why: "A diferencia de MeetingAgent (reuniones), AudioSmart procesa cualquier tipo de audio. Esta decisión hizo más difícil optimizar el prompt del LLM, pero amplió el rango de casos de uso validables.",
  },
];

const RESULTS = [
  "Transcripción completa con timestamps y separación de hablantes.",
  "Resumen estructurado y puntos clave generados por LLM local.",
  "Procesamiento 100% local: coste de API cero, datos sin salir del entorno.",
  "Soporte para YouTube y archivos locales desde una misma interfaz.",
];

export default function AudioSmartPage() {
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
                Audio Pipeline
              </span>
            </div>

            <h1
              className="font-semibold tracking-tight text-ink-100 leading-[1.02] mb-5"
              style={{ fontSize: "clamp(2.4rem, 5vw + 1rem, 4.2rem)" }}
            >
              AudioSmart
            </h1>

            <p className="text-ink-400 text-lg leading-relaxed max-w-2xl mb-7">
              Pipeline de análisis de audio general-purpose. 100% local con WhisperX + Mistral 7B.
              Procesa desde YouTube o archivo y devuelve transcripción con hablantes, resumen y
              puntos clave — sin coste de API, sin datos externos.
            </p>

            <div className="mb-5">
              <p className="text-[11px] font-mono text-ink-600 px-3 py-2 rounded-[10px] border border-ink-800/40 bg-ink-950/40 inline-block">
                Predecesor de MeetingAgent — pipeline de audio general-purpose, sin restricción a reuniones
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 mb-8">
              {["Python", "WhisperX", "Mistral 7B", "Ollama", "Streamlit", "yt-dlp"].map((s) => (
                <span
                  key={s}
                  className="text-[11px] font-mono px-2.5 py-1 rounded-full border border-ink-800/60 text-ink-400 bg-ink-950/50"
                >
                  {s}
                </span>
              ))}
            </div>

            <a
              href="https://github.com/Izanvz/AudioSmart"
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
              Pipeline local de análisis de audio
            </h2>
            <p className="text-ink-400 leading-relaxed text-base md:text-lg max-w-2xl">
              AudioSmart procesa cualquier fuente de audio — YouTube o archivo local — y devuelve
              una transcripción completa con separación de hablantes, resumen y puntos clave generados
              por un LLM local. Todo el procesamiento ocurre en la máquina del usuario, sin coste de API
              y sin enviar datos a servicios externos.
            </p>
          </section>

          {/* 02 — Problema */}
          <section className="mb-16 border-t border-ink-800/40 pt-12">
            <p className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-amber mb-4">
              <span className="block w-4 h-px bg-amber/60" />
              02 — Problema
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink-100 mb-6">
              Analizar audio manualmente es lento y caro
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { title: "Tiempo real de escucha", desc: "Escuchar un audio de 1h para extraer información clave requiere 1h mínimo. No existe atajos manuales." },
                { title: "APIs de pago", desc: "Los servicios de transcripción en la nube cobran por minuto de audio. A escala, el coste se dispara." },
                { title: "Sin contexto de hablantes", desc: "Las transcripciones estándar no distinguen quién habla. El contexto conversacional se pierde." },
                { title: "Datos sensibles", desc: "Enviar audio a APIs externas puede exponer contenido privado. No siempre es una opción viable." },
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
              Pipeline de 7 etapas: fuente de audio → análisis completo
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
              Análisis de audio local completo
            </h2>

            <div className="grid sm:grid-cols-3 gap-3 mb-8">
              {[
                { value: "YouTube / archivo", label: "fuente" },
                { value: "0 €", label: "coste de API" },
                { value: "transcripción + resumen", label: "output" },
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
