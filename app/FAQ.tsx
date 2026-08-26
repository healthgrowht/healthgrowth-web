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
    q: "¿Mi negocio es muy pequeño para esto?",
    a: "Al contrario. Trabajamos principalmente con negocios chicos y medianos, porque son quienes más ganan al ordenarse. No necesitas tener un equipo grande ni presupuesto corporativo. Si tienes clientes que atender y procesos que mejorar, podemos ayudarte."
  },
  {
    q: "¿Incluye WhatsApp? ¿Y automatización?",
    a: "Sí a ambas. WhatsApp Business profesional está incluido en todos nuestros servicios. Y a partir del nivel de Automatización, implementamos respuestas automáticas, recordatorios de citas, flujos de seguimiento de leads y recuperación de clientes inactivos."
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
    a: "Te contactamos por WhatsApp en menos de 24 horas para conocer más sobre tu negocio. Si hay un match, coordinamos una sesión de diagnóstico donde revisamos tu situación actual y te entregamos 3 mejoras concretas. Sin jerga técnica, sin venta agresiva."
  },
  {
    q: "¿Cuánto cuesta? ¿Hay evaluación previa gratuita?",
    a: "La evaluación inicial es completamente gratuita y sin compromiso. Los planes se cotizan después de esa evaluación, para recomendarte solo lo que realmente necesita tu negocio ahora. No publicamos precios fijos porque cada negocio es diferente — pero sí buscamos que la propuesta sea concreta, aterrizada y proporcional a tu realidad."
  }
];

const INITIAL_VISIBLE = 4;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);

  const visibleFaqs = showAll ? faqs : faqs.slice(0, INITIAL_VISIBLE);

  return (
    <section id="faq" className="py-14 md:py-20 px-6 bg-zinc-950/50 border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-3">Preguntas Frecuentes</h2>
          <p className="text-gray-500 text-sm">Todo lo que necesitas saber antes de dar el primer paso.</p>
        </div>

        <div className="grid gap-3">
          {visibleFaqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl bg-zinc-900/30 border border-white/5 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-5 text-left flex items-center justify-between group hover:bg-zinc-800/30 transition-colors"
              >
                <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors pr-4">
                  {faq.q}
                </h4>
                <span className={`text-indigo-400 flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                  ↓
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="px-5 pb-5 text-gray-400 text-sm leading-relaxed font-light">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="mt-4 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-3 rounded-full border border-white/15 text-gray-400 text-sm font-semibold hover:border-white/30 hover:text-white transition-all"
            >
              Ver más preguntas ({faqs.length - INITIAL_VISIBLE} restantes) ↓
            </button>
          </div>
        )}

        <div className="mt-8 text-center border-t border-white/5 pt-6">
          <p className="text-gray-600 text-xs italic mb-2">¿Tienes otra pregunta? Luis te responde directamente.</p>
          <a
            href={SITE_CONFIG.whatsapp.url}
            target="_blank"
            rel="noreferrer"
            className="text-indigo-400 text-sm font-bold hover:text-indigo-300 transition-colors"
          >
            Habla directamente con nosotros &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
