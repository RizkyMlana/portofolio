"use client"
import { motion, Variants} from "framer-motion";

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

export default function Experience(){
    const containerVariants: Variants = {
        hidden: {},
        visible: {
        transition: {
            staggerChildren: 0.15,
        },
        },
    };

    const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: "blur(10px)",
    },
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

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-carbon-800 pt-24 pb-32"
    >
      <div className="pointer-events-none absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-petronas-600/10 blur-[120px]" />

      <div className="absolute top-0 left-0 h-24 w-full bg-linear-to-b from-carbon-900 to-transparent z-10" />

      <div className="absolute bottom-0 left-0 h-24 w-full bg-linear-to-b from-transparent to-carbon-900 z-10" />

      <div className="container relative z-20 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            Work & Project
            <span className="text-petronas-400"> Experience</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg">
            A collection of internships, freelance work, and technical
            projects focused on backend engineering, AI systems, and modern
            web development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative mx-auto max-w-4xl"
        >
          <div className="absolute left-4 top-0 h-full w-px bg-carbon-700 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`relative flex w-full ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >
                <div className="absolute left-4 top-8 z-20 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-carbon-800 bg-petronas-400 md:left-1/2" />

                <div className="ml-12 w-full md:ml-0 md:w-[46%]">
                  <div className="group rounded-2xl border border-carbon-700 bg-carbon-900/80 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-petronas-400/40 hover:shadow-[0_10px_30px_rgba(0,210,190,0.08)]">
                    <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                      <span className="rounded-full border border-petronas-400/20 bg-petronas-400/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-petronas-400">
                        {exp.type}
                      </span>

                      <span className="text-sm text-gray-500">
                        {exp.period}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {exp.role}
                    </h3>

                    <p className="mt-1 text-petronas-400">
                      {exp.company}
                    </p>
                    <p className="mt-4 leading-relaxed text-gray-400">
                      {exp.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="rounded-full border border-carbon-700 bg-carbon-800 px-3 py-1 text-xs font-medium text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );

}