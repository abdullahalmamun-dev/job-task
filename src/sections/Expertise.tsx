"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const expertiseData = [
  {
    id: "01",
    title: "Strategy",
    subtitle: "Inzichten die impact maken.",
    description: "We duiken in de cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij.",
    color: "bg-[#2D5BFF]",
    textColor: "text-white",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "02",
    title: "Creative",
    subtitle: "Content die blijft plakken.",
    description: "Wij creëren visuals die niet alleen mooi zijn, maar ook converteren naar resultaat.",
    color: "bg-[#EBACDA]",
    textColor: "text-black",
    imageUrl: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "03",
    title: "Media",
    subtitle: "Bereik de juiste mensen.",
    description: "Met slimme distributie zorgen we dat jouw boodschap exact daar komt waar het telt.",
    color: "bg-[#36B37E]",
    textColor: "text-white",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "04",
    title: "Data",
    subtitle: "Inzichten die impact maken.",
    description: "We duiken in de cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij.",
    color: "bg-[#0081FF]", // Specific blue from your image
    textColor: "text-white",
    imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e90526ef7d?auto=format&fit=crop&q=80&w=800",
  },
];

const Expertise = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".expertise-card");
    
    cards.forEach((card: any, index: number) => {
      // Logic for stacking: Pin every card except the last one
      if (index !== cards.length - 1) {
        ScrollTrigger.create({
          trigger: card,
          start: "top 5%",
          pin: true,
          pinSpacing: false,
          endTrigger: containerRef.current,
          end: "bottom bottom",
        });
      }

      // Logic for dimming/scaling the card underneath as the next one scrolls over
      if (index < cards.length - 1) {
        gsap.to(card, {
          scale: 0.9,
          opacity: 0.5,
          scrollTrigger: {
            trigger: cards[index + 1] as any,
            start: "top 80%",
            end: "top 5%",
            scrub: true,
          }
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section className="bg-white py-20 px-4 md:px-8">
      <div ref={containerRef} className=" mx-auto space-y-10">
        {expertiseData.map((item) => (
          <div 
            key={item.id}
            className={`expertise-card relative w-full h-[500px] md:h-[650px] rounded-[45px] flex flex-col md:flex-row overflow-hidden shadow-2xl ${item.color} ${item.textColor}`}
          >
            {/* Background Number (Top Right) */}
            <div className="absolute top-0 right-10 text-[180px] md:text-[150px] font-bold opacity-10 pointer-events-none leading-none select-none">
              {item.id}
            </div>

            {/* Left Content Area */}
            <div className="flex-1 p-8 md:p-16 flex flex-col justify-between z-10">
              <div>
                <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-8">
                  Expertise
                </span>
                <h2 className="text-7xl md:text-9xl font-bold tracking-tighter mb-10">
                  {item.title}
                </h2>
                
                <div className="space-y-4 max-w-sm">
                  <h3 className="text-xl md:text-2xl font-bold leading-tight">
                    {item.subtitle}
                  </h3>
                  <p className="text-lg opacity-85 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Styled Button from Image */}
              <button className="flex items-center gap-3 bg-white text-black px-5 py-2.5 rounded-full w-fit font-bold text-sm transition-all hover:pr-4 group">
                Meer over {item.title.toLowerCase()}
                <div className="bg-black text-white rounded-full p-1.5 transition-transform group-hover:translate-x-1">
                  <ArrowRight size={14} strokeWidth={3} />
                </div>
              </button>
            </div>

            {/* Right Visual Area */}
            <div className="flex-1 relative flex items-center justify-end p-6 md:p-12 mt-20">
              <div className="relative w-full h-full max-h-[700px] max-w-[350px] rounded-[30px] overflow-hidden border-[8px] border-white/10 shadow-2xl rotate-3 transition-transform hover:rotate-0 duration-500">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Spacer to allow the final card to sit for a moment */}
      <div className="h-[20vh]" />
    </section>
  );
};

export default Expertise;