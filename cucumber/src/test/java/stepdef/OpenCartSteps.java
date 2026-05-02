package stepdef;
import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class OpenCartSteps 
{
WebDriver driver;
	
	@Given("Open Register page of openCart")
	public void open_register_page_of_open_cart() {
	    driver=new ChromeDriver();
	    driver.get("https://tutorialsninja.com/demo/index.php?route=account/register");
	}

	@When("User enters required data")
	public void user_enters_required_data(DataTable table) {
	    // Write code here that turns the phrase above into concrete actions
	    // For automatic transformation, change DataTable to one of
	    // E, List<E>, List<List<E>>, List<Map<K,V>>, Map<K,V> or
	    // Map<K, List<V>>. E,K,V must be a String, Integer, Float,
	    // Double, Byte, Short, Long, BigInteger or BigDecimal.
	    //
	    // For other transformations you can register a DataTableType.

		List<Map<String,String>> data=table.asMaps();
		
		driver.findElement(By.name("firstname")).sendKeys(data.get(0).get("fname"));
		driver.findElement(By.name("lastname")).sendKeys(data.get(0).get("lname"));
		driver.findElement(By.name("email")).sendKeys(data.get(0).get("email"));

		driver.findElement(By.name("telephone")).sendKeys(data.get(0).get("tele"));

		driver.findElement(By.name("password")).sendKeys(data.get(0).get("pass"));

		driver.findElement(By.name("confirm")).sendKeys(data.get(0).get("cpass"));

		
		
			
			
			
	}

	@When("User click on yes readio button")
	public void user_click_on_yes_readio_button() {
	    driver.findElement(By.xpath("(//input[@name='newsletter'])[1]")).click();
	}

	@When("Click on privacy policy")
	public void click_on_privacy_policy() {

		driver.findElement(By.name("agree")).click();
	}

	@When("Click on continue button")
	public void click_on_continue_button() {
	   driver.findElement(By.xpath("//input[@value='Continue']")).click();
	}

	@Then("User should able to register successfully")
	public void user_should_able_to_register_successfully() {
	    
		Assert.assertTrue(driver.getCurrentUrl().contains("success"),"Registartion is fail!");
		System.out.println("User Registration is completed!");
	}

	//Open Cart login snippet
	
	@Given("Open login page of Opencart")
	public void open_login_page_of_opencart() {
	    
		driver=new ChromeDriver();
		driver.get("https://tutorialsninja.com/demo/index.php?route=account/login");
				
	}

	@When("User enters registered details")
	public void user_enters_registered_details(DataTable table) {
	    // Write code here that turns the phrase above into concrete actions
	    // For automatic transformation, change DataTable to one of
	    // E, List<E>, List<List<E>>, List<Map<K,V>>, Map<K,V> or
	    // Map<K, List<V>>. E,K,V must be a String, Integer, Float,
	    // Double, Byte, Short, Long, BigInteger or BigDecimal.
	    //
	    // For other transformations you can register a DataTableType.

				List<List<String>> data=table.cells();
		driver.findElement(By.name("email")).sendKeys(data.get(0).get(0));//email
		driver.findElement(By.name("password")).sendKeys(data.get(0).get(1));//pass
		
				
				
	}

	@When("User click on cart login button")
	public void user_click_on_cart_login_button() {
	    driver.findElement(By.xpath("//input[@value='Login']")).click();
	    
	}

	@Then("User should be able to login and navigated to account page")
	public void user_should_be_able_to_login_and_navigated_to_account_page() {
	    
		Assert.assertTrue(driver.getCurrentUrl().contains("account"),"Login Fail");
		System.out.println("Login Successfull!");
	}


}
