package Pages;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import Utility.Utility;

//import com.SwagLab.Utility.Utility;

public class CartPage
{
 private WebDriver driver;
	 
	 public CartPage(WebDriver driver)
	 {
		 this.driver=driver;
		 PageFactory.initElements(driver,this);
	 }
	 
	 @FindBy(xpath="//div[@class='cart_item_label']")
	 WebElement details;
	 
	 @FindBy(xpath="//button[text()='Remove']")
	 WebElement removeBtn;
	 
	 @FindBy(id="continue-shopping")
	 WebElement contBtn;
	 
	 @FindBy(id="checkout")
	 WebElement checkBtn;
	 
	 @FindBy(xpath="//div[@class='inventory_item_name']")
	 WebElement pname;
	 
	 public void getAddedProductDetails()
	 {
		 System.out.println(details.getText());
	 }
	 
	 public void removeProduct()
	 {
		 String name=pname.getText();
		 removeBtn.click();
		 Utility.getScreenshot(driver,"AfterProductRemove");
		 System.out.println("Product Removed from cart: "+name);
	 }
	 
	 public InventoryPage doContinueShopping()
	 {
		 contBtn.click();
		 Utility.getScreenshot(driver,"AfterContinue");
		 return new InventoryPage(driver);
	 }
	 
	 public CheckoutPage openCheckOutPage()
	 {
		 checkBtn.click();
		 Utility.getScreenshot(driver,"checkoutPage");
		 return new CheckoutPage(driver);
	 }
	 

}
