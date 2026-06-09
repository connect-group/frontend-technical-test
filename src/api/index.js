import { request } from './helpers';

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
export default async function getData() {
  const vehicles = await request('/api/vehicles.json');

  // Only process vehicles that have apiUrl
  const vehiclesWithUrl = vehicles.filter((vehicle) => vehicle.apiUrl);

  const vehiclesById = Object.fromEntries(vehiclesWithUrl.map((vehicle) => [vehicle.id, vehicle]));
  const detailRequests = vehiclesWithUrl.map((vehicle) => request(vehicle.apiUrl));

  const detailResults = await Promise.allSettled(detailRequests);

  return detailResults
    .filter((result) => result.status === 'fulfilled' && result.value && result.value.price)
    .map((result) => ({ ...vehiclesById[result.value.id], ...result.value }));
}
