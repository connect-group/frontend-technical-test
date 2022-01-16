import React from 'react';
import useData from './useData';
import './style.scss';

export default function VehicleList() {
  const [loading, error, vehicles] = useData();

  if (loading) {
    return <div data-testid="loading">Loading</div>;
  }

  if (error) {
    return <div data-testid="error">{ error }</div>;
  }

  console.log(vehicles)

  return (
    <div data-testid="results">
      <p>List of vehicles will be displayed here</p>
    </div>
  );
}
