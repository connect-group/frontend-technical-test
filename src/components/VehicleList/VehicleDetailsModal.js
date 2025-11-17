import React, { useEffect, useRef } from 'react';

export default function VehicleDetailsModal({ vehicle, setActiveVehicle }) {
  const buttonRef = useRef(null);
  const prevRef = useRef(null);

  const closeModal = () => {
    setActiveVehicle(null);
  };

  const handleKeyDown = ((e) => {
    if (e.key === 'Escape') setActiveVehicle(null);
  });

  useEffect(() => {
    if (vehicle) {
      prevRef.current = document.activeElement;
      document.addEventListener('keydown', handleKeyDown);
      buttonRef.current.focus();
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      prevRef.current.focus();
    };
  }, [vehicle]);

  return (
    <dialog
      className="vehicle-details-modal-background"
      aria-modal="true"
    >
      <section
        className="vehicle-details-modal"
        aria-labelledby="vehicle-details-modal__title"
        aria-describedby="vehicle-details-modal__details"
        role="document"
      >
        <h2 id="vehicle-details-modal__title">{`Vehicle details of ${vehicle.id}`}</h2>
        <div
          id="vehicle-details-modal__detailed-view"
          className="vehicle-details-modal__detailed-view"
        >
          { vehicle.meta && (
          <dl>
            <dt>Passengers</dt>
            <dd>{vehicle.meta.passengers}</dd>

            <dt>Drivetrain</dt>
            <dd>{vehicle.meta.drivetrain.join(', ')}</dd>

            <dt>Body Styles</dt>
            <dd>{vehicle.meta.bodystyles.join(', ')}</dd>

            <dt>Emissions</dt>
            <dd>
              {vehicle.meta.emissions.template.replace('$value', vehicle.meta.emissions.value)}
            </dd>
          </dl>
          )}
        </div>
        <footer className="vehicle-details-modal__button-container">
          <button
            type="button"
            ref={buttonRef}
            onClick={closeModal}
            className="vehicle-details-modal__button"
          >
            OK
          </button>
        </footer>
      </section>
    </dialog>
  );
}
