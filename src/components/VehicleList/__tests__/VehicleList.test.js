import React from 'react';
import { render } from '@testing-library/react';
import VehicleList from '..';
import useData from '../useData';

jest.mock('../useData');

const mockVehicles = [
  {
    id: 'xe',
    name: 'JAGUAR XE',
    modelYear: 'k17',
    apiUrl: '/api/vehicles/xe',
    media: [{ name: 'vehicle', url: '/images/16x9/xe_k17.jpg' }, {
      name: 'vehicle',
      url: '/images/1x1/xe_k17.jpg'
    }]
  },
  {
    id: 'xf',
    name: 'JAGUAR XF',
    modelYear: 'k17',
    apiUrl: '/api/vehicles/xf',
    media: [{ name: 'vehicle', url: '/images/16x9/xf_k17.jpg' }, {
      name: 'vehicle',
      url: '/images/1x1/xf_k17.jpg'
    }]
  }
];

describe('<VehicleList /> Tests', () => {
  it('Should show loading state if it not falsy', () => {
    useData.mockReturnValue([true, 'An error occurred', mockVehicles]);
    const { queryByTestId } = render(<VehicleList />);

    expect(queryByTestId('loading')).not.toBeNull();
    expect(queryByTestId('error')).toBeNull();
    expect(queryByTestId('results')).toBeNull();
  });

  it('Should show error if it is not falsy and loading is finished', () => {
    useData.mockReturnValue([false, 'An error occurred', mockVehicles]);
    const { queryByTestId } = render(<VehicleList />);

    expect(queryByTestId('loading')).toBeNull();
    expect(queryByTestId('error')).not.toBeNull();
    expect(queryByTestId('results')).toBeNull();
  });

  it('Should show results if loading successfully finished', () => {
    useData.mockReturnValue([false, false, mockVehicles]);
    const { queryByTestId } = render(<VehicleList />);

    expect(queryByTestId('loading')).toBeNull();
    expect(queryByTestId('error')).toBeNull();
    expect(queryByTestId('results')).not.toBeNull();
  });

  it('should show 2 vehicles', () => {
    useData.mockReturnValue([false, false, mockVehicles]);
    const { queryAllByTestId } = render(<VehicleList />);

    expect(queryAllByTestId('vehicle')).toHaveLength(2);
  });
});
