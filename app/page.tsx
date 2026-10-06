import Navbar from './Navbar';
import Hero from './Hero';
import PromoAnnouncement from './PromoAnnouncement';
import BusinessStrip from './BusinessStrip';
import Problem from './Problem';
import NeedsSelector from './NeedsSelector';
import PacksCanonical from './PacksCanonical';
import ChimiSection from './ChimiSection';
import HowItWorks from './HowItWorks';
import Mission from './Mission';
import CasoPatitas from './CasoPatitas';
import ProfessionalSupport from './ProfessionalSupport';
import FAQ from './FAQ';
import DiagnosticForm from './DiagnosticForm';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';
import ChimiChat from './ChimiChat';

export default function Home() {
  return (
    <main className="bg-[#071428] text-white min-h-screen relative">
      <PromoAnnouncement />
      <Navbar />

      {/* 1. HERO */}
      <Hero />

      {/* 2. NEGOCIOS */}
      <BusinessStrip />

      {/* 3. PROBLEMA */}
      <Problem />

      {/* 4. ¿QUÉ NECESITAS? */}
      <NeedsSelector />

      {/* 5. SOLUCIONES */}
      <PacksCanonical />

      {/* 6. CHIMI */}
      <ChimiSection />

      {/* 7. CÓMO FUNCIONA */}
      <HowItWorks />

      {/* 8. PROPÓSITO / MISIÓN / VISIÓN */}
      <Mission />

      {/* 9. CASO REAL */}
      <CasoPatitas />

      {/* 10. CONFIANZA */}
      <ProfessionalSupport />

      {/* 11. FAQ */}
      <FAQ />

      {/* 12. EVALUACIÓN */}
      <DiagnosticForm />

      <Footer />
      <FloatingWhatsApp />
      <ChimiChat />
    </main>
  );
}
