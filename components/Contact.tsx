"use client";

import FadeIn from "@/components/FadeIn";
import Section from "@/components/Section";
import { motion } from "framer-motion";

export default function Contact() {
  const email = "izan.villarejo.ai@gmail.com";

  return (
    <Section
      id="contact"
      title="Contacto"
      subtitle="Si tu proyecto necesita backend sólido o integración real de IA, hablemos."
    >
      <div className="grid lg:grid-cols-12 gap-10 items-start">

        {/* Columna izquierda */}
        <div className="lg:col-span-7">
          <FadeIn>
            <div className="relative overflow-hidden rounded-2xl border border-neutral-900 bg-neutral-900/25 p-8">

              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />

              <h3 className="text-xl font-semibold text-neutral-100">
                Respondo rápido por email
              </h3>

              <p className="mt-3 text-neutral-400 max-w-xl">
                Si es para entrevistas, colaboración técnica o un proyecto donde haya que integrar IA en backend,
                envíame contexto y te respondo con claridad.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">

                <div className="rounded-2xl border border-neutral-900 bg-neutral-950/40 p-5">
                  <p className="text-xs text-neutral-500">Email</p>
                  <p className="mt-2 text-neutral-100 font-medium break-all">
                    {email}
                  </p>

                  <div className="mt-4 flex gap-3">
                    <a
                      href={`mailto:${email}`}
                      className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-white text-black font-medium hover:opacity-95 transition"
                    >
                      Enviar email
                    </a>

                    <button
                      onClick={async () => {
                        try {
                          await navigator.clipboard.writeText(email);
                        } catch {}
                      }}
                      className="inline-flex items-center justify-center px-4 py-2 rounded-xl border border-neutral-800 hover:border-neutral-600 transition text-neutral-200"
                    >
                      Copiar
                    </button>
                  </div>
                </div>

                <div className="rounded-2xl border border-neutral-900 bg-neutral-950/40 p-5">
                  <p className="text-xs text-neutral-500">Ubicación</p>
                  <p className="mt-2 text-neutral-100 font-medium">
                    Gandia, Valencia
                  </p>
                  <p className="mt-2 text-sm text-neutral-400">
                    Remoto en España · Híbrido en Valencia/Safor
                  </p>
                </div>

              </div>

              <div className="mt-8 flex gap-3">
                <a
                  href="https://github.com/Izanvz"
                  target="_blank"
                  className="px-4 py-2 rounded-xl border border-neutral-800 hover:border-neutral-600 transition text-neutral-200"
                >
                  GitHub ↗
                </a>
                <a
                  href="https://www.linkedin.com/in/izan-villarejo-ai/"
                  target="_blank"
                  className="px-4 py-2 rounded-xl border border-neutral-800 hover:border-neutral-600 transition text-neutral-200"
                >
                  LinkedIn ↗
                </a>
              </div>

            </div>
          </FadeIn>
        </div>

        {/* Columna derecha */}
        <div className="lg:col-span-5">
          <FadeIn delay={0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl border border-neutral-900 bg-neutral-950/50 p-8"
            >
              <h3 className="text-lg font-semibold text-neutral-100">
                En 30 segundos
              </h3>

              <div className="mt-6 space-y-5 text-neutral-300">

                <div>
                  <p className="text-xs text-neutral-500">Qué hago</p>
                  <p className="mt-1">
                    Integro modelos de IA dentro de arquitecturas backend mantenibles y listas para producción.
                  </p>
                </div>

                <div>
                  <p className="text-xs text-neutral-500">En qué soy fuerte</p>
                  <p className="mt-1">
                    Diseño de pipelines, APIs robustas con FastAPI y automatización de procesos empresariales.
                  </p>
                </div>

                <div>
                  <p className="text-xs text-neutral-500">Tipo de proyectos</p>
                  <p className="mt-1">
                    Audio (transcripción/diarización), NLP, visión por computador y modelos predictivos.
                  </p>
                </div>

                <div>
                  <p className="text-xs text-neutral-500">Disponibilidad</p>
                  <p className="mt-1">
                    Remoto en España · Híbrido en Valencia
                  </p>
                </div>

              </div>

              <div className="mt-8">
                <a
                  href={`mailto:${email}`}
                  className="inline-flex w-full items-center justify-center rounded-xl bg-white text-black px-6 py-3 font-medium hover:opacity-95 transition"
                >
                  Contactar por email
                </a>
              </div>

            </motion.div>
          </FadeIn>
        </div>

      </div>
    </Section>
  );
}
