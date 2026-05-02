Feature: Test Orange hrm application

  Scenario Outline: Test Data driven for Login
    Given Open Hrm application
    When User enters "<username>"  and "<password>"
    And click on hrm login button
    Then As Per data validation user shold login and navigated to dashboard page

    Examples: 
      | username | password |
      | Admin    | admin123 |
      | Sumit    | test123  |
      | Admin    | admin123 |
      | Kiran    | test123  |