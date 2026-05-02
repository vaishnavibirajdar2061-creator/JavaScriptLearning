@all
Feature: Test OpenCart application

  @register @regression
  Scenario: Test Registration for opencart
    Given Open Register page of openCart
    When User enters required data
      | fname | lname | email               | tele     | pass    | cpass   |
      | Kiran | Shaha | kiran2024@gmail.com | 87765544 | test123 | test123 |
    When User click on yes readio button
    And Click on privacy policy
    And Click on continue button
    Then User should able to register successfully

  @login
  Scenario: Test Login for Register user
    Given Open login page of Opencart
    When User enters registered details
      | kiran2024@gmail.com | test123 |
    When User click on cart login button
    Then User should be able to login and navigated to account page