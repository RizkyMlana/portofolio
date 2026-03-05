"use client";
import { motion } from "framer-motion";
// import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-carbon-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-petronas-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-2/5 flex justify-center lg:justify-end"
          >
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-4 border-2 border-petronas-400/30 rounded-2xl rotate-6 group-hover:rotate-3 transition-transform duration-500"></div>
              
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] -rotate-3 group-hover:rotate-0 transition-all duration-500 bg-carbon-900 border border-carbon-700">
                <div className="w-full h-full flex flex-col items-center justify-center text-gray-600 gap-3">
                   <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                   </svg>
                   <span className="text-sm font-medium">Foto Profile</span>
                </div>
                {/* <Image src="/profile.jpg" alt="Rizky Maulana Saputra" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" /> */}
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-3/5"
          >
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Tentang <span className="text-petronas-400">Saya</span>
              </h2>
              <div className="h-px bg-carbon-700 flex-grow ml-4 hidden md:block"></div>
            </div>
            <div className="space-y-5 text-gray-400 text-base md:text-lg leading-relaxed">
              <p>
                Halo! Saya adalah seorang <strong className="text-gray-200 font-semibold">Machine Learning Engineer</strong> yang memiliki passion besar dalam mengekstrak <em>insight</em> dari data dan membangun model prediktif yang dapat memecahkan masalah dunia nyata. Saya mulai mendalami kecerdasan buatan sejak beberapa tahun lalu dan terus mengeksplorasi arsitektur algoritma terbaru.
              </p>
              <p>
                Fokus utama saya meliputi <span className="text-petronas-400 font-medium">Computer Vision, Natural Language Processing (NLP),</span> dan <span className="text-petronas-400 font-medium">Data Analytics</span>. Saat tidak sedang melatih model <em>deep learning</em> atau membersihkan dataset yang kotor, saya biasanya membaca paper riset terbaru, mengikuti kompetisi Kaggle, atau ngopi sambil mencari ide proyek baru.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-carbon-900 border border-carbon-700 p-5 rounded-xl text-center hover:-translate-y-1 hover:border-petronas-400/50 transition-all duration-300">
                <span className="block text-4xl font-black text-petronas-400 mb-1">3+</span>
                <span className="text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider">Tahun<br/>Pengalaman</span>
              </div>
              <div className="bg-carbon-900 border border-carbon-700 p-5 rounded-xl text-center hover:-translate-y-1 hover:border-petronas-400/50 transition-all duration-300">
                <span className="block text-4xl font-black text-petronas-400 mb-1">20+</span>
                <span className="text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider">Project<br/>Selesai</span>
              </div>
              <div className="col-span-2 md:col-span-1 bg-carbon-900 border border-carbon-700 p-5 rounded-xl text-center hover:-translate-y-1 hover:border-petronas-400/50 transition-all duration-300">
                <span className="block text-4xl font-black text-petronas-400 mb-1">5+</span>
                <span className="text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider">Sertifikasi<br/>Keahlian</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}