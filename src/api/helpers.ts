/**
 * A utility function to make a network api call
 *
 * @param {string} apiUrl
 * @return {Promise<Object>}
 */
export async function request<Object>(apiUrl: string): Promise<Object> {
  try {
      const response = await fetch(apiUrl);      
      const result: Object = await response.json();
      return result;
  } catch (error) {   
      throw error;
  }
}