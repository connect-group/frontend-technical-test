import React from 'react';
import useData from './useData';
import './style.scss';
import Vehicle from '../Vehicle';

export default function VehicleList() {
  // eslint-disable-next-line no-unused-vars
  const [loading, error, vehicles] = useData();

  if (loading) {
    return <div data-testid="loading">Loading</div>;
  }

  if (error) {
    return (<div data-testid="error">{ error.toString() }</div>);
  }

  return (
    <div data-testid="results">
      <p>List of vehicles will be displayed here</p>
      <div className="VehicleList">
        {vehicles.map((vehicle) => {
          return <Vehicle key={vehicle.id} vehicle={vehicle} />;
        })}
      </div>
      <p>
        Visit
        <a href="/api/vehicles.json" target="_blank"> /api/vehicles.json</a>
        {' '}
        (main endpoint)
      </p>
      <p>
        Visit
        <a href="/api/vehicle_fpace.json" target="_blank">/api/vehicle_fpace.json</a>
        {' '}
        (detail endpoint - apiUrl)
      </p>
      <p>
        Visit
        <a href="/api/vehicle_xf.json" target="_blank">/api/vehicle_xf.json</a>
        {' '}
        (vehicle without any price)
      </p>
    </div>
  );
}
