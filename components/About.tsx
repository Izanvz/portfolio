import FadeIn from "@/components/FadeIn";
import Section from "@/components/Section";

const proof = [
  {
    title: "Automatización real",
    desc: "Sustituyo procesos manuales recurrentes por pipelines de IA integrados en producto, con salidas estructuradas listas para consumo.",
  },
  {
    title: "Arquitectura limpia",
    desc: "Separo con criterio la capa de IA, la API, la persistencia y la lógica de negocio para que el sistema sea mantenible y escalable.",
  },
  {
    title: "Impacto medible",
    desc: "Reduzco tiempo operativo en tareas de análisis, transcripción y enriquecimiento semántico sin perder trazabilidad técnica.",
  },
];

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="Sobre mí"
      title="Del modelo al producto"
      subtitle="Construyo sistemas donde la IA se integra con criterio: pipelines, API, persistencia y entrega."
    >
      <div className="grid lg:grid-cols-12 gap-8 items-start" role="region" aria-label="Sobre Izan Villarejo">
        <div className="lg:col-span-7">
          <FadeIn>
            <div className="p-px rounded-[26px] bg-gradient-to-b from-ink-700/50 to-transparent">
              <div className="rounded-[25px] bg-ink-925 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <p className="text-xl text-ink-100 font-medium leading-snug border-l-2 border-amber pl-5 py-1">
                  Si una tarea se repite una y otra vez, hago que la haga una máquina, no una persona.
                </p>

                <div className="mt-7 space-y-5 text-ink-300 leading-relaxed">
                  <p>
                    Hola, soy Izan, <span className="text-ink-100 font-medium">Backend Developer especializado en IA y automatización</span>.
                    Trabajo en el cruce entre código, datos y necesidades reales. No me interesan los modelos aislados;
                    me interesa integrarlos correctamente en sistemas que funcionen en producción.
                  </p>
                  <p>
                    Mi recorrido comenzó con DAM y se consolidó en la especialización en IA y Big Data,
                    donde profundicé en <span className="text-ink-100">Machine Learning, Deep Learning y modelado predictivo</span>.
                    También trabajé con <span className="text-ink-100">Power BI, Grafana, Kafka y Elasticsearch</span>.
                  </p>
                  <p>
                    Integro modelos en arquitecturas backend reales: diseño el pipeline, construyo la API,
                    defino la persistencia y lo orquesto todo con <span className="text-ink-100">Docker Compose</span>.
                    Cuando el problema lo requiere, diseño agentes con <span className="text-amber font-medium">LangGraph</span>:
                    pipelines de nodos independientes donde el LLM tiene un rol concreto en cada paso, no control total sobre el flujo.
                  </p>
                  <p>
                    Trabajo principalmente con <span className="text-amber font-medium">Python</span> tanto en backend como en IA aplicada,
                    pero donde más cómodo me siento es llevando una idea hasta un sistema completo:
                    desde el procesamiento y la lógica hasta la API, la persistencia y la entrega final a producto.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

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

          <FadeIn delay={0.28}>
            <div className="p-px rounded-[22px] bg-gradient-to-b from-amber/20 to-amber/5">
              <div className="rounded-[21px] bg-ink-925 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                <p className="text-[10px] font-mono uppercase tracking-widest text-ink-500">Filosofía</p>
                <p className="mt-3 text-ink-200 leading-relaxed">
                  La IA no es el producto. El sistema que la integra correctamente sí lo es.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
