import React, { useState } from 'react';
import './style.scss';
import { createPortal } from 'react-dom';
import Modal from '../Modal';

/**
 *
 * @param {object} props
 * @param {vehicleSummaryPayload} props.vehicle
 * @return {JSX.Element}
 * @constructor
 */
export default function Vehicle({ vehicle }) {
  const [modalOpen, setModalOpen] = useState(false);

  /** @type React.CSSProperties */
  const imageVariables = {
    '--rectangular-bg': `url(${vehicle.media[0].url})`,
    '--square-bg': `url(${vehicle.media[1].url})`,
  };

  const toggleModal = () => setModalOpen((state) => !state);

  return (
    <div className="Vehicle">
      <div
        className="Vehicle__image"
        style={imageVariables}
        data-testid="vehicle-image"
        aria-label={`Image of ${vehicle.id}`}
      />
      <div className="Vehicle__details" data-testid="vehicle-details">
        <div className="Vehicle__name" data-testid="vehicle-name">
          <h3 data-testid="vehicle-id" aria-label="vehicle name">{vehicle.id}</h3>
        </div>
        <div
          className="Vehicle__price"
          data-testid="vehicle-price"
          aria-label="vehicle price"
        >
          From
          {' '}
          {vehicle.price}
        </div>
        <div
          className="Vehicle__description"
          data-testid="vehicle-description"
          aria-label="vehicle description"
        >
          <span className="excerpt">{vehicle.description}</span>
          <button
            type="button"
            data-testid="vehicle-view-more"
            aria-label="View more details"
            onClick={toggleModal}
            className="expand"
          >
            More
          </button>
        </div>
      </div>
      {modalOpen && createPortal(
        <Modal vehicle={vehicle} onCLose={toggleModal} />,
        document.body
      )}
    </div>
  );
}
