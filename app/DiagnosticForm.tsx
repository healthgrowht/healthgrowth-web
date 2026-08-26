"use client";
import { useState } from 'react';
import { SITE_CONFIG } from './constants';

const WA_MESSAGE = 'Hola Luis, acabo de completar el formulario en la web. Me gustaría avanzar con la evaluación.';

const inputClass = "w-full px-5 py-4 rounded-2xl bg-zinc-950/50 border border-white/10 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all placeholder:text-zinc-700 text-white";
const labelClass = "text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1 block mb-1.5";

type Step1 = { fullName: string; company: string; email: string; whatsapp: string };

export default function DiagnosticForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [step, setStep] = useState<1 | 2>(1);
  const [step1, setStep1] = useState<Step1>({ fullName: '', company: '', email: '', whatsapp: '' });
  const [selectedService, setSelectedService] = useState<string>(() => {
    if (typeof window === 'undefined') return '';
    const stored = sessionStorage.getItem('hg-pack') ?? '';
    if (stored) sessionStorage.removeItem('hg-pack');
    return stored;
  });

  const openWhatsApp = () => {
    window.open(`${SITE_CONFIG.whatsapp.url}?text=${encodeURIComponent(WA_MESSAGE)}`, '_blank');
  };

  const handleContinue = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data: Step1 = {
      fullName: (form.elements.namedItem('fullName') as HTMLInputElement).value.trim(),
      company:  (form.elements.namedItem('company') as HTMLInputElement).value.trim(),
      email:    (form.elements.namedItem('email') as HTMLInputElement).value.trim(),
      whatsapp: (form.elements.namedItem('whatsapp') as HTMLInputElement).value.trim(),
    };
    if (!data.fullName || !data.company || !data.email || !data.whatsapp) return;
    setStep1(data);
    setStep(2);
    window.scrollTo({ top: document.getElementById('diagnostico')?.offsetTop ?? 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = {
      nombre:    step1.fullName,
      negocio:   step1.company,
      email:     step1.email,
      telefono:  step1.whatsapp,
      ciudad:    String(formData.get('commune') ?? ''),
      rubro:     String(formData.get('service') ?? ''),
      necesidad: String(formData.get('challenge') ?? ''),
      source: 'web-healthgrowth.cl',
      timestamp: new Date().toISOString(),
      utmSource: new URLSearchParams(window.location.search).get('utm_source') ?? 'directo',
    };

    try {
      await fetch(SITE_CONFIG.integrations.diagnosticWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
    } catch {
      // silencioso — la conversión sigue por WhatsApp
    }

    setStatus('success');
    setTimeout(openWhatsApp, 1500);
  };

  if (status === 'success') {
    return (
      <section id="diagnostico" className="py-16 md:py-24 px-6 bg-[#071428]">
        <div className="max-w-2xl mx-auto text-center bg-zinc-900/30 rounded-[40px] p-12 border border-white/5 backdrop-blur-md">
          <div className="w-16 h-16 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">✅</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">¡Datos Recibidos!</h2>
          <p className="text-gray-400 mb-6 leading-relaxed font-light">
            En un momento abriremos WhatsApp para continuar la conversación con el equipo.
          </p>
          <button
            onClick={openWhatsApp}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-2xl font-bold transition-all hover:scale-105"
          >
            <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5"><path d="M12 4C7.58 4 4 7.58 4 12c0 1.49.42 2.87 1.14 4.04L4 20l4.08-1.07A7.96 7.96 0 0 0 12 20c4.42 0 8-3.58 8-8s-3.58-8-8-8zm3.9 11.08c-.16.45-.95.88-1.3.92-.35.04-1.03.14-3.06-.65-2.44-.95-4-3.43-4.12-3.59-.12-.16-.98-1.3-.98-2.48 0-1.18.62-1.76.84-2 .22-.24.48-.3.64-.3h.46c.14.01.34-.05.53.4.19.46.65 1.59.71 1.7.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.25.3-.36.4-.12.1-.24.21-.1.41.14.2.62.9 1.33 1.46.91.76 1.68 1 1.92 1.11.24.11.38.09.52-.05.14-.14.59-.69.75-.93.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.56-.1 1.01z"/></svg>
            Abrir WhatsApp
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="diagnostico" className="py-14 md:py-20 px-6 bg-[#071428] relative">
      <div className="max-w-2xl mx-auto">
        {/* Step indicator */}
        <div className="flex items-center justify-center gap-4 mb-7">
          {[1, 2].map((n) => (
            <div key={n} className="flex items-center gap-2">
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border transition-all ${
                n === step ? 'bg-cyan-500 border-cyan-500 text-black' :
                n < step  ? 'bg-green-500/20 border-green-500/40 text-green-400' :
                            'bg-white/5 border-white/10 text-gray-600'
              }`}>
                {n < step ? '✓' : n}
              </span>
              <span className={`text-xs font-semibold ${n === step ? 'text-white' : 'text-gray-600'}`}>
                {n === 1 ? 'Tus datos' : 'Tu negocio'}
              </span>
              {n === 1 && <div className="w-12 h-px bg-white/10 mx-1" />}
            </div>
          ))}
        </div>

        <div className="bg-zinc-900/20 rounded-[32px] p-6 md:p-10 border border-white/5 backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 blur-[100px] -z-10 pointer-events-none" />

          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400 mb-2 block">
              Evaluación Inicial Gratuita — Paso {step} de 2
            </span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
              {step === 1 ? 'Cuéntanos quién eres' : 'Cuéntanos tu negocio'}
            </h2>
            <p className="text-gray-500 text-sm max-w-sm mx-auto leading-relaxed">
              {step === 1
                ? 'Datos básicos para que Luis te contacte en menos de 24 horas.'
                : 'Un poco más sobre tu situación para preparar la evaluación.'}
            </p>
          </div>

          {/* STEP 1 */}
          {step === 1 && (
            <form onSubmit={handleContinue} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className={labelClass}>Nombre</label>
                  <input id="fullName" name="fullName" type="text" required
                    placeholder="Ej: María González"
                    defaultValue={step1.fullName}
                    className={inputClass} />
                </div>
                <div>
                  <label htmlFor="company" className={labelClass}>Empresa / Proyecto</label>
                  <input id="company" name="company" type="text" required
                    placeholder="Nombre de tu negocio"
                    defaultValue={step1.company}
                    className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>Correo</label>
                  <input id="email" name="email" type="email" required
                    placeholder="tu@email.com"
                    defaultValue={step1.email}
                    className={inputClass} />
                </div>
                <div>
                  <label htmlFor="whatsapp" className={labelClass}>WhatsApp</label>
                  <input id="whatsapp" name="whatsapp" type="tel" required
                    placeholder="+56 9 ..."
                    defaultValue={step1.whatsapp}
                    className={inputClass} />
                </div>
              </div>
              <button
                type="submit"
                className="w-full mt-2 py-4 bg-white text-black rounded-2xl font-extrabold text-base hover:bg-cyan-400 transition-all active:scale-[0.98]"
              >
                Continuar →
              </button>
            </form>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-4 relative">
              {status === 'loading' && (
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-20 flex items-center justify-center rounded-[24px]">
                  <div className="w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin" />
                </div>
              )}

              <div>
                <label htmlFor="commune" className={labelClass}>Ciudad / Comuna</label>
                <input id="commune" name="commune" type="text" required
                  placeholder="Ej: Santiago"
                  className={inputClass} />
              </div>

              <div>
                <label htmlFor="service" className={labelClass}>Servicio de interés</label>
                <div className="relative">
                  <select
                    id="service" name="service" required
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className={`${inputClass} appearance-none pr-10 text-gray-300`}
                  >
                    <option value="">Seleccionar...</option>
                    <option value="diagnostico">Diagnóstico Express (gratuito)</option>
                    <option value="impulso">Pack Impulso — Presencia digital</option>
                    <option value="asistente">Asistente IA Esencial</option>
                    <option value="automatizacion">Pack Automatización — CRM</option>
                    <option value="ecosistema">Ecosistema Completo</option>
                    <option value="acompanamiento">Acompañamiento Mensual</option>
                    <option value="otro">No sé todavía — quiero orientación</option>
                  </select>
                  <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                      <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="challenge" className={labelClass}>¿Cuál es tu mayor desafío en atención y ventas?</label>
                <textarea
                  id="challenge" name="challenge" rows={3} required
                  placeholder="Cuéntanos brevemente..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div className="flex gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-4 border border-white/15 text-gray-400 rounded-2xl font-semibold hover:border-white/30 hover:text-white transition-all"
                >
                  ← Volver
                </button>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="flex-1 py-4 bg-white text-black rounded-2xl font-extrabold text-base hover:bg-cyan-400 transition-all active:scale-[0.98] disabled:opacity-50"
                >
                  {status === 'loading' ? 'Enviando...' : 'Solicitar Evaluación Gratuita →'}
                </button>
              </div>

              <div className="text-center border-t border-white/5 pt-5 mt-2">
                <p className="text-gray-600 text-xs mb-2 italic">Respuesta en menos de 24 horas</p>
                <a
                  href={`${SITE_CONFIG.whatsapp.url}?text=${encodeURIComponent(SITE_CONFIG.whatsapp.messages.diagnostic)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 font-mono text-xs tracking-widest uppercase hover:text-cyan-300 transition-all underline underline-offset-8"
                >
                  O habla directamente por WhatsApp
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
