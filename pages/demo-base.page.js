const objects = {
  home: '//android.view.View[@content-desc="Home"]',
  login: '//android.view.View[@content-desc="Login"]'
};

export class DemoBase {
    constructor(driver) {
      this.home = driver.$(objects.home);
      this.login = driver.$(objects.login);
      this.hold = 10000;
    };

    async clickHome() {
      await this.home.waitForExist({timeout:this.hold});
      await this.home.click();
    };

    async clickLogin() {
      await this.login.waitForExist({timeout:this.hold});
      await this.login.click();
    };
};