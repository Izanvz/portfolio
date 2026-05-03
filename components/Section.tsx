import type { ReactNode } from "react";
import RevealHeader from "@/components/RevealHeader";

export default function Section({
  id, eyebrow, title, subtitle, index, children,
}: {
  id?: string; eyebrow?: string; title: string;
  subtitle?: string; index?: number; children: ReactNode;
}) {
  return (
    <section id={id} className="py-28 md:py-36 border-t border-ink-800/40">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <RevealHeader
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          index={index}
        />
        {children}
      </div>
    </section>
  );
}
