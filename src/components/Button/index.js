import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  buttonClass, text, onClickHandler, ariaExpanded
}) => {
  return (
    <button
      type="button"
      className={buttonClass}
      onClick={onClickHandler}
      aria-expanded={ariaExpanded}
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
