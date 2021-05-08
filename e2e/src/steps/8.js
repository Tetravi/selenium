let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;
/*
  Scenario: finding available career applications
	Given I am I am a website visitor
	When I click on careers page
	And click on Find button
	Then I should be able to see career applications
*/
Given('I am a website visitor', function (string) {  
  browser.get(string);  
});

When('I click on careers page', function(){
  element.all(by.partialLinkText('careers')).click();
  return 'careers page';
});

When('click on Find button', function(){
  element(by.class('recruiting-search__submit')).click();
  return '"Find"-button was clicked';
});

Then('I should be able to see career applications', function () {
  expect(browser.getCurrentUrl()==='https://www.epam.com/careers/job-listings?country=Ukraine&city=Kyiv');
});