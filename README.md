# Time Keeper

This is a Node.js script that uses the Puppeteer library to automate a web browser and extract the value of a particular HTML input field for Leave Status. The script logs into a website using a username, password, and system ID provided in a configuration file, navigates to a "Leave Status" page, and extracts the value of a particular HTML input field.

## Requirements
Node.js (v10 or later)
npm or yarn
Installation
Clone the repository to your local machine.
Open a terminal and navigate to the project folder.
Run npm install or yarn install to install the project dependencies.
## Usage
Open the config.js file and replace the sample credentials with your actual login details.
Run the command node index.js to start the script.
The script will navigate to the Leave Status page and extract the value of a particular HTML input field.
The extracted value will be printed to the console.
Configuration
The config.js file contains the following configuration options:

username: The username for logging into the website.
password: The password for logging into the website.
url: The URL of the website to scrape.
system_id: The system ID for the website.
## Customization
If you want to extract a different value from the website, you will need to modify the script accordingly. You can do this by updating the CSS selector used to find the HTML input field and updating the code that extracts the value from the input field.

## Troubleshooting
If you encounter any issues while running the script, please check the following:

Ensure that you have provided valid login credentials in the config.js file.
Ensure that the website you are trying to scrape is accessible and that the URL is correct.
Ensure that you have installed all the required dependencies by running npm install or yarn install.
## Disclaimer
This script is provided as-is, without any warranty or guarantee of its performance or suitability for any specific purpose. The use of this script is entirely at your own risk. Please ensure that you have the necessary permissions to access and scrape the website before running this script.
