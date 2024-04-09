import React from 'react';
import { render } from '@testing-library/react';
import VehicleList from '..';
import useData from '../useData';
import { mockVehicle } from '../../../__mocks__/vehicleMock';

jest.mock('../useData');
const mockResults = [
    mockVehicle,
  {...mockVehicle, id: "xe1"},
  {...mockVehicle, id: "xe2"},
  {...mockVehicle, id: "xe3"},
];

describe('<VehicleList /> Tests', () => {
  it('Should show loading state if it not falsy', () => {
    useData.mockReturnValue([true, 'An error occurred', []]);
    const { queryByTestId } = render(<VehicleList />);

    expect(queryByTestId('loading')).not.toBeNull();
    expect(queryByTestId('error')).toBeNull();
    expect(queryByTestId('results')).toBeNull();
  });

  it('Should show error if it is not falsy and loading is finished', () => {
    useData.mockReturnValue([false, 'An error occurred', []]);
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

  it('Should display the vehicles in a list on mobile devices', () => {

  });

  it('Should display the vehicles in a grid of 2 columns on tablet devices', () => {

  });

  it('Should display the vehicles in 4 columns on desktop devices', () => {

  });
});
