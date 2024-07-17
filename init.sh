#!/bin/bash

ID=$RANDOM

# Create project
gcloud projects create clifin-$ID

# Set clifin as default project
gcloud config set project clifin-$ID

# Enable Sheets api
gcloud services enable sheets.googleapis.com

# Create service account
gcloud iam service-accounts create clifin-app

# Assign role to service account
gcloud projects add-iam-policy-binding clifin-$ID \
    --member="serviceAccount:clifin-app@clifin-${ID}.iam.gserviceaccount.com" \
    --role="roles/editor"

# Create and download service account key
gcloud iam service-accounts keys create ./credentials.json \
    --iam-account=clifin-app@clifin-$ID.iam.gserviceaccount.com