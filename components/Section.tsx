import type { ReactNode } from "react";
import FadeIn from "@/components/FadeIn";

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-28 md:py-36 border-t border-ink-800/40">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <FadeIn direction="none" blur={4} delay={0.05}>
          <div className="mb-14">
            {eyebrow && (
              <p className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-amber mb-4">
                <span className="block w-4 h-px bg-amber/60" />
                {eyebrow}
              </p>
            )}
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-ink-100">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-4 text-ink-400 max-w-2xl leading-relaxed text-base md:text-lg">
                {subtitle}
              </p>
            )}
          </div>
        </FadeIn>
        {children}
      </div>
    </section>
  );
}
