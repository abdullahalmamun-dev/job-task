"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "Brand Name 01",
    category: "Paid Social / Growth",
    color: "bg-primary-pink",
    image: "/placeholder-1.jpg",
  },
  {
    id: 2,
    title: "Eco Agency",
    category: "Creative / Strategy",
    color: "bg-primary-green",
    image: "/placeholder-2.jpg",
  },
  {
    id: 3,
    title: "Fintech Pro",
    category: "Full Funnel Marketing",
    color: "bg-primary-blue",
    image: "/placeholder-3.jpg",
  },
  {
    id: 4,
    title: "Luxe Wear",
    category: "Production / Creative",
    color: "bg-gray-200",
    image: "/placeholder-4.jpg",
  },
];

const CaseStudies = () => {
  return (
    <section id="cases" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary-pink mb-4">Case Studies</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">Selected Works.</h3>
        </div>
        
        <button className="btn-swoosh flex items-center gap-2 border-black hover:border-black hover:text-black">
          View all cases <ArrowUpRight size={18} />
        </button>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((work, index) => (
          <div 
            key={work.id} 
            className={`group cursor-pointer ${index === 1 ? 'lg:translate-y-20' : ''} ${index === 2 ? 'lg:translate-y-40' : ''}`}
          >
            <div className={`aspect-[4/5] rounded-[32px] mb-6 overflow-hidden relative ${work.color} transition-transform duration-500 group-hover:scale-[0.98]`}>
              {/* Placeholder Content */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20 text-4xl font-black uppercase text-black rotate-[-15deg]">
                {work.title}
              </div>
              
              {/* Overlay with details appearing on hover? The original site is fairly clean. */}
              <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight size={20} className="text-black" />
              </div>
            </div>
            
            <h4 className="text-2xl font-bold uppercase tracking-tighter mb-1">{work.title}</h4>
            <p className="text-sm font-medium opacity-60 uppercase">{work.category}</p>
          </div>
        ))}
      </div>
      
      {/* Visual spacer for the staggered grid */}
      <div className="h-40 hidden lg:block" />
    </section>
  );
};

export default CaseStudies;
