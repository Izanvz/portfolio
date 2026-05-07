import FadeIn from "@/components/FadeIn";
import Section from "@/components/Section";

const proof = [
  {
    title: "40h/mes automatizadas en TESI",
    desc: "Reemplacé un proceso 100% manual con un pipeline de IA: el usuario sube audio y obtiene transcripción, resumen y keywords en minutos, sin intervención humana.",
  },
  {
    title: "LLM con rol concreto, no control total",
    desc: "Diseño agentes con LangGraph donde cada nodo tiene responsabilidad definida. El LLM extrae — SQLite guarda, ChromaDB indexa, FastAPI sirve.",
  },
  {
    title: "Local-first por elección, no por dogma",
    desc: "Desarrollo con modelos locales porque prefiero no incurrir en costes hasta que hay producto real. La arquitectura está diseñada para que cambiar a OpenAI, Mistral o cualquier otra API sea cuestión de una línea de configuración.",
  },
];

export default function About() {
  return (
    <Section
      id="about"
      index={3}
      eyebrow="Sobre mí"
      title="Del modelo al producto"
      subtitle="Construyo sistemas donde la IA se integra con sentido: pipelines, API, persistencia y entrega."
    >
      <div className="grid lg:grid-cols-12 gap-8 items-start" role="region" aria-label="Sobre Izan Villarejo">
        <div className="lg:col-span-5 space-y-4">
          {proof.map((p, idx) => (
            <FadeIn key={p.title} delay={idx * 0.08}>
              <div className="p-px rounded-[22px] bg-gradient-to-b from-ink-700/30 to-transparent hover:from-amber/20 transition-all duration-500">
                <div className="rounded-[21px] bg-ink-925 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-ink-100 font-semibold">{p.title}</h3>
                    <span className="text-amber font-mono text-sm font-medium flex-shrink-0">0{idx + 1}</span>
                  </div>
                  <p className="mt-2.5 text-sm text-ink-400 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}

        </div>

        <div className="lg:col-span-7">
          <FadeIn>
            <div className="p-px rounded-[26px] bg-gradient-to-b from-ink-700/50 to-transparent">
              <div className="rounded-[25px] bg-ink-925 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <p className="text-xl text-ink-100 font-medium leading-snug border-l-2 border-amber pl-5 py-1">
                  Si una tarea se repite una y otra vez, hago que la haga una máquina, no una persona.
                </p>

                <div className="mt-7 space-y-5 text-ink-300 leading-relaxed">
                  <p>
                    Hola, soy Izan, <span className="text-ink-100 font-medium">AI Engineer y Backend Developer</span> con base en Gandía, Valencia.
                  </p>
                  <p>
                    Llegué aquí desde <span className="text-ink-100">DAM</span> y la <span className="text-ink-100">Especialización en IA y Big Data</span>,
                    completada con la <span className="text-ink-100">Machine Learning Specialization de Stanford / DeepLearning.AI</span>.
                    El año pasado en <span className="text-amber font-medium">TESI</span> llevé esa formación a producción: diseñé y operé un pipeline
                    de audio con LLMs que reemplazó un proceso 100% manual. Ahí aprendí lo que separa un prototipo de un
                    sistema real: la persistencia, la observabilidad y el coste operativo.
                  </p>
                  <p>
                    Hoy mi stack es <span className="text-amber font-medium">Python, FastAPI, LangGraph, Ollama, ChromaDB y Docker</span>.
                    Diseño agentes donde el LLM razona pero no orquesta, monto la persistencia desde el día uno y opero
                    con coste de API medido. Busco equipo donde diseñar e implementar sistemas de IA con impacto real,
                    remoto en España o híbrido en Valencia.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
