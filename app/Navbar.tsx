"use client";
import React from 'react';
import Image from 'next/image';
import { SITE_CONFIG, NAV_LINKS } from './constants';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-full border border-white/10 bg-black/50 backdrop-blur-xl">
        <a href="/" className="flex items-center gap-3 group">
          <Image 
            src={SITE_CONFIG.assets.logo} 
            alt="HealthGrowth SpA" 
            width={32} 
            height={32} 
            className="transition-transform group-hover:scale-110"
          />
          <span className="text-white font-bold tracking-tighter text-lg uppercase hidden md:block">
            {SITE_CONFIG.brand}
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a href="#diagnostico" className="px-6 py-2 bg-blue-600 text-white rounded-full text-xs font-bold hover:bg-blue-500 transition-all">
          Evaluación Gratis
        </a>
      </div>
    </nav>
  );
}