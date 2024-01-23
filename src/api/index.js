import { request } from "./helpers";

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
export default async function getData() {
  try {
    const response = await request("api/vehicles.json");
    const vehicleList = response || [];

    const detailPromises = vehicleList.map(async (vehicle) => {
      try {
        const detailResponse = await request(vehicle.apiUrl);
        return {
          ...vehicle,
          ...detailResponse,
        };
      } catch (error) {
        console.warn("Error fetching vehicle details:", error);
        return null; // Return null for unsuccessful responses (404 - /api/vehicle_problematic.json)
      }
    });

    const vehicleDetailsList = await Promise.all(detailPromises);
    return vehicleDetailsList.filter((vehicle) => vehicle && vehicle.price);
  } catch (error) {
    console.warn("Error in getData function:", error);
    throw error;
  }
}
