import { JWT } from 'google-auth-library';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export function getGoogleCreds() {
    const credsFilePath = path.join(
        path.dirname(fileURLToPath(import.meta.url)),
        '..', 
        'credentials.json'
    );
    fs.readFile(credsFilePath, 'utf8', (err, data) => {
        if (err) throw err;
        const creds = JSON.parse(data);
        const jwt = new JWT({
            email: creds.client_email,
            key: creds.private_key,
            scopes: ['https://www.googleapis.com/auth/spreadsheets']
        })
        console.log(jwt);
        return jwt;
    });    
}

async function init(spreadsheetName) {
    // Create spreadsheet
    // Save spreadsheetId in config.json
    // Log the link to the spreadsheet
}

function createFile() {
    fs.open('transactions.json', 'w', (err) => {
        if (err) throw err;
    });
}

function createConfig() {
    // read command (clifin config)
    // accept configs from user
    // write file to dir
}

function createSheet() {
    // read credentials
    // create file in sheets
    // create sheet
}