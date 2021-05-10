let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;
/*
    Scenario: Refering to EPAM in US
    Given I am on referal page
    When click on "submit" button with filled form
    Then thanks for our submission is displayed
*/
Given("I am on referal page", function (string) {  
  browser.get(string);  
});

When('click on "submit" button with filled form', function(){
  element(by.class('button-ui-wrapper right-button button-submit')).click();
  return '"submit" button was clicked';
});

Then('thanks for our submission is displayed', function () {
  expect(element(by.class("form-constructor-ui form-component form-component--standalone              has-error show-success")).isDisplayed().toBe(true));
});