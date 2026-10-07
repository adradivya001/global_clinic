import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ServiceDetailPage } from '../components/conditions/ServiceDetailPage';
import { CLINIC_SERVICES } from '../data/clinicData';

interface ServiceDetailPageWrapperProps {
  onBookClick: () => void;
}

export const ServiceDetailPageWrapper: React.FC<ServiceDetailPageWrapperProps> = ({ onBookClick }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const serviceId = id || CLINIC_SERVICES[0].id;

  const handleBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate('/conditions');
    }
  };

  return (
    <ServiceDetailPage
      serviceId={serviceId}
      onBack={handleBack}
      onBookClick={onBookClick}
      onSelectService={(newId) => navigate(`/services/${newId}`)}
    />
  );
};

export default ServiceDetailPageWrapper;
