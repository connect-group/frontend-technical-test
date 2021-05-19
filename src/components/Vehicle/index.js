import React from 'react';

import './style.scss';

const Vehicle = ({ data, setModalContent }) => {
  const {
    media, id, price, description
  } = data;

  return (
    <div className="vehicle__wrapper">
      <div
        className="vehicle__thumbnail--mobile"
        style={{
          backgroundImage: `url('${media[1].url}')`,
        }}
      />
      <div
        className="vehicle__thumbnail--tablet"
        style={{
          backgroundImage: `url('${media[0].url}')`,
        }}
      />

      <div className="vehicle__content">
        <div className="vehicle__title">
          <span>{id}</span>
        </div>
        <div className="vehicle__price">
          From
          {price}
        </div>
        <div className="vehicle__description">{description}</div>
        <button type="button" onClick={() => setModalContent(data)} tabIndex="0">Read More</button>
      </div>
    </div>
  );
};

export default Vehicle;
