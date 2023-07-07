import React from 'react';
import './style.scss';

const VehicleCard = ({ vehicle }) => {
  const {
    description, id, media, price
  } = vehicle;
  return (
    <div className="card">
      <div className="card__image">
        <img src={media[0].url} alt={id} className="card__image--desktop" />
        <img src={media[1].url} alt={id} className="card__image--mobile" />
      </div>
      <div className="card__content">
        <h2 className="card__title">{id.toUpperCase()}</h2>
        <p className="card__price">{`From ${price}`}</p>
        <p className="card__description">{description}</p>
      </div>
    </div>
  );
};

export default VehicleCard;
