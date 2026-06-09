import React from 'react';
import { render } from '@testing-library/react';
import VehicleList from '..';
import useData from '../useData';

jest.mock('../useData');

const mockResults = [
  {
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
  },
  {
    id: 'fpace',
    modelYear: 'k17',
    apiUrl: '/api/vehicle_fpace.json',
    media: [
      {
        name: 'vehicle',
        url: '/images/16x9/fpace_k17.jpg'
      },
      {
        name: 'vehicle',
        url: '/images/1x1/fpace_k17.jpg'
      }
    ],
    description: "Jaguar's luxury performance SUV.",
    price: '£40,000',
    meta: {
      passengers: 5,
      drivetrain: [
        'AWD',
        'RWD'
      ],
      bodystyles: [
        'SUV'
      ],
      emissions: {
        template: 'CO2 Emissions $value g/km',
        value: 100
      }
    }
  }
];

describe('<VehicleList /> Tests', () => {
  it('Should show loading state if it not falsy', () => {
    useData.mockReturnValue([true, 'An error occurred', mockResults]);
    const { queryByTestId } = render(<VehicleList />);

    expect(queryByTestId('loading')).not.toBeNull();
    expect(queryByTestId('error')).toBeNull();
    expect(queryByTestId('results')).toBeNull();
  });

  it('Should show error if it is not falsy and loading is finished', () => {
    useData.mockReturnValue([false, 'An error occurred', mockResults]);
    const { queryByTestId } = render(<VehicleList />);

    expect(queryByTestId('loading')).toBeNull();
    expect(queryByTestId('error')).not.toBeNull();
    expect(queryByTestId('results')).toBeNull();
  });

  it('Should show results if loading successfully finished', () => {
    useData.mockReturnValue([false, false, mockResults]);
    const { queryByTestId } = render(<VehicleList />);

    expect(queryByTestId('loading')).toBeNull();
    expect(queryByTestId('error')).toBeNull();
    expect(queryByTestId('results')).not.toBeNull();
  });
});
