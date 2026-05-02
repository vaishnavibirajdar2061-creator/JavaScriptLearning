package TestCase;

import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import com.SwagLab.Base.BaseTest;

public class CartPageTest extends BaseTest

{
	@BeforeClass
	public void pageSetup()
	{
		ip=lp.doLogin(prop.getData("un"),prop.getData("psw"));
		addWait();
		ip.addProducttoCart(prop.getData("pname1"));
		addWait();
		cp=ip.openCartPage();
		addWait();
	}
	
  @Test(priority=1)
  public void validateAddedProduct() 
  {
	  cp.getAddedProductDetails();
  }
  
  @Test(priority=2)
  public void validateProductRemove() 
  {
	  cp.removeProduct();
	  addWait();
  }
  
  @Test(priority=3)
  public void validateContinueShopping()
  {
	  ip=cp.doContinueShopping();
	  addWait();
	  ip.addProducttoCart(prop.getData("pname2"));
	  ip.openCartPage();
  }
  
  
  @Test(priority=4)
  public void validateLaunchOfCheckoutPage()
  {
	  cp.openCheckOutPage();
  }

}
