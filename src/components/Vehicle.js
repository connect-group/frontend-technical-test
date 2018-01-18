import React from 'react';
import { config } from '../config';

const Vehicle = ({ vehicleData }) => (
  <section>
    <div className="c-vehicle-list-item-image">
      <img
        src={`${config.server.assetsPrefix}${vehicleData.media[0].url}`}
        alt={`Photo of a Jaguar ${vehicleData.id}`}
      />
    </div>
    <div className="c-vehicle-list-item-info">
      <header>
        <h1 className="c-vehicle-list-item-title">Jaguar {vehicleData.id}</h1>
        <h2 className="c-vehicle-list-item-subtitle">From {vehicleData.price}</h2>
      </header>
      <p
        title={vehicleData.description}
        className="c-vehicle-list-item-desc"
      >
        {vehicleData.description}
      </p>
    </div>
  </section>
);

export { Vehicle };
