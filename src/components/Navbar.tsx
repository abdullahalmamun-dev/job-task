"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

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
      <Link href="/" className=" p-1">
        <Image src="/images/logo.png" alt="Logo" width={200} height={200} />
      </Link>

      {/* Centered Pill Navigation */}
      <div className="hidden md:flex items-center bg-white/80 backdrop-blur-md rounded-xl px-10 py-3 shadow-lg shadow-black/5 border border-white/20">
        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-xl font-bold  tracking-tight hover:text-primary-pink transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Button */}
      <div className="flex items-center gap-4">
  <button className="bg-primary-pink text-black font-bold uppercase text-[10px] md:text-lg px-4 md:px-6 py-2 md:py-3 rounded-xl flex items-center gap-2 transition-all duration-300 ease-out hover:scale-110 hover:-rotate-6 shadow-lg shadow-primary-pink/20">
    Get Results <span className="text-2xl rounded-md bg-white">🔥</span>
  </button>
</div>
    </nav>
  );
};

export default Navbar;
