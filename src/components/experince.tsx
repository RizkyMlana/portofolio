"use client";

import { motion, type Variants } from "framer-motion";

const experiences = [
  {
    company: "Media Sarana Digital",
    role: "Backend Developer Intern",
    period: "Nov 2025 — Jan 2026",
    type: "Internship",
    description:
      "Developed and maintained RESTful APIs, integrated database systems, and supported backend feature implementation for internal web applications using Laravel and MySQL.",
    technologies: ["Laravel", "MySQL", "Supabase", "REST API"],
  },
  {
    company: "Coding Camp powered by DBS Foundation",
    role: "Machine Learning Cohort",
    period: "Feb 2025 — Jul 2025",
    type: "Bootcamp",
    description:
      "Completed an intensive machine learning program with hands-on development in data preprocessing, model training, and AI implementation. Contributed to a capstone project focused on building practical machine learning solutions using collaborative workflows.",
    technologies: ["Python", "TensorFlow", "Matplotlib", "Scikit-learn"],
  },
  {
    company: "Informatics Laboratory",
    role: "Web Programming Teaching Assistant",
    period: "Feb 2025 — Jun 2025",
    type: "Academic",
    description:
      "Assisted students during web programming practicum sessions, guided frontend and backend development concepts, and helped troubleshoot coding and implementation issues.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
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

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
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

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#F2F4F7] px-6 py-24 text-slate-blue-800 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 border-b border-[#D8D5CD] pb-8 md:mb-16">
          <p className="mb-4 font-mono text-xs tracking-[0.18em] text-[#00BFAE]">
            BACKGROUND / EXPERIENCE
          </p>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="text-4xl font-semibold tracking-[-0.055em] sm:text-5xl md:text-6xl">
              Experience<span className="text-[#00BFAE]">.</span>
            </h2>

            <p className="max-w-md text-sm leading-7 text-[#66665F] md:text-base">
              Professional experience, technical training, and academic
              contributions that have shaped my engineering practice.
            </p>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="border-t border-[#D8D5CD]"
        >
          {experiences.map((exp, index) => (
            <motion.article
              key={`${exp.company}-${exp.role}`}
              variants={itemVariants}
              className="grid grid-cols-1 gap-4 border-b border-[#D8D5CD] py-8 md:grid-cols-[180px_minmax(0,1fr)] md:gap-12 md:py-10 lg:grid-cols-[220px_minmax(0,1fr)]"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 md:block">
                <p className="font-mono text-xs tracking-wide text-[#77776F]">
                  {exp.period}
                </p>

                <span className="inline-flex border border-[#C7C3B9] px-2.5 py-1 text-[11px] uppercase tracking-[0.12em] text-[#66665F] md:mt-3">
                  {exp.type}
                </span>
              </div>

              <div>
                <p className="mb-2 font-mono text-xs text-[#00BFAE]">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="text-xl font-semibold leading-snug tracking-[-0.035em] sm:text-2xl">
                  {exp.role}
                </h3>

                <p className="mt-1 text-sm font-medium text-[#66665F]">
                  {exp.company}
                </p>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-[#66665F] md:text-base">
                  {exp.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs text-[#77776F]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
