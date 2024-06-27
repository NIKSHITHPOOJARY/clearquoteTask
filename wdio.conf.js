exports.config = {
    // ... other configuration options

    // Appium configuration
    appium: {
        // Specify the path to the locally installed Appium executable
        command: 'node_modules/.bin/appium', // Adjust the path if necessary
    },

    capabilities: [{
        // capabilities for local Appium web tests on an Android Emulator
        platformName: 'Android',
        browserName: 'Chrome',
        'appium:deviceName': 'Android GoogleAPI Emulator',
        'appium:platformVersion': '12.0',
        'appium:automationName': 'UiAutomator2'
    }],

    // ... other configuration options

    services: ['appium'],

    // ... other configuration options

    framework: 'mocha',

    // ... other configuration options

    reporters: ['spec'],

    // ... other configuration options

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    // ... other configuration options

};
