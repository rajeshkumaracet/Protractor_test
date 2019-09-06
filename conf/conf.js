const AllureReporter = require("jasmine-allure-reporter");
const allurec = require("allure-commandline");

exports.config = {
  directConnect: true,

  framework: "jasmine2",

  capabilities: {
    browserName: "chrome"
  },

  specs: ["../test_spec/bank_spec.js"],

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  onPrepare: () => {
    jasmine.getEnv().addReporter(
      new AllureReporter({
        resultsDir: "allure-results"
      })
    );
    jasmine.getEnv().afterEach(function (done) {
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment(
          "Screenshot",
          function () {
            return Buffer.from(png, "base64");
          },
          "image/png"
        )();
        done();
      });
    });
  },

  onComplete: () => {
    let generation = allurec(['generate', './allure-results']);
    generation.on('exit', async function (exitCode) {
      console.log('Generation is finished with code:', exitCode);
    });

  }

};
