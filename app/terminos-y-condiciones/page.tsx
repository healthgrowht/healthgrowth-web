import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '../constants';

export const metadata = {
  title: 'Términos y Condiciones | Health Growth',
  description: 'Términos y condiciones de uso de los servicios de Health Growth.',
};

export default function TerminosCondiciones() {
  return (
    <main className="bg-[#071428] text-white min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-blue-500 text-sm hover:underline mb-8 inline-block">
          ← Volver al inicio
        </Link>

        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Términos y Condiciones</h1>
        <p className="text-gray-500 text-sm mb-12">Última actualización: agosto 2026</p>

        <div className="space-y-10 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Identificación</h2>
            <p>
              {SITE_CONFIG.legal.companyName}<br />
              RUT: {SITE_CONFIG.legal.rut}<br />
              Representante: {SITE_CONFIG.legal.founder}<br />
              Sitio web: {SITE_CONFIG.domain}<br />
              Contacto: {SITE_CONFIG.contact.email}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Objeto del Servicio</h2>
            <p>
              Health Growth ofrece servicios de consultoría y digitalización para pequeñas y medianas empresas (pymes),
              incluyendo diagnóstico digital, configuración de canales digitales (Instagram, WhatsApp Business, sitio web),
              automatización de procesos y acompañamiento estratégico.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Uso del Sitio Web</h2>
            <p>Al utilizar este sitio, aceptas:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
              <li>Proporcionar información veraz en los formularios de contacto</li>
              <li>No utilizar el sitio para fines ilegales o no autorizados</li>
              <li>No intentar acceder a sistemas o datos no autorizados</li>
              <li>Respetar los derechos de propiedad intelectual del contenido publicado</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Diagnóstico Digital Gratuito</h2>
            <p>
              El diagnóstico digital gratuito es un servicio de evaluación sin costo ni compromiso comercial.
              Al solicitarlo, autorizas a Health Growth a contactarte por los medios indicados en el formulario
              para entregar los resultados del diagnóstico.
            </p>
            <p className="mt-3">
              El diagnóstico no constituye una relación contractual ni obliga a ninguna de las partes
              a continuar con ningún servicio.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Servicios Contratados</h2>
            <p>
              Los servicios pagados de Health Growth se rigen por contratos o acuerdos específicos
              firmados entre las partes. Estos términos generales no reemplazan los acuerdos específicos
              de cada proyecto.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Propiedad Intelectual</h2>
            <p>
              Todo el contenido de este sitio (textos, diseños, imágenes, logos, código) es propiedad
              de Health Growth o está licenciado para su uso. Queda prohibida su reproducción sin autorización escrita.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Limitación de Responsabilidad</h2>
            <p>
              Health Growth no garantiza resultados específicos de negocio. Los resultados dependen de
              múltiples factores externos incluyendo el mercado, la implementación del cliente y la
              consistencia de ejecución.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Legislación Aplicable</h2>
            <p>
              Estos términos se rigen por la legislación vigente en la República de Chile.
              Cualquier disputa se someterá a los tribunales competentes del domicilio del prestador.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Modificaciones</h2>
            <p>
              Health Growth se reserva el derecho de actualizar estos términos.
              El uso continuado del sitio implica la aceptación de los términos vigentes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Contacto</h2>
            <p>
              Para consultas sobre estos términos:<br />
              Email: <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-blue-400 hover:underline">{SITE_CONFIG.contact.email}</a><br />
              WhatsApp: <a href={SITE_CONFIG.whatsapp.url} className="text-blue-400 hover:underline">{SITE_CONFIG.whatsapp.number}</a>
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <Link href="/" className="text-blue-500 hover:underline text-sm">← Volver al inicio</Link>
        </div>
      </div>
    </main>
  );
}
