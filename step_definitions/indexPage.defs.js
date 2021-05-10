'use strict';

let indexPageSteps = require('./../pageobjects/IndexPage/IndexPage.steps.js');

module.exports = function () {
    this.Given(/^open the website "([^"]*)"$/, indexPageSteps.checkPageTitle);

    this.When(/^I click on search button$/, indexPageSteps.clickSearch);

    this.Then(/^I open search field$/, indexPageSteps.checkSearchField);

    this.Then(/^I typing in "Blockchain"$/, indexPageSteps.CheckSearchResult("Blockchain"));

    this.Then(/^I Clicking on "search" button$/, indexPageSteps.clickSubmit);

    this.Then(/^open page with search results$/, indexPageSteps.checkWebPage('https://www.epam.com/search?q=Blockchain'));

    this.When(/^I click on insights page$/, indexPageSteps.clickInsights);

    this.When(/^I click on <epam> logo$/, indexPageSteps.clickLogo);

    this.Then(/^I should be redirected to Home Page$/, indexPageSteps.checkWebPage('https://www.epam.com'));

    this.When(/^I click "Global(EN)" button$/, indexPageSteps.clickLanguage);

    this.Then(/^click on another language$/, indexPageSteps.clickUkrainian);

    this.Then(/^webpage should change into that language$/, indexPageSteps.checkWebPage('https://careers.epam.ua/'));

    this.When(/^I go to contact us page$/, indexPageSteps.clickContact);

    this.When(/^I click on careers page$/, indexPageSteps.clickCareers);

};