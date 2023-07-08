import React, { useState, useEffect } from 'react';
import './style.scss';

const VehicleCard = ({ vehicle, index }) => {
  const {
    description, id, media, price, modelYear, meta
  } = vehicle;

  const [expanded, setExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const altText = `${id} vehicle`;

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100); // Adjust the delay as desired for the staggered effect

    return () => clearTimeout(timer);
  }, [index]);

  const getShortenedDescription = () => {
    if (!expanded && description.length > 40) {
      return `${description.substring(0, 40)}...`;
    }
    return description;
  };

  const renderExpandedArea = () => {
    if (expanded) {
      return (
        <p className="card_expandedarea">
          <b>
            Model:
            {' '}
            {modelYear}
          </b>
          ,&nbsp;
          <b>
            Style:
            {' '}
            {meta.bodystyles[0]}
          </b>
        </p>
      );
    }
    return null;
  };

  const renderReadText = () => {
    return expanded ? 'Read Less' : 'Read More';
  };

  return (
    <div
      className={`card ${isVisible ? 'fade-in' : ''}`}
    >
      <picture className="card__image">
        <source srcSet={media[0].url} type="image/jpg" media="(min-width:768px)" alt={altText} />
        <img src={media[1].url} alt={altText} />
      </picture>
      <div className="card__content">
        <h2 className="card__title">{id.toUpperCase()}</h2>
        <p className="card__price">{`From ${price}`}</p>
        <p className="card__description">{getShortenedDescription()}</p>
        {renderExpandedArea()}
        <button
          type="button"
          className="card__expandtext"
          onClick={toggleExpanded}
          aria-expanded={expanded}
        >
          {renderReadText()}
        </button>
      </div>
    </div>
  );
};

export default VehicleCard;
