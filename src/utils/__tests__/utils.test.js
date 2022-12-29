import { mergeVehicleData, noEmptyValues } from '..';

describe('util functions test', () => {
  it('should merge vehicle objects with vehicle details objects', () => {
    const vehicles = [{ id: 'fpace', apiUrl: '/api/vehicle_fpace.json' }, { id: 'ipace', apiUrl: '/api/vehicle_ipace.json' }];
    const vehicleDetails = [{ id: 'fpace', description: 'luxury performance', price: '£40,000' }, { id: 'ipace', description: 'electric performance', price: '£65,000' }];
    const expected = [{
      id: 'fpace', description: 'luxury performance', price: '£40,000', apiUrl: '/api/vehicle_fpace.json'
    }, {
      id: 'ipace', description: 'electric performance', price: '£65,000', apiUrl: '/api/vehicle_ipace.json'
    }];
    const vehicleData = mergeVehicleData(vehicles, vehicleDetails);
    expect(vehicleData).toEqual(expected);
  });

  it('should remove any values that are empty', () => {
    let data = { id: 'fpace', price: '' };
    const valuesToCheck = ['price'];
    expect(noEmptyValues(data, valuesToCheck)).toEqual(false);

    data = { id: 'fpace', price: null };
    expect(noEmptyValues(data, valuesToCheck)).toEqual(false);

    data = { id: 'fpace' };
    expect(noEmptyValues(data, valuesToCheck)).toEqual(false);

    data = { id: 'fpace', price: '£40,000' };
    expect(noEmptyValues(data, valuesToCheck)).toEqual(true);
  });
});
