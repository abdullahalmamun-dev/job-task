"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

const cards = [
  {
    id: 1,
    title: "10M+",
    subtitle: "Organische views",
    desc: "Groei door slimme content",
    color: "bg-primary-blue",
    rotation: -5,
  },
  {
    id: 2,
    title: "",
    subtitle: "",
    desc: "",
    color: "bg-gray-200", // Will be image placeholder
    rotation: 5,
    isImage: true,
  },
  {
    id: 3,
    title: "30+",
    subtitle: "Merken geholpen",
    desc: "Van start-up tot multinational",
    color: "bg-primary-green",
    rotation: -3,
  },
  {
    id: 4,
    title: "",
    subtitle: "",
    desc: "",
    color: "bg-gray-300", // Will be image placeholder
    rotation: 8,
    isImage: true,
  },
];

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Initial entrance animation
    gsap.from(cardsRef.current, {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power4.out",
    });
  }, []);

  const handleMouseEnter = (index: number) => {
    const targetCard = cardsRef.current[index];
    if (!targetCard) return;

    // Bring to front and straighten
    gsap.to(targetCard, {
      zIndex: 50,
      rotation: 0,
      scale: 1.05,
      y: -20,
      duration: 0.4,
      ease: "power2.out",
    });

    // Nudge neighbors
    cardsRef.current.forEach((card, i) => {
      if (card && i !== index) {
        const offset = i < index ? -40 : 40;
        gsap.to(card, {
          x: offset,
          opacity: 0.6,
          duration: 0.4,
          ease: "power2.out",
        });
      }
    });
  };

  const handleMouseLeave = (index: number) => {
    const targetCard = cardsRef.current[index];
    if (!targetCard) return;

    // Reset target card
    gsap.to(targetCard, {
      zIndex: 10 + index,
      rotation: cards[index].rotation,
      scale: 1,
      y: 0,
      duration: 0.4,
      ease: "power2.out",
    });

    // Reset neighbors
    cardsRef.current.forEach((card) => {
      if (card) {
        gsap.to(card, {
          x: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        });
      }
    });
  };

  return (
    <section className="relative min-h-[90vh] bg-background pt-32 pb-20 px-6 overflow-hidden flex flex-col items-center">
      {/* Hero Header */}
      <div className="max-w-4xl text-center mb-16 z-10">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
          Geen omkijken op content <br />
          <span className="text-black/20">die niets oplevert?</span>
        </h1>
      </div>

      {/* Card Wrapper */}
      <div 
        ref={containerRef}
        className="relative w-full max-w-7xl flex items-center justify-center h-[500px]"
      >
        <div className="flex -space-x-12 md:-space-x-20">
          {cards.map((card, index) => (
            <div
              key={card.id}
              ref={(el) => (cardsRef.current[index] = el)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className={cn(
                "relative w-[280px] md:w-[350px] aspect-[4/5] rounded-[40px] shadow-2xl transition-all flex flex-col justify-end p-8 border-4 border-background overflow-hidden cursor-pointer",
                card.color
              )}
              style={{
                transform: `rotate(${card.rotation}deg)`,
                zIndex: 10 + index,
              }}
            >
              {card.isImage ? (
                <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-black/10 uppercase -rotate-12">
                  Content Video
                </div>
              ) : (
                <>
                  <div className="mb-auto text-6xl font-black tracking-tighter text-black">
                    {card.title}
                  </div>
                  <div className="border-t-2 border-black pt-4">
                    <div className="text-xl font-bold uppercase tracking-tighter text-black leading-tight mb-2">
                      {card.subtitle}
                    </div>
                    <div className="text-xs font-semibold text-black/60 uppercase">
                      {card.desc}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
