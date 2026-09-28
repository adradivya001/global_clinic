import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PillarCards } from './components/PillarCards';
import { BodyExplorer } from './components/BodyExplorer';
import { TreatmentCarousel } from './components/TreatmentCarousel';
import { RecoveryJourney } from './components/RecoveryJourney';
import { DoctorSection } from './components/DoctorSection';
import { PatientProgress } from './components/PatientProgress';
import { ClinicSection } from './components/ClinicSection';
import { KnowledgeSection } from './components/KnowledgeSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';

export function App() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  const handleOpenAppointment = () => setIsAppointmentOpen(true);
  const handleCloseAppointment = () => setIsAppointmentOpen(false);

  const handleScrollToTreatments = () => {
    const el = document.getElementById('treatments');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToExplorer = () => {
    const el = document.getElementById('explorer');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-[#102A43] selection:bg-amber-400 selection:text-white font-sans">
      {/* 1. Header & Navigation */}
      <Navbar onBookClick={handleOpenAppointment} />

      {/* 2. Hero Section with Video Background */}
      <Hero
        onBookClick={handleOpenAppointment}
        onExploreClick={handleScrollToTreatments}
      />

      {/* 3. Three Core Pillars (Movement, Recovery, Strength) */}
      <PillarCards onSelectPillar={handleScrollToExplorer} />

      {/* 4. Interactive Body Condition Explorer */}
      <BodyExplorer onBookClick={handleOpenAppointment} />

      {/* 5. Treatment Areas Carousel */}
      <TreatmentCarousel onBookClick={handleOpenAppointment} />

      {/* 6. Recovery Journey Dark Timeline */}
      <RecoveryJourney />

      {/* 7. Doctor Section & Editorial Philosophy */}
      <DoctorSection onBookClick={handleOpenAppointment} />

      {/* 8. Patient Progress & Testimonials */}
      <PatientProgress />

      {/* 9. Clinic & Location Section */}
      <ClinicSection onBookClick={handleOpenAppointment} />

      {/* 10. Knowledge Section */}
      <KnowledgeSection />

      {/* 11. Final CTA */}
      <FinalCTA onBookClick={handleOpenAppointment} />

      {/* 12. Footer */}
      <Footer />

      {/* Interactive 5-Step Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={handleCloseAppointment}
      />
    </div>
  );
}

export default App;
