"use client";
import React from 'react';
import { SITE_CONFIG } from './constants';

export default function FloatingWhatsApp() {
  return (
    <a 
      href={SITE_CONFIG.whatsapp.url}
      target="_blank"
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-90 group"
    >
      <span className="text-3xl">W</span> {/* Aquí puedes usar un icono de react-icons si lo instalas */}
    </a>
  );
}