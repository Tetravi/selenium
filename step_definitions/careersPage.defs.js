'use strict';

let careersPageSteps = require('./../pageobjects/Careers/CareersPage.steps.js');

module.exports = function () {

    this.When(/^I click on Find button$/, careersPageSteps.clickFind);

    this.Then(/^I should be able to see career applications$/, careersPageSteps.checkWebPage('https://www.epam.com/careers/job-listings?country=Ukraine&city=Kyiv'));

};