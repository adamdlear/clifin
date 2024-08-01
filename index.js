import { program } from 'commander';

import { init } from './src/init.js';
import { getGoogleCreds } from './src/utils.js';

program
    .name('init')
    .argument("<sheet-name", 'name of spreadsheet')
    .description('Set up application')
    .action((name) => {
        const jwt = getGoogleCreds()
        init(jwt, name)
    });
