import React from 'react';
import { render } from '@testing-library/react';
import VehicleInfo from '..';

const basicClass = 'classname';
const data = {
  id: 'id',
  price: 'price',
  description: 'description'
};

describe('<VehicleInfo /> Tests', () => {
  let rendered;

  beforeEach(() => {
    rendered = render(<VehicleInfo data={data} className={basicClass} />);
  });

  it('Should show block of vehicle information', () => {
    expect(rendered.queryByTestId('info')).not.toBeNull();
  });

  it('Should show vehicle name', () => {
    expect(rendered.getByText(data.id)).not.toBeNull();
  });

  it('Block should have a class "classname-info-main"', () => {
    expect(rendered.queryByTestId('info').className).toBe(`${basicClass}-info-main`);
  });
});
