import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import VehicleCard from '../index';
import mockVehicle from '../../../__mocks__/mockVehicle';

describe('VehicleCard', () => {
  it('renders correctly', () => {
    const { getByRole } = render(<VehicleCard vehicle={mockVehicle} />);
    expect(
      getByRole('button', { name: `Vehicle ${mockVehicle.id}` })
    ).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const mockOnClick = jest.fn();
    const { getByRole } = render(
      <VehicleCard vehicle={mockVehicle} onClick={mockOnClick} />
    );
    fireEvent.click(getByRole('button', { name: `Vehicle ${mockVehicle.id}` }));
    expect(mockOnClick).toHaveBeenCalled();
  });

  it('calls onClick when Enter key is pressed', () => {
    const mockOnClick = jest.fn();
    const { getByRole } = render(
      <VehicleCard vehicle={mockVehicle} onClick={mockOnClick} />
    );
    fireEvent.keyDown(
      getByRole('button', { name: `Vehicle ${mockVehicle.id}` }),
      { key: 'Enter', code: 'Enter' }
    );
    expect(mockOnClick).toHaveBeenCalled();
  });
});
