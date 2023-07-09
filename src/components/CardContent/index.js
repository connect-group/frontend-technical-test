import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './style.scss';

const CardContent = ({
  id,
  price,
  description,
  modelYear,
  meta,
  expanded,
  toggleExpanded,
}) => {
  const getShortenedDescription = useMemo(() => {
    if (!expanded && description.length > 40) {
      return `${description.substring(0, 40)}...`;
    }
    return description;
  }, [expanded, description]);

  const renderExpandedArea = useMemo(() => {
    if (expanded) {
      return (
        <p
          className="card-content__expandedarea"
          data-testid="model-area"
          id={`model-area-${id}`}
          aria-hidden={!expanded}
        >
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
  }, [expanded, meta.bodystyles, modelYear, id]);

  const renderReadText = useMemo(() => {
    return expanded ? 'Read Less' : 'Read More';
  }, [expanded]);

  return (
    <div className="card-content">
      <h2 className="card-content__title">{id}</h2>
      <p className="card-content__price">{`From ${price}`}</p>
      <p className="card-content__description">
        {getShortenedDescription}
      </p>
      {renderExpandedArea}
      <Button
        buttonClass="card-content__expandbutton"
        onClickHandler={toggleExpanded}
        ariaExpanded={expanded}
        text={renderReadText}
        ariaLabel={renderReadText}
      />
    </div>
  );
};

CardContent.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  modelYear: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    bodystyles: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
  expanded: PropTypes.bool.isRequired,
  toggleExpanded: PropTypes.func.isRequired,
};

export default CardContent;
