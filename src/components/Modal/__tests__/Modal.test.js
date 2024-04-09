import React from 'react';
import { render } from '@testing-library/react';
import Modal from '..';
import { mockVehicle } from '../../../__mocks__/vehicleMock';

describe('<Modal /> Tests', () => {
  it('Should show an overlay background', () => {
    const { queryByTestId } = render(<Modal vehicle={mockVehicle} />);
    expect(queryByTestId('modal-overlay')).not.toBeNull();
  });
  it('Should show a close button', () => {
    const { queryByTestId } = render(<Modal vehicle={mockVehicle} />);
    expect(queryByTestId('modal-close')).not.toBeNull();
  });
  it('Should show the vehicle name', () => {
    const { queryByTestId } = render(<Modal vehicle={mockVehicle} />);
    expect(queryByTestId('vehicle-name')).not.toBeNull();
  });
  it('Should show the vehicle price', () => {
    const { queryByTestId } = render(<Modal vehicle={mockVehicle} />);
    expect(queryByTestId('vehicle-price')).not.toBeNull();
  });

  it('Should emit a close event when the close button is clicked', () => {
    let closed;
    const closeModal = () => {
      closed = true;
    };
    const { queryByTestId } = render(<Modal vehicle={mockVehicle} onCLose={closeModal} />);
    queryByTestId('modal-close').click();
    expect(closed).toBe(true);
  });

  describe('When the more information is collapsed', () => {
    it('Should not show number of passengers', () => {
      const { queryByTestId } = render(<Modal vehicle={mockVehicle} />);
      expect(queryByTestId('vehicle-passengers')).toBeNull();
    });
    it('Should not show body style', () => {
      const { queryByTestId } = render(<Modal vehicle={mockVehicle} />);
      expect(queryByTestId('vehicle-body-style')).toBeNull();
    });
    it('Should not show emissions', () => {
      const { queryByTestId } = render(<Modal vehicle={mockVehicle} />);
      expect(queryByTestId('vehicle-emissions')).toBeNull();
    });

    it('Should not show a collapse button to hide more information', () => {
      const { queryByTestId } = render(<Modal vehicle={mockVehicle} />);
      expect(queryByTestId('modal-collapse')).toBeNull();
    });
    it('Should show an expand button to show more information', () => {
      const { queryByTestId } = render(<Modal vehicle={mockVehicle} />);
      expect(queryByTestId('modal-expand')).not.toBeNull();
    });
  });

  describe('When the more information is expanded', () => {
    it('Should show number of passengers', () => {
      const { queryByTestId } = render(<Modal vehicle={mockVehicle} />);
      const moreinfoButton = queryByTestId('modal-expand');

      moreinfoButton.click();
      expect(queryByTestId('vehicle-passengers')).not.toBeNull();
    });
    it('Should show body style', () => {
      const { queryByTestId } = render(<Modal vehicle={mockVehicle} />);
      const moreinfoButton = queryByTestId('modal-expand');

      moreinfoButton.click();
      expect(queryByTestId('vehicle-body-style')).not.toBeNull();
    });
    it('Should show emissions', () => {
      const { queryByTestId } = render(<Modal vehicle={mockVehicle} />);
      const moreinfoButton = queryByTestId('modal-expand');

      moreinfoButton.click();
      expect(queryByTestId('vehicle-emissions')).not.toBeNull();
    });

    it('Should show a collapse button to hide more information', () => {
      const { queryByTestId } = render(<Modal vehicle={mockVehicle} />);
      const moreinfoButton = queryByTestId('modal-expand');

      moreinfoButton.click();
      expect(queryByTestId('modal-collapse')).not.toBeNull();
    });

    it('Should not show the expand button ', () => {
      const { queryByTestId } = render(<Modal vehicle={mockVehicle} />);
      const moreinfoButton = queryByTestId('modal-expand');

      moreinfoButton.click();
      expect(queryByTestId('modal-expand')).toBeNull();
    });
  });
});
