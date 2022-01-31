import React, { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import './style.scss';

const Vehicle = ({ details, showMore = false }) => {
  const {
    id: title, price, description, media, meta, modelYear
  } = details;

  const image = media[0];
  const { showModal, setModal, setDetails } = useContext(ModalContext);

  const toggle = (value) => {
    setDetails(value);
    setModal(!showModal);
  };

  return (
    <>
      <div className="card__vehicle card--shadow">
        <div className="card__header card--image">
          <img src={image.url} alt={image.name} />
        </div>
        <div className="card__body">
          <h2>{`Jaguar ${title}`}</h2>
          <p>
            Model year:
            {' '}
            <b>{modelYear}</b>
          </p>
          <p>
            From
            {' '}
            <b>{price}</b>
          </p>
          <p className="card__description">{description}</p>
          {!showMore && (
            <button
              type="button"
              className="card__button"
              onClick={() => toggle(details)}
            >
              <i />
              {' '}
              Find out more
            </button>
          )}
        </div>
        {showMore && (
        <div className="card__footer">
          <h4>More details</h4>
          <p>
            CO2 Emissions:
            {' '}
            <b>
              {meta.emissions.value}
              {' '}
              g/km
            </b>
          </p>
          <p>
            Passengers:
            {' '}
            <b>{meta.passengers}</b>
          </p>
          <p>
            Bodystyle:
            {' '}
            <b>{meta.bodystyles.join(', ')}</b>
          </p>
          <p>
            Drive Train:
            {' '}
            <b>{meta.drivetrain.join(', ')}</b>
          </p>
        </div>
        )}
      </div>
    </>
  );
};

export default Vehicle;
