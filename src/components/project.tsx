// import Image from "next/image";

const projects = [
  {
    title: "E-Commerce App",
    desc: "Platform belanja online dengan Next.js dan Stripe.",
    tech: ["Next.js", "Tailwind", "Stripe"],
    image: "/project1.jpg", // Ganti dengan gambar aslimu
  },
  {
    title: "Dashboard Admin",
    desc: "Sistem manajemen data real-time.",
    tech: ["React", "Firebase", "Chart.js"],
    image: "/project2.jpg",
  },
  // Tambahkan project lain...
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full bg-gray-200">
                 {/* Gunakan component Image dari Next.js di sini */}
                 {/* <Image src={project.image} alt={project.title} fill className="object-cover" /> */}
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-gray-100 text-xs rounded-full dark:bg-gray-800">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}