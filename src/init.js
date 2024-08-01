import { exec } from 'child_process';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';

export async function init(jwt, docName) {
    await authenticateGoogle();
    const doc = createDocument(jwt, docName);
    createConfigFile(doc);
    createTransactionsFile();
}

async function createProject(id) {
    await exec(`gcloud projects create clifin-${id}`);
}

async function setDefaultProject(id) {
    await exec(`gcloud config set project clifin-${id}`);
}

async function enableSheetsApi() {
    await execPromise('gcloud services enable sheets.googleapis.com');
}

async function createServiceAccount() {
    await execPromise('gcloud iam service-accounts create clifin-app');
}

async function assignAccountRole(id) {
    await execPromise(`gcloud projects add-iam-policy-binding clifin-${id}
            --member="serviceAccount:clifin-app@clifin-${ID}.iam.gserviceaccount.com
            --role="roles/editor`);
}

async function getAccountKey(id) {
    await execPromise(`gcloud iam service-accounts keys create ./credentials.json
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
    const configFilePath = path.join(
        path.dirname(fileURLToPath(import.meta.url)),
        '..', 
        'config.json'
    );
    fs.writeFile(configFilePath, content, err => {
        if (err) throw err;
    })
}

function createTransactionsFile() {
    const transactionFilePath = path.join(
        path.dirname(fileURLToPath(import.meta.url)),
        '..',
        'transactions.json'
    )
    fs.writeFile(transactionFilePath, '', err => {
        if (err) throw err;
    })
}