package RestApiTesting;

import java.time.Duration;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.testng.Assert;
import org.testng.annotations.Test;

import io.restassured.RestAssured;
import io.restassured.response.Response;
public class RequestWithNonBDD 

{
	
	 @Test
	  public void singleObjectRequest()
	  {
		  Response res=RestAssured.get("https://api.restful-api.dev/objects/7");
		  System.out.println("Status code is: "+res.getStatusCode());
		  System.out.println("Status message is: "+res.getStatusLine());
		  System.out.println("Response time is: "+res.getTimeIn(TimeUnit.SECONDS));
		  System.out.println("******REsponse in Text format************");
		  System.out.println(res.asString());
		  System.out.println("******REsponse in JSON format************");
		  System.out.println(res.asPrettyString());
		  
		  String id=res.jsonPath().getString("id");
		  Assert.assertEquals(id,"7","Test Fail....as id not matched!");
		  System.out.println("Test pass....as id matched!");
		  
		  //year=2019
		  int year=res.jsonPath().getInt("data.year");
		  Assert.assertEquals(year,2019,"Year is not matched!");
		  System.out.println("Year is matched!");
		  
		  //Hard disk size="1 TB"
		  String size=res.jsonPath().getString("data['Hard disk size']");
		  Assert.assertEquals(size,"1 TB","Size not matched!");
		  System.out.println("Size matched!");
		  
		  
		  
		  
		  
		  
	  }
	 
	 
	 
	 
	  
	  @Test
	  public void listOfObjects()
	  {
		  Response res=RestAssured.get("https://api.restful-api.dev/objects");
		  int code=res.getStatusCode();
		  Assert.assertEquals(code,200);
		  System.out.println("Status code is: "+code);
		  
		  System.out.println(res.asPrettyString());
		  
		  String id=res.jsonPath().getString("id[2]");
		  Assert.assertEquals(id,"3");
		  System.out.println("Id is matched!: "+id);
		  
		  String color=res.jsonPath().getString("data[2].color");
		  Assert.assertEquals(color,"Cloudy White");
		  System.out.println("Color matched: "+color);
		  
		  //get all ids
		  List<String> listOfId=res.jsonPath().getList("id");
		  System.out.println("Total ids are: "+listOfId.size());
		  
		  for(String i:listOfId)
		  {
			  System.out.println(i);
		  }
		  
		  //all names
		  List<String> productname=res.jsonPath().getList("name");
		  for(String i:productname)
		  {
			  System.out.println(i);
		  }
		  
		  //all colors
		List<String> allColors=res.jsonPath().getList("data.color"); 
		for(String i:allColors)
		{
			System.out.println(i);
		}
		
		//for 9th object color=Red
		String col=res.jsonPath().getString("data[8].Color");
		Assert.assertEquals(col,"Red");
		System.out.println("Color matched: "+col);
		  
	  }
	  
	  
	  
	  

}
