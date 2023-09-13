/**
 * A utility function to make a network api call
 *
 * @param {string} apiUrl
 * @return {Promise<Object>}
 */

export function request(apiUrl) {
  return new Promise((resolve, reject) => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => reject(new Error(`Error: ${error}`)));
  });
}
