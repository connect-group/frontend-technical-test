import React from 'react';
import Details from './Details';

export const Card = ({ vehicle }) => {
  return (
    <li className="card-list">
      <figure>
        <img
          src={vehicle.media[0].url}
          alt={vehicle.id}
          title={`${vehicle.id} model ${vehicle.modelYear}`}
          className="card-list__image"
        />
      </figure>
      <Details id={vehicle.id}/>
    </li>
  )
};
