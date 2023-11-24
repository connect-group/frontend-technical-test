import React, { useState } from 'react';
import './style.scss';
import { Modal } from '../Modal';
import { Expand } from '../icons';

export default function Vehicle({ vehicle, index }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleImageError = (e) => {
    if (
      e.target.src !== 'https://via.placeholder.com/300x200?text=No%20Image'
    ) {
      e.target.src = 'https://via.placeholder.com/300x200?text=No%20Image';
      e.target.parentNode.children[0].srcset =
        'https://via.placeholder.com/300x200?text=No%20Image';
      e.target.parentNode.children[1].srcset =
        'https://via.placeholder.com/150x150?text=No%20Image';
    }
  };

  return (
    <>
      <article
        className="vehicle-list__item"
        style={{
          '--delay': `${index * 150}ms`,
        }}
      >
        <picture onError={handleImageError}>
          {vehicle.media.map((media) => (
            <source
              key={media.url}
              srcSet={media.url}
              alt={media.name}
              media={
                media.url.includes('1x1')
                  ? '(max-width: 767px)'
                  : '(min-width: 768px)'
              }
            />
          ))}
          <img src={vehicle.media[0].url} alt={vehicle.media[0].name} o />
        </picture>
        <div className="vehicle-list__item-details">
          <h3 className="vehicle-list__item-details__title">
            <span>{`Jaguar ${vehicle.id}`}</span>
          </h3>
          <p className="vehicle-list__item-details__price">
            {`From ${vehicle.price}`}
          </p>

          <p className="vehicle-list__item-details__description  vehicle-list__item-details__description--collapsed">
            {vehicle.description ? vehicle.description : ''}
          </p>
          <MoreButton onClick={handleOpenModal} />
        </div>
      </article>
      {modalIsOpen && (
        <Modal onClose={handleCloseModal}>
          <h3 className="vehicle-modal__title">{`Jaguar ${vehicle.id} - details`}</h3>
          <div className="vehicle-modal__content">
            <p className="vehicle-list__item-details__price">
              {`From ${vehicle.price}`}
            </p>
            <p className="vehicle-list__item-details__description">
              {vehicle.description ? vehicle.description : ''}
            </p>

            <dl className="vehicle-list__item-details__meta">
              <dt>Passengers:</dt>
              <dd>{vehicle.meta.passengers}</dd>
              <dt>Drivetrain:</dt>
              <dd>{vehicle.meta.drivetrain.join(', ')}</dd>
              <dt>Bodystyles:</dt>
              <dd>{vehicle.meta.bodystyles.join(', ')}</dd>
              <dt>Emissions:</dt>
              <dd>
                {vehicle.meta.emissions.template.replace(
                  '$value',
                  vehicle.meta.emissions.value,
                )}
              </dd>
            </dl>
          </div>
        </Modal>
      )}
    </>
  );
}

const MoreButton = ({ onClick }) => (
  <button
    type="button"
    className="vehicle-list__item-details__more"
    onClick={onClick}
  >
    <span>Read more</span>
    <Expand />
  </button>
);
