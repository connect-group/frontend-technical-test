/**
 * @typedef {Object} vehicleMedia
 * @property {string} name - Name of image
 * @property {string} url - URL of image
 */

/**
 * @typedef {Object} vehicleMeta
 * @property {Array<string>} bodystyles - A list of available body styles
 * @property {Array<string>} drivetrain - A list of available drivetrains
 * @property {number} passengers - Number of passenger seats
 * @property {{ template: string, value: number }} emissions - Emission description
 */

/**
 * @typedef {Object} vehicleSummaryResponse
 * @property {string} id - ID of the vehicle
 * @property {string} apiUrl - API URL for price, description & other details
 * @property {string} description - Description
 * @property {string} price - Price
 * @property {Array.<vehicleMedia>} media - Array of vehicle images
 */

/**
 * @typedef {Object} vehicleDetailResponse
 * @property {string} id - ID of the vehicle
 * @property {string} description - Description
 * @property {string} price - Price
 * @property {vehicleMeta} meta - Vehicle metadata
 */

/**
 * @typedef {Object} vehicleSummaryPayload
 * @property {string} id - ID of the vehicle
 * @property {string} apiUrl - API URL for price, description & other details
 * @property {string} description - Description
 * @property {string} price - Price
 * @property {Array.<vehicleMedia>} media - Array of vehicle images
 * @property {vehicleMeta} meta - Vehicle metadata
 */
