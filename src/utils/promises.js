/**
 * Retrieve the value from the promise by status (fulfilled/rejected)
 * 
 * @param {fulfilled|rejected} statusPromise 
 * @returns {any[]} Retrieve the values from the status defined
 * 
 * @example
 * const promises = [Promise.resolve(1), Promise.resolve(2), Promise.reject(3)];
 * const results = await Promise.allSettled(promises);
 * const fulfilledValues = retrieveValueByStatus('fulfilled')(results);
 * console.log(fulFilledValues); // [1,2]
 */
const retrieveValueByStatus = (statusPromise) => (promises) => {
  return promises.filter(({ status }) => status === statusPromise).map(({ value }) => value);
};

export const retrieveFulfilledValue = retrieveValueByStatus('fulfilled');
export const retrieveRejectedValue = retrieveValueByStatus('rejected');