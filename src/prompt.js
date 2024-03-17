import * as readline from 'node:readline/promises';  // This uses the promise-based APIs
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

/**
 * Helper to make easy prompt some questions on cli
 * 
 * @example
 * var response = await prompt.question('Do you want to buy me a coffee?');
 * prompt.close();
 */
export const prompt = {
  question: rl.question.bind(rl),
  close: rl.close.bind(rl),
};