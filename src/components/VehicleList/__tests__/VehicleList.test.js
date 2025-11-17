import React from 'react';
import { render } from '@testing-library/react';
import VehicleList from '..';
import useData from '../useData';
import { mockVehiclesDetailedList } from '../../../__mocks__/mockData';

jest.mock('../useData');

describe('<VehicleList /> Tests', () => {
  it('Should show loading state if it not falsy', () => {
    useData.mockReturnValue([true, 'Failed to fetch', mockVehiclesDetailedList]);
    const { queryByTestId, getByText } = render(<VehicleList />);

    expect(queryByTestId('loading')).not.toBeNull();
    expect(queryByTestId('error')).toBeNull();
    expect(queryByTestId('results')).toBeNull();
    expect(getByText('Loading vehicles...')).toBeTruthy();
  });

  it('Should show error if it is not falsy and loading is finished', () => {
    useData.mockReturnValue([false, 'Failed to fetch', mockVehiclesDetailedList]);
    const { queryByTestId, getByText } = render(<VehicleList />);

    expect(queryByTestId('loading')).toBeNull();
    expect(queryByTestId('error')).not.toBeNull();
    expect(queryByTestId('results')).toBeNull();
    expect(getByText('Error loading vehicles')).toBeTruthy();
  });

  it('Should show results if loading successfully finished', () => {
    useData.mockReturnValue([false, false, mockVehiclesDetailedList]);
    const { queryByTestId, getByText } = render(<VehicleList />);

    expect(queryByTestId('loading')).toBeNull();
    expect(queryByTestId('error')).toBeNull();
    expect(queryByTestId('results')).not.toBeNull();
    expect(getByText('vehicle-1')).toBeTruthy();
    expect(getByText('From £35,000')).toBeTruthy();
    expect(getByText('A reliable family car')).toBeTruthy();
    expect(getByText('vehicle-2')).toBeTruthy();
    expect(getByText('From £45,000')).toBeTruthy();
    expect(getByText('A luxury sedan')).toBeTruthy();
  });
});
