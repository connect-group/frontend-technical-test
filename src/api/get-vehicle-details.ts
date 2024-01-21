/* eslint-disable import/prefer-default-export */
import { TVehicle, TVehicleDetail } from '../@typings/vehicle';
import { request } from './helpers';

/**
 * The function `getVehicleDetails` is an asynchronous function that takes a `vehicle` object as a
 * parameter and returns a promise that resolves to a `vehicle` object with additional details if
 * available.
 * @param {TVehicle} vehicle - The `vehicle` parameter is of type `TVehicle`, which represents a
 * vehicle object. It contains properties such as `apiUrl`, which is the URL to fetch the vehicle
 * details from.
 * @returns The function `getVehicleDetails` returns a Promise that resolves to a `TVehicle` object.
 */
export const getVehicleDetails = async (
  vehicle: TVehicle,
): Promise<TVehicle> => {
  try {
    const vehicleDetail: TVehicleDetail = await request<TVehicleDetail>(
      vehicle.apiUrl,
    );
    return vehicleDetail.price && vehicleDetail.price !== ''
      ? { ...vehicle, detail: vehicleDetail }
      : { ...vehicle };
  } catch (e) {
    throw new Error('Failed to fetch vehicle details');
  }
};
