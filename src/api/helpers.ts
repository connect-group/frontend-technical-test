/**
 * A utility function to make a network api call
 *
 * @param {string} apiUrl
 * @return {Promise<T>}
 */
export async function request<T>(apiUrl: string): Promise<T> {
    try {
        const response = await fetch(apiUrl);
        const result: T = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}
