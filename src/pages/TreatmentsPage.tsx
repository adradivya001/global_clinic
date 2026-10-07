import React from 'react';
import { TreatmentsHero } from '../components/treatments/TreatmentsHero';
import { TreatmentCategories } from '../components/treatments/TreatmentCategories';
import { FeaturedTreatments } from '../components/treatments/FeaturedTreatments';
import { TreatmentMethods } from '../components/treatments/TreatmentMethods';
import { ClinicEquipment } from '../components/clinic/ClinicEquipment';
import { FindingRightApproach } from '../components/treatments/FindingRightApproach';
import { TreatmentsCTA } from '../components/treatments/TreatmentsCTA';

interface TreatmentsPageProps {
  onBookClick: () => void;
}

export const TreatmentsPage: React.FC<TreatmentsPageProps> = ({ onBookClick }) => {
  return (
    <main className="min-h-screen bg-white text-stone-900">
      {/* 01. Treatments Hero */}
      <TreatmentsHero onBookClick={onBookClick} />

      {/* 02. Areas of Care (Categories) */}
      <TreatmentCategories onBookClick={onBookClick} />

      {/* 03. Focused Treatment Areas */}
      <FeaturedTreatments onBookClick={onBookClick} />

      {/* 04. Treatment Methods */}
      <TreatmentMethods />

      {/* 05. 18 Machines & Modalities */}
      <ClinicEquipment 
        onBookClick={onBookClick}
        title="Treatment Machines & Therapeutic Modalities"
        subtitle="Explore the 18 specialized physical therapy machines, traction decompression, and electro-thermal modalities utilized across our clinical programs."
      />

      {/* 06. Finding The Right Approach */}
      <FindingRightApproach />

      {/* 07. Final CTA */}
      <TreatmentsCTA onBookClick={onBookClick} />
    </main>
  );
};

export default TreatmentsPage;
