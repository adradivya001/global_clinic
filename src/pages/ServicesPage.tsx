import React from 'react';
import { TreatmentsHero } from '../components/treatments/TreatmentsHero';
import { TreatmentCategories } from '../components/treatments/TreatmentCategories';
import { FeaturedTreatments } from '../components/treatments/FeaturedTreatments';
import { TreatmentMethods } from '../components/treatments/TreatmentMethods';
import { ClinicEquipment } from '../components/clinic/ClinicEquipment';
import { FindingRightApproach } from '../components/treatments/FindingRightApproach';
import { TreatmentsCTA } from '../components/treatments/TreatmentsCTA';

interface ServicesPageProps {
  onBookClick: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onBookClick }) => {
  return (
    <main className="min-h-screen bg-[#FFFDF8] text-[#24190F]">
      {/* 01. Services Hero */}
      <TreatmentsHero onBookClick={onBookClick} />

      {/* 02. Clinical Services & Areas of Care */}
      <TreatmentCategories onBookClick={onBookClick} />

      {/* 03. Focused Treatment & Care Areas */}
      <FeaturedTreatments onBookClick={onBookClick} />

      {/* 04. Treatment Methods & Protocols */}
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

export default ServicesPage;
