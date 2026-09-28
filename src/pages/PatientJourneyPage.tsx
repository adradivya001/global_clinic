import React from 'react';
import { PatientJourneyHero } from '../components/patient-journey/PatientJourneyHero';
import { JourneyTimeline } from '../components/patient-journey/JourneyTimeline';
import { WhatToExpect } from '../components/patient-journey/WhatToExpect';
import { ProgressSection } from '../components/patient-journey/ProgressSection';
import { PatientJourneyCTA } from '../components/patient-journey/PatientJourneyCTA';

interface PatientJourneyPageProps {
  onBookClick: () => void;
}

export const PatientJourneyPage: React.FC<PatientJourneyPageProps> = ({ onBookClick }) => {
  return (
    <main className="min-h-screen bg-white text-[#102A43]">
      {/* 01. Patient Journey Hero */}
      <PatientJourneyHero onBookClick={onBookClick} />

      {/* 02. The Journey Timeline */}
      <JourneyTimeline />

      {/* 03. What To Expect */}
      <WhatToExpect />

      {/* 04. Your Progress */}
      <ProgressSection />

      {/* 05. Final CTA */}
      <PatientJourneyCTA onBookClick={onBookClick} />
    </main>
  );
};

export default PatientJourneyPage;
