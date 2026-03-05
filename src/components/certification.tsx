"use client";
import { ExternalLink, Award } from "lucide-react"; 
import { motion, Variants } from "framer-motion";

// Update data dummy menjadi sertifikasi Machine Learning / Data Science
const certificates = [
  {
    name: "DeepLearning.AI TensorFlow Developer",
    issuer: "Coursera",
    date: "Feb 2024",
    link: "#", // Link ke kredensial asli
  },
  {
    name: "AWS Certified Machine Learning – Specialty",
    issuer: "Amazon Web Services",
    date: "Nov 2023",
    link: "#",
  },
  {
    name: "Machine Learning Specialization",
    issuer: "Stanford University",
    date: "Ags 2023",
    link: "#",
  },
];

export default function Certificates() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  return (
    <section id="certificates" className="py-24 bg-carbon-900 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Lisensi & <span className="text-petronas-400">Sertifikasi</span>
          </h2>
          <div className="w-16 h-1 bg-petronas-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Validasi keahlian teknis saya dari berbagai institusi teknologi global terkemuka.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certificates.map((cert, idx) => (
            <motion.div 
              variants={cardVariants}
              key={idx} 
              className="p-6 bg-carbon-800 border border-carbon-700 rounded-xl hover:border-petronas-400 hover:shadow-[0_5px_20px_rgba(0,210,190,0.15)] transition-all duration-300 group flex flex-col"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-carbon-900 border border-carbon-700 rounded-lg group-hover:border-petronas-400/50 group-hover:text-petronas-400 text-gray-400 transition-colors">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-200 group-hover:text-white transition-colors leading-tight">
                    {cert.name}
                  </h3>
                </div>
              </div>
              <div className="flex-grow">
                <p className="text-sm font-medium text-petronas-400 mb-1">{cert.issuer}</p>
                <p className="text-xs text-gray-500 mb-6">{cert.date}</p>
              </div>

              
              <div className="pt-4 border-t border-carbon-700/50 mt-auto">
                <a 
                  href={cert.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-petronas-400 transition-colors"
                >
                  Lihat Kredensial 
                  <ExternalLink className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}