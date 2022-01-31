// eslint-disable-next-line no-unused-vars
import { request, isEmpty } from './helpers';

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
// TODO: All API related logic should be made inside this function.
export default async function getData() {
  const response = await fetch('/api/vehicles.json');
  const vehiclesData = await response.json();

  const finalData = await Promise.allSettled(
    vehiclesData.map((data) => request(data))
  ).then((results) => results.map((result) => {
    if (result.status === 'fulfilled') {
      return result.value;
    }
    return [];
  }));

  return finalData.filter((vehicle) => !isEmpty(vehicle) && vehicle.price);
}
