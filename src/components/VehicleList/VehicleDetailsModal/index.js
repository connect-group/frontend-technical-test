import './style.scss';

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

/**
 * @typedef {object} VehicleDetailsModalProps
 * @property {import('../useData').vehicleSummaryProps} vehicle
 * @property {function} onClose
 * @property {?string} titleAs
 *
 * @param {VehicleDetailsModal} props
 * @returns {JSX.Element}
 */
export default function VehicleDetailsModal({ onClose, vehicle, titleAs: Title = 'h3' }) {
  useEffect(() => {
    // Listener for an escape key press to close the modal.
    const esc = (e) => e.key === 'Escape' && onClose();

    // Lock the page scroll.
    const lock = () => {
      document.body.style.overflow = 'hidden';
    };

    // Unlock page scrolling.
    const unlock = () => {
      document.body.style.overflow = '';
    };

    // Listen for an Escape key press to close.
    window.addEventListener('keydown', esc);

    // Lock the page scroll whilst the modal is open.
    lock();

    return () => {
      // Clean up and unlock.
      window.removeEventListener('keydown', esc);
      unlock();
    };
  }, [onClose]);

  // Handle a close on a backdrop click.
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  // Quick check to make sure that the portal exists. Probably not required in a full application.
  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) {
    return null;
  }

  // Use a portal to contain the modal away from its parent so it's not affected by its changing styles.
  return createPortal(
    (<div className="Modal" data-testid="vehicle-details-modal">
      <section
        aria-labelledby="vehicle-modal-title"
        aria-modal="true"
        className="Modal__content"
        data-testid="vehicle-details-modal-content"
        role="dialog"
      >
        <header className="Modal__header" data-testid="vehicle-details-modal-header">
          <Title id="vehicle-modal-title" className="visually-hidden">
            {vehicle.name}
            {' '}
            Vehicle Details
          </Title>

          <button className="Modal__close" type="button" onClick={onClose} data-testid="vehicle-details-modal-close">
            <span className="visually-hidden">Close</span>
            <span aria-hidden="true">X</span>
          </button>
        </header>

        <div className="VehicleDetails" data-testid="vehicle-details">
          <div className="VehicleDetails__image" data-testid="vehicle-details-image">
            {vehicle.thumbnails.default && <img src={vehicle.thumbnails.default.url} alt="" />}
          </div>

          <div className="VehicleDetails__content">
            <p>
              <strong className="VehicleDetails__name" data-testid="vehicle-details-name">
                {vehicle.name}
                <span className="visually-hidden">.</span>
              </strong>
              <span className="VehicleDetails__price" data-testid="vehicle-details-price">
                Price from
                {' '}
                {vehicle.price}
              </span>
            </p>
            {vehicle.description && <p className="VehicleDetails__description" data-testid="vehicle-details-description">{vehicle.description}</p>}

            <dl className="VehicleDetails__meta MetaList" data-testid="vehicle-details-metadata">
              <dt className="MetaList__title">Model Year</dt>
              <dd className="MetaList__item">{vehicle.modelYear.toLocaleUpperCase()}</dd>

              <dt className="MetaList__title">Passengers</dt>
              <dd className="MetaList__item">{vehicle.meta.passengers}</dd>

              <dt className="MetaList__title">Drivetrain</dt>
              <dd className="MetaList__item">{vehicle.meta.drivetrain.join(' / ')}</dd>

              <dt className="MetaList__title">Body styles</dt>
              <dd className="MetaList__item">{vehicle.meta.bodystyles.join(' / ')}</dd>

              <dt className="MetaList__title">Emissions</dt>
              <dd className="MetaList__item">{vehicle.meta.emissions}</dd>
            </dl>
          </div>
        </div>
      </section>

      <button className="Modal__backdropTrigger" data-testid="vehicle-details-modal-backdrop-button" onClick={handleBackdropClick} type="button">
        <span className="visually-hidden">Close modal window.</span>
      </button>
    </div>),

    modalRoot
  );
}
