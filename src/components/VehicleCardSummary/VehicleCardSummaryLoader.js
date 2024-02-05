import React from 'react';
import styles from './styles.module.scss';
import VehicleShimmer from '../VehicleShimmer';
import SHIMMER_TYPES from '../VehicleShimmer/types';

const VehicleCardSummary = () => {
  return (
    <div data-testid="vehicle-card-summary-loader" className={styles.vehicleCardSummary__info}>
      <VehicleShimmer type={SHIMMER_TYPES.TITLE} />
      <VehicleShimmer type={SHIMMER_TYPES.GAP} space={1} />
      <VehicleShimmer type={SHIMMER_TYPES.TEXT} />
      <VehicleShimmer type={SHIMMER_TYPES.GAP} space={2} />
      <VehicleShimmer type={SHIMMER_TYPES.TEXT} />
    </div>
  );
};

export default VehicleCardSummary;
