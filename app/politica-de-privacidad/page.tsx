import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '../constants';

export const metadata = {
  title: 'Política de Privacidad | Health Growth',
  description: 'Política de privacidad y tratamiento de datos de Health Growth.',
};

export default function PoliticaPrivacidad() {
  return (
    <main className="bg-[#071428] text-white min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-blue-500 text-sm hover:underline mb-8 inline-block">
          ← Volver al inicio
        </Link>

        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Política de Privacidad</h1>
        <p className="text-gray-500 text-sm mb-12">Última actualización: octubre 2026</p>

        <div className="space-y-10 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Responsable del Tratamiento</h2>
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
            <h2 className="text-xl font-semibold text-white mb-3">2. Datos que Recopilamos</h2>
            <p className="mb-3">Recopilamos datos a través de dos vías:</p>

            <h3 className="text-base font-semibold text-gray-200 mb-2">2a. Formulario de evaluación</h3>
            <ul className="list-disc list-inside mt-1 mb-4 space-y-1 text-gray-400">
              <li>Nombre y apellido</li>
              <li>Correo electrónico</li>
              <li>Número de WhatsApp / teléfono de contacto</li>
              <li>Nombre del negocio y ciudad</li>
              <li>Tipo de servicio de interés</li>
              <li>Descripción del principal desafío del negocio</li>
            </ul>

            <h3 className="text-base font-semibold text-gray-200 mb-2">2b. Conversación con Chimi (asistente digital)</h3>
            <p className="text-gray-400 mb-3">
              Chimi es el asistente digital de Health Growth, disponible en este sitio. Cuando interactúas
              con Chimi, puede quedar registrado en tu sesión de navegación (sessionStorage del navegador):
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              <li>La necesidad principal que describiste (por ejemplo: más clientes, mejor imagen)</li>
              <li>La solución que Chimi te recomendó</li>
              <li>El canal de origen (si llegaste desde Chimi o directamente al formulario)</li>
            </ul>
            <p className="text-gray-500 text-sm mt-2">
              Esta información de contexto se almacena temporalmente en tu navegador y se transmite junto
              con el formulario de evaluación si decides completarlo. No se guarda en nuestros servidores
              a menos que envíes el formulario.
            </p>

            <h3 className="text-base font-semibold text-gray-200 mb-2 mt-4">2c. Datos de origen y navegación</h3>
            <p className="text-gray-400">
              Al enviar el formulario también registramos: origen de la visita (UTM/fuente si aplica),
              URL de referencia, y página desde donde se originó la solicitud. Esto nos ayuda a entender
              cómo llegaste a nosotros y no se comparte con terceros.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Finalidad del Tratamiento</h2>
            <p>Utilizamos tus datos únicamente para:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
              <li>Realizar el diagnóstico o evaluación gratuita solicitada</li>
              <li>Contactarte por WhatsApp para entregar los resultados y orientarte sobre el mejor paso</li>
              <li>Registrar y gestionar tu solicitud como prospecto en nuestra plataforma CRM interna</li>
              <li>Enviarte información sobre servicios de Health Growth si lo autorizas expresamente</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Procesadores y Herramientas</h2>
            <p>
              Para el procesamiento de solicitudes utilizamos herramientas de automatización y CRM
              operadas por Health Growth. No vendemos, cedemos ni compartimos tus datos con terceros
              con fines comerciales.
            </p>
            <p className="mt-3">
              El asistente Chimi utiliza la API de Anthropic (anthropic.com) cuando está disponible
              para procesar mensajes de texto. Los mensajes se transmiten a sus servidores para generar
              respuestas, sujetos a su política de privacidad. No guardamos transcripciones completas
              de conversaciones con Chimi.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Retención de Datos</h2>
            <p>
              Conservamos tus datos de contacto y solicitud durante el tiempo necesario para prestar
              el servicio solicitado y gestionar la relación comercial. Puedes solicitar la eliminación
              de tus datos en cualquier momento escribiéndonos por WhatsApp.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Tus Derechos</h2>
            <p>Tienes derecho a:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
              <li>Acceder a tus datos personales que tengamos registrados</li>
              <li>Rectificar datos inexactos</li>
              <li>Solicitar la eliminación de tus datos</li>
              <li>Oponerte al tratamiento de tus datos</li>
            </ul>
            <p className="mt-3">
              Para ejercer estos derechos, escríbenos por WhatsApp:{' '}
              <a href={SITE_CONFIG.whatsapp.url} className="text-blue-400 hover:underline">
                {SITE_CONFIG.whatsapp.number}
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Cookies y Almacenamiento Local</h2>
            <p>
              Este sitio puede utilizar almacenamiento local del navegador (sessionStorage) para
              guardar temporalmente el contexto de tu conversación con Chimi. Estos datos permanecen
              en tu dispositivo y se eliminan al cerrar la pestaña. No utilizamos cookies de seguimiento
              ni publicidad de terceros.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Modificaciones</h2>
            <p>
              Nos reservamos el derecho de actualizar esta política. Los cambios significativos
              se comunicarán a través de nuestros canales activos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Contacto</h2>
            <p>
              Para cualquier consulta sobre esta política, escríbenos directamente por WhatsApp:{' '}
              <a href={SITE_CONFIG.whatsapp.url} className="text-blue-400 hover:underline">
                {SITE_CONFIG.whatsapp.number}
              </a>
              <br />
              Sitio web: {SITE_CONFIG.domain}
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
