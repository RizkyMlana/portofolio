import { ExternalLink } from "lucide-react"; 

const certificates = [
  {
    name: "Full Stack Web Developer",
    issuer: "Dicoding Indonesia",
    date: "Jan 2024",
    link: "#", // Link ke sertifikat asli
  },
  {
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Des 2023",
    link: "#",
  },
  {
    name: "Belajar Dasar UX Design",
    issuer: "Google",
    date: "Okt 2023",
    link: "#",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Sertifikat</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, idx) => (
            <div key={idx} className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-blue-500 transition-colors group">
              <h3 className="text-lg font-bold mb-1 group-hover:text-blue-600 transition-colors">
                {cert.name}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{cert.issuer} • {cert.date}</p>
              <a 
                href={cert.link} 
                className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline"
              >
                Lihat Kredensial <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}