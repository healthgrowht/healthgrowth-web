import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Problem from './Problem';
import Transformation from './Transformation';
import Levels from './Levels';
import SystemFlow from './SystemFlow';
import Services from './Services';
import AutomationAI from './AutomationAI';
import Mission from './Mission';
import WhyHealthGrowth from './WhyHealthGrowth';
import ProfessionalSupport from './ProfessionalSupport';
import UseCases from './UseCases';
import Chimi from './Chimi';
import Roquito from './Roquito';
import SocialProof from './SocialProof';
import SocialMediaReferences from './SocialMediaReferences';
import FAQ from './FAQ';
import DiagnosticForm from './DiagnosticForm';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen relative">
      <Navbar />
      
      {/* 1. ATENCIÓN */}
      <Hero />
      
      {/* 2. EL DOLOR Y LA IDENTIFICACIÓN */}
      <Problem />
      <UseCases />
      <Transformation />
      
      {/* 3. LA SOLUCIÓN: HEALTHGROWTH ECOSYSTEM OS */}
      <Levels />
      <Services />
      <SystemFlow />
      <AutomationAI />
      
      {/* 4. PROPÓSITO Y AUTORIDAD */}
      <Mission />
      <WhyHealthGrowth />
      <ProfessionalSupport />

      {/* 5. EMBAJADOR DIGITAL Y CASO FUNDACIONAL */}
      <Chimi />
      <SocialProof />
      <Roquito />
      
      {/* 6. REDES SOCIALES Y CONEXIÓN */}
      <SocialMediaReferences />
      
      {/* 7. DUDAS FINALES Y ACCIÓN */}
      <FAQ />
      <DiagnosticForm />
      
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}