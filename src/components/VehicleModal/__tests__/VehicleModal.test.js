import React from 'react';
import { renderWithState } from '../../../__mocks__/test-util';
import VehicleModal from '..';

const initialState = {
  vehicles: [
    {
      id: 'id',
      price: 'price',
      media: [],
      meta: {}
    }
  ],
  visibleModal: true,
  visibleVehicle: 0
};

describe('<VehicleModal /> Tests', () => {
  it('Should show dialog window', () => {
    const { queryByTestId } = renderWithState(<VehicleModal />, { initialState });
    expect(queryByTestId('modal')).not.toBeNull();
  });
});
