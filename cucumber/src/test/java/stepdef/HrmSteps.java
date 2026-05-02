package stepdef;
mport java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class HrmSteps 
{
	

	WebDriver driver;

@Given("Open Hrm application")
public void open_hrm_application() {
	driver=new ChromeDriver();
	  driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
	  driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
	  
}

@When("User enters {string}  and {string}")
public void user_enters_and(String un, String psw) {
	driver.findElement(By.name("username")).sendKeys(un);
	  driver.findElement(By.name("password")).sendKeys(psw);
}

@When("click on hrm login button")
public void click_on_hrm_login_button() {
	 driver.findElement(By.xpath("//button[@type='submit']")).click();
}

@Then("As Per data validation user shold login and navigated to dashboard page")
public void as_per_data_validation_user_shold_login_and_navigated_to_dashboard_page() {
	Assert.assertTrue(driver.getCurrentUrl().contains("dashboard"),"Login Fail");
	  System.out.println("Login completed!");
}

}
