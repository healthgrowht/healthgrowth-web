import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '../constants';

export const metadata = {
  title: 'Política de Privacidad | Health Growth',
  description: 'Política de privacidad y tratamiento de datos de Health Growth.',
};

export default function PoliticaPrivacidad() {
  return (
    <main className="bg-black text-white min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-blue-500 text-sm hover:underline mb-8 inline-block">
          ← Volver al inicio
        </Link>

        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Política de Privacidad</h1>
        <p className="text-gray-500 text-sm mb-12">Última actualización: junio 2026</p>

        <div className="space-y-10 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Responsable del Tratamiento</h2>
            <p>
              {SITE_CONFIG.legal.companyName}<br />
              RUT: {SITE_CONFIG.legal.rut}<br />
              Representante: {SITE_CONFIG.legal.founder}<br />
              Sitio web: {SITE_CONFIG.domain}<br />
              Contacto: {SITE_CONFIG.contact.email}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Datos que Recopilamos</h2>
            <p>Recopilamos los siguientes datos cuando completas nuestro formulario de diagnóstico:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
              <li>Nombre y apellido</li>
              <li>Correo electrónico</li>
              <li>Número de WhatsApp (opcional)</li>
              <li>Nombre del negocio</li>
              <li>Tipo de negocio e industria</li>
              <li>Descripción de necesidades digitales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Finalidad del Tratamiento</h2>
            <p>Utilizamos tus datos únicamente para:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
              <li>Realizar el diagnóstico digital gratuito solicitado</li>
              <li>Contactarte por correo o WhatsApp con los resultados del diagnóstico</li>
              <li>Enviarte información sobre servicios de Health Growth si lo autorizas</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Compartición de Datos</h2>
            <p>
              No vendemos, cedemos ni compartimos tus datos con terceros con fines comerciales.
              Utilizamos herramientas de automatización (n8n) y CRM (Notion) para gestión interna,
              sujetos a sus propias políticas de privacidad.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Retención de Datos</h2>
            <p>
              Conservamos tus datos durante el período necesario para prestar el servicio solicitado.
              Puedes solicitar la eliminación de tus datos en cualquier momento escribiendo a {SITE_CONFIG.contact.email}.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Tus Derechos</h2>
            <p>Tienes derecho a:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
              <li>Acceder a tus datos personales</li>
              <li>Rectificar datos inexactos</li>
              <li>Solicitar la eliminación de tus datos</li>
              <li>Oponerte al tratamiento de tus datos</li>
            </ul>
            <p className="mt-3">Para ejercer estos derechos, escríbenos a: <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-blue-400 hover:underline">{SITE_CONFIG.contact.email}</a></p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Cookies</h2>
            <p>
              Este sitio web puede utilizar cookies técnicas necesarias para el funcionamiento básico del sitio.
              No utilizamos cookies de seguimiento ni publicidad de terceros.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Modificaciones</h2>
            <p>
              Nos reservamos el derecho de actualizar esta política. Te notificaremos de cambios significativos
              a través de los canales de contacto disponibles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Contacto</h2>
            <p>
              Para cualquier consulta sobre esta política:<br />
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
