'use strict';

let InsightsPage = require('./InsightsPage');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

let insightsPageObject = new InsightsPage();

let insightsPageSteps = {

    clickFilter: () => insightsPageObject.clickButton(insightsPageObject.filter),
	
	CheckFilter: () => expect(insightsPageObject.isElementVisible(insightsPageObject.filter_result)).to.eventually.be.true
	
};

module.exports = insightsPageSteps;