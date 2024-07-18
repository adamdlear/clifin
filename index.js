const commander = require('commander');
const googleAuth = require('google-auth-library');
const init = require('./init');

var jwt;

program = commander.Command()

program
    .name('init')
    .argument("<sheet-name", 'name of spreadsheet')
    .description('Set up application')
    .action((name) => {
        init.setupGoogle()
        jwt = new googleAuth.JWT({
            email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            key: process.env.GOOGLE_PRIVATE_KEY,
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });
        doc = init.createDocument(jwt, name);
    });
