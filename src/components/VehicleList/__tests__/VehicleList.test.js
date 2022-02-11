import React from 'react';
import { renderWithState } from '../../../__mocks__/test-util';
import VehicleList from '..';
import useData from '../useData';

jest.mock('../useData');

jest.mock('../../VehicleModal', () => () => (
  <div data-testid="modal">Modal</div>
));

describe('<VehicleList /> Tests', () => {
  it('Should show loading state if it not falsy', () => {
    useData.mockReturnValue([true, 'An error occurred', []]);
    const { queryByTestId } = renderWithState(<VehicleList />);

    expect(queryByTestId('loading')).not.toBeNull();
    expect(queryByTestId('error')).toBeNull();
    expect(queryByTestId('results')).toBeNull();
  });

  it('Should show error if it is not falsy and loading is finished', () => {
    useData.mockReturnValue([false, 'An error occurred', []]);
    const { queryByTestId } = renderWithState(<VehicleList />);

    expect(queryByTestId('loading')).toBeNull();
    expect(queryByTestId('error')).not.toBeNull();
    expect(queryByTestId('results')).toBeNull();
  });

  it('Should show results if loading successfully finished', () => {
    useData.mockReturnValue([false, false, []]);
    const { queryByTestId } = renderWithState(<VehicleList />);

    expect(queryByTestId('loading')).toBeNull();
    expect(queryByTestId('error')).toBeNull();
    expect(queryByTestId('results')).not.toBeNull();
  });

  it('Should show results if loading successfully finished', () => {
    useData.mockReturnValue([false, false, []]);
    const { queryByTestId } = renderWithState(<VehicleList />);

    expect(queryByTestId('modal')).toBeNull();
  });

  it('Should show results if loading successfully finished', () => {
    useData.mockReturnValue([false, false, []]);
    const { queryByTestId } = renderWithState(<VehicleList />, { initialState: { visibleModal: true } });

    expect(queryByTestId('modal')).not.toBeNull();
  });
});
