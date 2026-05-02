package Utility;


import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.time.Duration;
import java.util.Date;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.io.FileHandler;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Utility 
{
	public static String timestamp()
	{
		return new SimpleDateFormat("yyyyMMdd_HHmmss").format(new Date());
	}
	
	public static void getScreenshot(WebDriver driver,String name)
	{
		TakesScreenshot ts=(TakesScreenshot) driver;
		  File temp=ts.getScreenshotAs(OutputType.FILE);
		  File dest=new File(System.getProperty("user.dir")+"//Screenshots//"+name+timestamp()+".png");
		  
		  
		  try {
			FileHandler.copy(temp,dest);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	
	//scrollUtility Using javascript
	public static void scrollDown(WebDriver driver)
	{
		JavascriptExecutor js=(JavascriptExecutor) driver;
		  
		js.executeScript("window.scrollTo(0,document.body.scrollHeight)");
		  
	}
	
	public static void scrollUp(WebDriver driver)
	{
		JavascriptExecutor js=(JavascriptExecutor) driver;
		  
		js.executeScript("window.scrollTo(document.body.scrollHeight,0)");
		  
	}
	
	
	public static void scrollUpToElement(WebDriver driver,WebElement ele)
	{
		JavascriptExecutor js=(JavascriptExecutor) driver;
		  
		js.executeScript("arguments[0].scrollIntoView(true);",ele);
		  
	}
	//explicitWait
	public static WebElement waitForpresenceOfElement(WebDriver driver,By loc,int duration)
	{
		 WebDriverWait wait=new WebDriverWait(driver,Duration.ofSeconds(duration));
		 return wait.until(ExpectedConditions.presenceOfElementLocated(loc));
		  
	}
	public static WebElement waitForVisibilityOfElement(WebDriver driver,By loc,int duration)
	{
		 WebDriverWait wait=new WebDriverWait(driver,Duration.ofSeconds(duration));
		  return wait.until(ExpectedConditions.visibilityOfElementLocated(loc));
		  
	}
	public static WebElement waitForElementToBeClickable(WebDriver driver,By loc,int duration)
	{
		 WebDriverWait wait=new WebDriverWait(driver,Duration.ofSeconds(duration));
		  return wait.until(ExpectedConditions.elementToBeClickable(loc));
		  
	}
	public static boolean waitForTitleContains(WebDriver driver,String title,int duration)
	{
		 WebDriverWait wait=new WebDriverWait(driver,Duration.ofSeconds(duration));
		  return wait.until(ExpectedConditions.titleContains(title));
		  
	}
	public static boolean waitForUrlContains(WebDriver driver,String url,int duration)
	{
		 WebDriverWait wait=new WebDriverWait(driver,Duration.ofSeconds(duration));
		  return wait.until(ExpectedConditions.urlContains(url));
		  
	}
	
	//Dropdown
	public static void selectBasedDropdown(WebElement ele,String value)
	{
		  Select dd=new Select(ele);
		List<WebElement> allOptions=dd.getOptions();
		  System.out.println("Total Options are: "+allOptions.size());
		  
		  for(WebElement i:allOptions)
		  {
			  System.out.println(i.getText());
			  if(i.getText().contains(value))
			  {
				  i.click();
				  break;
			  }
		  }
	}

}
