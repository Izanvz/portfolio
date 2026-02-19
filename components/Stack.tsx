import FadeIn from "@/components/FadeIn";
import Section from "@/components/Section";

const groups = [
  {
    title: "Backend & APIs",
    desc: "Servicios HTTP, automatización y diseño API-first.",
    items: ["Python", "FastAPI", "REST APIs", "OpenAPI/Swagger", "Scripts & Automation"],
  },
  {
    title: "Datos & Bases de Datos",
    desc: "Persistencia y modelado según el caso.",
    items: ["MySQL", "MongoDB", "SQL", "Modelado de datos"],
  },
  {
    title: "Machine Learning & AI",
    desc: "Modelos aplicados a audio, NLP y visión.",
    items: ["PyTorch", "TensorFlow", "NLP", "WhisperX", "pyannote", "YOLOv8", "OCR", "OpenAI API"],
  },
  {
    title: "DevOps & Deployment",
    desc: "Entornos reproducibles y ejecución local.",
    items: ["Docker", "Docker Compose", "Gestión de entornos", "Config por parámetros", "GPU local (CUDA)"],
  },
  {
    title: "Observabilidad & Tools",
    desc: "Monitorización, mensajería y herramientas.",
    items: ["Kafka", "Grafana", "Elasticsearch", "Power BI", "Angular", "TypeScript"],
  },
];

export default function Stack() {
  return (
    <Section
      id="stack"
      title="Stack Técnico"
      subtitle="Tecnologías y herramientas que uso para construir sistemas backend que integran IA en producción."
    >
      <div className="grid md:grid-cols-2 gap-8">
        {groups.map((g, idx) => (
          <FadeIn key={g.title} delay={idx * 0.05}>
            <div className="rounded-2xl border border-neutral-900 bg-neutral-900/25 p-7 hover:bg-neutral-900/35 transition">
              <h3 className="text-lg font-semibold">{g.title}</h3>
              <p className="mt-2 text-neutral-400 text-sm">{g.desc}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((x) => (
                  <span
                    key={x}
                    className="text-xs px-2.5 py-1 rounded-full border border-neutral-800 text-neutral-300 bg-neutral-950/30"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
