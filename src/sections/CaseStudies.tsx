import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export default function ContentGrid() {
  const cards = [
    {
      title: "Van nul naar vol, binnen 3 weken",
      client: "Bullit",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop",
      color: "bg-[#FF5F2E]",
      borderColor: "border-[#FF5F2E]",
      alignment: "self-end", // Lowest position
    },
    {
      title: "Zacht in smaak, sterk in beeld",
      client: "Roasta",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=800&auto=format&fit=crop",
      color: "bg-[#0085FF]",
      borderColor: "border-[#0085FF]",
      alignment: "self-center", // Middle position
    },
    {
      title: "Content die écht smaakt (en raakt)",
      client: "Loco",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
      color: "bg-[#2DD48E]",
      borderColor: "border-[#2DD48E]",
      alignment: "self-start", // Highest position
    }
  ];

  return (
    <section className="bg-[#FAF7F2] min-h-screen py-16 px-6 md:px-20 font-sans">
      <div className="w-10/12 mx-auto">
        
        {/* Top Text Content */}
        <div className=" max-w-2xl">
          <h1 className="text-[114px] font-black leading-[0.9] tracking-tighter text-[#1A1A1A] mb-8">
            Content<br />dat scoort.
          </h1>
          <p className="text-2xl font-semibold leading-snug text-[#1A1A1A] mb-8 max-w-md">
            Wij vertellen jouw verhaal. Op een manier die écht past bij jouw doelgroep. 
            Met creatieve content die werkt en het verschil maakt.
          </p>
          <button className="flex items-center gap-3 bg-white border border-black rounded-full py-2 pl-5 pr-2 hover:bg-black hover:text-white transition-all group">
            <span className="font-bold text-sm">Bekijk al ons werk</span>
            <div className="bg-black text-white rounded-full p-1.5 group-hover:bg-white group-hover:text-black">
              <ArrowRight size={18} />
            </div>
          </button>
        </div>

        {/* Bottom Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-[700px] items-stretch">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col w-full h-[500px] ${card.alignment} rounded-[40px] border-[6px] ${card.borderColor} overflow-hidden shadow-sm`}
            >
              <img 
                src={card.image} 
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Floating Label UI */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className={`${card.color} p-6 rounded-[24px] text-white relative`}>
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold leading-tight pr-8">
                      {card.title}
                    </h3>
                    <div className="bg-white text-black rounded-full p-1.5 shrink-0 shadow-md">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                  <div className="mt-4">
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-widest">
                      {card.client}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}