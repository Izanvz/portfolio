import FadeIn from "@/components/FadeIn";
import Section from "@/components/Section";

type StackGroup = {
  title: string;
  symbol: string;
  desc: string;
  items: string[];
  core: boolean;
  coreItems: string[];
};

const groups: StackGroup[] = [
  {
    title: "Backend & APIs",
    symbol: "{}",
    desc: "Servicios HTTP, automatización y diseño API-first.",
    items: ["Python", "FastAPI", "REST APIs", "OpenAPI/Swagger", "Scripts & Automation", "Uvicorn"],
    core: true,
    coreItems: ["Python", "FastAPI"],
  },
  {
    title: "Datos & Bases de Datos",
    symbol: "[]",
    desc: "Persistencia y modelado según el caso.",
    items: ["SQLite", "ChromaDB", "MySQL", "SQL", "Modelado de datos", "Pandas"],
    core: false,
    coreItems: ["SQLite", "ChromaDB"],
  },
  {
    title: "Machine Learning & AI",
    symbol: "∇",
    desc: "Modelos aplicados a audio, NLP, agentes y visión.",
    items: [
      "PyTorch",
      "LangChain",
      "LangGraph",
      "WhisperX",
      "Whisper",
      "Mistral 7B",
      "Ollama",
      "YOLOv8",
      "PaddleOCR",
      "XGBoost",
      "LightGBM",
      "Scikit-learn",
    ],
    core: true,
    coreItems: ["LangGraph", "WhisperX", "YOLOv8", "XGBoost"],
  },
  {
    title: "DevOps & Deployment",
    symbol: "▶",
    desc: "Entornos reproducibles y ejecución local.",
    items: ["Docker", "Docker Compose", "Gestión de entornos", "Config por parámetros", "GPU local (CUDA)", "Local-first"],
    core: false,
    coreItems: ["Docker"],
  },
  {
    title: "Interfaces & Tools",
    symbol: "~",
    desc: "Dashboards, visualización y utilidades de trabajo.",
    items: ["Streamlit", "Power BI", "yt-dlp", "JSON/CSV export", "Dashboard web"],
    core: false,
    coreItems: ["Streamlit", "Power BI"],
  },
];

export default function Stack() {
  return (
    <Section
      id="stack"
      eyebrow="Stack Técnico"
      title="Herramientas"
      subtitle="Tecnologías que uso para construir sistemas backend con IA integrada en producción."
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
                  {g.core && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber/10 text-amber border border-amber/20">
                      core
                    </span>
                  )}
                </div>
                <p className="mt-2 text-ink-500 text-sm">{g.desc}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((x) => (
                    <span
                      key={x}
                      className={
                        g.coreItems.includes(x)
                          ? "text-xs font-mono px-2.5 py-1 rounded-full border border-amber/30 text-amber bg-amber/[0.06] font-medium"
                          : "text-xs font-mono px-2.5 py-1 rounded-full border border-ink-800/60 text-ink-400 bg-ink-950/50"
                      }
                    >
                      {x}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
