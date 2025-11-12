import { useState, useEffect } from 'react';
import getData from '../../api';

/**
 * @typedef {Object} vehicleMetaProps
 * @property {Array<string>} bodyStyles - A list of available body styles
 * @property {Array<string>} drivetrain - A list of available drivetrains
 * @property {number} passengers - Number of passenger seats
 * @property {string} emissions - Emission description
 */

/**
 * @typedef {Object} vehicleThumbnails
 * @property {vehicleMedia} default - Thumbnail for most sizes
 * @property {vehicleMedia} mobile - Mobile-specific thumbnail
 */

/**
 * @typedef {Object} vehicleSummaryProps
 * @property {string} id - ID of the vehicle
 * @property {string} name - The name of the vehicle
 * @property {string} description - Description
 * @property {string} modelYear - Registration model year
 * @property {string} price - Price
 * @property {vehicleThumbnails} thumbnails - Object map of vehicle images
 * @property {vehicleMetaProps} meta - Object map of vehicle meta data
 */

/**
 *
 * @param {string} word
 * @returns {string}
 */
export function capitalize(word) {
  return `${word.slice(0, 1).toLocaleUpperCase()}${word.slice(1).toLocaleLowerCase()}`;
}

/**
 * Helper function to find media at different sizes.
 *
 * @param  {Array.vehicleMedia} mediaList
 * @param  {string} size
 * @return {vehicleMedia | undefined}
 */
export function findThumbnail(mediaList, size) {
  return mediaList.find(({ name, url }) => name === 'vehicle' && url.includes(size));
}

/**
 * Returns or generates a vehicle name.
 *
 * @param {import('../../api/api_docs').vehicleSummaryPayload} param0
 * @returns {string}
 */
export function getVehicleName({ id, name }) {
  // Handle a future change to the API return.
  if (name) {
    return name;
  }

  /*
   * Generate a name from the ID.
   * Assumes any model name longer than 2 characters is hyphenated.
   */
  const model = id.length > 2
    ? `${id.charAt(0)}-${id.slice(1)}`
    : id;

  // Assumes a Jaguar, given API stubs.
  return `Jaguar ${model.toLocaleUpperCase()}`;
}

/**
 * Transforms an API response into something nicer to work with as props.
 *
 * @param {vehicleSummaryPayload} vehicles
 * @returns vehicleProps
 */
export function transformToProps({ meta, ...summary }) {
  return {
    ...summary,

    meta: {
      ...meta,

      bodystyles: meta.bodystyles.map(capitalize),
      emissions: meta.emissions.template.replace('$value ', meta.emissions.value)
    },
    name: getVehicleName(summary),
    thumbnails: {
      default: findThumbnail(summary.media, '16x9'),
      mobile: findThumbnail(summary.media, '1x1')
    }
  };
}

export default function useData() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getData()
      .then((response) => setVehicles(response.map(transformToProps)))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return [
    loading,
    error,
    vehicles,
  ];
}
