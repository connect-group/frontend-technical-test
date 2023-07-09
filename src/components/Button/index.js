import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  buttonClass, text, onClickHandler, ariaExpanded, ariaLabel
}) => {
  return (
    <button
      type="button"
      className={buttonClass}
      onClick={onClickHandler}
      aria-expanded={ariaExpanded}
      aria-label={ariaLabel}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  buttonClass: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  ariaExpanded: PropTypes.bool.isRequired,
};

export default Button;
