package Selenium;

import java.io.File;
import java.io.IOException;
import java.time.Duration;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.io.FileHandler;
import org.testng.Assert;
import org.testng.ITestResult;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class Fail_Test_Screenshot {
  
	public WebDriver driver;
	
	@BeforeMethod()
	public void test()
	{
		
		driver = new ChromeDriver();
		driver.get("https://www.amazon.com/");
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
		
	}
	
	@Test()
	public void test2()
	{
		String exp= driver.getCurrentUrl();
		String act = "sdfghjklertyui";
		Assert.assertEquals(exp, act);
	}
	
	@AfterMethod()
	public void test3(ITestResult result) throws IOException
	{
		if(ITestResult.FAILURE == result.getStatus())
		{
			TakesScreenshot ts = (TakesScreenshot)driver ;
			File des=ts.getScreenshotAs(OutputType.FILE);
			File temp = new File(System.getProperty("user.dir")+"\\src\\screenshot\\failtestFilpcart"+System.currentTimeMillis()+".png");
			FileHandler.copy(des, temp);
		}
	}
}
