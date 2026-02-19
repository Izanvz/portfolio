"use client";

import FadeIn from "@/components/FadeIn";
import Section from "@/components/Section";

const highlights = [
  { k: "Focus", v: "Backend + IA aplicada en producción" },
  { k: "Stack core", v: "Python · FastAPI · SQL · Docker" },
  { k: "IA aplicada", v: "WhisperX · pyannote · LLMs (OpenAI) · CV/OCR" },
  { k: "Extras", v: "Angular · TypeScript · Kafka · Grafana · Elasticsearch · Power BI" },
];

const proof = [
  {
    title: "Automatización real",
    desc:
      "Sustituí procesos manuales recurrentes mediante pipelines de IA integrados en arquitectura web, dejando outputs estructurados listos para consumo por frontend.",
  },
  {
    title: "Arquitectura limpia",
    desc:
      "Separación clara entre capa de IA, servicios HTTP, persistencia y utilidades. Código modular, reproducible y mantenible.",
  },
  {
    title: "Impacto medible",
    desc:
      "Reducción de tiempo operativo de horas a minutos en tareas de análisis de audio (transcripción, diarización y enriquecimiento semántico).",
  },
];

export default function About() {
  return (
    <Section
      id="about"
      title="Sobre mí"
      subtitle="Construyo sistemas completos donde la IA se integra con criterio: pipelines, API, persistencia y entrega a producto."
    >
      <div className="grid lg:grid-cols-12 gap-10 items-start">
        {/* Columna principal */}
        <div className="lg:col-span-7">
          <FadeIn>
            <div className="rounded-2xl border border-neutral-900 bg-neutral-900/25 p-7">

              <p className="text-neutral-200 leading-relaxed text-lg">
                Si una tarea se repite una y otra vez, hago que la haga una máquina, no una persona.
              </p>

              <p className="mt-6 text-neutral-300 leading-relaxed">
                Hola! soy Izan y soy <span className="font-medium text-white">Backend Developer especializado en Inteligencia Artificial y automatización de procesos</span>.
                Trabajo en el punto donde se cruzan el código, los datos y las necesidades reales.
                No me interesa entrenar modelos aislados, sino integrarlos correctamente dentro de sistemas que funcionen en producción.
              </p>

              <p className="mt-6 text-neutral-300 leading-relaxed">
                Mi recorrido comenzó con DAM y se consolidó con la especialización en IA y Big Data,
                donde profundicé en <span className="text-white font-medium">Machine Learning, Deep Learning y modelado predictivo</span>.
                Además, trabajé con herramientas de análisis y visualización como <span className="text-white font-medium">Power BI y Grafana</span>, 
                entornos de mensajería y procesamiento en tiempo real con <span className="text-white font-medium">Kafka</span>,
                y flujos de indexación y búsqueda con <span className="text-white font-medium">ElasticSearch</span>.
              </p>
              
              <p className="mt-6 text-neutral-300 leading-relaxed">
              Desde entonces he trabajado integrando modelos dentro de arquitecturas backend reales, diseñando APIs robustas,
              dockerizando módulos para garantizar portabilidad y despliegue reproducible, y automatizando pipelines completos de procesamiento.
              También he desarrollado soluciones de <span className="text-white font-medium">web scraping</span>
              manual y automatizado orientadas a extracción estructurada y explotación de datos.
              </p>

              <p className="mt-6 text-neutral-300 leading-relaxed">
                Trabajo principalmente con <span className="text-white font-medium">Python</span> tanto en backend como en IA aplicada.
                Diseño pipelines de procesamiento de datos, entreno modelos con
                <span className="text-white font-medium"> PyTorch, TensorFlow y Scikit-learn</span>,
                y conecto todo mediante APIs REST listas para integrarse en producto.
              </p>

              {/* Highlights */}
              <div className="mt-8 grid sm:grid-cols-2 gap-3">
                {highlights.map((h) => (
                  <div
                    key={h.k}
                    className="rounded-xl border border-neutral-900 bg-neutral-950/30 px-4 py-3"
                  >
                    <p className="text-xs text-neutral-500">{h.k}</p>
                    <p className="mt-1 text-sm text-neutral-200">{h.v}</p>
                  </div>
                ))}
              </div>

            </div>
          </FadeIn>
        </div>

        {/* Columna lateral */}
        <div className="lg:col-span-5">
          <div className="space-y-4">
            {proof.map((p, idx) => (
              <FadeIn key={p.title} delay={idx * 0.08}>
                <div className="rounded-2xl border border-neutral-900 bg-neutral-900/25 p-6 hover:bg-neutral-900/35 transition">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-neutral-100 font-semibold">{p.title}</h3>
                    <span className="text-neutral-600 text-sm">0{idx + 1}</span>
                  </div>
                  <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{p.desc}</p>
                </div>
              </FadeIn>
            ))}

            <FadeIn delay={0.3}>
              <div className="rounded-2xl border border-neutral-900 bg-neutral-950/40 p-6">
                <p className="text-sm text-neutral-500">Filosofía</p>
                <p className="mt-2 text-neutral-200">
                  La IA no es el producto. El sistema que la integra correctamente sí lo es.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </Section>
  );
}
