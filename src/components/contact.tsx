"use client";

import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { SiHuggingface, SiInstagram, SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/RizkyMlana",
    icon: SiGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rizky-maulana-saputra",
    icon: FaLinkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/rizkymlaana/",
    icon: SiInstagram,
  },
  {
    name: "Hugging Face",
    href: "https://huggingface.co/Mlaana/",
    icon: SiHuggingface,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#F2F4F7] px-6 py-24 text-slate-blue-800 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="border-t border-[#D8D5CD] pt-8">
            <p className="mb-5 font-mono text-xs tracking-[0.18em] text-[#00BFAE]">
              CONTACT / GET IN TOUCH
            </p>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.8fr)] md:items-end md:gap-16">
              <div>
                <h2 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-5xl md:text-7xl">
                  Have a project
                  <br />
                  or opportunity?
                  <span className="text-[#00BFAE]"> Let’s talk.</span>
                </h2>

                <p className="mt-6 max-w-xl text-sm leading-8 text-[#66665F] md:text-base">
                  Feel free to reach out about job opportunities,
                  collaborations, or discussions around software development and
                  machine learning.
                </p>

                <Link
                  href="mailto:rizkymlaana.saputra@gmail.com"
                  className="mt-8 inline-flex items-center gap-3 border-b border-slate-blue-800 pb-3 text-sm font-medium transition-colors hover:border-[#00BFAE] hover:text-[#00BFAE]"
                >
                  <Mail size={17} strokeWidth={1.5} aria-hidden="true" />
                  rizkymlaana.saputra@gmail.com
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </Link>
              </div>

              <div className="border-t border-[#D8D5CD] pt-6 md:justify-self-end md:w-full md:max-w-sm">
                <p className="mb-4 font-mono text-xs tracking-[0.14em] text-[#77776F]">
                  CURRENT LOCATION
                </p>

                <div className="flex items-center gap-3 text-sm text-slate-blue-800">
                  <MapPin
                    size={17}
                    strokeWidth={1.5}
                    className="text-[#00BFAE]"
                    aria-hidden="true"
                  />
                  Surakarta, Jawa Tengah, Indonesia
                </div>

                <div className="mt-10 border-t border-[#D8D5CD] pt-6">
                  <p className="mb-4 font-mono text-xs tracking-[0.14em] text-[#77776F]">
                    FIND ME ONLINE
                  </p>

                  <div className="flex flex-wrap gap-x-6 gap-y-4">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;

                      return (
                        <Link
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.name}
                          className="inline-flex items-center gap-2 text-sm text-[#66665F] transition-colors hover:text-[#00BFAE]"
                        >
                          <Icon size={17} aria-hidden="true" />
                          {social.name}
                          <ArrowUpRight
                            size={13}
                            strokeWidth={1.5}
                            aria-hidden="true"
                          />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20 flex flex-col justify-between gap-3 border-t border-[#D8D5CD] pt-5 text-xs text-[#77776F] sm:flex-row sm:items-center">
              <span>RIZKY MAULANA SAPUTRA</span>
              <span>SOFTWARE DEVELOPMENT · APPLIED MACHINE LEARNING</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
