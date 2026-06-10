import React from 'react';
import './style.scss';

export default function Vehicle({ vehicle }) {
  const {
    id, media, price, description
  } = vehicle;

  return (
    <article className="vehicle-card" aria-label={id} data-testid="vehicle">
      <picture className="vehicle-card__image-container" data-testid="vehicle-image">
        <source media="(min-width: 768px)" srcSet={media[0].url} />
        <img
          className="vehicle-card__image"
          src={media[1].url}
          alt={media[1].name}
        />
      </picture>

      <div className="vehicle-card__content">
        <h2 className="vehicle-card__name" data-testid="vehicle-name">
          {id}
        </h2>
        <p className="vehicle-card__price" data-testid="vehicle-price">
          {`From ${price}`}
        </p>
        <p className="vehicle-card__description" data-testid="vehicle-description">
          {description}
        </p>
      </div>
    </article>
  );
}
