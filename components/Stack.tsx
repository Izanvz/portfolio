import FadeIn from "@/components/FadeIn";
import Section from "@/components/Section";

type StackGroup = {
  title: string;
  symbol: string;
  desc: string;
  primaryItems: string[];
  secondaryItems: string[];
  core: boolean;
};

const groups: StackGroup[] = [
  {
    title: "Backend & APIs",
    symbol: "{}",
    desc: "Servicios HTTP, automatización y diseño API-first.",
    primaryItems: ["Python", "FastAPI", "REST APIs", "OpenAPI/Swagger"],
    secondaryItems: ["Scripts & Automation", "Uvicorn"],
    core: true,
  },
  {
    title: "Datos & Bases de Datos",
    symbol: "[]",
    desc: "SQLite para local, MySQL para relacional, ChromaDB para vectores.",
    primaryItems: ["SQLite", "ChromaDB", "MySQL"],
    secondaryItems: ["Pandas", "SQL", "Kafka", "Elasticsearch"],
    core: false,
  },
  {
    title: "Machine Learning & AI",
    symbol: "∇",
    desc: "Modelos aplicados a audio, NLP, agentes y visión.",
    primaryItems: ["PyTorch", "LangChain", "LangGraph", "WhisperX", "Ollama", "Whisper", "Mistral 7B"],
    secondaryItems: ["XGBoost", "LightGBM", "Scikit-learn", "YOLOv8", "PaddleOCR"],
    core: true,
  },
  {
    title: "DevOps & Herramientas",
    symbol: "▶",
    desc: "Entornos reproducibles, ejecución local y observabilidad.",
    primaryItems: ["Docker", "Docker Compose"],
    secondaryItems: ["GPU local (CUDA)", "Power BI", "Grafana", "Gestión de entornos", "Config por parámetros"],
    core: false,
  },
];

export default function Stack() {
  return (
    <Section
      id="stack"
      index={4}
      eyebrow="Stack Técnico"
      title="Herramientas"
      subtitle="Las herramientas con las que construyo — y las que he usado en proyectos reales."
    >
      <div className="grid md:grid-cols-2 gap-4">
        {groups.map((g, idx) => (
          <FadeIn key={g.title} delay={idx * 0.05}>
            <div
              className={`p-px rounded-[22px] transition-all duration-300 h-full ${
                g.core
                  ? "bg-gradient-to-b from-amber/25 to-transparent hover:from-amber/35"
                  : "bg-gradient-to-b from-ink-700/40 to-transparent hover:from-ink-600/30"
              }`}
            >
              <div className="rounded-[21px] bg-ink-925 p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] h-full">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className={`font-mono text-base font-semibold ${g.core ? "text-amber" : "text-ink-600"}`}
                  >
                    {g.symbol}
                  </span>
                  <h3 className={`text-base font-semibold ${g.core ? "text-ink-100" : "text-ink-300"}`}>
                    {g.title}
                  </h3>
                </div>
                <p className="mt-2 text-ink-500 text-sm">{g.desc}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {g.primaryItems.map((x) => (
                    <span
                      key={x}
                      className="text-xs font-mono px-2.5 py-1 rounded-full border border-amber/30 text-amber bg-amber/[0.06] font-medium"
                    >
                      {x}
                    </span>
                  ))}
                </div>

                {g.secondaryItems.length > 0 && (
                  <>
                    <p className="text-[9px] font-mono uppercase tracking-[0.16em] text-ink-700 mt-4 mb-2">
                      He trabajado con
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {g.secondaryItems.map((x) => (
                        <span
                          key={x}
                          className="text-xs font-mono px-2.5 py-1 rounded-full border border-ink-800/60 text-ink-500 bg-ink-950/50"
                        >
                          {x}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
