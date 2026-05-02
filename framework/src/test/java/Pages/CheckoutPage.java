package Pages;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import Utility.Utility;

public class CheckoutPage
{

private WebDriver driver;
	
	public CheckoutPage(WebDriver driver)//base class
	{
		this.driver=driver;
		PageFactory.initElements(driver,this);
	}
	
	//locators
	@FindBy(id="first-name")
	WebElement fname;
	
	@FindBy(id="last-name")
	WebElement lname;
	
	@FindBy(id="postal-code")
	WebElement zcode;
	
	@FindBy(id="continue")
	WebElement contBtn;
	
	
	
	public OverviewPage doContinue(String fn,String ln,String zc)
	{
		fname.sendKeys(fn);
		lname.sendKeys(ln);
		zcode.sendKeys(zc);
		System.out.println("Firstname is: "+fn+" lastname is: "+ln+"  zipcode is: "+zc);
		Utility.getScreenshot(driver,"CheckoutPageData");
		contBtn.click();
		Utility.getScreenshot(driver,"OverviewPage");
		return new OverviewPage(driver);
	}
	
	
}
