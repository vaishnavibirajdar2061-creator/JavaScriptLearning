package Selenium;

import java.time.Duration;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class LINK_featch {
  @Test
  public void link() 
  {
	  WebDriver driver = new ChromeDriver();
	  driver.get("https://www.flipkart.com/");
	  driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
	  driver.findElement(By.className("b3wTlE")).click();
	  
	  List<WebElement>ele =driver.findElements(By.tagName("a"));
	  System.out.println("total link :"+ ele.size());
	  
	  for(int a=0 ; a<ele.size() ; a++)
	  {
		  System.out.println(ele.get(a).getText());
		  System.out.println(ele.get(a).getAttribute("href"));
		 
	  }
	  
	  driver.quit();
	  
  }
}
