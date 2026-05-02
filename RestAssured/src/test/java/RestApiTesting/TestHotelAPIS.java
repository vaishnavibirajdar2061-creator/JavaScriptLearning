package RestApiTesting;
import org.testng.Assert;
import org.testng.annotations.Test;

import io.restassured.response.Response;

import static io.restassured.RestAssured.*;
import static io.restassured.matcher.RestAssuredMatchers.*;
import static org.hamcrest.Matchers.*;//assertions in restassured
public class TestHotelAPIS
{
	 @Test(priority=1)
	  public void getBookingIds()
	  {
		  Response res=given()
		  .when().get("https://restful-booker.herokuapp.com/booking");
		  
		  //to get the response in console
		  //res.then().log().all();//this is for all response
		  
		  //res.then().log().headers();//this is for only headers
		  
		  res.then().log().body();//this is for response payload
		  
		  //to validate status code
		  int code=res.getStatusCode();
		  Assert.assertEquals(code,200);
		  System.out.println("Status code matched!...Status code is: "+code);
		  
		    
	  }
	  
	  @Test
	  public void createBooking()
	  {
		  Response res=given()
				  .header("Content-Type","application/json")
				  .body("{\n"
		  		+ "    \"firstname\" : \"Priyanka\",\n"
		  		+ "    \"lastname\" : \"Nigade\",\n"
		  		+ "    \"totalprice\" : 8888,\n"
		  		+ "    \"depositpaid\" : true,\n"
		  		+ "    \"bookingdates\" : {\n"
		  		+ "        \"checkin\" : \"2024-11-30\",\n"
		  		+ "        \"checkout\" : \"2024-12-01\"\n"
		  		+ "    },\n"
		  		+ "    \"additionalneeds\" : \"Breakfast\"\n"
		  		+ "}")
		  
		  .when().post("https://restful-booker.herokuapp.com/booking");
		  
		  //get the log for response
		  res.then().log().body();
		  
		  //status code
		  int code=res.getStatusCode();
		  Assert.assertEquals(code,200);
		  System.out.println("Status code is : "+code);
		  
		  //get the booking id
		  int id=res.jsonPath().getInt("bookingid");
		  System.out.println("Booking created with id: "+id);
		  
		  
		  
		  
		  
		  
	  }

}
