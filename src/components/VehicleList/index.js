import React from 'react';
import useData from './useData';
import './style.scss';

export default function VehicleList() {
  // eslint-disable-next-line no-unused-vars
  const [loading, error, vehicles] = useData();

  if (loading) {
    return <div data-testid="loading">Loading</div>;
  }

  if (error) {
    return <div data-testid="error">{ error }</div>;
  }

  return (
    <section aria-labelledby="vehicle-list-heading" data-testid="results">
      <h1 id="vehicle-list-heading">Vehicles</h1>
      <ul className="vehicle-list">
        {vehicles.map((vehicle) => (
          <li key={vehicle.id} className="vehicle-list__item">
            <article>
              <header className="vehicle-list__item__header">
                <h2>{vehicle.description}</h2>
                <p>
                  Price:
                  {' '}
                  {vehicle.price}
                </p>
              </header>
              <div className="vehicle-list__item__media">
                {vehicle.media.map((mediaItem) => (
                  <figure key={mediaItem.url} className="vehicle-list__item__media__item">
                    <img src={mediaItem.url} alt={mediaItem.name} />
                    <figcaption>{mediaItem.name}</figcaption>
                  </figure>
                ))}
              </div>
              <footer className="vehicle-list__item__details">
                <a href={vehicle.apiUrl} target="_blank" rel="noopener noreferrer">More details</a>
              </footer>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
