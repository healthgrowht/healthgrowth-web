"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONFIG } from './constants';

const faqs = [
  {
    q: "¿Qué hace exactamente Health Growth?",
    a: "Ordenamos la operación de tu negocio. Implementamos sistemas de atención, agenda digital, WhatsApp profesional, automatización de seguimiento y presencia web para que pierdas menos clientes y trabajes con menos caos. No hacemos solo redes sociales — nos enfocamos en que tu negocio funcione mejor desde adentro."
  },
  {
    q: "¿Para quién es Health Growth?",
    a: "Para emprendedores, profesionales independientes (médicos, psicólogos, nutricionistas, coaches), negocios de servicio (veterinarias, salones, barberías, peluquerías caninas, centros de estética) y PYMEs establecidas que quieren dejar de depender solo de WhatsApp y memoria para gestionar su negocio."
  },
  {
    q: "¿Es esto una agencia de marketing?",
    a: "No. Las agencias tradicionales se enfocan en likes o campañas. Nosotros nos enfocamos en tu operación: ordenamos tu agenda, mejoramos tu atención por WhatsApp, automatizamos el seguimiento de clientes y profesionalizamos tu imagen digital. El resultado es un negocio que vende y responde mejor."
  },
  {
    q: "¿Incluye WhatsApp? ¿Y automatización?",
    a: "Sí a ambas. WhatsApp Business profesional está incluido en todos nuestros servicios. Y a partir del nivel de Automatización, implementamos respuestas automáticas, recordatorios de citas, flujos de seguimiento de leads y recuperación de clientes inactivos mediante flujos digitales configurados para tu negocio."
  },
  {
    q: "¿Mi negocio es muy pequeño para esto?",
    a: "Al contrario. Trabajamos principalmente con negocios chicos y medianos, porque son quienes más ganan al ordenarse. No necesitas tener un equipo grande ni presupuesto corporativo. Si tienes clientes que atender y procesos que mejorar, podemos ayudarte."
  },
  {
    q: "¿Necesito saber de tecnología?",
    a: "Ninguno. Nosotros implementamos, configuramos y dejamos todo funcionando. Te explicamos el uso paso a paso y te acompañamos en la adaptación. La tecnología debe trabajar para ti, no al revés."
  },
  {
    q: "¿Cuánto tiempo toma ver resultados?",
    a: "La presencia digital profesional (web + WhatsApp configurado) se puede tener lista en días. Los sistemas de automatización y CRM suelen estar operativos en 2 a 4 semanas. Desde el primer día en que el sistema funciona, empiezas a ahorrar tiempo y a no perder clientes por respuesta lenta."
  },
  {
    q: "¿Qué necesito para empezar?",
    a: "Solo tus datos de contacto y contarnos brevemente sobre tu negocio. No necesitas tener nada preparado. El primer paso es una evaluación inicial sin costo donde entendemos tu situación y te decimos qué tiene más sentido implementar primero."
  },
  {
    q: "¿Cómo se agenda una evaluación?",
    a: "Completa el formulario de evaluación en esta página o escríbenos directamente por WhatsApp. En menos de 24 horas te contactamos para coordinar la conversación inicial. Es sin costo y sin compromiso."
  },
  {
    q: "¿Qué pasa después de llenar el formulario?",
    a: "Te contactamos por WhatsApp en menos de 24 horas para conocer más sobre tu negocio. Si hay un match, coordinamos una sesión de diagnóstico donde revisamos tu situación actual y te entregamos 3 mejoras concretas que puedes aplicar. Sin jerga técnica, sin venta agresiva."
  },
  {
    q: "¿Cuánto cuesta? ¿Hay evaluación previa gratuita?",
    a: "La evaluación inicial es completamente gratuita y sin compromiso. Los planes se cotizan después de esa evaluación, para recomendarte solo lo que realmente necesita tu negocio ahora. Los valores dependen del nivel de apoyo: orden digital básico, presencia web, contenido, automatización, seguimiento o acompañamiento completo. No publicamos precios fijos porque cada negocio es diferente — pero sí buscamos que la propuesta sea concreta, aterrizada y proporcional a tu realidad."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <motion.section 
      id="faq" 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-32 px-6 bg-zinc-950/50 border-t border-white/5"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">Preguntas Frecuentes</h2>
          <p className="text-gray-500 text-lg">Todo lo que necesitas saber antes de dar el primer paso.</p>
        </div>

        <div className="grid gap-6">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i} 
              initial={false}
              className="rounded-[32px] bg-zinc-900/30 border border-white/5 overflow-hidden"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-8 text-left flex items-center justify-between group transition-colors hover:bg-zinc-800/30"
              >
                <h4 className="text-lg font-bold text-white flex items-center gap-3 group-hover:text-indigo-300 transition-colors">
                  <span className="text-indigo-500/50 text-sm font-mono">{String(i + 1).padStart(2, '0')}</span>
                  {faq.q}
                </h4>
                <span className={`text-indigo-400 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                  ↓
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-8 pb-8 text-gray-400 leading-relaxed font-light">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-sm italic">¿Tienes otra pregunta? Luis te responde directamente.</p>
          <a 
            href={SITE_CONFIG.whatsapp.url}
            target="_blank"
            rel="noreferrer"
            className="text-indigo-400 font-bold hover:text-indigo-300 transition-colors"
          >Habla directamente con nosotros &rarr;</a>
        </div>
      </div>
    </motion.section>
  );
}