Feature: https://www.epam.com/ website

Scenario: Visitor searches for <word>
	Given I am a website visitor
	When I click on Search icon
	And click on Find button
	Then I should be given Search page

Scenario: Visitor selects filters in insights
	Given I am a website visitor
	When I click on insights page
	When I select <filters> in Industries section
	Then I should be given <results> only about <filters>

Scenario: Going to Home Page
	Given I am on any page of the website
	When I click on <epam> logo
	Then I should be redirected to Home Page

Scenario: Changing site language
	Given I am on any page of the website
	When I click "Global(EN)" button
	Then click on another language
	Then webpage should change into that language
	
Scenario: Contacting global headquarters
	Given I am a website visitor
	When I go to contact us page
	When I click on one of two phone numbers
	Then a message box should appear
	
Scenario: finding available career applications
	Given I am I am a website visitor
	When I click on careers page
	And click on Find button
	Then I should be able to see career applications