"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const EASE: [number, number, number, number] = [0.32, 0.72, 0, 1];

const navLinks = [
  { href: "#about", label: "Sobre mí" },
  { href: "#projects", label: "Proyectos" },
  { href: "#experience", label: "Experiencia" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 30));

  return (
    <>
      <div className="fixed top-0 inset-x-0 z-50 flex justify-center pointer-events-none px-4 pt-5">
        <motion.nav
          aria-label="Navegación principal"
          className={`pointer-events-auto flex items-center gap-1 px-2 py-1.5 rounded-full border backdrop-blur-xl transition-all duration-300 ${
            scrolled
              ? "border-amber/20 bg-ink-950/92 shadow-[0_0_0_1px_oklch(100%_0_0_/_0.03),0_14px_36px_oklch(0%_0_0_/_0.42),0_0_24px_oklch(75%_0.108_170_/_0.10)]"
              : "border-ink-800/70 bg-ink-950/86 shadow-[0_8px_24px_oklch(0%_0_0_/_0.22),0_0_16px_oklch(75%_0.108_170_/_0.05)]"
          }`}
        >
          <a
            href="#"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-ink-900/60 transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber" />
            <span className="text-sm font-semibold tracking-tight text-ink-100">
              IVA<span className="text-amber">.</span>
            </span>
          </a>

          <div className="hidden md:flex items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm text-ink-400 hover:text-ink-100 hover:bg-ink-900/40 rounded-full transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1 pl-1">
            <a
              href="https://www.linkedin.com/in/izan-villarejo-ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center px-4 py-1.5 rounded-full bg-amber text-ink-950 text-sm font-medium shadow-[0_10px_30px_oklch(75%_0.108_170_/_0.12)] hover:bg-amber-bright transition-colors"
            >
              LinkedIn
            </a>

            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              className="md:hidden relative w-8 h-8 flex items-center justify-center rounded-full hover:bg-ink-800/60 transition-colors"
            >
              <span className="sr-only">{open ? "Cerrar" : "Menú"}</span>
              <div className="w-4 h-4 relative flex items-center justify-center">
                <motion.span
                  animate={{ rotate: open ? 45 : 0, y: open ? 0 : -5 }}
                  transition={{ duration: 0.25, ease: EASE }}
                  className="absolute block w-4 h-px bg-ink-200 origin-center"
                />
                <motion.span
                  animate={{ opacity: open ? 0 : 1, scaleX: open ? 0.3 : 1 }}
                  transition={{ duration: 0.2 }}
                  className="absolute block w-4 h-px bg-ink-200 origin-center"
                />
                <motion.span
                  animate={{ rotate: open ? -45 : 0, y: open ? 0 : 5 }}
                  transition={{ duration: 0.25, ease: EASE }}
                  className="absolute block w-4 h-px bg-ink-200 origin-center"
                />
              </div>
            </button>
          </div>
        </motion.nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-40 md:hidden bg-ink-950/97 backdrop-blur-2xl flex flex-col justify-center px-8"
          >
            <nav className="space-y-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.04 + i * 0.05, ease: EASE }}
                  className="block py-3 text-3xl font-semibold text-ink-400 hover:text-ink-100 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-12 flex gap-3"
            >
              <a
                href="https://github.com/Izanvz"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex-1 text-center py-3 rounded-full border border-ink-700 text-ink-300 hover:border-ink-500 transition-colors text-sm"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/izan-villarejo-ai/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex-1 text-center py-3 rounded-full bg-amber text-ink-950 font-medium text-sm"
              >
                LinkedIn
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
