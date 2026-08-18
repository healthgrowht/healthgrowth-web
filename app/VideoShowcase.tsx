"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { SITE_CONFIG } from './constants';

const videos = [
  {
    src: '/videos/empresa/video-empresa-01.mp4',
    title: 'Health Growth en Acción',
    desc: 'Cómo transformamos la operación de una PYME en pocas semanas.',
  },
  {
    src: '/videos/empresa/video-empresa-02.mp4',
    title: 'Automatización Real',
    desc: 'Sistemas que trabajan por ti: agenda, WhatsApp, seguimiento de clientes.',
  },
  {
    src: '/videos/empresa/video-empresa-03.mp4',
    title: 'Chimi y el Ecosistema',
    desc: 'El embajador digital de Health Growth presentando la metodología.',
  },
];

export default function VideoShowcase() {
  const [active, setActive] = useState(0);

  return (
    <motion.section
      id="videos"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-32 px-6 bg-black border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-indigo-400 mb-4 block">
            Health Growth en Video
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Míranos trabajar
          </h2>
          <p className="text-gray-500 text-lg font-light max-w-xl mx-auto">
            No solo lo decimos — lo mostramos. Así se ve la modernización de una PYME con Health Growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {videos.map((v, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(i)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`text-left rounded-[24px] overflow-hidden border transition-all duration-300 ${
                active === i
                  ? 'border-indigo-500/60 shadow-lg shadow-indigo-500/20'
                  : 'border-white/5 hover:border-white/15'
              }`}
            >
              <div className="relative bg-zinc-900/60 aspect-video">
                <video
                  src={v.src}
                  className="w-full h-full object-cover"
                  muted
                  playsInline
                  preload="metadata"
                />
                {active !== i && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center">
                      <span className="text-white text-xl pl-0.5">▶</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-5 bg-zinc-900/40">
                <p className="text-white font-bold text-sm mb-1">{v.title}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Featured player */}
        <div className="rounded-[32px] overflow-hidden border border-white/10 shadow-2xl bg-zinc-950">
          <video
            key={active}
            src={videos[active].src}
            controls
            autoPlay
            playsInline
            className="w-full aspect-video object-contain bg-black"
          />
          <div className="px-8 py-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-white font-bold">{videos[active].title}</p>
              <p className="text-gray-500 text-sm">{videos[active].desc}</p>
            </div>
            <a
              href={`${SITE_CONFIG.whatsapp.url}?text=${encodeURIComponent('Hola, vi los videos de Health Growth y me gustaría saber más.')}`}
              target="_blank"
              rel="noreferrer"
              className="flex-shrink-0 px-5 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full text-sm font-bold transition-all hover:scale-105"
            >
              Quiero esto para mi negocio →
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
