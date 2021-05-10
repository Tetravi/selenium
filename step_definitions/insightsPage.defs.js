'use strict';

let insightsPageSteps = require('./../pageobjects/Insights/InsightsPage.steps.js');

module.exports = function () {

    this.When(/^I select <filters> in Industries section$/, insightsPageSteps.clickFilter);

    this.Then(/^I should be given <results> only about <filters>$/, insightsPageSteps.checkFilter);

};