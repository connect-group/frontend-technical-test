import React from 'react';
import { render } from '@testing-library/react';
import Vehicle from '..';

const vehicleStub = {
  id: 'xe',
  description: 'The most advanced, efficient and refined sports saloon that Jaguar has ever produced',
  modelYear: 'k17',
  price: '£30,000',
  media: [
    { name: 'vehicle', url: '/images/16x9/xe_k17.jpg' },
    { name: 'vehicle', url: '/images/1x1/xe_k17.jpg' }
  ],
  meta: {
    bodystyles: ['saloon'],
    drivetrain: ['AWD', 'RWD'],
    passengers: 5,
    emissions: 'CO2 Emissions 99 g/km'
  },
  name: 'Jaguar XE',
  thumbnails: {
    default: { name: 'vehicle', url: '/images/16x9/xe_k17.jpg' },
    mobile: { name: 'vehicle', url: '/images/1x1/xe_k17.jpg' }
  },
};

describe('<Vehicle /> Tests', () => {
  it('Should render a Vehicle', () => {
    const { queryByTestId } = render(<Vehicle vehicle={vehicleStub} />);

    const component = queryByTestId('vehicle');

    expect(component).not.toBeNull();
    expect(component.dataset.id).toBe('xe');
  });

  it('Should contain a thumbnail', () => {
    const { queryByTestId } = render(<Vehicle vehicle={vehicleStub} />);

    expect(queryByTestId('vehicle-thumbnail')).not.toBeNull();
  });

  it('Should contain a name', () => {
    const { queryByTestId } = render(<Vehicle vehicle={vehicleStub} />);

    const title = queryByTestId('vehicle-name');
    expect(title).not.toBeNull();
    expect(title).toBeInstanceOf(HTMLHeadingElement);
    expect(title.tagName).toBe('H3');
  });

  it('Should allow a different heading level', () => {
    const { queryByTestId } = render(<Vehicle vehicle={vehicleStub} titleAs="h4" />);

    const title = queryByTestId('vehicle-name');
    expect(title).toBeInstanceOf(HTMLHeadingElement);
    expect(title.tagName).toBe('H4');
  });

  it('Should contain a price', () => {
    const { queryByTestId } = render(<Vehicle vehicle={vehicleStub} />);

    expect(queryByTestId('vehicle-price')).not.toBeNull();
  });

  it('Should contain a description', () => {
    const { queryByTestId } = render(<Vehicle vehicle={vehicleStub} />);

    expect(queryByTestId('vehicle-description')).not.toBeNull();
  });
});
