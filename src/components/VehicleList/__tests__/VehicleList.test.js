import React from 'react';
import { render } from '@testing-library/react';
import VehicleList from '..';
import useData from '../useData';

jest.mock('../useData');

const vehicleStub = {
  id: 'xe',
  modelYear: 'k17',
  media: [
    { name: 'vehicle', url: '/images/16x9/xe_k17.jpg' },
    { name: 'vehicle', url: '/images/1x1/xe_k17.jpg' }
  ],
  detailsLoaded: true,
  name: 'Jaguar XE',
  thumbnails: {
    default: { name: 'vehicle', url: '/images/16x9/xe_k17.jpg' },
    mobile: { name: 'vehicle', url: '/images/1x1/xe_k17.jpg' }
  },
  description: 'The most advanced, efficient and refined sports saloon that Jaguar has ever produced',
  price: '£30,000',
  meta: {
    bodyStyles: ['saloon'],
    drivetrain: ['AWD', 'RWD'],
    passengers: 5,
    emissions: 'CO2 Emissions 99 g/km'
  }
};

describe('<VehicleList /> Tests', () => {
  it('Should show loading state if it not falsy', () => {
    useData.mockReturnValue([true, 'An error occurred', 'results']);
    const { queryByTestId } = render(<VehicleList />);

    expect(queryByTestId('loading')).not.toBeNull();
    expect(queryByTestId('error')).toBeNull();
    expect(queryByTestId('results')).toBeNull();
  });

  it('Should show error if it is not falsy and loading is finished', () => {
    useData.mockReturnValue([false, 'An error occurred', 'results']);
    const { queryByTestId } = render(<VehicleList />);

    expect(queryByTestId('loading')).toBeNull();
    expect(queryByTestId('error')).not.toBeNull();
    expect(queryByTestId('results')).toBeNull();
  });

  it('Should show a no-results message if loading successfully finished', () => {
    useData.mockReturnValue([false, false, []]);
    const { queryByTestId } = render(<VehicleList />);

    expect(queryByTestId('loading')).toBeNull();
    expect(queryByTestId('error')).toBeNull();
    expect(queryByTestId('no-results')).not.toBeNull();
    expect(queryByTestId('results')).toBeNull();
  });

  it('Should show results if loading successfully finished', () => {
    useData.mockReturnValue([false, false, [vehicleStub]]);
    const { queryByTestId } = render(<VehicleList />);

    expect(queryByTestId('loading')).toBeNull();
    expect(queryByTestId('error')).toBeNull();
    expect(queryByTestId('no-results')).toBeNull();
    expect(queryByTestId('results')).not.toBeNull();
  });
});
