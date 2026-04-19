"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const logos = [
  "BrandA", "BrandB", "BrandC", "BrandD", "BrandE", "BrandF", "BrandG", "BrandH",
];

const Marquee = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    // Duplicate logos for infinite loop
    const totalWidth = (marquee as any).scrollWidth;
    
    gsap.to(marquee, {
      x: -totalWidth / 2,
      duration: 20,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <section className="py-20 border-y border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary-pink">Who we work with</h2>
      </div>
      
      <div className="flex whitespace-nowrap" ref={marqueeRef}>
        {[...logos, ...logos].map((logo, index) => (
          <div 
            key={index} 
            className="inline-flex items-center justify-center px-12 text-3xl md:text-5xl font-black uppercase tracking-tighter opacity-20 hover:opacity-100 transition-opacity cursor-default"
          >
            {logo}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
