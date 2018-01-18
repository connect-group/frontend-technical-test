import React from 'react';
import { arrayOf, string, shape, number } from 'prop-types';
import { Vehicle } from './Vehicle';
import { ErrorMessage } from './ErrorMessage';

const VehicleList = ({ vehiclesData = [] }) => (
  <div>
    {vehiclesData.length > 0
      ? <ul className="c-list--unstyled">
          {vehiclesData.map(vehicle => {
            return (
              <li key={vehicle.id} className="c-vehicle-list-item">
                <Vehicle vehicleData={vehicle} />
              </li>
            );
          })}
        </ul>
      : <ErrorMessage message="No vehicles found" />
    }
  </div>
);

export const vehiclePropTypes = {
  id: string,
  description: string,
  modelYear: string,
  price: string,
  url: string,
  media: arrayOf(
    shape({
      name: string,
      url: string
    })
  ),
  meta: shape({
    bodystyles: arrayOf(string),
    drivetrain: arrayOf(string),
    emissions: shape({
      template: string,
      value: number
    }),
    passengers: number
  })
};

VehicleList.propTypes = {
  vehiclesData: arrayOf(
    shape(vehiclePropTypes)
  )
};

export { VehicleList };
