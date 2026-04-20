import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Expertise from "@/sections/Expertise";
import CaseStudies from "@/sections/CaseStudies";

import Footer from "@/sections/Footer";
import Manifesto from "@/sections/Manifesto";
import StrategySection from "@/sections/StrategySection";
import BrandMarquee from "@/sections/BrandMarquee";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-[#1a1a1a]">
      <Navbar />
      <Hero />
     <Manifesto />
     <StrategySection />
      <Expertise />
      <CaseStudies />
      <BrandMarquee/>
      <Footer />
    </main>
  );
}
