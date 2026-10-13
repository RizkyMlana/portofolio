"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";

const projects = [
  {
    title: "Freshwater Fish Disease Classification",
    desc: "Undergraduate thesis project comparing ShuffleNet, EfficientNet, ResNet, and MobileNet for freshwater fish disease classification using deep learning and computer vision.",
    tech: ["Python", "PyTorch", "Gradio", "HuggingFace"],
    image: "/images/projects/freshwater-fish-classification.png",
    githubLink: "https://github.com/RizkyMlana/Freshwater-Fish-Disease-Model",
    demoLink: "https://huggingface.co/spaces/Mlaana/Freshwater-Fish-Disease",
  },
  {
    title: "SignArgi — Sign Language Recognition",
    desc: "Computer vision system that recognizes sign language gestures using a MobileNet-based CNN model. Designed as a prototype for real-time sign language translation.",
    tech: ["Python", "TensorFlow", "OpenCV"],
    image: "/images/projects/signargi.png",
    githubLink: "https://github.com/RizkyMlana/SignArgi-Model",
  },
  {
    title: "GymBro — AI Fitness Chatbot",
    desc: "Fitness-focused chatbot application deployed using Gradio and HuggingFace Spaces.",
    tech: ["Python", "HuggingFace", "Gradio"],
    image: "/images/projects/gymbro-chatbot.png",
    githubLink: "https://huggingface.co/spaces/Mlaana/Chatbot/tree/main",
    demoLink: "https://huggingface.co/spaces/Mlaana/Chatbot",
  },
  {
    title: "GymBro — Exercise Classification Model",
    desc: "Computer vision model for recognizing workout exercises from images using a convolutional neural network. Deployed as an interactive demo using Gradio on HuggingFace Spaces.",
    tech: ["Python", "TensorFlow", "Gradio", "HuggingFace"],
    image: "/images/projects/gymbro-classification-food.png",
    githubLink:
      "https://huggingface.co/spaces/Mlaana/Classification-Food/tree/main",
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
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const projectVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#E6EAF0] px-6 py-24 text-slate-blue-800 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-6 border-b border-[#D6DCE5] pb-8 md:mb-16 md:flex-row md:items-end">
          <div>
            <p className="mb-4 font-mono text-xs tracking-[0.18em] text-[#00BFAE]">
              SELECTED WORK / 01—06
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.055em] sm:text-5xl md:text-6xl">
              Projects<span className="text-[#00BFAE]">.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#66665F] md:text-base">
            A selection of projects exploring machine learning, computer vision,
            natural language processing, and data engineering.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 md:gap-y-16 lg:gap-x-10"
        >
          {projects.map((project, index) => (
            <motion.article
              variants={projectVariants}
              key={project.title}
              className="group min-w-0"
            >
              <div className="relative mb-6 aspect-16/10 overflow-hidden bg-[#EAE7DF]">
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />

                <span className="absolute left-4 top-4 z-10 bg-[#F2F4F7] px-3 py-1.5 font-mono text-xs text-slate-blue-800">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="flex flex-col">
                <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                  <h3 className="max-w-xl text-xl font-semibold leading-snug tracking-[-0.03em] transition-colors group-hover:text-[#00BFAE] sm:text-2xl">
                    {project.title}
                  </h3>

                  <span className="pt-1 font-mono text-xs text-[#A39F95]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mb-5 max-w-2xl text-sm leading-7 text-[#66665F]">
                  {project.desc}
                </p>

                <div className="mb-6 flex flex-wrap gap-x-3 gap-y-2">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="font-mono text-xs text-[#77776F]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#D6DCE5] pt-4">
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-blue-800 transition-colors hover:text-[#00BFAE]"
                  >
                    <SiGithub aria-hidden="true" size={15} />
                    Source
                    <span aria-hidden="true">↗</span>
                  </Link>

                  {project.demoLink && (
                    <Link
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-[#00BFAE] transition-colors hover:text-slate-blue-800"
                    >
                      Live demo
                      <span aria-hidden="true">↗</span>
                    </Link>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-20 flex flex-col justify-between gap-5 border-t border-[#D6DCE5] pt-6 sm:flex-row sm:items-center">
          <p className="text-sm text-[#77776F]">
            More experiments and source code
          </p>

          <Link
            href="https://github.com/RizkyMlana"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-3 border-b border-slate-blue-800 pb-2 text-sm font-medium transition-colors hover:border-[#00BFAE] hover:text-[#00BFAE]"
          >
            Explore GitHub
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
