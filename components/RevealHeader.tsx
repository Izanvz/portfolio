"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function RevealHeader({
  eyebrow, title, subtitle, index,
}: {
  eyebrow?: string; title: string; subtitle?: string; index?: number;
}) {
  const num    = index !== undefined ? String(index).padStart(2, "0") : null;
  const ref    = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !ref.current) return;

    const els = ref.current.querySelectorAll<HTMLElement>("[data-reveal]");
    gsap.set(els, { y: "108%", opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: { trigger: ref.current, start: "top 88%", once: true },
    });

    els.forEach((el, i) => {
      tl.to(el, { y: "0%", opacity: 1, duration: 0.75, ease: "power3.out" }, i * 0.1);
    });

    return () => { tl.kill(); };
  }, [reduce]);

  return (
    <div ref={ref} className="relative mb-14">
      {num && (
        <span
          aria-hidden="true"
          className="absolute -top-6 right-0 font-semibold leading-none select-none pointer-events-none text-ink-800/30"
          style={{ fontSize: "clamp(5rem, 14vw, 10rem)" }}
        >
          {num}
        </span>
      )}

      {eyebrow && (
        <div className="overflow-hidden mb-4">
          <p data-reveal className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-amber">
            <span className="block w-4 h-px bg-amber/60" />
            {eyebrow}
          </p>
        </div>
      )}

      <div className="overflow-hidden">
        <h2 data-reveal className="text-4xl md:text-5xl font-semibold tracking-tight text-ink-100">
          {title}
        </h2>
      </div>

      {subtitle && (
        <div className="overflow-hidden mt-4">
          <p data-reveal className="text-ink-400 max-w-2xl leading-relaxed text-base md:text-lg">
            {subtitle}
          </p>
        </div>
      )}
    </div>
  );
}
