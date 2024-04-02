import * as dataUtils from './data.js';
import * as promiseUtils from './promises.js';

/**
 * Class Utils
 * 
 * Utilities methods to help handle some behaviours
 * 
 * @class Utils
 * 
 * @example
 * const chunk = Utils.data.buildChunkData([1,2,3,4,5], 3);
 * console.log(chunk); // [[1,2,3], [4,5]]
 * 
 * const promises = await Promise.allSettled([]);
 * const values = Utils.promises.retrieveFulfilledValue(promises);
 * console.log(values); // []
 */
export default class Utils {
  static data = dataUtils;
  static promises = promiseUtils;
}