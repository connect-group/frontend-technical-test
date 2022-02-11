import React from 'react';
import { renderWithState } from '../../../__mocks__/test-util';
import VehicleSingle from '..';

const data = {
  id: 'id',
  price: 'price',
  description: 'description',
  media: [
    {
      name: '1',
      url: '/'
    }
  ]
};

describe('<VehicleSingle /> Tests', () => {
  it('Should show vehicle block', () => {
    const { queryByTestId } = renderWithState(<VehicleSingle data={data} />, {});

    expect(queryByTestId('result')).not.toBeNull();
  });
});
