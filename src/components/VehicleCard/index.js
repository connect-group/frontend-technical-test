import React from 'react';
import './style.scss';

const VehicleCard = ({ vehicle, index }) => {
  const {
    description, id, media, price
  } = vehicle;

  const altText = `${id} vehicle`;
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // Handle the Enter key press event here
    }
  };
  return (
    <div className="card" tabIndex={index + 1} role="button" onClick={handleKeyDown} onKeyDown={handleKeyDown}>
      <figure className="card__image">
        <img src={media[0].url} alt={altText} className="card__image--desktop" />
        <img src={media[1].url} alt={altText} className="card__image--mobile" />
      </figure>
      <div className="card__content">
        <h2 className="card__title">{id.toUpperCase()}</h2>
        <p className="card__price">{`From ${price}`}</p>
        <p className="card__description">{description}</p>
      </div>
    </div>
  );
};

export default VehicleCard;
