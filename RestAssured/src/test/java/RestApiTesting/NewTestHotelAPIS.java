package RestApiTesting;

import static io.restassured.RestAssured.given;

import org.apache.groovy.json.internal.Dates;
import org.testng.Assert;
import org.testng.annotations.Test;

import com.PojoFiles.BookingDetails;

import PojoFiles.AuthenticationPojo;
import io.restassured.response.Response;

public class NewTestHotelAPIS 
{
	int id;
	String tokenvalue;
	
  @Test(priority=1)
  public void createBooking() 
  {
	  
	  System.out.println("Create new booking.......");
	  //request payload
	  
	  Dates date=new Dates();//nested json
	  date.setCheckin("2024-11-30");
	  date.setCheckout("2024-12-01");
	  
	  BookingDetails data=new BookingDetails();//main
	  data.setFirstname("Jay");
	  data.setLastname("Nigade");
	  data.setTotalprice(9999);
	  data.setDepositpaid(true);
	  data.setBookingdates(date);
	  data.setAdditionalneeds("lunch");
	  
	    
	Response res=given()
	  .header("Content-Type","application/json")
	  .body(data)
	  
	  .when().post("https://restful-booker.herokuapp.com/booking");
	  
	//get the body in console
	res.then().log().body();
	
	
	System.out.println(res.getStatusCode());
	
	//bookingid
	id=res.jsonPath().getInt("bookingid");
	System.out.println("Booking generated with id: "+id);
	
	 
	  
  }
  
  @Test(priority=2)
  public void getBookingForSameId()
  {
	  
	  System.out.println("Get the booking details for the same id: "+id);
	 
	  Response res=given()
	  
	  .when().get("https://restful-booker.herokuapp.com/booking/"+id);
	  
	  //log the response
	  res.then().log().body();
	  
  }
  
  
  @Test(priority=3)
  public void createToken()
  {
	  
	  System.out.println("Token created for Update/delete request");
	  //request payload
	  AuthenticationPojo auth=new AuthenticationPojo();
	  auth.setUsername("admin");
	  auth.setPassword("password123");
	  
	  Response res=given()
	  .header("Content-Type","application/json")
	  .body(auth)
	  
	  .when().post("https://restful-booker.herokuapp.com/auth");
	  
	  //get the log
	  res.then().log().body();
	  
	  //get the token
	   tokenvalue=res.jsonPath().getString("token");
	  System.out.println("Generated token is: "+tokenvalue);
	  
	  
  }
  
  @Test(priority=4)
  public void fullUpdate()
  {
	  //request payload
	  Dates date=new Dates();
	  date.setCheckin("2024-11-30");
	  date.setCheckout("2024-12-01");
	  
	  BookingDetails data=new BookingDetails();//main
	  data.setFirstname("Ganesh");
	  data.setLastname("Nigade");
	  data.setTotalprice(12000);
	  data.setDepositpaid(true);
	  data.setBookingdates(date);
	  data.setAdditionalneeds("dinner");
	  
	  
	  System.out.println("Update same id booking: "+id);
	 Response res=given()
	  .header("Content-Type","application/json")
	  .header("Accept","application/json")
	  .header("Cookie","token="+tokenvalue)
	  .body(data)
	  
	  .when().put("https://restful-booker.herokuapp.com/booking/"+id);
	  
	  //get the log
	  res.then().log().body();
  }
  
  @Test(priority=5)
  public void partialUpdate()
  {
	  
	  System.out.println("Partial update for same booking id: "+id);
	  
	  
	  //Request payload
	  
	  Dates date=new Dates();
	  date.setCheckin("2024-11-30");
	  date.setCheckout("2024-12-01");
	  
	  BookingDetails data=new BookingDetails();
	  data.setFirstname("GaneshN");
	  data.setLastname("Nigade");
	  data.setBookingdates(date);
	  
	    
	  Response res=given()
	  .header("Content-Type","application/json")
	  .header("Accept","application/json")
	  .header("Cookie","token="+tokenvalue)
	  .body(data)
	  
	  .when().patch("https://restful-booker.herokuapp.com/booking/"+id);
	  
	  
	  //get the log
	  res.then().log().body();
	  
  }
  
  
  
  
  
  
  @Test(priority=6)
  public void deleteSameBooking()
  {
	  
	  System.out.println("Booking deleted for is: "+id);
	  Response res=given()
	  .header("Content-Type","application/json")
	  .header("Cookie","token="+tokenvalue)
	  
	  .when().delete("https://restful-booker.herokuapp.com/booking/"+id);
	  
	  
	  //validate status code should be 201
	  int code=res.getStatusCode();
	  Assert.assertEquals(code,201);
	  System.out.println("Status code matched!...code"+code);
	  
	  
	  //get the response
	  res.then().log().body();
  }
  
  
  
  
  
 
}
