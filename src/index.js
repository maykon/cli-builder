import consoleCli from './consoleCli.js';
import BaseError from './base.error.js';
import { prompt } from './prompt.js';
import { spawn } from './spawnAsync.js';
import { setupParams } from './setup.js';

export {
  BaseError,
  consoleCli,
  prompt,
  setupParams,
  spawn,
};

await prompt.question('test?');
await prompt.question('test 2?');
await prompt.close();


await prompt.question('test 3?');
await prompt.question('test 4?');
await prompt.close();

await prompt.question('test 5?');
await prompt.question('test 6?');
await prompt.close();