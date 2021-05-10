let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;
/*
    Scenario: Changing site language
	Given I am on any page of the website
	When I click "Global(EN)" button
	Then click on another language
	Then webpage should change into that language
*/
Given('I am on any page of the website', function (string) {
  browser.get(string);  
});

When('I click "Global(EN)" button', function(){
  element(by.buttonText('Global (EN)')).click();
  return 'language button was clicked';
});

Then('click on another language', function () {
  element.all(by.class('location-selector__link')).get(7).click();
  return 'Ukranian selected';
});

Then('webpage should change into that language', function(){
  expect(browser.getCurrentUrl()==='https://careers.epam.ua/');
});