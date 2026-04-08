import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeTicker from "@/components/MarqueeTicker";
import ImpactMetrics from "@/components/ImpactMetrics";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MarqueeTicker />
      <ImpactMetrics />
      <Projects />
      <Experience />
      <About />
      <Stack />
      <Contact />
    </main>
  );
}
