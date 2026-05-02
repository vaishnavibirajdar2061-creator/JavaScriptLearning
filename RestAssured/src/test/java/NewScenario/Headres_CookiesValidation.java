package NewScenario;

import org.testng.annotations.Test;
import org.testng.Assert;
import org.testng.annotations.Test;

import io.restassured.response.Response;

import static io.restassured.RestAssured.*;
import static io.restassured.matcher.RestAssuredMatchers.*;
import static org.hamcrest.Matchers.*;//assertions in restassured

public class Headres_CookiesValidation {
  @Test
  public void testHeaders()
  {
	  
	  Response res=given()
	  
	  .when().get("https://www.google.com/");
	  
	  //get the all headers
	  res.then().log().headers();
	  
	  //validation- Content-Type: text/html; charset=ISO-8859-1
	  String expheader="text/html; charset=ISO-8859-1";
	  String actheader=res.getHeader("Content-Type");
	  
	  Assert.assertEquals(actheader,expheader);
	  System.out.println("Test pass!....Headers value matched!");
	  
	  	  
  }
  
  
  @Test
  public void validateCookies()
  {
	  Response res=given()
	  
	  .when().get("https://www.google.com/");
	  
	  //get the all cookies
	  res.then().log().cookies();
	  
	  //cookies are always dynamic
	  
	  //two cookies should not have same value
	  
	  String expCookie="WBFeEss7y6E98hEN2AIHWUyTvj";
	  
	  //get the actual cookie
	  String actCookie=res.getCookie("AEC");
	  
	  Assert.assertFalse(actCookie.equals(expCookie));
	  System.out.println("Test Pass: As cookies are not matched!");
	  
	  
	  
	  
	  
	  
	  
  }
  
  
  
 
  
  
  
  
}
