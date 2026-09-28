import React from 'react';
import { ClinicHero } from '../components/clinic/ClinicHero';
import { ClinicGallery } from '../components/clinic/ClinicGallery';
import { ClinicFacilities } from '../components/clinic/ClinicFacilities';
import { ClinicCareSpace } from '../components/clinic/ClinicCareSpace';
import { ClinicCTA } from '../components/clinic/ClinicCTA';

interface ClinicPageProps {
  onBookClick: () => void;
}

export const ClinicPage: React.FC<ClinicPageProps> = ({ onBookClick }) => {
  return (
    <div className="w-full bg-[#F7FAFD] text-[#07182D] min-h-screen">
      {/* 01. Clinic Hero */}
      <ClinicHero onBookClick={onBookClick} />

      {/* 02. Inside Global Physiotherapy */}
      <ClinicGallery />

      {/* 03. Clinic Environment */}
      <ClinicFacilities />

      {/* 04. A Space Focused on Your Care */}
      <ClinicCareSpace />

      {/* 05. Final CTA */}
      <ClinicCTA onBookClick={onBookClick} />
    </div>
  );
};
