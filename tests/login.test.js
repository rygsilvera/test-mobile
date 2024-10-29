import {remote, wdOpts, AndroidHome, DemoBase, DemoLogin} from '../index.js';

//const pauseTime = 10000;

async function loginTest() {
    const driver = await remote(wdOpts);
    const androidHome = new AndroidHome(driver);
    const demoBase = new DemoBase(driver);
    const demoLogin = new DemoLogin(driver);

    await androidHome.openDemo();
    await demoBase.clickLogin();
    await demoLogin.userLogin();
    await demoBase.clickHome();

    //await driver.pause(pauseTime);
};

loginTest().catch(console.error);