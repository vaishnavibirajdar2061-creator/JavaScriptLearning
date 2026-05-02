package RestApiTesting;
import org.testng.Assert;
import org.testng.annotations.Test;

import io.restassured.response.Response;

import static io.restassured.RestAssured.*;
import static io.restassured.matcher.RestAssuredMatchers.*;
import static org.hamcrest.Matchers.*;//assertions in restassured

public class RequestWithBDD 
{

	
	 @Test
	  public void testSingleObject()
	  {
		  Response res=given()
		  .when().get("https://api.restful-api.dev/objects/7");
		  
		  String id=res.jsonPath().getString("id");
		  Assert.assertEquals(id,"7");
		  System.out.println("Test pass id is: "+id);
		  
		  
		  
//		  .then()
//		  .statusCode(200)
//		  .body("id",equalTo("7"))
//		 // .log().body();
//		  .log().all();
		  
		  
		 /*
		  * equalTo()-test equality for data

		contains() -> Check all elements are in a collection and in a strict order
		hasItems() -> Check all elements are in a collection
	 
		  */
	  }
	  
	  
	  @Test
	  public void testListOfObjects()
	  {
		  given()
		  
		  .when().get("https://api.restful-api.dev/objects")
		  
		  .then()
		  .statusCode(200)
		  .body("id",hasItems("1","2","3","11","13"))//partial match=true
		  .body("id",hasItems("1","2","3","4","5","6","7","8","9","10","11","12","13"))
		  .body("id",contains("1","2","3","4","5","6","7","8","9","10","11","12","13"))
		  .body("id",contains("1","6","7","8","10","11","13"))
		  .log().body();
		  
		  
		  System.out.println("Using hasItems() all ids are macthed!");
		  
		  
	  }
	  
	  
}
