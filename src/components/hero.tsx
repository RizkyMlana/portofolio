"use client";

import { useMemo } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Hyperspeed from "./Hyperspeed";

export default function Hero() {
  const effectOptions = useMemo(
    () => ({
      distortion: "LongRaceDistortion",
      length: 400,
      roadWidth: 10,
      islandWidth: 2,
      lanesPerRoad: 4,
      fov: 90,
      fovSpeedUp: 140,
      speedUp: 2,
      carLightsFade: 0.4,

      colors: {
        roadColor: 0x080808,
        islandColor: 0x0a0a0a,
        background: 0x000000,
        shoulderLines: 0xffffff,
        brokenLines: 0xffffff,

        leftCars: [0x00d2be, 0x14f1d9],
        rightCars: [0x03b3c3, 0x0e5ea5],

        sticks: 0x00d2be,
      },
    }),
    []
  );

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
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.8,
      },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black"
    >
      <div className="absolute inset-0 z-0">
        <Hyperspeed effectOptions={effectOptions} />
      </div>

      <div className="absolute inset-0 bg-black/55 z-1" />

      <div
        className="absolute inset-0 z-2 pointer-events-none overflow-hidden"
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse at center, transparent 30%, black 100%)",
          maskImage:
            "radial-gradient(ellipse at center, transparent 30%, black 100%)",
        }}
      >
        <div className="w-full h-full opacity-15">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <g id="star-template">
                <path
                  d="M 24 10 L 26 23 L 38 34 L 24 28 L 10 34 L 22 23 Z"
                  fill="#cbd5e1"
                />
              </g>

              <pattern
                id="f1-stars-sparse"
                x="0"
                y="0"
                width="160"
                height="160"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(-15)"
              >
                <use href="#star-template" x="0" y="0" />
                <use href="#star-template" x="80" y="40" />
                <use href="#star-template" x="40" y="120" />
                <use href="#star-template" x="120" y="80" />
              </pattern>
            </defs>

            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#f1-stars-sparse)"
            />
          </svg>
        </div>
      </div>

      <div className={"absolute top-1/2 left-1/2 z-3 w-150 h-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-petronas-600/10 blur-[120px]"} />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="container mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div variants={greetingVariants} className="mb-4">
              <span className="font-mono text-lg tracking-wider text-petronas-400 md:text-xl">
                &gt; Hi, I&apos;m
              </span>
            </motion.div>

            <motion.h1
              variants={titleVariants}
              className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-white md:text-7xl lg:text-8xl"
            >
              Rizky Maulana <br className="hidden md:block" />
              <span className="bg-linear-to-r from-petronas-400 to-petronas-600 bg-clip-text text-transparent">
                Saputra.
              </span>
            </motion.h1>

            <motion.p
              variants={textVariants}
              className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl"
            >
              Machine Learning enthusiast and Informatics student with a
              strong interest in AI and data-driven systems.
            </motion.p>

            <motion.div
              variants={buttonVariants}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link
                href="#projects"
                className="w-full rounded-full bg-petronas-400 px-8 py-3.5 font-bold text-carbon-900 transition-all duration-300 hover:bg-petronas-500 hover:shadow-[0_0_20px_rgba(0,210,190,0.3)] sm:w-auto"
              >
                View My Projects
              </Link>

             <Link
                href="#contact"
                className="w-full sm:w-auto rounded-full border border-carbon-700 bg-carbon-800/40 backdrop-blur-md px-8 py-3.5 font-medium text-white transition-all duration-300 hover:border-petronas-400 hover:bg-carbon-800/70 hover:text-petronas-400 hover:shadow-[0_0_20px_rgba(0,210,190,0.15)]"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 z-5 h-40 w-full bg-linear-to-b from-transparent to-[#0A0A0A]" />
    </section>
  );
}