import * as readline from 'node:readline/promises';  // This uses the promise-based APIs
import { stdin as input, stdout as output } from 'node:process';

var closed = false;

const createPromptInterface = () => {
  closed = false;
  return readline.createInterface({ input, output })
    .on('close', () => {
      closed = true;
    });
};

var rl = createPromptInterface();

/**
 * Helper to make easy prompt some questions on cli
 * 
 * @example
 * var response = await prompt.question('Do you want to buy me a coffee?');
 * prompt.close();
 */
export const prompt = {
  question: (query, opt) => {
    if (closed) {
      rl = createPromptInterface();
    }
    return rl.question(query, opt);
  },
  close: () => rl.close(),
};