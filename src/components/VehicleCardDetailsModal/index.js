import React from 'react';
import Modal from '../Modal';
import VehicleCardImage from '../VehicleCardImage';
import styles from './styles.module.scss';

const VehicleCardDetailsModal = ({ onClose, isOpen, details }) => {
  const {
    id, media, price, description, meta, modelYear
  } = details;

  return (
    <Modal
      className={styles.vehicleDetailsModal}
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className={styles.vehicleDetailsModal__header}>
        <VehicleCardImage name={`Details of vehicle ${id}`} media={media} />
        <div className={styles.vehicleDetailsModal__headerInfo}>
          <h1 className={styles.vehicleDetailsModal__title}>{id}</h1>
          <p className={styles.vehicleDetailsModal__subtitle}>
            From:
            {price}
          </p>
        </div>
      </div>
      <div className={styles.vehicleDetailsModal__content}>
        <p className={styles.vehicleDetailsModal__description}>{description}</p>

        <div className={styles.vehicleDetailsModal__specifications}>
          <p className={styles.vehicleDetailsModal__specificationsTitle}>
            Specifications:
          </p>
          <ul className={styles.vehicleDetailsModal__list}>
            <li className={styles.vehicleDetailsModal__listItem}>
              <strong>Model Year:</strong>
              {' '}
              <span>{modelYear}</span>
            </li>
            <li className={styles.vehicleDetailsModal__listItem}>
              <strong>Body Styles:</strong>
              {' '}
              <span>{meta.bodystyles.join(', ')}</span>
            </li>
            <li className={styles.vehicleDetailsModal__listItem}>
              <strong>Drive Train:</strong>
              {' '}
              <span>{meta.drivetrain.join(', ')}</span>
            </li>
            <li className={styles.vehicleDetailsModal__listItem}>
              <strong>Seating Capacity:</strong>
              {' '}
              <span>
                {meta.passengers}
                {' '}
                Persons
              </span>
            </li>
            <li className={styles.vehicleDetailsModal__listItem}>
              <strong>{meta.emissions.template.split('$value')[0]}</strong>
              {' '}
              <span>
                {meta.emissions.value}
                {meta.emissions.template.split('$value')[1]}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </Modal>
  );
};

export default VehicleCardDetailsModal;
