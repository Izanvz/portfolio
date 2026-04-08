import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-izanv.vercel.app"),
  title: "Izan Villarejo Adames | Backend Developer & AI Engineer",
  description:
    "Backend Engineer especializado en integrar IA en sistemas reales: del pipeline a producción, remoto en España y disponible en Gandía, Valencia.",
  keywords: [
    "Backend Engineer",
    "AI Engineer",
    "Python",
    "FastAPI",
    "Machine Learning",
    "Portfolio",
    "España",
    "Valencia",
    "Gandía",
  ],
  authors: [{ name: "Izan Villarejo Adames" }],
  creator: "Izan Villarejo Adames",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Izan Villarejo Adames | Backend Developer & AI Engineer",
    description:
      "Backend Engineer especializado en integrar IA en sistemas reales: del pipeline a producción, remoto en España y disponible en Gandía, Valencia.",
    url: "https://portfolio-izanv.vercel.app",
    siteName: "Izan Villarejo Portfolio",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 627,
        alt: "Izan Villarejo Adames | Backend Developer & AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Izan Villarejo Adames | Backend Developer & AI Engineer",
    description:
      "Backend Engineer especializado en integrar IA en sistemas reales: del pipeline a producción, remoto en España y disponible en Gandía, Valencia.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Izan Villarejo Adames",
  url: "https://portfolio-izanv.vercel.app",
  email: "izan.villarejo.ai@gmail.com",
  jobTitle: "Backend Developer & AI Engineer",
  description:
    "Backend Engineer especializado en integrar IA en sistemas reales: del pipeline a producción.",
  sameAs: [
    "https://github.com/Izanvz",
    "https://www.linkedin.com/in/izan-villarejo-ai/",
  ],
  knowsAbout: ["Python", "FastAPI", "Machine Learning", "Deep Learning", "Docker", "PyTorch"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gandía",
    addressRegion: "Valencia",
    addressCountry: "ES",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded-lg focus:font-medium"
        >
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
