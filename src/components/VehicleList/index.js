import React, { useState, useEffect, createRef } from 'react';
import useData from './useData';
import Loading from '../Loading';
import './style.scss';

export default function VehicleList() {
  const [loading, error, vehicles] = useData();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div data-testid="error">{ error }</div>;
  }

  function openModal(vehicle) {
    setSelectedVehicle(vehicle);
    setModalOpen(true);
  }

  return (
    <>
      <section data-testid="results">
        <ul className="vehicle-list">
          {vehicles.map((vehicle) => (
            <li key={vehicle.id} className="vehicle">
              <button
                type="button"
                className="vehicle__card"
                aria-label="Open vehicle details"
                onClick={() => openModal(vehicle)}
              >
                <div className="vehicle__image">
                  <img src={vehicle.media[0].url} alt={vehicle.id} />
                </div>
                <div className="vehicle__details">
                  <div className="vehicle__title">
                    Vehicle Name
                  </div>
                  <div className="vehicle__price">
                    From
                    <span className="vehicle__price-number">{vehicle.price}</span>
                  </div>
                  <div className="vehicle__description">
                    {vehicle.description}
                  </div>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </section>
      {modalOpen && (
        <VehicleModal
          open={modalOpen}
          setOpen={setModalOpen}
          vehicle={selectedVehicle}
        />
      )}
    </>
  );
}

function VehicleModal({ open, setOpen, vehicle }) {
  const [fade, setFade] = useState(false);
  const modalRef = createRef();
  const handleTabKey = (e) => {
    const focusableModalElements = modalRef.current.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    );
    const firstElement = focusableModalElements[0];
    const lastElement = focusableModalElements[focusableModalElements.length - 1];

    if (!e.shiftKey && document.activeElement !== firstElement) {
      firstElement.focus();
      return e.preventDefault();
    }

    if (e.shiftKey && document.activeElement !== lastElement) {
      lastElement.focus();
      e.preventDefault();
    }
    return null;
  };
  const keyListenersMap = new Map([[27, () => setOpen(false)], [9, handleTabKey]]);

  useEffect(() => {
    setFade(open);

    function keyListener(e) {
      const listener = keyListenersMap.get(e.keyCode);
      return listener && listener(e);
    }
    document.addEventListener('keydown', keyListener);

    return () => {
      document.removeEventListener('keydown', keyListener);
    };
  });

  function getEmisionTemplate(vehicleData) {
    return vehicleData.meta.emissions.template.replace('$value', vehicleData.meta.emissions.value);
  }

  return (
    <div
      className={`modal ${fade ? 'modal--open' : ''}`}
      role="dialog"
      aira-modal="true"
    >
      <div className="modal__content" ref={modalRef}>
        <div className="modal__image">
          <img src={vehicle.media[0].url} alt="Vehicle Name" />
        </div>
        <div className="modal__header">
          <h2 className="modal__title">Vehicle Name</h2>
          <button
            className="modal__close"
            type="button"
            aria-label="Close modal"
            onClick={() => setOpen(false)}
            tabIndex={0}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal__body">
          <div className="modal__description">
            <p>
              {vehicle.description}
            </p>
          </div>
          <table className="modal__table">
            <tbody>
              <tr>
                <th>Price</th>
                <td>{vehicle.price}</td>
              </tr>
              <tr>
                <th>Model Year</th>
                <td>{vehicle.modelYear}</td>
              </tr>
              <tr>
                <th>Passengers</th>
                <td>{vehicle.meta.passengers}</td>
              </tr>
              <tr>
                <th>Emissions</th>
                <td>{getEmisionTemplate(vehicle)}</td>
              </tr>
              <tr>
                <th>Drivetrain</th>
                <td>
                  {vehicle.meta.drivetrain.join(', ')}
                </td>
              </tr>
              <tr>
                <th>Body Styles</th>
                <td>
                  {vehicle.meta.bodystyles.join(', ')}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
