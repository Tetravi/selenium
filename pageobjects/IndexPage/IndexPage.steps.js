'use strict';

let IndexPage = require('./IndexPage');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

let indexPageObject = new IndexPage();

let indexPageSteps = {

    clickLogo: () => indexPageObject.clickButton(indexPageObject.logo),
	
	clickSearch: () => indexPageObject.clickButton(indexPageObject.search),
	
	CheckSearchField: () => expect(indexPageObject.isElementVisible(indexPageObject.search_field)).to.eventually.be.true,

    CheckSearchResult: (result) => expect(indexPageObject.search_results === result).to.eventually.be.true,

	clickSubmit: () => indexPageObject.clickButton(indexPageObject.search_submit),
	
	checkWebPage: (url) => expect(browser.getCurrentUrl()===url).to.eventually.be.true,
	
	clickInsights: () => indexPageObject.clickButton(indexPageObject.insights),
	
	clickLanguage: () => indexPageObject.clickButton(indexPageObject.language),
	
	clickUkrainian: () => indexPageObject.clickButton(indexPageObject.ukrainian),
	
	clickContact: () => indexPageObject.clickButton(indexPageObject.contact),
	
	clickCareers: () => indexPageObject.clickButton(indexPageObject.careers)

};

module.exports = indexPageSteps;