package stepdef;
import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class AmazonSteps 
{
	
	WebDriver driver;
	String actTitle;
	@Given("Open Amazon application")
	public void open_amazon_application() {
	    
		driver=new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
		driver.get("https://www.amazon.in");
		driver.manage().window().maximize();
	}

	@When("User get the title of homepage")
	public void user_get_the_title_of_homepage() {
	    
		actTitle=driver.getTitle();
	}

	@Then("Title of home page should match")
	public void title_of_home_page_should_match() {
	    Assert.assertTrue(actTitle.contains("India"),"title not matched!");
	    System.out.println("Title matched!: "+actTitle);
	}

	@When("User open BestSeller page")
	public void user_open_best_seller_page() {
	    driver.findElement(By.linkText("Best Sellers")).click();
	}

	@When("get the title of BestSellerpage")
	public void get_the_title_of_best_sellerpage() {
	    actTitle=driver.getTitle();
	}

	@Then("title should match to BestSeller expected title")
	public void title_should_match_to_best_seller_expected_title() {
		 Assert.assertTrue(actTitle.contains("Bestsellers"),"title not matched!");
		    System.out.println("Title matched!: "+actTitle);
	}

	@When("User open Mobile page")
	public void user_open_mobile_page() {
	   driver.findElement(By.linkText("Mobiles")).click();
	}

	@When("get the title of Mobilepage")
	public void get_the_title_of_mobilepage() {
	    actTitle=driver.getTitle();
	}

	@Then("title should match to MobilePage expected title")
	public void title_should_match_to_mobile_page_expected_title() {
		 Assert.assertTrue(actTitle.contains("Phones"),"title not matched!");
		    System.out.println("Title matched!: "+actTitle);
	}

	@When("User open Fashion page")
	public void user_open_fashion_page() {
	    driver.findElement(By.linkText("Fashion")).click();
	}

	@When("get the title of Fashionpage")
	public void get_the_title_of_fashionpage() {
	    actTitle=driver.getTitle();
	}

	@Then("title should match to FashionPage expected title")
	public void title_should_match_to_fashion_page_expected_title() {
		Assert.assertTrue(actTitle.contains("Fashion"),"title not matched!");
	    System.out.println("Title matched!: "+actTitle);
	}



}
