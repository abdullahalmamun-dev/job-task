import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Expertise from "@/sections/Expertise";
import CaseStudies from "@/sections/CaseStudies";
import Marquee from "@/components/Marquee";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-[#1a1a1a]">
      <Navbar />
      <Hero />
      <Marquee />
      <Expertise />
      <CaseStudies />
      <Footer />
    </main>
  );
}
