'use strict';

let referalPageSteps = require('./../pageobjects/Referal/referalPage.steps.js');

module.exports = function () {
	this.Given(/^I am on referal page$/, referalPageSteps.checkPageTitle);

    this.When(/^click on "submit" button with filled form$/, referalPageSteps.clickSubmit());

    this.Then(/^thanks for our submission is displayed$/, referalPageSteps.checkSuccess());

};