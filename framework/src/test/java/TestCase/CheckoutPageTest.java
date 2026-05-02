package TestCase;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import Base.BaseTest;

public class CheckoutPageTest extends BaseTest
 {
	@BeforeClass
	public void pageSetup()
	{
		ip=lp.doLogin(prop.getData("un"),prop.getData("psw"));
		addWait();
		
		ip.addProducttoCart(prop.getData("pname2"));
		addWait();
		
		cp=ip.openCartPage();
		addWait();
		
		ch=cp.openCheckOutPage();
		addWait();
	}
	
	
  @Test
  public void validateCheckout()
  {
	  ch.doContinue(prop.getData("fn"),prop.getData("ln"),prop.getData("zc"));
  }
}
