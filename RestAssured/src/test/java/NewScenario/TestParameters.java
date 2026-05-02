package NewScenario;
import org.testng.annotations.Test;

import io.restassured.RestAssured;
import io.restassured.response.Response;

import static io.restassured.RestAssured.*;
import static io.restassured.matcher.RestAssuredMatchers.*;
import static org.hamcrest.Matchers.*;//assertions in restassured
import org.testng.annotations.Test;

public class TestParameters 
{
  @Test
  public void testPath_QueryParameters() 
  {
	  /*
	   * https://api.restful-api.dev/objects?id=3&id=5&id=10

BaseURL: https://api.restful-api.dev

path parameter: /objects

Query parameter: ?id=3&id=5&id=10
	   */
	  
	  RestAssured.baseURI="https://api.restful-api.dev";
	  
	  Response res=given()
	  .pathParam("path","/objects")
	  .queryParam("id",3)
	  .queryParam("id",5)
	  .queryParam("id",10)
	  
	  //.when().get("https://api.restful-api.dev/{path}");
	  .when().get("{path}");
	  
	  //geth the log
	  res.then().log().body();
	  
	  
	  
	  
	  
	  
	  
	  
	  
  }
 
}
