const objects = {
  chrome: '//android.widget.TextView[@content-desc="Chrome"]',
  demo: '//android.widget.TextView[@content-desc="wdiodemoapp"]'
};

export class AndroidHome {
    constructor(driver) {
      this.chromeIcon = driver.$(objects.chrome);
      this.demo = driver.$(objects.demo);
      this.hold = 10000;
    };

    async openChromeApp() {
      await this.chrome.waitForExist({timeout:this.hold});
      await this.chrome.click();
    };

    async openDemo() {
      await this.demo.waitForExist({timeout:this.hold});
      await this.demo.click();
    };
};