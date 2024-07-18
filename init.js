const fs = require('fs');
const exec = require('child_process').exec;
const GoogleSpreadSheet = require('google-spreadsheet');

export function setupGoogle() {
    exec('sh init.js');
    fs.readFile('credenials.json', (err, data) => {
        if (err) throw error;
        data = JSON.parse(data);
        process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL = data.client_email;
        process.env.GOOGLE_PRIVATE_KEY = data.private_key;
    });
}

export async function createDocument(jwt, docName) {
    return await GoogleSpreadSheet.createNewSpreadsheetDocument(jwt, { title: spreadsheetName });
}

function createConfigFile(data) {

}


