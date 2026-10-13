"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] items-center overflow-hidden bg-[#F2F4F7] px-6 py-24 text-slate-blue-800 md:px-12"
    >
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.p
            variants={itemVariants}
            className="mb-8 font-mono text-xs tracking-[0.18em] text-[#77776F] md:text-sm"
          >
            INFORMATICS · SOFTWARE · MACHINE LEARNING
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="mb-8 text-5xl font-semibold leading-[1.05] tracking-[-0.055em] sm:text-6xl md:text-8xl"
          >
            Rizky Maulana
            <br />
            <span className="text-[#00BFAE]">Saputra.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mb-10 max-w-2xl text-base leading-8 text-[#66665F] md:text-lg"
          >
            Informatics graduate interested in software engineering, computer
            vision, and machine learning. I build practical applications and
            explore how data-driven systems can solve real problems.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-5"
          >
            <Link
              href="#projects"
              className="inline-flex items-center justify-center border border-slate-blue-800 bg-slate-blue-800 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#00BFAE] hover:border-[#00BFAE]"
            >
              View selected work <span className="ml-3">↗</span>
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 border-b border-[#B8B6AE] py-3 text-sm font-medium transition-colors hover:border-[#00BFAE] hover:text-[#00BFAE]"
            >
              Get in touch <span>↗</span>
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16 border-t border-[#D8D5CD] pt-5 text-xs tracking-wide text-[#77776F] sm:flex sm:items-center sm:justify-between"
          >
            <span>BASED IN SURAKARTA, INDONESIA</span>
            <span className="mt-2 block sm:mt-0">
              SOFTWARE DEVELOPMENT / APPLIED ML
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
