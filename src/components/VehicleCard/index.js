import React from 'react';
import VehicleCardImage from '../VehicleCardImage';
import VehicleCardSummary from '../VehicleCardSummary';
import styles from './styles.module.scss';

const VehicleCard = ({ vehicle, onClick }) => {
  const { id, media } = vehicle;

  return (
    <div
      role="button"
      className={styles.vehicleCard}
      aria-label={`Vehicle ${id}`}
      onClick={onClick}
      tabIndex="0"
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          onClick();
        }
      }}
    >
      <VehicleCardImage media={media} name={`Vechicle ${id} card`} />
      <VehicleCardSummary vehicle={vehicle} />
    </div>
  );
};

export default VehicleCard;
