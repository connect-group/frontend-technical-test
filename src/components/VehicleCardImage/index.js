import React from 'react';
import styles from './styles.module.scss';

const VehicleCardImage = ({ name, media }) => {
  const mobileImage = media.find((m) => m.url.includes('1x1')).url;
  const tabletAndWebImage = media.find((m) => m.url.includes('16x9')).url;

  return (
    <picture className={styles.vehicleCardImageContainer}>
      <source media="(min-width: 768px)" srcSet={tabletAndWebImage} alt={name} />
      <source media="(max-width: 767px)" srcSet={mobileImage} alt={name} />
      {/* Fallback for browsers that do not support picture */}
      <img
        className={styles.vehicleCardImageContainer__image}
        src={mobileImage}
        alt={name}
      />
    </picture>
  );
};

export default VehicleCardImage;
