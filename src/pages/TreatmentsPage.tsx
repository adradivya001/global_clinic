import React from 'react';
import { TreatmentsHero } from '../components/treatments/TreatmentsHero';
import { TreatmentCategories } from '../components/treatments/TreatmentCategories';
import { FeaturedTreatments } from '../components/treatments/FeaturedTreatments';
import { TreatmentMethods } from '../components/treatments/TreatmentMethods';
import { FindingRightApproach } from '../components/treatments/FindingRightApproach';
import { TreatmentsCTA } from '../components/treatments/TreatmentsCTA';

interface TreatmentsPageProps {
  onBookClick: () => void;
}

export const TreatmentsPage: React.FC<TreatmentsPageProps> = ({ onBookClick }) => {
  return (
    <main className="min-h-screen bg-white text-[#102A43]">
      {/* 01. Treatments Hero */}
      <TreatmentsHero onBookClick={onBookClick} />

      {/* 02. Areas of Care (Categories) */}
      <TreatmentCategories onBookClick={onBookClick} />

      {/* 03. Focused Treatment Areas */}
      <FeaturedTreatments onBookClick={onBookClick} />

      {/* 04. Treatment Methods */}
      <TreatmentMethods />

      {/* 05. Finding The Right Approach */}
      <FindingRightApproach />

      {/* 06. Final CTA */}
      <TreatmentsCTA onBookClick={onBookClick} />
    </main>
  );
};

export default TreatmentsPage;
