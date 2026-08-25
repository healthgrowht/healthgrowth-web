"use client";
import { useState } from 'react';
import { SITE_CONFIG } from './constants';

const WA_MESSAGE = 'Hola Luis, acabo de completar el formulario en la web. Me gustaría avanzar con la evaluación.';

export default function DiagnosticForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [selectedService, setSelectedService] = useState<string>(() => {
    if (typeof window === 'undefined') return '';
    const stored = sessionStorage.getItem('hg-pack') ?? '';
    if (stored) sessionStorage.removeItem('hg-pack');
    return stored;
  });

  const openWhatsApp = () => {
    window.open(
      `${SITE_CONFIG.whatsapp.url}?text=${encodeURIComponent(WA_MESSAGE)}`,
      '_blank'
    );
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = {
      nombre:   String(formData.get('fullName') ?? ''),
      negocio:  String(formData.get('company') ?? ''),
      email:    String(formData.get('email') ?? ''),
      ciudad:   String(formData.get('commune') ?? ''),
      rubro:    String(formData.get('service') ?? ''),
      telefono: String(formData.get('whatsapp') ?? ''),
      necesidad: String(formData.get('challenge') ?? ''),
      source: 'web-healthgrowth.cl',
      timestamp: new Date().toISOString(),
      utmSource: new URLSearchParams(window.location.search).get('utm_source') ?? 'directo',
    };

    // n8n es best-effort: si falla, el lead igual llega por WhatsApp
    try {
      await fetch(SITE_CONFIG.integrations.diagnosticWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
    } catch {
      // silencioso — la conversión sigue por WhatsApp
    }

    // Siempre mostrar éxito y abrir WhatsApp
    setStatus('success');
    setTimeout(openWhatsApp, 1500);
  };

  if (status === 'success') {
    return (
      <section id="diagnostico" className="py-40 px-6">
        <div className="max-w-4xl mx-auto text-center bg-zinc-900/30 rounded-[48px] p-16 border border-white/5 shadow-2xl backdrop-blur-md">
          <div className="w-20 h-20 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="text-4xl">✅</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">¡Datos Recibidos!</h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light">
            Gracias. En un momento abriremos WhatsApp para continuar la conversación con nuestro equipo.
          </p>
          <button
            onClick={openWhatsApp}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-green-500/20"
          >
            <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5"><path d="M12 4C7.58 4 4 7.58 4 12c0 1.49.42 2.87 1.14 4.04L4 20l4.08-1.07A7.96 7.96 0 0 0 12 20c4.42 0 8-3.58 8-8s-3.58-8-8-8zm3.9 11.08c-.16.45-.95.88-1.3.92-.35.04-1.03.14-3.06-.65-2.44-.95-4-3.43-4.12-3.59-.12-.16-.98-1.3-.98-2.48 0-1.18.62-1.76.84-2 .22-.24.48-.3.64-.3h.46c.14.01.34-.05.53.4.19.46.65 1.59.71 1.7.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.25.3-.36.4-.12.1-.24.21-.1.41.14.2.62.9 1.33 1.46.91.76 1.68 1 1.92 1.11.24.11.38.09.52-.05.14-.14.59-.69.75-.93.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.56-.1 1.01z"/></svg>
            Abrir WhatsApp ahora
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="diagnostico" className="py-40 px-6 bg-black relative">
      <div className="max-w-4xl mx-auto">
        <div className="bg-zinc-900/20 rounded-[40px] p-8 md:p-16 border border-white/5 backdrop-blur-xl relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-indigo-400 mb-4 block">
              Evaluación Inicial Gratuita
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">
              Cuéntanos sobre tu negocio
            </h2>
            <p className="text-gray-400 text-lg font-light max-w-xl mx-auto leading-relaxed">
              No es un formulario largo. Son tus datos básicos para que Luis te contacte en menos de 24 horas y entienda qué tiene más sentido implementar primero.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left relative">
            {status === 'loading' && (
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-20 flex items-center justify-center rounded-[32px]">
                <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
              </div>
            )}

            <div className="space-y-2">
              <label htmlFor="fullName" className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-2">
                Nombre
              </label>
              <input
                id="fullName" name="fullName" type="text" required
                placeholder="Ej: Luis Villanueva"
                className="w-full px-6 py-4 rounded-2xl bg-zinc-950/50 border border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder:text-zinc-700 text-white font-light"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="company" className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-2">
                Empresa / Proyecto
              </label>
              <input
                id="company" name="company" type="text" required
                placeholder="Nombre de tu negocio"
                className="w-full px-6 py-4 rounded-2xl bg-zinc-950/50 border border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder:text-zinc-700 text-white font-light"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-2">
                Correo
              </label>
              <input
                id="email" name="email" type="email" required
                placeholder="tu@email.com"
                className="w-full px-6 py-4 rounded-2xl bg-zinc-950/50 border border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder:text-zinc-700 text-white font-light"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="commune" className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-2">
                Comuna
              </label>
              <input
                id="commune" name="commune" type="text" required
                placeholder="Ej: Santiago"
                className="w-full px-6 py-4 rounded-2xl bg-zinc-950/50 border border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder:text-zinc-700 text-white font-light"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="service" className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-2">
                Servicio de Interés
              </label>
              <div className="relative">
                <select
                  id="service" name="service" required
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-6 py-[18px] rounded-2xl bg-zinc-950/50 border border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-gray-300 font-light appearance-none pr-12"
                >
                  <option value="">Seleccionar...</option>
                  <option value="presencia">Presencia Digital</option>
                  <option value="redes">Redes Sociales</option>
                  <option value="salud">Línea Salud</option>
                  <option value="automatizacion">Organización Operativa</option>
                  <option value="personalizado">Sistema Integral</option>
                </select>
                <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-gray-500">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="whatsapp" className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-2">
                WhatsApp
              </label>
              <input
                id="whatsapp" name="whatsapp" type="tel" required
                placeholder="+56 9 ..."
                className="w-full px-6 py-4 rounded-2xl bg-zinc-950/50 border border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder:text-zinc-700 text-white font-light"
              />
            </div>

            <div className="md:col-span-2 space-y-2">
              <label htmlFor="challenge" className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-2">
                ¿Cuál es tu mayor desafío actual en la atención y ventas?
              </label>
              <textarea
                id="challenge" name="challenge" rows={4} required
                placeholder="Cuéntanos brevemente sobre tu negocio y qué te gustaría mejorar..."
                className="w-full px-6 py-4 rounded-2xl bg-zinc-950/50 border border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all resize-none placeholder:text-zinc-700 text-white font-light"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="md:col-span-2 py-6 bg-white text-black rounded-2xl font-extrabold text-xl hover:bg-indigo-500 hover:text-white transition-all active:scale-[0.98] shadow-2xl shadow-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Enviando...' : 'Solicitar Evaluación Gratuita →'}
            </button>
          </form>

          <div className="mt-12 text-center border-t border-white/5 pt-8">
            <p className="text-gray-600 text-sm mb-4 italic">Respuesta en menos de 24 horas</p>
            <a
              href={`${SITE_CONFIG.whatsapp.url}?text=${encodeURIComponent(SITE_CONFIG.whatsapp.messages.diagnostic)}`}
              target="_blank"
              rel="noreferrer"
              className="text-indigo-400 font-mono text-xs tracking-widest uppercase hover:text-indigo-300 transition-all underline underline-offset-8 decoration-indigo-500/30 inline-block"
            >
              O habla directamente por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
