# Portfolio — Izan Villarejo Adames

Portfolio personal one-page construido con Next.js 16 y App Router. Presenta proyectos de backend e IA aplicada, experiencia profesional y stack técnico.

Desplegado en: [portfolio-izanv.vercel.app](https://portfolio-izanv.vercel.app)

---

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Next.js 16.1.6 (App Router) |
| UI | React 19 + TypeScript 5 |
| Estilos | Tailwind CSS v4 (OKLCH) |
| Animaciones | Framer Motion 12 + GSAP 3 |
| Icons | Lucide React |
| Fuentes | Geist Sans + Geist Mono |
| Deploy | Vercel |

---

## Estructura

```
izan-portfolio/
├── app/
│   ├── layout.tsx        # Layout raíz — metadata, fuentes, JSON-LD schema
│   ├── page.tsx          # Página única — orquesta todas las secciones
│   └── globals.css       # Estilos globales con Tailwind v4
│
├── components/
│   ├── Navbar.tsx        # Navegación fija con menú mobile animado
│   ├── Hero.tsx          # Hero con animaciones GSAP y spotlight interactivo
│   ├── ImpactMetrics.tsx # Grid de métricas profesionales
│   ├── About.tsx         # Sobre mí con filosofía y pilares
│   ├── Projects.tsx      # Galería de proyectos con cards
│   ├── Experience.tsx    # Experiencia, educación y certificaciones
│   ├── Stack.tsx         # Stack técnico organizado por categorías
│   ├── Contact.tsx       # Contacto con email, ubicación y redes
│   ├── FadeIn.tsx        # Wrapper de animaciones scroll (GSAP + ScrollTrigger)
│   └── Section.tsx       # Wrapper de sección con eyebrow, título y subtítulo
│
└── public/               # Assets estáticos
```

---

## Secciones

- **Hero** — Presentación con stats, CTAs y preview de MeetingAgent
- **About** — Trayectoria, filosofía y pilares de trabajo
- **Projects** — MeetingAgent, VisuCheck, BTC-Pred, AudioSmart
- **Experience** — TESI (2024–2025), IES Jaume II el Just, certificaciones Stanford
- **Stack** — 5 categorías: Backend, Datos, ML/AI, DevOps, Interfaces
- **Contact** — Email, ubicación, GitHub, LinkedIn

---

## Lanzar en local

```bash
git clone https://github.com/Izanvz/portfolio.git
cd portfolio
npm install
npm run dev
# http://localhost:3000
```

```bash
npm run dev      # Desarrollo
npm run build    # Build de producción
npm start        # Servidor de producción (requiere build previo)
npm run lint     # ESLint
```

---

## Autor

**Izan Villarejo Adames** — Backend Developer & AI Engineer

- Portfolio: [portfolio-izanv.vercel.app](https://portfolio-izanv.vercel.app/)
- LinkedIn: [linkedin.com/in/izan-villarejo-ai](https://www.linkedin.com/in/izan-villarejo-ai/)
- GitHub: [github.com/Izanvz](https://github.com/Izanvz)
