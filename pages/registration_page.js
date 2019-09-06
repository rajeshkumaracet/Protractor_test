const testData = require("../json/registrationTestData.json")

const registration = () => {
  element(by.model("Auth.user.name")).sendKeys(testData.RegistrationPage.formRegistration.userName);
  element(by.model("Auth.user.password")).sendKeys(testData.RegistrationPage.formRegistration.password);
  element(by.model("model[options.key]")).sendKeys(testData.RegistrationPage.formRegistration.userName);
  element(by.buttonText("Login")).click();
};

const registrationForm_validation = () => {
  element(by.model("Auth.user.name")).sendKeys(testData.RegistrationPage.formValidation.userName);
  element(by.model("Auth.user.password")).sendKeys(testData.RegistrationPage.formValidation.password);
  element(by.model("model[options.key]")).sendKeys(testData.RegistrationPage.formValidation.userName);
  element(by.buttonText("Login")).click();
};

const logout = () => {
  element(by.css(".ng-scope > a")).click();
};

module.exports = { registration, registrationForm_validation, logout };
