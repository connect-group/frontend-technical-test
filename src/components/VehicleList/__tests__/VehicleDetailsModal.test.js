import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { mockVehicleDetails } from '../../../__mocks__/mockData';
import VehicleDetailsModal from '../VehicleDetailsModal';

const mockSetActiveVehicle = jest.fn();

describe('<VehicleDetailsModal /> Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should render modal with correct vehicle details when vehicle is provided', () => {
    const { getByText } = render(
      <VehicleDetailsModal vehicle={mockVehicleDetails} setActiveVehicle={mockSetActiveVehicle} />
    );

    // Check title
    expect(getByText(`Vehicle details of ${mockVehicleDetails.id}`)).toBeTruthy();

    // Check vehicle details are displayed correctly
    expect(getByText('Passengers')).toBeTruthy();
    expect(getByText('5')).toBeTruthy();

    expect(getByText('Drivetrain')).toBeTruthy();
    expect(getByText('AWD, RWD')).toBeTruthy();

    expect(getByText('Body Styles')).toBeTruthy();
    expect(getByText('SUV')).toBeTruthy();

    expect(getByText('Emissions')).toBeTruthy();
    expect(getByText('CO2 Emissions 100 g/km')).toBeTruthy();

    // Check OK button is present
    expect(getByText('OK')).toBeTruthy();
  });

  it('Should call setActiveVehicle with null when OK button is clicked', () => {
    const { getByText } = render(
      <VehicleDetailsModal vehicle={mockVehicleDetails} setActiveVehicle={mockSetActiveVehicle} />
    );

    fireEvent.click(getByText('OK'));
    expect(mockSetActiveVehicle).toHaveBeenCalledWith(null);
  });
});
