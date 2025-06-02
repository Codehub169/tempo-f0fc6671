#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Navigate to the script's directory (optional, but good practice)
# cd "$(dirname "$0")"

# Inform the user
echo "Installing dependencies..."
npm install

echo "Building the project..."
npm run build

echo "Starting the application on port 9000..."
# The package.json already specifies port 9000 for the start script
npm start
