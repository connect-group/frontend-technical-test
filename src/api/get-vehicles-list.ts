/* eslint-disable import/prefer-default-export */
import { TVehicle } from '../@typings/vehicle';
import { request } from './helpers';

/**
 * The function `getVehiclesList` is an  * asynchronous function
 * that fetches a list of vehicles from an
 * API and returns a promise that resolves to an array of `TVehicle` objects.
 * @returns The function `getVehiclesList` returns a promise that resolves to an array of `TVehicle`
 * objects.
 */
export const getVehiclesList = async (): Promise<TVehicle[]> => {
  try {
    const vehicleList: TVehicle[] = await request<TVehicle[]>(
      '/api/vehicles.json',
    );
    return vehicleList;
  } catch (e) {
    throw new Error('Failed to fetch vehicle list');
  }
};
