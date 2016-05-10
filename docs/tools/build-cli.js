/* eslint no-process-exit: 0 */

import 'colors';
import docs from '../app/build';
import { setExecOptions } from './exec';

let buildProcess = docs()

buildProcess
  .catch(err => {
    if (err.stack) {
      console.error(err.stack.red);
    } else {
      console.error(err.toString().red);
    }
    process.exit(1);
  });
