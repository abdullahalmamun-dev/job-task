"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const expertiseData = [
  {
    id: 1,
    title: "Strategy",
    description: "We define your roadmap to scale. From market research to full-funnel strategy, we build the foundation for your growth.",
    color: "bg-[#2D5BFF]",
    textColor: "text-white",
    icon: "📊",
  },
  {
    id: 2,
    title: "Creative",
    description: "High-end content that converts. We produce visuals that match your brand's ambition and speak to your target audience.",
    color: "bg-[#EBACDA]",
    textColor: "text-black",
    icon: "🎨",
  },
  {
    id: 3,
    title: "Media",
    description: "Performance-driven distribution. We scale your brand through paid social, search, and programmatic media buying.",
    color: "#36B37E",
    textColor: "text-white",
    customBg: { backgroundColor: "#36B37E" },
    icon: "🚀",
  },
];

const Expertise = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".expertise-card");
    
    // Stacking effect
    cards.forEach((card: any, index: number) => {
      // Don't animate the last card as it doesn't need to be covered
      if (index === cards.length - 1) return;

      ScrollTrigger.create({
        trigger: card,
        start: "top 100px",
        pin: true,
        pinSpacing: false,
        endTrigger: triggerRef.current,
        end: "bottom bottom",
      });

      // Optional: Add scale and dim effect to the card being covered
      gsap.to(card, {
        scale: 0.9,
        opacity: 0.5,
        scrollTrigger: {
          trigger: cards[index + 1] as any,
          start: "top 80%",
          end: "top 100px",
          scrub: true,
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="expertise"
      className="relative py-20 px-6 bg-background min-h-screen"
    >
      <div className="max-w-7xl mx-auto mb-20">
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary-pink mb-4">What we do</h2>
        <h3 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">Our Expertise.</h3>
      </div>

      <div ref={triggerRef} className="max-w-7xl mx-auto space-y-12">
        {expertiseData.map((item) => (
          <div 
            key={item.id}
            className={`expertise-card w-full h-[60vh] md:h-[70vh] rounded-[40px] flex flex-col md:flex-row shadow-2xl overflow-hidden ${item.color.startsWith('bg') ? item.color : ''} ${item.textColor}`}
            style={item.customBg}
          >
            <div className="flex-1 p-10 md:p-20 flex flex-col justify-between">
              <div>
                <span className="text-4xl mb-6 block">{item.icon}</span>
                <h4 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter mb-6">{item.title}</h4>
                <p className="text-lg md:text-xl max-w-md opacity-90">{item.description}</p>
              </div>
              
              <button className="flex items-center gap-2 font-bold uppercase tracking-widest text-sm self-start group">
                Learn more 
                <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center transition-transform group-hover:rotate-45">
                  <ArrowUpRight size={16} />
                </div>
              </button>
            </div>
            
            <div className="hidden md:block flex-1 bg-black/10 m-6 rounded-[32px] relative">
              {/* Placeholder for visual/video */}
              <div className="absolute inset-0 flex items-center justify-center text-current/20 font-bold text-2xl uppercase">
                {item.title} Visual
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Spacer for scroll depth if needed */}
      <div className="h-[20vh]" />
    </section>
  );
};

export default Expertise;
