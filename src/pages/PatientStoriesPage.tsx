import React from 'react';
import { PatientStoriesHero } from '../components/patient-stories/PatientStoriesHero';
import { GoogleReviews } from '../components/patient-stories/GoogleReviews';
import { AppreciationThemes } from '../components/patient-stories/AppreciationThemes';
import { PatientStoriesCTA } from '../components/patient-stories/PatientStoriesCTA';

interface PatientStoriesPageProps {
  onBookClick: () => void;
}

export const PatientStoriesPage: React.FC<PatientStoriesPageProps> = ({ onBookClick }) => {
  return (
    <main className="min-h-screen bg-[#F7FAFD] text-[#07182D]">
      {/* 01. Patient Stories Hero */}
      <PatientStoriesHero onBookClick={onBookClick} />

      {/* 02. Google Reviews */}
      <GoogleReviews />

      {/* 03. What Patients Appreciate (Themes) */}
      <AppreciationThemes />

      {/* 04. Final CTA */}
      <PatientStoriesCTA onBookClick={onBookClick} />
    </main>
  );
};

export default PatientStoriesPage;
