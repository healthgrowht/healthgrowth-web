import React from 'react';
import { SITE_CONFIG } from './constants';

export default function FloatingWhatsApp() {
  return (
    <a 
      href={`${SITE_CONFIG.whatsapp.url}?text=${encodeURIComponent(SITE_CONFIG.whatsapp.messages.general)}`}
      target="_blank"
      className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.4)] flex items-center justify-center text-white text-3xl hover:scale-110 transition-transform active:scale-95"
      aria-label="Contactar por WhatsApp"
    >
      <span className="relative top-[1px]">💬</span>
    </a>
  );
}