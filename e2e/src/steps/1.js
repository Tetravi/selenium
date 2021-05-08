let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;
/*
  Scenario: Visitor searches for <word>
	Given I am a website visitor
	When I click on Search icon
	And click on Find button
	Then I should be given Search page
*/
Given('I am a website visitor', function (string) {  
  browser.get(string);  
});

When('I click on Search icon', function(){
  element(by.class('header-search__button header__icon')).click();
  return 'search button was clicked';
});

When('click on Find button', function(){
  element(by.class('header-search__submit')).click();
  return '"Find"-button was clicked';
});

Then('I should be given Search page', function () {
  expect(browser.getCurrentUrl()==='https://www.epam.com/search?q=');
});

