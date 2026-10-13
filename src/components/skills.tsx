"use client";

import { motion, type Variants } from "framer-motion";
import {
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiYolo,
  SiOpencv,
  SiFastapi,
  SiPostgresql,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiGo,
  SiLaravel,
  SiExpress,
  SiMysql,
  SiSupabase,
} from "react-icons/si";

const aiSkills = [
  { name: "Python", icon: SiPython },
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "PyTorch", icon: SiPytorch },
  { name: "Yolo", icon: SiYolo },
  { name: "OpenCV", icon: SiOpencv },
];

const feSkills = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
];
const beSkills = [
  { name: "FastAPI", icon: SiFastapi },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MySQL", icon: SiMysql },
  { name: "Supabase", icon: SiSupabase },
  { name: "Golang", icon: SiGo },
  { name: "Laravel", icon: SiLaravel },
  { name: "Express.js", icon: SiExpress },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

function SkillGroup({
  number,
  title,
  description,
  skills,
}: {
  number: string;
  title: string;
  description: string;
  skills: typeof aiSkills;
}) {
  return (
    <div className="min-w-0">
      <div className="mb-6 border-b border-[#D6DCE5] pb-5">
        <p className="mb-3 font-mono text-xs tracking-[0.16em] text-[#00BFAE]">
          {number} / TECHNICAL SKILLS
        </p>

        <h3 className="text-2xl font-semibold tracking-[-0.04em]">{title}</h3>

        <p className="mt-2 text-sm leading-7 text-[#596474]">{description}</p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="grid grid-cols-2 gap-x-4 sm:grid-cols-2"
      >
        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="flex items-center gap-3 border-b border-[#D6DCE5]/80 py-4"
            >
              <Icon
                size={18}
                aria-hidden="true"
                className="shrink-0 text-[#77776F]"
              />
              <span className="text-sm font-medium text-slate-blue-800">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#F2F4F7] px-6 py-24 text-slate-blue-800 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-6 border-b border-[#D6DCE5] pb-8 md:mb-16 md:flex-row md:items-end">
          <div>
            <p className="mb-4 font-mono text-xs tracking-[0.18em] text-[#00BFAE]">
              TOOLS / TECHNOLOGIES
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.055em] sm:text-5xl md:text-6xl">
              Technical skills<span className="text-[#00BFAE]">.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#596474] md:text-base">
            Technologies I use for machine learning experiments, data analysis,
            and web application development.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-8">
          <SkillGroup
            number="01"
            title="Machine Learning & Data"
            description="Tools for data analysis, preprocessing, visualization, and machine learning model development."
            skills={aiSkills}
          />

          <SkillGroup
            number="02"
            title="Frontend Development"
            description="Technologies for building responsive web interfaces and developing server-side applications."
            skills={feSkills}
          />
          <SkillGroup
            number="03"
            title="Backend & Database"
            description="Tools for managing relational databases and building APIs for application integration."
            skills={beSkills}
          />
        </div>
      </div>
    </section>
  );
}
