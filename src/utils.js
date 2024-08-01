import fs from 'fs/promises';
import { JWT } from 'google-auth-library';

export async function getGoogleCreds() {
    try {
        const file = await fs.readFile('credentials.json', 'utf8');
        console.log('read file');
        const data = JSON.parse(file);
        jwt = new JWT({
            email: data.client_email,
            key: data.private_key,
            scopes: ['https://www.googleapis.com/auth/spreadsheets']
        });
        return jwt;
    } catch (err) {
        throw err;
    }
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