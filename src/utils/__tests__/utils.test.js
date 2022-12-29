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

  it(' noEmptyValues should return false if any valueToCheck is falsy', () => {
    let data = { id: 'fpace', price: '', description: '' };
    const valuesToCheck = ['price', 'description'];
    expect(noEmptyValues(data, valuesToCheck)).toEqual(false);

    data = { id: 'fpace', price: null, description: null };
    expect(noEmptyValues(data, valuesToCheck)).toEqual(false);

    data = { id: 'fpace' };
    expect(noEmptyValues(data, valuesToCheck)).toEqual(false);

    data = { id: 'fpace', price: '£40,000', description: 'Electric' };
    expect(noEmptyValues(data, valuesToCheck)).toEqual(true);
  });
});
