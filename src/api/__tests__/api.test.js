import getData from '..';
import { request } from '../helpers';

jest.mock('../helpers');

describe('getData Tests', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should handle initial API call failure', () => {
    request.mockRejectedValueOnce('An error occurred');

    return expect(getData()).rejects.toBeTruthy();
  });

  it('should make an API call to receive a list of general vehicle information', async () => {
    request.mockResolvedValueOnce([]);

    await expect(getData()).resolves.toEqual([]);
    expect(request).toBeCalledWith('/api/vehicles.json');
  });

  it('should traverse and make further API calls on main results', async () => {
    request
      .mockResolvedValueOnce([{ apiUrl: '/api/vehicle_ftype.json', id: 'ftype' }, { apiUrl: '/api/vehicle_xj.json', id: 'xj' }])
      .mockResolvedValueOnce({ id: 'ftype', price: '£36,000' })
      .mockResolvedValueOnce({ id: 'xj', price: '£40,000' });

    await expect(getData()).resolves.toEqual([
      { apiUrl: '/api/vehicle_ftype.json', id: 'ftype', price: '£36,000' },
      { apiUrl: '/api/vehicle_xj.json', id: 'xj', price: '£40,000' }
    ]);

    expect(request).toBeCalledWith('/api/vehicles.json');
    expect(request).toBeCalledWith('/api/vehicle_ftype.json');
    expect(request).toBeCalledWith('/api/vehicle_xj.json');
  });

  it('should ignore failed API calls during traversal', async () => {
    request
      .mockResolvedValueOnce([{ apiUrl: '/api/vehicle_ftype.json' }, { apiUrl: '/api/vehicle_xj.json' }])
      .mockResolvedValueOnce({ id: 'ftype', price: '£36,000' })
      .mockRejectedValueOnce('An error occurred');

    await expect(getData()).resolves.toEqual([
      { apiUrl: '/api/vehicle_ftype.json', id: 'ftype', price: '£36,000' }
    ]);
  });

  it('should ignore vehicles without valid price during traversal', async () => {
    request
      .mockResolvedValueOnce([{ apiUrl: '/api/ftype.json' }, { apiUrl: '/api/xe.json' }, { apiUrl: '/api/xj.json' }])
      .mockResolvedValueOnce({ id: 'ftype', price: '' })
      .mockResolvedValueOnce({ id: 'xe' })
      .mockResolvedValueOnce({ id: 'xj', price: '£40,000' });

    await expect(getData()).resolves.toEqual([
      { apiUrl: '/api/xj.json', id: 'xj', price: '£40,000' }
    ]);
  });
});
