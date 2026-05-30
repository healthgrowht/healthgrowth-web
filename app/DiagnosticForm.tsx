"use client";
import React, { useState } from 'react';
import { SITE_CONFIG } from './constants';

export default function DiagnosticForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(SITE_CONFIG.integrations.diagnosticWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        // Flujo Comercial: Redirigir a WhatsApp automáticamente tras 2 segundos
        setTimeout(() => {
          const whatsappUrl = `${SITE_CONFIG.whatsapp.url}?text=${encodeURIComponent("Hola Luis, acabo de completar el formulario en la web. Me gustaría avanzar con la evaluación.")}`;
          window.open(whatsappUrl, '_blank');
        }, 2000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error("Error sending form:", err);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <section id="diagnostico" className="py-40 px-6">
        <div className="max-w-4xl mx-auto text-center bg-zinc-950 rounded-[48px] p-16 border border-white/5 shadow-2xl">
          <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="text-4xl">🚀</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">¡Datos Recibidos!</h2>
          <p className="text-gray-400 text-lg mb-4 leading-relaxed">
            Redirigiendo a WhatsApp para iniciar tu evaluación personalizada...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="diagnostico" className="py-40 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-zinc-900/50 rounded-[40px] p-8 md:p-16 border border-white/5 backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] -z-10" />
          
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-blue-500 mb-4 block">Evaluación Inicial</span>
            <h2 className="text-3xl md:text-6xl font-bold mb-6 tracking-tight">Solicitar Evaluación</h2>
            <p className="text-gray-400 text-lg">
              Completa tus datos y un asesor se contactará para analizar tu proyecto.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left relative">
            {status === 'loading' && (
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-20 flex items-center justify-center rounded-[32px]">
                <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            <div className="space-y-2">
              <label htmlFor="fullName" className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-2">Nombre</label>
              <input 
                id="fullName"
                name="fullName"
                type="text" 
                required
                placeholder="Ej: Luis Villanueva" 
                className="w-full px-6 py-4 rounded-2xl bg-black border border-white/10 focus:border-blue-500 outline-none transition-all placeholder:text-gray-700" 
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="company" className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-2">Empresa / Proyecto</label>
              <input 
                id="company"
                name="company"
                type="text" 
                required
                placeholder="Nombre de tu negocio" 
                className="w-full px-6 py-4 rounded-2xl bg-black border border-white/10 focus:border-blue-500 outline-none transition-all placeholder:text-gray-700" 
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-2">Correo</label>
              <input id="email" name="email" type="email" required placeholder="tu@email.com" className="w-full px-6 py-4 rounded-2xl bg-black border border-white/10 focus:border-blue-500 outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label htmlFor="commune" className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-2">Comuna</label>
              <input id="commune" name="commune" type="text" required placeholder="Ej: Santiago" className="w-full px-6 py-4 rounded-2xl bg-black border border-white/10 focus:border-blue-500 outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label htmlFor="service" className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-2">Servicio de Interés</label>
              <select id="service" name="service" required className="w-full px-6 py-[18px] rounded-2xl bg-black border border-white/10 focus:border-blue-500 outline-none transition-all text-gray-400">
                <option value="">Seleccionar...</option>
                <option value="presencia">Presencia Digital</option>
                <option value="redes">Redes Sociales</option>
                <option value="salud">Línea Salud</option>
                <option value="automatizacion">Automatización</option>
                <option value="personalizado">Solución Personalizada</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="whatsapp" className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-2">WhatsApp</label>
              <input 
                id="whatsapp"
                name="whatsapp"
                type="tel" 
                required
                placeholder="+56 9 ..." 
                className="w-full px-6 py-4 rounded-2xl bg-black border border-white/10 focus:border-blue-500 outline-none transition-all placeholder:text-gray-700" 
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label htmlFor="challenge" className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-2">¿Cuál es tu mayor desafío operacional hoy?</label>
              <textarea id="challenge" name="challenge" placeholder="Cuéntanos sobre tu negocio..." rows={4} className="w-full px-6 py-4 rounded-2xl bg-black border border-white/10 focus:border-blue-500 outline-none transition-all resize-none placeholder:text-gray-700"></textarea>
            </div>
            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="md:col-span-2 py-6 bg-blue-600 text-white rounded-2xl font-extrabold text-xl hover:bg-blue-500 transition-all active:scale-[0.98] shadow-2xl shadow-blue-600/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Enviando...' : 'Solicitar Evaluación Gratuita \u2192'}
            </button>
          </form>
          
          <div className="mt-12 text-center border-t border-white/5 pt-8">
            <p className="text-gray-600 text-sm mb-4 italic">Respuesta en menos de 24 horas</p>
            <a 
              href={`${SITE_CONFIG.whatsapp.url}?text=${encodeURIComponent(SITE_CONFIG.whatsapp.messages.diagnostic)}`}
              target="_blank"
              className="text-blue-500 font-mono text-xs tracking-widest uppercase hover:text-white transition-all underline underline-offset-8 decoration-blue-500/30 inline-block"
            >
              O habla directamente por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}