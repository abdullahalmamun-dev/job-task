"use client";

import React from "react";
import Link from "next/link";
import { ArrowDownRight, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer id="agency" className="bg-[#1a1a1a] text-white pt-20 px-6">
      <div className="max-w-7xl mx-auto mb-20">
        <div className="bg-primary-pink rounded-[60px] p-10 md:p-24 flex flex-col items-center text-center text-black">
          <h2 className="text-5xl md:text-9xl font-bold uppercase tracking-tighter mb-12">
            Ready to <br /> <span className="italic">hook up?</span>
          </h2>
          
          <button className="btn-swoosh flex items-center gap-2 bg-black text-white px-10 py-5 rounded-full text-xl hover:text-black hover:border-black">
            Get in touch <ArrowDownRight size={24} />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 pb-20 border-b border-white/10">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="text-3xl font-bold tracking-tighter mb-8 block">
            GET HYPED<span className="text-primary-pink">.</span>
          </Link>
          <p className="text-sm opacity-60 max-w-xs">
            A growth marketing agency that combines data-driven strategy with high-end creative production.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary-pink mb-6">Expertise</h4>
          <ul className="space-y-4 text-sm opacity-80">
            <li><Link href="#" className="hover:text-primary-pink">Strategy</Link></li>
            <li><Link href="#" className="hover:text-primary-pink">Creative</Link></li>
            <li><Link href="#" className="hover:text-primary-pink">Media Buying</Link></li>
            <li><Link href="#" className="hover:text-primary-pink">Data & Analytics</Link></li>
          </ul>
        </div>

        <div>
           <h4 className="text-sm font-bold uppercase tracking-widest text-primary-pink mb-6">Agency</h4>
          <ul className="space-y-4 text-sm opacity-80">
            <li><Link href="#" className="hover:text-primary-pink">Our Story</Link></li>
            <li><Link href="#" className="hover:text-primary-pink">Case Studies</Link></li>
            <li><Link href="#" className="hover:text-primary-pink">Contact</Link></li>
            <li><Link href="#" className="hover:text-primary-pink">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary-pink mb-6">Socials</h4>
          <div className="flex gap-4">
            <Link href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs opacity-40 uppercase tracking-widest font-bold">
        <p>© 2026 Get Hyped. All rights reserved.</p>
        <div className="flex gap-8">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms & Conditions</Link>
          <Link href="#">Cookies</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
