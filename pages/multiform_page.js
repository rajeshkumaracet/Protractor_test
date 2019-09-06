const multiFormTestData = require("../json/multiformTestData.json");

const profilePage = () => {
  element(by.model("formData.name")).sendKeys(multiFormTestData.multiFormPage.profilePage.name);
  element(by.model("formData.email")).sendKeys(multiFormTestData.multiFormPage.profilePage.email);
};

const interstSelect = () => {
  element(by.xpath("//*[@id='form-views']/div[1]/div[1]/label[1]/input[1]")).click();
}


module.exports = {profilePage,interstSelect};
