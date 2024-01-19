import { getVehicleDetails } from '../get-vehicle-details';
import { TVehicle } from '../../@typings/vehicle';
import { request } from '../helpers';

jest.mock('../helpers', () => ({
  request: jest.fn(),
}));

describe('getVehicleDetails', () => {
  it('should return vehicle details with price when price is available', async () => {
    const mockVehicle: TVehicle = {
      id: '123',
      modelYear: '2021',
      apiUrl: 'api/vehicle_with_price.json',
      media: [],
    };
    const mockVehicleDetail = {
      id: '123',
      description: 'Test Vehicle',
      price: '25000',
      meta: {
        passengers: 4,
        drivetrain: ['AWD'],
        bodystyles: ['SUV'],
        emissions: {
          template: 'CO2 Emissions {value} g/km',
          value: 192,
        },
      },
    };

    (request as jest.Mock).mockResolvedValue(mockVehicleDetail);

    await expect(getVehicleDetails(mockVehicle)).resolves.toEqual({
      ...mockVehicle,
      detail: mockVehicleDetail,
    });
  });

  it('should return vehicle without details when price is not available', async () => {
    const mockVehicle: TVehicle = {
      id: '456',
      modelYear: '2021',
      apiUrl: 'api/vehicle_without_price.json',
      media: [],
    };
    const mockVehicleDetail = {
      id: '456',
      description: 'Test Vehicle',
      price: '',
      meta: {
        passengers: 4,
        drivetrain: ['AWD'],
        bodystyles: ['SUV'],
        emissions: {
          template: 'CO2 Emissions {value} g/km',
          value: 192,
        },
      },
    };

    (request as jest.Mock).mockResolvedValue(mockVehicleDetail);

    await expect(getVehicleDetails(mockVehicle)).resolves.toEqual(mockVehicle);
  });

  it('should throw an error when request fails', async () => {
    const mockVehicle: TVehicle = {
      id: '789',
      modelYear: '2021',
      apiUrl: 'api/vehicle_with_error.json',
      media: [],
    };

    const errorMessage = 'Failed to fetch vehicle details';
    (request as jest.Mock).mockRejectedValue(new Error(errorMessage));

    await expect(getVehicleDetails(mockVehicle)).rejects.toThrow(errorMessage);
  });
});