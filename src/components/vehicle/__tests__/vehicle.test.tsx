import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
import Vehicle from '..';
import useVehiclesStore from '../../../store/vehicles-store';
import vehicles from '../../../__mocks__/vehiclesMock';

describe('<Vehicle />', () => {
  beforeEach(() => {
    const { result } = renderHook(() => useVehiclesStore());
    act(() => result.current.setVehicles(vehicles));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  it('renders without crashing', () => {
    // Render the Vehicle component using the ID of the first vehicle in the array
    const { queryByTestId } = render(<Vehicle id={vehicles[0].id} />);
    // Verify that the component is successfully rendered
    // by checking for its presence in the document
    expect(queryByTestId(`vehicle-${vehicles[0].id}`)).toBeDefined();
  });

  it('Should render Vehicle component', async () => {
    // Render the Vehicle component using the first vehicle's id for the test
    const { queryByTestId, container } = render(
      <Vehicle id={vehicles[0].id} />,
    );
    // Check if the rendered title matches the vehicle's id
    expect(queryByTestId('vehicle-title').textContent).toBe(vehicles[0].id);
    // Check if the rendered price is correctly displayed with a prefix
    expect(queryByTestId('vehicle-price').textContent).toBe(
      `From ${vehicles[0].detail.price}`,
    );
    // Check if the rendered description matches the vehicle's description
    expect(queryByTestId('vehicle-description').textContent).toBe(
      vehicles[0].detail.description,
    );
    // Create a snapshot of the rendered Vehicle component for future comparison
    expect(container).toMatchSnapshot();
  });

  it('calls selectVehicle when "Enter" key is pressed', () => {
    const { result } = renderHook(() => useVehiclesStore());
    const mockId = vehicles[0].id;
    // Set up a spy on the selectVehicle method before rendering the component
    const spy = jest.spyOn(result.current, 'selectVehicle');

    render(<Vehicle id={mockId} />);

    const vehicleElement = screen.getByTestId(`vehicle-${mockId}`);
    // Pressing Enter key should call selectVehicle
    fireEvent.keyDown(vehicleElement, { key: 'Enter' });

    // Check if selectVehicle has been called with the correct arguments
    expect(spy).toHaveBeenCalledWith(mockId);
  });

  it('does not call selectVehicle on other key press', () => {
    const { result } = renderHook(() => useVehiclesStore());
    const mockId = vehicles[0].id;

    // Set up a spy on the selectVehicle method before rendering the component
    const spy = jest.spyOn(result.current, 'selectVehicle');

    render(<Vehicle id={mockId} />);

    const vehicleElement = screen.getByTestId(`vehicle-${mockId}`);
    // Pressing Escpae key should not call selectVehicle
    fireEvent.keyDown(vehicleElement, { key: 'Escape' });

    // Check if selectVehicle has not been called with the correct arguments
    expect(spy).not.toHaveBeenCalledWith(mockId);
  });
});
