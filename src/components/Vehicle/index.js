import React from 'react';
import './style.scss';

const INDX_IMG_16X9 = 0;
const INDX_IMG_1X1 = 1;

/**
 *
 * @typedef {object} Props
 * @property {vehicleSummaryPayload} vehicle - The vehicle properties.
 */

/**
 * Pull vehicles information
 * @type {React.FC<Props>}
 * @return {React.ReactElement} Vehicle
 */
export default function Vehicle({ vehicle }) {
  return (
    <>
      <article className="vehicle">
        <div>
          <img src={vehicle.media[INDX_IMG_1X1].url} className="vehicle__image-1x1" alt="Vehicle in 1x1 format" />
          <img src={vehicle.media[INDX_IMG_16X9].url} className="vehicle__image-16x9" alt="Vehicle in 16x9 format" />
        </div>
        {/* <img src={vehicle.media[INDX_IMG_16X9].url} /> */}
        <div className="vehicle__info">
          <h2 className="vehicle__name">{vehicle.id.toUpperCase()}</h2>
          <p className="vehicle__price">
            From
            {' '}
            {vehicle.price}
          </p>
          <p className="vehicle__description">The pinnacle of refined capability</p>
        </div>
      </article>
    </>

  );
}
