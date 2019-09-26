import React, { Component } from 'react';

export default function(props) {
  return (
    <div>
      <div>
        <span className={'vehicleDetails-title'}>
          <a href={props.vehicle.url} target='_blank'>
            {props.vehicle.media[0].name}
          </a>
        </span>
      </div>
      <div className='vehicleDetails-price'>
        {' '}
        From {props.vehicleDetails.price}
      </div>
      <div className='vehicleDetails-description'>
        {props.vehicleDetails.description}
      </div>
    </div>
  );
}
