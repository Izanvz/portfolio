"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  distance = 20,
  blur = 6,
}: {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  blur?: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion || !ref.current) return;

    const offset =
      direction === "up" ? { y: distance } :
      direction === "down" ? { y: -distance } :
      direction === "left" ? { x: distance } :
      direction === "right" ? { x: -distance } :
      {};

    const element = ref.current;
    const tween = gsap.fromTo(
      element,
      {
        opacity: 0,
        filter: `blur(${blur}px)`,
        ...offset,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        filter: "blur(0px)",
        duration: 0.82,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top bottom-=72",
          once: true,
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [blur, delay, direction, distance, prefersReducedMotion]);

  return <div ref={ref}>{children}</div>;
}
