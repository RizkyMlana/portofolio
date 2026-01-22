import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/project";
import Certificates from "@/components/certification";
import Skills from "@/components/skills";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      
      <footer className="py-6 text-center text-sm text-gray-500">
        © 2025 Nama Kamu. Dibuat dengan Next.js
      </footer>
    </main>
  );
}