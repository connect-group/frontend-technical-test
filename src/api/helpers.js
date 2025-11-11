/**
 * A utility function to make a network api call
 *
 * @param {string} apiUrl
 * @return {Promise<Object>}
 */
export async function request(apiUrl) {
  try {
    const response = await fetch(apiUrl, {
      // Might not be needed here, but may be an API requirement
      headers: { Accepts: 'application/json' }
    });

    return !response.ok
      // Returning an empty object to match the test requirements, but could error log here.
      ? {}
      : response.json();
  } catch (error) {
    return {};
  }
}
