// eslint-disable-next-line no-unused-vars
import { filterVehicles, request } from './helpers';

const BROKEN_API_URL = '/api/vehicle_problematic.json';

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
// TODO: All API related logic should be made inside this function.
export default async function getData() {
  const vehicles = await request('/api/vehicles.json');
  const filteredVehicles = await filterVehicles(vehicles, BROKEN_API_URL);
  return filteredVehicles;
}
