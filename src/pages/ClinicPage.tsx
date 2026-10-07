import { ClinicHero } from '../components/clinic/ClinicHero';
import { ClinicFacilities } from '../components/clinic/ClinicFacilities';
import { ClinicEquipment } from '../components/clinic/ClinicEquipment';
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

      {/* 02. Clinic Environment */}
      <ClinicFacilities />

      {/* 04. 18 Machines & Treatment Modalities */}
      <ClinicEquipment onBookClick={onBookClick} />

      {/* 05. A Space Focused on Your Care */}
      <ClinicCareSpace />

      {/* 06. Final CTA */}
      <ClinicCTA onBookClick={onBookClick} />
    </div>
  );
};
