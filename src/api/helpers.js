/**
 * A utility function to make a network api call
 *
 * @param {string} apiUrl
 * @return {Promise<Object>}
 */

export async function request(v) {
    let result = {};
    try {
        const response = await fetch(v.apiUrl);
        result = {
            ...v,
            ...(await response.json()),
        };
    } catch (error) {
        console.log(error);
    }
    return result;
}
