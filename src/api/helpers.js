/**
 * A utility function to make a network api call
 *
 * @param {string} apiUrl
 * @return {Promise<Object>}
 */
export async function request(apiUrl) {
  return apiUrl;
}

/**
 * A utility function to filter out broken apiUrl in vehicles array
 *
 * @param {Array.<vehicleSummaryPayload>} vehicles
 * @param {string} apiUrl
 * @return {Array.<vehicleSummaryPayload>}
 */
export const filterOutApiUrl = (vehicles, apiUrl) => {
  return vehicles.filter((v) => v.apiUrl !== apiUrl);
}

/**
 * Pull vehicle information by id
 *
 * @param {string} id
 * @return {Promise<vehicleSummaryPayload>}
 */
export const getDataDetail = async (id) => {
  const vehicle = await import(`../../public/api/vehicle_${id}`);
  return vehicle;
};

export const mapVehicleWithExtraProps = async (vehicleParam, props) => {
  const vehicle = { ...vehicleParam };
  const detail = await getDataDetail(vehicleParam.id);

  props.forEach((prop) => {
    vehicle[prop] = detail[prop];
  });

  return vehicle;
};

export const vehicleHasPrice = (vehicleParam) => {
  return Boolean(vehicleParam.price);
};

export const filterVehicles = async (vehicles, brokenApiUrl) => {
  let filtered = filterOutApiUrl(vehicles, brokenApiUrl);

  filtered = await Promise.all(filtered.map((i) => mapVehicleWithExtraProps(i, ['price', 'description'])));
  filtered = filtered.filter(vehicleHasPrice);

  return filtered;
};
