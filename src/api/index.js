// eslint-disable-next-line no-unused-vars
import { request } from './helpers';

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
// TODO: All API related logic should be made inside this function.
export default async function getData() {
  let vehicles = await request('/api/vehicles.json');
  const vehiclesWithDetailsPromise = vehicles.map(async vehicle => {
      try {
          const details = await request(`/api/vehicle_${vehicle.id}.json`);
          return {
              ...vehicle,
              ...details
          }
      } catch (error) {
          return null;
      }
  });
  vehicles = await Promise.all(vehiclesWithDetailsPromise);
  return vehicles.filter(v => !!v && !!v.price);
}
