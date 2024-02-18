// eslint-disable-next-line no-unused-vars
import { request } from './helpers';

/**
 * Pulls vehicle information.
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>} - A Promise that resolves to an array of vehicle information.
 */
export default async function getData() {
  try {
    const vehicles = await request('/api/vehicles.json');

    const vehiclesWithDetailsPromise = vehicles.map(async (vehicle) => {
      try {
        const details = await request(`/api/vehicle_${vehicle.id}.json`);
        return {
          ...vehicle,
          ...details,
        };
      } catch (err) {
        console.error(`Error fetching details for vehicle ${vehicle.id}:`, err.message);
        return null;
      }
    });

    const vehiclesWithDetails = await Promise.allSettled(vehiclesWithDetailsPromise);

    // Filter out failed requests and those without price information
    const validVehicles = vehiclesWithDetails
      .filter((result) => result.status === 'fulfilled' && result.value && result.value.price)
      .map((result) => result.value);

    return validVehicles;
  } catch (error) {
    console.error('Error fetching vehicles:', error.message);
    throw error; // Re-throw the error to propagate it to the caller
  }
}
