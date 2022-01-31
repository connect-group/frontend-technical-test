/**
 * A utility function to make a network api call
 *
 * @param {string} apiUrl
 * @return {Promise<Object>}
 */
export async function request(vehicle) {
  let finalData = {};
  try {
    const response = await fetch(vehicle.apiUrl);
    finalData = {
      ...vehicle,
      ...(await response.json()),
    };
  } catch (err) {
    console.log('Error :', err);
  }
  return finalData;
}

export function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
