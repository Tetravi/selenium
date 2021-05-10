Feature: https://www.epam.com/ website

Scenario:  Using search option
    Given open the website https://www.epam.com/
	When I click on search button
	Then I open search field
    Then I typing in "Blockchain"
	Then I Clicking on "search" button
    Then open page with search results

Scenario: Visitor selects filters in insights
	Given open the website https://www.epam.com/
	When I click on insights page
	When I select <filters> in Industries section
	Then I should be given <results> only about <filters>
	
Scenario: Refering to EPAM in US
    Given I am on referal page
    When click on "submit" button with filled form
    Then thanks for our submission is displayed

Scenario: Going to Home Page
	Given open the website https://www.epam.com/
	When I click on <epam> logo
	Then I should be redirected to Home Page

Scenario: Changing site language
	Given open the website https://www.epam.com/
	When I click "Global(EN)" button
	Then click on another language
	Then webpage should change into that language
	
Scenario: Contacting global headquarters
	Given open the website https://www.epam.com/
	When I go to contact us page
	When I click on one of two phone numbers
	Then a message box should appear
	
Scenario: finding available career applications
	Given open the website https://www.epam.com/
	When I click on careers page
	And click on Find button
	Then I should be able to see career applications