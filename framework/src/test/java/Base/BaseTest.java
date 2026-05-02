package Base;


import java.time.Duration;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeTest;

import Pages.CartPage;
import Pages.CheckoutPage;
import Pages.InventoryPage;
import Pages.LoginPage;
import Pages.OverviewPage;
import Utility.PropertiesUtil;

public class BaseTest
{

	public WebDriver driver;
	public LoginPage lp;
	public InventoryPage ip;
	public CartPage cp;
	public CheckoutPage ch;
	public OverviewPage op;
	public PropertiesUtil prop;
	
	@BeforeTest
	public void setUp()
	{
		prop=new PropertiesUtil();
		driver=new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
		driver.get(prop.getData("url"));
		lp=new LoginPage(driver);
		ip=new InventoryPage(driver);
		cp=new CartPage(driver);
		ch=new CheckoutPage(driver);
		op=new OverviewPage(driver);
	}
	
	public void addWait()
	{
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
