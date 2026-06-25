import Link from 'next/link';
import { SITE_CONFIG } from './constants';
import { InstagramIcon, WhatsAppIcon } from './SocialIcons';

export default function Footer() {
  return (
    <footer className="py-20 border-t border-white/5 bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16 pb-16 border-b border-white/10">
          {/* Logo & Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-600 text-white font-bold flex items-center justify-center text-sm">
                HG
              </div>
              <span className="font-bold text-lg text-white">{SITE_CONFIG.legal.companyName}</span>
            </div>
            <p className="text-gray-500 text-sm mb-2">Transformación Digital de PYMEs</p>
            <p className="text-gray-600 text-[11px] uppercase tracking-widest mb-6">
              Fundada {SITE_CONFIG.legal.foundationYear}
            </p>
            {/* Active social icons */}
            <div className="flex items-center gap-3">
              <a
                href={`${SITE_CONFIG.whatsapp.url}?text=${encodeURIComponent(SITE_CONFIG.whatsapp.messages.general)}`}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="hover:scale-110 transition-transform duration-200"
              >
                <WhatsAppIcon size={32} />
              </a>
              <a
                href={SITE_CONFIG.social.instagram.url}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="hover:scale-110 transition-transform duration-200"
              >
                <InstagramIcon size={32} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Contacto</h4>
            <div className="space-y-4">
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="flex items-center gap-3 group hover:translate-x-1 transition-transform"
              >
                <span className="text-lg">✉️</span>
                <span className="text-gray-400 group-hover:text-indigo-400 transition-colors text-sm">
                  {SITE_CONFIG.contact.email}
                </span>
              </a>

              <a
                href={`${SITE_CONFIG.whatsapp.url}?text=${encodeURIComponent(SITE_CONFIG.whatsapp.messages.general)}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 group hover:translate-x-1 transition-transform"
              >
                <WhatsAppIcon size={20} />
                <span className="text-gray-400 group-hover:text-green-400 transition-colors text-sm">
                  {SITE_CONFIG.whatsapp.number}
                </span>
              </a>

              <a
                href={SITE_CONFIG.social.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 group hover:translate-x-1 transition-transform"
              >
                <InstagramIcon size={20} />
                <div>
                  <p className="text-gray-400 group-hover:text-pink-400 transition-colors text-sm font-medium">
                    {SITE_CONFIG.social.instagram.handle}
                  </p>
                  <p className="text-gray-600 text-xs">Contenido diario de transformación PYME</p>
                </div>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
              Enlaces
            </h4>
            <div className="space-y-3">
              <Link
                href={SITE_CONFIG.legal.privacyPolicyUrl}
                className="block text-gray-400 hover:text-indigo-400 transition-colors text-sm"
              >
                Política de Privacidad
              </Link>
              <Link
                href={SITE_CONFIG.legal.termsAndConditionsUrl}
                className="block text-gray-400 hover:text-indigo-400 transition-colors text-sm"
              >
                Términos y Condiciones
              </Link>
              <a href="#faq" className="block text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                Preguntas Frecuentes
              </a>
              <a href="#diagnostico" className="block text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                Evaluación Gratis
              </a>
              <a href="#mision" className="block text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                Misión y Visión
              </a>
              <a href="#chimi" className="block text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                Chimi — Canal Oficial
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-gray-600 uppercase tracking-wider">
          <p>
            &copy; {SITE_CONFIG.legal.foundationYear} {SITE_CONFIG.legal.companyName}. Todos los derechos reservados.
          </p>
          <p>Diseñado y construido con precisión para PYMEs transformadoras.</p>
          <p className="text-gray-700">{SITE_CONFIG.domain}</p>
        </div>
      </div>
    </footer>
  );
}
