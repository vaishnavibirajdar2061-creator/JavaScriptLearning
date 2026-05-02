package NewScenario;
import org.testng.annotations.Test;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import PojoFiles.AuthenticationPojo;

public class TestSearialization_Deserialization {
  @Test
  public void testSearialization() throws JsonProcessingException
  {
	  //POJO---->JSON
	  
	  AuthenticationPojo pojo=new AuthenticationPojo();
	  pojo.setUsername("admin");
	  pojo.setPassword("password123");
	  
	  ObjectMapper obj=new ObjectMapper();
	 String jsondata= obj.writerWithDefaultPrettyPrinter().writeValueAsString(pojo);
	  
	 System.out.println(jsondata);
	  
	   
  }
  
  
  @Test
  public void testDeserialization() throws JsonMappingException, JsonProcessingException
  {
	  //json--->pojo
	  
	  String jsondata="{\n"
	  		+ "  \"username\" : \"admin\",\n"
	  		+ "  \"password\" : \"password123\"\n"
	  		+ "}";
	  
	  ObjectMapper obj=new ObjectMapper();
	  
	  AuthenticationPojo pojo= obj.readValue(jsondata,AuthenticationPojo.class);
	  System.out.println(pojo.getUsername());
	  System.out.println(pojo.getPassword());
	  
	  
	  
	  
	  
	  
	  
  }
 
}
