// eslint-disable-next-line no-unused-vars
import { request } from './helpers';

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
// TODO: All API related logic should be made inside this function.
export default async function getData() {
  const vehicleResponse = await fetch('/api/vehicles.json');

  const vehiclesData = await vehicleResponse.json();
  const filteredVehicleData = await Promise.all(
    vehiclesData.map(async (vehicle) => {
      let result = null;
      try {
        const response = await fetch(vehicle.apiUrl);
        result = {
          ...await response.json(),
          ...vehicle
        };
      } catch (error) {
        // eslint-disable-next-line
          console.log("error: ", error);
      }
      return result;
    })
  );

  return filteredVehicleData.filter((vehicle) => vehicle && vehicle.price);
}
