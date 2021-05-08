let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;
/*
    Scenario: Contacting global headquarters
		Given I am a website visitor
		When I go to contact us page
		When I click on one of two phone numbers
		Then a message box should appear
*/
Given('I am a website visitor', function (string) {
  browser.get(string);  
});

When('I go to contact us page', function(){
  element(by.class('cta-button-ui cta-button--envelope header__control')).click();
  return '"Contact us"-button was clicked';
});

When('I click on one of two phone numbers', function(){
  element(by.partialLinkText('tel:+12677599000')).click();
  return 'number was clicked';
});

Then('a message box should appear', function () {
  expect(browser.getCurrentUrl()==='https://www.epam.com/about/who-we-are/tel:+12677599000');
});

