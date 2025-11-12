import React from 'react';
import { render } from '@testing-library/react';
import VehicleDetailsModal from '..';

const vehicleStub = {
  id: 'xe',
  description: 'The most advanced, efficient and refined sports saloon that Jaguar has ever produced',
  modelYear: 'k17',
  price: '£30,000',
  media: [
    { name: 'vehicle', url: '/images/16x9/xe_k17.jpg' },
    { name: 'vehicle', url: '/images/1x1/xe_k17.jpg' }
  ],
  meta: {
    bodystyles: ['saloon'],
    drivetrain: ['AWD', 'RWD'],
    passengers: 5,
    emissions: 'CO2 Emissions 99 g/km'
  },
  name: 'Jaguar XE',
  thumbnails: {
    default: { name: 'vehicle', url: '/images/16x9/xe_k17.jpg' },
    mobile: { name: 'vehicle', url: '/images/1x1/xe_k17.jpg' }
  },
};

beforeAll(() => {
  // Set up the Modal's portal target.
  const modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'modal-root');

  document.body.appendChild(modalRoot);
});

describe('<VehicleDetailsModal /> Tests', () => {
  it('Should render a VehicleDetailsModel', () => {
    const handleClose = jest.fn();
    const { queryByTestId } = render(<VehicleDetailsModal onClose={handleClose} vehicle={vehicleStub} />);

    expect(queryByTestId('vehicle-details-modal')).not.toBeNull();
    expect(queryByTestId('vehicle-details-modal-content')).not.toBeNull();
    expect(queryByTestId('vehicle-details-modal-header')).not.toBeNull();
    expect(queryByTestId('vehicle-details-modal-close')).not.toBeNull();
  });

  it('Should close when the close button is clicked', () => {
    const handleClose = jest.fn();
    const { queryByTestId } = render(<VehicleDetailsModal onClose={handleClose} vehicle={vehicleStub} />);

    const button = queryByTestId('vehicle-details-modal-close');
    expect(button).not.toBeNull();

    button.click();
    expect(handleClose).toBeCalledTimes(1);
  });

  it('Should close when the backdrop is clicked', () => {
    const handleClose = jest.fn();
    const { queryByTestId } = render(<VehicleDetailsModal onClose={handleClose} vehicle={vehicleStub} />);

    const button = queryByTestId('vehicle-details-modal-backdrop-button');
    expect(button).not.toBeNull();

    button.click();
    expect(handleClose).toBeCalledTimes(1);
  });

  it('Should display the Vehicle details', () => {
    const handleClose = jest.fn();
    const { queryByTestId } = render(<VehicleDetailsModal onClose={handleClose} vehicle={vehicleStub} />);

    expect(queryByTestId('vehicle-details')).not.toBeNull();
    expect(queryByTestId('vehicle-details-image')).not.toBeNull();
    expect(queryByTestId('vehicle-details-name')).not.toBeNull();
    expect(queryByTestId('vehicle-details-price')).not.toBeNull();
    expect(queryByTestId('vehicle-details-description')).not.toBeNull();
    expect(queryByTestId('vehicle-details-metadata')).not.toBeNull();
  });
});

afterAll(() => {
  const modalRoot = document.getElementById('modal-root');
  if (modalRoot) {
    modalRoot.remove();
  }
});
