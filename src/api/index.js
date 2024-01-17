/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
// TODO: All API related logic should be made inside this function.
export default async function getData() {
  // Generic function to get data from json files
  async function getDataFromJson(endpoint) {
    return fetch(endpoint)
      .then((response) => response.json())
      .then((responseJson) => Promise.all(responseJson.map((vehicle) => {
        // Iterate through the individual cars to get the complex
        return fetch(vehicle.apiUrl)
          .then((vehicleResponse) => (vehicleResponse.json()))
          .then((vehicleResponseJson) => ({ ...vehicle, ...vehicleResponseJson }))
          .catch(() => (vehicle));
      })))
      .then((vehicles) => vehicles.filter((vehicle) => vehicle.price))
      .catch(() => ([]));
  }

  // get initial list of vehicles
  const vehicles = await getDataFromJson('/api/vehicles.json');
  if (!vehicles) return [];

  return vehicles;
}
