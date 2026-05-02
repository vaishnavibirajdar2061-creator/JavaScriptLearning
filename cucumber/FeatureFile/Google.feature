Feature: Test google application

  Background: 
    Given Open Google application

  Scenario: Test title of Google application
    #Given Open Google application
    When user get the current title of the application
    Then Title should match with Google

  Scenario: Test search feature with valid keyword
    #Given Open Google application
    When User search valid keyword into GoogleSearch
    Then User should get valid search result