import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import VehicleCard from '..';

describe('VehicleCard', () => {
  const mockVehicle = {
    description: 'description',
    id: 'ABC123',
    media: [{ url: 'image1.jpg' }, { url: 'image2.jpg' }],
    price: '£2,000',
    modelYear: 'k19',
    meta: {
      bodystyles: ['Sedan'],
    },
  };

  it('should render vehicle card correctly', () => {
    const { getByText, getByAltText } = render(
      <VehicleCard vehicle={mockVehicle} index={0} />
    );

    const descriptionElement = getByText('description');
    const idElement = getByText('ABC123');
    const imageElement = getByAltText('ABC123 vehicle');
    const priceElement = getByText('From £2,000');

    expect(descriptionElement).toBeInTheDocument();
    expect(idElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
  });

  it('should expand and collapse on button click', () => {
    const { getByText, getByRole, queryByTestId } = render(
      <VehicleCard vehicle={mockVehicle} index={0} />
    );

    const expandButton = getByRole('button');

    expect(getByText('Read More')).toBeInTheDocument();
    expect(queryByTestId('model-area')).toBeNull();

    fireEvent.click(expandButton);

    expect(getByText('Read Less')).toBeInTheDocument();
    expect(getByText('Model(Style): k19(Sedan)')).toBeVisible();

    fireEvent.click(expandButton);

    expect(getByText('Read More')).toBeInTheDocument();
    expect(queryByTestId('model-area')).toBeNull();
  });
});
