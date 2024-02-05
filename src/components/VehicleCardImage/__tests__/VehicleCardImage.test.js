import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import mockVehicle from '../../../__mocks__/mockVehicle';
import VehicleCardImage from '../index';

describe('VehicleCardImage', () => {
  const mockMedia = mockVehicle.media;

  it('renders correctly', () => {
    const { getByAltText } = render(<VehicleCardImage name="Test Vehicle" media={mockMedia} />);
    expect(getByAltText('Test Vehicle')).toBeInTheDocument();
  });

  it('contains correct mobile image source', () => {
    const { getByAltText } = render(<VehicleCardImage name="Test Vehicle" media={mockMedia} />);
    expect(getByAltText('Test Vehicle').src).toContain('/images/1x1/xe_k17.jpg');
  });

  it('contains correct tablet and web image source', () => {
    const { container } = render(<VehicleCardImage name="Test Vehicle" media={mockMedia} />);
    const sourceElement = container.querySelector('source');
    expect(sourceElement.srcset).toContain('/images/16x9/xe_k17.jpg');
  });
});
