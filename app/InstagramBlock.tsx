"use client";
import { motion } from 'framer-motion';
import { InstagramIcon } from './SocialIcons';
import { SITE_CONFIG } from './constants';

export default function InstagramBlock() {
  return (
    <section className="py-10 px-6 bg-[#071428] border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-5 p-5 rounded-[20px] bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10 border border-pink-500/15"
        >
          {/* Icon + handle */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center flex-shrink-0">
              <InstagramIcon size={20} />
            </div>
            <div>
              <p className="text-white font-bold text-sm">{SITE_CONFIG.social.instagram.handle}</p>
              <p className="text-gray-500 text-xs">Consejos prácticos para PYMEs</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm text-center sm:text-left flex-1 leading-relaxed">
            Contenido semanal sobre cómo mejorar la atención, el orden y la presencia digital de tu negocio — sin necesitar conocimientos técnicos.
          </p>

          {/* CTA */}
          <a
            href={SITE_CONFIG.social.instagram.url}
            target="_blank"
            rel="noreferrer"
            className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 text-white text-xs font-bold hover:from-pink-500/30 hover:to-purple-500/30 transition-all whitespace-nowrap"
          >
            <InstagramIcon size={14} />
            Seguir en Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
