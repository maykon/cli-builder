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
  constructor(message) {
    super(message);
    this.name = 'BaseError';
    if (process.env.NODE_ENV === 'production') {
      this.stack = null;
    }
  }
}