Feature: Test CRM application

  Background: 
    Given Open Crm home page
    When User click on SignIn link

  Scenario: Test Crm SignIn link
    When User click on SignIn link
    Then SignIn page should open

  Scenario: Test CRM login
    #When User click on SignIn
    And User enter valid credentials "test@gmail.com" and "test123"
    And User click on Submit button
    Then User should able to login and navigated to customers page