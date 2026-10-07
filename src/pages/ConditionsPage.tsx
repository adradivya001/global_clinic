import React from 'react';
import { ConditionsHero } from '../components/conditions/ConditionsHero';
import { BodyAreaExplorer } from '../components/conditions/BodyAreaExplorer';
import { SymptomsToAssessment } from '../components/conditions/SymptomsToAssessment';
import { CommonConditions } from '../components/conditions/CommonConditions';
import { ConditionsCTA } from '../components/conditions/ConditionsCTA';

interface ConditionsPageProps {
  onBookClick: () => void;
}

export const ConditionsPage: React.FC<ConditionsPageProps> = ({ onBookClick }) => {
  return (
    <main className="min-h-screen bg-white text-stone-900">
      {/* 01. Conditions Hero */}
      <ConditionsHero onBookClick={onBookClick} />

      {/* 02. Interactive Anatomy Body Area Explorer */}
      <BodyAreaExplorer onBookClick={onBookClick} />

      {/* 03. From Symptoms To Assessment */}
      <SymptomsToAssessment />

      {/* 04. Six Core Clinical Services (Level 1 Discovery) */}
      <CommonConditions onBookClick={onBookClick} />

      {/* 05. Final CTA */}
      <ConditionsCTA onBookClick={onBookClick} />
    </main>
  );
};

export default ConditionsPage;
