package Selenium;

public class window_Handle 
{

	
	 WebDriver driver = new ChromeDriver();
     driver.get("https://example.com");

     // Get current window
     String ele = driver.getWindowHandle();

     // Get all windows
     Set<String> ele2 = driver.getWindowHandles();

     // Convert Set to List
     List<String> res = new ArrayList<>(ele2);

     // Check if more than 2 windows exist
     if (res.size() >= 3) {
         driver.switchTo().window(res.get(2));  // switch to 3rd window
     }

     driver.quit();
}
