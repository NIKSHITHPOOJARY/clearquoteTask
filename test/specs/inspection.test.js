const { remote } = require('webdriverio');

let driver;

const options = {
    path: '/wd/hub',
    port: 4723,
    capabilities: {
        platformName: 'Android',
        platformVersion: '14',
        deviceName: 'OnePlus Nord CE 2 Lite 5G',
        appPackage: 'io.clearquote.assessment',
        appActivity: '.MainActivity',
        automationName: 'UiAutomator2'
    }
};

describe('ClearQuote Assessment App Test', () => {
    before(async () => {
        driver = await remote(options);
    });

    it('should login to the app', async () => {
        const userIdInput = await driver.$('android=new UiSelector().resourceId("io.clearquote.assessment:id/userId")');
        await userIdInput.setValue('user01');

        const passwordInput = await driver.$('android=new UiSelector().resourceId("io.clearquote.assessment:id/password")');
        await passwordInput.setValue('0987');

        const loginButton = await driver.$('android=new UiSelector().resourceId("io.clearquote.assessment:id/loginButton")');
        await loginButton.click();
    });

    it('should start inspection', async () => {
 
        await driver.pause(5000); 

        const inspectionIcon = await driver.$('android=new UiSelector().resourceId("io.clearquote.assessment:id/inspectionIcon")');
        await inspectionIcon.click();
    });

    it('should enter vehicle details', async () => {
        const vehicleInput = await driver.$('android=new UiSelector().resourceId("io.clearquote.assessment:id/vehicleInput")');
        await vehicleInput.setValue('Test123');

        const nextButton = await driver.$('android=new UiSelector().resourceId("io.clearquote.assessment:id/nextButton")');
        await nextButton.click();
    });

    it('should select vehicle make and model', async () => {
        const makeDropdown = await driver.$('android=new UiSelector().resourceId("io.clearquote.assessment:id/makeDropdown")');
        await makeDropdown.click();
        const makeOption = await driver.$('android=new UiSelector().text("Maruti Suzuki")');
        await makeOption.click();

        const modelDropdown = await driver.$('android=new UiSelector().resourceId("io.clearquote.assessment:id/modelDropdown")');
        await modelDropdown.click();
        const modelOption = await driver.$('android=new UiSelector().text("ALTO")');
        await modelOption.click();

        const nextButton = await driver.$('android=new UiSelector().resourceId("io.clearquote.assessment:id/nextButton")');
        await nextButton.click();
    });

    it('should capture front view image', async () => {
        const captureButton = await driver.$('android=new UiSelector().resourceId("io.clearquote.assessment:id/captureButton")');
        await captureButton.click();

        await driver.pause(5000); 

        const okayButton = await driver.$('android=new UiSelector().resourceId("io.clearquote.assessment:id/okayButton")');
        await okayButton.click();
    });

    it('should complete inspection', async () => {
        const nextButton = await driver.$('android=new UiSelector().resourceId("io.clearquote.assessment:id/nextButton")');
        await nextButton.click();
    });

    after(async () => {
        await driver.deleteSession();
    });
});
