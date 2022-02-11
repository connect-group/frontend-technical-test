/**
 * A utility function to make a network api call
 *
 * @param {string} apiUrl
 * @return {Promise<Object>}
 */
export async function request(apiUrl) {
  const res = await fetch(apiUrl);
  if (res.ok) {
    return res.json();
  }

  throw new Error(res.statusText || res.status);
}
