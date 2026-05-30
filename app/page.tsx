import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { SITE_CONFIG } from './constants';

export default function TermsAndConditions() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 pt-40 pb-20">
        <h1 className="text-4xl font-bold mb-8">Términos y Condiciones</h1>
        
        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. Aceptación de Términos</h2>
            <p>
              Al acceder al sitio web de {SITE_CONFIG.brand}, usted acepta quedar vinculado por estos términos de servicio 
              y todas las leyes y reglamentos aplicables en el territorio chileno.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. Naturaleza del Servicio</h2>
            <p>
              HealthGrowth SpA ofrece servicios de consultoría, arquitectura operativa, modernización digital 
              y automatización de procesos para Pymes y profesionales del área salud.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Propiedad Intelectual</h2>
            <p>
              Todo el contenido, logos, metodologías y material gráfico presente en este sitio es propiedad exclusiva 
              de HealthGrowth SpA. Queda prohibida su reproducción total o parcial sin autorización.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Limitación de Responsabilidad</h2>
            <p>
              HealthGrowth SpA no será responsable de daños derivados del uso o la imposibilidad de utilizar 
              los materiales en su sitio web.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}