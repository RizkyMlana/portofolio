"use client";
import { ExternalLink, Award } from "lucide-react"; 
import { motion, Variants } from "framer-motion";

const certificates = [
  {
    name: "Machine Learning Development",
    issuer: "Dicoding",
    date: "May 2025",
    link: "https://www.dicoding.com/certificates/QLZ93YJM9Z5D",
  },
  {
    name: "Applied Machine Learning",
    issuer: "Dicoding",
    date: "June 2025",
    link: "https://www.dicoding.com/certificates/L4PQENGWOPO1",
  },
  {
    name: "Data Processing Fundamentals",
    issuer: "Dicoding",
    date: "May 2025",
    link: "https://www.dicoding.com/certificates/6RPNRE839X2M",
  },
  {
    name: "Machine Learning Learning Path (Scholarship)",
    issuer: "DBS Foundation x Dicoding",
    date: "2025",
    link: "https://www.linkedin.com/posts/rizky-maulana-saputra_certificate-of-completion-dbs-coding-camp-activity-7349014551469641730-CGKe"
  }
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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 } 
    },
  };

  return (
    <section id="certificates" className="py-24 bg-carbon-800 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-petronas-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            <span className="text-petronas-400">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-petronas-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of certifications from courses and learning programs related to machine learning and data science.
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
              className="p-6 bg-carbon-900 border border-carbon-700 rounded-xl hover:border-petronas-400 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,210,190,0.15)] transition-all duration-300 group flex flex-col"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-carbon-800 border border-carbon-700 rounded-lg group-hover:border-petronas-400/50 group-hover:bg-petronas-400/10 group-hover:text-petronas-400 text-gray-400 transition-all duration-300">
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

              {cert.link && (
                <div className="pt-4 border-t border-carbon-700/50 mt-auto">
                  <a 
                    href={cert.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-petronas-400 transition-colors"
                  >
                    View Certificate
                    <ExternalLink className="w-4 h-4 ml-1.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}