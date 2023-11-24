import getData from '..';
import { request } from '../helpers';

jest.mock('../helpers');

describe('getData Tests', () => {
  const safelyCallApi = async () => {
    try {
      return await getData();
    } catch (e) {
      return null;
    }
  };

  it('Should fail if initial api call is failed', () => {
    request.mockRejectedValueOnce('An error occurred');

    return expect(() => getData()).rejects.not.toBeFalsy();
  });

  it('Should make an api call to receive a list of general vehicle information', async () => {
    expect.assertions(1);
    request.mockResolvedValueOnce([]);
    await safelyCallApi();

    expect(request).toBeCalledWith('/api/vehicles.json');
  });

  it('Should traverse and make further api calls on main results', async () => {
    expect.assertions(3);
    request.mockResolvedValueOnce([{ apiUrl: '/api/vehicle_ftype.json' }, { apiUrl: '/api/vehicle_xj.json' }]);
    request.mockResolvedValueOnce({ id: 'ftype', price: '£36,000' });
    request.mockResolvedValueOnce({ id: 'xj', price: '£40,000' });
    await safelyCallApi();

    expect(request).toBeCalledWith('/api/vehicles.json');
    expect(request).toBeCalledWith('/api/vehicle_ftype.json');
    expect(request).toBeCalledWith('/api/vehicle_xj.json');
  });

  it('Should ignore failed API calls during traversing', () => {
    request.mockResolvedValueOnce([{ apiUrl: '/api/vehicle_ftype.json' }, { apiUrl: '/api/vehicle_xj.json' }]);
    request.mockResolvedValueOnce({ id: 'ftype', price: '£36,000' });
    request.mockRejectedValueOnce('An error occurred');

    expect(safelyCallApi()).resolves.toEqual([
      { apiUrl: '/api/vehicle_ftype.json', id: 'ftype', price: '£36,000' }
    ]);
  });

  it('Should ignore vehicles without valid price during traversing', () => {
    request.mockResolvedValueOnce([{ apiUrl: '/api/ftype.json' }, { apiUrl: '/api/xe.json' }, { apiUrl: '/api/xj.json' }]);
    request.mockResolvedValueOnce({ id: 'ftype', price: '' });
    request.mockResolvedValueOnce({ id: 'xe' });
    request.mockResolvedValueOnce({ id: 'xj', price: '£40,000' });

    return expect(safelyCallApi()).resolves.toEqual([
      { apiUrl: '/api/xj.json', id: 'xj', price: '£40,000' }
    ]);
  });
});
