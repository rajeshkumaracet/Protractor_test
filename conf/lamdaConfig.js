exports.config = {
 
    seleniumAddress: 'https://rajeshkumaracet:vV17p6QpDf7LQ0pCZAFYg621tfF2OtoDP8WgDv3FNN9XrL9Kzi@hub.lambdatest.com/wd/hub',
   
    multiCapabilities: [{
      'name': 'Protractor LambdaTest Parallel_Chrome',
      'build': 'Protractor Javascript Example',
      'browserName': 'Chrome',
      'platform': 'WIN10',
      'version': '70.0',
      'video': true,  //To Enable video recording
      'visual': true, //To Enable step by step screenshot
      'network': true,    //To capture Network logs     
      'console': true   //To capture Console Logs 
    }, {
      'name': 'Protractor LambdaTest Parallel_Safari',
      'build': 'Protractor JavaScript Example',
      'browserName': 'safari',
      'platform': 'macOS High Sierra',
      'version': '11.0',
      'video': true,  //To Enable video recording
      'visual': true, //To Enable step by step screenshot
      'network': true,    //To capture Network logs     
      'console': true   //To capture Console Logs  
    }],
    specs: ['../test_spec/registration_spec.js'],
    // SELENIUM_PROMISE_MANAGER: false
  };