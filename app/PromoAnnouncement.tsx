"use client";
import { SITE_CONFIG } from './constants';

export default function PromoAnnouncement() {
  const { promo } = SITE_CONFIG;
  if (!promo.enabled) return null;

  const now = new Date();
  if (promo.startDate && new Date(promo.startDate) > now) return null;
  if (promo.endDate && new Date(promo.endDate) < now) return null;

  return (
    <div className="relative z-[60] w-full bg-[#0b1830] border-b border-white/[0.08] px-4 py-2 md:py-2.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0 flex-1">
          {promo.eyebrow && (
            <span className="hidden sm:block text-[9px] font-black uppercase tracking-[0.35em] text-cyan-400 flex-shrink-0 whitespace-nowrap">
              {promo.eyebrow}
            </span>
          )}
          <p className="text-white text-[12px] md:text-[13px] font-semibold truncate">
            {promo.title}
          </p>
          {promo.description && (
            <p className="hidden lg:block text-gray-400 text-[12px] truncate">
              {promo.description}
            </p>
          )}
        </div>
        {promo.ctaLabel && (
          <a
            href={promo.ctaTarget || '#diagnostico'}
            className="flex-shrink-0 px-4 py-1.5 bg-white text-[#071428] rounded-full text-[11px] font-black hover:bg-cyan-400 transition-colors whitespace-nowrap"
          >
            {promo.ctaLabel}
          </a>
        )}
      </div>
    </div>
  );
}
