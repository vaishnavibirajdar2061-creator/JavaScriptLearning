package Rerun_Test_using_RetryAnalyser;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.Test;

public class test {


    WebDriver driver;

    @Test(retryAnalyzer = Retry.class)
    public void testGoogle() {

        driver = new ChromeDriver();
        driver.get("https://www.google.com/");

        // Force failure for demo
        Assert.assertEquals(driver.getTitle(), "Facebook");

        driver.quit();
    }
}
