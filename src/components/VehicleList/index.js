import React from 'react';
import useData from './useData';
import './style.scss';
import Vehicle from '../Vehicle';
import Modal from '../Modal';

export default function VehicleList() {
  const [loading, error, vehicles] = useData();

  if (loading) {
    return <div data-testid="loading">Loading</div>;
  }

  if (error) {
    return <div data-testid="error">{error}</div>;
  }

  return (
    <>
      <div data-testid="results" className="container">
        {Array.isArray(vehicles)
                    && vehicles.map((vehicle) => (
                      <Vehicle key={vehicle.id} details={vehicle} />
                    ))}
      </div>
      <Modal />
    </>
  );
}
