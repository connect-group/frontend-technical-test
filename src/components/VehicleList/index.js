import React from 'react';
import useData from './useData';
import Vehicle from './Vehicle';
import './style.scss';

export default function VehicleList() {
  const [loading, error, vehicles] = useData();

  if (loading) {
    return <div data-testid="loading">Loading</div>;
  }

  if (error) {
    return <div data-testid="error">{error}</div>;
  }

  if (!Array.isArray(vehicles) || !vehicles.length) {
    return <div data-testid="no-results">No vehicles found.</div>;
  }

  return (
    <div data-testid="results" className="VehicleList">
      {vehicles.map(({
        description,
        id,
        meta,
        modelYear,
        name,
        price,
        thumbnails
      }) => (
        <Vehicle
          key={id}
          {...{
            description,
            id,
            meta,
            modelYear,
            name,
            price,
            thumbnails
          }}
        />
      ))}
    </div>
  );
}
