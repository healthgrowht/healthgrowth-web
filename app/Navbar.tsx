"use client";
import React from 'react';
import Image from 'next/image';
import { NAV_LINKS, SITE_CONFIG } from './constants';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 transition-transform group-hover:scale-110">
              <Image 
                src={SITE_CONFIG.assets.logo} 
                alt="HealthGrowth Logo" 
                fill 
                className="object-contain"
              />
            </div>
            <span className="font-bold tracking-tighter text-xl uppercase italic text-white group-hover:text-blue-400 transition-colors">HealthGrowth</span>
          </a>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        <a 
          href="#diagnostico" 
          className="px-5 py-2.5 rounded-full bg-white/10 border border-white/10 text-sm font-bold hover:bg-white hover:text-black transition-all"
        >
          Asesoría Gratis
        </a>
      </div>
    </nav>
  );
}