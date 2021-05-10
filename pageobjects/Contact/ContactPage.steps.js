'use strict';

let ContactPage = require('./ContactPage');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

let contactPageObject = new ContactPage();

let contactPageSteps = {

    clickNumber: () => contactPageObject.clickButton(insightsPageObject.number),
	
	checkWebPage: (url) => expect(browser.getCurrentUrl()===url).to.eventually.be.true
	
};

module.exports = contactPageSteps;