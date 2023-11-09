import React from 'react';
import useData from './useData';
import Vehicle from '../Vehicle/Vehicle';
import './VehicleList.scss';

export default function VehicleList() {
  // eslint-disable-next-line no-unused-vars
  const { loading, error, vehicles } = useData();

  if (loading) {
    return <div data-testid="loading">Loading</div>;
  }

  if (error) {
    return <div data-testid="error">{ error }</div>;
  }

  return (
    <section data-testid="results">
      <ul className="vehicle-list">
        {vehicles.map((vehicle) => <Vehicle vehicle={vehicle} />)}
      </ul>
    </section>
  );
}
