let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;
/*
    Scenario:  Using search option
    Given open the website https://www.epam.com/
	When I click on search button
	Then I open search field
    Then I typing in "Blockchain"
	Then I Clicking on "search" button
    Then open page with search results
*/

Given(/^open the website "([^"]*)"$/, function (string) {
  browser.get(string);  
});

When('I click on search button', function(){
  element(by.class('header-search-ui header__control')).click();
  return 'search button was clicked';
});

Then('I open search field', function () {
  expect(element(by.class('header-search__panel')).isDisplayed().toBe(true));
  return 'search field is opened';
});

Then('typing in "Blockchain"', function(){
  expect(element(by.class("search-results__input-holder")).value ==="Blockchain")
  return 'Blockchain was typed in';
});

Then('Clicking on "search" button', function(){
  element(by.class("header-search__submit")).click();
  return '"Search" was clicked';
});

Then('open page with search results', function () {
  expect(browser.getCurrentUrl()==='https://www.epam.com/search?q=Blockchain');
});

