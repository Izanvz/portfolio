"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";

// ─── Graph background ────────────────────────────────────────────────────────

interface GNode {
  x: number; y: number;
  vx: number; vy: number;
  r: number; phase: number; speed: number;
}

function GraphBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId: number;
    let nodes: GNode[] = [];

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const init = () => {
      resize();
      const count = Math.min(28, Math.floor((canvas.width * canvas.height) / 22000));
      nodes = Array.from({ length: count }, () => ({
        x:     Math.random() * canvas.width,
        y:     Math.random() * canvas.height,
        vx:    (Math.random() - 0.5) * 0.28,
        vy:    (Math.random() - 0.5) * 0.28,
        r:     Math.random() * 1.4 + 0.8,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.4 + 0.25,
      }));
    };

    // ≈ oklch(75% 0.108 170) — mint accent
    const MINT: [number, number, number] = [120, 210, 170];
    const MAX_DIST = 155;

    const tick = (t: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width)  n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      }

      // connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d >= MAX_DIST) continue;

          const base  = (1 - d / MAX_DIST) * 0.13;
          const pulse = Math.sin(t * 0.0008 * nodes[i].speed + nodes[i].phase) * 0.5 + 0.5;
          ctx.strokeStyle = `rgba(${MINT[0]},${MINT[1]},${MINT[2]},${base * (0.5 + pulse * 0.5)})`;
          ctx.lineWidth   = 0.5;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }

      // nodes
      for (const n of nodes) {
        const breathe   = Math.sin(t * 0.001 * n.speed + n.phase) * 0.5 + 0.5;
        const nodeAlpha = 0.15 + breathe * 0.22;
        const glowAlpha = breathe * 0.07;

        const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 7);
        grd.addColorStop(0, `rgba(${MINT[0]},${MINT[1]},${MINT[2]},${glowAlpha})`);
        grd.addColorStop(1, `rgba(${MINT[0]},${MINT[1]},${MINT[2]},0)`);
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 7, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(${MINT[0]},${MINT[1]},${MINT[2]},${nodeAlpha})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      rafId = requestAnimationFrame(tick);
    };

    init();
    rafId = requestAnimationFrame(tick);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    return () => { cancelAnimationFrame(rafId); ro.disconnect(); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.55 }}
    />
  );
}

// ─── Streaming headline ───────────────────────────────────────────────────────

const PARTS = [
  { text: "Construyo agentes",       cls: "text-ink-50"  },
  { text: "\nde IA que automatizan", cls: "text-ink-300" },
  { text: "\ntrabajo real",          cls: "text-amber"   },
] as const;

const FLAT = PARTS.map(p => p.text).join("");
const MS_PER_CHAR = 36;
const START_DELAY  = 400; // ms after mount before streaming begins

function StreamingHeadline({ skip, onDone }: { skip: boolean; onDone: () => void }) {
  const [count, setCount]               = useState(skip ? FLAT.length : 0);
  const [cursorVisible, setCursorVisible] = useState(!skip);
  const doneRef = useRef(false);
  const cbRef   = useRef(onDone);
  cbRef.current = onDone;

  useEffect(() => {
    if (skip) { cbRef.current(); return; }

    const origin = performance.now() + START_DELAY;
    let rafId: number;

    const tick = (now: number) => {
      const c = Math.min(FLAT.length, Math.floor(Math.max(0, now - origin) / MS_PER_CHAR));
      setCount(c);
      if (c < FLAT.length) {
        rafId = requestAnimationFrame(tick);
      } else if (!doneRef.current) {
        doneRef.current = true;
        setTimeout(() => { setCursorVisible(false); cbRef.current(); }, 280);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [skip]);

  let rem = count;
  const rendered = PARTS.map((part, i) => {
    if (rem <= 0) return null;
    const visible = part.text.slice(0, rem);
    rem -= part.text.length;
    return visible.split("\n").map((line, li) => (
      <span key={`${i}-${li}`}>
        {li > 0 && <br />}
        <span className={part.cls}>{line}</span>
      </span>
    ));
  });

  return (
    <>
      {rendered}
      {cursorVisible && (
        <span
          aria-hidden="true"
          className="inline-block w-[3px] h-[0.82em] bg-amber align-middle ml-1 animate-pulse"
        />
      )}
    </>
  );
}

// ─── Pipeline panel ───────────────────────────────────────────────────────────

const PIPELINE_LINES = [
  { text: "$ meeting-agent --input reunion.mp3",  cls: "text-amber"    },
  { text: "",                                      cls: ""              },
  { text: "▶  WhisperX        transcribiendo...", cls: "text-ink-300", ok: true },
  { text: "▶  LangGraph        procesando nodos", cls: "text-ink-300", ok: true },
  { text: "   ├─ SQLite    →  historial guardado", cls: "text-ink-500" },
  { text: "   └─ ChromaDB  →  indexado semántico", cls: "text-ink-500" },
  { text: "▶  FastAPI          sirviendo result.", cls: "text-ink-300", ok: true },
  { text: "",                                      cls: ""              },
  { text: "──────────────────────────────────────", cls: "text-ink-800" },
  { text: "resumen      →  3 decisiones clave",   cls: "text-amber/80" },
  { text: "action items →  5 tareas asignadas",   cls: "text-amber/80" },
  { text: "tiempo: 1m 47s  ·  coste API: 0 €",   cls: "text-ink-600"  },
];

function PipelinePanel() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-[34px] bg-[radial-gradient(circle,oklch(75%_0.108_170_/_0.14),transparent_72%)] blur-2xl" />
      <div className="relative p-px rounded-[30px] bg-gradient-to-b from-amber/40 via-ink-700/70 to-transparent transition-all duration-300 group-hover/panel:from-amber/60 group-hover/panel:shadow-[0_0_40px_oklch(75%_0.108_170_/_0.12)]">
        <div className="rounded-[29px] bg-ink-925 overflow-hidden shadow-[0_0_60px_oklch(75%_0.108_170_/_0.12),inset_0_1px_0_rgba(255,255,255,0.05)]">
          <div className="flex items-center gap-2 px-5 py-4 border-b border-ink-800/50 bg-[linear-gradient(90deg,oklch(10%_0.01_240),oklch(12%_0.02_190_/_0.82))]">
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-error/75" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/75" />
              <span className="w-3 h-3 rounded-full bg-success/75" />
            </div>
            <span className="mx-auto text-[12px] text-ink-500 tracking-wide font-mono">
              meeting-agent v1.0
            </span>
          </div>
          <div className="p-6 md:p-7 bg-[linear-gradient(180deg,oklch(8.8%_0.008_244),oklch(7.5%_0.007_244))]">
            <div className="rounded-[22px] border border-ink-800/60 bg-ink-950/90 p-5">
              <div className="font-mono text-[12px] leading-relaxed space-y-1">
                {PIPELINE_LINES.map((line, i) =>
                  line.text === "" ? (
                    <div key={i} className="pipeline-line h-2" style={{ animationDelay: `${0.5 + i * 0.13}s` }} />
                  ) : (
                    <div
                      key={i}
                      className={`pipeline-line flex items-center justify-between gap-3 ${line.cls}`}
                      style={{ animationDelay: `${0.5 + i * 0.13}s` }}
                    >
                      <span>{line.text}</span>
                      {line.ok && <span className="text-emerald-400 flex-shrink-0 text-[11px]">✓</span>}
                    </div>
                  )
                )}
                <div
                  className="pipeline-line flex items-center gap-1 pt-1"
                  style={{ animationDelay: `${0.5 + PIPELINE_LINES.length * 0.13}s` }}
                >
                  <span className="text-ink-600">$ </span>
                  <span className="inline-block w-[7px] h-[14px] bg-amber/60 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

export default function Hero() {
  const reduce  = useReducedMotion();
  const rootRef = useRef<HTMLElement>(null);
  const [badgeVisible, setBadgeVisible] = useState(false);

  useEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      // — Entrance animations —
      gsap.set(
        ["[data-hero='name']", "[data-hero='desc']", "[data-hero='stack']", "[data-hero='cta']", "[data-hero='panel']"],
        { opacity: 0, y: 24, filter: "blur(12px)" }
      );
      gsap.set("[data-hero='panel']", { x: 28 });

      gsap.timeline({ defaults: { ease: "power3.out" } })
        .to("[data-hero='name']",  { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.5 })
        .to("[data-hero='desc']",  { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.55 }, 1.62)
        .to("[data-hero='stack']", { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.5  }, 1.74)
        .to("[data-hero='cta']",   { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.5  }, 1.86)
        .to("[data-hero='panel']", { opacity: 1, x: 0, y: 0, filter: "blur(0px)", duration: 0.8 }, 1.62);

      if (!reduce) {
        // — Parallax on scroll: bg lags behind, panel slightly —
        gsap.to("[data-parallax='bg']", {
          y: "28%",
          ease: "none",
          scrollTrigger: { trigger: rootRef.current, start: "top top", end: "bottom top", scrub: 0.6 },
        });
        gsap.to("[data-parallax='panel']", {
          y: "10%",
          ease: "none",
          scrollTrigger: { trigger: rootRef.current, start: "top top", end: "bottom top", scrub: 0.6 },
        });
      }
    }, rootRef);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <header
      ref={rootRef}
      id="main-content"
      className="relative min-h-[100dvh] flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Animated graph background */}
      {!reduce && <GraphBackground />}

      {/* Static bg decorations */}
      <div data-parallax="bg" className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-48 -left-52 w-[760px] h-[760px] rounded-full bg-amber/[0.06] blur-[170px]" />
        <div className="absolute -bottom-52 -right-44 w-[620px] h-[620px] rounded-full bg-[oklch(32%_0.03_205_/_0.16)] blur-[170px]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,oklch(78%_0.006_220_/_0.12)_1px,transparent_1px),linear-gradient(to_bottom,oklch(78%_0.006_220_/_0.12)_1px,transparent_1px)] [background-size:58px_58px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_28%,oklch(7.2%_0.007_244)_82%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 w-full">
        <div className="grid lg:grid-cols-[1fr_460px] gap-10 xl:gap-16 items-center">
          <div>
            <div data-hero="name" className="mb-6">
              <p className="text-2xl md:text-3xl font-semibold tracking-tight text-ink-100">
                Izan Villarejo
              </p>
              <p className="font-mono text-[11px] text-amber uppercase tracking-[0.16em] mt-1.5">
                Backend &amp; AI Engineer
              </p>
            </div>

            <h1
              className="font-semibold leading-[1.02] tracking-tight"
              style={{ fontSize: "clamp(2.6rem, 5.5vw + 1rem, 5rem)" }}
            >
              <StreamingHeadline skip={!!reduce} onDone={() => setBadgeVisible(true)} />
            </h1>

            {/* Badge aparece al terminar el streaming */}
            <div
              className="mt-6 transition-all duration-700"
              style={{
                opacity:   badgeVisible ? 1 : 0,
                transform: badgeVisible ? "translateY(0)" : "translateY(10px)",
              }}
            >
              <span className="inline-flex items-center gap-2 text-xs text-ink-200 border border-amber/18 bg-[linear-gradient(90deg,oklch(11.5%_0.009_240_/_0.9),oklch(13.5%_0.028_190_/_0.72))] px-3 py-1.5 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber" />
                </span>
                Disponible · España remoto · Gandía, Valencia híbrido o presencial
              </span>
            </div>

            <p
              data-hero="desc"
              className="mt-5 text-ink-400 leading-relaxed max-w-[42ch] text-base md:text-lg"
            >
              Desde pipelines backend hasta sistemas autónomos con LLMs, diseñados para producción y no para demos.
            </p>

            <p
              data-hero="stack"
              className="mt-4 font-mono text-[12px] text-ink-500 tracking-wide"
            >
              Python · FastAPI · LangGraph · Ollama · LLMs locales · Docker · APIs
            </p>

            <div data-hero="cta" className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 bg-amber text-ink-950 px-6 py-3 rounded-full font-medium shadow-[0_18px_50px_oklch(75%_0.108_170_/_0.16)] hover:bg-amber-bright transition-colors"
              >
                Ver proyectos
                <span className="w-6 h-6 rounded-full bg-ink-950/15 flex items-center justify-center text-sm group-hover:translate-x-0.5 group-hover:-translate-y-px transition-transform">
                  →
                </span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-ink-700/60 text-ink-300 hover:border-amber/30 hover:text-ink-100 hover:bg-ink-900/50 transition-all"
              >
                Contactar
              </a>
            </div>
          </div>

          <div data-hero="panel" data-parallax="panel" className="hidden lg:block">
            <a
              href="https://meeting-agent-web.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block group/panel"
              aria-label="Ver demo de MeetingAgent"
            >
              <PipelinePanel />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
