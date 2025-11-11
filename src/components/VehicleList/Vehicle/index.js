import React from 'react';
import './Vehicle.style.scss';

/**
 * @param {vehicleSummaryProps} props
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

  return (
    <article data-testid="vehicle" data-id={id} className="Vehicle">
      <aside className="Vehicle__thumbnail">
        {hasImage && (
          // Ideally, a descriptive alt should be provided by the API. Falling back to a decorative image approach.
          <img
            data-testid="vehicle-thumbnail"
            src={mobileThumbnail.url}
            srcSet={`${mobileThumbnail.url} 235px, ${thumbnail.url} 470px`}
            sizes="(width <= 768px) 235px, 470px"
            alt=""
          />
        )}
      </aside>
      <div className="Vehicle__content">
        <header className="Vehicle__header">
          <Title data-testid="vehicle-name" className="Vehicle__title">{name}</Title>

          <p data-testid="vehicle-price" className="Vehicle__price">{`From ${price}`}</p>
        </header>

        {/* Fallback for content to ensure a screen reader pause from the full-stop. */}
        <p data-testid="vehicle-description" className="Vehicle__description">{description.charAt(description.length - 1) !== '.' ? `${description}.` : description}</p>
      </div>
    </article>
  );
}
