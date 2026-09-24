/**
 * @typedef {Object} PlanningRequest
 * @property {string} prompt
 */

/**
 * @typedef {Object} AgentStatus
 * @property {string} agent - e.g. "planner", "research", "activity"
 * @property {'waiting' | 'working' | 'completed' | 'error'} status
 * @property {string} message
 */

/**
 * @typedef {Object} Trip
 * @property {string} id
 * @property {string} image
 * @property {string} title
 * @property {string} location
 * @property {string} dates
 * @property {number} travelers
 * @property {string} price
 * @property {number} progress
 * @property {'Upcoming' | 'Planning'} status
 * @property {boolean} isDraft
 * @property {string} [nextStep]
 */

/**
 * @typedef {Object} Destination
 * @property {string} id
 * @property {string} image
 * @property {string} title
 * @property {string} location
 * @property {string} price
 * @property {string} bestTime
 * @property {boolean} saved
 * @property {string[]} categories
 */

/**
 * @typedef {Object} Recommendation
 * @property {string} id
 * @property {string} image
 * @property {string} title
 * @property {string} location
 * @property {string} reason
 * @property {string[]} tags
 * @property {boolean} saved
 */

/**
 * @typedef {Object} RecentActivity
 * @property {string} id
 * @property {string} message
 * @property {string} timestamp
 * @property {boolean} dismissed
 */

/**
 * @typedef {Object} Notification
 * @property {string} id
 * @property {string} message
 * @property {boolean} read
 */

export default {};
