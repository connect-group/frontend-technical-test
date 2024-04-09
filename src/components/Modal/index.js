import React, { useState } from 'react';
import './style.scss';

/**
 *
 * @param {object} props
 * @param {vehicleSummaryPayload} props.vehicle
 * @param {Function} props.onCLose
 * @return {JSX.Element}
 * @constructor
 */
export default function Modal({ vehicle, onCLose }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="Modal" data-testid="modal-overlay">
      <div className="Modal__box">
        <div className="Modal__head">
          <h3
            className="Modal__title"
            data-testid="vehicle-name"
          >
            {vehicle.id}
          </h3>
          <button
            type="button"
            className="Modal__close"
            aria-label="Close modal"
            onClick={() => onCLose()}
            data-testid="modal-close"
          >
            Close
          </button>
        </div>
        <div className="Modal__body">
          <div
            className="vehicle__price"
            data-testid="vehicle-price"
            aria-label="vehicle price"
          >
            From
            {' '}
            {vehicle.price}
          </div>
          <div
            className="vehicle__description"
            data-testid="vehicle-description"
            aria-label="vehicle description"
          >
            {vehicle.description}
          </div>

          {!expanded && <button type="button" data-testid="modal-expand" onClick={() => setExpanded(true)}>Expand</button>}

          {expanded
                        && (
                        <div className="expanded-section">
                          {vehicle.meta.passengers
                                    && (
                                    <div
                                      className="vehicle__passengers"
                                      data-testid="vehicle-passengers"
                                      aria-label="vehicle total passengers"
                                    >
                                      Up to
                                      {' '}
                                      {vehicle.meta.passengers}
                                      {' '}
                                      passengers.
                                    </div>
                                    )}

                          {vehicle.meta.bodystyles.length
                                    && (
                                    <div
                                      className="vehicle__body-styles"
                                      data-testid="vehicle-body-style"
                                      aria-label="vehicle description"
                                    >
                                      Body style:
                                      {' '}
                                      {vehicle.meta.bodystyles.join(', ')}
                                    </div>
                                    )}

                          <div
                            className="vehicle__emission"
                            data-testid="vehicle-emissions"
                            aria-label="vehicle emissions"
                          >
                            {vehicle.meta.emissions.template.replace('$value', vehicle.meta.emissions.value.toString())}
                          </div>

                          <button type="button" data-testid="modal-collapse" onClick={() => setExpanded(false)}>
                            Collapse
                          </button>
                        </div>
                        )}

        </div>
        <div className="Modal__footer" />
      </div>
    </div>
  );
}
