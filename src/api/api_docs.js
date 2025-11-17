/**
 * @typedef {Object} vehicleMedia
 * @property {string} name - Name of image
 * @property {string} url - URL of image
 */
/**
 * @typedef {Object} VehicleEmissions
 * @property {string} template - Emission description template
 * @property {number} value - Emission value in g/km
 */

/**
 * @typedef {Object} VehicleMeta
 * @property {number} passengers - Number of passengers
 * @property {string[]} drivetrain - Array of drivetrain types
 * @property {string[]} bodystyles - Array of body styles
 * @property {VehicleEmissions} emissions - Vehicle emissions data
 */

/**
 * @typedef {Object} vehicleSummaryPayload
 * @property {string} id - ID of the vehicle
 * @property {string} apiUrl - API URL for price, description & other details
 * @property {string} description - Description
 * @property {string} price - Price
 * @property {Array.<vehicleMedia>} media - Array of vehicle images
 * @property {vehicleMeta} meta - Vehicle Meta
 */
