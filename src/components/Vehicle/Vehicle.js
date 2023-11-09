import React from 'react';
import './Vehicle.scss';

export default function Vehicle({ vehicle }) {
  return (
    <li key={vehicle.id} className="vehicle">
      <article>
        <header className="vehicle-list__item__header">
          <h2>{vehicle.description}</h2>
          <p>
            Price:
            {' '}
            {vehicle.details && vehicle.details.price}
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
          { JSON.stringify(vehicle.details) }
        </footer>
      </article>
    </li>
  );
}
