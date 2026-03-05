"use client";
import { motion } from "framer-motion";
// Import icon dari react-icons/si (Simple Icons)
import { 
  SiPython, 
  SiTensorflow, 
  SiPytorch, 
  SiScikitlearn, 
  SiPandas, 
  SiDocker, 
  SiFastapi, 
  SiPostgresql 
} from "react-icons/si";

// Array sekarang berisi object (nama & icon component)
const orbitSkills = [
  { name: "Python", icon: SiPython },
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "PyTorch", icon: SiPytorch },
  { name: "Scikit-Learn", icon: SiScikitlearn },
  { name: "Pandas", icon: SiPandas },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Docker", icon: SiDocker },
  { name: "FastAPI", icon: SiFastapi },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-carbon-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Tech <span className="text-petronas-400">Stack</span>
          </h2>
          <div className="w-16 h-1 bg-petronas-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-xl mx-auto">
            Teknologi dan <i>tools</i> yang saya gunakan sehari-hari untuk membangun model kecerdasan buatan dan mengolah data.
          </p>
        </div>
        <div className="flex justify-center items-center h-[400px]">
          <div className="[perspective:1000px] relative flex items-center justify-center">
            <div className="absolute z-10 w-20 h-20 bg-carbon-800 border-2 border-petronas-400 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(0,210,190,0.4)]">
              <span className="text-petronas-400 font-bold text-xl">AI</span>
            </div>
            <motion.div 
              animate={{ rotateY: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="relative w-80 h-80 [transform-style:preserve-3d]"
            >
              <div className="absolute inset-0 border border-carbon-700/50 rounded-full [transform:rotateX(75deg)]"></div>

              {orbitSkills.map((skill, i) => (
                <div
                  key={skill.name}
                  className="absolute top-1/2 left-1/2 flex flex-col items-center justify-center gap-2 p-3 w-24 h-24 rounded-full
                             bg-carbon-800/80 backdrop-blur-md text-gray-400
                             border border-petronas-400/20 hover:border-petronas-400 hover:text-petronas-400
                             hover:shadow-[0_0_20px_rgba(0,210,190,0.4)] transition-all duration-300 cursor-default group"
                  style={{
                    transform: `
                      translate(-50%, -50%) 
                      rotateY(${(360 / orbitSkills.length) * i}deg) 
                      translateZ(180px)
                    `,
                  }}
                >
                  <skill.icon className="text-3xl group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-[10px] font-medium tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -bottom-6">
                    {skill.name}
                  </span>
                </div>
              ))}
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}