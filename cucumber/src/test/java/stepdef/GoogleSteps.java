package stepdef;

import java.time.Duration;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import io.cucumber.java.en.*;
public class GoogleSteps 
{
	public WebDriver driver;
	String actTitle;
	@Given("Open Google application")
	public void open_google_application() 
	{
		 driver=new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
		driver.get("https://www.google.com");
	    
	}

	@When("user get the current title of the application")
	public void user_get_the_current_title_of_the_application()
	{
	    actTitle=driver.getTitle();
	    System.out.println("Current title is: "+actTitle);
	}

	@Then("Title should match with Google")
	public void title_should_match_with_google()
	{
		Assert.assertEquals(actTitle,"Google","Title not matched...Test Fail!");
		System.out.println("Title matched....Test Pass!");
		
	}

	@When("User search valid keyword into GoogleSearch")
	public void user_search_valid_keyword_into_google_search() {
	   
		driver.findElement(By.id("APjFqb")).sendKeys("Java");
		
	}

	@Then("User should get valid search result")
	public void user_should_get_valid_search_result() {
	   List<WebElement> list=driver.findElements(By.xpath("(//ul[@class='G43f7e'])[1]//li"));
	   
	   System.out.println("Total Options are: "+list.size());
	   for(WebElement i:list)
	   {
		   System.out.println(i.getText());
	   }
	   
	}

}
