Feature: Login
Scenario: Login user with incorrect email and password
Given I navigate to automation exercise website
When I enter incorrect login credentials
Then I should not be logged in