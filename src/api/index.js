// eslint-disable-next-line no-unused-vars
import { request } from './helpers';
import { API_URL } from './constants';
/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
// TODO: All API related logic should be made inside this function.
export default async function getData() {
  try {
    const allVehicles = await request(`${API_URL}/vehicles.json`);

    const vehiclesDetailsApiCall = allVehicles.map((vehicle) => request(vehicle.apiUrl));
    const vehiclesDetails = await Promise.allSettled(
      vehiclesDetailsApiCall
    );

    const validVehiclesResults = vehiclesDetails
      .filter(
        (result) => result.status === 'fulfilled' && !!result.value.price
      )
      .map((result) => result.value);

    const validVehiclesWithDetails = validVehiclesResults.map(
      (validVehicle) => ({
        ...validVehicle,
        ...allVehicles.find(
          (vehicle) => vehicle.id === validVehicle.id
        ),
      })
    );

    return validVehiclesWithDetails;
  } catch (error) {
    return Promise.reject(error.message);
  }
}
