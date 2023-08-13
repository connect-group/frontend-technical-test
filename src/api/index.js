// eslint-disable-next-line no-unused-vars
import { request } from './helpers';

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
// TODO: All API related logic should be made inside this function.
// Need to clean up the logic below seems really long winded watch a tutorial on promises
export default async function getData() {
  const vehicles = [];
  const detailedVehicles = [];

  await request('/api/vehicles.json').then((response) => {
    vehicles.push(...response);
  }).catch(() => {
    // error
    console.log('Error getting vehicles');
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
        console.log('Error getting details');
      });
    }
  }));
  return detailedVehicles;
}
