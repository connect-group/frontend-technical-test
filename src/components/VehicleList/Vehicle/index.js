import './style.scss';
import React, { useCallback } from 'react';
import { setQueryParam, useQueryParam } from '../useQuery';
import VehicleDetailsModal from '../VehicleDetailsModal';

/**
 * @typedef {object} VehicleProps
 * @property {import('../useData').vehicleSummaryProps} vehicle
 * @property {?string} titleAs
 *
 * @param {VehicleProps} props
 * @returns {JSX.Element}
 */
export default function Vehicle(props) {
  const {
    vehicle,

    titleAs: Title = 'h3'
  } = props;

  const {
    description,
    id,
    name,
    price,
    thumbnails
  } = vehicle;

  const showDetailsId = useQueryParam('showDetails');
  const hasOpenModal = showDetailsId === id;

  const handleModalOpen = useCallback(
    (e) => {
      e.preventDefault(); // stop normal navigation
      setQueryParam('showDetails', encodeURIComponent(id)); // push new URL
    },
    [id]
  );

  const handleModalClose = useCallback(() => {
    setQueryParam('showDetails', null, { replace: true }); // remove param
  }, []);

  // Both images will probably be there, but use fallbacks just in case.
  const mobileThumbnail = thumbnails.mobile || thumbnails.default;
  const thumbnail = thumbnails.default || thumbnails.mobile;
  const hasImage = Boolean(thumbnail && mobileThumbnail);

  return (
    <article data-testid="vehicle" data-id={id} className="Vehicle">
      <aside className="Vehicle__thumbnail">
        {hasImage && (
          // Ideally, a descriptive alt should be provided by the API. Falling back to a decorative image approach.
          <img
            data-testid="vehicle-thumbnail"
            src={mobileThumbnail.url}
            srcSet={`${mobileThumbnail.url} 235w, ${thumbnail.url} 470w`}
            sizes="(width <= 512px) 235px, 470px"
            alt=""
          />
        )}
      </aside>
      <div className="Vehicle__content">
        <header className="Vehicle__header">
          <Title data-testid="vehicle-name" className="Vehicle__title">{name}</Title>

          <p data-testid="vehicle-price" className="Vehicle__price">{`From ${price}`}</p>
        </header>

        <p data-testid="vehicle-description" className="Vehicle__description">{description}</p>

        <a className="Vehicle__details" href={`./?showDetails=${encodeURIComponent(id)}`} onClick={handleModalOpen}>
          <span className="visually-hidden">View Details</span>
        </a>
      </div>

      {hasOpenModal && <VehicleDetailsModal vehicle={vehicle} titleAs={Title} onClose={handleModalClose} />}
    </article>
  );
}
