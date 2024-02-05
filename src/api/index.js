import { request } from './helpers';

const VEHICLES_LIST_API_URL = '/api/vehicles.json';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
// TODO: All API related logic should be made inside this function.
export default async function getData() {
  //   API Implementation
  let vehiclesData = [];

  try {
    vehiclesData = await request(VEHICLES_LIST_API_URL);
    if (!vehiclesData) {
      return [];
    }
  } catch (error) {
    throw new Error(`Error fetching vehicle list - ${error.message}`);
  }

  const detailsPromises = vehiclesData.map(async (vehicle) => {
    if (!vehicle.apiUrl) {
      // skip if no apiUrl is present
      return null;
    }

    try {
      const vehicleDetails = await request(vehicle.apiUrl);

      if (!vehicleDetails || !vehicleDetails.price) {
        // skip if no details or price is present
        return null;
      }

      // merge the vehicle and vehicleDetails to have full info
      return {
        ...vehicle,
        ...vehicleDetails,
      };
    } catch (error) {
      // ignore problematic vehicle details
      return null;
    }
  });

  try {
    const detailedVehicles = await Promise.all(detailsPromises);
    // To simulate a slow network, we add a delay of 2 seconds before returning the data
    // This is to showcase the loading state of the app
    await delay(2000);
    return detailedVehicles.filter((vehicle) => vehicle !== null);
  } catch (error) {
    return [];
  }
}
