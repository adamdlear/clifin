import { authenticateGoogle, createDocument } from './src/init.js';
import { program } from 'commander';

import { getGoogleCreds } from './src/utils.js';

program
    .name('init')
    .argument("<sheet-name", 'name of spreadsheet')
    .description('Set up application')
    .action((name) => {
        authenticateGoogle()
        const jwt = getGoogleCreds()
        doc = createDocument(jwt, name);
    });
