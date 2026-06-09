import React from 'react';
import { render } from '@testing-library/react';
import Vehicle from '..';

const mockVehicle = {
  id: 'xe',
  modelYear: 'k17',
  apiUrl: '/api/vehicle_xe.json',
  media: [
    {
      name: 'vehicle',
      url: '/images/16x9/xe_k17.jpg'
    },
    {
      name: 'vehicle',
      url: '/images/1x1/xe_k17.jpg'
    }
  ],
  description: 'The most advanced, efficient and refined sports saloon that Jaguar has ever produced',
  price: '£30,000',
  meta: {
    passengers: 5,
    drivetrain: [
      'AWD',
      'RWD'
    ],
    bodystyles: [
      'saloon'
    ],
    emissions: {
      template: 'CO2 Emissions $value g/km',
      value: 99
    }
  }
};

describe('<Vehicle /> Tests', () => {
  it('Should render a Vehicle', () => {
    const { queryByTestId } = render(<Vehicle vehicle={mockVehicle} />);
    const component = queryByTestId('vehicle');

    expect(component).not.toBeNull();
  });

  it('Should display an image, name, price and description', () => {
    const { queryByTestId } = render(<Vehicle vehicle={mockVehicle} />);

    expect(queryByTestId('vehicle-image')).not.toBeNull();
    expect(queryByTestId('vehicle-name')).not.toBeNull();
    expect(queryByTestId('vehicle-price')).not.toBeNull();
    expect(queryByTestId('vehicle-description')).not.toBeNull();
  });
});
