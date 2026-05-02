package RestApiTesting;
import static io.restassured.RestAssured.given;

import java.util.HashMap;

import org.testng.annotations.Test;

import PojoFiles.AuthenticationPojo;
import io.restassured.response.Response;

public class TestPostCall 
{
	
	/*
	 * post : 
	 * 1.using hashmap
	 * 2.using pojo=Plain old java object
	 */
  @Test
  public void createTokenUsingHashMap()
  {
	  //Request payload
	  HashMap<String,Object> map=new HashMap<String,Object>();
	  map.put("username","admin");
	  map.put("password","password123");
	  
	  Response res=given()
	  .header("Content-Type","application/json")
	  .body(map)
	  
	  
	  .when().post("https://restful-booker.herokuapp.com/auth");
	  
	  System.out.println(res.asPrettyString());
	  String token=res.jsonPath().getString("token");
	  System.out.println("Token generated: "+token);
	  
	  
  }
  
  
  @Test
  public void createTokenUsingPojo()
  {
	  //payload
	  AuthenticationPojo pojo=new AuthenticationPojo();
	  pojo.setUsername("admin");
	  pojo.setPassword("password123");
	  
	  Response res=given()
	  .header("Content-Type","application/json")
	  .body(pojo)
	  
	  .when().post("https://restful-booker.herokuapp.com/auth");
	  
	  System.out.println(res.asPrettyString());
	  String token=res.jsonPath().getString("token");
	  System.out.println("Token generated: "+token);
  }
  

}
