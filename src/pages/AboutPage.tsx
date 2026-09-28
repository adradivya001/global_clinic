import React from 'react';
import { AboutHero } from '../components/about/AboutHero';
import { WhoWeAre } from '../components/about/WhoWeAre';
import { WhatWeBelieve } from '../components/about/WhatWeBelieve';
import { CarePrinciples } from '../components/about/CarePrinciples';
import { OurCommitment } from '../components/about/OurCommitment';
import { AboutCTA } from '../components/about/AboutCTA';

interface AboutPageProps {
  onBookClick: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onBookClick }) => {
  return (
    <main className="min-h-screen bg-white text-[#102A43]">
      {/* 01. About Hero */}
      <AboutHero onBookClick={onBookClick} />

      {/* 02. Who We Are */}
      <WhoWeAre />

      {/* 03. What We Believe */}
      <WhatWeBelieve />

      {/* 04. Our Care Principles */}
      <CarePrinciples />

      {/* 05. Our Commitment */}
      <OurCommitment />

      {/* 06. Final CTA */}
      <AboutCTA onBookClick={onBookClick} />
    </main>
  );
};

export default AboutPage;
