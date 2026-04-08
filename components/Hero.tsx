"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";

const PIPELINE_LINES = [
  { text: "$ meeting-agent --input reunion.mp3", cls: "text-amber" },
  { text: "", cls: "" },
  { text: "▶  WhisperX        transcribiendo...", cls: "text-ink-300", ok: true },
  { text: "▶  LangGraph        procesando nodos", cls: "text-ink-300", ok: true },
  { text: "   ├─ SQLite    →  historial guardado", cls: "text-ink-500" },
  { text: "   └─ ChromaDB  →  indexado semántico", cls: "text-ink-500" },
  { text: "▶  FastAPI          sirviendo result.", cls: "text-ink-300", ok: true },
  { text: "", cls: "" },
  { text: "──────────────────────────────────────", cls: "text-ink-800" },
  { text: "resumen      →  3 decisiones clave", cls: "text-amber/80" },
  { text: "action items →  5 tareas asignadas", cls: "text-amber/80" },
  { text: "tiempo: 1m 47s  ·  coste API: 0 €", cls: "text-ink-600" },
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
              <span className="mx-auto text-[12px] text-ink-500 tracking-wide font-mono">meeting-agent v1.0</span>
            </div>

            <div className="p-6 md:p-7 bg-[linear-gradient(180deg,oklch(8.8%_0.008_244),oklch(7.5%_0.007_244))]">
              <div className="rounded-[22px] border border-ink-800/60 bg-ink-950/90 p-5">
                <div className="font-mono text-[12px] leading-relaxed space-y-1">
                  {PIPELINE_LINES.map((line, i) =>
                    line.text === "" ? (
                      <div
                        key={i}
                        className="pipeline-line h-2"
                        style={{ animationDelay: `${0.5 + i * 0.13}s` }}
                      />
                    ) : (
                      <div
                        key={i}
                        className={`pipeline-line flex items-center justify-between gap-3 ${line.cls}`}
                        style={{ animationDelay: `${0.5 + i * 0.13}s` }}
                      >
                        <span>{line.text}</span>
                        {line.ok && (
                          <span className="text-emerald-400 flex-shrink-0 text-[11px]">✓</span>
                        )}
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

export default function Hero() {
  const reduce = useReducedMotion();
  const rootRef = useRef<HTMLElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current || reduce) return;

    const ctx = gsap.context(() => {
      gsap.set(
        [
          "[data-hero='badge']",
          "[data-hero='title']",
          "[data-hero='role']",
          "[data-hero='desc']",
          "[data-hero='cta']",
          "[data-hero='panel']",
        ],
        { opacity: 0, y: 24, filter: "blur(12px)" }
      );

      gsap.set("[data-hero='panel']", { x: 28 });

      gsap.timeline({ defaults: { ease: "power3.out" } })
        .to("[data-hero='title']", { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.78 })
        .to("[data-hero='role']", { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.55 }, "-=0.44")
        .to("[data-hero='badge']", { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.55 }, "-=0.18")
        .to("[data-hero='desc']", { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.55 }, "-=0.36")
        .to("[data-hero='cta']", { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.5 }, "-=0.32")
        .to("[data-hero='panel']", { opacity: 1, x: 0, y: 0, filter: "blur(0px)", duration: 0.8 }, "-=0.44");
    }, rootRef);

    const root = rootRef.current;
    const spotlight = spotlightRef.current;

    if (root && spotlight) {
      const moveX = gsap.quickTo(spotlight, "x", { duration: 0.35, ease: "power3.out" });
      const moveY = gsap.quickTo(spotlight, "y", { duration: 0.35, ease: "power3.out" });

      const onMove = (event: MouseEvent) => {
        const bounds = root.getBoundingClientRect();
        moveX(event.clientX - bounds.left - bounds.width * 0.5);
        moveY(event.clientY - bounds.top - bounds.height * 0.5);
      };

      root.addEventListener("mousemove", onMove);

      return () => {
        root.removeEventListener("mousemove", onMove);
        ctx.revert();
      };
    }

    return () => ctx.revert();
  }, [reduce]);

  return (
    <header
      ref={rootRef}
      id="main-content"
      className="relative min-h-[100dvh] flex items-center pt-24 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-48 -left-52 w-[760px] h-[760px] rounded-full bg-amber/[0.06] blur-[170px]" />
        <div className="absolute -bottom-52 -right-44 w-[620px] h-[620px] rounded-full bg-[oklch(32%_0.03_205_/_0.16)] blur-[170px]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,oklch(78%_0.006_220_/_0.12)_1px,transparent_1px),linear-gradient(to_bottom,oklch(78%_0.006_220_/_0.12)_1px,transparent_1px)] [background-size:58px_58px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_28%,oklch(7.2%_0.007_244)_82%)]" />
        <div
          ref={spotlightRef}
          className="hidden md:block absolute left-1/2 top-1/2 w-[440px] h-[440px] rounded-full bg-[radial-gradient(circle,oklch(74%_0.108_170_/_0.18),transparent_64%)] blur-[90px]"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 w-full">
        <div className="grid lg:grid-cols-[1fr_460px] gap-10 xl:gap-16 items-center">
          <div>
            <h1
              data-hero="title"
              className="font-semibold leading-[0.98] tracking-tight text-ink-50"
              style={{ fontSize: "clamp(3.35rem, 7vw + 1rem, 5.8rem)" }}
            >
              Izan
              <br />
              <span className="text-ink-300">Villarejo</span>
            </h1>

            <p
              data-hero="role"
              className="mt-4 text-xl md:text-2xl text-amber font-medium tracking-tight"
            >
              AI Engineer · Backend Developer
            </p>

            <div data-hero="badge" className="mt-5">
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
              Implemento IA en cualquier entorno que lo necesite. Automatizo lo que se hace a mano, optimizo lo que ya funciona y desarrollo el código a medida. ¿Local o nube? Yo me adapto.
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
                href="https://github.com/Izanvz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-ink-700/60 text-ink-300 hover:border-amber/30 hover:text-ink-100 hover:bg-ink-900/50 transition-all"
              >
                GitHub ↗
              </a>
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-ink-700/60 text-ink-400 hover:border-amber/30 hover:text-ink-100 transition-all text-sm"
              >
                CV ↓
              </a>
            </div>

          </div>

          <div data-hero="panel" className="hidden lg:block">
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
