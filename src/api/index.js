// eslint-disable-next-line no-unused-vars
import { noEmptyValues, request } from './helpers';

const acceptableData = ({ status, value }) => status === 'fulfilled' && noEmptyValues(value);
/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
// TODO: All API related logic should be made inside this function.
export default async function getData() {
  const vehicles = await request('/api/vehicles.json ');
  const apiUrls = vehicles.map(({ apiUrl }) => apiUrl);
  const vehicleDetails = await Promise.allSettled(apiUrls.map((url) => request(url))).catch((error) => console.log(error));
  const filteredVehicles = vehicleDetails.filter(acceptableData).map(({ value }) => (value));
  const vehicleSummaryPayload = filteredVehicles.map((data) => {
    const vehicle = { ...data };
    const match = vehicles.find((obj) => data.id === obj.id);
    if (match) {
      vehicle.media = match.media;
      vehicle.modelYear = match.modelYear;
    }
    return vehicle;
  });
  return vehicleSummaryPayload;
}
