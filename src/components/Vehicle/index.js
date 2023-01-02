import React from 'react';
import useStore from '../Context/useStore';
import './style.scss';

export default function Vehicle({ data }) {
  const {
    media, id, price
  } = data;
  const { dispatch } = useStore();
  return (
    <>
      <link rel="prefetch" href={media[0].url} as="image" />
      <button type="button" onClick={() => dispatch({ type: 'TOGGLEMODAL', payload: { isOpen: true, data } })}>
        <div className="card">
          <picture className="card__image">
            <source media="(min-width:768px)" srcSet={media[0].url} />
            <img src={media[1].url} alt={id} />
          </picture>
          <div className="card__body">
            <p className="card__name">{id}</p>
            <p className="card__price">
              {`From ${price}`}
            </p>
            <p className="card__description">The pinnacle of refined capability</p>
          </div>
        </div>
      </button>
    </>
  );
}
