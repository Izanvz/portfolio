import FadeIn from "@/components/FadeIn";
import Section from "@/components/Section";

const projects = [
  {
    title: "AudioSmart",
    desc: "Pipeline avanzado para transcripción, diarización y análisis semántico, expuesto vía API.",
    bullets: ["FastAPI", "WhisperX (word timestamps)", "pyannote (speakers)", "keywords + resumen (LLM)"],
    href: "https://github.com/Izanvz/AudioSmart",
    tone: "from-blue-500/10",
  },
  {
    title: "VisuCheck",
    desc: "Visión por computador + OCR para detectar productos y precios en entornos retail.",
    bullets: ["YOLOv8", "OCR", "FastAPI", "SQL ligero"],
    href: "https://github.com/Izanvz/VisuCheck",
    tone: "from-emerald-500/10",
  },
  {
    title: "Aprendiendo-RL",
    desc: "DQN desde cero en PyTorch: replay buffer, target network y evaluación reproducible.",
    bullets: ["PyTorch", "Replay Buffer", "Target Network", "Entrenamiento estable"],
    href: "https://github.com/Izanvz/Aprendiendo-RL",
    tone: "from-fuchsia-500/10",
  },
  {
    title: "BTC-Pred",
    desc: "Predicción de series temporales con LSTM y pipeline reproducible de evaluación.",
    bullets: ["PyTorch", "LSTM", "Validación temporal", "Métricas"],
    href: "https://github.com/Izanvz/BTC-Pred",
    tone: "from-amber-500/10",
  },
];

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Proyectos"
      subtitle="Sistemas completos que integran IA dentro de arquitecturas backend listas para integrarse en producto."
    >
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, idx) => (
          <FadeIn key={p.title} delay={idx * 0.05}>
            <a
              href={p.href}
              target="_blank"
              className={`group block rounded-2xl border border-neutral-900 bg-neutral-900/25 p-7 hover:bg-neutral-900/40 transition
              shadow-[0_0_0_1px_rgba(255,255,255,0.02)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.06)]`}
            >
              <div className={`pointer-events-none absolute`} />
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
                <span className="text-neutral-500 group-hover:text-neutral-300 transition">↗</span>
              </div>

              <p className="mt-3 text-neutral-400">{p.desc}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.bullets.map((b) => (
                  <span
                    key={b}
                    className="text-xs px-2.5 py-1 rounded-full border border-neutral-800 text-neutral-300 bg-neutral-950/30"
                  >
                    {b}
                  </span>
                ))}
              </div>

              <div className="mt-6 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
              <p className="mt-4 text-sm text-neutral-500">
                Ver código y detalles técnicos
              </p>
            </a>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
