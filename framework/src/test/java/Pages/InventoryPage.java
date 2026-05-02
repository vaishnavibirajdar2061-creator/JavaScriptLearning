package Pages;
import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import Utility.Utility;


public class InventoryPage 
{

	private WebDriver driver;
	
	public InventoryPage (WebDriver driver)//base class
	{
		
		this.driver=driver;
		PageFactory.initElements(driver,this);
	}
	
	//Locator
	@FindBy(xpath="//div[@class='inventory_list']//div[@class='inventory_item_name ']")
	List<WebElement> allProduct;
	
	@FindBy(xpath="//button[text()='Add to cart']")
	WebElement addToCartBtn;
	
	@FindBy(id="shopping_cart_container")
	WebElement cartBtn;
	
	//Actions
	
	public int getProductCount()
	{
		int count =allProduct.size();
		return count;
	}
	
	
	public void getProductDetails()
	{
		Utility.getScreenshot(driver,"InventoryPage");
		System.out.println("**********Product Details************");
		for(WebElement i:allProduct)
		{
			System.out.println(i.getText());
		}
	}
	
	public void addProducttoCart(String pname)
	{
		for(WebElement i:allProduct)
		{
			if(i.getText().contains(pname))
			{
				i.click();
				break;
			}
		}
		
		Utility.getScreenshot(driver,"Product");
		//click on add to cart
		addToCartBtn.click();
		
		
		
	System.out.println("Product added to cart: "+pname);
		
	}
	
	
	public CartPage openCartPage()
	{
		cartBtn.click();
		Utility.getScreenshot(driver,"CartPage");
		return new CartPage(driver);
	}
	
	

}
