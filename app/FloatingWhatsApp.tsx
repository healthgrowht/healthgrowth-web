"use client";
import { motion } from 'framer-motion';
import { SITE_CONFIG } from './constants';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={`${SITE_CONFIG.whatsapp.url}?text=${encodeURIComponent(SITE_CONFIG.whatsapp.messages.general)}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30 group"
      style={{ bottom: 'calc(1.5rem + env(safe-area-inset-bottom, 0px))' }}
    >
      <svg viewBox="0 0 32 32" fill="white" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.72.7 5.41 2.04 7.8L.5 31.5l7.94-2.08A15.43 15.43 0 0 0 16 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5zm7.94 22.08c-.33.93-1.94 1.78-2.66 1.89-.68.1-1.54.15-2.49-.16-.57-.19-1.3-.44-2.24-.86-3.94-1.7-6.51-5.67-6.71-5.93-.2-.27-1.62-2.15-1.62-4.1 0-1.95 1.02-2.91 1.38-3.31.36-.4.79-.5 1.05-.5.27 0 .53 0 .76.01.24.01.57-.09.89.68.33.79 1.12 2.74 1.22 2.94.1.2.16.44.03.7-.13.27-.2.43-.39.67-.2.23-.42.52-.6.7-.2.2-.4.41-.17.8.23.4 1.02 1.68 2.2 2.72 1.51 1.35 2.78 1.77 3.18 1.97.4.2.63.17.86-.1.23-.27.99-1.15 1.25-1.55.27-.4.53-.33.89-.2.36.13 2.3 1.09 2.69 1.28.4.2.67.3.77.46.1.17.1.97-.23 1.89z"/>
      </svg>
    </motion.a>
  );
}
