import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const CardImage = ({ altText, media }) => {
  return (
    <picture className="card-image" data-testid="card-image">
      <source srcSet={media[0].url} type="image/jpg" media="(min-width:768px)" alt={altText} />
      <img src={media[1].url} alt={altText} className="card-image__default" />
    </picture>
  );
};

CardImage.propTypes = {
  altText: PropTypes.string.isRequired,
  media: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CardImage;
