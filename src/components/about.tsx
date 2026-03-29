"use client";
import { motion, Variants, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

// 1. Komponen baru untuk animasi angka berjalan
function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, { 
        duration: 2.5, // Durasi animasi (2.5 detik)
        ease: "easeOut" 
      });
      return controls.stop;
    }
  }, [isInView, value, motionValue]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function About() {
  const textContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const textItemVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  const statContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.6 },
    },
  };

  const statCardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { type: "spring", bounce: 0.4, duration: 0.8 } 
    },
  };

  const floatingAnimation = {
    y: [-8, 8, -8],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const },
  };

  return (
    <section id="about" className="py-24 bg-carbon-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-petronas-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-petronas-600/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-2/5 flex justify-center lg:justify-end"
          >
            <motion.div animate={floatingAnimation} className="relative group cursor-pointer">
              <div className="absolute -inset-4 border-2 border-petronas-400/30 rounded-2xl rotate-6 group-hover:rotate-3 transition-transform duration-500"></div>
              
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] -rotate-3 group-hover:rotate-0 transition-all duration-500 bg-carbon-900 border border-carbon-700">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-600 gap-3 z-0">
                   <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                   </svg>
                   <span className="text-sm font-medium">Profile Photo</span>
                </div>
                <Image 
                  src="/images/profile.jpg" 
                  alt="Rizky Maulana Saputra" 
                  fill 
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500 z-10" 
                />
              </div>
            </motion.div>
          </motion.div>

          <div className="w-full lg:w-3/5">
            <motion.div 
              variants={textContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div variants={textItemVariants} className="flex items-center gap-4 mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                  About <span className="text-petronas-400">Me</span>
                </h2>
                <div className="h-px bg-carbon-700 flex-grow ml-4 hidden md:block"></div>
              </motion.div>
              
              <div className="space-y-5 text-gray-400 text-base md:text-lg leading-relaxed">
                <motion.p variants={textItemVariants}>
                  Hi! I`m an Informatics student with a strong interest in Artificial Intelligence and Machine Learning.
                  I enjoy learning how data can be used to build intelligent systems and solve real-world problems. Most of my recent work focuses on machine learning development, data processing, and experimenting with different models.
                </motion.p>
                <motion.p variants={textItemVariants}>
                  Currently, I’m exploring areas such as Computer Vision, Natural Language Processing, and data analytics while continuously improving my skills through projects and hands-on experimentation.
                </motion.p>
              </div>
            </motion.div>

            <motion.div 
              variants={statContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              <motion.div variants={statCardVariants} className="bg-carbon-900 border border-carbon-700 p-5 rounded-xl text-center hover:-translate-y-2 hover:border-petronas-400/50 hover:shadow-[0_10px_20px_rgba(0,210,190,0.1)] transition-all duration-300">
                <span className="block text-4xl font-black text-petronas-400 mb-1">
                  <AnimatedNumber value={3} />+
                </span>
                <span className="text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider">Years<br/>of Learning</span>
              </motion.div>
              
              <motion.div variants={statCardVariants} className="bg-carbon-900 border border-carbon-700 p-5 rounded-xl text-center hover:-translate-y-2 hover:border-petronas-400/50 hover:shadow-[0_10px_20px_rgba(0,210,190,0.1)] transition-all duration-300">
                <span className="block text-4xl font-black text-petronas-400 mb-1">
                  <AnimatedNumber value={10} />+
                </span>
                <span className="text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider">Projects<br/>Completed</span>
              </motion.div>
              
              <motion.div variants={statCardVariants} className="col-span-2 md:col-span-1 bg-carbon-900 border border-carbon-700 p-5 rounded-xl text-center hover:-translate-y-2 hover:border-petronas-400/50 hover:shadow-[0_10px_20px_rgba(0,210,190,0.1)] transition-all duration-300">
                <span className="block text-4xl font-black text-petronas-400 mb-1">
                  <AnimatedNumber value={5} />+
                </span>
                <span className="text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider">Certifications</span>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}