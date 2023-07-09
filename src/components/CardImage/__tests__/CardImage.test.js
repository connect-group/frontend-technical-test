import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import CardImage from '..';

describe('CardImage component', () => {
  const altText = 'Card Image';
  const media = [{ url: 'image-lg.jpg' }, { url: 'image-sm.jpg' }];

  it('renders the CardImage component correctly', () => {
    const { getByAltText, getByTestId } = render(
      <CardImage altText={altText} media={media} />
    );

    const pictureElement = getByTestId('card-image');
    const imgElement = getByAltText(altText);

    expect(pictureElement).toBeInTheDocument();
    expect(imgElement).toBeInTheDocument();
    expect(pictureElement).toContainElement(imgElement);
    expect(imgElement).toHaveAttribute('src', media[1].url);
    expect(imgElement).toHaveClass('card-image__default');
  });

  it('displays the appropriate source element for different screen sizes', () => {
    const { getByTestId } = render(
      <CardImage altText={altText} media={media} />
    );

    const pictureElement = getByTestId('card-image');
    const sourceElement = pictureElement.querySelector('source');

    expect(sourceElement).toBeInTheDocument();
    expect(sourceElement).toHaveAttribute('srcSet', media[0].url);
    expect(sourceElement).toHaveAttribute('type', 'image/jpg');
    expect(sourceElement).toHaveAttribute('media', '(min-width:768px)');
  });

  it('matches the alt text with the provided prop', () => {
    const { getByAltText } = render(
      <CardImage altText={altText} media={media} />
    );

    const imgElement = getByAltText(altText);

    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('alt', altText);
  });
});
