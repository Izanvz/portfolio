import FadeIn from "@/components/FadeIn";

const metrics = [
  {
    value: "Backend + IA",
    label: "especialidad",
    note: "De pipelines a APIs listas para producción",
  },
  {
    value: "Python · FastAPI",
    label: "stack principal",
    note: "Backend, automatización e integración de modelos",
  },
  {
    value: "Whisper + LangGraph",
    label: "stack IA",
    note: "Transcripción, extracción y orquestación de flujos",
  },
  {
    value: "Gandía, Valencia",
    label: "disponibilidad",
    note: "Híbrido o presencial · España remoto",
  },
];

export default function ImpactMetrics() {
  return (
    <section aria-label="Resumen profesional" className="max-w-6xl mx-auto px-6 md:px-8 pb-4">
      <FadeIn direction="none" blur={4}>
        <div className="p-px rounded-[20px] bg-gradient-to-b from-ink-700/40 to-transparent">
          <div className="rounded-[19px] bg-ink-925 overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-ink-800/40">
              {metrics.map((m) => (
                <div key={m.label} className="px-7 py-7 hover:bg-ink-900/40 transition-colors group">
                  <p className="font-mono text-lg xl:text-[1.4rem] leading-[1.15] font-semibold text-amber tracking-tight group-hover:text-amber-bright transition-colors">
                    {m.value}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-500 mt-1.5">
                    {m.label}
                  </p>
                  <p className="text-xs text-ink-700 mt-1.5 group-hover:text-ink-600 transition-colors">
                    {m.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
