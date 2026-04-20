"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Mail, Flame, Linkedin, Instagram, Youtube, PiIcon } from "lucide-react"; // Note: Use TikTok icon from your library if available
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function HypedFooter() {
  const footerBoundsRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Mouse Follower Popup Logic
      const xSetter = gsap.quickSetter(followerRef.current, "x", "px");
      const ySetter = gsap.quickSetter(followerRef.current, "y", "px");

      const moveFollower = (e: MouseEvent) => {
        if (!footerBoundsRef.current) return;
        const rect = footerBoundsRef.current.getBoundingClientRect();
        xSetter(e.clientX - rect.left - 80);
        ySetter(e.clientY - rect.top - 40);
      };

      const footer = footerBoundsRef.current;
      footer?.addEventListener("mousemove", moveFollower);
      
      footer?.addEventListener("mouseenter", () => {
        gsap.to(followerRef.current, { scale: 1, opacity: 1, rotate: -5, duration: 0.4, ease: "back.out(2)" });
      });

      footer?.addEventListener("mouseleave", () => {
        gsap.to(followerRef.current, { scale: 0, opacity: 0, duration: 0.3 });
      });

      // 2. Rotating Badge Animation
      gsap.to(badgeRef.current, {
        rotate: 360,
        duration: 15,
        repeat: -1,
        ease: "none"
      });
    }, footerBoundsRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer className="relative bg-[#FAF7F2] w-full font-sans overflow-hidden">
      
      {/* TOP SECTION: CTA */}
      <div 
        ref={footerBoundsRef} 
        className="relative pt-10 pb-10 flex flex-col items-center justify-center cursor-none"
      >
        {/* Floating Logo (The Popup) */}
        <div 
          ref={followerRef}
          className="fixed pointer-events-none opacity-0 scale-0 z-50 drop-shadow-2xl"
        >
           <div className="bg-white border-[3px] border-black px-4 py-2 rounded-xl transform -rotate-2">
              <span className="text-black font-[900] italic text-3xl tracking-tighter">GETHYPED</span>
              {/* Pink glow effect to match image */}
              <div className="absolute inset-0 border-2 border-pink-400/50 rounded-xl translate-x-1 translate-y-1 -z-10" />
           </div>
        </div>

        <h2 className="text-[80px] font-semibold tracking-wide text-[#1A1A1A] ">
          Let&apos;s Get Hyped!
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 relative z-10">
          <button className="flex items-center gap-6 bg-white border-2 border-black rounded-2xl py-3 pl-8 pr-3 font-bold group hover:bg-black hover:text-white transition-all">
            Mail ons direct 
            <div className="bg-black text-white p-2 rounded-xl group-hover:bg-white group-hover:text-black transition-colors">
              <Mail size={22} fill="currentColor" />
            </div>
          </button>
          <button className="flex items-center gap-6 bg-[#FF5F2E] border-2 border-[#FF5F2E] text-white rounded-2xl py-3 pl-8 pr-3 font-bold group hover:opacity-90 transition-all">
            Get Results 
            <div className="bg-white text-[#FF5F2E] p-2 rounded-xl">
              <Flame size={22} fill="currentColor" />
            </div>
          </button>
        </div>

        {/* Rotating Pink Badge */}
        <div className="absolute right-10 bottom-20 md:right-24 md:bottom-32 z-20">
            <div ref={badgeRef} className="relative w-32 h-32 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="absolute w-full h-full">
                    <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                    <text className="text-[10px] font-black uppercase fill-black tracking-[2px]">
                        <textPath href="#circlePath">
                            • GET NOTICED • GET HYPED • GET RESULTS
                        </textPath>
                    </text>
                </svg>
                <div className="bg-[#E9B9FF] border-2 border-black rounded-full w-14 h-14 flex items-center justify-center z-10">
                    <span className="font-black text-xl">GH</span>
                </div>
            </div>
        </div>
      </div>

      {/* BOTTOM SECTION: Diagonal Info Bar */}
      <div className="relative w-full min-h-[300px]">
        {/* Background Clip Path Div */}
        <div 
          className="absolute inset-0 bg-[#EBE7DF]" 
          style={{ clipPath: "polygon(0 45%, 100% 0%, 100% 100%, 0% 100%)" }}
        />

        {/* Bottom-left brand logo */}
        <div className="absolute bottom-0 left-4 z-10 select-none sm:left-8 md:left-12">
          <Image
            src="/images/logo.png"
            alt="Get Hyped logo"
            width={420}
            height={140}
            className="h-auto w-[220px] sm:w-[280px] md:w-[360px]"
            priority
          />
        </div>

        <div className="relative z-20  mx-auto px-8 md:px-20 pt-48 pb-10">
          <div className="ml-auto mr-0 flex w-fit max-w-full flex-col gap-12 md:flex-row md:items-start md:justify-end md:gap-24">
            
            {/* Links & Socials */}
            <div className="flex flex-col gap-12 md:items-end">
                <div className="flex flex-wrap gap-3">
                    {['Expertises', 'Work', 'About', 'Contact'].map(item => (
                        <button key={item} className="bg-white px-6 py-2.5 rounded-xl font-bold shadow-sm hover:shadow-md transition-shadow">
                            {item}
                        </button>
                    ))}
                </div>
                <div className="flex items-center gap-6 md:justify-end">
                    <span className="font-bold text-sm">Follow us</span>
                    <div className="flex gap-2">
                        {[Linkedin, Instagram, Youtube].map((Icon, i) => (
                            <div key={i} className="bg-white p-3 rounded-full border border-black/5 cursor-pointer hover:bg-black hover:text-white transition-all">
                                <Icon size={18} fill="currentColor" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-8 text-sm md:min-w-[230px]">
                <div>
                    <h4 className="font-black text-lg mb-1">Contact</h4>
                    <p className="font-bold text-black/70">info@gethyped.nl</p>
                    <p className="font-bold text-black/70">+31 6 1533 7496</p>
                </div>
                <div>
                    <h4 className="font-black text-lg mb-1">Adres</h4>
                    <p className="font-bold text-black/70 max-w-[200px]">
                        Beltrumsestraat 6,<br /> 7141 AL Groenlo
                    </p>
                </div>
            </div>
          </div>

          {/* Copyright Footer */}
         
        </div>
      </div>
    </footer>
  
  );
}