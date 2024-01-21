import React from 'react';
import useVehiclesStore from '../../store/vehicles-store';
import { vehicleDetailsSelector } from '../../store/vehicles-store/selectors/vehicle-details-selector';
import Text from '../text';

const Details: React.FC = () => {
  const details = useVehiclesStore(vehicleDetailsSelector);
  return (
    <div className="vehicle-detail__details">
      {details.map(({ label, value }, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className="vehicle-detail__detail" key={index}>
          <Text className="vehicle-detail__label">
            {label}
            :
          </Text>
          {value}
        </div>
      ))}
    </div>
  );
};
export default Details;
