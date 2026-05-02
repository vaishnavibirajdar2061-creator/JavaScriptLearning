@All
Feature: Test amazon app

  Background: 
    Given Open Amazon application
@Homepage @Regression
  Scenario: Test Title of Homepage
    When User get the title of homepage
    Then Title of home page should match

@BestSeller @ignore
  Scenario: Test title of BestSellerPage
    When User open BestSeller page
    And get the title of BestSellerpage
    Then title should match to BestSeller expected title

@Mobiles  @ignore
  Scenario: Test title of MobilePage
    When User open Mobile page
    And get the title of Mobilepage
    Then title should match to MobilePage expected title

@Fashion
  Scenario: Test title of FashionPage
    When User open Fashion page
    And get the title of Fashionpage
    Then title should match to FashionPage expected title
    
    
    
    
    
    