export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-neutral-950/70 backdrop-blur border-b border-neutral-900/70">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-tight">
          IVA<span className="text-neutral-500">.</span>
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm text-neutral-400">
          <a className="hover:text-neutral-200 transition" href="#about">Sobre mí</a>
          <a className="hover:text-neutral-200 transition" href="#projects">Proyectos</a>
          <a className="hover:text-neutral-200 transition" href="#stack">Stack</a>
          <a className="hover:text-neutral-200 transition" href="#contact">Contacto</a>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <a
            href="https://github.com/Izanvz"
            target="_blank"
            className="px-3 py-2 rounded-lg border border-neutral-800 hover:border-neutral-600 hover:text-neutral-200 transition"
          >
            GitHub
          </a>
            <a
            href="https://www.linkedin.com/in/izan-villarejo-ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl border border-neutral-800 hover:border-neutral-600 hover:text-neutral-200 transition"
          >
            LinkedIn
        </a>

        </div>
      </div>
    </nav>
  );
}
