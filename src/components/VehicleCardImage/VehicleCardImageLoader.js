import React from 'react';
import VehicleShimmer from '../VehicleShimmer';
import SHIMMER_TYPES from '../VehicleShimmer/types';
import styles from './styles.module.scss';

const VehicleCardImageLoader = () => {
  return (
    <picture data-testid="vehicle-card-image-loader" className={styles.vehicleCardImageContainer}>
      <VehicleShimmer type={SHIMMER_TYPES.IMAGE} />
    </picture>
  );
};

export default VehicleCardImageLoader;
