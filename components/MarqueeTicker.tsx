const STACK = [
  "Python", "FastAPI", "LangGraph", "WhisperX", "Docker",
  "ChromaDB", "PyTorch", "Ollama", "Mistral 7B", "YOLOv8",
  "SQLite", "PaddleOCR", "LangChain", "Whisper",
  "Scikit-learn", "XGBoost", "MySQL", "Docker Compose", "OpenAPI",
];

function Sep() {
  return <span className="mx-5 text-amber/30 select-none">◆</span>;
}

export default function MarqueeTicker() {
  const items = [...STACK, ...STACK];
  return (
    <div
      aria-hidden="true"
      className="relative w-full overflow-hidden border-y border-ink-800/40 bg-ink-950/40 py-3"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-ink-950/70 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-ink-950/70 to-transparent" />

      <div className="flex whitespace-nowrap marquee-left">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center text-[13px] font-mono text-ink-500">
            {item}
            <Sep />
          </span>
        ))}
      </div>
    </div>
  );
}
