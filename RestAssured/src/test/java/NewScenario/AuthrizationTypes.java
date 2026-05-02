package NewScenario;

import org.testng.annotations.Test;
import org.testng.Assert;
import org.testng.annotations.Test;

import io.restassured.response.Response;

import static io.restassured.RestAssured.*;
import static io.restassured.matcher.RestAssuredMatchers.*;
import static org.hamcrest.Matchers.*;//assertions in restassured

public class AuthrizationTypes {
  @Test
  
  public void testBasicAuthentication() 
  {
	  //Algorithm: Base64
	  Response res=given()
			  		.auth().basic("postman","password")
			  		
	  .when().get("https://postman-echo.com/basic-auth");
	  
	  //the log
	  res.then().log().body();
	  
	  boolean status=res.jsonPath().getBoolean("authenticated");
	  Assert.assertEquals(status,true);
	  System.out.println("Test Pass...Basic authentication is done!");
	 
  }
  
  
  @Test
  public void testDigestAuthentication()
  {
	  //Algorithm: MD5 and SHA
	  Response res=given()
	  .auth().digest("postman","password")
	  
	  .when().get("https://postman-echo.com/digest-auth");
	  
	  //the log
	  res.then().log().body();
	  
	   
	  
  }
  
  
  
  @Test
  public void testBearerToken()
  {
	  
	  Response res=given()
	  .header("Authorization","Bearer 181820")
	  .when().get("https://postman-echo.com");
	  
	  //get the log
	  res.then().log().body();
	  
	  
	  
	  
  }
  
  
  @Test
  public void OAuth2Test()
  {
	  Response res=given()
	  .auth().oauth2("Bearer 111111")
	  
	  .when().get("https://postman-echo.com");
	  
	  //get the log
	  
	  res.then().log().body();
  }
  
  
  
  
  
  
  
  
  
  
}
