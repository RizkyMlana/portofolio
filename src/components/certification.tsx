"use client";

import { ExternalLink, Award } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";

const certificates = [
  {
    name: "Machine Learning Development",
    issuer: "Dicoding",
    date: "May 2025",
    link: "https://www.dicoding.com/certificates/QLZ93YJM9Z5D",
  },
  {
    name: "Applied Machine Learning",
    issuer: "Dicoding",
    date: "June 2025",
    link: "https://www.dicoding.com/certificates/L4PQENGWOPO1",
  },
  {
    name: "Data Processing Fundamentals",
    issuer: "Dicoding",
    date: "May 2025",
    link: "https://www.dicoding.com/certificates/6RPNRE839X2M",
  },
  {
    name: "Learning Generative AI Fundamentals",
    issuer: "Dicoding",
    date: "Jun 2026",
    link: "https://www.dicoding.com/certificates/JLX1V871JZ72",
  },
  {
    name: "Learning Data Science Implementation with Microsoft Fabric",
    issuer: "Dicoding",
    date: "May 2026",
    link: "https://www.dicoding.com/certificates/JMZVOO87NXN9",
  },
  {
    name: "Machine Learning Learning Path (Scholarship)",
    issuer: "DBS Foundation x Dicoding",
    date: "2025",
    link: "https://www.linkedin.com/posts/rizky-maulana-saputra_certificate-of-completion-dbs-coding-camp-activity-7349014551469641730-CGKe",
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

const cardVariants: Variants = {
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

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="bg-[#E6EAF0] px-6 py-24 text-slate-blue-800 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-6 border-b border-[#D8D5CD] pb-8 md:mb-16 md:flex-row md:items-end">
          <div>
            <p className="mb-4 font-mono text-xs tracking-[0.18em] text-[#00BFAE]">
              LEARNING / CERTIFICATIONS
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.055em] sm:text-5xl md:text-6xl">
              Certifications<span className="text-[#00BFAE]">.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#66665F] md:text-base">
            Courses and learning programs focused on machine learning, data
            processing, and applied data science.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-x-10 md:grid-cols-2"
        >
          {certificates.map((cert, index) => (
            <motion.article
              variants={cardVariants}
              key={cert.name}
              className="group flex min-w-0 flex-col border-b border-[#D8D5CD] py-7 sm:flex-row sm:items-start sm:gap-5 md:py-9"
            >
              <div className="mb-4 flex h-11 w-11 shrink-0 items-center justify-center border border-[#D8D5CD] text-[#00BFAE] transition-colors group-hover:border-[#00BFAE] sm:mb-0">
                <Award size={20} strokeWidth={1.5} aria-hidden="true" />
              </div>

              <div className="flex min-w-0 flex-1 flex-col">
                <p className="mb-2 font-mono text-xs text-[#A39F95]">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="text-lg font-semibold leading-snug tracking-0.025em transition-colors group-hover:text-[#00BFAE] sm:text-xl">
                  {cert.name}
                </h3>

                <p className="mt-2 text-sm text-[#66665F]">{cert.issuer}</p>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-[#D8D5CD] pt-4">
                  <span className="font-mono text-xs text-[#77776F]">
                    {cert.date}
                  </span>

                  <Link
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-blue-800 transition-colors hover:text-[#00BFAE]"
                  >
                    View certificate
                    <ExternalLink
                      size={14}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
