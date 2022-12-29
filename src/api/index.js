// eslint-disable-next-line no-unused-vars
import { mergeVehicleData, noEmptyValues } from '../utils';
import { request } from './helpers';

const acceptableData = ({ status, value }) => status === 'fulfilled' && noEmptyValues(value, ['price']);
/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
// TODO: All API related logic should be made inside this function.
export default async function getData() {
  const vehicles = await request('/api/vehicles.json ');
  const apiUrls = vehicles.map(({ apiUrl }) => apiUrl);
  const vehicleDetailsResponse = await Promise.allSettled(apiUrls.map((url) => request(url))).catch((error) => console.log(error));
  const vehicleDetails = vehicleDetailsResponse.filter(acceptableData).map(({ value }) => (value));
  const vehicleSummaryPayload = mergeVehicleData(vehicles, vehicleDetails);
  return vehicleSummaryPayload;
}
