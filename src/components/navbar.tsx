"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certificates", href: "#certificates" },
  { name: "Skills", href: "#skills" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[#D6DCE5] bg-[#F2F4F7]/95 text-slate-blue-800 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        <Link
          href="#home"
          onClick={() => setIsOpen(false)}
          className="text-xl font-semibold tracking-[-0.06em]"
        >
          ML<span className="text-[#00BFAE]">aana</span>
          <span className="ml-1 text-[#77776F]">.</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex lg:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-[#66665F] transition-colors hover:text-[#00BFAE]"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <Link
          href="#contact"
          className="hidden border border-slate-blue-800 px-4 py-2 text-sm font-medium transition-colors hover:border-[#00BFAE] hover:bg-[#00BFAE] hover:text-white md:inline-flex"
        >
          Let’s talk <span className="ml-2">↗</span>
        </Link>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center border border-[#D6DCE5] text-slate-blue-800 transition-colors hover:border-[#00BFAE] md:hidden"
        >
          {isOpen ? (
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 6l12 12M18 6L6 18"
              />
            </svg>
          ) : (
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 7h16M4 12h16M4 17h16"
              />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="absolute left-0 w-full border-b border-[#D6DCE5] bg-[#F2F4F7] md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-6 pb-5 pt-2">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`border-b border-[#D6DCE5] py-3 text-sm transition-colors hover:text-[#00BFAE] ${
                  index === 0 ? "border-t" : ""
                }`}
              >
                <span className="mr-3 font-mono text-xs text-[#A39F95]">
                  0{index + 1}
                </span>
                {item.name}
              </Link>
            ))}

            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-5 flex items-center justify-between border border-slate-blue-800 px-4 py-3 text-sm font-medium transition-colors hover:bg-slate-blue-800 hover:text-white"
            >
              Let’s talk <span>↗</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
