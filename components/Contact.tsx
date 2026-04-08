"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import Section from "@/components/Section";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const EMAIL = "izan.villarejo.ai@gmail.com";

const summary = [
  { k: "Qué hago", v: "Integro modelos de IA en arquitecturas backend mantenibles y listas para producción." },
  { k: "En qué soy fuerte", v: "Diseño de pipelines, APIs robustas con FastAPI y automatización de procesos empresariales." },
  { k: "Tipo de proyectos", v: "Audio, NLP, computer vision, agentes y modelos predictivos conectados a producto." },
  { k: "Disponibilidad", v: "España remoto · Valencia/Safor híbrido o presencial" },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  }

  return (
    <Section
      id="contact"
      eyebrow="Contacto"
      title="Buscando trabajo activamente"
      subtitle="Si tu equipo trabaja con Python, IA y necesitas a alguien que se ponga las pilas desde el día 1, escríbeme."
    >
      <div className="grid lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-7">
          <FadeIn>
            <div className="relative overflow-hidden p-px rounded-[26px] bg-gradient-to-b from-ink-700/50 to-transparent">
              <div className="rounded-[25px] bg-ink-925 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-32 bg-amber/[0.06] rounded-full blur-3xl pointer-events-none" />

                <h3 className="text-xl font-semibold text-ink-100 relative">
                  Disponible para incorporación inmediata
                </h3>
                <p className="mt-3 text-ink-400 leading-relaxed max-w-xl">
                  Busco un equipo donde construir sistemas reales con Python e IA — no demos, producto.
                  Si tienes un reto técnico concreto, mándame contexto y hablamos.
                </p>

                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  <div className="p-px rounded-[18px] bg-gradient-to-b from-amber/20 to-transparent">
                    <div className="rounded-[17px] bg-ink-950 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                      <p className="text-[10px] font-mono uppercase tracking-widest text-ink-600">Email</p>
                      <p className="mt-2 text-ink-100 font-medium text-sm break-all">{EMAIL}</p>
                      <div className="mt-4 flex gap-2.5">
                        <a
                          href={`mailto:${EMAIL}`}
                          aria-label="Enviar email a Izan"
                          className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber text-ink-950 font-medium text-sm hover:bg-amber-bright transition-colors"
                        >
                          Enviar email
                          <span className="w-5 h-5 rounded-full bg-ink-950/15 flex items-center justify-center text-xs group-hover:translate-x-0.5 transition-transform">
                            →
                          </span>
                        </a>
                        <button
                          onClick={handleCopy}
                          aria-label="Copiar dirección de email"
                          className="px-4 py-2 rounded-full border border-ink-700/60 hover:border-ink-500 transition-colors text-ink-300 text-sm"
                        >
                          {copied ? "✓ Copiado" : "Copiar"}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="p-px rounded-[18px] bg-gradient-to-b from-ink-700/40 to-transparent">
                    <div className="rounded-[17px] bg-ink-950 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                      <p className="text-[10px] font-mono uppercase tracking-widest text-ink-600">Ubicación</p>
                      <p className="mt-2 text-ink-100 font-medium">Gandía, Valencia</p>
                      <p className="mt-2 text-sm text-ink-500">
                        España remoto · Valencia/Safor híbrido o presencial
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-7 flex gap-3">
                  <a
                    href="https://github.com/Izanvz"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Perfil de GitHub de Izan Villarejo"
                    className="px-5 py-2.5 rounded-full border border-ink-700/60 hover:border-ink-500 transition-colors text-ink-300 hover:text-ink-100 text-sm"
                  >
                    GitHub ↗
                  </a>
                  <a
                    href="https://www.linkedin.com/in/izan-villarejo-ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Perfil de LinkedIn de Izan Villarejo"
                    className="px-5 py-2.5 rounded-full border border-ink-700/60 hover:border-ink-500 transition-colors text-ink-300 hover:text-ink-100 text-sm"
                  >
                    LinkedIn ↗
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="lg:col-span-5">
          <FadeIn delay={0.1}>
            <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3, ease: EASE }}>
              <div className="p-px rounded-[26px] bg-gradient-to-b from-amber/25 to-amber/5">
                <div className="rounded-[25px] bg-ink-925 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_0_40px_oklch(75%_0.108_170_/_0.08)]">
                  <h3 className="text-lg font-semibold text-ink-100">En 30 segundos</h3>

                  <div className="mt-6 space-y-5">
                    {summary.map((item) => (
                      <div key={item.k}>
                        <p className="text-[10px] font-mono uppercase tracking-widest text-ink-600">{item.k}</p>
                        <p className="mt-1.5 text-sm text-ink-300 leading-relaxed">{item.v}</p>
                      </div>
                    ))}
                  </div>

                  <a
                    href={`mailto:${EMAIL}`}
                    aria-label="Contactar a Izan por email"
                    className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber text-ink-950 px-6 py-3 font-medium hover:bg-amber-bright transition-colors"
                  >
                    Contactar
                    <span className="w-6 h-6 rounded-full bg-ink-950/15 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-px transition-transform">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
