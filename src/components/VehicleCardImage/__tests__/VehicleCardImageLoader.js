import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import VehicleCardImageLoader from '../VehicleCardImageLoader';
import SHIMMER_TYPES from '../../VehicleShimmer/types';

describe('VehicleCardImageLoader', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<VehicleCardImageLoader />);
    expect(getByTestId('vehicle-card-image-loader')).toBeInTheDocument();
  });

  it('contains VehicleShimmer with correct type', () => {
    const { getByTestId } = render(<VehicleCardImageLoader />);
    const shimmer = getByTestId('loading');
    expect(shimmer).toHaveAttribute('type', SHIMMER_TYPES.IMAGE);
  });
});
