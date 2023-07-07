import React from 'react';
import Loader from '../Loader';
import ErrorBox from '../ErrorBox';
import useData from './useData';
import VehicleCard from '../VehicleCard';
import './style.scss';

export default function VehicleList() {
  // eslint-disable-next-line no-unused-vars
  const [loading, error, vehicles] = useData();

  console.log(vehicles);

  if (loading) {
    return <Loader />;
    // return <div data-testid="loading">Loading</div>;
  }

  if (error) {
    return <ErrorBox />;
    // return <div data-testid="error">{ error }</div>;
  }

  return (
    <div data-testid="results" className="container">
      {vehicles.map((vehicle) => {
        const { id } = vehicle;
        return <VehicleCard key={id} vehicle={vehicle} />;
      })}
      {/* <p>List of vehicles will be displayed here</p>
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
      </p> */}
    </div>
  );
}
