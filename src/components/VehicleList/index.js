import React from 'react';
import useData from './useData';
import styles from './vehicle-list.module.scss';
import Vehicle from '../Vehicle';

export default function VehicleList() {
  const [loading, error, vehicles] = useData();

  if (loading) {
    return <div data-testid="loading">Loading</div>;
  }

  if (error) {
    return <div data-testid="error">{ error }</div>;
  }

  return (
    <div className={styles.vehicleList} data-testid="results">
        {vehicles.map(v => <Vehicle data={v} key={v.id} />)}
    </div>
  );
}
