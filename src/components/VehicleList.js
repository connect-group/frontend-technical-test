import React from 'react';
import { Vehicle } from './Vehicle';

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
      : <p>No vehicles found</p>
    }
  </div>
);

export { VehicleList };
