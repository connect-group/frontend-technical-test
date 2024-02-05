import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import VehicleShimmer from '../index';
import SHIMMER_TYPES from '../types';

describe('VehicleShimmer', () => {
  it('renders correctly with default type', () => {
    const { getByTestId } = render(<VehicleShimmer />);
    expect(getByTestId('loading')).toHaveAttribute(
      'type',
      SHIMMER_TYPES.TEXT
    );
  });

  it('renders correctly with GAP type', () => {
    const { getByTestId } = render(<VehicleShimmer type={SHIMMER_TYPES.GAP} />);
    expect(getByTestId('loading')).toHaveStyle({ height: '16px' });
  });

  it('renders correctly with IMAGE type', () => {
    const { getByTestId } = render(
      <VehicleShimmer type={SHIMMER_TYPES.IMAGE} />
    );
    expect(getByTestId('loading')).toHaveAttribute(
      'type',
      SHIMMER_TYPES.IMAGE
    );
  });

  it('renders correctly with TITLE type', () => {
    const { getByTestId } = render(
      <VehicleShimmer type={SHIMMER_TYPES.TITLE} />
    );
    expect(getByTestId('loading')).toHaveAttribute(
      'type',
      SHIMMER_TYPES.TITLE
    );
  });
});
