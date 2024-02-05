import React from 'react';
import styles from './styles.module.scss';
import SHIMMER_TYPES from './types';

const VehicleShimmer = ({ type = SHIMMER_TYPES.TEXT, space = 1 }) => {
  if (type === SHIMMER_TYPES.GAP) {
    return (
      <div
        data-testid="loading"
        type={SHIMMER_TYPES.GAP}
        style={{ height: `${space * 16}px` }}
      />
    );
  }

  if (type === SHIMMER_TYPES.IMAGE) {
    return (
      <div
        data-testid="loading"
        type={SHIMMER_TYPES.IMAGE}
        className={`${styles.shimmerImage} ${styles.shine}`}
      />
    );
  }

  if (type === SHIMMER_TYPES.TITLE) {
    return (
      <div
        data-testid="loading"
        type={SHIMMER_TYPES.TITLE}
        className={`${styles.shimmerTitle} ${styles.shine}`}
      />
    );
  }

  return (
    <div
      data-testid="loading"
      type={SHIMMER_TYPES.TEXT}
      className={`${styles.shimmerText} ${styles.shine}`}
    />
  );
};

export default VehicleShimmer;
