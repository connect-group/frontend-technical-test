/**
 * A utility function to make a network api call
 *
 * @param {string} apiUrl
 * @return {Promise<Object>}
 */
export async function request(apiUrl) {
  const response = await fetch(apiUrl);
  return response.json();
}

export function noEmptyValues(values) {
  const valuesToCheck = ['price'];
  const notEmpty = (value) => values[value] !== '' && values[value] !== undefined && values[value] !== null;
  return valuesToCheck.some(notEmpty);
}
