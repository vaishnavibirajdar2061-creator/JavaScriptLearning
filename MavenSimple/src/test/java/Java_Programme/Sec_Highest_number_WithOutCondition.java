package Java_Programme;

public class Sec_Highest_number_WithOutCondition {

	public static void main(String[] args) 
	{
	  int arr[] = {2,4,3,5,6,5,443,67,98,76,54,89,6,0,76,87};
	  
	  int max = Integer.MIN_VALUE;
	  int smax = Integer.MIN_VALUE;
	  
	  for(int a=0 ; a<arr.length ; a++)
	  {
		  if(arr[a] > max)
		  {
			  smax = max ;
			  max = arr[a];
		  }
		  
		  else if (arr[a] > smax && arr[a] != max)
		  {
			  smax = arr[a];
		  }
		  
		  
	  }
	  
	  System.out.println("Largest number: " + max);
      System.out.println("Second largest number: " + smax);

	}

}
