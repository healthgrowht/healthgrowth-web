import React from 'react';
import Image from 'next/image';
import { SITE_CONFIG } from './constants';

export default function Footer() {
  return (
    <footer className="py-16 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <div className="relative w-12 h-12 mb-6 mx-auto md:mx-0 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
            <Image 
              src={SITE_CONFIG.assets.logo} 
              alt="HealthGrowth Logo" 
              fill 
              className="object-contain"
            />
          </div>
          <p className="text-white font-bold text-lg mb-1">{SITE_CONFIG.legal.companyName}</p>
          <p className="text-gray-500 text-xs mb-2">Empresa Chilena — Santiago</p>
          <p className="text-gray-600 text-[10px] mb-4 uppercase tracking-widest">Constituida en {SITE_CONFIG.legal.constitutionDate} • Modernización Operativa Pyme</p>
          <div className="flex flex-col gap-2">
            <a href={`mailto:${SITE_CONFIG.email}`} className="text-blue-500 text-sm hover:underline font-mono">{SITE_CONFIG.email}</a>
            <p className="text-gray-700 text-[9px] uppercase tracking-tighter">RUT: {SITE_CONFIG.legal.rut} • Dominio Oficial: healthgrowth.cl</p>
          </div>
        </div>
        <div className="flex flex-col md:items-end gap-4 text-center md:text-right">
          <div className="flex justify-center md:justify-end gap-6">
            <a href="/privacy-policy" className="text-gray-500 hover:text-white transition-colors text-[10px] uppercase tracking-wider cursor-pointer">Privacidad</a>
            <a href="/terms" className="text-gray-500 hover:text-white transition-colors text-[10px] uppercase tracking-wider cursor-pointer">Términos</a>
          </div>
          <p className="text-[10px] text-gray-700 uppercase tracking-[0.4em]">&copy; 2024 Health Growth SpA — Arquitectura de Continuidad Operacional</p>
        </div>
      </div>
    </footer>
  );
}