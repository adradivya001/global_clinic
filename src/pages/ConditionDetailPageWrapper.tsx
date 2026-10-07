import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ConditionDetailPage } from '../components/conditions/ConditionDetailPage';

interface ConditionDetailPageWrapperProps {
  onBookClick: () => void;
}

export const ConditionDetailPageWrapper: React.FC<ConditionDetailPageWrapperProps> = ({ onBookClick }) => {
  const { serviceId, conditionId } = useParams<{ serviceId?: string; conditionId?: string }>();
  const navigate = useNavigate();

  const currentConditionId = conditionId || 'back-pain';
  const currentServiceId = serviceId || 'orthopedic-conditions';

  const handleBack = () => {
    navigate(`/services/${currentServiceId}`);
  };

  const handleSelectCondition = (newConditionId: string) => {
    navigate(`/services/${currentServiceId}/${newConditionId}`);
  };

  return (
    <ConditionDetailPage
      conditionId={currentConditionId}
      onBack={handleBack}
      onBookClick={onBookClick}
      onSelectCondition={handleSelectCondition}
    />
  );
};

export default ConditionDetailPageWrapper;
