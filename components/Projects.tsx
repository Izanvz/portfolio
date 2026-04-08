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
    desc: "Agente local-first para analizar reuniones con Whisper, LangGraph y LLMs. Extrae resumen ejecutivo, decisiones y action items, guarda el historial en SQLite + ChromaDB y lo expone por API y dashboard web con búsqueda semántica.",
    stack: ["Python", "FastAPI", "LangGraph", "Whisper", "ChromaDB", "Docker"],
    metrics: [
      { value: "Whisper", label: "transcripción" },
      { value: "LangGraph", label: "orquestación" },
      { value: "SQLite + ChromaDB", label: "memoria" },
    ],
    href: "https://github.com/Izanvz/MeetingAgent",
    category: "LLM System",
    featured: true,
  },
  {
    title: "Sift",
    desc: "Agente autónomo de investigación con LangGraph. Descompone consultas en subtemas, ejecuta búsquedas paralelas (web, RAG, arXiv) y sintetiza un informe estructurado con bucles de autocrítica y checkpoint humano antes de la entrega final.",
    stack: ["Python", "LangGraph", "FastAPI", "ChromaDB", "Ollama"],
    metrics: [
      { value: "12 nodos", label: "grafo" },
      { value: "3 bucles", label: "refinamiento" },
      { value: "SSE", label: "streaming" },
    ],
    href: "https://github.com/Izanvz/Sift",
    category: "LLM Agent",
  },
  {
    title: "VisuCheck",
    desc: "Pipeline modular para analizar imágenes de retail, extraer texto, detectar precios y marcas, y devolver JSON estructurado junto a una imagen anotada con los resultados.",
    stack: ["Python", "YOLOv8", "PaddleOCR", "FastAPI", "Streamlit"],
    metrics: [
      { value: "YOLOv8", label: "detección" },
      { value: "PaddleOCR", label: "OCR" },
    ],
    href: "https://github.com/Izanvz/VisuCheck",
    category: "Computer Vision",
  },
  {
    title: "AudioSmart",
    desc: "Pipeline local para analizar audio desde YouTube o archivo, generar transcripción con timestamps, resumen en español, temas clave y reparto por hablantes sin usar APIs de pago.",
    stack: ["Python", "WhisperX", "Mistral 7B", "Streamlit", "yt-dlp"],
    metrics: [
      { value: "WhisperX", label: "transcripción" },
      { value: "Mistral 7B", label: "LLM local" },
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
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-ink-800/60 text-ink-400 border border-amber/15">
                    flagship
                  </span>
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
