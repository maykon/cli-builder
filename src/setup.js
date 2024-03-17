import { prompt } from './prompt';

/**
 * Used to validate if the value informed is valid
 * 
 * @typedef {(value) => void} ParamInfoValidate
 * @param {*} value - The value to be validated
 * @throws {BaseError} Throw an error if the value is invalid (Can be used BaseError here)
 * @example
 * const validateName = (name) => {
 *   if (!name?.trim()?.length) throw new BaseError('Name is invalid!');
 * };
 * @returns {void}
 * 
*/

/**
 * The Params Info schema.
 * 
 * @typedef {Object} ParamsInfo
 * @property {string} ask - Define the question.
 * @property {*} value - Define the value to decide if will prompt the question (if value is null or empty).
 * @property {*} [default] - Define the default value if not present.
 * @property {ParamInfoValidate} [validate] - Define the function that will be use to validate the value
 */

/**
 * Helper to prompt all the params required to run some cli APP
 * 
 * @param {ParamsInfo} paramsInfo - The object with all the request params and validations
 * @param {*} params - The object with the initial values of the params
 * @returns Return the params with all the user values setted
 * @example
 * const params = { appId: process.env.APP_ID };
 * const paramsInfo = {
 *   appId: {
 *     ask: 'Set the App ID',
 *     value: params.appId,
 *     default: '123',
 *     validate: (value) => !value ? throw new BaseError('App ID is invalid') : true,
 *   },
 * };
 * const userParams = setupParams(paramsInfo, params);
 */
export const setupParams = async (paramsInfo, params = {}) => {
  const shouldRequestParams = Object.entries(paramsInfo)
    .map(([key, param]) => [key, { ...param, value: param.value?.trim() }])
    .filter(([_, param]) => !param.value?.length);

  if (shouldRequestParams.length) {
    console.info('💡 Setup step\n');
    for (const [key, param] of shouldRequestParams) {
      const response = (await prompt.question(param.ask)) || param.default;
      param?.validate?.(response);
      params[key] = response;
    };
    prompt.close();
    console.log();
  }

  return params;
};