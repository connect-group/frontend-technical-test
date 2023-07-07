/**
 * A utility function to make a network api call
 *
 * @param {string} apiUrl
 * @return {Promise<Object>}
 */
export async function request(apiUrl) {
  try {
    const apiResponse = await fetch(apiUrl);
    // if (!apiResponse.ok) {
    //   throw new Error(`Request failed with status ${apiResponse.status}`);
    // }
    const data = await apiResponse.json();
    return data;
  } catch (error) {
    // throw error;
    // throw new Error('Request failed with status');
    return Promise.reject(error);
  }
}
