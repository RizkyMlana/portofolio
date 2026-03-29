"use client";
import { motion, Variants } from "framer-motion";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const greetingVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { type: "spring", stiffness: 120, damping: 10 } 
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { type: "spring", bounce: 0.3, duration: 0.8 }
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: "easeOut" }
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring", bounce: 0.4, duration: 0.6 }
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-carbon-900 overflow-hidden pt-20">
      
      {/* 1. LAYER PATTERN SILVER F1 (Sparse 25% Density - STATIS AJA BIAR ENTENG) */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden" 
        style={{ 
          WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 30%, black 100%)', 
          maskImage: 'radial-gradient(ellipse at center, transparent 30%, black 100%)' 
        }}
      >
        <div className="w-full h-full opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <g id="star-template">
                <path d="M 24 10 L 26 23 L 38 34 L 24 28 L 10 34 L 22 23 Z" fill="#cbd5e1" />
              </g>

              <pattern id="f1-stars-sparse" x="0" y="0" width="160" height="160" patternUnits="userSpaceOnUse" patternTransform="rotate(-15)">
                <use href="#star-template" x="0" y="0" />
                <use href="#star-template" x="80" y="40" />
                <use href="#star-template" x="40" y="120" />
                <use href="#star-template" x="120" y="80" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#f1-stars-sparse)" />
          </svg>
        </div>
      </div>

      {/* 2. LAYER GLOW PETRONAS */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-petronas-600/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* 3. LAYER KONTEN UTAMA */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={greetingVariants} className="mb-4">
            <span className="text-petronas-400 font-mono text-lg md:text-xl tracking-wider">
              &gt; Hi, I`m
            </span>
          </motion.div>

          <motion.h1 
            variants={titleVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 tracking-tight leading-tight"
          >
            Rizky Maulana <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-petronas-400 to-petronas-600">
              Saputra.
            </span>
          </motion.h1>

          <motion.p 
            variants={textVariants}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Machine Learning enthusiast and Informatics student with a strong interest in AI and data-driven systems. 
            I enjoy building machine learning models and exploring how data can be used to solve real-world problems.
          </motion.p>

          <motion.div 
            variants={buttonVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="#projects"
              className="w-full sm:w-auto px-8 py-3.5 bg-petronas-400 text-carbon-900 rounded-full font-bold hover:bg-petronas-500 hover:shadow-[0_0_20px_rgba(0,210,190,0.3)] transition-all duration-300"
            >
              View My Projects
            </a>
            <a 
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent text-white border border-carbon-700 hover:border-petronas-400 hover:text-petronas-400 rounded-full font-medium transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}