import React from 'react';

export const Details = ({id}) => {
  return (
    <div className="card-detail">
      <h1 className="card-detail__price">
        From 76,350 {id}
      </h1>
      <h2 className="card-detail__description">
        The pinnacle of capability
      </h2>
    </div>
  )
};
