"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "SignArgi – Sign Language Recognition",
    desc: "Computer vision system that recognizes sign language gestures using a MobileNet-based CNN model. Designed as a prototype for real-time sign language translation.",
    tech: ["TensorFlow", "OpenCV", "MobileNet"],
    image: "/images/projects/signargi.png",
    githubLink: "https://github.com/RizkyMlana/SignArgi-Model",
  },
  {
    title: "GymBro – AI Fitness Assistant",
    desc: "AI-powered fitness assistant featuring an image classification model and chatbot. Responsible for deploying the machine learning models using HuggingFace Spaces.",
    tech: ["Python", "HuggingFace", "Gradio"],
    image: "/images/projects/gymbro-chatbot.png",
    githubLink: "https://huggingface.co/spaces/Mlaana/Chatbot/tree/main",
    demoLink: "https://huggingface.co/spaces/Mlaana/Chatbot",
  },
  {
    title: "GymBro – Exercise Image Classifier",
    desc: "Computer vision model for recognizing workout exercises from images using a convolutional neural network. Deployed as an interactive demo using Gradio on HuggingFace Spaces.",
    tech: ["Python", "TensorFlow", "Gradio"],
    image: "/images/projects/gymbro-classification-food.png",
    githubLink: "https://huggingface.co/spaces/Mlaana/Classification-Food/tree/main",
    demoLink: "https://huggingface.co/spaces/Mlaana/Classification-Food",
  }, 
  {
    title: "Sentiment Analysis of MyTelkomsel Reviews",
    desc: "NLP pipeline analyzing Play Store reviews of the MyTelkomsel app using lexicon-based labeling, multiple feature extraction methods, and machine learning models.",
    tech: ["Python", "Scikit-Learn", "NLTK"],
    image: "/images/projects/nlp-wordcloud.png",
    githubLink: "https://github.com/RizkyMlana/Assignment-NLP",
  },
  {
    title: "Automated ETL Data Pipeline",
    desc: "End-to-end ETL pipeline that scrapes data from a web source, performs transformation, and loads it into structured datasets with automated testing for reliability.",
    tech: ["Python", "BeautifulSoup", "PyTest"],
    image: "/images/projects/pipeline.png",
    githubLink: "https://github.com/RizkyMlana/ETL-Project",
  },
  {
    title: "Student Exam Score Prediction",
    desc: "Data science project predicting student exam scores using machine learning models. The project includes exploratory data analysis, feature engineering, and model evaluation to understand factors affecting academic performance.",
    tech: ["Python", "Pandas", "Scikit-Learn", "Matplotlib"],
    image: "/images/projects/correlation-map.png",
    githubLink: "https://github.com/RizkyMlana/Data-Science-Final-Project",
  },
];

export default function Projects() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 } 
    },
  };

  return (
    <section id="projects" className="py-24 bg-carbon-900 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Featured <span className="text-petronas-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-petronas-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of machine learning and data-driven projects I built while learning and experimenting with different models and technologies.
          </p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
        >
          {projects.map((project) => (
            <motion.div 
              variants={cardVariants}
              key={project.title} 
              className="group bg-carbon-800 border border-carbon-700 rounded-2xl overflow-hidden hover:border-petronas-400/50 hover:shadow-sm hover:shadow-petronas-400 hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-video w-full bg-carbon-900 overflow-hidden border-b border-carbon-700">
                 <div className="absolute inset-0 flex flex-col justify-center items-center text-gray-500 z-0">
                    <svg className="w-10 h-10 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-xs">Project Image</span>
                 </div>
                 <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center relative z-10 group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100" 
                 />
                 
                 <div className="absolute inset-0 bg-gradient-to-t from-carbon-800 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none"></div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-petronas-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="px-3 py-1 bg-carbon-900 text-gray-300 border border-carbon-700 text-xs font-medium rounded-md group-hover:border-petronas-400/30 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-carbon-700 flex items-center justify-between mt-auto">
                  <a href={project.githubLink} className="text-gray-400 hover:text-white flex items-center gap-2 text-sm font-medium transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    Source Code
                  </a>

                  {project.demoLink && (
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-petronas-400 hover:text-petronas-300 flex items-center gap-1.5 text-sm font-medium transition-colors">
                      Live Demo
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-14 text-center"
        >
          <a href="https://github.com/RizkyMlana" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 bg-carbon-800 border border-carbon-700 hover:border-petronas-400 text-gray-300 hover:text-petronas-400 rounded-full text-sm font-semibold hover:shadow-sm hover:shadow-petronas-400 transition-all duration-300">
            View More on GitHub 
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
}