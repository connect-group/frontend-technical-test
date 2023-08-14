/**
 * A utility function to make a network api call
 *
 * @param {string} apiUrl
 * @return {Promise<Object>}
 */
export async function request(apiUrl) {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return [response, data];
}
