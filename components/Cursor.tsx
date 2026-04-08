"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    let mouseX = -100, mouseY = -100;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const tick = () => {
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      raf = requestAnimationFrame(tick);
    };

    const onEnter = () => dot.classList.add("cursor-dot--hover");
    const onLeave = () => dot.classList.remove("cursor-dot--hover");

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
    <div
      ref={dotRef}
      className="cursor-dot fixed top-0 left-0 z-[99999] pointer-events-none -translate-x-1/2 -translate-y-1/2"
      aria-hidden="true"
    />
  );
}
