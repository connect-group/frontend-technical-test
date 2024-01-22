/**
 * A utility function to make a network API call
 *
 * @param {string} apiUrl - The URL of the API endpoint
 * @return {Promise<Object>} - A promise that resolves to the parsed JSON response
 */
export async function request(apiUrl) {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(
        `Network response was not ok: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Error in request function:", error);
    throw error;
  }
}
