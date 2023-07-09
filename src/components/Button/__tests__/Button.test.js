import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import Button from '..';

describe('Button', () => {
  it('should render button with correct text and attributes', () => {
    const buttonClass = 'custom-button';
    const buttonText = 'Click Me';
    const onClickHandler = jest.fn();
    const ariaExpanded = false;

    const { getByRole } = render(
      <Button
        buttonClass={buttonClass}
        text={buttonText}
        onClickHandler={onClickHandler}
        ariaExpanded={ariaExpanded}
      />
    );

    const buttonElement = getByRole('button');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass(buttonClass);
    expect(buttonElement).toHaveTextContent(buttonText);
    expect(buttonElement).toHaveAttribute('aria-expanded', 'false');
  });

  it('should call the onClickHandler when clicked', () => {
    const buttonClass = 'custom-button';
    const buttonText = 'Click Me';
    const onClickHandler = jest.fn();
    const ariaExpanded = false;

    const { getByRole } = render(
      <Button
        buttonClass={buttonClass}
        text={buttonText}
        onClickHandler={onClickHandler}
        ariaExpanded={ariaExpanded}
      />
    );

    const buttonElement = getByRole('button');
    fireEvent.click(buttonElement);

    expect(onClickHandler).toHaveBeenCalled();
  });
});
