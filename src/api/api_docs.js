/**
 * @typedef {Object} vehicleMedia
 * @property {string} name - Name of image
 * @property {string} url - URL of image
 */

/**
 * @typedef {Object} emissions
 * @property {string} template - Template string
 * @property {string} value - Occurrence value
 */

/**
 * @typedef {Object} vehicleMeta
 * @property {string} passengers - Quantity of passengers
 * @property {Array.<string>} drivetrain - Drivetrain
 * @property {Array.<string>} bodystyles - Bodystyles
 * @property {Object.<emissions>} emissions - Emissions template
 */

/**
 * @typedef {Object} vehicleSummaryPayload
 * @property {string} id - ID of the vehicle
 * @property {string} apiUrl - API URL for price, description & other details
 * @property {string} description - Description
 * @property {string} price - Price
 * @property {Array.<vehicleMedia>} media - Array of vehicle images
 * @property {Object.<vehicleMeta>} meta - Vehicle meta data
 */
