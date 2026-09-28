import React from 'react';
import { ContactHero } from '../components/contact/ContactHero';
import { ContactInfoAppointment } from '../components/contact/ContactInfoAppointment';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactLocationMap } from '../components/contact/ContactLocationMap';
import { ContactCTA } from '../components/contact/ContactCTA';

interface ContactPageProps {
  onBookClick: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onBookClick }) => {
  return (
    <div className="w-full bg-[#F7FAFD] text-[#07182D] min-h-screen">
      {/* 1. Contact Hero */}
      <ContactHero onBookClick={onBookClick} />

      {/* 2. Contact Information + Appointment */}
      <ContactInfoAppointment onBookClick={onBookClick} />

      {/* 3. Contact Form */}
      <ContactForm />

      {/* 4. Location / Map */}
      <ContactLocationMap />

      {/* 5. Final CTA */}
      <ContactCTA onBookClick={onBookClick} />
    </div>
  );
};
