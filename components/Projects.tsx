"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Link from "next/link";
import Section from "@/components/Section";

// ─── Types ────────────────────────────────────────────────────────────────────

type Metric  = { value: string; label: string };
type Project = {
  title: string; desc: string; stack: string[];
  metrics: Metric[]; href: string; slug?: string;
  category: string; featured?: boolean; wip?: boolean;
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const MotionLink = motion(Link);

// ─── Data ─────────────────────────────────────────────────────────────────────

const projects: Project[] = [
  {
    title: "MeetingAgent",
    desc: "Pipeline local que convierte audio de reuniones en resumen, decisiones y tareas accionables en menos de 2 minutos. Coste de API: 0 €.",
    stack: ["Python", "FastAPI", "LangGraph", "Whisper", "ChromaDB", "Docker"],
    metrics: [
      { value: "< 2 min", label: "tiempo por reunión" },
      { value: "0 €",     label: "coste de API"       },
      { value: "local-first", label: "modo"           },
    ],
    href: "https://github.com/Izanvz/MeetingAgent",
    slug: "meetingagent", category: "LLM System", featured: true,
  },
  {
    title: "Sift",
    desc: "Agente que descompone consultas complejas, busca en paralelo en web + RAG + arXiv, sintetiza y se auto-critica — con checkpoint humano antes del resultado final.",
    stack: ["Python", "LangGraph", "FastAPI", "ChromaDB", "Ollama"],
    metrics: [
      { value: "12 nodos",    label: "grafo LangGraph" },
      { value: "3 fuentes",   label: "web · RAG · arXiv" },
      { value: "human-in-loop", label: "checkpoint"    },
    ],
    href: "https://github.com/Izanvz/Sift",
    slug: "sift", category: "LLM Agent", wip: true,
  },
  {
    title: "VisuCheck",
    desc: "Pipeline de visión que detecta productos y huecos en lineales de retail. Devuelve JSON estructurado e imagen anotada — sin revisión manual.",
    stack: ["Python", "YOLOv8", "PaddleOCR", "FastAPI", "Streamlit"],
    metrics: [
      { value: "imagen retail",  label: "input"          },
      { value: "JSON + anotada", label: "output"         },
      { value: "0 h",            label: "revisión manual"},
    ],
    href: "https://github.com/Izanvz/VisuCheck",
    slug: "visucheck", category: "Computer Vision",
  },
  {
    title: "AudioSmart",
    desc: "Pipeline 100% local: WhisperX + LLM que transcribe, diariza y resume cualquier audio desde YouTube o archivo. Predecesor de MeetingAgent.",
    stack: ["Python", "WhisperX", "Mistral 7B", "Streamlit", "yt-dlp"],
    metrics: [
      { value: "YouTube / archivo",      label: "fuente"  },
      { value: "0 €",                    label: "coste de API" },
      { value: "transcripción + resumen",label: "output"  },
    ],
    href: "https://github.com/Izanvz/AudioSmart",
    slug: "audiosmart", category: "Audio Pipeline",
  },
];

// ─── CountAnimate ──────────────────────────────────────────────────────────────────

function parseMetric(value: string) {
  const m = value.match(/^(\D*?)(\d+(?:[.,]\d+)?)(.*)$/);
  if (!m) return { prefix: "", number: null, suffix: value };
  const [, prefix, num, suffix] = m;
  return { prefix, number: parseFloat(num.replace(",", ".")), suffix };
}

function CountAnimate({ target, active }: { target: number; active: boolean }) {
  // Números bajos (≤5): cuenta hacia atrás desde un valor alto → más impacto visual
  // Números altos (>5): cuenta hacia arriba desde 0 (comportamiento original)
  const countDown = target <= 5;
  const from      = countDown ? Math.max(target + 18, 20) : 0;

  const [val, setVal] = useState(() => countDown ? from : 0);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const ease  = (t: number) => 1 - Math.pow(1 - t, 3);
    const tick  = (now: number) => {
      const t = Math.min(1, (now - start) / 1600);
      setVal(countDown
        ? Math.round(from - (from - target) * ease(t))
        : Math.round(target * ease(t))
      );
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [active, target, from, countDown]);

  return <span style={{ fontVariantNumeric: "tabular-nums" }}>{val.toLocaleString("es-ES")}</span>;
}

// ─── ProjectCard ──────────────────────────────────────────────────────────────

function ProjectCard({
  project, large = false, compact = false, revealed = false,
}: {
  project: Project; large?: boolean; compact?: boolean; revealed?: boolean;
}) {
  const [hovered,    setHovered]    = useState(false);
  const [shimmerKey, setShimmerKey] = useState(0);

  const onEnter = useCallback(() => { setHovered(true);  setShimmerKey(k => k + 1); }, []);
  const onLeave = useCallback(() =>   setHovered(false), []);

  const motionProps = {
    whileHover: { y: -5 },
    whileTap:   { scale: 0.99 },
    transition: { duration: 0.35, ease: EASE },
    className:  "block h-full",
  };

  const inner = (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="h-full p-px rounded-[26px] transition-all duration-500"
      style={{
        background: hovered
          ? "linear-gradient(180deg,oklch(75% 0.108 170/0.55),oklch(75% 0.108 170/0.12) 45%,oklch(27% 0.013 234/0.4))"
          : "linear-gradient(180deg,oklch(27% 0.013 234/0.55),transparent)",
        boxShadow: hovered
          ? "0 0 40px oklch(75% 0.108 170/0.18), 0 22px 50px oklch(0% 0 0/0.3)"
          : "none",
      }}
    >
      <div className="relative h-full rounded-[25px] bg-ink-925 overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">

        {/* Top hairline */}
        <div
          className="h-px w-full transition-all duration-300"
          style={{
            background: project.featured
              ? "oklch(75% 0.108 170)"
              : hovered
                ? "oklch(75% 0.108 170/0.6)"
                : "oklch(27% 0.013 234)",
          }}
        />

        {/* Shimmer sweep */}
        <div
          key={shimmerKey}
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(180deg,transparent 0%,oklch(75% 0.108 170/0.07) 45%,oklch(75% 0.108 170/0.10) 50%,transparent 100%)",
            transform: "translateY(-100%)",
            mixBlendMode: "screen",
            animation: hovered && shimmerKey > 0
              ? "pc-shimmer 1.4s cubic-bezier(0.22,1,0.36,1) forwards"
              : "none",
          }}
        />

        {/* Content */}
        <div className={large ? "p-8 md:p-9" : compact ? "p-5" : "p-6 md:p-7"}>

          {/* Header */}
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
              <h3 className={`mt-2 font-semibold tracking-tight text-ink-100 ${
                large ? "text-2xl md:text-[2rem]" : compact ? "text-base md:text-lg" : "text-xl md:text-[1.65rem]"
              }`}>
                {project.title}
              </h3>
            </div>
            <span
              className="flex-shrink-0 text-lg mt-1 transition-all duration-300"
              style={{
                color:     hovered ? "oklch(75% 0.108 170)" : "oklch(36% 0.014 232)",
                transform: hovered ? "translate(2px,-2px)" : "none",
              }}
            >↗</span>
          </div>

          {/* Description */}
          <p className={`mt-3 text-ink-400 leading-relaxed ${
            large ? "text-base max-w-2xl" : compact ? "text-[13px] max-w-sm" : "text-[15px] max-w-xl"
          }`}>
            {project.desc}
          </p>

          {/* Metrics with CountAnimate */}
          <div className={`flex flex-wrap gap-2 ${large ? "mt-6" : compact ? "mt-3.5" : "mt-5"}`}>
            {project.metrics.map((m) => {
              const parsed = parseMetric(m.value);
              return (
                <div key={m.label} className="rounded-[14px] border border-ink-700 bg-ink-950/60 px-3.5 py-2.5 flex flex-col gap-0.5">
                  <p className={`font-mono text-amber font-semibold leading-none ${large ? "text-lg" : "text-base"}`}>
                    {parsed.number !== null ? (
                      <>{parsed.prefix}<CountAnimate target={parsed.number} active={revealed} />{parsed.suffix}</>
                    ) : (
                      m.value
                    )}
                  </p>
                  <p className="font-mono text-ink-600 text-[10px] uppercase tracking-widest">{m.label}</p>
                </div>
              );
            })}
          </div>

          {/* Stack */}
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

          {/* CTA oculto */}
          <div className={`flex justify-end ${compact ? "mt-3" : "mt-4"} h-8`}>
            <span
              className="inline-flex items-center gap-2 font-mono text-[11px] px-3.5 py-1.5 rounded-full border border-amber/35 text-amber transition-all duration-300"
              style={{
                backgroundColor: "oklch(75% 0.108 170/0.10)",
                opacity:         hovered ? 1 : 0,
                transform:       hovered ? "translateX(0)" : "translateX(-8px)",
                boxShadow:       hovered ? "0 0 12px oklch(75% 0.108 170/0.25)" : "none",
                pointerEvents:   hovered ? "auto" : "none",
              }}
            >
              Ver caso →
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  if (project.slug) {
    return (
      <MotionLink href={`/projects/${project.slug}`} data-project-card {...motionProps}>
        {inner}
      </MotionLink>
    );
  }

  return (
    <motion.a href={project.href} target="_blank" rel="noopener noreferrer" data-project-card {...motionProps}>
      {inner}
    </motion.a>
  );
}

// ─── Projects section ─────────────────────────────────────────────────────────

export default function Projects() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [revealedSet, setRevealedSet] = useState<Set<number>>(() => new Set());

  const [meetingAgent, sift, visuCheck, audioSmart] = projects;

  useEffect(() => {
    if (!gridRef.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const cards = gridRef.current.querySelectorAll("[data-project-card]");
    gsap.set(cards, { opacity: 0, y: 28, filter: "blur(12px)" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: gridRef.current,
        start: "top 82%",
        once: true,
      },
    });

    cards.forEach((card, i) => {
      tl.to(
        card,
        {
          opacity: 1, y: 0, filter: "blur(0px)",
          duration: 0.72, ease: "power3.out",
          onComplete: () =>
            setRevealedSet(prev => { const next = new Set(prev); next.add(i); return next; }),
        },
        i * 0.12
      );
    });

    return () => { tl.kill(); };
  }, []);

  return (
    <Section
      id="projects"
      index={1}
      eyebrow="Proyectos"
      title="Sistemas con IA aplicada"
      subtitle="Proyectos donde la IA no se queda en el modelo: entra en el backend, la persistencia y el flujo real de producto."
    >
      <div ref={gridRef} className="grid gap-4 md:grid-cols-[1.65fr_0.95fr]">
        <div>
          <ProjectCard project={meetingAgent} large revealed={revealedSet.has(0)} />
        </div>
        <div>
          <ProjectCard project={sift} compact revealed={revealedSet.has(1)} />
        </div>
        <div className="md:col-span-2 grid gap-4 md:grid-cols-2">
          <ProjectCard project={visuCheck} revealed={revealedSet.has(2)} />
          <ProjectCard project={audioSmart} revealed={revealedSet.has(3)} />
        </div>
      </div>
    </Section>
  );
}
