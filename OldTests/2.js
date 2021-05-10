const { Then } = require('@cucumber/cucumber');
let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;
/*
    Scenario: Visitor selects filters in insights
	Given open the website https://www.epam.com/
	When I click on insights page
	When I select <filters> in Industries section
	Then I should be given <results> only about <filters>
*/
Given(/^open the website "([^"]*)"$/, function (string) {  
  browser.get(string);  
});

When('I click on insights page', function(){
  element.all(by.partialLinkText('insights')).click();
  return 'insights page';
});

When('I select <filters> in Industries section', function(){
  element.all(by.xpath('/html/body/div[2]/main/div[1]/div[4]/section/div/div[1]/div/div[2]/div/div/span[1]/div/div[2]/div/ul/li[2]/label/input')).click();
  return 'filter was choosen';
});

Then('I should be given <results> only about <filters>', function () {
  expect(element.all(by.xpath('/html/body/div[2]/main/div[1]/div[4]/section/div/div[1]/div/ul/li')).isDisplayed().toBe(true));
});