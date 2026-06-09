import React from 'react';
import useData from './useData';
import './style.scss';
import Vehicle from '../Vehicle';

export default function VehicleList() {
  const [loading, error, vehicles] = useData();

  if (loading) {
    return <div role="status" aria-live="polite" data-testid="loading">Loading</div>;
  }

  if (error) {
    return <div role="alert" data-testid="error">{error.message || error}</div>;
  }

  return (
    <section className="vehicle-list" data-testid="results">
      <h1 className="vehicle-list__title">JLR Vehicles</h1>

      <ul className="vehicle-list__grid">
        {vehicles.map((vehicle) => (
          <li key={vehicle.id} className="vehicle-list__item">
            <Vehicle vehicle={vehicle} />
          </li>
        ))}
      </ul>
    </section>
  );
}
