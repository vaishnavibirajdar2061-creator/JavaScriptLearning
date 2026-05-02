package stepdef;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import hooks.BrowserProvider;
import hooks.CrmHooks;
import io.cucumber.java.en.*;

public class CrmSteps 
{
	WebDriver driver=BrowserProvider.getDriver();
	@Given("Open Crm home page")
	public void open_crm_home_page() {
	   
		//driver=new ChromeDriver();
		driver.get("https://automationplayground.com/crm/");
	}

	@When("User click on SignIn link")
	public void user_click_on_sign_in_link() {
	    driver.findElement(By.linkText("Sign In")).click();
	}

	@Then("SignIn page should open")
	public void sign_in_page_should_open() {

		Assert.assertTrue(driver.getCurrentUrl().contains("login"));
		System.out.println("User navigated to SignIn page!");

	}

	
	@When("User enter valid credentials {string} and {string}")
	public void user_enter_valid_credentials_and(String email, String pass) {
	    driver.findElement(By.id("email-id")).sendKeys(email);
	    driver.findElement(By.id("password")).sendKeys(pass);
	}

	@When("User click on Submit button")
	public void user_click_on_submit_button() {
	   driver.findElement(By.id("submit-id")).click();
	}

	@Then("User should able to login and navigated to customers page")
	public void user_should_able_to_login_and_navigated_to_customers_page() {

		Assert.assertTrue(driver.getCurrentUrl().contains("customers"));
		System.out.println("Login completed!");
	}

}
