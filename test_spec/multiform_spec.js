const { profilePage, interstSelect } = require("../pages/multiform_page");
const multiFormTestData = require("../json/multiformTestData.json");

describe("MulitForm automation", () => {

  it("Initial Check-Start profile or Not", () => {
    browser.get(
      multiFormTestData.multiFormPage.url
    );
    expect(element(by.css(".active span")).getText()).toContain("1");
  });


  it("Inital Empty or Not Check", () => {
    expect(element(by.css(".ng-binding")).getText()).toContain("{}");
  });


  it("Profile form Automating", () => {
    profilePage();
    const jsonText1 = element(by.css(".ng-binding")).getText().then(text => text.trim())
    expect(jsonText1).toBe(
      '{"name":"Adappt","email":"testTeam@adappt.co.uk"}'
    );
    element(by.xpath("//*[@id='form-views']/div[3]/div[1]/a[1]")).click();
    browser.sleep(3000)
  });


  it("Check-Navigate to Profile or Not", () => {
    expect(element(by.css(".active > span")).getText()).toContain("2");
  });


  it("Check Interest page!", () => {
    interstSelect();
    const jsonText2 = element(by.css(".ng-binding")).getText().then(text => text.trim())
    expect(jsonText2).toBe(
      '{"name":"Adappt","email":"testTeam@adappt.co.uk","type":"xbox"}'
    );
    element(by.xpath("//*[@id='form-views']/div[2]/div[1]/a[1]")).click();
    browser.sleep(3000)
  })


  it("Inital Payment page Check", () => {
    expect(element(by.css(".active span")).getText()).toContain("3");
  })


  it("Show Completed result or not", () => {
    expect(element(by.xpath("//*[@id='form-views']/div[1]/h3[1]")).getText()).toBe("Test Completed, WooHoo!");
    element(by.buttonText("Submit")).click();
    expect(browser.switchTo().alert().getText()).toMatch("awesome!");
    browser.sleep(3000)
  })


});

