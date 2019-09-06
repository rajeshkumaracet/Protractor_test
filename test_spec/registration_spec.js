let {
  registration,
  registrationForm_validation,
  logout
} = require("../pages/registration_page");

const TestData = require("../json/registrationTestData.json")


describe("Automating Register Form with Logout", () => {

  it("check register form Validation", () => {
    browser.get(
      TestData.RegistrationPage.LoginUrl
      // "http://www.way2automation.com/angularjs-protractor/registeration/#/login"
    );
    registrationForm_validation();
    expect(element(by.css("[ng-if='Auth.error']")).getText()).toBe(
      "Username or password is incorrect"
    );
  });

  it("Check user Login", () => {
    browser.get(
      TestData.RegistrationPage.LoginUrl
      // "http://www.way2automation.com/angularjs-protractor/registeration/#/login"
    );

    registration();
    expect(browser.getCurrentUrl()).toBe(
      TestData.RegistrationPage.afterLoginUrl
      // "http://www.way2automation.com/angularjs-protractor/registeration/#/"
    );

  });

  it("Check Logout", () => {
    logout();
    expect(browser.getCurrentUrl()).toBe(
      TestData.RegistrationPage.LoginUrl
      // "http://www.way2automation.com/angularjs-protractor/registeration/#/login"
    );
  });

});
