import React from 'react';
import styles from './vehicle.module.scss';

export const VehicleCard = ({ vehicle }) => {
  if (!vehicle) {
    return null;
  }
  const {
    media, id, description, price
  } = vehicle;
  return (
    <div className={styles.vehicle} data-testid="vehicle">
      <picture className={styles.image} data-testid="vehicle-image">
        <source media="(min-width: 769px)" srcSet={media[0].url} />
        <img src={media[1].url} alt={media[1].name} />
      </picture>

      <div className={styles.details}>
        <div>
          <div className={styles.name} data-testid="vehicle-name">
            {id}
          </div>
          <div className={styles.price} data-testid="vehicle-price">
            From
            {' '}
            {price}
          </div>
        </div>
        <div
          className={styles.description}
          data-testid="vehicle-description"
        >
          <p>{description}</p>
        </div>
      </div>
      <div className={styles.showMore}>Show More =&gt; </div>
    </div>
  );
};
