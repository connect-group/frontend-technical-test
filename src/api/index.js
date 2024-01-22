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
        return detailResponse;
      } catch (error) {
        console.error("Error fetching vehicle details:", error);
        return null; // Return null for unsuccessful responses (404 - /api/vehicle_problematic.json)
      }
    });

    const vehicleDetailsList = await Promise.all(detailPromises);

    const updatedVehicles = vehicleList
      .map((vehicle, index) => ({
        ...vehicle,
        details: vehicleDetailsList[index],
      }))
      .filter((vehicle) => vehicle.details && vehicle.details.price);

    return updatedVehicles;
  } catch (error) {
    console.error("Error in getData function:", error);
    throw error;
  }
}
