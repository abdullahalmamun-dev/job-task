"use client";

import React from 'react';

const logos = [
  { name: 'Salontopper', color: 'text-[#1A365D]', icon: '🔥', iconColor: 'text-orange-400' },
  { name: 'seesing flex', color: 'text-[#1A365D]', icon: '👤', iconColor: 'text-orange-600' },
  { name: 'Graafschap College', color: 'text-[#3E4E9E]', icon: 'G', iconColor: 'bg-[#B0C929]' },
  { name: 'fides', color: 'text-[#1A365D]', icon: '🌑', iconColor: 'text-orange-500' },
  { name: '8RHK', color: 'text-[#006837]', icon: '∞', iconColor: 'text-green-600' },
];

export default function BrandMarquee() {
  return (
    <section className="bg-[#FAF7F2] py-20 overflow-hidden">
      <div className="px-6 md:px-20 mb-12">
        <h2 className="text-7xl font-semibold leading-[0.9] tracking-tighter text-[#1A1A1A]">
          These brands<br />got hyped.
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee flex whitespace-nowrap gap-6 py-4">
          {/* Double the array to ensure seamless looping */}
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center min-w-[300px] h-[300px]  border border-black rounded-[32px] px-10 transition-all hover:bg-white"
            >
              <div className="flex items-center gap-3">
                {/* Mock Logo Icon */}
                <span className={`text-3xl ${logo.iconColor}`}>{logo.icon}</span>
                {/* Brand Name */}
                <span className={`text-3xl font-black tracking-tight ${logo.color}`}>
                  {logo.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind Animation Extension */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}