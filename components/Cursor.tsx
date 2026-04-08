"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const tick = () => {
      // dot sigue inmediato
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;

      // ring sigue con lag
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;

      raf = requestAnimationFrame(tick);
    };

    // hover interactivo: agranda el ring
    const onEnter = () => ring.classList.add("cursor-ring--hover");
    const onLeave = () => ring.classList.remove("cursor-ring--hover");

    document.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button, [role='button']").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    raf = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* punto central */}
      <div
        ref={dotRef}
        className="cursor-dot fixed top-0 left-0 z-[99999] pointer-events-none -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      />
      {/* anillo con lag */}
      <div
        ref={ringRef}
        className="cursor-ring fixed top-0 left-0 z-[99998] pointer-events-none -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      />
    </>
  );
}
