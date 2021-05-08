// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter, StacktraceOption } = require('jasmine-spec-reporter');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  // set to "custom" instead of cucumber.
  framework: 'custom',
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  // require feature files
  specs: [
    './src/specs/*.feature' // accepts a glob
  ],
  baseUrl: 'http://localhost:4200/',
  seleniumAddress: 'http://localhost:4444/wd/hub/',
  cucumberOpts: {
    // require step definitions
    require: [
      './src/steps/*.steps.ts' // accepts a glob
    ]
  }
};