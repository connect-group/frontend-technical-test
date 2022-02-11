import React from 'react';
import { render } from '@testing-library/react';
import VehicleMedia from '../VehicleMedia';

const basicClass = 'classname';
const data = [
  {
    name: '1',
    url: '/'
  }
];

describe('<VehicleMedia /> Tests', () => {
  let rendered;

  beforeEach(() => {
    rendered = render(<VehicleMedia media={data} className={basicClass} />);
  });

  it('Should show block of vehicle media', () => {
    expect(rendered.queryByTestId('media')).not.toBeNull();
  });

  it('Block should have a class "classname-media"', () => {
    expect(rendered.queryByTestId('media').className).toBe(`${basicClass}-media`);
  });
});
