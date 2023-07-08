import React, { useState, useEffect } from 'react';
import Button from '../Button';
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
        <p className="card__expandedarea" data-testid="model-area">
          <b>
            Model(Style): &nbsp;
            {modelYear}
            (
            {meta.bodystyles[0]}
            )
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
        <h2 className="card__title">{id}</h2>
        <p className="card__price">{`From ${price}`}</p>
        <p className="card__description">{getShortenedDescription()}</p>
        {renderExpandedArea()}
        <Button
          buttonClass="card__expandtext"
          onClickHandler={toggleExpanded}
          ariaExpanded={expanded}
          text={renderReadText()}
        />
      </div>
    </div>
  );
};

export default VehicleCard;
