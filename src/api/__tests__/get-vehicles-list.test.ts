import { getVehiclesList } from '../get-vehicles-list';
import { request } from '../helpers';
import { TVehicle } from '../../@typings/vehicle';

jest.mock('../helpers', () => ({
  request: jest.fn(),
}));

describe('getVehiclesList', () => {
  it('should fetch the vehicle list successfully', async () => {
    const mockVehicles: TVehicle[] = [
      { id: 'ftype', modelYear: 'k17', apiUrl: '/api/vehicle_ftype.json', media: [] },
      { id: 'xj', modelYear: 'k17', apiUrl: '/api/vehicle_xj.json', media: [] },
    ];
    (request as jest.Mock).mockResolvedValueOnce(mockVehicles);
    
    const result = await getVehiclesList();
    
    expect(request).toHaveBeenCalledWith('/api/vehicles.json');
    expect(result).toEqual(mockVehicles);
  });

  it('should throw an error when the request fails', async () => {
    const errorMessage = 'Failed to fetch vehicle list';
    (request as jest.Mock).mockRejectedValueOnce(new Error(errorMessage));
    
    await expect(getVehiclesList()).rejects.toThrow(errorMessage);
  });
});