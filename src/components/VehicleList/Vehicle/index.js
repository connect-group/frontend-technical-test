import React from 'react';
import './Vehicle.style.scss';

/**
 * @typedef VehicleThumbnail
 * @property {string} name
 * @property {string} url
 *
 * @typedef {object} VehicleProps
 * @property {string} description
 * @property {string} id
 * @property {string} name
 * @property {string} price
 * @property {object} thumbnails
 * @property {VehicleThumbnail} thumbnails.default
 * @property {VehicleThumbnail} thumbnails.mobile
 *
 * @param {VehicleProps} props
 * @returns {JSX.Element}
 */
export default function Vehicle(props) {
  const {
    description,
    id,
    name,
    price,
    thumbnails,

    titleAs: Title = 'h3'
  } = props;

  // Both images will probably be there, but use fallbacks just in case.
  const mobileThumbnail = thumbnails.mobile || thumbnails.default;
  const thumbnail = thumbnails.default || thumbnails.mobile;
  const hasImage = Boolean(thumbnail && mobileThumbnail);

  // Fallback for content to ensure a screen reader pause from the full-stop.
  const summary = description.charAt(description.length - 1) !== '.' ? `${description}.` : description;

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

        <p data-testid="vehicle-description" className="Vehicle__description">{summary}</p>
      </div>
    </article>
  );
}
