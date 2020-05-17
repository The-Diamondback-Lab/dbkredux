/**
 * A custom error type that adds an additional "HTTP status" code property
 */
class ValidationError extends Error {
  /**
   * @param {string} msg Error message
   * @param {number} statusCode HTTP response status
   */
  constructor(msg, statusCode) {
    super(msg)
    this.statusCode = statusCode
  }
}

module.exports = ValidationError
