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
      <Experience />
      <Certificates />
      <Skills />
      <About />
      <Contact />
      <footer className="bg-[#F2F4F7]  border-t py-8 border-[#D8D5CD] text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} <span>Rizky Maulana Saputra.</span>
        </p>
      </footer>
    </main>
  );
}
