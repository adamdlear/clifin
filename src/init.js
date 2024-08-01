import { exec } from 'child_process';
import { GoogleSpreadsheet } from 'google-spreadsheet';

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

export async function authenticateGoogle() {
    const id = Math.floor(Math.random() * 1000000)
    createProject(id);
    setDefaultProject(id)
    enableSheetsApi();
    createServiceAccount();
    assignAccountRole(id);
    getAccountKey(id);
}

export async function createDocument(jwt, docName) {
    return await GoogleSpreadsheet.createNewSpreadsheetDocument(jwt, { title: docName });
}