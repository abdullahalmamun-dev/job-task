import React from "react";
import Image from "next/image";
import { ArrowRight, ArrowDown } from "lucide-react"; // Assuming you use lucide-react

const StrategySection = () => {
  return (
    <section className="bg-[#F5F0E8] py-20 px-6 md:px-14">
      <div className=" mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24 relative">
        
        {/* Left Side: Image */}
        <div className="relative w-full md:w-[300px] aspect-[4/5] rounded-[20px] overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"
            alt="Team member"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Content */}
        <div className="flex-1 flex flex-col ml-48 items-start mt-8">
          <h2 className="text-2xl md:text-[32px] font-bold leading-tight text-[#1A1A1A] max-w-xl">
            We stoppen niet bij mooie plaatjes en 
            vette beelden. We maken het meetbaar. 
            Zo weet je precies wat werkt en wat niet. 
            Nooit meer content zonder strategie. 
            Nooit meer content zonder resultaat.
          </h2>

          {/* Action Button */}
          <button className="mt-10 group flex items-center gap-2 bg-[#F5F0E8] border-2 border-black rounded-xl px-2 py-2  hover:bg-black hover:text-white transition-all duration-300">
            
            <span className="font-bold uppercase text-sm tracking-tight">Leer ons kennen</span>
            <div className="bg-black text-white p-2 rounded-full group-hover:bg-white group-hover:text-black transition-colors">
              <ArrowRight size={20} />
            </div>
          </button>
        </div>

        {/* Floating Scroll Indicator (Bottom Right) */}
        <div className="hidden md:flex absolute bottom-0 right-0 border-2 border-black/20 p-4 rounded-2xl text-orange-500">
          <ArrowDown size={24} strokeWidth={3} />
        </div>
      </div>
    </section>
  );
};

export default StrategySection;