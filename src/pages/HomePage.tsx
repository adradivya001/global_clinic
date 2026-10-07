import React from 'react';
import { Hero } from '../components/Hero';
import { PillarCards } from '../components/PillarCards';
import { ServicesPreview } from '../components/ServicesPreview';
import { DoctorSection } from '../components/DoctorSection';
import { ClinicEquipment } from '../components/clinic/ClinicEquipment';
import { RecoveryJourney } from '../components/RecoveryJourney';
import { PatientProgress } from '../components/PatientProgress';
import { ClinicSection } from '../components/ClinicSection';
import { FinalCTA } from '../components/FinalCTA';

interface HomePageProps {
  onBookClick: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onBookClick }) => {
  const handleScrollToServices = () => {
    const el = document.getElementById('services-preview');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToEquipment = () => {
    const el = document.getElementById('clinic-equipment');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-white text-stone-900">
      {/* 01. Hero Section */}
      <Hero
        onBookClick={onBookClick}
        onExploreClick={handleScrollToEquipment}
      />

      {/* 02. Three Core Clinical Pillars (Movement, Recovery, Strength) */}
      <PillarCards onSelectPillar={handleScrollToServices} />

      {/* 03. Specialized Care & Condition Directory Preview (6 Services) */}
      <ServicesPreview />

      {/* 04. Lead Doctor & Clinical Philosophy */}
      <DoctorSection onBookClick={onBookClick} />

      {/* 05. Featured Clinical Equipment & Treatment Modalities (Top 6 Highlighted + Full 18 Modal Access) */}
      <ClinicEquipment 
        onBookClick={onBookClick} 
        limit={6}
        showViewAllButton={true}
      />

      {/* 06. 5-Phase Clinical Recovery Pathway */}
      <RecoveryJourney />

      {/* 07. Verified Patient Outcomes & Testimonials */}
      <PatientProgress />

      {/* 08. Clinic Facility, Timings & Location (Anantapur Center) */}
      <ClinicSection onBookClick={onBookClick} />

      {/* 09. Final High-Impact Booking CTA */}
      <FinalCTA onBookClick={onBookClick} />
    </main>
  );
};

export default HomePage;
