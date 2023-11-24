// eslint-disable-next-line no-unused-vars
import { request } from './helpers';

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
// TODO: All API related logic should be made inside this function.
export default async function getData() {
  const apiUrl = '/api/vehicles.json';
  try {
    const response = await request(apiUrl);

    // console.log({ response });

    if (!response.length) {
      throw new Error('No vehicles found');
    }

    // each data item needs to do a request to get the details from .apiUrl
    const promises = response
      .filter((item) => item.apiUrl !== undefined)
      .map((item) => request(item.apiUrl));

    const results = await Promise.allSettled(promises);
    const successfulResults = results.filter(
      (result) => result.status === 'fulfilled',
    );

    const dataWithDetails = response.map((item, index) => {
      const details = successfulResults[index]
        ? successfulResults[index].value
        : null;
      return {
        ...item,
        ...details,
      };
    });
    return dataWithDetails.filter((item) => item.price !== undefined && item.price !== '');
  } catch (error) {
    throw new Error(error.message);
  }
}
