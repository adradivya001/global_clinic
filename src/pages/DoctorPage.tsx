import React from 'react';
import { DoctorHero } from '../components/doctor/DoctorHero';
import { DoctorProfile } from '../components/doctor/DoctorProfile';
import { ClinicalExpertise } from '../components/doctor/ClinicalExpertise';
import { TreatmentPhilosophy } from '../components/doctor/TreatmentPhilosophy';
import { DoctorCTA } from '../components/doctor/DoctorCTA';

interface DoctorPageProps {
  onBookClick: () => void;
}

export const DoctorPage: React.FC<DoctorPageProps> = ({ onBookClick }) => {
  return (
    <main className="min-h-screen bg-white text-stone-900">
      {/* 01. Doctor Hero */}
      <DoctorHero onBookClick={onBookClick} />

      {/* 02. Professional Profile */}
      <DoctorProfile />

      {/* 03. Clinical Expertise */}
      <ClinicalExpertise />

      {/* 04. Treatment Philosophy */}
      <TreatmentPhilosophy />

      {/* 05. Appointment CTA */}
      <DoctorCTA onBookClick={onBookClick} />
    </main>
  );
};

export default DoctorPage;
