import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
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
    }, index * 100);

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
          buttonClass="card__expandbutton"
          onClickHandler={toggleExpanded}
          ariaExpanded={expanded}
          text={renderReadText()}
        />
      </div>
    </div>
  );
};

VehicleCard.propTypes = {
  vehicle: PropTypes.shape({
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    media: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
    price: PropTypes.string.isRequired,
    modelYear: PropTypes.string.isRequired,
    meta: PropTypes.shape({
      bodystyles: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    }).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default VehicleCard;
