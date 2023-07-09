/**
 * A utility function to make a network api call
 *
 * @param {string} apiUrl
 * @return {Promise<Object>}
 */
export async function request(apiUrl) {
  try {
    const apiResponse = await fetch(apiUrl);
    const data = await apiResponse.json();
    return data;
  } catch (error) {
    throw new Error(`Request failed: ${error.message}`);
  }
}
