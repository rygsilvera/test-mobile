const objects = {
  email: '//android.widget.EditText[@content-desc="input-email"]',
  password: '//android.widget.EditText[@content-desc="input-password"]',
  login: '//android.view.ViewGroup[@content-desc="button-LOGIN"]/android.view.ViewGroup'
};

export class DemoLogin {
    constructor(driver) {
      this.email = driver.$(objects.email);
      this.password = driver.$(objects.password);
      this.login = driver.$(objects.login);
      this.hold = 10000;
    };

    async userLogin() {
      await this.email.waitForExist({timeout:this.hold});
      await this.email.addValue('testUser');
      await this.password.waitForExist({timeout:this.hold});
      await this.password.addValue('!A123');
      await this.login.waitForExist({timeout:this.hold});
      await this.login.click();
    };
};