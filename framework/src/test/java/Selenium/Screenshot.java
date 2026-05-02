package Selenium;

import java.io.File;
import java.io.IOException;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.io.FileHandler;

public class Screenshot {

	public static void main(String[] args) throws IOException 
	{
	
		WebDriver driver = new ChromeDriver();
		driver.get("https://www.facebook.com/");
		
		TakesScreenshot ts = (TakesScreenshot) driver ;
		File des =ts.getScreenshotAs(OutputType.FILE);
		
		File temp = new File(System.getProperty("user.dir")+"\\src\\screenshot\\facebook"+System.currentTimeMillis()+".png");
		FileHandler.copy(des, temp);

	}

}
