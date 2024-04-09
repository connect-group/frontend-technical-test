import React from 'react';
import { render } from '@testing-library/react';
import Vehicle from '..';
import { mockVehicle } from '../../../__mocks__/vehicleMock';

describe('<Vehicle /> Tests', () => {
  it('Should show the vehicle image ', () => {
    const { queryByTestId } = render(<Vehicle vehicle={mockVehicle} />);
    expect(queryByTestId('vehicle-image')).not.toBeNull();
  });
  it('Should show the vehicle name', () => {
    const { queryByTestId } = render(<Vehicle vehicle={mockVehicle} />);
    expect(queryByTestId('vehicle-name')).not.toBeNull();
  });
  it('Should show the vehicle price', () => {
    const { queryByTestId } = render(<Vehicle vehicle={mockVehicle} />);
    expect(queryByTestId('vehicle-price')).not.toBeNull();
  });
  it('Should show the vehicle description', () => {
    const { queryByTestId } = render(<Vehicle vehicle={mockVehicle} />);
    expect(queryByTestId('vehicle-description')).not.toBeNull();
  });
  it('Should show view more button', () => {
    const { queryByTestId } = render(<Vehicle vehicle={mockVehicle} />);
    expect(queryByTestId('vehicle-view-more')).not.toBeNull();
  });
});
