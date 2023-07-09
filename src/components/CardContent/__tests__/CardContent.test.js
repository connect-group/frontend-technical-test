import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import CardContent from '..';

describe('CardContent component', () => {
  const id = '123';
  const price = '$100';
  const description = 'Lorem ipsum dolor sit amet new midlands Lorem ipsum dolor sit amet new midlands';
  const modelYear = '2023';
  const bodystyles = ['sedan', 'hatchback'];
  const expanded = true;
  const toggleExpanded = jest.fn();

  it('renders the CardContent component correctly', () => {
    const { getByText, getByTestId } = render(
      <CardContent
        id={id}
        price={price}
        description={description}
        modelYear={modelYear}
        meta={{ bodystyles }}
        expanded={expanded}
        toggleExpanded={toggleExpanded}
      />
    );

    const titleElement = getByText(id);
    const priceElement = getByText(`From ${price}`);
    const descriptionElement = getByText(description);
    const expandedAreaElement = getByTestId('model-area');
    const buttonElement = getByText('Read Less');

    expect(titleElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(expandedAreaElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('aria-expanded', 'true');
  });

  it('truncates the description if not expanded', () => {
    const { getByText } = render(
      <CardContent
        id={id}
        price={price}
        description={description}
        modelYear={modelYear}
        meta={{ bodystyles }}
        expanded={false}
        toggleExpanded={toggleExpanded}
      />
    );

    const truncatedDescription = `${description.substring(0, 40)}...`;
    const descriptionElement = getByText(truncatedDescription);

    expect(descriptionElement).toBeInTheDocument();
  });

  it('displays the expanded area if expanded', () => {
    const { getByText } = render(
      <CardContent
        id={id}
        price={price}
        description={description}
        modelYear={modelYear}
        meta={{ bodystyles }}
        expanded={expanded}
        toggleExpanded={toggleExpanded}
      />
    );

    const expandedAreaText = `Model(Style): ${modelYear}(${bodystyles[0]})`;

    const expandedAreaElement = getByText(expandedAreaText);

    expect(expandedAreaElement).toBeInTheDocument();
  });

  it('calls the toggleExpanded function when the button is clicked', () => {
    const { getByText } = render(
      <CardContent
        id={id}
        price={price}
        description={description}
        modelYear={modelYear}
        meta={{ bodystyles }}
        expanded={expanded}
        toggleExpanded={toggleExpanded}
      />
    );

    const buttonElement = getByText('Read Less');
    fireEvent.click(buttonElement);

    expect(toggleExpanded).toHaveBeenCalledTimes(1);
  });
});
