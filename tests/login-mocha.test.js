import {remote, wdOpts, AndroidHome, DemoBase, DemoLogin} from '../index.js';

const driver = await remote(wdOpts);
const androidHome = new AndroidHome(driver);
const demoBase = new DemoBase(driver);
const demoLogin = new DemoLogin(driver);

describe('Login', () => {
    it('Open WebDriverIO App', async () => {
        await androidHome.openDemo();
    });

    it('Fail to Login', async () => {
        await demoBase.clickLogin();
        await demoLogin.userLogin();
    });

    it('Navigate to Home Page', async () => {
        await demoBase.clickHome();
    });
});