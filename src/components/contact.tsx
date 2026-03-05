"use client";
import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-carbon-800 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Hubungi <span className="text-petronas-400">Saya</span>
          </h2>
          <div className="w-16 h-1 bg-petronas-400 mx-auto rounded-full mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Mari Berkolaborasi!</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                Apakah Anda memiliki proyek terkait Machine Learning, Data Analytics, atau sekadar ingin berdiskusi soal teknologi? Jangan ragu untuk menghubungi saya melalui kontak di bawah ini.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-carbon-900 border border-carbon-700 rounded-xl flex items-center justify-center text-petronas-400 group-hover:border-petronas-400 group-hover:shadow-[0_0_15px_rgba(0,210,190,0.3)] transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email</p>
                  <a href="mailto:email.kamu@example.com" className="text-gray-200 hover:text-petronas-400 transition-colors">
                    rizky.ml@example.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-carbon-900 border border-carbon-700 rounded-xl flex items-center justify-center text-petronas-400 group-hover:border-petronas-400 group-hover:shadow-[0_0_15px_rgba(0,210,190,0.3)] transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Lokasi</p>
                  <span className="text-gray-200">Surakarta, Jawa Tengah</span>
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium mb-3">Temukan saya di</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-carbon-900 border border-carbon-700 flex items-center justify-center rounded-full text-gray-400 hover:border-petronas-400 hover:text-petronas-400 hover:-translate-y-1 transition-all duration-300">
                  <Github size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-carbon-900 border border-carbon-700 flex items-center justify-center rounded-full text-gray-400 hover:border-petronas-400 hover:text-petronas-400 hover:-translate-y-1 transition-all duration-300">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="bg-carbon-900 border border-carbon-700 p-8 md:p-10 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-petronas-600/10 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10"></div>
              
              <div className="space-y-5 relative z-10">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Nama Lengkap</label>
                  <input 
                    type="text" 
                    className="w-full px-5 py-3 bg-carbon-800 border border-carbon-700 rounded-xl text-white focus:ring-1 focus:ring-petronas-400 focus:border-petronas-400 focus:outline-none transition-all placeholder-gray-500" 
                    placeholder="John Doe" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-5 py-3 bg-carbon-800 border border-carbon-700 rounded-xl text-white focus:ring-1 focus:ring-petronas-400 focus:border-petronas-400 focus:outline-none transition-all placeholder-gray-500" 
                    placeholder="john@example.com" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Pesan</label>
                  <textarea 
                    rows={4} 
                    className="w-full px-5 py-3 bg-carbon-800 border border-carbon-700 rounded-xl text-white focus:ring-1 focus:ring-petronas-400 focus:border-petronas-400 focus:outline-none transition-all resize-none placeholder-gray-500" 
                    placeholder="Tuliskan detail project atau pesan Anda di sini..." 
                  />
                </div>
                <button 
                  type="button" 
                  className="w-full bg-petronas-400 text-carbon-900 py-3.5 rounded-xl font-bold hover:bg-petronas-500 transition-all duration-300 flex items-center justify-center gap-2 mt-4 hover:shadow-[0_0_15px_rgba(0,210,190,0.4)]"
                >
                  Kirim Pesan <Send size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}