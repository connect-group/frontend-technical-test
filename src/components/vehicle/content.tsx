/* eslint-disable react/prop-types */
import React from 'react';
import { TVehicleId } from '../../@typings/vehicle';
import useVehiclesStore from '../../store/vehicles-store';
import ContentTitle from './content-title';
import Description from './description';
import Price from './price';

const Content: React.FC<TVehicleId> = ({ id }) => {
  const { detail: { price, description } } = useVehiclesStore(
    (s) => s.vehicles.filter((v) => v.id === id)[0],
  );

  return (
    <div className="vehicle__content">
      <ContentTitle>{id}</ContentTitle>
      {price && <Price>{price}</Price>}
      {description && <Description>{description}</Description>}
    </div>
  );
};
export default Content;
