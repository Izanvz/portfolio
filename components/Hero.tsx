"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <header className="relative pt-28 md:pt-32 pb-20 overflow-hidden">
      {/* fondo: grid sutil + glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.06),transparent_35%),radial-gradient(circle_at_40%_90%,rgba(255,255,255,0.05),transparent_40%)]" />
        <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:56px_56px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950 to-neutral-950/40" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs text-neutral-300 border border-neutral-800/70 bg-neutral-900/40 px-3 py-1.5 rounded-full"
          >
            Backend + IA aplicada en producción
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight"
          >
            Izan Villarejo Adames
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-4 text-lg md:text-xl text-neutral-400"
          >
            AI Engineer <span className="text-neutral-600">|</span> Backend Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-6 text-neutral-300 leading-relaxed max-w-2xl"
          >
            Diseño e integro sistemas backend que incorporan Inteligencia Artificial en entornos reales.
            Del modelo al API. Del pipeline a producción.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-medium hover:opacity-95 transition"
            >
              Ver proyectos
              <span className="group-hover:translate-x-0.5 transition">→</span>
            </a>

            <a
              href="https://github.com/Izanvz"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-neutral-800 hover:border-neutral-600 hover:text-neutral-200 transition"
            >
              GitHub
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-neutral-900 bg-neutral-900/30 hover:bg-neutral-900/50 transition text-neutral-200"
            >
              Contacto
            </a>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
