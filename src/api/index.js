import { request } from './helpers';

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
export default async function getData(apiUrl) {
  try {
    // eslint-disable-next-line no-console
    console.log('🔄', apiUrl);
    const data = await request(apiUrl);
    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching data:', error, apiUrl);
    throw error; // Re-throw the error so it can be caught and handled by the caller
  }
}
