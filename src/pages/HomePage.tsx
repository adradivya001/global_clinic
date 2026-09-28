import React from 'react';
import { Hero } from '../components/Hero';
import { PillarCards } from '../components/PillarCards';
import { BodyExplorer } from '../components/BodyExplorer';
import { TreatmentCarousel } from '../components/TreatmentCarousel';
import { RecoveryJourney } from '../components/RecoveryJourney';
import { DoctorSection } from '../components/DoctorSection';
import { PatientProgress } from '../components/PatientProgress';
import { ClinicSection } from '../components/ClinicSection';
import { KnowledgeSection } from '../components/KnowledgeSection';
import { FinalCTA } from '../components/FinalCTA';

interface HomePageProps {
  onBookClick: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onBookClick }) => {
  const handleScrollToTreatments = () => {
    const el = document.getElementById('treatments');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToExplorer = () => {
    const el = document.getElementById('explorer');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-white text-[#102A43]">
      {/* 2. Hero Section */}
      <Hero
        onBookClick={onBookClick}
        onExploreClick={handleScrollToTreatments}
      />

      {/* 3. Three Core Pillars (Movement, Recovery, Strength) */}
      <PillarCards onSelectPillar={handleScrollToExplorer} />

      {/* 4. Interactive Body Condition Explorer */}
      <BodyExplorer onBookClick={onBookClick} />

      {/* 5. Treatment Areas Carousel */}
      <TreatmentCarousel onBookClick={onBookClick} />

      {/* 6. Recovery Journey Dark Timeline */}
      <RecoveryJourney />

      {/* 7. Doctor Section & Editorial Philosophy */}
      <DoctorSection onBookClick={onBookClick} />

      {/* 8. Patient Progress & Testimonials */}
      <PatientProgress />

      {/* 9. Clinic & Location Section */}
      <ClinicSection onBookClick={onBookClick} />

      {/* 10. Knowledge Section */}
      <KnowledgeSection />

      {/* 11. Final CTA */}
      <FinalCTA onBookClick={onBookClick} />
    </main>
  );
};

export default HomePage;
