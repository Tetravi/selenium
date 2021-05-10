'use strict';

let contactPageSteps = require('./../pageobjects/Contact/ContactPage.steps.js');

module.exports = function () {

    this.When(/^I click on one of two phone numbers$/, contactPageSteps.clickNumber);

    this.Then(/^a message box should appear$/, contactPageSteps.checkWebPage('https://www.epam.com/about/who-we-are/tel:+12677599000'));

};