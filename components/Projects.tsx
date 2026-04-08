"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import Section from "@/components/Section";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Metric = { value: string; label: string };
type Project = {
  title: string;
  desc: string;
  stack: string[];
  metrics: Metric[];
  href: string;
  category: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "MeetingAgent",
    desc: "Problema: las reuniones se pierden. Solución: pipeline local que las convierte en texto, resumen y tareas accionables en menos de 2 minutos. Agente local-first con Whisper, LangGraph y LLMs — historial en SQLite + ChromaDB, API y búsqueda semántica.",
    stack: ["Python", "FastAPI", "LangGraph", "Whisper", "ChromaDB", "Docker"],
    metrics: [
      { value: "< 2 min", label: "tiempo por reunión" },
      { value: "0 €", label: "coste de API" },
      { value: "local-first", label: "modo" },
    ],
    href: "https://github.com/Izanvz/MeetingAgent",
    category: "LLM System",
    featured: true,
  },
  {
    title: "Sift",
    desc: "Problema: la investigación profunda lleva horas. Solución: agente autónomo que descompone, busca y sintetiza en minutos con autocrítica integrada. LangGraph con búsquedas paralelas (web, RAG, arXiv) y checkpoint humano antes de la entrega.",
    stack: ["Python", "LangGraph", "FastAPI", "ChromaDB", "Ollama"],
    metrics: [
      { value: "~10×", label: "reducción de tiempo" },
      { value: "web + RAG + arXiv", label: "fuentes" },
      { value: "3 bucles", label: "auto-crítica" },
    ],
    href: "https://github.com/Izanvz/Sift",
    category: "LLM Agent",
  },
  {
    title: "VisuCheck",
    desc: "Problema: auditar lineales de retail requiere inspección manual. Solución: pipeline de visión que devuelve JSON estructurado con imagen anotada. YOLOv8 para detección, PaddleOCR para texto, FastAPI para la API.",
    stack: ["Python", "YOLOv8", "PaddleOCR", "FastAPI", "Streamlit"],
    metrics: [
      { value: "imagen retail", label: "input" },
      { value: "JSON + anotada", label: "output" },
      { value: "0", label: "revisión manual" },
    ],
    href: "https://github.com/Izanvz/VisuCheck",
    category: "Computer Vision",
  },
  {
    title: "AudioSmart",
    desc: "Problema: analizar audio manualmente es lento y caro. Solución: pipeline 100% local con WhisperX + LLM que procesa desde YouTube o archivo. Predecesor de MeetingAgent — análisis de audio general-purpose, sin restricción a reuniones.",
    stack: ["Python", "WhisperX", "Mistral 7B", "Streamlit", "yt-dlp"],
    metrics: [
      { value: "YouTube / archivo", label: "fuente" },
      { value: "0 €", label: "coste de API" },
      { value: "transcripción + resumen", label: "output" },
    ],
    href: "https://github.com/Izanvz/AudioSmart",
    category: "Audio Pipeline",
  },
];

function ProjectCard({ project, large = false, compact = false }: { project: Project; large?: boolean; compact?: boolean }) {
  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.3, ease: EASE }}
      className="group block h-full p-px rounded-[26px] bg-gradient-to-b from-ink-700/55 to-transparent hover:from-amber/25 transition-all duration-500"
    >
      <div className="h-full rounded-[25px] bg-ink-925 overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_0_50px_oklch(75%_0.108_170_/_0.09)] transition-shadow duration-500">
        <div
          className={`h-px w-full transition-colors duration-300 ${
            project.featured ? "bg-amber" : "bg-ink-700 group-hover:bg-amber/50"
          }`}
        />

        <div className={large ? "p-8 md:p-9" : compact ? "p-5" : "p-6 md:p-7"}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-amber/10 text-amber border border-amber/20">
                  {project.category}
                </span>
                {project.featured && (
                  <>
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
                  </>
                )}
              </div>
              <h3
                className={`mt-2 font-semibold tracking-tight text-ink-100 ${
                  large ? "text-2xl md:text-[2rem]" : compact ? "text-base md:text-lg" : "text-xl md:text-[1.65rem]"
                }`}
              >
                {project.title}
              </h3>
            </div>
            <span className="text-ink-600 group-hover:text-amber transition-colors flex-shrink-0 text-lg mt-1">↗</span>
          </div>

          <p
            className={`mt-3 text-ink-400 leading-relaxed ${
              large ? "text-base max-w-2xl" : compact ? "text-[13px] max-w-sm" : "text-[15px] max-w-xl"
            }`}
          >
            {project.desc}
          </p>

          <div className={`flex flex-wrap gap-6 ${large ? "mt-6" : compact ? "mt-3.5" : "mt-5"}`}>
            {project.metrics.map((m) => (
              <div key={m.label}>
                <p
                  className={`font-mono text-amber font-semibold ${
                    large ? "text-2xl" : compact ? "text-lg" : "text-xl md:text-[1.55rem]"
                  }`}
                >
                  {m.value}
                </p>
                <p className="font-mono text-ink-600 text-[10px] uppercase tracking-widest mt-0.5">{m.label}</p>
              </div>
            ))}
          </div>

          <div className={`flex flex-wrap gap-1.5 ${large ? "mt-7" : compact ? "mt-4" : "mt-6"}`}>
            {(large ? project.stack : compact ? project.stack.slice(0, 2) : project.stack.slice(0, 4)).map((s) => (
              <span key={s} className="text-[11px] font-mono px-2.5 py-1 rounded-full border border-ink-800/60 text-ink-400 bg-ink-950/50">
                {s}
              </span>
            ))}
            {!large && project.stack.length > (compact ? 2 : 4) && (
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-full border border-ink-800/60 text-ink-600">
                +{project.stack.length - (compact ? 2 : 4)}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  const [meetingAgent, sift, visuCheck, audioSmart] = projects;

  return (
    <Section
      id="projects"
      eyebrow="Proyectos"
      title="Sistemas con IA aplicada"
      subtitle="Proyectos donde la IA no se queda en el modelo: entra en el backend, la persistencia y el flujo real de producto."
    >
      <div className="grid gap-4 md:grid-cols-[1.65fr_0.95fr]">
        <div>
          <FadeIn>
            <ProjectCard project={meetingAgent} large />
          </FadeIn>
        </div>

        <div>
          <FadeIn delay={0.06}>
            <ProjectCard project={sift} compact />
          </FadeIn>
        </div>

        <div className="md:col-span-2 grid gap-4 md:grid-cols-2">
          <FadeIn delay={0.1}>
            <ProjectCard project={visuCheck} />
          </FadeIn>
          <FadeIn delay={0.14}>
            <ProjectCard project={audioSmart} />
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
