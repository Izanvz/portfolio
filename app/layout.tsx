import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Izan Villarejo Adames | Backend Engineer",
  description: "Backend Engineer especializado en integrar IA en sistemas reales: del pipeline a producción.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
        {children}
      </body>
    </html>
  );
}
