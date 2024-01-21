import React from 'react';
import useVehiclesStore from '../../store/vehicles-store';
import { vehicleDescriptionSelector } from '../../store/vehicles-store/selectors/vehicle-description-selector';
import Text from '../text';

const Description: React.FC = () => {
  const description = useVehiclesStore(vehicleDescriptionSelector);
  return (
    <Text as="p" className="vehicle-detail__description">
      {description}
    </Text>
  );
};
export default Description;
