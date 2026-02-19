import type { ReactNode } from "react";

export default function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-24 md:py-32 border-t border-neutral-900/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
          {subtitle ? (
            <p className="mt-3 text-neutral-400 max-w-2xl">{subtitle}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
