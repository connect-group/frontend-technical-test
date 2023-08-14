// eslint-disable-next-line no-unused-vars
import { request } from './helpers';

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
export default async function getData() {
  const detailedVehicles = [];

  const vehicles = await request('/api/vehicles.json').then(([response, data]) => {
    if (!response.ok) {
      throw new Error('Error getting vehicles');
    }
    return data;
  }).catch((error) => {
    throw new Error('Error getting vehicles', error);
  });

  await Promise.all(vehicles.map(async (vehicle) => {
    const detailUrl = vehicle.apiUrl;

    if (detailUrl) {
      const vehicleDetail = await request(detailUrl).then(([response, data]) => {
        if (!response.ok) {
          return null;
        }

        if (data.price) {
          return {
            ...vehicle,
            ...data
          };
        }
        return null;
      }).catch(() => {
        return null;
      });

      if (vehicleDetail) {
        detailedVehicles.push(vehicleDetail);
      }
    }
  })).catch((error) => {
    throw new Error('Error getting vehicle details', error);
  });

  return detailedVehicles;
}
