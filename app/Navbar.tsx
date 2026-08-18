"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { SITE_CONFIG } from './constants';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
        <div
          className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-full border transition-all duration-300 ${
            scrolled
              ? 'border-white/15 bg-black/80 shadow-lg shadow-black/20 backdrop-blur-xl'
              : 'border-white/10 bg-black/50 backdrop-blur-xl'
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center group" onClick={closeMenu}>
            <Image
              src={SITE_CONFIG.assets.logo}
              alt="Health Growth SpA"
              width={140}
              height={56}
              className="h-10 w-auto object-contain group-hover:opacity-90 transition-opacity"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {SITE_CONFIG.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors hover:translate-y-[-2px] inline-block"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <a
              href="#diagnostico"
              className="px-5 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-full text-xs font-bold hover:shadow-lg hover:shadow-indigo-500/50 transition-all hidden sm:block"
            >
              Evaluación Gratis
            </a>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menú"
              className="md:hidden flex flex-col gap-1.5 w-9 h-9 items-center justify-center rounded-lg border border-white/10 hover:border-white/20 transition-all"
            >
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
              />
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={closeMenu}
            />
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="fixed top-20 left-4 right-4 z-50 md:hidden rounded-[24px] border border-white/10 bg-zinc-950/95 backdrop-blur-xl shadow-2xl overflow-hidden"
            >
              <nav className="flex flex-col p-6 gap-1">
                {SITE_CONFIG.navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-white hover:bg-white/5 transition-all"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 mt-2 border-t border-white/5">
                  <a
                    href="#diagnostico"
                    onClick={closeMenu}
                    className="flex items-center justify-center py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-2xl font-bold text-sm hover:shadow-lg hover:shadow-indigo-500/50 transition-all"
                  >
                    Evaluación Gratis
                  </a>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
