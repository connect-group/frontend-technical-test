/**
 * A utility function to make a network api call
 *
 * @param {string} apiUrl
 * @return {Promise<Object>}
 */
export async function request(apiUrl) {
  const response = await fetch(apiUrl).then((result) => {
    if (!result.ok) {
      throw new Error('Network response was not ok');
    }

    return result.json();
  }).catch((error) => {
    console.log('Error getting details', error);
  });

  return response;
}
