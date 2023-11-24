import React from 'react';
import useData from './useData';
import './style.scss';
import Vehicle from '../Vehicle';

export default function VehicleList() {
  const [loading, error, vehicles] = useData();

  if (loading) {
    return <div data-testid="loading">Loading</div>;
  }

  if (error) {
    return <div data-testid="error">{error}</div>;
  }

  return (
    <main data-testid="results">
      <section className="vehicle-list">
        {vehicles.map((vehicle, index) => (
          <Vehicle key={vehicle.id} vehicle={vehicle} index={index} />
        ))}
      </section>
    </main>
  );
}
