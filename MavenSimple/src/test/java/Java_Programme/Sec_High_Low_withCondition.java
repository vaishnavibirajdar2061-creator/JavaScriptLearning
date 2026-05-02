package Java_Programme;

import java.util.Arrays;
import java.util.Comparator;

public class Sec_High_Low_withCondition {

	public static void main(String[] args) 
	{
	  int arr[] = {2,4,3,5,6,5,443,67,98,76,54,89,6,0,76,87};
	  
	           Integer shigh= Arrays.stream(arr)
			          .boxed()
			          .sorted(Comparator.reverseOrder())
			          .skip(1)
			          .findFirst()
			          .get();
	           
	           System.out.println("second high :"+ shigh);
	           
	  System.out.println("****************************************************");
	           
	  Integer slow = Arrays.stream(arr)
	          .boxed()
	          .sorted(Comparator.reverseOrder())
	          .findFirst()
	          .get();
       
       System.out.println("second high :"+ slow);

	}

}
