import React, { useCallback, useState } from 'react';
import './style.scss';
import VehicleDetailsModal from './VehicleDetailsModal';
import useData from './useData';

export default function VehicleList() {
  const [loading, error, vehicles] = useData();
  const [activeVehicle, setActiveVehicle] = useState(null);

  const handleClick = useCallback((vehicle) => {
    setActiveVehicle(vehicle);
  }, []);

  const handleKeyDown = useCallback((e, vehicle) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick(vehicle);
    }
  });

  if (loading) {
    return (
      <div
        data-testid="loading"
        className="loading"
        role="status"
        aria-live="polite"
      >
        <p>Loading vehicles...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div
        data-testid="error"
        className="error"
        role="alert"
        aria-live="assertive"
      >
        <p>Error loading vehicles</p>
      </div>
    );
  }

  return (
    <article>
      <section
        data-testid="results"
        className="vehicle-list"
        aria-label="Vehicle listings"
      >
        <header>
          <h1>Vehicles</h1>
        </header>
        <div className="vehicle-list__container">
          {vehicles.map((vehicle) => (
            <button
              key={vehicle.id}
              type="button"
              className="vehicle-card"
              aria-labelledby={`vehicle-title-${vehicle.id}`}
              aria-describedby={`vehicle-price-${vehicle.id} vehicle-desc-${vehicle.id} `}
              onClick={() => handleClick(vehicle)}
              onKeyDown={(e) => handleKeyDown(e, vehicle)}
            >
              {vehicle.media && vehicle.media[0] && (
                <img
                  src={vehicle.media[0].url}
                  alt={vehicle.media[0].name}
                  className="vehicle-card__image"
                />
              )}
              <div className="vehicle-card__content">
                <h2
                  id={`vehicle-title-${vehicle.id}`}
                  className="vehicle-card__title"
                >
                  {vehicle.id}
                </h2>
                <p
                  id={`vehicle-price-${vehicle.id}`}
                  className="vehicle-card__price"
                >
                  {`From ${vehicle.price}`}
                </p>
                <p
                  id={`vehicle-desc-${vehicle.id}`}
                  className="vehicle-card__description"
                >
                  {vehicle.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>
      {activeVehicle && <VehicleDetailsModal vehicle={activeVehicle} setActiveVehicle={setActiveVehicle} />}
    </article>
  );
}
