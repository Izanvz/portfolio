"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import Section from "@/components/Section";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const MotionLink = motion(Link);

type Metric = { value: string; label: string };
type Project = {
  title: string;
  desc: string;
  stack: string[];
  metrics: Metric[];
  href: string;
  slug?: string;
  category: string;
  featured?: boolean;
  wip?: boolean;
};

const projects: Project[] = [
  {
    title: "MeetingAgent",
    desc: "Pipeline local que convierte audio de reuniones en resumen, decisiones y tareas accionables en menos de 2 minutos. Coste de API: 0 €.",
    stack: ["Python", "FastAPI", "LangGraph", "Whisper", "ChromaDB", "Docker"],
    metrics: [
      { value: "< 2 min", label: "tiempo por reunión" },
      { value: "0 €", label: "coste de API" },
      { value: "local-first", label: "modo" },
    ],
    href: "https://github.com/Izanvz/MeetingAgent",
    slug: "meetingagent",
    category: "LLM System",
    featured: true,
  },
  {
    title: "Sift",
    desc: "Agente que descompone consultas complejas, busca en paralelo en web + RAG + arXiv, sintetiza y se auto-critica — con checkpoint humano antes del resultado final.",
    stack: ["Python", "LangGraph", "FastAPI", "ChromaDB", "Ollama"],
    metrics: [
      { value: "12 nodos", label: "grafo LangGraph" },
      { value: "3 fuentes", label: "web · RAG · arXiv" },
      { value: "human-in-loop", label: "checkpoint" },
    ],
    href: "https://github.com/Izanvz/Sift",
    slug: "sift",
    category: "LLM Agent",
    wip: true,
  },
  {
    title: "VisuCheck",
    desc: "Pipeline de visión que detecta productos y huecos en lineales de retail. Devuelve JSON estructurado e imagen anotada — sin revisión manual.",
    stack: ["Python", "YOLOv8", "PaddleOCR", "FastAPI", "Streamlit"],
    metrics: [
      { value: "imagen retail", label: "input" },
      { value: "JSON + anotada", label: "output" },
      { value: "0 h", label: "revisión manual" },
    ],
    href: "https://github.com/Izanvz/VisuCheck",
    slug: "visucheck",
    category: "Computer Vision",
  },
  {
    title: "AudioSmart",
    desc: "Pipeline 100% local: WhisperX + LLM que transcribe, diariza y resume cualquier audio desde YouTube o archivo. Predecesor de MeetingAgent.",
    stack: ["Python", "WhisperX", "Mistral 7B", "Streamlit", "yt-dlp"],
    metrics: [
      { value: "YouTube / archivo", label: "fuente" },
      { value: "0 €", label: "coste de API" },
      { value: "transcripción + resumen", label: "output" },
    ],
    href: "https://github.com/Izanvz/AudioSmart",
    slug: "audiosmart",
    category: "Audio Pipeline",
  },
];

function ProjectCard({ project, large = false, compact = false }: { project: Project; large?: boolean; compact?: boolean }) {
  const cardClass = "group block h-full p-px rounded-[26px] bg-gradient-to-b from-ink-700/55 to-transparent hover:from-amber/25 transition-all duration-500";
  const motionProps = {
    whileHover: { y: -5 },
    whileTap: { scale: 0.99 },
    transition: { duration: 0.3, ease: EASE },
    className: cardClass,
  };

  const inner = (
    <>
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
                {project.wip && (
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2 py-0.5 rounded-md bg-amber/10 text-amber border border-amber/20">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber opacity-60" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber" />
                    </span>
                    en construcción
                  </span>
                )}
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

          <div className={`flex flex-wrap gap-2 ${large ? "mt-6" : compact ? "mt-3.5" : "mt-5"}`}>
            {project.metrics.map((m) => (
              <div key={m.label} className="rounded-[14px] border border-ink-700 bg-ink-950/60 px-3.5 py-2.5 flex flex-col gap-0.5">
                <p className={`font-mono text-amber font-semibold leading-none ${large ? "text-lg" : "text-base"}`}>
                  {m.value}
                </p>
                <p className="font-mono text-ink-600 text-[10px] uppercase tracking-widest">{m.label}</p>
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
    </>
  );

  if (project.slug) {
    return (
      <MotionLink href={`/projects/${project.slug}`} {...motionProps}>
        {inner}
      </MotionLink>
    );
  }

  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      {...motionProps}
    >
      {inner}
    </motion.a>
  );
}

export default function Projects() {
  const [meetingAgent, sift, visuCheck, audioSmart] = projects;

  return (
    <Section
      id="projects"
      index={1}
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
