"use client";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Certificates", href: "#certificates"},
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-carbon-900/80 backdrop-blur-md border-b border-carbon-800 transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="#home" className="text-2xl font-bold text-white tracking-tight">
          My<span className="text-petronas-400">Portofolio</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="relative group text-sm font-medium text-gray-300 hover:text-white transition-colors py-2"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-petronas-400 transition-all duration-300 group-hover:w-full rounded-full" />
            </Link>
          ))}
        </div>
        <div className="hidden md:block">
          <Link 
            href="#contact" 
            className="px-5 py-2.5 text-sm font-bold text-carbon-900 bg-petronas-400 hover:bg-petronas-500 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,210,190,0.4)]"
          >
            Let`s Talk
          </Link>
        </div>
        <button 
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-carbon-900 border-b border-carbon-800 absolute w-full left-0 shadow-lg">
          <div className="flex flex-col px-4 pt-2 pb-6 space-y-3">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                onClick={() => setIsOpen(false)} 
                className="text-base font-medium text-gray-300 hover:text-petronas-400 hover:bg-carbon-800 px-3 py-2 rounded-lg transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link 
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 text-center px-5 py-3 text-sm font-bold text-carbon-900 bg-petronas-400 hover:bg-petronas-500 rounded-lg transition-all"
            >
              Let`s Talk
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}