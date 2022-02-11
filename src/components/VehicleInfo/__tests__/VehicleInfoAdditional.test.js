import React from 'react';
import { render } from '@testing-library/react';
import VehicleInfoAdditional from '../VehicleInfoAdditional';

const basicClass = 'classname';

describe('<VehicleInfoAdditional /> Tests', () => {
  let rendered;

  beforeEach(() => {
    rendered = render(<VehicleInfoAdditional meta={{}} className={basicClass} />);
  });

  it('Should show block of vehicle additional information', () => {
    expect(rendered.queryByTestId('info')).not.toBeNull();
  });

  it('Block should have a class "classname-info-additional"', () => {
    expect(rendered.queryByTestId('info').className).toBe(`${basicClass}-info-additional`);
  });
});
