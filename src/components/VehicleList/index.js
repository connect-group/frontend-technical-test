import React from 'react';
import useData from './useData';
import './style.scss';

function VehicleList() {
  const [loading, error, vehicles] = useData();

  return (
    <div>
      <h1>Vehicle List</h1>

      {loading && <div data-testid="loading">Loading...</div>}

      {error && (
      <div data-testid="error">
        {' '}
        Error:
        {' '}
        {error.message}
      </div>
      )}

      <div className="card-grid">
        {vehicles.map((vehicle) => (
          <div key={vehicle.vehicleId} className="card">
            {vehicle.mediaUrls.map((url) => {
              const imageSize = url.includes('16x9')
                ? 'desktop-image'
                : 'mobile-tablet-image';
              return (
                <div key={url}>
                  <img
                    src={url}
                    className={imageSize}
                    alt={imageSize}
                  />
                </div>
              );
            })}

            <ul className="card-details">
              <li className="card-details__item card-details__item--name">
                <span>{vehicle.vehicleId}</span>
              </li>
              <li className="card-details__item card-details__item--price">
                <span>
                  From
                  {' '}
                  {vehicle.price}
                </span>
              </li>
              <li className="card-details__item card-details__item--description">
                {vehicle.description}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VehicleList;
