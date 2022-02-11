import React from 'react';

export default function VehicleMedia({ media, className }) {
  const smallPictureIndex = media.length - 1;
  const largePictureIndex = 0;

  const getMediaUrl = (index) => {
    const { url } = media[index];
    return url;
  };

  const getMediaName = (index) => {
    const { name } = media[index];
    return name;
  };

  return (
    <div data-testid="media" className={`${className}-media`}>
      {media.length
        && (
        <picture>
          <source srcSet={getMediaUrl(largePictureIndex)} media="(min-width: 768px)" />
          <img srcSet={getMediaUrl(smallPictureIndex)} alt={getMediaName(smallPictureIndex)} />
        </picture>
        )}
    </div>
  );
}
