/*exports.config = {
//  seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  baseUrl: 'https://www.epam.com/',
  framework: 'custom',  
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  specs: ['spec.js'],
  capabilities: {
    browserName: 'firefox'
  }
}*/

exports.config = {
  capabilities:{
    browserName: 'firefox',
    shardTestFiles: true
  },
  allScriptsTimeout: 10000,
  baseUrl: 'https://www.epam.com/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  specs: [
    './specs/Yevheniia_Poltorak.feature'
  ],
  restartBrowserBetweenTests: true,
  cucumberOpts: {
    require: [
      './steps/*.js'
    ], 
    tags: [],
    strict: true,
    'dry-run': false,
    compiler: [],
  },
  onPrepare: function () {
    const {Given, Then, When, Before} = require('cucumber');
    global.Given = Given;
    global.When = When;
    global.Then = Then;
    global.Before = Before;
	global.And = And;
  }
};