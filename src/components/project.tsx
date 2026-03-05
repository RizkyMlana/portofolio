"use client";
import { motion, Variants } from "framer-motion";
// import Image from "next/image";
const projects = [
  {
    title: "Pneumonia X-Ray Classifier",
    desc: "Model Deep Learning (ResNet50) untuk mendeteksi pneumonia dari citra X-Ray dengan tingkat akurasi 96%.",
    tech: ["TensorFlow", "Keras", "FastAPI"],
    image: "/project1.jpg", 
    githubLink: "#",
  },
  {
    title: "Customer Churn Prediction",
    desc: "Sistem analitik prediktif menggunakan XGBoost untuk mengidentifikasi pelanggan yang berisiko berhenti berlangganan.",
    tech: ["Scikit-Learn", "Pandas", "Streamlit"],
    image: "/project2.jpg",
    githubLink: "#",
  },
  {
    title: "Sentiment Analysis API",
    desc: "Pipeline NLP berbasis model BERT untuk mengklasifikasikan sentimen ulasan produk secara real-time.",
    tech: ["PyTorch", "HuggingFace", "Flask"],
    image: "/project3.jpg",
    githubLink: "#",
  },
];

export default function Projects() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <section id="projects" className="py-24 bg-carbon-800 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Featured <span className="text-petronas-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-petronas-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Beberapa model dan solusi cerdas yang telah saya bangun untuk memecahkan masalah kompleks menggunakan data.
          </p>
        </div>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div 
              variants={cardVariants}
              key={idx} 
              className="group bg-carbon-900 border border-carbon-700 rounded-2xl overflow-hidden hover:border-petronas-400/50 hover:shadow-[0_10px_30px_rgba(0,210,190,0.1)] transition-all duration-300 flex flex-col"
            >
              <div className="relative h-56 w-full bg-carbon-800 overflow-hidden border-b border-carbon-700 group-hover:border-petronas-400/50 transition-colors">
                 <div className="absolute inset-0 bg-carbon-700 flex flex-col justify-center items-center text-gray-500 group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-10 h-10 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-xs">Gambar Project {idx + 1}</span>
                 </div>
                 {/* <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" /> */}
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-petronas-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="px-3 py-1 bg-petronas-400/10 text-petronas-400 border border-petronas-400/20 text-xs font-medium rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="pt-4 border-t border-carbon-800 flex items-center justify-between">
                  <a href={project.githubLink} className="text-gray-400 hover:text-white flex items-center gap-2 text-sm font-medium transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    Source Code
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>
        <div className="mt-12 text-center">
          <a href="#" className="inline-block px-6 py-3 border border-carbon-700 hover:border-petronas-400 text-gray-400 hover:text-petronas-400 rounded-full text-sm font-medium transition-colors">
            Lihat Project Lainnya di GitHub &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}