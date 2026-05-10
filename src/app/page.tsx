import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/project";
import Certificates from "@/components/certification";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Experience from "@/components/experince";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Experience/>
      <Certificates />
      <Skills />
      <About />
      <Contact />
      <footer className="border-t py-8 border-carbon-700 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} <span className="text-petronas-500">Rizky Maulana Saputra.</span>
        </p>
      </footer>
    </main>
  );
}