"use client";
import { motion } from 'framer-motion';
import { SITE_CONFIG } from './constants';
import { InstagramIcon, WhatsAppIcon } from './SocialIcons';

const socialChannels = [
  {
    name: 'WhatsApp Business',
    Icon: WhatsAppIcon,
    url: `${SITE_CONFIG.whatsapp.url}?text=${encodeURIComponent(SITE_CONFIG.whatsapp.messages.general)}`,
    description: 'Consulta directa con nuestro equipo. Respuesta rápida y personalizada.',
    handle: SITE_CONFIG.whatsapp.number,
    color: 'from-green-500/15 to-emerald-600/5',
    border: 'hover:border-green-500/40',
    badge: 'bg-green-500/10 text-green-400 border-green-500/20',
    cta: 'Escribir ahora',
    active: true,
  },
  {
    name: 'Instagram',
    Icon: InstagramIcon,
    url: SITE_CONFIG.social.instagram.url,
    description: 'Avances del proyecto, tips para PYMEs y contenido de transformación digital.',
    handle: SITE_CONFIG.social.instagram.handle,
    color: 'from-pink-500/15 to-rose-600/5',
    border: 'hover:border-pink-500/40',
    badge: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
    cta: 'Ver perfil',
    active: true,
  },
];

const comingSoon = [
  { name: 'Facebook', color: 'text-blue-400' },
  { name: 'LinkedIn', color: 'text-sky-400' },
  { name: 'TikTok', color: 'text-gray-400' },
];

export default function SocialMediaReferences() {
  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/0 via-indigo-500/3 to-zinc-950/0 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-400 mb-4 block">
            Conecta Con Nosotros
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Encuéntranos en Redes Sociales
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Contacto directo y contenido de valor en cada plataforma.
          </p>
        </motion.div>

        {/* Active channels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
          {socialChannels.map((channel, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <a
                href={channel.url}
                target="_blank"
                rel="noreferrer"
                className={`flex flex-col h-full p-7 rounded-[24px] bg-gradient-to-br ${channel.color} border border-white/8 ${channel.border} transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1`}
              >
                <div className="mb-5 group-hover:scale-110 transition-transform duration-300 w-fit">
                  <channel.Icon size={52} />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{channel.name}</h3>
                <span className={`inline-block text-xs font-mono px-2 py-0.5 rounded-full border ${channel.badge} mb-3 w-fit`}>
                  {channel.handle}
                </span>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">
                  {channel.description}
                </p>
                <div className="flex items-center gap-1 text-xs font-bold text-gray-300 group-hover:text-white transition-colors">
                  {channel.cta}
                  <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Coming soon */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-14 flex-wrap"
        >
          <span className="text-xs text-gray-600 uppercase tracking-widest">Próximamente:</span>
          {comingSoon.map((s) => (
            <span key={s.name} className={`text-xs font-bold px-3 py-1 rounded-full border border-white/5 bg-white/3 ${s.color} opacity-50`}>
              {s.name}
            </span>
          ))}
        </motion.div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-[24px] border border-white/5 bg-zinc-900/30"
        >
          <div>
            <p className="text-white font-bold text-lg mb-1">¿Prefieres el correo?</p>
            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className="text-gray-400 hover:text-indigo-400 transition-colors text-sm"
            >
              {SITE_CONFIG.contact.email}
            </a>
          </div>
          <a
            href={`${SITE_CONFIG.whatsapp.url}?text=${encodeURIComponent(SITE_CONFIG.whatsapp.messages.general)}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-7 py-4 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-green-500/20 flex-shrink-0"
          >
            <WhatsAppIcon size={20} />
            WhatsApp Business
          </a>
        </motion.div>
      </div>
    </section>
  );
}
