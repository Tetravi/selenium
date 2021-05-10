let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;
/*
    Scenario: Going to Home Page
	Given I am on any page of the website
	When I click on <epam> logo
	Then I should be redirected to Home Page
*/
Given('I am on any page of the website', function (string) {  
  browser.get(string);  
});

When('I click on <epam> logo', function(){
  element(by.class('header__logo-container')).click();
  return 'logo clicked';
});

Then('I should be redirected to Home Page', function () {
  expect(browser.getCurrentUrl()==='https://www.epam.com');
});