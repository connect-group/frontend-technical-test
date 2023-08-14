// eslint-disable-next-line no-unused-vars
import { request } from './helpers';

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
// TODO: All API related logic should be made inside this function.
export default async function getData() {
  const vehicles = [];
  const detailedVehicles = [];

  await request('/api/vehicles.json').then((response) => {
    vehicles.push(...response);
  }).catch(() => {
    // error
    throw new Error('Error getting vehicles');
  });

  await Promise.all(vehicles.map(async (vehicle) => {
    const detailUrl = vehicle.apiUrl;

    if (detailUrl) {
      await request(detailUrl).then((details) => {
        if (!details.price) return;

        const detailedVehicle = {
          ...vehicle,
          ...details
        };

        detailedVehicles.push(detailedVehicle);
      }).catch(() => {
        // error
        return null;
      });
    }
  }));
  return detailedVehicles;
}
