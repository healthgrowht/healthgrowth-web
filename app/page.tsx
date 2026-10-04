import Navbar from './Navbar';
import Hero from './Hero';
import Problem from './Problem';
import NeedsSelector from './NeedsSelector';
import Transformation from './Transformation';
import PacksCanonical from './PacksCanonical';
import UseCases from './UseCases';
import AutomationAI from './AutomationAI';
import LiveSystemFlow from './LiveSystemFlow';
import CasoPatitas from './CasoPatitas';
import ProfessionalSupport from './ProfessionalSupport';
import InstagramBlock from './InstagramBlock';
import VideoShowcase from './VideoShowcase';
import FAQ from './FAQ';
import DiagnosticForm from './DiagnosticForm';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';

export default function Home() {
  return (
    <main className="bg-[#071428] text-white min-h-screen relative">
      <Navbar />

      {/* 1. ATENCIÓN */}
      <Hero />

      {/* 2. PROBLEMA + NECESIDAD + PROCESO */}
      <Problem />
      <NeedsSelector />
      <Transformation />

      {/* 3. SOLUCIONES */}
      <PacksCanonical />

      {/* 4. RUBROS */}
      <UseCases />

      {/* 5. CÓMO FUNCIONA + CHIMI */}
      <AutomationAI />

      {/* 6. ECOSISTEMA EN ACCIÓN */}
      <LiveSystemFlow />

      {/* 7. CASO REAL — PATITAS FELICES + ROCCO */}
      <CasoPatitas />

      {/* 8. DIFERENCIADORES */}
      <ProfessionalSupport />

      {/* 9. INSTAGRAM */}
      <InstagramBlock />

      {/* 10. VIDEO */}
      <VideoShowcase />

      {/* 11. PREGUNTAS + FORMULARIO */}
      <FAQ />
      <DiagnosticForm />

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
