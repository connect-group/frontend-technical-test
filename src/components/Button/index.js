import React from 'react';

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

export default Button;
