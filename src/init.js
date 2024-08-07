import { exec } from 'child_process';
import { writeFile } from 'fs';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

export async function init(jwt, docName) {
    try {
        await authenticateGoogle();
        const doc = createDocument(jwt, docName);
        createConfigFile(doc);
        createTransactionsFile();
        return "Your budget was initialized!"
    } catch (error) {
        console.log(error);
        return "There was an error initializing your budget :("
    }
}

async function createProject(id) {
    await exec(`gcloud projects create clifin-${id}`);
}

async function setDefaultProject(id) {
    await exec(`gcloud config set project clifin-${id}`);
}

async function enableSheetsApi() {
    await exec('gcloud services enable sheets.googleapis.com');
}

async function createServiceAccount() {
    await exec('gcloud iam service-accounts create clifin-app');
}

async function assignAccountRole(id) {
    await exec(`gcloud projects add-iam-policy-binding clifin-${id}
            --member="serviceAccount:clifin-app@clifin-${id}.iam.gserviceaccount.com
            --role="roles/editor`);
}

async function getAccountKey(id) {
    await exec(`gcloud iam service-accounts keys create ./credentials.json
            --iam-account=clifin-app@clifin-${id}.iam.gserviceaccount.com`);
}

async function authenticateGoogle() {
    const id = Math.floor(Math.random() * 1000000)
    createProject(id);
    setDefaultProject(id)
    enableSheetsApi();
    createServiceAccount();
    assignAccountRole(id);
    getAccountKey(id);
}

async function createDocument(jwt, docName) {
    return await GoogleSpreadsheet.createNewSpreadsheetDocument(jwt, { title: docName });
}

function createConfigFile(documentId) {
    const content = { documentId: documentId }
    const configFilePath = join(
        dirname(fileURLToPath(import.meta.url)),
        '..', 
        'config.json'
    );
    writeFile(configFilePath, JSON.stringify(content), err => {
        if (err) throw err;
    })
}

function createTransactionsFile() {
    const transactionFilePath = join(
        dirname(fileURLToPath(import.meta.url)),
        '..',
        'transactions.json'
    )
    writeFile(transactionFilePath, '', err => {
        if (err) throw err;
    })
}