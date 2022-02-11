import React from 'react';

export default function VehicleInfo({ data, className }) {
  const {
    id, price, description
  } = data;

  return (
    <div data-testid="info" className={`${className}-info-main`}>
      <h2 className={`${className}-info__name`}>
        {id}
      </h2>
      <p className={`${className}-info__price`}>
        From
        <span className={`${className}-info__price-value`}>
          {price}
        </span>
      </p>
      <p className={`${className}-info__description`}>{description}</p>
    </div>
  );
}
