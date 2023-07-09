import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CardImage from '../CardImage';
import './style.scss';
import CardContent from '../CardContent';

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

  return (
    <div className={`card ${isVisible ? 'fade-in' : ''}`}>
      <CardImage altText={altText} media={media} />
      <CardContent
        id={id}
        price={price}
        description={description}
        modelYear={modelYear}
        meta={meta}
        expanded={expanded}
        toggleExpanded={toggleExpanded}
      />
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
};

export default VehicleCard;
