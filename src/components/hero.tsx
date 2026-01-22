"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl text-blue-600 font-semibold mb-2">Halo, saya</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gray-900 dark:text-white">
            Nama Kamu
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Seorang Fullstack Developer yang fokus membangun website interaktif dan scalable.
          </p>
          <a 
            href="#projects"
            className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all"
          >
            Lihat Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}