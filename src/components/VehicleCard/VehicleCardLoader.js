import React from 'react';
import VehicleCardImageLoader from '../VehicleCardImage/VehicleCardImageLoader';
import VehicleCardSummaryLoader from '../VehicleCardSummary/VehicleCardSummaryLoader';
import styles from './styles.module.scss';

const VehicleCard = () => {
  return (
    <article className={`${styles.vehicleCard} ${styles.loading}`} aria-label="Vehicle loading">
      <VehicleCardImageLoader />
      <VehicleCardSummaryLoader />
    </article>
  );
};

export default VehicleCard;
