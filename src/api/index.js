// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-console
import { request } from './helpers';

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
// TODO: All API related logic should be made inside this function.

export default async function getData() {
  async function fetchAndFormatVehicleDetails(vehicle) {
    try {
      const detailData = await request(vehicle.apiUrl); // Use the vehicle-specific apiUrl

      // Check if the detailData.price is not undefined and not an empty string before formatting details
      if (typeof detailData.price !== 'undefined' && detailData.price !== '') {
        const vehicleSummaryPayload = {
          vehicleId: vehicle.id,
          price: detailData.price,
          description: detailData.description,
          mediaUrls: [],
        };

        if (Array.isArray(vehicle.media)) {
          vehicleSummaryPayload.mediaUrls = vehicle.media.map((mediaItem) => mediaItem.url);
        }

        return vehicleSummaryPayload;
      }
    } catch (error) {
      console.error(`Error fetching details for vehicle ID ${vehicle.id}:`, error);
    }
    return null;
  }

  try {
    const data = await request('/api/vehicles.json'); // Replace with the actual API endpoint

    // Use Promise.all to fetch and format details for all vehicles concurrently
    const formattedData = await Promise.all(data.map(fetchAndFormatVehicleDetails));

    // Filter out any undefined values (vehicles without valid price information)
    const filteredData = formattedData.filter(Boolean);

    // Log the vehicleSummaryPayload data
    console.log(filteredData);

    return filteredData;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}
