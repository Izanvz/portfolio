const STACK = [
  "Python", "FastAPI", "LangGraph", "WhisperX", "Docker",
  "ChromaDB", "PyTorch", "Ollama", "Mistral 7B", "YOLOv8",
  "SQLite", "PaddleOCR", "LangChain", "Whisper", "FastAPI",
  "Scikit-learn", "XGBoost", "MySQL", "Docker Compose", "OpenAPI",
];

const VALUES = [
  "local-first", "production-ready", "no demos — producto",
  "pipelines reales", "AI con sentido", "backend engineer",
  "automation first", "0 € coste API", "Python everywhere",
  "abierto a remoto", "arquitectura limpia", "del modelo al producto",
];

function Sep() {
  return <span className="mx-5 text-amber/30 select-none">◆</span>;
}

function StackRow() {
  const items = [...STACK, ...STACK];
  return (
    <div className="flex whitespace-nowrap marquee-left">
      {items.map((item, i) => (
        <span key={i} className="inline-flex items-center text-[13px] font-mono text-ink-500">
          {item}
          <Sep />
        </span>
      ))}
    </div>
  );
}

function ValuesRow() {
  const items = [...VALUES, ...VALUES];
  return (
    <div className="flex whitespace-nowrap marquee-right">
      {items.map((item, i) => (
        <span key={i} className="inline-flex items-center text-[12px] font-mono text-ink-700 uppercase tracking-widest">
          {item}
          <Sep />
        </span>
      ))}
    </div>
  );
}

export default function MarqueeTicker() {
  return (
    <div
      aria-hidden="true"
      className="relative w-full overflow-hidden border-y border-ink-800/40 bg-ink-950/40 py-3 space-y-3"
    >
      {/* fade masks izquierda y derecha */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-ink-950/70 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-ink-950/70 to-transparent" />

      <StackRow />
      <ValuesRow />
    </div>
  );
}
