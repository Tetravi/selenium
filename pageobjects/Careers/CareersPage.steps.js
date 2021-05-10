'use strict';

let CareersPage = require('./CareersPage');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

let careersPageObject = new CareersPage();

let careersPageSteps = {

    clickFind: () => careersPageObject.clickButton(insightsPageObject.find),
	
	checkWebPage: (url) => expect(browser.getCurrentUrl()===url).to.eventually.be.true
	
};

module.exports = careersPageSteps;