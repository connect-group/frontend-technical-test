/* eslint-disable react/prop-types */
import React from 'react';
import { TVehicleId } from '../../@typings/vehicle';
import useVehiclesStore from '../../store/vehicles-store';

const Picture: React.FC<TVehicleId> = ({ id }) => {
  const vehicle = useVehiclesStore(
    (s) => s.vehicles.filter((v) => v.id === id)[0],
  );
  return (
    <picture className="vehicle__image_wrapper-picture">
      <source media="(min-width:768px)" srcSet={vehicle.media[0].url} />
      <source media="(max-width:767px)" srcSet={vehicle.media[1].url} />
      <img
        className="vehicle__image_wrapper-img"
        src={vehicle.media[0].url}
        alt={vehicle.media[0].name}
      />
    </picture>
  );
};

export default Picture;
