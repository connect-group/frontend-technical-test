import React from 'react';
import useData from './useData';
import './style.scss';

export default function VehicleList() {
  const [loading, error, vehicles] = useData();

  if (loading) {
    return <div data-testid="loading">Loading</div>;
  }

  if (error) {
    return <div data-testid="error">{ error }</div>;
  }

  return (
    <div data-testid="results">
      <div className="container">
        {vehicles.map((data) => <Vehicle data={data} key={data.id} />)}
      </div>
    </div>
  );
}

function Vehicle({ data }) {
  const {
    media, id, price
  } = data;
  return (
    <div className="card">
      <div className="card__header">
        <img src={media[0].url} alt={id} />
      </div>
      <div className="card__body">
        <p className="card__name">{id}</p>
        <p className="card__price">
          {`From ${price}`}
        </p>
        <p className="card__description">The pinnacle of refined capability</p>
      </div>
    </div>
  );
}
