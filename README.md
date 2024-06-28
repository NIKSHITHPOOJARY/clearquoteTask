# ClearQuote Assignment

This repository contains the assignment to automate the testing of the ClearQuote Assessment mobile app using Node.js and Appium. The automation script performs tasks such as logging in, navigating through the app, performing a vehicle inspection, capturing images, and completing the inspection process.


## Description

The ClearQuote Assignment aims to automate the testing process for the ClearQuote Assessment app available on the Google Play Store. The automation script uses WebdriverIO and Appium to perform various tasks within the app.


## Setup 

To set up the project locally, follow these steps:

1. **Clone the repository:**

    ```sh
    git clone https://github.com/NIKSHITHPOOJARY/clearquoteTask.git
    cd clearquoteTask
    ```

2. **Install dependencies:**

    Make sure you have Node.js installed. Then run:

    ```sh
    npm install
    ```

3. **Setup WebdriverIO configuration:**

    Ensure you have a valid `wdio.conf.js` file in your project root. This file contains configuration settings for running WebdriverIO tests.

4. **Create `.env` file:**

    Create a `.env` file in the root directory to store environment variables such as app credentials and Appium server configurations.

## Usage

To use the automation script, make sure all dependencies are installed and the `wdio.conf.js` file is properly configured


## Running Tests

To run the tests, use the following command:

```sh
npx wdio run wdio.conf.js
```

## Images 

<p>
  <img src="/pic1.jpeg" width="300"/>
  <img src="/pic2.jpeg" width="300"/>
</p>





