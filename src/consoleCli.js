import { fork } from 'node:child_process';
import path from 'path';

let loadingBar;

/**
 * Some console helpers to allow control the loading and some cursor tasks
 * 
 * @example
 * import consoleCli from './consoleCli.js';
 * 
 * await consoleCli.loadingBarStart();
 * await new Promise((resolve) => setTimeout(resolve, 1000));
 * await consoleCli.loadingBarStart();
 */
export default {
  loadingBarStart: async () => {
    const modulePath = require.resolve('@maykoncapellari/cli-builder');
    console.log(modulePath);
    loadingBar = fork(path.resolve(modulePath, 'src/cli/loadingBar.js'));
    loadingBar.unref();
    await new Promise((resolve) => setTimeout(resolve, 500));
  },
  loadingBarStop: async () => {    
    loadingBar?.send('stop');
    loadingBar?.kill();
    loadingBar = null;
    process.stdout.cursorTo(0, process.stdout.rows);
    process.stdout.clearLine();
    await new Promise((resolve) => setTimeout(resolve, 250));
  },
  moveToStartRow: () => {
    process.stdout.cursorTo(0, process.stdout.rows);
  },
};