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

    const lock = () => {
      document.body.style.overflow = 'hidden';
    };

    const unlock = () => {
      document.body.style.overflow = '';
    };

    // Lock the page scroll whilst the modal is open.
    window.addEventListener('keydown', esc);
    lock();

    return () => {
      // Clean up and unlock.
      window.removeEventListener('keydown', esc);
      unlock();
    };
  }, [onClose]);

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) {
    return null;
  }

  // Use a portal to contain the modal away from its parent so it's not affected by its changing styles.
  return createPortal(
    (<div
      aria-label="Close vehicle details"
      className="Modal"
      onClick={handleBackdropClick}
      onKeyDown={handleBackdropClick}
      role="button"
      tabIndex={0}
    >
      <section
        aria-labelledby="vehicle-modal-title"
        aria-modal="true"
        className="Modal__content"
        role="dialog"
      >
        <header className="Modal__header">
          <Title id="vehicle-modal-title" className="visually-hidden">
            {`${vehicle.name} `}
            Vehicle Details
          </Title>

          <button type="button" onClick={onClose}>
            <span className="visually-hidden">Close</span>
            <span aria-hidden="true">x</span>
          </button>
        </header>

        <p>VehicleDetails {vehicle.id}</p>
      </section>
    </div>),

    modalRoot
  );
}
