import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import VehicleCardLoader from '../VehicleCardLoader';

describe('VehicleCardLoader', () => {
  it('renders correctly', () => {
    const { getByLabelText } = render(<VehicleCardLoader />);
    expect(getByLabelText('Vehicle loading')).toBeInTheDocument();
  });

  it('contains VehicleCardImageLoader', () => {
    const { getByTestId } = render(<VehicleCardLoader />);
    expect(getByTestId('vehicle-card-image-loader')).toBeInTheDocument();
  });

  it('contains VehicleCardSummaryLoader', () => {
    const { getByTestId } = render(<VehicleCardLoader />);
    expect(getByTestId('vehicle-card-summary-loader')).toBeInTheDocument();
  });
});
