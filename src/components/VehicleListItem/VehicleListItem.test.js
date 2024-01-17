import React from 'react';
import { render } from '@testing-library/react';
import VehicleListItem from './index';

const fakeVehicleIncomplete = {

  modelYear: 'k17',
  apiUrl: '/api/vehicle_xe.json',
  media: [
  ],
  meta: {
    passengers: 5,
    drivetrain: [
      'AWD',
      'RWD'
    ],
    bodystyles: [
      'saloon'
    ],
    emissions: {
      template: 'CO2 Emissions $value g/km',
      value: 99
    }
  }
};

const fakeVehicleComplete = {
  ...fakeVehicleIncomplete,
  id: 'xe',
  price: '£30,000',
  description: 'The most advanced, efficient and refined sports saloon that Jaguar has ever produced',
  media: [{
    name: 'vehicle',
    url: '/images/16x9/xe_k17.jpg'
  },
  {
    name: 'vehicle',
    url: '/images/1x1/xe_k17.jpg'
  }]
};

describe('<VehicleListItem /> Tests', () => {
  it('Should display if data complete', () => {
    const { queryByTestId } = render(<VehicleListItem vehicle={fakeVehicleComplete} />);
    expect(queryByTestId(`vehicle-${fakeVehicleComplete.id}`)).toBeTruthy();
    expect(queryByTestId('vehicleImage')).toBeTruthy();
    expect(queryByTestId('vehicleTitle')).toBeTruthy();
    expect(queryByTestId('vehiclePrice')).toBeTruthy();
    expect(queryByTestId('vehicleDescription')).toBeTruthy();
  });

  it('Should handle incomplete data', () => {
    const { queryByTestId } = render(<VehicleListItem vehicle={fakeVehicleIncomplete} />);
    expect(queryByTestId(`vehicle-${fakeVehicleComplete.id}`)).toBeFalsy();
    expect(queryByTestId('infoContainer')).toBeTruthy();
    expect(queryByTestId('vehicleImage')).toBeFalsy();
    expect(queryByTestId('vehicleTitle')).toBeFalsy();
    expect(queryByTestId('vehiclePrice')).toBeFalsy();
    expect(queryByTestId('vehicleDescription')).toBeFalsy();
  });
});
