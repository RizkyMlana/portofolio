"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#E6EAF0] px-6 py-24 text-slate-blue-800 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 border-b border-[#D8D5CD] pb-8 md:mb-16">
          <p className="mb-4 font-mono text-xs tracking-[0.18em] text-[#00BFAE]">
            A LITTLE ABOUT ME
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.055em] sm:text-5xl md:text-6xl">
            About me<span className="text-[#00BFAE]">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="min-w-0"
          >
            <div className="relative aspect-4/5 w-full max-w-md overflow-hidden bg-[#D8D5CD]">
              <Image
                src="/images/profile.jpg"
                alt="Rizky Maulana Saputra"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-center"
                loading="eager" 
              />
            </div>

            <p className="mt-4 font-mono text-xs tracking-wide text-[#77776F]">
              RIZKY MAULANA SAPUTRA · INFORMATICS
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="min-w-0 md:pt-2"
          >
            <motion.p
              variants={itemVariants}
              className="text-xl font-medium leading-relaxed tracking-tight sm:text-2xl md:text-3xl"
            >
              I’m an Informatics graduate interested in software development,
              machine learning, and data-driven applications.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-sm leading-8 text-[#66665F] md:text-base"
            >
              My experience includes backend development, web programming
              assistance, and machine learning projects. Through these
              experiences, I’ve worked with application development, data
              processing, and model experimentation.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mt-4 text-sm leading-8 text-[#66665F] md:text-base"
            >
              I’m interested in building practical solutions, understanding how
              systems work, and continuing to develop my skills through hands-on
              projects and collaboration.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-10 grid grid-cols-1 border-y border-[#D8D5CD] sm:grid-cols-2"
            >
              <div className="py-5 sm:pr-6">
                <p className="mb-2 font-mono text-xs tracking-[0.14em] text-[#00BFAE]">
                  INTERESTS
                </p>
                <p className="text-sm leading-7 text-slate-blue-800">
                  Software Engineering
                  <br />
                  Machine Learning
                  <br />
                  Data Analytics
                </p>
              </div>

              <div className="border-t border-[#D8D5CD] py-5 sm:border-l sm:border-t-0 sm:pl-6">
                <p className="mb-2 font-mono text-xs tracking-[0.14em] text-[#00BFAE]">
                  APPROACH
                </p>
                <p className="text-sm leading-7 text-slate-blue-800">
                  Hands-on development
                  <br />
                  Practical problem-solving
                  <br />
                  Continuous learning
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
