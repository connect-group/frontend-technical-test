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
      <button type="button" onClick={() => dispatch({ type: 'TOGGLEMODAL', payload: { isOpen: true, data } })}>
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
      </button>
    </>
  );
}
