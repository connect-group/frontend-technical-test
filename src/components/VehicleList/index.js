import React from 'react';
import useData from './useData';
import Vehicle from '../Vehicle';
import styles from './vehicle-list.module.scss';

export default function VehicleList() {
  const [loading, error, vehicles] = useData();

  if (loading) {
    return (
      <div className={styles.loading} data-testid="loading">
        <span>Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.error} data-testid="error">
        <span>
          Error:
          {error}
        </span>
      </div>
    );
  }

  return (
    <div className={styles.vehicleList} data-testid="results">
      {vehicles.map((vehicle) => (
        <Vehicle key={vehicle.id} data={vehicle} />
      ))}
    </div>
  );
}
