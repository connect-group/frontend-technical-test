import React from 'react';
import { VehicleCard } from '../vehicleCard';
import styles from './style.module.scss';
import useData from './useData';

export default function VehicleList() {
  const [loading, error, vehicles] = useData();

  if (loading) {
    return <div data-testid="loading">Loading</div>;
  }

  if (error) {
    return <div data-testid="error">{error}</div>;
  }
  return (
    <div className={styles.vehicleList} data-testid="results">
      {vehicles
                && vehicles.map((vehicle) => {
                  return <VehicleCard key={vehicle.id} vehicle={vehicle} />;
                })}
    </div>
  );
}
