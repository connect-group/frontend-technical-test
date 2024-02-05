import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import mockVehicle from '../../../__mocks__/mockVehicle';
import VehicleCardSummary from '../index';

describe('VehicleCardSummary', () => {
  it('renders correctly', () => {
    const { getByText } = render(<VehicleCardSummary vehicle={mockVehicle} />);
    expect(getByText(`${mockVehicle.id}`)).toBeInTheDocument();
    expect(getByText(`From:${mockVehicle.price}`)).toBeInTheDocument();
    expect(getByText(mockVehicle.description)).toBeInTheDocument();
  });
});
