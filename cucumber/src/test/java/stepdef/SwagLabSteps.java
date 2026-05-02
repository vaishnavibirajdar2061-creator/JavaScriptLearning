package stepdef;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class SwagLabSteps 
{

WebDriver driver;
	
	@Given("Open SwagLab application")
	public void open_swag_lab_application() {
	    driver=new ChromeDriver();
	    driver.get("https://www.saucedemo.com/v1/");
	}

	@When("User enter valid {string} and valid {string}")
	public void user_enter_valid_and_valid(String un, String pwd) {
	    
		driver.findElement(By.id("user-name")).sendKeys(un);
		driver.findElement(By.name("password")).sendKeys(pwd);
	}

	@When("User click on swagLab login button")
	public void user_click_on_swag_lab_login_button() {
	   driver.findElement(By.id("login-button")).click();
	   
	}

	@Then("User should able to login and navigate to inventory page")
	public void user_should_able_to_login_and_navigate_to_inventory_page() 
	{
	    Assert.assertTrue(driver.getCurrentUrl().contains("nventory"),"Login Fail");
	    System.out.println("Login Completed!");
	}

}
