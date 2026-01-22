"use client";
import Link from "next/link";
// import { useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 dark:bg-black/80 dark:border-gray-800">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">PortofolioSaya.</h1>
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}