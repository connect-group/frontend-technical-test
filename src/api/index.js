import { request } from './helpers';

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
export default async function getData() {
  const url = '/api/vehicles.json';

  return request(url)
    .then(async (data) => {
      const promises = data.map((res) => request(res.apiUrl));

      return Promise.allSettled(promises).then((carInfos) => data
        .map((item, index) => {
          const { value, status } = carInfos[index];
          return status === 'fulfilled' ? { ...item, ...value } : false;
        })
        .filter((item) => item && item.price));
    })
    .catch((err) => {
      throw new Error(err);
    });
}
