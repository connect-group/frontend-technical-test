import React from 'react';
import styles from './styles.module.scss';

const VehicleCardSummary = ({ vehicle }) => {
  const { id, price, description } = vehicle;

  return (
    <div className={styles.vehicleCardSummary__info}>
      <h1 className={styles.vehicleCardSummary__title}>{id}</h1>
      <p className={styles.vehicleCardSummary__price}>
        From:
        {price}
      </p>
      <p className={styles.vehicleCardSummary__description}>{description}</p>
    </div>
  );
};

export default VehicleCardSummary;
