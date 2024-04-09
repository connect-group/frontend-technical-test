/**
 * @typedef {Object} vehicleMedia
 * @property {string} name - Name of image
 * @property {string} url - URL of image
 */

/**
 * @typedef {Object} vehicleSummaryPayload
 * @property {string} id - ID of the vehicle
 * @property {string} apiUrl - API URL for price, description & other details
 * @property {string} description - Description
 * @property {string} price - Price
 * @property {vehicleMeta} meta - Metadata
 * @property {Array.<vehicleMedia>} media - Array of vehicle images
 */

/**
 * @typedef {Object} vehicleMeta
 * @property {number} passangers - Max passengers
 * @property {string[]} drivetrain - Drive trains
 * @property {string[]} bodystyles - Body Styles
 * @property {Emissions} emissions - Emissions
 */

/**
 * @typedef {Object} Emissions
 * @property {number} value - Value
 * @property {string} template - Text Template
 */
