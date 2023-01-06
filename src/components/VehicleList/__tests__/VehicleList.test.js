import React from 'react';
import { render } from '@testing-library/react';
import VehicleList from '..';
import useData from '../useData';
import useStore from '../../Context/useStore';

jest.mock('../useData');
jest.mock('../../Context/useStore');

const mockData = [
  {
    id: 'xe',
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
    },
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
    modelYear: 'k17'
  }
];

describe('<VehicleList /> Tests', () => {
  it('Should show loading state if it not falsy', () => {
    useData.mockReturnValue([true, 'An error occurred', 'results']);
    useStore.mockReturnValue({ state: { modal: { isOpen: false, data: null } }, dispatch: null });
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

  it('Should show results if loading successfully finished', () => {
    useData.mockReturnValue([false, false, mockData]);
    const { queryByTestId } = render(<VehicleList />);

    expect(queryByTestId('loading')).toBeNull();
    expect(queryByTestId('error')).toBeNull();
    expect(queryByTestId('results')).not.toBeNull();
  });
});
