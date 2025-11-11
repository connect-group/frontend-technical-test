// eslint-disable-next-line no-unused-vars
import { request } from './helpers';

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
export default async function getData() {
  // Make the initial list request.
  /** @type Array.vehicleSummaryPayload */
  const vehicleList = await request('/api/vehicles.json');

  /** @type Record<string, vehicleSummaryResponse */
  const vehicleMap = {};
  const vehicleDetailsPromises = [];

  // Traverse the list to get each vehicle's details.
  vehicleList.forEach((/** @type vehicleSummaryResponse */ vehicle) => {
    const { apiUrl, id } = vehicle;

    // Add the vehicle details request to an array and continue
    if (apiUrl) {
      vehicleMap[id] = vehicle;
      vehicleDetailsPromises.push(request(apiUrl).catch(() => {
        // TODO Log an error with a monitoring system.
      }));
    }
  });

  // Wait for all the details requests to finish.
  /** @type Array.vehicleDetailResponse */
  const vehicleDetailResponses = await Promise.all(vehicleDetailsPromises);

  // Build a list of valid responses with prices
  const vehicleDetails = [];
  vehicleDetailResponses.forEach((details) => {
    // Verify the entry is valid
    if (details && typeof details === 'object') {
      const { id, price } = details;

      // Check that it has a price
      if ((id in vehicleMap) && price) {
        // Combine the summary and detail information
        vehicleDetails.push({ ...vehicleMap[id], ...details });
      }
    }
  });

  return vehicleDetails;
}
