// eslint-disable-next-line no-unused-vars
import { request } from './helpers';

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
// TODO: All API related logic should be made inside this function.
export default async function getData() {
  try {
    const vehiclesArray = await request('/api/vehicles.json');
    const vehiclesRequests = vehiclesArray.map((vehicle) => request(vehicle.apiUrl));
    const vehiclesDetails = await Promise.allSettled(vehiclesRequests);
    return vehiclesArray.reduce((vehicles, vehicle, index) => {
      if (vehiclesDetails[index].reason) return vehicles;
      const newVehicle = { ...vehicle, ...vehiclesDetails[index].value };
      if (!newVehicle.price) return vehicles;

      vehicles.push(newVehicle);
      return vehicles;
    }, []);
  } catch (e) {
    throw new Error('404 Not found');
  }
}
