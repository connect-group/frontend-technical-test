/**
 * A utility function to make a network api call
 *
 * @param {string} apiUrl
 * @return {Promise<Object>}
 */
export async function request(apiUrl) {
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText} at ${apiUrl}`);
  }

  return response.json();
}
