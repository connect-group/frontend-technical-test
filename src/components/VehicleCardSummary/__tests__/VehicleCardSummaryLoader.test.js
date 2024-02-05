import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import VehicleCardSummaryLoader from '../VehicleCardSummaryLoader';

describe('VehicleCardSummaryLoader', () => {
  it('renders correctly', () => {
    const { getByTestId, getAllByTestId } = render(<VehicleCardSummaryLoader />);
    expect(getByTestId('vehicle-card-summary-loader')).toBeInTheDocument();
    expect(getAllByTestId('loading').length).toBe(5);
  });
});
