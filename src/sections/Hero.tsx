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
    color: "bg-[#1E7BFF]",
    rotation: -6,
  },
  {
    id: 2,
    color: "bg-[#D1C4B9]",
    rotation: -2,
    isImage: true,
    placeholder: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop", 
  },
  {
    id: 3,
    title: "30+",
    subtitle: "Merken geholpen",
    desc: "Van start-up tot multinational",
    color: "bg-[#27C98D]",
    rotation: 2,
  },
  {
    id: 4,
    color: "bg-[#C4C4C4]",
    rotation: 6,
    isImage: true,
    // Added a lifestyle/car placeholder to match the vibe of your second image
    placeholder: "https://images.unsplash.com/photo-1600712242805-5f78671b24da?q=80&w=1000&auto=format&fit=crop",
  },
];

const Hero = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.from(cardsRef.current, {
      y: 150,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "back.out(1.7)",
    });
  }, []);

  const handleMouseEnter = (index: number) => {
    const spreadAmount = 120; // Increased spread to account for larger cards

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      if (i === index) {
        gsap.to(card, {
          y: -40,
          x: 0,
          rotation: 0,
          scale: 1.05,
          zIndex: 100,
          duration: 0.5,
          ease: "power3.out",
        });
      } else {
        const direction = i < index ? -1 : 1;
        gsap.to(card, {
          x: direction * spreadAmount,
          rotation: cards[i].rotation * 1.2,
          scale: 0.92,
          opacity: 0.5,
          duration: 0.5,
          ease: "power3.out",
        });
      }
    });
  };

  const handleMouseLeave = () => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      gsap.to(card, {
        y: 0,
        x: 0,
        rotation: cards[i].rotation,
        scale: 1,
        opacity: 1,
        zIndex: 10 + i,
        duration: 0.5,
        ease: "power3.out",
      });
    });
  };

  return (
    <section className="relative min-h-screen bg-[#F5F0E8] pt-24 pb-20 px-6 md:px-14 overflow-hidden flex flex-col">
      {/* Hero Header */}
      <div className="mx-auto w-full z-10">
        <div className="flex flex-col items-start text-left mb-12">
          <h1 className="text-[11vw] md:text-[7.5vw] font-bold mt-20 tracking-[-0.04em] leading-[0.85] text-[#1A1A1A]">
            Get Hyped. Get <br />
            Noticed. Get Results.
          </h1>
          <p className="mt-6 text-xl md:text-2xl font-medium text-[#1A1A1A]/80 leading-tight">
            Klaar met gokken op content <br /> 
            die niets oplevert?
          </p>
        </div>
      </div>

      {/* Centered Card Wrapper */}
      <div className="flex-1 flex items-center justify-center -mt-20">
        <div className="flex items-center justify-center w-full max-w-[1900px] h-[700px] relative">
          <div className="flex -space-x-24 md:-space-x-20"> {/* Heavier overlap for wider cards */}
            {cards.map((card, index) => (
              <div
                key={card.id}
                ref={(el) => (cardsRef.current[index] = el)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                className={cn(
                  "relative w-[300px] md:w-[420px] aspect-[1/1.3] rounded-[50px] transition-all flex flex-col justify-end p-8 md:p-12 overflow-hidden cursor-pointer shadow-2xl border-[8px] border-[#F5F0E8]",
                  card.color
                )}
                style={{
                  transform: `rotate(${card.rotation}deg)`,
                  zIndex: 10 + index,
                }}
              >
                {card.isImage ? (
                  <div className="absolute inset-0 w-full h-full">
                    <img
                      src={card.placeholder}
                      alt="Hero"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-10 left-10">
                      <span className="bg-white px-4 py-1.5 text-[12px] md:text-[15px] font-black uppercase rounded italic text-black shadow-md">
                        Origineel Natuurlijk
                      </span>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="mb-auto text-8xl md:text-9xl font-black tracking-tighter text-black">
                      {card.title}
                    </div>
                    <div className="border-t-[3px] border-black pt-8">
                      <div className="text-2xl md:text-3xl font-black tracking-tight text-black leading-none mb-3 uppercase">
                        {card.subtitle}
                      </div>
                      <div className="text-[14px] md:text-[16px] font-bold text-black/70 leading-none uppercase">
                        {card.desc}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;