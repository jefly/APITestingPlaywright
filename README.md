# APITestingPlaywright

# Setup Guide
## Prerequisites: Installing NodeJs
## Version Guide: 
    NodeJs - v14.21.3
    Playwright - v1.46.1

### Step 1: Install neccessary packages
Clone the project and go to the root of the project. 
Run `npm intall` so that all the required packages (Playwright, dotenv, node-types) will be installed. </br>
Run `npx playwright install` to ensure the correct browser binaries are installed. </br>

### Step 2: Run the project

Run `npm test` which executes the test suite. </br>

### Step 3: See the Test Results

Run `npx playwright show-report` and it will open up a browser with the executed tests.
