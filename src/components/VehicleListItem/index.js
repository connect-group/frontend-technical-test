import React from 'react';
import './style.scss';

const VehicleListItem = ({ vehicle }) => {
  return (
    <li data-testid={`vehicle-${vehicle.id}`} className="VehicleListItem">
      {vehicle.media.length > 0 && (
      <picture className="ImageContainer" data-testid="vehicleImage">
        <source media="(max-width: 767px)" srcSet={`${vehicle.media[1].url}`} />
        <source media="(min-width: 768px)" srcSet={`${vehicle.media[0].url}`} />
        <img src={`${vehicle.media[0].url}`} alt={vehicle.media[0].name} />
      </picture>
      )}
      <span className="InfoContainer" data-testid="infoContainer">
        {vehicle.id && (
        <h3 className="VehicleTitle" data-testid="vehicleTitle">
          {vehicle.id}
        </h3>
        )}
        {vehicle.price && (
        <p className="VehiclePrice" data-testid="vehiclePrice">
          From:
          {' '}
          {vehicle.price}
        </p>
        )}
        {vehicle.description && (
        <p className="VehicleDescription" data-testid="vehicleDescription">
          {vehicle.description}
        </p>
        )}
      </span>
    </li>
  );
};

export default VehicleListItem;
