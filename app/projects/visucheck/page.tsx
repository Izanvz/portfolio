import Link from "next/link";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VisuCheck — Izan Villarejo",
  description:
    "Pipeline de visión por computador para auditoría automática de lineales de retail. YOLOv8 para detección, PaddleOCR para texto, FastAPI para la API.",
};

const ARCHITECTURE = [
  { step: "01", name: "Ingesta de imagen", desc: "Recepción de imagen del lineal vía API endpoint o upload directo." },
  { step: "02", name: "Preprocesamiento", desc: "Normalización de resolución y contraste para mejorar la precisión de los modelos." },
  { step: "03", name: "Detección con YOLOv8", desc: "Identificación y localización de productos, huecos y anomalías mediante bounding boxes." },
  { step: "04", name: "Extracción de texto", desc: "PaddleOCR lee etiquetas, precios y referencias sobre las regiones detectadas." },
  { step: "05", name: "Estructuración de datos", desc: "Los resultados de detección y OCR se cruzan y organizan en un JSON estructurado por posición." },
  { step: "06", name: "Anotación de imagen", desc: "Se genera una imagen de salida con bounding boxes, etiquetas y clasificaciones visibles." },
  { step: "07", name: "Respuesta API", desc: "FastAPI devuelve el JSON con los datos estructurados y la imagen anotada codificada en base64." },
];

const DECISIONS = [
  {
    title: "YOLOv8 para detección",
    trade: "Modelo pesado vs clasificadores simples",
    why: "Los lineales de retail tienen objetos con formas, tamaños y disposiciones muy variadas. YOLOv8 detecta y localiza simultáneamente, mientras que clasificadores simples solo categorizan sin localizar.",
  },
  {
    title: "PaddleOCR sobre Tesseract",
    trade: "Precisión en texto impreso vs herramienta estándar",
    why: "Los precios y etiquetas en lineales tienen fuentes variadas, fondos complejos y ángulos no perfectos. PaddleOCR mantiene mayor precisión en estos escenarios sin configuración manual extensa.",
  },
  {
    title: "Output JSON estructurado",
    trade: "Procesamiento adicional vs imagen anotada como único output",
    why: "Una imagen anotada es útil para visualización, pero no para integración con sistemas de inventario. El JSON permite que cualquier sistema downstream consuma los datos directamente.",
  },
  {
    title: "Diseño orientado a API",
    trade: "FastAPI vs script standalone",
    why: "El objetivo es que VisuCheck sea un servicio consumible. Un script standalone obliga a integraciones frágiles. La API permite conectar aplicaciones móviles, dashboards o sistemas de gestión.",
  },
  {
    title: "Streamlit para prototipo",
    trade: "UI rápida vs frontend dedicado",
    why: "En fase de prototipo, Streamlit permite validar el pipeline visualmente sin invertir en frontend. El diseño orientado a API garantiza que migrar a otro frontend no requiere reescribir la lógica.",
  },
];

const RESULTS = [
  "Detección automática de productos y huecos en imagen de lineal.",
  "JSON estructurado con posición, etiqueta y confianza de cada detección.",
  "Imagen anotada con bounding boxes para revisión visual rápida.",
  "API lista para integrar con sistemas de inventario o apps móviles.",
];

export default function VisuCheckPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-28">
        <div className="max-w-4xl mx-auto px-6 md:px-8">

          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-ink-500 hover:text-ink-200 transition-colors mb-12 group"
          >
            <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
            Proyectos
          </Link>

          <div className="mb-20 border-b border-ink-800/40 pb-12">
            <div className="flex items-center gap-2 mb-5 flex-wrap">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-amber/10 text-amber border border-amber/20">
                Computer Vision
              </span>
            </div>

            <h1
              className="font-semibold tracking-tight text-ink-100 leading-[1.02] mb-5"
              style={{ fontSize: "clamp(2.4rem, 5vw + 1rem, 4.2rem)" }}
            >
              VisuCheck
            </h1>

            <p className="text-ink-400 text-lg leading-relaxed max-w-2xl mb-7">
              Pipeline de visión por computador para auditoría automática de lineales de retail.
              Detecta productos, huecos y anomalías, extrae texto de etiquetas y devuelve un JSON
              estructurado con imagen anotada — sin intervención manual.
            </p>

            <div className="flex flex-wrap gap-1.5 mb-8">
              {["Python", "YOLOv8", "PaddleOCR", "FastAPI", "Streamlit"].map((s) => (
                <span
                  key={s}
                  className="text-[11px] font-mono px-2.5 py-1 rounded-full border border-ink-800/60 text-ink-400 bg-ink-950/50"
                >
                  {s}
                </span>
              ))}
            </div>

            <a
              href="https://github.com/Izanvz/VisuCheck"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-ink-700/60 text-ink-300 hover:border-amber/30 hover:text-ink-100 transition-all text-sm"
            >
              GitHub ↗
            </a>
          </div>

          {/* 01 — Qué es */}
          <section className="mb-16">
            <p className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-amber mb-4">
              <span className="block w-4 h-px bg-amber/60" />
              01 — Qué es
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink-100 mb-4">
              Pipeline de auditoría visual para retail
            </h2>
            <p className="text-ink-400 leading-relaxed text-base md:text-lg max-w-2xl">
              VisuCheck automatiza la inspección de lineales de retail mediante visión por computador.
              A partir de una imagen del lineal, detecta y localiza productos, identifica huecos,
              lee etiquetas y precios, y devuelve los resultados en formato estructurado listo para
              integrar con sistemas de inventario.
            </p>
          </section>

          {/* 02 — Problema */}
          <section className="mb-16 border-t border-ink-800/40 pt-12">
            <p className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-amber mb-4">
              <span className="block w-4 h-px bg-amber/60" />
              02 — Problema
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink-100 mb-6">
              Auditar lineales manualmente no escala
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { title: "Inspección manual", desc: "Una persona recorre físicamente el lineal para registrar huecos y anomalías. Lento y propenso a errores." },
                { title: "Sin datos estructurados", desc: "Los resultados quedan en hojas de cálculo o anotaciones manuales, difíciles de integrar con sistemas." },
                { title: "Latencia de reacción", desc: "Cuando se detecta un hueco, el reaprovisionamiento ya lleva horas de retraso por el proceso manual." },
                { title: "Escalabilidad limitada", desc: "Inspeccionar 100 lineales en una tienda requiere 100× el tiempo. No hay forma de paralelizar." },
              ].map((p) => (
                <div key={p.title} className="p-5 rounded-[18px] border border-ink-800/50 bg-ink-925">
                  <p className="text-ink-100 font-medium text-sm mb-2">{p.title}</p>
                  <p className="text-ink-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 03 — Arquitectura */}
          <section className="mb-16 border-t border-ink-800/40 pt-12">
            <p className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-amber mb-4">
              <span className="block w-4 h-px bg-amber/60" />
              03 — Arquitectura
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink-100 mb-6">
              Pipeline de 7 etapas: imagen → JSON + imagen anotada
            </h2>
            <div className="space-y-2">
              {ARCHITECTURE.map((stage, i) => (
                <div
                  key={stage.step}
                  className="flex gap-5 p-4 rounded-[16px] border border-ink-800/40 bg-ink-925/60 hover:border-amber/20 transition-colors group"
                >
                  <span className="font-mono text-[11px] text-amber/50 mt-0.5 flex-shrink-0 group-hover:text-amber/70 transition-colors">
                    {stage.step}
                  </span>
                  <div className="flex items-baseline gap-3 min-w-0 flex-1">
                    <span className="font-medium text-ink-100 text-sm flex-shrink-0">{stage.name}</span>
                    <span className="text-ink-800 text-xs hidden sm:block">—</span>
                    <span className="text-ink-500 text-sm leading-relaxed">{stage.desc}</span>
                  </div>
                  {i < ARCHITECTURE.length - 1 && (
                    <span className="flex-shrink-0 text-ink-800 text-xs self-center">↓</span>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* 04 — Decisiones técnicas */}
          <section className="mb-16 border-t border-ink-800/40 pt-12">
            <p className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-amber mb-4">
              <span className="block w-4 h-px bg-amber/60" />
              04 — Decisiones técnicas
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink-100 mb-6">
              Trade-offs reales, no defaults
            </h2>
            <div className="space-y-4">
              {DECISIONS.map((d) => (
                <div key={d.title} className="p-6 rounded-[20px] border border-ink-800/50 bg-ink-925">
                  <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                    <h3 className="font-semibold text-ink-100">{d.title}</h3>
                    <span className="text-[11px] font-mono text-ink-600 bg-ink-900/80 px-2.5 py-1 rounded-md border border-ink-800/60 flex-shrink-0">
                      {d.trade}
                    </span>
                  </div>
                  <p className="text-ink-400 text-sm leading-relaxed">{d.why}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 05 — Resultado */}
          <section className="border-t border-ink-800/40 pt-12">
            <p className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-amber mb-4">
              <span className="block w-4 h-px bg-amber/60" />
              05 — Resultado
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink-100 mb-6">
              Auditoría visual automática end-to-end
            </h2>

            <div className="grid sm:grid-cols-3 gap-3 mb-8">
              {[
                { value: "imagen retail", label: "input" },
                { value: "JSON + anotada", label: "output" },
                { value: "0 h", label: "revisión manual" },
              ].map((m) => (
                <div
                  key={m.label}
                  className="rounded-[14px] border border-ink-700 bg-ink-950/60 px-5 py-4 flex flex-col gap-1"
                >
                  <p className="font-mono text-amber font-semibold text-xl leading-none">{m.value}</p>
                  <p className="font-mono text-ink-600 text-[10px] uppercase tracking-widest">{m.label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              {RESULTS.map((r) => (
                <p key={r} className="flex items-start gap-3 text-ink-400 text-sm leading-relaxed">
                  <span className="text-amber mt-0.5 flex-shrink-0">✓</span>
                  {r}
                </p>
              ))}
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
