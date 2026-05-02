package TestCase;


import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import Base.BaseTest;

public class OverviewPageTest extends BaseTest
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
		op=ch.doContinue(prop.getData("fn"),prop.getData("ln"),prop.getData("zc"));
	}
	
	
  @Test(priority=1)
  public void validateSummary()
  {
	  op.getSummary();
  }
  
  @Test(priority=2)
  public void validateCompletionOfOrder()
  {
	  op.doFinish();
  }
  
}
