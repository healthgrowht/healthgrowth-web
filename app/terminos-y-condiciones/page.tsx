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
        <p className="text-gray-500 text-sm mb-12">Última actualización: octubre 2026</p>

        <div className="space-y-10 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Identificación</h2>
            <p>
              {SITE_CONFIG.legal.companyName}<br />
              RUT: {SITE_CONFIG.legal.rut}<br />
              Representante: {SITE_CONFIG.legal.founder}<br />
              Sitio web: {SITE_CONFIG.domain}<br />
              Canal principal de contacto: WhatsApp{' '}
              <a href={SITE_CONFIG.whatsapp.url} className="text-blue-400 hover:underline">
                {SITE_CONFIG.whatsapp.number}
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Servicios</h2>
            <p>
              Health Growth ofrece servicios de imagen digital, creación de contenido, captación de
              clientes, organización de atención y automatización progresiva para pequeñas y medianas
              empresas chilenas. Los servicios se organizan en niveles:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-gray-400">
              <li><strong className="text-gray-300">Diagnóstico Gratuito</strong> — evaluación inicial sin costo ni compromiso</li>
              <li><strong className="text-gray-300">Imagen Digital</strong> — imagen de marca y presencia digital profesional</li>
              <li><strong className="text-gray-300">Captación Activa</strong> — contenido y estrategia mensual para atraer clientes</li>
              <li><strong className="text-gray-300">Atención y Orden</strong> — automatización de WhatsApp y organización de clientes</li>
              <li><strong className="text-gray-300">Avanza</strong> — todos los niveles integrados</li>
            </ul>
            <p className="mt-3">
              La descripción detallada de cada nivel, incluyendo lo que incluye y lo que no incluye,
              se encuentra en la sección de Soluciones del sitio web.
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
            <h2 className="text-xl font-semibold text-white mb-3">4. Evaluación Inicial Gratuita</h2>
            <p>
              La evaluación inicial es un servicio gratuito y sin compromiso comercial.
              Al solicitarla, autorizas a Health Growth a contactarte por WhatsApp para coordinar
              la sesión y entregar los resultados.
            </p>
            <p className="mt-3">
              La evaluación no constituye una relación contractual ni obliga a ninguna de las partes
              a continuar con ningún servicio pago.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Servicios Contratados</h2>
            <p>
              Los servicios pagados de Health Growth se rigen por contratos o acuerdos específicos
              acordados entre las partes. Estos términos generales no reemplazan los acuerdos
              específicos de cada proyecto.
            </p>
            <p className="mt-3">
              Los precios, plazos y condiciones de cada servicio se definen en la propuesta o
              acuerdo específico. No se publican precios fijos porque cada negocio es diferente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Propiedad Intelectual</h2>
            <p>
              Todo el contenido de este sitio (textos, diseños, imágenes, logos, código) es propiedad
              de Health Growth o está licenciado para su uso. Queda prohibida su reproducción sin
              autorización escrita.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Limitación de Responsabilidad</h2>
            <p>
              Health Growth no garantiza resultados específicos de negocio. Los resultados dependen
              de múltiples factores incluyendo el mercado, la participación del cliente y la
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
              Para consultas sobre estos términos, escríbenos directamente por WhatsApp:{' '}
              <a href={SITE_CONFIG.whatsapp.url} className="text-blue-400 hover:underline">
                {SITE_CONFIG.whatsapp.number}
              </a>
              <br />
              Sitio web: {SITE_CONFIG.domain}
            </p>
          </section>

          <section className="border border-amber-500/20 rounded-2xl p-6 bg-amber-500/[0.04]">
            <h2 className="text-xl font-semibold text-amber-400 mb-3">Decisiones Pendientes del Titular</h2>
            <p className="text-gray-400 text-sm mb-4">
              Los siguientes campos de esta política requieren decisión del titular antes de publicar
              condiciones definitivas. Hasta que se definan, ninguna condición en estas materias
              es exigible desde el sitio.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 flex-shrink-0">→</span>
                <span><strong className="text-gray-300">Plazo mínimo de contrato</strong>: No definido. A acordar por escrito en cada contrato.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 flex-shrink-0">→</span>
                <span><strong className="text-gray-300">Condiciones de cancelación</strong>: No definidas. A acordar en el contrato específico.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 flex-shrink-0">→</span>
                <span><strong className="text-gray-300">Política de renovación</strong>: No definida. A acordar en el contrato específico.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 flex-shrink-0">→</span>
                <span><strong className="text-gray-300">Plazos de pago</strong>: No publicados. Se informan en la propuesta comercial.</span>
              </li>
            </ul>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <Link href="/" className="text-blue-500 hover:underline text-sm">← Volver al inicio</Link>
        </div>
      </div>
    </main>
  );
}
