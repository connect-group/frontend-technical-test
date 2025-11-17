import { request } from './helpers';

/**
 * A utility function to check if a value exists and is meaningful
 *
 * @param {*} value
 * @return {boolean}
 */
function hasNoValue(value) {
  return value === null
    || value === undefined
    || String(value).trim() === ''
    || value === 'null'
    || value === 'undefined';
}

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
// TODO: All API related logic should be made inside this function.

export default async function getData() {
  try {
    const vehiclesInfoList = await request('/api/vehicles.json');

    const vehiclesDetailedList = await Promise.all(vehiclesInfoList.map(async (vehicle) => {
      // Validate apiUrl and skip vehicle if: value not present
      if (hasNoValue(vehicle.apiUrl)) {
        return null;
      }
      try {
        const vehicleDetails = await request(vehicle.apiUrl);
        // Validate price and skip vehicle if: value not present
        if (hasNoValue(vehicleDetails.price)) {
          return null;
        }

        return {
          apiUrl: vehicle.apiUrl,
          price: vehicleDetails.price,
          ...(vehicle.media && { media: vehicle.media }),
          ...(vehicleDetails.id && { id: vehicleDetails.id }),
          ...(vehicleDetails.description && { description: vehicleDetails.description })
        };
      } catch (error) {
        // Skip vehicle if: broken apiUrl or failed request
        return null;
      }
    }));
    return vehiclesDetailedList.filter((vehicle) => vehicle != null);
  } catch (error) {
    throw new Error('Failed to fetch vehicles data');
  }
}
