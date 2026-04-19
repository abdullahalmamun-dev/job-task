"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Expertises", href: "#expertise" },
    { name: "Work", href: "#cases" },
    { name: "About", href: "#agency" },
    { name: "Contact", href: "#socials" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4 flex items-center justify-between",
        isScrolled ? "bg-white/50 backdrop-blur-lg" : "bg-transparent"
      )}
    >
      {/* Logo */}
      <Link href="/" className="text-xl md:text-2xl font-black tracking-tighter flex items-center">
        GET HYPED<span className="text-primary-pink">.</span>
      </Link>

      {/* Centered Pill Navigation */}
      <div className="hidden md:flex items-center bg-white/80 backdrop-blur-md rounded-full px-8 py-3 shadow-lg shadow-black/5 border border-white/20">
        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-sm font-bold uppercase tracking-tight hover:text-primary-pink transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Button */}
      <div className="flex items-center gap-4">
        <button className="bg-primary-pink text-black font-bold uppercase text-[10px] md:text-xs px-4 md:px-6 py-2 md:py-3 rounded-full flex items-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-primary-pink/20">
          Get Results <span className="text-sm">🔥</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
