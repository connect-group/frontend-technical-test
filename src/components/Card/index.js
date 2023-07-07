import React from 'react';
import './style.scss';

const VehicleCard = ({ imageSrc, title, description }) => {
  return (
    <div className="card" role="article">
      <figure className="card__figure">
        <img src={imageSrc} alt={title} className="card__image" />
        <figcaption className="card__caption">{title}</figcaption>
      </figure>
      <div className="card__content">
        <h2 className="card__title" id={`card-title-${title}`}>
          {title}
        </h2>
        <p className="card__description">{description}</p>
      </div>
    </div>
  );
};

export default VehicleCard;
