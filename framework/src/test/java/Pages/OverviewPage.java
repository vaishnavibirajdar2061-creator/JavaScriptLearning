package Pages;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import Utility.Utility;

public class OverviewPage 
{
	private WebDriver driver;
	public OverviewPage(WebDriver driver)
	{
	this.driver=driver;
	PageFactory.initElements(driver,this);
	}

	@FindBy(xpath="//div[@class='summary_info']")
	WebElement summary;
	
	@FindBy(id="finish")
	WebElement finishBtn;
	
	@FindBy(tagName="h2")
	WebElement msg;
	
	
	public void getSummary()
	{
		System.out.println("**************Payment Summary*********");
		System.out.println(summary.getText());
	}
	
	public void doFinish()
	{
		finishBtn.click();
		System.out.println("Final Message: "+msg.getText());
		Utility.getScreenshot(driver,"ProductPurches");
	}
	
	

}
