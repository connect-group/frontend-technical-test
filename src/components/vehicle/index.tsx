/* eslint-disable react/prop-types */
import React, { useCallback } from 'react';
import { TVehicleId } from '../../@typings/vehicle';
import useVehiclesStore from '../../store/vehicles-store';
import ImageWrapper from './image-wrapper';
import Content from './content';
import './style.scss';

const Vehicle: React.FC<TVehicleId> = ({ id }) => {
  const selectVehicle = useVehiclesStore((s) => s.selectVehicle);
  const animationOrder = useVehiclesStore((s) => s.vehicles.findIndex((v) => v.id === id));
  const onSelectVehicleCallback = useCallback(() => selectVehicle(id), []);

  return (
    <div
      data-testid={`vehicle-${id}`}
      className="vehicle"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onSelectVehicleCallback()}
      onClick={onSelectVehicleCallback}
      style={
                { '--animation-order': animationOrder } as React.CSSProperties
            }
    >
      <ImageWrapper id={id} />
      <Content id={id} />
    </div>
  );
};
export default Vehicle;
