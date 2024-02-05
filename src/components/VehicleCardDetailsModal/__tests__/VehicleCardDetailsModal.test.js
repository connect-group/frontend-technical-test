import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import VehicleCardDetailsModal from '../index';
import mockVehicle from '../../../__mocks__/mockVehicle';

describe('VehicleCardDetailsModal', () => {
  beforeEach(() => {
    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal-root');
    document.body.appendChild(modalRoot);
  });

  afterEach(() => {
    const modalRoot = document.getElementById('modal-root');
    if (modalRoot) {
      document.body.removeChild(modalRoot);
    }
  });

  it('renders correctly', () => {
    const { getByText, getByAltText } = render(<VehicleCardDetailsModal isOpen details={mockVehicle} />);
    expect(getByText(mockVehicle.id)).toBeInTheDocument();
    expect(getByAltText(`Details of vehicle ${mockVehicle.id}`)).toBeInTheDocument();
    expect(getByText(mockVehicle.description)).toBeInTheDocument();
    expect(getByText(/From:/i)).toBeInTheDocument();
    expect(getByText(/Model Year:/i)).toBeInTheDocument();
    expect(getByText(/Body Styles:/i)).toBeInTheDocument();
    expect(getByText(/Drive Train:/i)).toBeInTheDocument();
    expect(getByText(/Seating Capacity:/i)).toBeInTheDocument();
    expect(getByText(/CO2 Emissions:/i)).toBeInTheDocument();
  });
});
