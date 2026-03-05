"use client";
import { motion, Variants } from "framer-motion";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-carbon-900 overflow-hidden pt-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-petronas-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="text-petronas-400 font-mono text-lg md:text-xl tracking-wider">
              &gt; Halo, perkenalkan saya
            </span>
          </motion.div>
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 tracking-tight leading-tight"
          >
            Rizky Maulana <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-petronas-400 to-petronas-600">
              Saputra.
            </span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Seorang <strong className="text-gray-200 font-semibold">Machine Learning Engineer</strong>. Saya membangun model cerdas dan mengubah data kompleks menjadi solusi yang berdampak.
          </motion.p>
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="#projects"
              className="w-full sm:w-auto px-8 py-3.5 bg-petronas-400 text-carbon-900 rounded-full font-bold hover:bg-petronas-500 hover:shadow-[0_0_20px_rgba(0,210,190,0.3)] transition-all duration-300"
            >
              Lihat Project Saya
            </a>
            <a 
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent text-white border border-carbon-700 hover:border-petronas-400 hover:text-petronas-400 rounded-full font-medium transition-all duration-300"
            >
              Hubungi Saya
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}