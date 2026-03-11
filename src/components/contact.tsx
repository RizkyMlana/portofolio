"use client";
import { Mail, MapPin, Github, Linkedin, FileText, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-carbon-800 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Get In <span className="text-petronas-400">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-petronas-400 mx-auto rounded-full mb-6"></div>
        </div>
    
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-carbon-900 border border-carbon-700 p-8 md:p-12 rounded-2xl shadow-xl relative overflow-hidden text-center"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-petronas-600/10 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-petronas-600/10 rounded-full blur-2xl pointer-events-none -ml-10 -mb-10"></div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-4">Let`s Connect</h3>
            <p className="text-gray-400 leading-relaxed text-lg mb-10 max-w-2xl mx-auto">
              If you`d like to discuss a project, collaborate, or just talk about machine learning and technology, feel free to reach out. I`m always open to new ideas and opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-10">
              <div className="flex flex-col items-center group">
                <div className="w-14 h-14 bg-carbon-800 border border-carbon-700 rounded-xl flex items-center justify-center text-petronas-400 mb-4 group-hover:border-petronas-400 group-hover:shadow-[0_0_15px_rgba(0,210,190,0.3)] transition-all duration-300">
                  <Mail size={28} />
                </div>
                <p className="text-sm text-gray-500 font-medium mb-1">Email</p>
                <span className="text-gray-200 transition-colors font-medium">
                  rizkymlaana.saputra@gmail.com
                </span>
              </div>

              <div className="hidden sm:block w-px h-16 bg-carbon-700"></div>
              
              <div className="flex flex-col items-center group">
                <div className="w-14 h-14 bg-carbon-800 border border-carbon-700 rounded-xl flex items-center justify-center text-petronas-400 mb-4 group-hover:border-petronas-400 group-hover:shadow-[0_0_15px_rgba(0,210,190,0.3)] transition-all duration-300">
                  <MapPin size={28} />
                </div>
                <p className="text-sm text-gray-500 font-medium mb-1">Location</p>
                <span className="text-gray-200 font-medium">Surakarta, Jawa Tengah</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
              <a 
                href="mailto:rizkymlaana.saputra@gmail.com" 
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-petronas-400 text-carbon-900 rounded-full font-bold hover:bg-petronas-600 hover:shadow-[0_0_20px_rgba(0,210,190,0.3)] transition-all duration-300"
              >
                Send me an Email <Send size={18} />
              </a>
              <a 
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent border border-carbon-700 text-gray-300 hover:border-petronas-400 hover:text-petronas-400 rounded-full font-medium transition-all duration-300"
              >
                <FileText size={18} /> Download Resume
              </a>
            </div>

            <div className="pt-8 border-t border-carbon-700">
              <p className="text-sm text-gray-500 font-medium mb-4">Find me on</p>
              <div className="flex justify-center gap-4">
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-carbon-800 border border-carbon-700 flex items-center justify-center rounded-full text-gray-400 hover:border-petronas-400 hover:text-petronas-400 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,210,190,0.3)] transition-all duration-300">
                  <Github size={22} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-carbon-800 border border-carbon-700 flex items-center justify-center rounded-full text-gray-400 hover:border-petronas-400 hover:text-petronas-400 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,210,190,0.3)] transition-all duration-300">
                  <Linkedin size={22} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}