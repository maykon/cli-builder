/**
 * BaseError
 * 
 * It's a base exception that remove the stack when is in production env
 * @class BaseError
 * @example
 * 
 * throw new BaseError('I am an error!'); * 
 */
export default class BaseError extends Error {
  error;

  /**
   * 
   * @constructor
   * @param {string} message 
   * @param {*} error 
   */
  constructor(message, error = null) {
    super(message);
    this.name = 'BaseError';
    this.error = error;
    if (process.env.NODE_ENV === 'production') {
      this.stack = null;
    }
  }
}